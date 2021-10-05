---
id: container-intro
title: Containers Basics
---

<VideoContainer
  title="Videomaterial for this Chapter"
  list={[{
   src: "https://www.youtube-nocookie.com/embed/eZ-kbmLVDDU",
   title: "Kubernetes Training - What is a container?"
  },{
   src: "https://www.youtube-nocookie.com/embed/rtJ-Rgi7kzU",
   title: "Kubernetes Training - Container vs. VMs"
  },{
   src: "https://www.youtube-nocookie.com/embed/0k-0GB8Mu7U",
   title: "Kubernetes Training - Container Images & Container Registry"
  }]}
/>

Before diving into Kubernetes it is necessary to understand containerization basics. This chapter aims to provide a first mental model about what containers, container images and container registries are.

## What is a Container

The concept of a container carries some aspects of a virtual machine (VM) but also from a software package (such as a Debian dpkg package).

The main idea of a container - just like its physical counterpart - is to achieve a standardization of software packaging. In this regard a container is similar to a Debian package [1].

Once a container has been started it represents a somewhat isolated runtime environment to run a piece of software often a single purpose process.

The term container gained much popularity in the context of Docker [2], the most popular open source container runtime. Kubernetes is often configured to use Docker as a container runtime but alternative drivers exist [3]. So let's stick with Docker and focus on grasping container concepts.

## Container vs. VMs

The question may come to mind what the difference between a container and a virtual machine is. A virtual machine (VM) is usually what the name suggests - a flexible, virtual version of a physical server.

VMs usually come with a local disk that behaves like an ordinary hard disk. The VM itself - depending on the underlying architecture - a comparativley high overhead compared to a bare metall machine. It usally takes minutes to start a VM. Also if there's a full operating system running inside a VM this creates a signficant memory and CPU overhead.

**A container** is - up to this point - rarely based on a hypervisor like most VMs are. Instead, it **uses light-weight operating system isolation mechanisms such as Linux CGroups [4] and Linux Namespaces [5]**.

**As a rule of thumb VMs tend to be better isolated**. If properly configured, co-located VMs do not to interfere much with each other's performance - much less than co-located containers. Co-located means that VMs or - respectively containers - reside on the same node where a node can be either a pyhsical machine for VMss and/or a virtual machine for containers. Often, the reason for the weaker isolation of containers is a weaker (or even absent) IO isolation for disk and network operations.

**Containers are light-weight, have little overhead and thus are fast in both startup and execution**.

As mentioned earlier, the comparison is not really accurate as containers also aim at being a standard for software distribution. As such containers are different from VMs in the way software is brought into a container: using a container image.

In contrast to a VM, a container is meant to be stateless or at least to be as stateless as possible. So while it is OK to write temporary files to a container, the container should - according to the 12 factor manifest [6] - store state preferably in specialized data stores such as databases, message queues, etc.

Most container runtimes also offer some sort of persistent volumes that can be used to store data and overcome the statelessness of containers. **Without such a volume restarting a container means loosing all data stored in the container's filesystem**.

It depends on the container runtime configuration how these volumes are presented. They could be partitions of the underlying host - being vulnerable to container host failures - or preferably they could be remotely attached block devices with increased availability and durability.

## Container Images

A container specification contains a reference to the container image to be used. Additionally, there may be a specification of which command to be executed along with arguments to be passed to the command. But where does the command come from? **The software run inside a container comes from the underlying container image**.

While there are multiple container image formats, the most popular one is the Docker [7] container image format. Docker is - at the time of this writing - the most popular container engine and also very popular option as a Kubernetes container runtime. For this reason it's worth spending some time with Docker. Hopefully, over time vendor independent container formats such as the OCI Image Format Specification [8] become more popular.

In the following the term *container image* is used equivalent to *Docker Container Image*.

**A container image is a read-only filesystem with instruction for starting a container**.
A container image is based on a layered filesystem. When a container is started the upper most layer is a volatile filesystem. It is possible to read and write to the container filesystem as usualy but **changes will be lost on container restart**.

**Container images can be based on other container images**. As container images are based on layers it is possible to inherit from a base image, apply changes to it and store these changes as a separate filesystem layer. Each layer can add, modify and even delete files from the underlying layer. The combination of a base image and its modification are then turned into a new image which can then be used as a new base layer to create further images.

## Container Registry
Once a container image is locally created, there must be a path to the container runtime where containers should be started from it. Simply speaking, **the purpose of a container registry is to store containers images and distribute them to a container runtime upon request**.

There are many container regestry implementations. They can be offered by public infrastructure providers, commercial vendors or be open source projects such as Harbor[9].

During this training the widely spread registry **dockerhub** [10] is used as it is often the default registry for both Docker hosts and Kubernetes clusters. It also provides a free tier which will suffice for the purpose of this training.

Now that you have a rough understanding of what a container, container image and container registry is, it is time to see how these things in action.

## Links

1. Debian Wiki, Packaging Introduction, https://wiki.debian.org/Packaging/Intro?action=show&redirect=IntroDebianPackaging
2. Open Source Docker, https://www.docker.com/community/open-source
3. Kubernetes Documentation, Setup, Container Runtimes, https://kubernetes.io/docs/setup/production-environment/container-runtimes/
4. Linux Programmer's Manual, CGROUPS(7), http://man7.org/linux/man-pages/man7/cgroups.7.html
5. Linux Programmer's Manual, NAMESPACES(7), http://man7.org/linux/man-pages/man7/namespaces.7.html
6. The Twelve-Factor App, https://12factor.net/
7. Open Source Docker, https://www.docker.com/community/open-source
8. OCI Image Format Specification, https://github.com/opencontainers/image-spec
9. Harbor, https://goharbor.io/
10. Dockerhub, https://hub.docker.com/
