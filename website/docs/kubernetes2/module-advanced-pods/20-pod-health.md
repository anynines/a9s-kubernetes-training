---
slug: /advanced-kubernetes/pod-health
id: pod-health
title: Pod Health
---


# Pod Health

In previous sections, you have learned that Kubernetes has the ability to detect pods failures.
More than that, pods even come with self-healing capabilities as Kubernetes has the ability to restart failed pods.

In this section, pod health is investigated even closer and questions such as the following are answered:

* How does Kubernetes determine Pod health?
* How is Pod health related to container health?
* How to customize the default health probe?
* What is the difference between the health, liveness and readiness probe?*
* What do probes have to do with determining a Pod's health status?
* What happens to unhealthy Pods?