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

    kubectl get statefulset postgresql-sfs

kubectl get statefulset postgresql-sfs

## Accessing the Database

### Shell

### Application

## Conclusions

StatefulSets and Persistent Volumes are the Kubernetes means to operate data services. Especially in conjunction with Persistent Volume Provisioners [2] the creation of data service instances becomes manageable as Persistent Volumes are being created on-demand.

However, creating and managing a larget set of StatefulSet and Persistent Volumes become a tideous task as the templates above need to be modified and kept track of.

## Links
1. PostgreSQL Docker Image at DockerHub, https://hub.docker.com/_/postgres
2. Kubernetes Examples on GitHub, Persistent Volume Provisioning, https://github.com/kubernetes/examples/blob/master/staging/persistent-volume-provisioning/README.md