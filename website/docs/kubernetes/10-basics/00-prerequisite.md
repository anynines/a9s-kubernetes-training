---
id: prerequisite
title: Prerequisite
---

This section will guide you through installing `kubectl`, the Kubernetes CLI, 
and setting up `minikube` a small cluster that can run on your local machine.

The tutorial was tested on `minikube`, but should work with any recent Kubernetes
version, so feel free to use any alternative like `kind` or production grade 
clusters from Infrastructure Providers (maybe you have some free compute time left)
like AWS.

For some parts of the tutorial, you will need an `ingress controller` installed, 
we will see what this is later on. `minikube` comes with a command to set up 
`NGINX` [1], so it is recommended to use it too, when working with a different 
cluster.

## Installing kubectl

Kubectl is the CLI that allows you to interact directly with the Kubernetes API
server and thus is the main way of interacting with clusters. During the 
tutorial you will learn more about, for now just install it by following the
[kubectl installation instructions [2]](https://kubernetes.io/docs/tasks/tools/).

## Setting up minikube

To install minikube on your computer, use the 
[minikube installation instructions [3]](https://minikube.sigs.k8s.io/docs/start/).

Since you will already have Docker installed, you will not necessarily need 
another hypervisor, but Docker can be quite unstable when it comes to networking 
and ingresses. So it's recommended to install for example VirtualBox, except if you 
are on MacOS where you will already have the HyperKit hypervisor installed.

### Minikube Cheat Sheet

Start minikube

    minikube start


Start minikube in VM mode (hypervisor not Docker)

    minikube start --vm=true


Stop minikube

    minikube stop


Enable the ingress controller (recommended to use VM mode)

    minikube enable addons ingress


## Links
1. NGINX, https://kubernetes.github.io/ingress-nginx/deploy/
2. kubectl, https://kubernetes.io/docs/tasks/tools/
3. minikube, https://minikube.sigs.k8s.io/docs/start/