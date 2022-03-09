---
id: pg-service-primary
title: Service to Connect to the Primary
---

In the long run it must be possible to perform a leader election and leader promotion. 

The leader election algorithm will form a quorum and propose a new leader. The proposed leader will then have to be promoted to become the actual leader. In other words: any secondary may become the new primary eventually.

For now, we don't want to dive deeply into the details of leader election and leader promotion. So enough to say that **during the promotion of a leader, the "pointer" to the primary server must be in control of the leader promotion algorithm**.

In the previous chapter we have investigated how the headless Service of a StatefulSet creates `SRV` DNS entries acting as pointers to the StatefulSet's Pods. The problem with these DNS entries is that they are static. It's not a bug, it's a feature as we wished for a stable network identity of a Pod. In contrast to the volatile identity of Pods, for example in a ReplicaSet.

However, in this case of leader election more control over the headless Service's backend Pods is required. For this reason it is helpful to **create another instance of a headless Service which will always point to the current primary**.

## A Pointer to the Primary

The idea of the headless Service as a pointer to the current primary is simple: using a label such as `role=primary` applied to the primary Pod. This headless Service, let's call it `postgresql-primary` will be using according label as a selector. 

Before we explain how this will look like in a YAML specification, an undesired complication needs to be discussed: **bootstrapping a StatefulSet**. When bootstrapping a StatefulSet for the first time, no leader has been elected. Thus, none of the Pods of the StatefulSet is labeled as `primary` and therefore, the connection to the primary will fail. Subsequently, the `pg_backup` of secondaries fail which brings these Pods into an error state.

As a workaround for the missing `role=primary` label, the initial version of the `postgresql-primary` service will look different. As the StatefulSet provides ordinality in which each Pod has a defined identity by having numbers starting from `0` it is possible to **define a fixed primary - let's say `pod-0` - during the bootstrapping process**. For this purpose, we need a label to point to the first pod in a StatefulSet. Luckily, Kubernetes adds a label to each Pod automatically [1]. Each Pod automatically received a label corresponding to its name in the following form:

    statefulset.kubernetes.io/pod-name

For a StatefulSet with the name `postgresql-sfs` the name of the first Pod will be `postgresql-sfs-0` and its label `statefulset.kubernetes.io/pod-name=postgresql-sfs-0`.

So instead of selecting the `postgresql-primary` Service's backend Pod by using the `role=primary` label the label `statefulset.kubernetes.io/pod-name=postgresql-sfs-0` is used to point to our initial primary.

The initial Service to point to the primary can be created with the following `65-service-primary-init.yaml` file:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: postgresql-primary
  labels:
    app: postgresql-a
    role: primary
spec:
  ports:
  - port: 5432
    name: postgresql-port
  clusterIP: None
  selector:
      app: postgresql-a
      # role: primary
      statefulset.kubernetes.io/pod-name: postgresql-sfs-0
```

There are two labels active `app: postgresql-a` which selects the PostgreSQL StatefulSet from other Pods that could be residing in the same namespace as well as the `statefulset.kubernetes.io/pod-name: postgresql-sfs-0` which has been discussed earlier.

## Subsequent Leader Elections

There are costs for this workaround. During subsequent leader elections the logic promoting the new primary has to:

1. Update the label of the new primary to `role=primary`.
2. Ensure that no other Pod of the StatefulSet has this label.
3. Change the label selector of the `postgresql-primary` service from `statefulset.kubernetes.io/pod-name=postgresql-sfs-0` to `role=primary`.

Have you noticed the interesting question contained in task no. 2? How can be ensured that only a single Pod owns the `role=primary` label? Can this be achieved in a single linearized, automatic operation? If not, are we creating a vulnerability here that may lead to a multi-master situation? We leave this question to a later investigation and focus on the milestone to get a first StatefulSet with streaming replication up and running.

Modifying the Service in a later leader election is simple:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: postgresql-primary
  labels:
    app: postgresql-a
    role: primary
spec:
  ports:
  - port: 5432
    name: postgresql-port
  clusterIP: None
  selector:
      app: postgresql-a
      role: primary
      # statefulset.kubernetes.io/pod-name: postgresql-sfs-0
```

As you can see only a single line has changed on of the selectors.

You can edit the existing Service:

    kubectl edit service postgresql-primary

Or edit your local `65-service-primary-init.yaml` and re-apply it. Kubernetes will notice that the Service specification has changed and apply the changed selectors.

This will point to the Pod with both labels `app: postgresql-a` and `role: primary`. 

By reassigning this label to the newly elected primary, the leader promotion takes effect.

Later a cluster manager needs to perform failure detection and leader election. For now, it is good enough to set the label manually:

    kubectl label pod postgresql-sfs-0 role=primary

Verify:

    kubectl get pods -l role=primary

Output:

    NAME               READY   STATUS    RESTARTS   AGE
    postgresql-sfs-0   1/1     Running   1          7d2h

You can also verify that the Service now has a endpoint:

    Name:              postgresql-primary
    Namespace:         pg
    Labels:            app=postgresql-a
                    role=primary
    Annotations:       Selector:  app=postgresql-a,role=primary
    Type:              ClusterIP
    IP:                None
    Port:              postgresql-port  5432/TCP
    TargetPort:        5432/TCP
    Endpoints:         10.1.49.182:5432
    Session Affinity:  None
    Events:            <none>


The Service with a proper backend will create a DNS entry so that the following URL will resolve: `postgresql-primary.pg.svc.cluster.local`.

## Summary

Introducing a separate Service for resolving to the current primary will later help to perform a leader promotion. However, the behavior of Labels and Services must be closely investigated whether there are sufficient guarantees provided by Kubernetes to avoid creating downtimes or multi-master situations. This will be left for future investigations.

## Links

1. Kubernetes - Documentation - StatefulSets - Pod Name Label, https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-name-label