---
id: services
title: Services
---

## Related Videos
<video
  url={[
    "https://www.youtube-nocookie.com/embed/2hdv-ZpYIj8",
    "https://www.youtube-nocookie.com/embed/BEXU7KyXI-U",
  ]}
/>

---

In the ReplicaSet lessons we have encountered *service discovery*, the challenge of reliably and predictably finding and accessing workloads running in a Kubernetes cluster.

## Creating a Service

Creating the service is simple.

Create a file `30-service-hello-world.yaml`:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: smpl-go-web-s
spec:
  selector:
    app: smpl-go-web-a-cant-work
  ports:
  - port: 8080
```

Apply it:

    kubectl apply -f 30-service-hello-world.yaml

Once, the Service has been created, it can be accessed using `kubectl proxy`:

    kubectl proxy --port 8001

Then navigate a browser to:

    http://localhost:8001/api/v1/namespaces/k8s-training/services/http:smpl-go-web-s:8080/proxy/

This assumes the Service to be within the `k8s-training` namespace, be reachable via `http` and listen on port `8080`. The trailing `/proxy` is mandatory.

## What Does the Service do?

In the first step of this lesson a **ReplicaSet with one (1)** replica has been deployed. This lead to the creation of a single Pod with a single container running the desired web application.

By creating a Service matching the ReplicaSet with annotations using `selector` and `label`, the created service should *discover* the `smpl-go-web-a` app and uses it as an endpoint. Consequently, requests to the service will be routed to the `smpl-go-web` Pod. This is what a Service does: it's a layer 4 (ISO OSI: transport layer) router and - if multiple endpoints are available - load balancer.

You can verify the connection of the Service with its application by:

    kubectl describe service smpl-go-web-s

And (Don't forget to replace the Pod's ID):

    kubectl describe pod smpl-go-web-75457966b7-742sr

The `endpoints` section of the service description should contain the Pod's IP address

The Service therefore has two major purposes:

1. *Service Discovery*: Acting as a stable entry point to access your apps.
2. *Load Balancing*: Distributing requests among instances of your app in case there are multiple of them.

### Error: No Endpoints Available

In case you are receiving an error such as `No endpoints available for service` check the match labels of your service:

    kubectl describe service smpl-go-web-s

In the output pay attention to the `Selector`-field. It must match the Pods's labels.

In order to check the labels of your Pod you can obtain this information by executing:

    kubectl describe Pod smpl-go-web-rs-kmqrd

Where `smpl-go-web-rs-kmqrd` must be replaced with your Pod's name.

Look for the field `Labels` in the output. Only if there is a match between the label and the Service's selector, the Service will "know" to which Pods it belongs.

### Fixed Service

The fixed version of `30-service-hello-world.yaml` then looks like this:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: smpl-go-web-s
spec:
  selector:
    app: smpl-go-web-a
  ports:
  - port: 8080
```
