---
id: introduction
title: Pods
---

After making first steps with containers most likely by using Docker on a local machine, it is normal to think in containers as the subject to deployments. Building a container image and starting a container from it is the idea with Docker. Not in Kubernetes.

## From Containers to Pods

**In Kubernetes the smallest deployable unit is not a container but a Pod**. Pods are a composition of one or more containers. Therefore, **starting a single container in Kubernetes requires the definition of a Pod containing a single container**.

## What is a Pod

A Pod is a set of containers that will be deployed to the same Kubernetes Node. All containers of a Pod will share the same IP address, ports, hostname, may communicate via IPC (interprocess communication) and share a volume (attachable storage).
This implies that a different Pod can be placed - along with its containers - on a different Kubernetes Node.

The Pod concept allows the isolation of different co-located processes which closely interact. Prior to this it was rather common to place several processes inside a virtual machine. Without a container isolation between the processes it is possible that one process leaking memory consumes all VM resources causing a VM wide system failure.
In a Pod each container - ideally with a single purpose - has its well defined resource limits. In case a processes exceeds these limits, the container can be restarted automatically which often helps a system to survive until human intervention fixes the underlying issue.
So much about the theory. It's time to create a Pod.

## Creating a Pod

A Pod named *busybox* using the container image *busybox* can be created a simply as:

    kubectl run busybox --image=busybox --restart=Never -- echo "Hello World"

It's status can be obtained with:

    kubectl get Pods busybox

And the log output be retrieved with:

    kubectl logs busybox

More information about a Pod can be retrieved with the `describe` command that works for all Kubernetes object types:

    kubectl describe Pod busybox

As you can see the output is quite verbose. Take your time and study its contents. Among the Pod metadata you can find a list of events including lifecycle events such as scheduling, pulling of container images and starting containers.

To delete the Pod run:

    kubectl delete Pod busybox

### Creating a Pod From a Pod Manifest

Alternatively, the Pod can be created from a Pod Manifest `10-pod.yaml`:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox
spec:
  containers:
    - image: busybox
      name: busybox
      command: ["echo"]
      args: ["Hello World"]
  restartPolicy: Never
```

Apply `10-pod.yaml`:

    kubectl apply -f 10-pod.yaml

To delete the Pod execute:

    kubectl delete -f 10-pod.yaml

Or use the command from above:

    kubectl delete Pod busybox

### Declarative vs. Imperative Configuration

The usage of a Manifest file is part of a central Kubernetes paradigm of *declarative configuration*. With the declarative approach the *desired state* of a system is described. In this case the desired state is that a Pod should be running. Notice that it is not specified where the Pod should be running as this is up to Kubernetes to decide. All we care is that the Pod is running.
In contrast to the declarative configuration an *imperative approach* would be to tell the cluster to start a Pod on Node XY which means more responsibility for the client than the server.

In Kubernetes the idea is: declare how the system should look like and have a server side controller take care of the rest. We'll encounter this concept many times throughout this training.
