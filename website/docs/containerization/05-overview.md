---
id: container-overview
title: Container Overview
---
## Related Videos

<VideoContainer
  list={[{
   src: "https://www.youtube-nocookie.com/embed/jq9wLQpDtvQ",
   title: "Container Overview"
  }]}
/>

The goal of the Container lessons are to enable developers to create container images as a **preparation for the Kubernetes Training**.

Therefore, the training will cover container basics and use Docker as the container image format. However, the training does not aim to enable developers to deploy application workloads to production environments using stand-alone Docker (in contrast to the container runtime in Kubernetes).

## Scope

At the end of this training you will know:

* What a container is.
* What a container images is.
* How to start a container.
* How to build a container image.
* What a container registry is.
* How to publish a local container image to a container registry.
* What a container volume is.

By the end of the training you should be able to wrap simple applications into container images which is a prerequisite for deploying workloads to Kubernetes.

## Prerequisites

The training aims to address a broad target audience. The following constraints apply:

### Skills

The Container Training assumes that you are a developer.

You should know:
* at least one programming language

Experience in the following areas are helpful but not absolutely necessary:

* Unix/Linux operating systems.
* Virtualization such as vmware [1] or the XEN hypervisor [2].
* Virtual Infrastructures such as Amazon Web Services [3] (in particular EC2) or OpenStack [4].
* 12 Factor Manifest [5]

The training material will try to provide references and explain core concepts where necessary.

### Operating System

It is assumed that you are using an unix/linux operating system with access to a terminal application and a shell. On a Mac `iTerm2` [1] and either `Bash` [2] or `Zsh` [3] will work fine.

In case you are using Microsoft Windows you may want to get a `Cygwin` [4] shell. However, the training has not been tested under Windows, so you may run into issues.

### Editor

Have your favorite text editor ready. Anything from Vim [6] to Microsoft Visual Studio Code [7] will work. Both editors are free and available across operating systems such as Windows, major Linux Distros and MacOS. Feel free to use your favorite editor though.

> **Note**: 
> If you are using Visual Studio Code, you might want to install the `Docker`
> and `Kubernetes` extension. They will enable nice to have features like
> visualizations for the Kubernetes cluster state or a list of docker images on
> your machine.

## Links
1. vmware, https://www.vmware.com/de.html
2. Xen Project, https://xenproject.org/
3. Amazon Web Services (AWS), https://aws.amazon.com/
4. OpenStack, https://www.openstack.org/
5. The Twelve-Factor App, https://12factor.net
6. Vim, https://www.vim.org/
7. Microsoft Visual Studio Code, https://code.visualstudio.com/
