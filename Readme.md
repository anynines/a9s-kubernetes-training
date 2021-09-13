# a9s Kubernetes Training

---

## Writing new Content

[Find out  here in How to write new Content](website/README.md)

## Container Image

To build the container image you can use the code below. It will then assume you are in the root folder of the project instead of the website sub-folder.

    docker image build -t a9s-kubernetes-training:0.1.0 .

## Publish

You will find the correct settings in the link that follows,
* However we use v2 and you can find this version in the link
* ```GIT_USER=fischerjulian USE_SSH=true BRANCH="master" yarn deploy```


## Proposals

### Containers - Docker

With this proposal you can see how Docker volumes are used to experiment with databases locally as well.

### kubernetes - 10-basics 10-kubectl

This one adds where to get or how to generate `kube.conf`.

### kubernetes 10-basics 40-shell-to-container

Make explicit where to the image runs. Locally or inside the Kubernetes cluster.
