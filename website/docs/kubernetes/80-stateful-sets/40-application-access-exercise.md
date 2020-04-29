---
id: stateful-set-application-access
title: Application Access to a StatefulSet
---

## Application Access

After setting up the database and connecting to it using the `psql` utility, the next step is to access the database with an application running on Kubernetes.

At this point we should rember that Kubernetes is not a fully featured platform but rather platform for building platforms [4]. So in contrast to technologies such as Cloud Foundry [5] there is no such thing as a Service Binding as defined in the Open Service Broker API [6] where application developers can bind apps to service instances such as PostgreSQL with a single command. This will then create a dedicated database user which will be deleted if the application is unbound from the service. This requires a so called Service Broker such as implemented by the a9s Data Services [7] which can then be integrated with Cloud Foundry and Kubernetes. The integration of Service Brokers with Kubernetes requires the Service Catalog extension [8]. However, this lesson is about core Kubernetes so Service Bindings won't be covered in detail. 

With the absense of Service Bindings we fall back to using Kubernetes Secrets as covered in earlier chapters. Hence, with a bare Kubernetes it is up to the user to manage Secrets to grand and/or revoke access to StatefulSets.

You may ask yourself **why not use the existing `postgres` user**?

In non-production applications - where security is not a concern - using the `postgresql` is possible. However, for production grade applications, it makes sense to stick to the *least privilege principle* [9]. According to this principle, the application user should be limited to the minimum set of privileges necesseary to carry out the application's tasks. Consequently, an application user should not be granted admin privileges unless absolutely necessary. 
Another major drawback of using shared credentials among users is that the credentials have to be changed if a user is removed. Think about a team member who knew the `postgresql` password and then left the team. In order to secure access to the database, the password needs to be changed. If the password is used by ten other users including application machine users, the effort for updating the password is highly wasteful.
With a dedicated set of credentials - a database username and password - per user is therefore much simpler. It allows revoking access or modifying privileges on a per user level easily.

## Example

In this example you will create a another Secret, deploy a simple application and gran the application access to the PostgreSQL StatefulSet.

### The Example Application

