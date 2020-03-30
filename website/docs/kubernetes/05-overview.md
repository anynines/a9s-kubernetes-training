---
id: kubernetes-overview
title: Kubernetes Overview
---

The goal of the Kubernetes lessons is to enable you to deploy workloads to Kubernetes clusters. The training will guide you through the most frequently used Kubernetes resources and make you familiar with interacting with Kubernetes.

## Scope of the Training

Areas covered in this training: 

How to run a distributed application system in Kubernetes covering topics such as:

* Kubectl basics
* Pods
* ReplicaSets
* Deployments
* Services
* Ingresses
* ConfigMaps and Secrets
* Jobs and CRONJobs
* StatefuleSets

At the end of the training a final exam is described which provides you with the opportunity to test your freshly learned skills.

## Prerequisites

The Kubernetes training assumes that you are familiar with **containerization basics**.

In particular you should know:

* What a container is.
* What a container images is.
* How to start a container.
* How to build a container image.
* What a container registry is.
* How to publish a local container image to a container registry.
* What a container volume is.

It is therefore recommended to go through the **container-training**, first.

## Training Didadicts

Learning is an iterative if not recursive process. It is hardly possible to grasp complex concepts in a single learning step. Often, a first impression is made and by revisiting a topic many times a more complete mental model is created.

Consequently, this training does not aim to provide Kubernetes with all its facets and features. Depending on previous knowledge flooding a learner with architectural details and a large number of nunanced features may be rather confusing or even frustrating. 

When drawing a Koch snowflake fractal [1] the first iteration draws the outer shape. In subsequent iterations more depth is added. Similar to this, the main goal of this training is therefore to draw the outline of what Kubernetes is. More depth can be added with subsequent trainings.

The first iteration also **does not cover the Kubernetes architecture** in-depth. A few comments are made where a concept is relevenat to the lesson at hand but the idea is to **focus on providing a learner with a maxium of utility**. 

**At the end of this training you will be able to deploy and operate a stateful, distributed application system with Kubernetes.**

In order to achieve this goal corners will be cut and nuances be omitted. This way you should be able to follow the common theme.

The training also contains **exercises** proving you with tiny challenges to avoid falling into a cognitive cut-and-paste paralysis. Solutions to most of the exercises can be found in the training so that you can see how to solve a potential problem yourself.

A few common mistakes are provoked during the training. These mistakess have been selected by observing a few trainings. Be prepared to make your own mistakes though. The more time you spend thinking about something, the more you will learn. Therefore, embrace your mistakes.

The training has been tested on `https://paas.anynines.com` but any Kubernetes distribution will do the trick although minor modifcations may be necessary. Especially in the context of Ingresses this is to be expected.

## Links

1. Wikipedia, Koch Snowflake, https://en.wikipedia.org/wiki/Koch_snowflake