---
id: kubectl
title: kubectl Basics
---

## Related Videos

<VideoContainer
  list={[{
    src: "https://www.youtube-nocookie.com/embed/xKCa8ZENCJQ",
    title: "kubectl Basics"
  }]}
/>

---

In this lesson you will learn how to interact with a Kubernetes cluster using the Kubernetes CLI called `kubectl`.

## Identify Your Kubernetes Version

In order to determine the version of both your Kubernetes client (CLI) and Kubernetes service (API) issue the following command:

    kubectl version

## Identify the Kubernetes Cluster

When working with several Kubernetes clusters it is important to point `kubectl` to the right Kubernetes cluster. A simple way to figure out which Kubernetes cluster is currently selected for the usage with `kubectl` is:

    kubectl cluster-info

It's telling you the API endpoint of the selected Kubernetes cluster which should provide you the information to see whether this is the one you intend to use.

The Kubernetes documentation explains [how to configure multiple clusters](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/).

## Use an HTTP Proxy to Access the Kubernetes API

By using

    kubectl proxy --port 8001

a local proxy running on your computer is started which can be accessed via `http://localhost:8001`.

The `kubectl` command takes care of the authentication against the Kubernetes API. The communication between the local proxy and the remote Kubernetes API is SSL encrypted while the local communication to the local proxy isn't.

## Links

- Kubernetes Documentation, Tasks, Use an HTTP Proxy to Access the Kubernetes API, https://kubernetes.io/docs/tasks/access-kubernetes-api/http-proxy-access-api/

- Kubernetes Documentation, Tasks, Configure Access to Multiple Clusters, https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/

- Kubectl Book, https://kubectl.docs.kubernetes.io/