The example uses a very [simple web app [1]](https://golang.org/) written in Go [2]. The corresponding container image can be found on [DockerHub [3]](https://hub.docker.com/repository/docker/fischerjulian/smpl-go-pg).

The app is not meant to show state-of-the-art Go code and is soley used for didactic purposes of this training.

The container image can be referenced from a Pod definition as:

    fischerjulian/smpl-go-pg:0.2.0

Even without knowledge of the Go language, it is easy to identify the section in the [source code](https://github.com/fischerjulian/smpl-go-pg/blob/master/main.go) reading the access credentials.

The relevant part of the application is the following:

```go
postgresUsername := os.Getenv("POSTGRES_USERNAME")
postgresPassword := os.Getenv("POSTGRES_PASSWORD")
postgresHost := os.Getenv("POSTGRES_HOST")

connStr := "user=" + postgresUsername + " dbname=postgres sslmode=disable password=" + postgresPassword + " host=" + postgresHost
```

This reads the environment variables `POSTGRES_USERNAME`, `POSTGRES_PASSWORD` and `POSTGRES_HOST`. 

We do not plan to share the PostgreSQL instance so hardcoding the database name `postgresql` is ok, at least for this example.

Be aware that using environment variables has the drawback that the application needs to be re-deployed in order to update the environment variables, in case the Secret is being changed. As mentioned in an earlier lesson, the alternative would be to mount the Secret as a file and let the application re-read it from time to time. For this example, environment variables will do the trick.

In order to keep the application independent from a particular instance of the PostgreSQL StatefulSet we need a Secret consisting of the following elements:

* Username
* Password
* Hostname

The username and password can be created along with the Secret. 

As this is a machine user, using a cryptic username makes it harder to guess and the application doesn't care about the password complexity.

| Username | Password |
|----------|----------|
| gaeMo6di | UaGu5chu |

The hostname is determined by the headless Service you have created earlier.

The dns hostname of the Service `postgresql-svc` in the Namespace `k8s-training` for a Kubernetes cluster with the cluster domain `cluster.local` is then:

    postgresql-svc.k8s-training.svc.cluster.local

In order to bring the username and password to life, you need to create a database user.

### Creating the Database User

In the previous lesson, you have used a separate Pod to connect to the PostgreSQL database to demontrate a remote access. In this case, all you want is to create a database user. The easier way to get to the database is to **start a shell directly on the database Pod**:

    kubectl exec -it postgresql-sfs-0 -- bash

Now, you are within the data service Pod and have access to PostgreSQL command line utilities such as `createuser`.

To get more information on which parameters need to passed to the command execute:

    createuser --help

The command pattern is:

    createuser [OPTION]... [ROLENAME]

Which leads to the following command:

    createuser --username=postgres -W gaeMo6di -P

This needs explanation. 

The `--username=postgres` option is to authenticate the `createuser` command. You don't want anybody with shell access to create users and therefore authentication is necessary. The `postgres` user has sufficient rights to create new users.
The `-W` makes `psql` prompt for the password to authenticate the `postgresql` user. Use the `tes6Aev8` password - or your version of it - that you used during the creation of the PostgreSQL StatefulSet.

Then the `gaeMo6di` is the `[ROLENAME]` from the command pattern describe above. It's a bit confusing as you may read `-W gaeMo6di` as if `gaeMo6di` is an argument to the option `-W` but this is a false friend. `-W` is an option and `gaeMo6di` a stand-alone argument.
Finally, the `-P` makes the `createuser` command prompt for the password of the `gaeMo6di` user. Use the password `UaGu5chu` - or your alternative for it.

### Test the Database User

Note that, with the default config of PostgreSQL, using `psql` locally to verify the created user is pointless as PostgreSQL does not require a password authentication and trusts anybody connecting from `localhost`. This setting is not safe for productive use and means that you can't verify your password with it.

So to test the credentials we need a remote Pod:

    kubectl run pg-psql -i --tty --image=postgres:12.2 --restart=Never --env="PGPASSWORD=UaGu5chu" -- psql -h postgresql-svc.k8s-training.svc.cluster.local -U gaeMo6di -d postgres

You should see a `psql` prompt similar to:

    postgres=>

Done.

Ok, now that you have collected all pieces of information necessary, you can proceed with creating the Secret.

### Creating the Application Secret

First, create a separate Secret. As this is an additional Secret a unique name is required: `postgresql-secret-2`. 

You can see where this is going if a large number of StatefulSets and a large number of users is necessary. You will have to manage many Secrets.

To create the Secret `postgresql-secret-2` execute:

    kubectl create secret generic postgresql-secret-2 \
        --from-literal=POSTGRES_HOST=postgresql-svc.k8s-training.svc.cluster.local \
        --from-literal=POSTGRES_USERNAME=gaeMo6di \
        --from-literal=POSTGRES_PASSWORD=UaGu5chu

This creates three keys provided as literals corresponding to the aforementioned credentials.

Verify your Secret with:

    kubectl describe secret postgresql-secret-2

Check whether the desired key-value-pairs have been created:

    Name:         postgresql-secret-2
    Namespace:    k8s-training
    Labels:       <none>
    Annotations:  <none>

    Type:  Opaque

    Data
    ====
    POSTGRES_PASSWORD:  8 bytes
    POSTGRES_USERNAME:  8 bytes
    POSTGRES_HOST:      45 bytes

With the Secret being ready, it's time to think about the application deployment.

### Deploying the Application

Before thinking about more complex structures such as ReplicaSets or StatefulSets, you can start with a simple Pod. 
This will allow you to focus on mounting the Secret into the Pod. The idea is to start simple and take little steps. This keeps frustration low. Solving each little challenge also provides a little reward. Later if you are well practices, these little steps may become wasteful and larget steps become more economic.

In order to get the Secrets into the Pod you can use the Secret example from an early chapter which you will then modify incrementally.

This is the Secret example from the earlier lesson:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox-secrets
spec:
  containers:
    - image: busybox
      name: busybox-secrets-container
      command:
        - "env"
      env:
        - name: USERNAME
          valueFrom:
            secretKeyRef:
              name: area51
              key: username
        - name: PASSWORD
          valueFrom:
            secretKeyRef:
              name: area51
              key: password
  restartPolicy: Never
```

Create a file `40-postgressql-application.yaml`, paste the example from above and modify its content by performing the following steps:

1. Choose a name for the Pod such as `postgresql-application` and name the container respectively.
2. Adapt the name of the Secret from `area51` to `postgresql-secret-2`.
3. Copy one of the elements of the `env` array to define an additional environment variable.
4. Change the `name` attributes to match the env variable names and the `key` attributes to match the name of the keys in the corresponding Secrets. In this case the name for both the env variable `name` and the Secret `key` are identical.
5. Change the container image from `busybox` to `fischerjulian/smpl-go-pg:0.2.0`.
6. Remove the `command` section. The container image already defines a meaningful startup command.
7. Change the `restartPolicy` to `Always` as we want the web app to restart in case of a container failure.

The modified result looks like the following:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: postgresql-application
spec:
  containers:
    - image: fischerjulian/smpl-go-pg:0.2.0
      name: postgresql-application-container
      env:
        - name: POSTGRES_USERNAME
          valueFrom:
            secretKeyRef:
              name: postgresql-secret-2
              key: POSTGRES_USERNAME
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-secret-2
              key: POSTGRES_PASSWORD
        - name: POSTGRES_HOST
          valueFrom:
            secretKeyRef:
              name: postgresql-secret-2
              key: POSTGRES_HOST
      ports:
        - containerPort: 8080
          name: http
  restartPolicy: Always
```

    kubectl apply -f pgapp.yaml

    http://localhost:8001/api/v1/namespaces/k8s-training/services/http:postgresql-app-svc:8080/proxy/

    kubectl run -i --tty nspct --image=fischerjulian/nspct --restart=Never -- bash

    nslookup postgresql-app-svc.k8s-training.svc.cluster.local
    nslookup postgresql-svc.k8s-training.svc.cluster.local

> TODO Once, the Pod is created, ....
ReplicaSet ... Once the ReplicaSet is created ... Deployment.


## Links

1. Simple Go PostgreSQL Application, Julian Fischer @ Github, https://github.com/fischerjulian/smpl-go-pg
2. Golang, https://golang.org/
3. Simple Go PostgreSQL Application Container Image, Julian Fischer @ dockerhub, https://hub.docker.com/repository/docker/fischerjulian/smpl-go-pg