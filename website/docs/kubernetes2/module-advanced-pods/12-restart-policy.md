---
slug: /advanced-kubernetes/pod-restart-policy
id: pod-restart-policy
title: Pod Restart Policy
---

A Pod's `restartPolicy` determines what happens when a Pod exits. The exit can be due to Pod completion or failure. 

The `restartPolicy` applies to all containers in the Pod.

## Explore Pod Restart Polices

Possible values for the `restartPolicy` are:

* `Always`: Restart the Pod for both exit reasons completion and failure.
* `OnFailure`: Restart only if the Pod has failed.
* `Never`: Don't restart the Pod at all.

If no `restartPolicy` is specified, the value `Always` is set as a default.

### Restart Policy `Never`

The following command starts a Pod opening an interactive `sh` shell in a Pod with a single container using the `restartPolicy: Never`:

    kubectl run -i --tty busybox --image=busybox --restart=Never -- sh

When typing `exit`, the `sh` shell process and thus the Pod exits. 

    kubectl run -i --tty busybox --image=busybox --restart=Always -- sh

Consequently,

    kubectl get pods


will show that the Pod has completed:

    NAME            READY   STATUS      RESTARTS   AGE
    busybox         0/1     Completed   0          8s

The Pod is still there but it's not running and won't be restarted. 

We can now remove it entirely:

    kubectl delete pod busybox

### Restart Policy `Always`

Creating a Pod with `restartPolicy: Always`:

    kubectl run -i --tty busybox --image=busybox --restart=Always -- sh

When the shell is existed again, watch what happens:

    NAME            READY   STATUS     RESTARTS   AGE
    busybox         0/1     Pending    0          0s
    busybox         0/1     ContainerCreating   0          0s
    busybox         1/1     Running             0          2s
    busybox         0/1     Completed           0          5s
    busybox         1/1     Running             1 (2s ago)   7s

First, the Pod has been created opening the interactive shell. Then, when the shell has been existed, the Pod has completed just to be restarted and become `Running` again.

### Restart Policy `OnFailure`

Similarly, a Pod would be restarted in case of a failure. A failing Pod can be simulated by typing `exit 1` using the above mentioned example:

    kubectl run -i --tty busybox --image=busybox --restart=OnFailure -- sh

**Exercise**: Go and see yourself!