---
id: replication-user
title: Creating a Replication User
---

Previously we have created a StatefulSet that now requires a replication user on the Primary to allow Secondaries to connect. In order to achieve this the following steps are taken:

1. Determine the SQL commands to create the replication user
2. Write and test an idempotent script to create the user
3. Containerize and test the script

This follows the principle *Operational Model First, Automation Second* [1]. Before the automation is written, it must be clear what to achieve and how a sysop would do it. This it the operational model. What needs to be done and which exceptions are to be expected. This it the input for automating the procedure with a script.

The script should be idempotent so that it can be executed several times causing the desired effect only once. Running the script repeatedly may happen when:

* Running a script during Pod startup.
* Retrying to execute a script that failed to run earlier.

In order to make the script idempotent it must be checked if the replication user already exists:

```sql
SELECT COUNT(rolname) FROM pg_catalog.pg_roles WHERE rolname = 'replicator'
```

The goal is to create a replication user by executing the following SQL command:

```sql
CREATE USER replicator WITH REPLICATION ENCRYPTED PASSWORD 'aREPL1C4Ti0NxLI6Eeth'
```

`aREPL1C4Ti0NxLI6Eeth` should be replaced with a value from the corresponding Kubernetes Secret:

    kubectl create secret generic postgresql-replication-user --from-literal=POSTGRES_REPLICATION_PASSWORD=aREPL1C4Ti0NxLI6Eeth --from-literal=POSTGRES_REPLICATION_USERNAME=replicator

Obviously - as with all passwords in this tutorial - a different password should be chosen.

The replication user `replicator` will be created in a separate container. Note, that the usage of initContainers here is tricky as the initContainer is executed before PostgreSQL has been started. This doesn't work as creating a user obviously requires the database to be running. Theoretically, PostgreSQL could be started temporarily but this appears to be inelegant. We'll come back to this matter later.

In order to prepare each Pod to become the Primary, the replication user will be created in all Pods of the StatefulSet. Before such a container can be instantiated, an idempotent script for creating the replication user needs to be created.

## The Script

The script `create-replication-user.rb` is written in Ruby [4].

It reads the environment variables:

* `POSTGRES_HOSTNAME`
* `POSTGRES_DATABASE`
* `POSTGRES_USERNAME`
* `POSTGRES_PASSWORD`
* `POSTGRES_REPLICATION_USERNAME`
* `POSTGRES_REPLICATION_PASSWORD`

The script can be executed in two "directions": `up` and `down`. Similar to database migrations in Ruby on Rails `up` will create the replication user while `down` will remove it. The script is idempotent which means running the script several times in either direction won't change the result neither will it raise an error.

