---
id: stateful-set-postgresql
title: PostgreSQL StatefulSet
---

## Related Videos
<video
  url={[
    "https://www.youtube-nocookie.com/embed/ewku1iuQQ-A"
  ]}
  controls={true}
/>

---

In the following set of exercises StatefulSets are presented in a practical manner. The PostgreSQL [11] RDBMS is used as an example as the database is both widely known and of great utility to any developer. The goal of the exercises are not to build a production grade automation for PostgreSQL but to illustrate StatefulSet concepts.

## Designing the StatefulSet

In order to create the PostgreSQL StatefulSet we proceed with the following steps:

* Identify or build (a) container image(s)
* Specify a headless Service
* Specify a StatefulSet
* Provision the Service and StatefulSet
* Conduct simple experiments

Start with finding a container image.

## The Container Image

An essential part of the StatefulSet for PostgreSQL is the database server itself. Luckily, there is no need to containerize PostgreSQL as this as already been done. Hence, use the official PostgreSQL Docker Image found at Docker Hub [1]. Pause this tutorial for a second and have a quick look at the [description of the container image](https://hub.docker.com/_/postgres). This is where you'll find how the container image can be parameterized - a major challenge when creating the PostgreSQL StatefulSet. In particular, this is where you find out how to set a proper password. Try to find the corresponding setting yourself so that you understand the structure of the Secret described in the next section.

## Creating a Secret

Starting PostgreSQL requires an administrator password which will be stored as a Secret.

Create a PostgreSQL Secret containing the password for the admin user:

    kubectl create secret generic postgresql-secrets --from-literal=POSTGRES_PASSWORD=tes6Aev8

Verify its creation:

    kubectl describe secret postgresql-secrets

## Creating a Service

In order to provide a stable network identity to address the PostgreSQL server create a headless services by creating the file `10-service.yaml`:

```yaml
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

The attribute `clusterIP: None` of the Service specification denotes that this is a **headless Service**.

Create the Service:

    kubectl apply -f 10-service.yaml

Inspect the Service:

    kubectl describe service postgresql-svc

The output should be similar to:

    Name:              postgresql-svc
    Namespace:         default
    Labels:            app=postgresql-a
    Annotations:       Selector:  app=postgresql-a
    Type:              ClusterIP
    IP:                None
    Port:              postgresql-port  5432/TCP
    TargetPort:        5432/TCP
    Endpoints:         172.17.0.5:5432
    Session Affinity:  None
    Events:            <none

Pay attention to the `IP` attribute.

Normally, a Kubernetes Service has a cluster-internal IP address as seen in the [Service example](/kubernetes/replicaset-and-service/services) of the [ReplicaSet lesson](/kubernetes/replicaset-and-service/introduction). Requests to the Service IP are then load balanced across the Service endpoints, e.g. Pods binding to the Service by using matching Labels.

In contrast to a regular Service, **a headless Service does not have a cluster IP address**. This is why it is declared using the `ClusterIP: None` declaration.

So in contrast to a standard Service, **a headless Service does not perform load balancing**. Depending on the selectors defined for the Service cluster-internal **DNS entries will be created**.

## Creating the StatefulSet

Now, with the preliminaries covered, the actual StatefulSet can be created in `30-stateful-set.yaml`:

```yaml
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
        image: postgres:14.5
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
      resources:
        requests:
          storage: 1Gi
```
Have you noticed how the Secret is mounted as an environment variable as described in the container image description [1]?

Also notice the `volumeClaimTemplates` section. The term *Volume Claim Template* indicates that this is not a Persistent Volume Claim (PVC). Consider the StatefulSet has specified multiple `replicas`, three (3) for instance. In this case three Persistent Volume Claims need to be created. As each PVC is then parameterized with the individual replica's Pod identity, the actual Persistent Volume Claims are similar but not identical. The Persistent Volume Claim Template describes their commonalities.

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
    It contains a lost+found directory, perhaps due to it being a mountpoint.
    Using a mountpoint directly as the data directory is not recommended.
    Create a subdirectory under the mountpoint.

The PostgreSQL Image description [1] says:

> PGDATA This optional variable can be used to define another location - like a subdirectory - for the database files. The default is /var/lib/postgresql/data. If the data volume you're using is a filesystem mountpoint (like with GCE persistent disks) or remote folder that cannot be chowned to the postgres user (like some NFS mounts), Postgres initdb recommends a subdirectory be created to contain the data.

This means we have to tell PostgreSQL to change its data directory to something like `/var/lib/postgresql/data/pgdata` by passing the path using the `PGDATA` environment variable.

```yaml
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
        image: postgres:14.5
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
      resources:
        requests:
          storage: 1Gi
```

First delete the existing StatefulSet:

    kubectl delete statefulset postgresql-sfs

There is no problem with the Persistent Volume as it's empty (beside of the `lost+found` folder). So with the newly introduced environment variable `PGDATA` you can apply the spec again:

    kubectl apply -f 30-stateful-set.yaml

And by executing:

    kubectl get statefulset postgresql-sfs

You should see the StatefulSet being `RUNNING`.

Congratulations! You have deployed your first StatefulSet.

## Links
1. PostgreSQL Docker Image at Docker Hub, https://hub.docker.com/_/postgres
2. Kubernetes Examples on GitHub, Persistent Volume Provisioning, https://github.com/kubernetes/examples/blob/master/staging/persistent-volume-provisioning/README.md
3. PostgreSQL Documentation - psql, https://www.postgresql.org/docs/12/app-psql.html
4. Kelsey Hightower @ Twitter, https://twitter.com/kelseyhightower/status/935252923721793536?lang=en
5. Cloud Foundry, https://www.cloudfoundry.org/
6. Open Service Broker API, https://www.openservicebrokerapi.org/
7. anynines, a9s Data Services, https://www.anynines.com/data-services
8. Kubernetes Documentation, Concepts, ServiceCatalog, https://kubernetes.io/docs/concepts/extend-kubernetes/service-catalog/
9. Wikipedia, Principle of Least Privilege, https://en.wikipedia.org/wiki/Principle_of_least_privilege
10. Kubernetes Documentation, Concepts, Services Networking, Service, https://kubernetes.io/docs/concepts/services-networking/service/#headless-services
11. PostgreSQL, https://www.postgresql.org/
