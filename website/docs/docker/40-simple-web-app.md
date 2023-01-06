---
id: simple-web-app
title: Containerizing a Simple Web App
---

## Related Videos
<video
  url={[
    "https://www.youtube-nocookie.com/embed/12c8ziarCqE",
  ]}
/>

---

In the previous lesson you have created your first container image. This trivial examples has outlined the workflow on how to create a container image.

In this lesson you will containerize a simple web application to illustrate essential aspects of the `Dockerfile` notation.

**Go to your training workspace**:

    cd workspace-ct

**Create a new container image working directory**:

    mkdir 20-simple-web-app
    cd 20-simple-web-app

## The Web App

In order to demonstrate how to build a container image for a web application, obviously a web application is needed.

It doesn't really matter which language or framework is used for this demo as long as it is simplistic and that the code can be understood even if you don't know the language nor the the framework well.

Create a file `simple-sinatra-app.rb`:

    require 'sinatra'

    get '/' do
    '<h1>Hello World!</h1>'
    end

That's your web app.

Optionally and in case you have Ruby [2] installed you could run the app locally by installing the Sinatra gem:

    gem install sinatra

And then execute:

    ruby simple-sinatra-app.rb

The app is then running on port `4567` and can be reached via `http://localhost:4567`.

**But don't exhaust yourself in installing Ruby or trying to run the app, locally**. This is not the focus of the lesson. Instead, proceed with creating a `Dockerfile`.

## The `Dockerfile`

**Create a new `Dockerfile`**.

Again we start with a container image specification:

    FROM ruby:2.5-alpine

    WORKDIR /app

    RUN gem install sinatra

    COPY simple-sinatra-app.rb /app

    CMD ["ruby", "simple-sinatra-app.rb"]

Again, the `FROM` statement specifies which container image is to be used as the **base image**. Instead, of going through the hassle of setting up a Ruby environment within the container, it is much easier to search for a well-maintained Ruby base image, e.g. on Docker Hub [3]. The `ruby:2.5-alpine` does the trick. In contrast to the regular `ruby:2.5` image, the Alpine [4] version is much smaller. You can try it yourself and remove the `-alpine` at the end of the container image specification and build a container from it. The initial pull will take much longer than the `ruby:2.5` image - based on the Debian image [5] -, since the latter is much larger.

Within the container we define a working directory `/app`.

Now we face a **challenge: how to get our application into the container**?

That's what the line `COPY simple-sinatra-app.rb /app` does. It's important to understand that the container image during its build interacts with your local filesystem. Copy transfers a file from your local working directory into the container image and thus - later - into the running container.

The line `CMD ["ruby", "simple-sinatra-app.rb"]` starts the application on container startup.

Now build the container image:

    docker image build -t simple-web-app:0.1.0 .

And run the container:

    docker container run simple-web-app:0.1.0

You should see the app starting up:

    [2020-03-16 09:38:02] INFO  WEBrick 1.4.2
    [2020-03-16 09:38:02] INFO  ruby 2.5.7 (2019-10-01) [x86_64-linux-musl]
    == Sinatra (v2.0.8.1) has taken the stage on 4567 for development with backup from WEBrick
    [2020-03-16 09:38:02] INFO  WEBrick::HTTPServer#start: pid=1 port=4567

**Point your browser to `http://localhost:4567`. What do you observe?**

It doesn't work. But why?

The reason why it is not working is a **missing port mapping**. The local container using Docker Desktop [7] runs a light-weight virtual machine (VM) or your computer. So your container has been started within a VM. That's why a port mapping is necessary. The purpose of the port mapping is to map the container port `4567` to a local port of your machine.

So press `CTRL+C` and stop the existing container. The web app will be shutdown along with the container.

Although `EXPOSE` does not perform a port mapping, it is recommended to declare which port is intended to be published. So using `EXPOSE` is a best practice of the container image author telling the container image user which port may need a port mapping.

    FROM ruby:2.5-alpine

    WORKDIR /app

    RUN gem install sinatra

    COPY simple-sinatra-app.rb /app

    CMD ["ruby", "simple-sinatra-app.rb"]

    EXPOSE 4567

