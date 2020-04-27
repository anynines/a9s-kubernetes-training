---
id: stateful-set-postgresql-4
title: PSQL Access to PostgreSQL
---

## Accessing the Database using `psql`

After deploying the PostgreSQL server it's time to verify whether there's actually a database running.

For the purpose of a brief test it would be nice to have an interactive container running the `psql` command, the command line tool to access PostgreSQL.

    kubectl run pg-psql -i --tty --image=postgres:12.2 --restart=Never --env="PGPASSWORD=tes6Aev8" -- psql -h postgresql-svc.k8s-training-test.svc.cluster.local -U postgres
  
This starts an interactive container (`-i --tty`) based on the same container image you have used for the database server (`postgres:12.2`). The container shall never restart (`--restart=Never`). The container is not started with the default command configured in the container image. Instead, the option `-- psql` (not the space) replaces the default start command (the PostgreSQL server) with the PostgreSQL command line client. There is no PostgreSQL server running in this container, so that you have to tell `psql` where to connect and how to authenticate. Noete, that `psql` read the password from a different environment variable as the container image does for the server. Details on how to use `psql` can be found in the official PostgreSQL documentation [3]. While it is possible to pass a server host using the `-h` option as well as a user using the `-U` option, the password has to be passed as an environment variable. Among other reasons, this avoids listing the password in a shell history file.

Have a close look at the DNS name used to connect to the PostgreSQL Kubernetes Service we have created earlier:

    postgresql-svc.k8s-training-test.svc.cluster.local

This implies that the internal default URL of your Kubernetes cluster is `cluster.local` which may be different in other Kubernetes environments. Try to capture the canonical naming scheme of the DNS entry:

    <service-name>.<namespace>.svc.<internal-cluster-default-domain>

Remember this pattern as it allows you to build your own ad-hoc host-names and throw-away access containers for testing purposes like this.

After creating the container you should see a promt. Type `\l` and you should see a list of databases:

    postgres=# \l
                                    List of databases
      Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges
    -----------+----------+----------+------------+------------+-----------------------
    postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
    template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
              |          |          |            |            | postgres=CTc/postgres
    template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
              |          |          |            |            | postgres=CTc/postgres
    (3 rows)

    postgres=#

### Write to the Database

While still being in the `psql` terminal select the `postgresql` database by typing `\c`:

    postgres=# \c postgres;
    You are now connected to database "postgres" as user "postgres".
    postgres=#

Let's create a table by pasting the following SQL command:

    CREATE TABLE COMPANY(
      ID INT PRIMARY KEY     NOT NULL,
      NAME           TEXT    NOT NULL
    );  

And also a first record:

    INSERT INTO COMPANY (ID, NAME) VALUES (1, 'anynines GmbH');

Type `\q` to quit `psql` and terminate the Pod.

Delete the Pod:

    kubectl delete pod pg-psql

Now your database still exists.

## Disturbing the StatefulSet

As shown earlier, a StatefulSet is more than just a (collection of) Pods. There is a StatefulSet Controller watching your Pods like guardian angel. Now that we have data in our PostgreSQL instance, let's put the guardian angel to another test.

Obtain the name of the StatefulSet's Pod:

    kubectl get pods -l app=postgresql-a

Now, simulate the failure of a Pod by destroying it:

    kubectl delete pod postgresql-sfs-0

And watch what happens - but be fast as the show is over quickly:

    kubectl get pods -l app=postgresql-a -w

You should first see that the container is creating again:

    NAME               READY   STATUS              RESTARTS   AGE
    postgresql-sfs-0   0/1     ContainerCreating   0          0s

And soon after that it has been fully recovered:

    NAME               READY   STATUS    RESTARTS   AGE
    postgresql-sfs-0   1/1     Running   0          35s

Now 

    kubectl run pg-psql -i --tty --image=postgres:12.2 --restart=Never --env="PGPASSWORD=tes6Aev8" -- psql -h postgresql-svc.k8s-training-test.svc.cluster.local -U postgres

And in ´psql`:

    \c postgres
    SELECT * FROM COMPANIES;

You should see:

    postgres=# SELECT * FROM COMPANY;
    id |     name
    ----+---------------
      1 | anynines GmbH
    (1 row)

Which means that the data stored in the PostgreSQL container has surved the failure of it's Pod although the Pod itself is stateless. This is possible as you have mounted the data directory of PostgreSQL to the mounted Persistent Volume whose lifecycle goes beyond that of a Pod. When you manually deleted the Pod, **the actual state of the StatefulSet** has been changed and caused a deviation from **the desired state of the StatefulSet**. This deviation has been noticed by the StatefulSet controller which has then taken corrective measures and told the Kubernetes system to create another Pod - with the same identity and the mounting the same Persistent Volume. **Welcome to the world of declarative configuration**! The description of the StatefulSet is declarative as a user declares how the StatefulSet should look like rather than that Kubernetes should create a Pod and a Persistent Volume. The StatefulSet controller is put in charge of taking all actions necessary to ensure a minimum deviation from the desired state. **This way your database gets self-healing capabilities with a disaster recovery time of a few seconds**!

## Links
1. PostgreSQL Docker Image at DockerHub, https://hub.docker.com/_/postgres
2. Kubernetes Examples on GitHub, Persistent Volume Provisioning, https://github.com/kubernetes/examples/blob/master/staging/persistent-volume-provisioning/README.md
3. PostgreSQL Documentation - psql, https://www.postgresql.org/docs/12/app-psql.html
4. Kelsey Hightower @ Twitter, https://twitter.com/kelseyhightower/status/935252923721793536?lang=en
5. Cloud Foundry, https://www.cloudfoundry.org/
6. Open Service Broker API, https://www.openservicebrokerapi.org/
7. anynines, a9s Data Services, https://www.anynines.com/data-services
8. Kubernetes Documentation, Concepts, ServiceCatalog, https://kubernetes.io/docs/concepts/extend-kubernetes/service-catalog/
9. Wikipedia, Principle of Least Privilege, https://en.wikipedia.org/wiki/Principle_of_least_privilege