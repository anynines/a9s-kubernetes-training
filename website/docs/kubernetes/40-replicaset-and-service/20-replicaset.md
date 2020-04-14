---
id: replicasets
title: ReplicaSets
---

This lesson covers how to run a stateless app in Kubernetes using a Replica Set.

## Hello World Web App

The sample application can be found on github: https://github.com/fischerjulian/smpl-go-web

## Creating the ReplicaSet

In order to create the ReplicaSet using `kubectl` create a file `20-rs-hello-world.yaml`:

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: smpl-go-web-rs
  labels:
      app: smpl-go-web-a
      tier: fontend
spec:
  replicas: 1
  selector:
    matchLabels:
      tier: fontend
  template:
    metadata:
      labels:
        app: smpl-go-web-a
        version: "1"
        tier: fontend  
    spec:
      containers:
        - name: smpl-go-web-c
          image: "fischerjulian/smpl-go-web:1.0.0"
          ports:
            - containerPort: 8080
```

And apply it:

    kubectl apply -f 20-rs-hello-world.yaml

This creates a Pod with a single container running a hello world application.
Verify that the Pods has been created successfully:

    kubectl get pods

You should see a running pod names something like `smpl-go-web-rs-pkqwd` where the last part is a random string which will be different for every instance of the replica set.

In case you seen the *status* `ContainerCreating` you can use:

    kubectl get pods --watch 

To observe the current Pod state until completion.

Now the application is deployed. However, it can only be accessed from within the cluster.

## Exercise: Access the Sample Web App from Withing the Cluster

A straight forward way to access the web app is to directly access the corresponding Pod:

* Run `kubectl describe pod smpl-go-web-rs-pkqwd` (replace *pkqwd* with your Pod's suffix) and extract the IP address of the `smpl-go-web-rs-pkqwd`-Pod, e.g. 100.96.14.17
* Start a container running a shell as described in one of the previous lessons.
* Inside the interactive container use the wget command to access the Pod, e.g. `wget 100.96.14.17:8080`. You can read the returned file using the cat command: `cat index.html`.
* Don't forget to delete the interactive busybox Pod after using it: `kubectl delete pod busybox`

However, this approach comes with some signficant disadvantages. Possibly the biggest drawback is a client trying to access the app needs to figure out where the Pod is located by obtaining its IP address. This process is also referred to as *service discovery*. Once, the IP address is known, the client can access the Pod but what happens if the Pod fails, e.g. caused by the failure or maintenance of the underlying Kubernetes Node (the VM the Pod is running on)? In this case the ReplicaSet will be rescheduled by Kubernetes and most likely receive a different IP address. The resulting *service discovery*-challenge is non-trivial in a dynamic cluster environment.

Kubernetes provides the concept of a `Service` enabling a number of ways to deal with *service discovery*, gracefully.

## Pods and Ports

Have you noticed that the container specification of the app contains an explicit port declaration?

    spec:
      containers:
        - name: smpl-go-web-c
          image: "fischerjulian/smpl-go-web:1.0.0"
          ports:
            - containerPort: 8080

The Kubernetes documentation says:

> "Kubernetes gives every pod its own cluster-private IP address, so you do not need to explicitly create links between pods or map container ports to host ports. This means that containers within a Pod can all reach each other's ports on localhost, and all pods in a cluster can see each other without NAT."

By owning a private IP address within your cluster network each Pod can use the entire port range (65.535) among its containers. Obviously, this implies that two containers using a port cannot occupy the same port simultaneously. They may use the same port to communicate but only one container can open it.

## Links

* Kubernetes Documentation, Concepts, ReplicaSet, https://kubernetes.io/docs/concepts/workloads/controllers/replicaset
* Kubernetes v1.12 Documentation, API Reference, ReplicaSet, https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.12/#replicaset-v1-apps