Now, start the container again with a port mapping:

    docker container run -p 8081:4567 simple-web-app:0.1.0

**It still doesn't work!** You may ask yourself whether the port mapping wrong, but it isn't!

**Exercise**:

1. Determine the container ID by using `docker container ps`
2. Get shell access into your container with `docker container exec -it <container-id> /bin/sh`. **Obviously, you have to insert your container ID**.
3. Within the container execute `wget localhost:4567` and `cat index.html`.

To your surprise the content of `index.html` says `Hello Container World` which means that the app works fine. Which brings us back to the idea that something is wrong with the port mapping. But it still isn't! So what is going on?

Admittedly, there is nothing wrong with neither the container image nor the `container run` command. In fact, **it's an application configuration issue**, but the issue is very common and therefore it makes sense to know about it.

The current version of our web app binds to the loopback network device [8] referred to by the IP address `127.0.0.1` inside the container. While you are within the container, e.g. using a shell `/bin/sh` and issue a command against the loop device such as `wget localhost:4567` the application responds as you are accessing it through the network device it is bound to.

If you are inside the container (`docker container exec -it <container-id> /bin/sh`) and type `ifconfig` to list existing network devices, you will see:

    /app # ifconfig
    eth0      Link encap:Ethernet  HWaddr 02:42:AC:11:00:02
            inet addr:172.17.0.2  Bcast:172.17.255.255  Mask:255.255.0.0
            UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
            RX packets:28 errors:0 dropped:0 overruns:0 frame:0
            TX packets:11 errors:0 dropped:0 overruns:0 carrier:0
            collisions:0 txqueuelen:0
            RX bytes:2803 (2.7 KiB)  TX bytes:961 (961.0 B)

    lo        Link encap:Local Loopback
            inet addr:127.0.0.1  Mask:255.0.0.0
            UP LOOPBACK RUNNING  MTU:65536  Metric:1
            RX packets:0 errors:0 dropped:0 overruns:0 frame:0
            TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
            collisions:0 txqueuelen:1000
            RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

This means that there is the loopback device `lo` but also the device `eth0`. No guess which device needs to be used to make the app available for a port mapping. Exactly, `eth0`.

In the case of the Sinatra app this can be achieved with a code change. In a production grade web application, this would be implemented as a configuration option but for our example, the code change will suffice.

    require 'sinatra'

    set :bind, '0.0.0.0'

    get '/' do
    '<h1>Hello World!</h1>'
    end

Binding to the special IP address `0.0.0.0` is a general way to bind a process to all IP addresses. While this is convenient, it may be dangerous if the machine had a public IP address and binding to it would be unintended. In this case, there are only two network devices and it is ok to bind to both of them, so binding to `0.0.0.0` is acceptable.

Create a new container image version `0.2.0`:

    docker image build -t simple-web-app:0.2.0 .

And run it:

    docker container run -p 8081:4567 simple-web-app:0.2.0

**Point your browser to `http://localhost:8081`. Voilà! It works!**

## Takeaways

This section contains a few lessons worth pointing out:

1. By using existing images as base images, it is fairly easy to provide the required runtime environment for an application.
2. If you want to expose a port, ensure that the process to be exposed is bound to the right network interface and not only to the loopback device.

## `Dockerfile` Reference
There are many more instructions allowed in a `Dockerfile`. The Docker documentation contains a Dockerfile Reference section [6] which is worth a read.

## Links

1. Computerhope, Linux, Printf, https://www.computerhope.com/unix/uprintf.htm
2. Ruby, https://www.ruby-lang.org
3. Docker Hub, https://hub.docker.com/
4. Alpine Linux, https://alpinelinux.org/
5. Debian on Docker Hub, https://hub.docker.com/_/debian
6. Docker Documentation, Dockerfile Reference, https://docs.docker.com/engine/reference/builder/
7. Docker Desktop, https://www.docker.com/blog/get-to-know-docker-desktop/
8. Wikipedia, Loopback Device, https://en.wikipedia.org/wiki/Loop_device
