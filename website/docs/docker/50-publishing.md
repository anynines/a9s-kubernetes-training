---
id: publish-image
title: Publishing a Container Image
---
## Related Videos
<VideoContainer
  list={[{
   src: "https://www.youtube-nocookie.com/embed/HQ2pZENTVQk",
   title: "Publishing a Container Image & The Workflow"
  }]}
/>


So far you have created your own container images and started them, locally. In order to make use of container images in an production environment such as a Kubernetes cluster, it is necessary to distribute container images to those clusters. As described in the introduction, the distribution of container images is supported by so-called *container registries*.

**In this lesson, you will upload your previously created web app to a public container registry**.

## Docker Hub

The widely used Docker Hub container registry acts as a community hub to make container images publicly available. So even in case you use a private registry, it is likely that you will also interact with Docker Hub, for example during the creation of your images when referring to other base images. Also, in case you want to share a container image publicly, Docker Hub is a valid choice.

Create your own Docker Hub account. It is free and you will need it during the following lessons.

    https://hub.docker.com/signup

Now that you have created your account it's time to publish your first container image.

## Login

Before you can upload anything you need to login:

    docker login

There is no need to specify Docker Hub as it is docker's default registry. All you have to do is to provide your username and password.

## Publishing a Container Image

From previous lessons you should have a container images stored locally. You can list them with:

    docker images

Which will show an output similar to:

    REPOSITORY                                           TAG                 IMAGE ID            CREATED             SIZE
    simple-web-app                                       0.2.0               f6b7d3097e5e        About an hour ago   57.5MB
    simple-web-app                                       0.1.0               3f48381de1d9        About an hour ago   57.5M

A good practice is to tag any image version with a respective version tag. You did that for the local images with versions `0.1.0` and `0.2.0`.

This is how you tag the image version for an upload to the container registry:

    docker tag simple-web-app:0.2.0 <your-dockerhub-username>/simple-web-app:0.2.0

For example:

    docker tag simple-web-app:0.2.0 fischerjulian/simple-web-app:0.2.0

Once the image is tagged your local image list acquired with `docker images` looks similar to this:

    REPOSITORY                                           TAG                 IMAGE ID            CREATED             SIZE
    fischerjulian/simple-web-app                         0.2.0               f6b7d3097e5e        4 hours ago         57.5MB
    simple-web-app                                       0.2.0               f6b7d3097e5e        4 hours ago         57.5MB
    simple-web-app                                       0.1.0               3f48381de1d9        4 hours ago         57.5MB

As you can see the image now exists as a local version and a version meant to be uploaded to the registry.

So let's upload the image:

    docker push fischerjulian/simple-web-app:0.2.0

Once uploaded you can view the result on the Docker Hub website: https://hub.docker.com/r/fischerjulian/simple-web-app or respectively: `https://hub.docker.com/r/<your-dockerhub-username>/simple-web-app`.

As the image is already stored locally we can run the image with:

    docker container run <your-dockerhub-username>/simple-web-app:0.2.0

You can remove the image locally by running:

    docker image rm <your-dockerhub-username>/simple-web-app:0.2.0

To pull an image from the remote repository execute:

    docker image pull <your-dockerhub-username>/simple-web-app:0.2.0

### The `latest` Tag

Often you will see a tag named `latest` which appears to have a special meaning. In case you have pushed your first container image in the above lesson, go to the Docker Hub website and see if there is such a tag. It is not there because `latest` is not a special tag. There is no guarantee that `latest` will point to the most recent version of an image. This is entirely up to the author of a container image or a respective CI/CD pipeline.

Additionally, **it is wise to use explicit version numbers**. By using an explicit version, dependencies are declared explicitly. You always know what you get. In the above example the base image was set to `ruby:2.5-alpine`. This way updating Ruby - which may break the contract to Sinatra or the Sinatra application - only occurs when you - the developer - explicitly change the version of the base image. Undoubtedly, you should update your software regularly but with explicit version you avoid unexpected upgrades escalations.

## Links

1. DockerHub, https://hub.docker.com/
