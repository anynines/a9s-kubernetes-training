---
id: docker-basics
title: Docker Basics
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5L_i-WxhQr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8SsTh3kC7-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this lesson you will start, stop, list and access containers in various ways.

## Starting a Container

Starting a container is as simple as:

    docker container run busybox printf "Hello World\n"

The output `Hello World` will appear in your terminal.

Note, Busybox [8] is a tiny bundle of UNIX utilities. Consequently, the official Busybox container image [9] is also very small. Another interesting light-weight Linux container image is Alpine [10][11].

Small container images are beneficial as it reduces the time to distribute new versions across the network. Large images have hundreds of MBs whereas small images comprise a few megabytes only.

### List Running Containers

After starting the container as described previously, run the following command:

    docker container ls

To list running containers.

**Do you see that no container is running?**

This is because the container has been started, did what it was told to do and finally **terminated**. The `printf` command is not a daemon - not a long running process - and once the command exited, the container reach its end of life.

In order to see stopped containers execute:

    docker container ls --all

This will show you the container along with some meta data such as:

    CONTAINER ID        IMAGE                             COMMAND                  CREATED             STATUS                      PORTS               NAMES
    47e4a58fbf81        busybox                           "printf 'Hello World…"   2 minutes ago       Exited (0) 2 minutes ago                        hopeful_hoover

## Starting and Stopping Containers With a Port Mapping

In case the process to start within the container opens a port, the container port may interfere with a daemon running on your local computer. For this reason a port mapping is required that maps the container port to a vacant port on your machine:

    docker container run -p 8081:8080 fischerjulian/smpl-go-web:1.0.0

This will map the port `8080`of the container to the port `8081`. Open your browser and navigate to `http://localhost:8081`. You should see a simple web app.

As this container starts a long running process, the container will not automatically terminate:

    docker container ls

    CONTAINER ID        IMAGE               COMMAND               CREATED             STATUS              PORTS                    NAMES
    f535c41de16f        smpl-go-web         "/bin/sh -c ./main"   12 minutes ago      Up 12 minutes       0.0.0.0:8081->8080/tcp   dazzling_swanson

As you can see the output also described the port mapping from your local machine to the container.

You can use the automatically assigned container name `dazzling_swanson` to stop the container with a SIGTERM [6] signal:

    docker container stop dazzling_swanson

Alternatively you can also use the `CONTAINER ID` interchangeably with the container name to stop the container:

    docker container stop a1eecf6fa762

And in case the container doesn't stop you can escalate from SIGTERM to a forcefull SIGKILL which should terminate the container process immediately:

    docker container kill dazzling_swanson

## Starting an Interactive Container

It is possible to start a container with an interactive terminal, e.g. for exploring or debugging a container (image):

    docker container run -it busybox /bin/sh

You can terminate the interactive terminal with the `CTRL+D` shortcut. The container will stop automatically.

## Starting a Detached Container

You can start a container and detach the terminal from it:

    docker container run -d busybox sleep 600

This will start a container that sits there for 10 minutes and return its full `CONTAINER ID`. The container ids you see in most CLI commands such as `docker container ls` is just the a truncated tail of the actual id.

### Obtaining an Interactive Shell to a Detached Container

You can obtain an interactive shell and access the container assuming its `CONTAINER ID` is `dc1945b3fa961f556d059c569460e18ba16a10c8bb5524653d27df101de49d73`:

    docker exec -it affectionate_wright /bin/sh

In the shell you can enter `ps` to list running linux processes and you see something similar to:

    PID   USER     TIME  COMMAND
     1 root      0:00 sleep 600
     6 root      0:00 /bin/sh
    12 root      0:00 ps

The process with `PID 1` is the `sleep 600` command and argumend passed during the container start. This tells you that you actually logged into the existing container and did not start a new one.

While being in the interactive shell, create a new file within the container:

    / # touch test.txt

Stop the container:

    docker container stop dc1945b3fa96

**What do you think happened to your file?**

[Poof! It's gone!](https://www.youtube.com/watch?v=NmFo-LKHGY0) Containers do not persist changes made to the filesystem.

Docker supports so called `volumes` [7] to persist files if no data service such as a database or persisting message broker is being used.

However, as this training does not aim to use Docker but Kubernetes, **persistency will be covered in the subsequent Kubernetes Training**.

## Links
1. iTerm2, https://www.iterm2.com/
2. GNU Bash, https://www.gnu.org/software/bash/
3. Zsh, https://www.zsh.org/
4. Cygwin, https://www.cygwin.com/
5. Docker Desktop, https://www.docker.com/products/docker-desktop
6. Linux Programmer's Manual, SIGNAL(7), POSIX Signals, http://www.man7.org/linux/man-pages/man7/signal.7.html
7. Docker Volumes, https://docs.docker.com/storage/volumes/
8. BUSYBOX, https://www.busybox.net/
9. BusyBox Container Image, https://hub.docker.com/_/busybox
10. Alpine Linux, https://alpinelinux.org/
11. Alpine Linux Image, https://hub.docker.com/_/alpine
