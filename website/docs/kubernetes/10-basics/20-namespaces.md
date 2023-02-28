---
id: namespaces
title: Namespaces
---

## Related Videos

<VideoContainer
  list={[{
    src: "https://www.youtube-nocookie.com/embed/YcCFGmVdwAQ",
    title: "Namespaces Part 1"
  },
  {
    src: "https://www.youtube-nocookie.com/embed/ZGzvUQgJyGA",
    title: "Namespaces Part 2"
  }]}
/>

---

In Kubernetes _namespaces_ allow a separation of Kubernetes objects in a cluster.

By default, all operations are executed in the _default_ namespace.

While namespaces can be used to separate workloads of different users such as different development teams, the level of isolation provided by namespaces is not sufficient for tenant isolation. So in a multi-user environment where there is no trust relationship among the users, the deployment of a dedicated Kubernetes cluster per user or user group is common.

The practical usage of namespaces is often to isolate different workloads running within a cluster or separate different development environments such as _staging_ and _testing_.

## Creating a Namespace

There are multiple ways to interact with Kubernetes and create a namespace. One is to use the `kubectl` command:

Create your own namespace using kubectl

    kubectl create namespace k8s-training

Alternatively, a YAML file can be created, e.g. `30-namespace.yaml`:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: k8s-training
```

and applied using

    kubectl apply -f 30-namespace.yaml

## Creating a kubectl Context to Work Within a Namespace

While it is possible to specify namespaces explicitly this would obstruct the portability of a workload description. Hence, it is recommended to avoid specifying namespaces in YAML files if possible.

In order to avoid the necessity to specify a `--namespace k8s-training` for each kubectl command, it is handy to create a so called `context`.

    kubectl config set-context k8s-training --namespace k8s-training --cluster=staging.a9s.io --user staging.a9s.io

Note: Your cluster may have a different _cluster name_ and _username_. You can obtain both pieces of information using the following command:

    kubectl config view

Once the context has been created we can switch to it:

    kubectl config use-context k8s-training

From now on all kubectl commands will be executed within the `k8s-training` namespaces as specified in the `k8s-training` context.

## Links

- Kubernetes Documentation, Tasks, Share a Cluster with Namespaces, https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
