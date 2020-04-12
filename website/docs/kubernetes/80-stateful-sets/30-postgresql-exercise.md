---
id: stateful-set-postgresql
title: PostgreSQL Exercise
---

## The Container Image

An essential part of the StatefulSet for PostgreSQL is the database server itself. Luckily, there is not need to containerize PostgreSQL as this as already been done. Hence, use the official PostgreSQL Docker Image found at DockerHub [1]. Pause this tutorial for a second and have a quick look at the [description of the container image](https://hub.docker.com/_/postgres). This is where you find how the container image can be parameterized which forms the main challenge of creating the StatefulSet. In particular, this is where you find out how to set a proper password. Try to find the corresponding setting yourself so that you understand the structure of the Secret described in the next section.

## Creating a Secret

Create a PostgreSQL secret containing the password for the admin user:

    kubectl create secret generic postgresql-secrets --from-literal=POSTGRES_PASSWORD=tes6Aev8

Verify its creation:

    kubectl describe secret postgresql-secrets

## Creating a Service

In order to provide a stable network identity to address the PostgreSQL server create a headless services by creating the file `10-service.yaml`:

```YAML
    apiVersion: v1
    kind: Service
    metadata:
    name: postgresql-svc
    labels:
        app: postgresql-a
    spec:
    ports:
    - port: 5432
        name: postgresql-port
    clusterIP: None
    selector:
        app: postgresql-a
```

Create the service:

    kubectl apply -f 10-service.yaml

## Creating the StatefulSet

Now, with the preliminaries covered, the actual StatefulSet can be created in `30-stateful-set.yaml`:

```YAML
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgresql-sfs
spec:
  selector:
    matchLabels:
      app: postgresql-a # has to match .spec.template.metadata.labels
  serviceName: "postgresql-svc"
  replicas: 1 # by default is 1
  template:
    metadata:
      labels:
        app: postgresql-a # has to match .spec.selector.matchLabels
    spec:
      terminationGracePeriodSeconds: 10
      containers:
      - name: postgresql-db
        image: postgres:12.2
        env:
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-secrets
              key: POSTGRES_PASSWORD
        ports:
        - containerPort: 5432
          name: postgresql-port
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "default"
      resources:
        requests:
          storage: 1Gi
```
Have you noticed how the secret is mounted as an environment variable as described in the container image description [1]?

Also notice the `volumeClaimTemplates` section. The term *Volume Claim Template* indicates that this is not a Volume Claim. Consider the StatefulSet has specified more than mulitple `replicas`, let's say three (3). In this case three Persistent Volume Claims need to be created. As each PVC is then parameterized with the individual replica's Pod identity, the actual Persistent Volume Claims are similar but not identical. The Persistent Volume Claim Template describes their commonalities.

Execute the spec:

    kubectl apply -f 30-stateful-set.yaml

List the StatefulSets:

    kubectl get statefulsets

Describe the StatefulSet:

    kubectl describe statefulset postgresql-sfs

In case your StatefulSet doesn't become ready you may want to investigate its Pod which can be selected using a Label.

List the Pods of the StatefulSet by using its label `app=postgresql-a`:

    kubectl get pods -l app=postgresql-a

Your Pod may have entered the `CrashLoopBackOff` state as is failed to start several times in a row so it's time to do some detective work.

By listing the Pods you have obtained the Pod name `postgresql-sfs-0`. The name perfectly demonstrates the Pod identity that comes as number `0` attached to the StatefulSet name `postgresql-sfs`.

Retrieve the Pod's logs:

    kubectl logs postgresql-sfs-0

And you should see the entry:

    The files belonging to this database system will be owned by user "postgres".
    This user must also own the server process.

    The database cluster will be initialized with locale "en_US.utf8".
    The default database encoding has accordingly been set to "UTF8".
    The default text search configuration will be set to "english".

    Data page checksums are disabled.

    initdb: error: directory "/var/lib/postgresql/data" exists but is not empty
    It contains a lost+found directory, perhaps due to it being a mount point.
    Using a mount point directly as the data directory is not recommended.
    Create a subdirectory under the mount point.

The PostgreSQL Image description [1] says:

> PGDATA This optional variable can be used to define another location - like a subdirectory - for the database files. The default is /var/lib/postgresql/data. If the data volume you're using is a filesystem mountpoint (like with GCE persistent disks) or remote folder that cannot be chowned to the postgres user (like some NFS mounts), Postgres initdb recommends a subdirectory be created to contain the data.

This means we have to tell PostgreSQL to change it's data directory to something like `/var/lib/postgresql/data/pgdata` by passing the path using the `PGDATA` environment variable.

```YAML
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgresql-sfs
spec:
  selector:
    matchLabels:
      app: postgresql-a # has to match .spec.template.metadata.labels
  serviceName: "postgresql-svc"
  replicas: 1 # by default is 1
  template:
    metadata:
      labels:
        app: postgresql-a # has to match .spec.selector.matchLabels
    spec:
      terminationGracePeriodSeconds: 10
      containers:
      - name: postgresql-db
        image: postgres:12.2
        env:
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-secrets
              key: POSTGRES_PASSWORD
        - name: PGDATA
          value: /var/lib/postgresql/data/pgdata
        ports:
        - containerPort: 5432
          name: postgresql-port
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "default"
      resources:
        requests:
          storage: 1Gi
```

First delete the existing StatefulSet:

    kubectl delete statefulset postgresql-sfs

There is no problem with the Peristent Volume as it's empty (beside of the `lost+found` folder). So with the newly introduced environment variable `PGDATA` you can apply the spec again:

    kubectl apply -f 30-stateful-set.yaml

And by executing:

    kubectl get statefulset postgresql-sfs

You should see the StatefulSet being `RUNNING`.

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

Similar to a ReplicaSet, a StatefulSet is more than just a (collection of) Pods. There is a StatefulSet Controller watching your Pods like guardian angel. Let's put the guardian angel to a test!

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

## Conclusions

StatefulSets and Persistent Volumes are the Kubernetes means to operate data services. Especially in conjunction with Persistent Volume Provisioners [2] the creation of data service instances becomes manageable as Persistent Volumes are being created on-demand.

However, creating and managing a larget set of StatefulSet and Persistent Volumes become a tideous task as the templates above need to be modified and kept track of.

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