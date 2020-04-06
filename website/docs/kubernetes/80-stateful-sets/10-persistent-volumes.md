---
id: persistent-volumes
title: Persistent Volumes
---

# TODO
* Sharing files between containers
    * Describe difference between different storage options
        * EBS vs EFS
* Create PV examples / exercises.

This lesson covers the theoritical background necessary to understand the Persistent Volume concept in Kubernetes.

Persistent Volumes are introduced in this chapter although they can also be used with familiar Kubernetes resources such as Pods and ReplicaSets and - although many Kubernetes users do that  applications should be kept as stateless as possible. Therefore, note that state should be managed by stateful data services as proposed in the 12 factor manifest [14].

## Volumes
**Volumes bring persistency to containers**. Containers are stateless in so far as changes to their filesystem will be lost if a container is restarted - more precicely rescheduled. Rescheduling means that the container is destroyed but a new container of the same kind is started somewhere in the cluster. This freshly created container will be derived from the given container image and hence won't reflect any changes made in prior existing containers.

**Volumes allow sharing information among containers**. At least some types of Volumes allow sharing of information among containers. A NFS Volume, for example, can be used to share assets such as photos uploaded by application users and store them on a shared files system. Be aware that this is an anti-pattern for cloud native applications which will store assets in an object store such as OpenStack Swift [3], Amazon S3 [4] or the alikes. Object stores scale horizontally for both load and capacity. In addition to that their availability and durability is usually higher than those of shared file systems. However, for some legacy applications this may be a valid choice.

More than that, Volumes are used in conjunction with concepts such as ConfigMaps and Secrets as shown in earlier lessons. Both ConfigMaps and Secrets can be either consumed as environment variables or be mounted as files. The latter option uses the concept of Kubernetes Volumes.

### Volume Mounts

Within a Pod-definition volumes can be mounted to containers by using a so called **volume mount**. You are already familiar with the syntax as volume mounts have been used in the ConfigMap and Secrets lessons using the `volumeMounts` field in container specs.

### Docker Volumes vs. Kubernetes Volumes

If you are familiar with Docker Volumes you may already recognized the difference between Kubernetes and Docker Volumes. In Kubernetes there are many more types of Volumes and the way to use them is more flexible. For example, in Kubernetes it is possible to mount multiple containers of multiple types into a single container. Additionally, the lifecycle of Volumes is clearly defined in Kubernetes. Volumes share the lifecycle of their Pods. They are created with their Pods and cease to exist when their Pods cease to exist. You will see that there are concepts such as the *Persistent Volume* with lifetimes exceeding the lifetime of their Pods.

## Persistent Volumes (PV)

It may appear intuitive that Persistent Volumes (PV) are special types of Volumes but in fact there are two distinct Kubernetes resources.

As mentioned before, the **major difference of Volumes and Persistent Volumes is their lifetime**. Volumes exist as long as their corresponding Pods while **Persistent Disks** potentially survive Pods and may **live as long as the Kubernetes cluster lives**.

Persistent Volumes are not storage implementation but rather a storage abstraction. The Persistent Volume subsystem comprises resource types for creating and attaching volumes. In order to use Persistent Volumes you need to be familiar with the folling concepts:

* Persistent Volume (PV)
* Persistent Volume Claim (PVC)
* Storage Class
* Storage Provisioner

### Persistent Volume

The Persistent Volume is what the name suggests: the actual volume where data is being stored. What exactly a Persistent Volume is, is up to its implementation. Often, a PV may be represented by a remotely attached block device such as an Amazon Block Store (AWS EBS) volume [5].

The Persistent Volume concept implies two important questions:

1. How are Persistent Volumes created?
2. Where and when are Persistent Volumes associated and mounted to containers?

### Persistent Volume Claim (PCV)

Similar to Volumes, Persistent Volumes [2] are also mounted using the `volumeMount` field in the specification of a container. The volume mount basiscally says "mount the persistent volume `x` to the path `y` of my container `z`. But **before a volume mount can happen, the Persistent Volume must be requested using a Persistent Volume Claim**. Think of storage as "territory" and a Persistent Volume Claim as a claim to a particular part of that "territory" or storage. Hence, **a Persistent Volume Claim is a declarative description of a piece of storage requested by the user**. In this sense, a PVC may sound like 

Give me:

* *"3 gigabytes of fast ssd storage"*
* *"500 gigabytes of cheap hard disk drive storage. You know the old rotating magnetic drives."*
* *"50 gigabytes of very reliable ssd storage"*

As you can see these requests may include different **quantities** and **qualitites** of storage. While quantities are measures in bytes, qualities can be anything from *availability*, *durability* to *speed*.

### Storage Class
Sotarge Classes [13] are there to reflect the abovementioned qualities such as *availability*, *durability*, *speed*, *backup policies* etc.

This leads to the question where the difference of Persistent Volumes by Storage Class is actually manifested. Simply speaking, a Storage Class represents a configuration that is passed into a so called *Storage Provisioner*.

### Storage Provisioner
The Storage Provisioner is where Persistent Volumes of a particular Storage Classe are actually created.

**A Storage Provisioner is responsible for dynamically creating storage volumes corresponding to Persistent Volume Claims requsted by users**.

The underlyting storage system can be anything from a software defined storage (SDN)[6] such as ceph [7], gluster [8], etc. to hardware appliances accessed directly or through the API of an infrastructure provider such as AWS [9], Azure [10], GCP [11] or AliCloud [12]. Each of these systems - along with many other storage solutions - have to be addressed in a particular way. This is the main subject of a Storage Provisioner implementation.

### Manual Provisioning

The documentation [2] also mentions manual provisioning. In this case Persistent Volumes are pre-created by the cluster administrator. Applications then use Persistent Volume Claims to request a Persistent Volume from the pool of of PVs. While this use case may make sense in legacy use cases, such a stone age methodology should be avoided whenever possible. The absense of dynamic volume provisioning is likely to block the workflow of application developers during deployment when Persistent Volume Claims can't be fulfilled as the cluster ran out of Persistent Volumes.

## Links
1. Kubernetes Documentation, Concepts, Storage, Volumes, https://kubernetes.io/docs/concepts/storage/volumes/
2. Kubernetes Documentation, Concepts, Storage, Persistent Volumes, https://kubernetes.io/docs/concepts/storage/persistent-volumes/
3. OpenStack Swift, https://github.com/openstack/swift
4. Amazon S3, https://aws.amazon.com/s3/
5. Amazon EBS, https://aws.amazon.com/ebs/
6. Wikipedia, Software Defined Storage, https://en.wikipedia.org/wiki/Software-defined_storage
7. Ceph, https://ceph.io/
8. gluster, https://www.gluster.org/
9. Amazon Web Services, http://aws.amazon.com/
10. Microsoft Azure, https://azure.microsoft.com
11. Google Cloud Platform, https://cloud.google.com/
12. Alibaba Cloud, https://eu.alibabacloud.com/
13. Kubernetes ocumentation, Concepts, Storage Classes, https://kubernetes.io/docs/concepts/storage/storage-classes/
<<<<<<< HEAD
14. The Tvelve Factor App, https://12factor.net/
=======
14. The Tvelve Factor App, https://12factor.net/
>>>>>>> Intermediary; added example for PersistentVolumes
