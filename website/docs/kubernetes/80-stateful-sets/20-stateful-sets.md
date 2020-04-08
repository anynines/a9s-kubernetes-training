---
id: stateful-sets
title: StatefulSets
---

Now that you have made your first experience with Persistent Volumes, it is time to introduce a closely related Kubernetes concept called StatefulSets.

While it is possible to use Persistent Volume with Pods, ReplicaSets and Deployments, possible the best use of a Persistent Volume is the StatefulSet. While other resources may go with objects stores instead of Persistent Volumes where possible, this is not an option for heavy-weight stateful data services such as databases, message queues, analytics servers, etc.

It is therefore not surprising that with Kubernetes 1.5 StatefulSets have been introduced being tailored to address some specific needs of data service automation such as the following properties of Pods in a StatefulSet:

* Pod identities based on sequential numbering (Pod 1, Pod 2, Pod 3, ...)
* Stable network identities based on Pod identities
* Orderinality allowing Pods to be created, updated or deleted in their particular order (Pod 1 to Pod 3 and vice versa).

## Pod Identities

A stable identity of Pods in a StatefulSet is useful as the Pods may change, e.g. due to failing Kubernetes Nodes. In such a case a Pod may have to be rescheduled on a different Node. Obviously, it is expected that the Pod will have access to its data located on a Persistent Volume and that it will be reachable via the same DNS name as before.

## Pod Ordinality

The ordinality requires Pods of a StatefulSet to having associated numbers such as `pod-1`, `pod-2` and `pod-3`. Using numbers it is possible to sort the list of Pods and process them *in order*. 

A common scenario where ordinality - or at least individual node identities - are essential is asynchronous replication with a primary node to which all write commands are directed and a set of secondary nodes which replicate all operations beformed on the master and be used as read-only-nodes. In these cases certain administrative tasks need to performed on the primary node only. An example for a more complex workflow involving node identities it the upgrade from PostgreSQL 11.x to 12.x [2] which requires orchestration of actions in a particular sequence applied to indivudal or groups of nodes. Concepts such as ReplicaSets where all Pods are considered equal therefore work for statless apps but not for stateful databases.

## When to Use a StatefulSet?

The answer is implied by the aforementioned differences to alternative Kubernetes resources such as Pods, ReplicaSets and Deployments. 
StatefulSets are helpful when Pods require a stable identity, when the order in which Pod lifecycle actions are executed matter and in particular when persistency beyond the lifecycle of Pods is desired.

## Pod Identity and Persistent Volumes

In the case of `a9s Kubernetes` deployed on AWS [3] as the underlying infrastructure the `kubernetes.io/aws-ebs` provisioner creates a remotely attached block devices [4] using the AWS Elastic Block Storage (EBS) service [5]. You can imagine the remotely attached block device as a *remotely attached hard disk*. A hard disk is a thing that you can format with filesystem and then mount and use. The formatting part will be taken care for your as long as you have set the `volumeFormat: Filesystem` as shown in the last exercise.
However, one restriction of (most) block devices is that they can only be used by a single machine and this restriction also applies to EBS backed Persistent Volumes.

Imagine a StatefulSet with three Pods `pod-1`, `pod-2` and `pod-3`. Three Persistent Volume Claims will then create three Persistent Volumes. The StatefulSet then ensures that each PV will be mounted to a particular Pod. There's a 1:1 mapping from Persistent Volume to a Pod identity. So even when a Pod is lost, the newly created Pod will be bound to the Persistent Volume associated with the identity of the former Pod.

* What is a headless service?

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
2. PostgreSQL Upgrade to 12.x, https://www.postgresql.org/docs/12/pgupgrade.html
3. Amazon Web Services, http://aws.amazon.com/
4. Wikipedia - Device File - Block Devices, https://en.wikipedia.org/wiki/Device_file#Block_devices
5. Amazon EBS, https://aws.amazon.com/ebs/