# Exercise: Readiness and Startup Probes

In the last section you've learned about the Liveness Probe and the ability to extend Kubernetes' default detection of failed pods. Furthermore, you've observed the self-healing behavior replacing pods with a failed Liveness Probe to recover from simple application failures.

In this section experiments with two more Container Probes are conducted: Readiness and Startup Probes. 

## The limits of `initialDelaySeconds`

In the context of the Livess Probe, the setting `initialDelaySeconds` has been introduced. The settting causes a delay of the probe's first execution and applies to all probes including Liveness, Readiness and Startup.

In the following, the previously introduced demo app will be used to simulate a slow starting application to see the applicability and limits of `initialDelaySeconds`.

### Exercise: `initialDelaySeconds` 

`70-deployment-lvn2.yaml`

The demo app is now configured using the `SLEEP_ON_STARTUP` environment variable to become a slow starting application. The environment variable makes the application wait for `30s` before starting the webserver. However, the liveness probe is configured with `initialDelaySeconds: 3` so that the Kubelet waits for three seconds before performing the first liveness probe. As this probe will never succeed (`3 < 30`), corresponding containers will fail and enter a crash loop. The application will never become operational.

Setting `initialDelaySeconds` to let's say `35` solves the crashloop problem and the application eventually starts. However, during the startup the corresponding Service already routes traffic to the application although it isn't ready, yet. You may encounter error messages such as:

```JSON
{
  "kind": "Status",
  "apiVersion": "v1",
  "metadata": {},
  "status": "Failure",
  "message": "error trying to reach service: dial tcp 172.17.0.6:4567: connect: connection refused",
  "reason": "ServiceUnavailable",
  "code": 503
}
```

**A mechanism is required that will also tell the Service to wait routing incoming traffic until the application instances become ready**. This is the purpose of the **Readiness Probe**.

`80-deployment-rdy.yaml`

With the readiness probe in place, simulating a failing application instance won't show the above error message. Due to the long startup time, the self-healing process takes a while. Hence, striving for short startup periods is desirable.

**Note:** With the current `SLEEP_ON_STARTUP` environment variable, the app starts within a deterministic and known timeframe of `30s`. Therefore, a startup probe isn't mandatory as the setting `initialDelaySeconds` could be used but we will see that using a Startup Probe comes with an advantage.

## Startup Probe

`90-deployment-stup.yaml`

The `initialDelaySeconds` setting of live and readiness probes postpone the execution of the first probe execution. For a known, fixed delay this may be handy. However, if the startup delay is unknown and varies in broader range, it would be desired to detect live and ready pods as quickly as possible rather than waiting for a long time, even if the Pod has started quicker than anticipated.

**Exercise**:

By setting the environment variable `SLEEP_ON_STARTUP` to `random` the startup delay will be a random value between `35` and `300` seconds.

The goal is to set a startup probe so that each pod will be considered live and ready as soon as the randon startup delay has passed. Setting a fixed, rather long `initialDelaySeconds` is therefore not a good idea as this fixes the startup delay to the maximum possible duration for each pod.

`91-deployment-stup.yaml`

```YAML
startupProbe:
  httpGet:
    path: /healthz
    port: 4567            
  failureThreshold: 61 # 61*5 = 305s max startup time
  periodSeconds: 5
```

By introducing a startup probe with a `failureThreshold` of `61` given a `periodSeconds` of `5` a total of `305` seconds may pass before a startup is completed. Any longer delay will cause a pod failure and if the startup delay is shorter, let's say `50` seconds, the pod will start in under a minute. 
Hence, **the startup probe allows us to define a fine granular sampling rate for executing the startup probe which reduces the startup delay significantly**.