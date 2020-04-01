# a9s-kubernetes-training

## Docusaurus

See https://docusaurus.io/

## Website App

### Build

    cd website
    yarn run build

### Run

    cd website
    yarn run start

## Container Image

Build the container image:

    docker image build -t a9s-kubernetes-training:0.1.0 .

This assumes you are in the root-folder of the project (not the website sub-folder).


## Publish

See https://docusaurus.io/docs/en/tutorial-publish-site

    GIT_USER=fischerjulian CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages

## Proposal

### 10-basics 10-kubectl

Add where to get or how to generate `kube.conf`.

### 10-basics 40-shell-to-container

Make explicit where to the image runs. Locally or inside the Kubernetes cluster.
