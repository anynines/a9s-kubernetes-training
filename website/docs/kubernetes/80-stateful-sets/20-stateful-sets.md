---
id: stateful-sets
title: StatefulSets
---

* **JF** To this point the reader has not seen anything related to volumes. So volumes should be explained as well.
    * Neither did the container tutorial mention them.
        * [Decision] Either 
            * describe Docker volumes here 
            * add them to the Container Tutorial
    * Mention why the tutorial does not mention volumes.
        * This should actually be part of the replica-set section.
    * Explain Kubernetes Volumes
        * what they are and how the relate to docker volumes

* What is a StatefulSet
    * Manages the deployment and sclaing of a set of Pods[1]

    * Pods of a StatefulSet are based on the same container spec.
    * A StatefulSet maintains a *sticky identity* for each of the Pods. [1]
        * They are created from the same spec but they are not interchangeable. [1]
        * Each Pod has a persistent idenfier that it maintains across any rescheduling. [1]
        * TODO Why does the identity matter?
    * But in contrast to Deployments - **provides guarantees about the ording and uniquness of these Pods**
        * TODO Why does ordinality matter?

* When to use StatefulSets? Should be used when applications need 1 or more:
    * Stable, unique network identifiers
        * TODO Example
    * Stable, persistent storage.
        * TODO explain!
    * Ordered, graceful deployment and scaling.
        * TODO Explain
    * Ordered, automated rolling updates.
        * TODO Explain

If this is not needed, use a Deployment or ReplicaSet.

Deployments and ReplicaSets are for stateless or light-weight stateful workloads.
StatefulSets are for heavy-weight stateful workloads such as data services including databases, message queues, etc.

* Creating a StatefulSet
    * Where does the volume come from.
        * PersistentVolume Provisioner
    * Require a Headless Service > Network identity
        * The Service has to be created manually
            * TODO Demonstrate!
    * RollingUpdates, default PodManagementPolicy (OrderedReady), it's possible to get into a broken state that requires manual intervention to repair!
        * TODO What the fucking fuck?

* Deleting a StatefulSet
    * Does not delete volumes

* Pod Selector
    * You must set the `.spec.selector`field of a StatefulSet to match the labels of its `.spec.template.metadata.labels`.
    * Failing to specify a matching Pod Selector will result in a validation error during StatefulSet creation.

* PodIdentity
    * Ordinal - A unique number for each Pod within the StatefulSet
    * A stable network identity 
        * (using a Service)
        * name network id, dns name
    * Stable storage
        * Each Pod has its own volume
        * Each Pods always keeps the same volume

* Deployment and Scaling Gurantees
    * For aStatefulSet with N replicas, when Pods are being deployed, they created sequentially, in order from 0 .. N-1
    * When pods are being deleted, they are terminated in reverse order, from N-1 ... 0
    Before a scaling operation is applied to a Pod, all of its predecessors must be Running and Redy
    * Before a Pod is terminated, all of its successors must be completely shutdown.
    * Pod Managagement Gurantees may be relaxed using the `.spec.podManagementPolicy`.
    * Parralel Pod Management
        * Pods can be launced in parallel if `Parallel` is specified.

******************

* Single instance data service
    * Multi-instance is for the advanced lesson
* Persistent Volumes
    * What is it? Relationship between Kubernetes Volumes and Docker Volumes.
    * Dynamic Volume provisioning.

* Example Service.
    * This example does not explain how to containerize a stateful service. Most likely, a container image will be present.
    * This example is about using a StatefulSet not about how to create a container image.
    * Decide which data services to use
        * Definitely not mongodb!
        * PostgreSQL?
            https://hub.docker.com/_/postgres

## Links
1. Kubernetes Documentation, Concepts, StatefulSets, https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/