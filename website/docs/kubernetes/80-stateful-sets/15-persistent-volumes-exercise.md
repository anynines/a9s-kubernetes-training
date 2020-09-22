---
id: persistent-volumes-exercise
title: Persistent Volumes Excercise
---

After going through the theory of Volumes and Persistent Volumes it's time to get your hands dirty. In this exercise you will create a stateful Pod using Persistent Volumes. As you will see this involves a few preliminary steps. The exercise executes on a Kubernetes cluster using `paas.anynines.com` which is the `a9s Kubernetes` automation deployed on AWS [1]. Storage is one of the places where rubber meets the road in the sense that there is a comparitively large contact surfe with infrastructure. This is why - similar to Ingresses in an earlier lesson - Persistent Volumes involve vendor specific configuration. If you look closer at the exercise you will also recognize that the Kubernetes abstraction from volume Provisioners, Storage Classes, Persistent Volume Claims, Persistent Volumes to Volumes helps to maintain the tie to a specific Kubernetes distribution to a minimum. This counteracts the initial impression why dealing with persistency in Kubernetes is so surprsingly complicated.

## Creating a Storage Class

Create a file `05-storage-class.yaml`:

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
  name: default
parameters:
  fsType: ext4
  iopsPerGB: "10"
  type: gp2
provisioner: kubernetes.io/aws-ebs
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer
```

This Storage Class makes use of the provisioner `kubernetes.io/aws-ebs`. In this particular example, the provisionier uses storage services of the Amazon Web Services [1]. 

You may ask yourself how the provisioner authenticates against the AWS API. As this is beyond the scope of this training it should suffice to say that the Kubernetes cluster administrator - or a proper automation respectively - has configured a so called Cloud Provider [2]. A Cloud Provider enables access to multiple services offered by the corresponding vendor often including infrastructure affine services such as load balancing and storage.

For now, you can be relieved as the Cloud Provider already has been configured for you.

Create the Storage Class:

    kubectl apply -f 05-storage-class.yaml

## Creating a Persistent Volume Claim

Create a file `10-persistent-volume-claim.yaml`:

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: simple-pv-claim
spec:
  storageClassName: default
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

Create a Persistent Volume Claim:

    kubectl apply -f 10-persistent-volume-claim.yaml

Verify that the Persistent Volume Claim has been created successfully and - most importantly - that a Persistent Volume has been claimed:

    kubectl get pvc -w

The `-w` option will update the output continuously. You can interrupt it using `<CTRL>+C`.

Output should look similar to:

    NAME              STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
    simple-pv-claim   Bound    pvc-7a0e4339-9e64-4740-9adb-a509a6aac328   1Gi        RWO            default        49s

The `STATUS` field should say `BOUND`and thus indicate that an actual Persistent Volume has been found and "bound" to the Persistent Volume Claim.

In this case - with knowledge about the `default` Storage Class you have created before, we know how this has happened.

The `kubernetes.io/aws-ebs` Provisionier has created a Persistent Volume according to the needs specified in the Persistent Volume Claim. This is illustrated when describing the PVC:

    kubectl describe pvc simple-pv-claim

The output should look like this:

    Name:          simple-pv-claim
    Namespace:     k8s-training
    StorageClass:  default
    Status:        Bound
    Volume:        pvc-7a0e4339-9e64-4740-9adb-a509a6aac328
    Labels:        <none>
    Annotations:   kubectl.kubernetes.io/last-applied-configuration:
                    {"apiVersion":"v1","kind":"PersistentVolumeClaim","metadata":{"annotations":{},"name":"simple-pv-claim","namespace":"k8s-training"},"...
                pv.kubernetes.io/bind-completed: yes
                pv.kubernetes.io/bound-by-controller: yes
                volume.beta.kubernetes.io/storage-provisioner: kubernetes.io/aws-ebs
    Finalizers:    [kubernetes.io/pvc-protection]
    Capacity:      1Gi
    Access Modes:  RWO
    VolumeMode:    Filesystem
    Events:
    Type       Reason                 Age   From                         Message
    ----       ------                 ----  ----                         -------
    Normal     ProvisioningSucceeded  7m6s  persistentvolume-controller  Successfully provisioned volume pvc-7a0e4339-9e64-4740-9adb-a509a6aac328 using kubernetes.io/aws-ebs
    Mounted By:  <none>        

This provides you with the information that:

* The provisioner `kubernetes.io/aws-ebs` has created a Persistent Volume with the id `pvc-7a0e4339-9e64-4740-9adb-a509a6aac328`.
* The Persistent Volume is a Filesystem (`VolumeMode: Filesystem`).
* The Persistent Volume is currently not mounted.

Hence, it's time to create a Pod and mount the Persistent Volume.

Create a file `20-pod-writing-to-volume.yaml`:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: simple-pv-pod
spec:
  volumes:
  - name: simple-pv-storage
    persistentVolumeClaim:
        claimName: simple-pv-claim
  containers:
  - name: simple-pv-container
    image: busybox
    command: ["/bin/sh"]
    args: ["-c", "echo Hello World > /my-persistent-data/helloworld.txt"]
    volumeMounts:
    - name: simple-pv-storage
      mountPath: "/my-persistent-data"
  restartPolicy: Never
```

Which creates a Pod writing a simple text file `/my-persistent-data/helloworld.txt` containing the String `Hello World`.

So now there is data on the disk of this Pod which will terminate after its execution.

Create another Pod, mount the same Persistent Volume and read the data printing it to the STDOUT:

Create a file `30-pod-reading-from-volume.yaml`:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: simple-pv-pod-reader
spec:
  volumes:
  - name: simple-pv-storage
    persistentVolumeClaim:
        claimName: simple-pv-claim
  containers:
  - name: simple-pv-container
    image: busybox
    command: ["/bin/sh"]
    args: ["-c", "cat /my-persistent-data/helloworld.txt"]
    volumeMounts:
    - name: simple-pv-storage
      mountPath: "/my-persistent-data"
  restartPolicy: Never
```

And retrieve the Pods logs:

    kubectl logs simple-pv-pod-reader

Which should output:

    Hello World

## Tidying Up

Remove created objects:

    kubectl delete pod simple-pv-pod
    kubectl delete pod simple-pv-pod-reader

Execute:

    kubectl get pvc

Can you see that the Persistent Volume Claim and the Persistent Volume still exists? Their lifecycle is independent from the lifecycle of the Pods you have created. So it's worth keeping in mind that the lifecycle is a major difference between Volumes and Persistent Volumes.

Delete the Persistent Volume Claim:

    kubectl delete pvc simple-pv-claim

And ensure that the associated persistent volume has been deleted, too:

    kubectl get pv

And it's gone.

You have learned how to create a Persistent Volume using a Persistent Volume Claim. Although this example uses a Pod for illustration purposes, you are more likely to use Persistent Volumes as part of StatefulSets.

## Links
1. Amazon Web Services, http://aws.amazon.com/
2. Kubernetes Documentation, Concepts, Cluster-Administration, Cloud Providers, https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#aws
