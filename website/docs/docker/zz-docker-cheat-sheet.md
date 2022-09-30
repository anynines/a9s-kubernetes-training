---
id: docker-cheatsheet
title: Docker Cheat Sheet
---

## Related Videos
<VideoContainer
list={[
{src: "https://www.youtube-nocookie.com/embed/HQ2pZENTVQk", title: "Publishing a Container Image & The Workflow"},
]
}></VideoContainer>

Here is a brief list of frequently used `docker` commands.

## Building Images

**Building an image** from a Dockerfile in the current working directory (`.`) tagged with `1.0.0`.

    docker build -t imagename:1.0.0 .

**List local images**:

    docker image ls

**Delete local image**:

    docker image rm busybox:1.31.1

## Distributing Images

**Pull image from the default container registry**:

    docker pull imagename:1.0.0

**Retag local image**:

    docker tag imagename:1.0.0 registry-user-name/imagename:1.0.0

**Push (upload) an image to the default container registry**:

    docker push registry-user-name/imagename:1.0.0

## Starting Containers

**Run an Interactive Container**:

Running a container opening a Shell and binding a terminal:

    docker container run -it busybox /bin/sh

**Run a container** using the `simple-web-app` image tagged with `0.1.0`. The container name will be `myapp`. Expose the local port `8081` to port `4567` within the container. You can then access port `4567` of the container by typing `http://localhost:8081`:

    docker container run --name myapp -p 8081:4567 simple-web-app:0.1.0

**Stop the container named `sobusy`**:

    docker stop container sobusy

This will send a SIGTERM [1].

**Stop the container name `sobusy` but send SIGKILL** [1] instead of SIGTERM.

**List running containers**:

    docker container ls

Or

    docker container ps

And

    docker container ls --all

To include stopped containers.

**Delete all containers (running & stopped)**:

    docker container rm -f $(docker ps -aq)

**Print last 200 log entries** of the container named `sobusy`:

    docker container logs --tail 200 sobusy

** Reattach a Container **

    docker container attach <container-name | container-id>

## Links

1. Linux Programmer's Manual, SIGNAL(7), POSIX Signals, http://www.man7.org/linux/man-pages/man7/signal.7.html
