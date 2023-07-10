---
slug: /advanced-kubernetes/container-probes
id: container-probes
title: Container Probes
---


# Container Probes

Container probes are recurring, diagnostic procedures, executed by the kubelet on a container. Such a diagnostic procedure may involve executing a process within a container (`exec`) or making a network request using `httpGet` or `tcpSocket` [2].

There are **three types of Container Probes** supported by Kubernetes:

1. Liveness Probe
2. Readiness Probe
3. Startup Probe

## Liveness Probe

Experience shows that many applications being operated over extended periods of time stop responding, eventually. This may happen due to various reasons including memory leaks, bugs, etc. In order to bring failed Pods back to life, they must be restarted. The Liveness Probe is designed for exactly this purpose.

The liveness probe doesn't wait for the Readiness Probe to succeed.

**The liveness probe is used to restart failed containers und thus their surrounding Pods**.


## Readiness Probe

While the **Liveness Probe** is about **restarting** an unresponsive Pod, the **Readiness Probe** is about **controlling incoming traffic from the corresponding Service**. In other words, **a Readiness Probe prevents sending traffic to unresponsive Pods**.

* Kubernetes (Kubelet) probes readiness to know whan a container is ready to start accepting traffic [1].    
* A Pod is considered ready if all containers are ready.
* If a Pod is not ready then it is removed from corresponding Services by removing the Pod as an Service Endpoint.

So the Readiness Probe causes Kubernetes to wait for some time for the application to become ready. Once ready, the Pod is added as an Endpoint to the corresponding Services and thus traffic is routed to the Pod.

In other words, **the readiness probe is used to redirect incoming traffic exclusively to Pods being ready to serve requests**.

Liveness and readiness probes can be used simultaneously. Therefore, it is quite common to configure the Liveness Probe with a higher trashold than the Readiness Probe but using the same command. During startup the Pod is not-ready for a while until it becomes ready or the Liveness Probe finally kills it.

## Startup Probes

If, during a Pod startup, a time consuming, mandatory procedure accidentally causes the Liveness Probe to fail, a Startup Probe can be used. Only after the Startup Probe has been successfully passed, Liveness Probes will take over and subsequently be executed on a recurring basis.


* Use startup probes to know when a container application has started
* If a startup probe is configured, it disables liveness and readiness checks until the startup probe succeeds
    * This ensures that liveness and readiness probes don't prevent  application startup, e.g. in case the application's startup time is relatively long. A long startup procedure may otherwise cause the Kubelet to kill the Pod bevore the application could have been started.

* After the startup probe has been passed once, the liveness probe takes over. The liveness probe then ensures a faster response to failures, compared to leaving out the startup probe while setting a higher liveness threshold.

In many cases, the code is identical for both the Startup and Liveness Probe but with different threshold values in seconds.

Note that restarting a Pod upon a failed probe requires that the Pod's `restartPolicy` is set to `Always` or `OnFailure`. See also section [Restart Policy](/advanced-kubernetes/pod-restart-policy)

## Sources and Links

1. Kubernetes Documentation - Tasks - Configure Pods and Containers - Configure Liveness, Readiness and Startup Probes, https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

2. Kubernetes Documentation - Concepts - Workloads - Pods,
Pod Lifecycle, https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes

3. Kubernetes Documentation - Concepts - Workloads - Pods Pod Lifecycle, https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy