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
* What is the difference between the health, liveness and readiness probe?
    * What is a liveness probe?
    * What is a readiness probe?
    * What's the difference between the two?
    * What do they have to do with determining a Pod's health status?
* What happens to unhealthy Pods?



## Container Probes

Container probes are diagnostic recurring procedures executed by the kubelet on a container. Such a diagnostic procedure may involve executing a process within a container (`exec`) or making a network request (`httpGet` and `tcpSocket`) [2].

There are three types of Probes supported by Kubernetes:

1. Liveness Probe
2. Readiness Probe
3. Startup Probe

## Liveness Probe

Experience shows that many applications being operated over extended periods of time stop responding eventually. In order to bring them back to life, they must be restarted. The Liveness Probe is designed for exactly this purpose.

The liveness probe doesn't wait for the readiness probe to succeed. **TODO**: > initialDelaySeconds || startupProbe

* **TODO**: Example for liveness probe.
    * liveness command
    * liveness HTTP request
    * liveness TCP command

**The liveness probe is used to restart failed containers und thus their surrounding Pods**.

Note that restarting a Pod upon a failed Liveness Probe requires that the Pod's `restartPolicy` is set to `Always` or `OnFailure`.

## Readiness Probe

While the **Liveness Probe** is about **restarting** an unresponsive Pod, the **Readiness Probe** is about **controlling incoming traffic from the corresponding Service**. In other words, a Readiness Probe prevents sending traffic to an unresponsive Pod.

* Kubelet probes readiness to know whan a container is ready to start accepting traffic [1].
    * **TODO** Explain what the Kubelet is or rephrase.
* A Pod is considered ready if all containers are ready.
* When a Pod is not ready, it is removed from Service load balancers.

* Waiting for a limited amount of time for the application to become ready to service traffic and be (re-)integrated into the service load balancer. 
**= Control the service load balancing**

**The readiness probe is used to redirect incoming traffic exclusively to those Pods being ready to service request and to avoid redirecting traffic to Pods which aren't ready**.

Liveness and readiness probes can be used simultaneously.

## Startup Probes

If during a Pod startup a mandatory procedure may accidentally trigger the Liveness, a Startup Probe can be used. Only after the Startup Probe has been successfully passed, Liveness Probes will take over and subsequently be executed on a recurring basis.


* Use startup probes to know when a container application has started
* If a startup probe is configured, it disables liveness and readiness checks until the startup probe succeeds
    * This ensures that liveness and readiness probes don't prevent  application startup, e.g. in case the application's startup time is relatively long. A long startup procedure may otherwise cause the Kubelet to kill the Pod bevore the application could have been started.

* After the startup probe has been passed once, the liveness probe takes over. The liveness probe then ensures a faster response to failures, compared to leaving out the startup probe while setting a higher liveness threshold.

In many cases, the code is identical for both the Startup and Liveness Probe but with different threshold values in seconds.

## Sources and Links

1. Kubernetes Documentation - Tasks - Configure Pods and Containers - Configure Liveness, Readiness and Startup Probes, https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

2. Kubernetes Documentation - Concepts - Workloads - Pods,
Pod Lifecycle, https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes

3. Kubernetes Documentation - Concepts - Workloads - Pods Pod Lifecycle, https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy