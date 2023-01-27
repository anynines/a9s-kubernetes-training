---
id: creating-images
title: Creating Container Images
---

## Related Videos
<VideoContainer
  list={[{
   src: "https://www.youtube-nocookie.com/embed/AOg8a1z8BIY",
   title: "Creating Container Images"
  }]}
/>

---
So far we have been using existing container images. This is nice to learn how to use them but in order to run your own workloads in containers, it is necessary to learn how to build container images yourself.

## From Dockerfile to Container Image

A Dockerfile describes how a container image is to be created. So let's have a first look at **the container image creation workflow**.

Create a working directory for the training:

    mkdir workspace-ct
    cd workspace-ct

Create a working directory for your new container image:

    mkdir 10-hello-container-world
    cd 10-hello-container-world

In your `hello-container-world` working directory create a file named `Dockerfile`.

**Note**: Visual Studio Code [1] offers a Docker plugin that will assist you when working with Docker including authoring Dockerfiles [2].

Paste this:

    FROM busybox:1.31.1
    WORKDIR /app
    CMD ["printf", "Hello World of Containers\n"]

And run your new image:

    docker image build -t hello-container-world:0.1.0 .

This will build a container local container image by the image name `hello-container-world` and tag it with the tag `0.1.0`.

You should see `Hello World of Containers` in your terminal.

Run it:

    docker run hello-container-world:0.1.0

You should see:

    Hello World of Containers

**Congratulations, you have built your first container image!**

## Workflow Summary

Summarizing the workflow above, this is what you did to create your first container image:

1. Create a working directory for your container image
2. Create a Dockerfile
3. Build and Tag the container image from the Dockerfile

As you can see from this minimalistic example, defining a container image can be very simple.

## Links

1. Microsoft Visual Studio Code, https://code.visualstudio.com/
2. Visual Studio Code, Documentation, Working with Containers, https://code.visualstudio.com/docs/containers/overview
