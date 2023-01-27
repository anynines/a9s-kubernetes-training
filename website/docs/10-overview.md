---
id: training-overview
title: Kubernetes Training Overview
---

## Related Videos
<VideoContainer
    list={[{
      src: "https://www.youtube-nocookie.com/embed/H5OY7IDjPZU", 
      title: "Overview"
  }]}
/>


## Goal

The goal of this training is to enable you with the skills necessary to containerize your applications in order to run them in a Kubernetes cluster.

## Target Audience

This training has been created by anynines CEO Julian Fischer for the *Cloud Computing* lecture held together with Prof. Esch at the Saarland University of Applied Sciences (HTWdS).

The training therefore targets at developers entering the world of containerization and Kubernetes. Every interested person who has mastered the basics of at least one programming language should be able to follow the training.

## Training Structure

The Kubernetes training has two major parts:

1. Containerization
2. Kubernetes

The first part *Containerization* covers container basics such as containers, container images, container registries as well as how to build and publish simple container images.

The second part *Kubernetes* then introduces the `kubectl` command followed by core Kubernetes concepts such as Pods, ReplicaSets, Deployments, ConfigMaps, Securities, Jobs, and StatefulSets. Practical examples show their basic usage. Additionally, a few common failure scenarios are included illustrating how these issues can be fixed.

## Changelog

The following changes have been made:

* 2022-09-26: PostgreSQL 14.5
    * Updated PostgreSQL Chapters to PostgreSQL 14.5.
    * Fixed several inconsistencies in the tutorial.

* 2022-03-09: Docker and Kubernetees Updates

    * Adjust information in Docker tutorial to include the fact that Kubernetes moved
    away from Docker
    * Add minikube instructions and remove a9s Paas instructions
    * Update Kubernetes objects to recent API versions
    * Correct spelling and grammar

* 2020-08-31: PostgreSQL Streaming Replication

    * Adds a PostgreSQL tutorial on how to build a simple, three node PostgreSQL Streaming Replication with Kubernetes StatefulSets.

* 2020-04-30: StatefulSet and Fixes

    * Adds generating a self-signed SSL Certificate to the Ingress lesson.
    * Adds a command on how to retrieve and decode a Secret's value for a given key.
    * Fixes some spelling mistakes.
    * Fixes namespaces inconsistencies to `k8s-training`.

* 2020-04-27: StatefulSet Chapters Renamed

    * Renamed Chapters from "PostgreSQL Exercise {n}" to more titles describing the content of the chapters in greater detail.

* 2020-04-23: StatefulSets

    * Added large parts of the StatefulSet section. Still incomplete.