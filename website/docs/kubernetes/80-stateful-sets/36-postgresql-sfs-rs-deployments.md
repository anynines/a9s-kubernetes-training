---
id: stateful-set-vs-replicasets
title: StatefulSet vs. ReplicaSets
---

## Related Videos

<VideoContainer
  list={[{
    src: "https://www.youtube-nocookie.com/embed/YQZJpezPyFQ",
    title: "StatefulSets vs ReplicaSets"
  }]}
/>

---

In the last lesson you have scaled the PostgreSQL StatefulSet to 3 replicas so that it now consists of 3 Pods.

In this lesson you will conduct more experiments to become familiar with the particularities and similarities of StatefulSets compared to other resource types such as ReplicaSets and Deployments.

## StatefulSets vs. ReplicaSets

The most obvious similarity between StatefulSets and ReplicaSets is their name as both contain the word "Set".

Just like a ReplicaSet a StatefulSet is more than just a collection of Pods. Similar to a ReplicaSet Controller is watching over the Pods of a ReplicaSet, a StatefulSet Controller is watching all Pods of a StatefulSet.

**Let's see this in action!**

Open a terminal window and observe the Pods of your StatefulSet continuously:

    kubectl get pods -l app=postgresql-a -w

This will produce an output such as:

    NAME               READY   STATUS    RESTARTS   AGE
    postgresql-sfs-0   1/1     Running   0          34m
    postgresql-sfs-1   1/1     Running   0          24s
    postgresql-sfs-2   1/1     Running   0          23s

And it will also block the terminal window. **Place the windows so that you can keep an eye on it and open another terminal window**. You should now see both terminal windows simultaneously.

In the new window disturb the StatefulSet by deleting one of its Pods:

    kubectl delete pod postgresql-sfs-1

Watch what's happening:

    postgresql-sfs-1   1/1     Terminating   0          3m44s
    postgresql-sfs-1   0/1     Terminating   0          3m45s
    postgresql-sfs-1   0/1     Terminating   0          3m52s
    postgresql-sfs-1   0/1     Terminating   0          3m52s
    postgresql-sfs-1   0/1     Pending       0          0s
    postgresql-sfs-1   0/1     Pending       0          0s
    postgresql-sfs-1   0/1     ContainerCreating   0          0s
    postgresql-sfs-1   1/1     Running             0          1s

**The deleted Pod has been recreated**.

Check the StatefulSet:

    kubectl get statefulset postgresql-sfs

All three Pods are back and `Running`. So what happened here?

The StatefulSet Controller has been told to nurse three (3) Pods and that's what it does. As a "higher ranked officer" it does not care why a Pod has been lost. All it does is to apply the `desired state vs actual state`-comparison, recognize that a Pod is missing and take a corrective action: creating the missing Pod.

Another takeaway from this example is how the Pod identity in a StatefulSet is respected during self-healing. The newly created Pod has the same name: `postgresql-sfs-1` and the same Persistent Volume Claim `data-postgresql-sfs-1` which results in the same Persistent Volume and hence the same persisted data! In other words: the node has been recovered as it was before.

## StatefulSets vs. Deployments

In contrast to ReplicaSets but similar to Deployments, StatefulSets support update strategies such as `RollingUpdate` and `OnDelete`.

For this reason, **StatefulSets are neither stateful ReplicaSets nor stateful Deployments. They are entities on their own sharing similarities with both**.

## Tidy Up

Now revert your changes by editing `30-stateful-set.yaml` to the StatefulSet and set the number of replicas back to 1: `replicas: 1`.

Apply the changes by executing:

    kubectl apply -f 30-stateful-set.yaml

## Links

1. Kubernetes Documentation - Tutorials - StatefulSet Basics, https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set