```ruby
#!/usr/bin/ruby

# https://bundler.io/v2.0/guides/bundler_in_a_single_file_ruby_script.html
require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'pg'
end

# https://deveiate.org/code/pg/
require 'pg'
require 'pp'


# One possible abstraction of this class would be a Rails-Migration like pattern 
# to execute SQL statements in both directions create/delete, forward/backward, ...
class CreateReplicationUserIfNotExistsAction

  def initialize
    # Required environment variables
    @postgres_hostname = ENV['POSTGRES_HOSTNAME'] || 'localhost'
    @postgres_database = ENV['POSTGRES_DATABASE'] || 'postgres'
    @postgres_username = ENV['POSTGRES_USERNAME'] || 'postgres'
    @postgres_password = ENV['POSTGRES_PASSWORD'] || 'tes6Aev8'
    @postgres_replication_username = ENV['POSTGRES_REPLICATION_USERNAME'] || 'replicator'
    @postgres_replication_password = ENV['POSTGRES_REPLICATION_PASSWORD'] || 'aREPL1C4Ti0NxLI6Eeth'
  end

  protected

  # True if the replication user exists, false otherwise
  # Improves readability.
  def replication_user_exists?(connection)
      result = connection.exec "SELECT COUNT(rolname) FROM pg_catalog.pg_roles WHERE rolname = '#{@postgres_replication_username}'";
      if result[0]["count"].to_i == 1 then
        # Does exist
        return true
      elsif result[0]["count"].to_i == 0
        # Does not exist    
        return false
      end
  end

  # Idempotency. Checks if the user exists and creates it if not.
  def create_replication_user_if_not_exists(connection)      
      if replication_user_exists?(connection) then
        puts "The replication user #{@postgres_replication_username} already exists. Doing nothing."
      else
        puts "The replication user #{@postgres_replication_username} doesn't exist. Creating it..." 
        create_replication_user(connection)
        puts "Done creating the replication user."
      end
  end

  def delete_replication_user_if_exists(connection)
    if replication_user_exists?(connection) 
      puts "The replication user #{@postgres_replication_username} exists and will now be deleted..."
      delete_replication_user(connection)
      puts "Done deleting the replication user."
    else
      puts "The replication user #{@postgres_replication_username} doesn't exist. There is nothing to delete. Done."
    end    
  end

  # Creates the user imperatively without checking.
  def create_replication_user(connection)
    result = connection.exec "CREATE USER #{@postgres_replication_username} WITH REPLICATION ENCRYPTED PASSWORD '#{@postgres_replication_password}'"    
  end

  def delete_replication_user(connection)
    result = connection.exec "DROP ROLE #{@postgres_replication_username}"    
  end

  public

  # Create the replication user idempotently.
  def up    
    begin
      connection = PG.connect :host => @postgres_hostname, :dbname => @postgres_database, :user => @postgres_username, :password => @postgres_password    
      create_replication_user_if_not_exists(connection)      
    rescue PG::Error => e
        puts "PG::Error occurred: " + e.message     
        exit(false) # signal a failure by using a non-zero exit code.
    ensure
        connection.close if connection        
    end
  end

  # Delete the replication user idempotently.
  def down
    begin
      connection = PG.connect :host => @postgres_hostname, :dbname => @postgres_database, :user => @postgres_username, :password => @postgres_password
      delete_replication_user_if_exists(connection)
    rescue PG::Error => e
        puts "PG::Error occurred: " + e.message            
        exit(false) # signal a failure by using a non-zero exit code.
    ensure
        connection.close if connection 
    end
  end
end

#TODO Add Unit Tests
puts "Executing CreateReplicationUserIfNotExistsAction."
direction = ARGV[0] || "up"
puts "Direction: #{direction}..."

action = CreateReplicationUserIfNotExistsAction.new

if direction.eql?("up") then
  action.up
else
  action.down
end

puts "Done executing CreateReplicationUserIfNotExistsAction."
exit(true)
```

Now that the script is ready, it must be injected into the Primary Pod. Previously we have used a ConfigMap to inject a script into a container. This has the disadvantage that the script is duplicated for each service instance to keep instance lifecycles independent from another. While this works at a small scale and during development, it can be doubted whether this approach will hold up at a large scale.

We therefore chose a different route for the `create-replication-user.rb` script and will containerize it.

### Containerizing the Script

In order to containerize the script, the first step is choosing a base image.
Then a container image must be created and published. Finally, the container image must be executed using a Kubernetes resource to schedule a Pod.

#### Selecting the Base Image
For executing Ruby the official Docker images can be used [2].
They come in different variants such as the default (`<version>`), slim (`<version>-slim`) and alpine (`<version>-alpine`).

The default and slim variants are based on Debian. They provide many useful tools and the full power of `apt`. However, they are sizable images.
For this reason the preferred smaller image variant is `alpine`. Use it whenever possible if the situation permits.

In order to build the `pg` Gem [3] the regular Debian base image is convenient to use as it ships the necessary dependencies.

```Dockerfile
FROM ruby:2.7
WORKDIR /app
COPY create-replication-user.rb /app
CMD ["/usr/local/bin/ruby", "/app/create-replication-user.rb", "up"]
```

The workflow to build and publish the container image is similar to:

    docker build -t a8s-pg-utilities .
    docker tag create-replication-user:latest fischerjulian/a8s-pg-utilities:latest
    docker push fischerjulian/a8s-pg-utilities:latest

