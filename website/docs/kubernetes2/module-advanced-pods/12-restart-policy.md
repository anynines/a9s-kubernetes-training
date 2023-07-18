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

Similarly, a Pod would be restarted in case of a failure. 

In man Linux/Unix systems a non-zero exit values sugggests that the process has failed. Based on this, Kubernetes interprets container processes existing with non-zero values to be failed, too.

Hence, a failing Pod can be simulated by executing a shell and running the command `exit 1`:

    kubectl run -i --tty busybox --image=busybox --restart=OnFailure -- sh -c "exit 1"

The output will show something similar to:

    NAME      READY   STATUS   RESTARTS     AGE
    busybox   0/1     Error    1 (4s ago)   5s
    busybox   0/1     CrashLoopBackOff   1 (2s ago)   6s
    busybox   0/1     Error              2 (18s ago)   22s
    busybox   0/1     CrashLoopBackOff   2 (16s ago)   37s
    busybox   0/1     Error              3 (31s ago)   52s
    busybox   0/1     CrashLoopBackOff   3 (16s ago)   68s
    busybox   0/1     Error              4 (43s ago)   95s
    busybox   0/1     CrashLoopBackOff   4 (14s ago)   109s
    busybox   0/1     Error              5 (94s ago)   3m9s
    busybox   0/1     CrashLoopBackOff   5 (13s ago)   3m21s
    busybox   0/1     Error              6 (2m54s ago)   6m2s
    busybox   0/1     CrashLoopBackOff   6 (16s ago)     6m17s
    busybox   0/1     Error              7 (5m5s ago)    11m
    busybox   0/1     CrashLoopBackOff   7 (15s ago)     11m
    busybox   0/1     Error              8 (5m10s ago)   16m
    busybox   0/1     CrashLoopBackOff   8 (12s ago)     16m

There are multiple lessons here:

First, the restart policy `OnFailure` has lead Kubernetes to restart the failing Pod as expected.

Second, looking at the `AGE` column of the output, the **exponential back-off delay (10s, 20s, 40s, ...)** becomes apparent. Each attempt to restart the Pod is delayed twice as long as the prior attempt until the upper boundary of 5 minutes is reached. Subsequent attempts will then be scheduled every 5 minutes. This timer is reset 10 minutes after starting the Pod successfully. In this case: never.

**Tidy up**:

    kubectl delete pod busybox
