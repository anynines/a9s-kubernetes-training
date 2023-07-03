---
slug: /advanced-kubernetes/advanced-pod-settings
id: intro
title: Advanced Pod Settings
---

# Advanced Pod Settings

Previous sections cover [Pod basics](https://learn.kubernetes.anynines.com/kubernetes/pods/introduction) explaining what a Pod is and how to declaratively describe one.

It has been described how a Pod is the smallest schedulable unit in Kubernetes, may contain one or several InitContainers and Containers, that they may share volumes and share a loopback network device with a common port range.

In this section, more advanced Pod settings are discussed: **health monitoring** and **Pod scheduling**.

Kubernetes has built-in health-monitoring capabilities. In previous sections, the self-healing of failed Pods has already been studied. In this section, we'll have a closer look at how the **health and readiness** of a container are determined. More than that, we'll see that health and readiness probes can be customized to context specific needs.

When provisioning one or even multiple distributed systems to a single Kubernetes cluster, many microservices will co-exist within the cluster potentionally competing for Kubernetes Node resources. It is therefore valuable to **understand how the Kubernetes scheduler places Pods** among Kubernetes Nodes and **what happens if resources become scarce**.