The container image will allow the creation and deletion of the given replication user by specifying an optional argument:

```yaml
...
command: ["/usr/local/bin/ruby"]
args:
- "/app/create-replication-user.rb"
- "down"
...
```
`"up"` will create the replication user while `"down"` will delete it.
The action is idempotent in both directions.

### Executing the Script

The next decision to be made is: how to execute the script.

So it's worth thinking about what and when a replication user has to be created. For single node databases - that is `replicas: 1` - a replication user **is not needed**. Only if `replicas` is set to a value `2n * 1` with `n>=1` such as `3, 5, ...` a replication user is required. 

If you want to be prepared for automation failovers - where a Primary fails and one of the Secondaries is being elected and promoted to become the new leader - we need to create a replication user on each cluster node.

This is necessary to turn a Secondary into a primary node. In a `replicas: 3` scenario, this means 3 replica users will have to be created. One on each node.

It would therefore be desirable to have a way to declare wether a replication user is necessary or not. Then - comparing the desired vs. actual state - some kind of *controller* could ensure that the script is run.

Withouth such a controller one way to execute the script is using a Job.

The Job description pasted into `70-job-create-replication-user.yaml` looks like this:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: pg-create-replication-user
spec:
  template:
    spec:
      containers:
      - name: create-replication-user
        image: fischerjulian/a8s-pg-utilities:0.1.0
        env:
        # if the username is not set the script will assume the user "postgres"
        # - name: POSTGRES_USERNAME
        #   valueFrom:
        #     secretKeyRef:
        #       name: postgresql-secret-2
        #       key: POSTGRES_USERNAME
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-secrets
              key: POSTGRES_PASSWORD
        - name: POSTGRES_HOSTNAME
          value: postgresql-primary.pg.svc.cluster.local
        - name: POSTGRES_REPLICATION_USERNAME
          valueFrom:
            secretKeyRef:
              name: postgresql-replication-user
              key: POSTGRES_REPLICATION_USERNAME
        - name: POSTGRES_REPLICATION_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-replication-user
              key: POSTGRES_REPLICATION_PASSWORD
                           
        # imagePullPolicy: Always
        command: ["/usr/local/bin/ruby"]
        args:
        - "/app/create-replication-user.rb"
        - "up"
      restartPolicy: OnFailure
```

For now it will be sufficient to run the Job to target the Primary. Later, when leader election will be implemented, the replication user must be created on all Pods.

Create the Job to execute the `create-replication-user.rb` script:

    kubectl apply -f 70-job-create-replication-user.yaml

Verfiy this by connecting to the Primary and executing the following SQL command:

```SQL
SELECT rolname FROM pg_catalog.pg_roles;
```

You should see the replication user.

After a few seconds your StatefulSet should have converged into the following state:

    NAME                               READY   STATUS      RESTARTS   AGE
    pg-create-replication-user-zxt5c   0/1     Completed   0          139m
    postgresql-sfs-0                   1/1     Running     0          138m
    postgresql-sfs-1                   1/1     Running     0          138m
    postgresql-sfs-2                   1/1     Running     0          138m

We have now covered all necessary steps to set up the streaming replication.

## Summary

After defining the StatefulSet with its `3` replicas, a script to create the replication user had to be created. The script has been implemented to be idempotent which allows running it several times while the replication user is only created once. We had to make a decision how to deliver the script to the StatefulSet's Pods and chose to containerize it as a *utility* container image. This makes sense as the script will be shared across all data service instances and is unlikely to be changed very often.

With all the work you have invested so far, it is now time to use the streaming replication and verify that it's working as expected.


## Links
1. An Introduction to Data Service Automation, Julian Fischer, {LINK TO BE DONE}
2. Ruby Docker Image on Dockerhub, https://hub.docker.com/_/ruby
3. Ruby PostgreSQL `pg` Gem, https://rubygems.org/gems/pg
4. Ruby, https://www.ruby-lang.org/
