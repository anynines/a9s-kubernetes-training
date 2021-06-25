# a9s Kubernetes Training

---

## Writing new Content

See [How to write new Content](website/README.md)

## Container Image

Build the container image:

    docker image build -t a9s-kubernetes-training:0.1.0 .

This assumes you are in the root-folder of the project (not the website sub-folder).

## Publish

See https://docusaurus.io/docs/en/tutorial-publish-site (here the settings are correct) but actually we use v2 (https://v2.docusaurus.io/docs/deployment):

    GIT_USER=fischerjulian USE_SSH=true BRANCH="master" yarn deploy

## Proposals

### Containers - Docker

Also show how Docker volumes are used to experiment with databases, locally.

### kubernetes - 10-basics 10-kubectl

Add where to get or how to generate `kube.conf`.

### kubernetes 10-basics 40-shell-to-container

Make explicit where to the image runs. Locally or inside the Kubernetes cluster.
