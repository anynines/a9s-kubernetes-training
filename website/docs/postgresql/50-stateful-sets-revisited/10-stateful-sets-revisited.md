---
id: stateful-sets-revisited
title: StatefulSets Revisited
---

This chapter directly connects to the [StatefulSet chapters](/kubernetes/80-stateful-sets/stateful-sets) of the Kubernetes tutorial. 

## Exercise 

**In case you have deleted these resources go back and re-create the final PostgreSQL StatefulSet presented there in the `pg` namespace.**

## A StatefulSet with Mulitple Replicas

A highgly available PostgreSQL cluster should have `2n+1 | n>= 1` cluster Pods. These Pods have to discover another as they need to establish network connections as part of the replication and cluster management communication.

### The Default is Replicas: 3

Throughout the remainder of this tutorial the default will be `replicas: 3` as the transition from `replicas: 1` to `replicas: 3` implies all challenges and subsequent scale-outs to `n>=2` such as `replicas: 5` will be much easier to handle.

## Creating a PostgreSQL StatefulSet with 3 Replicas

As a first step create a file `10-statefulset.yaml`:

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
  replicas: 3 # by default is 1
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

Apply it:

    kubectl apply -f `10-statefulset.yaml`

You should now see a StatefulSet with three Pods:

    kubectl get pods

Output:

    NAME                     READY   STATUS    RESTARTS   AGE
    [...]
    postgresql-sfs-0         1/1     Running   0          45m
    postgresql-sfs-1         1/1     Running   0          45m
    postgresql-sfs-2         1/1     Running   0          45m

There should also be the corresponding headless Service:

    kubectl get service postgresql-svc

Output:

    NAME             TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
    postgresql-svc   ClusterIP   None         <none>        5432/TCP   5h55m

## Cluster Connectivity

As stated earlier, in order to build a replicating PostgreSQL cluster, the individual cluster nodes must be able to communicate with another. 

Your first thought could be to create three headless Services, one for each member of the 3-replica StatefulSet but in fact this is not necessary. Kubernetes will automatically propagate `SRV` records [1] in its DNS system [2]. Go and see yourself:

Start a utility Pod:

    kubectl run -i --tty nspct --image=fischerjulian/nspct --restart=Never -- bash

As you already know you can lookup the Pod IP addresses of the StatefulSet using a DNS query such as:

    nslookup postgresql-svc.pg.svc.cluster.local

Output:

    Server:		10.96.0.10
    Address:	10.96.0.10#53

    Name:	postgresql-svc.pg.svc.cluster.local
    Address: 172.17.0.13
    Name:	postgresql-svc.pg.svc.cluster.local
    Address: 172.17.0.14
    Name:	postgresql-svc.pg.svc.cluster.local
    Address: 172.17.0.10

You also remember that the headless Service does not perform load balancing.

When boostrapping the Pods of the PostgreSQL we will need more control than this as we need to reach out to each Pod by its role or even its name. Reaching to a particular node in the StatefulSet is simple as shown in the following.

Within the utility Pod `nspct` execute:

    host -t SRV postgresql-svc.pg.svc.cluster.local

Output:

    postgresql-svc.pg.svc.cluster.local has SRV record 0 33 5432 postgresql-sfs-0.postgresql-svc.pg.svc.cluster.local.
    postgresql-svc.pg.svc.cluster.local has SRV record 0 33 5432 postgresql-sfs-1.postgresql-svc.pg.svc.cluster.local.
    postgresql-svc.pg.svc.cluster.local has SRV record 0 33 5432 postgresql-sfs-2.postgresql-svc.pg.svc.cluster.local.

This means that each Pod of the StatefulSet has a stable unique network identifier depending on the name of the headless Service as well as the namespace:

1. `postgresql-sfs-0.postgresql-svc.pg.svc.cluster.local` -> Pod 0
2. `postgresql-sfs-1.postgresql-svc.pg.svc.cluster.local` -> Pod 1
3. `postgresql-sfs-2.postgresql-svc.pg.svc.cluster.local` -> Pod 2

Knowing that each node runs a PostgreSQL on port `5432` this means that you can connect to each Pod's PostgreSQL using a reliable and predictable URL, here using `telnet` on the `nspect` Pod:

    telnet postgresql-sfs-0.postgresql-svc.pg.svc.cluster.local 5432

Output:

    Connected to postgresql-sfs-0.postgresql-svc.pg.svc.cluster.local.
    Escape character is '^]'

Hence, it is also possible to reachout from one StatefulSet Pod to another using these SRV records.

# Links

1. Wikipedia, SRV Record, https://en.wikipedia.org/wiki/SRV_record
2. Kubernetes Documentation, Tutorials, StatefulSet Basics, https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/
