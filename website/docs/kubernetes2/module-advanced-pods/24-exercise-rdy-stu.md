---
slug: /advanced-kubernetes/readines-startup-probe-exercise
id: readines-startup-probe-exercise
title: Readiness and Startup Probes Exercise
---


In the last section you've learned about the Liveness Probe and the ability to extend Kubernetes' default detection of failed pods. Furthermore, you've observed self-healing behavior: Pods with a failing Liveness Probe are being replaced and thus automatically recover from simple application failures.

In this section experiments with two more Container Probes are conducted: Readiness and Startup Probes. 

## The limits of `initialDelaySeconds`

In the context of the Livess Probe, the setting `initialDelaySeconds` has been introduced. The settting causes a delay of the probe's first execution and applies to all probes including Liveness, Readiness and Startup.

In the following, the previously introduced demo app will be used to simulate a slow starting application to see the applicability and limits of `initialDelaySeconds`.

### Exercise: `initialDelaySeconds` 

`70-deployment-lvn2.yaml`:

    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: adv-pod-conf-depl
      labels:
          app: adv-pod-conf
    spec:
      selector:
        matchLabels:
          app: adv-pod-conf
      replicas: 3
      template:
        metadata:
          labels:
            app: adv-pod-conf
        spec:
          containers:
          - name: adv-pod-conf-con
            image: fischerjulian/apc-demo-app:0.7.0
            ports:
              - containerPort: 4567
            env:
              - name: MY_POD_IP
                valueFrom:
                  fieldRef:
                    fieldPath: status.podIP
              - name: SLEEP_ON_STARTUP
                value: "30"
            livenessProbe:
              httpGet:
                path: /healthz
                port: 4567            
              initialDelaySeconds: 35
              periodSeconds: 3

The demo app is now configured using the `SLEEP_ON_STARTUP` environment variable to become a slow starting application. The environment variable makes the application wait for `30s` before starting the webserver. However, the Liveness Probe is configured with `initialDelaySeconds: 3` so that the Kubelet waits for three seconds before performing the first Liveness Probe. As this probe will never succeed (`3 < 30`), corresponding containers will fail and enter a crash loop. The application will never become operational.

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

`80-deployment-rdy.yaml`:

    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: adv-pod-conf-depl
      labels:
          app: adv-pod-conf
    spec:
      selector:
        matchLabels:
          app: adv-pod-conf
      replicas: 3
      template:
        metadata:
          labels:
            app: adv-pod-conf
        spec:
          containers:
          - name: adv-pod-conf-con
            image: fischerjulian/apc-demo-app:0.7.0
            ports:
              - containerPort: 4567
            env:
              - name: MY_POD_IP
                valueFrom:
                  fieldRef:
                    fieldPath: status.podIP
              - name: SLEEP_ON_STARTUP
                value: "30"
            livenessProbe:
              httpGet:
                path: /healthz
                port: 4567            
              initialDelaySeconds: 35
              periodSeconds: 3
            readinessProbe:
              httpGet:
                path: /healthz
                port: 4567            
              initialDelaySeconds: 3
              periodSeconds: 3

With the readiness probe in place, simulating a failing application instance won't show the above error message. Due to the long startup time, the self-healing process takes a while. Hence, striving for short startup periods is desirable.

**Note:** With the current `SLEEP_ON_STARTUP` environment variable, the app starts within a deterministic and known timeframe of `30s`. Therefore, a startup probe isn't mandatory as the setting `initialDelaySeconds` could be used but we will see that using a Startup Probe comes with an advantage.

## Startup Probe

`90-deployment-stup.yaml`:

    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: adv-pod-conf-depl
      labels:
          app: adv-pod-conf
    spec:
      selector:
        matchLabels:
          app: adv-pod-conf
      replicas: 5
      template:
        metadata:
          labels:
            app: adv-pod-conf
        spec:
          containers:
          - name: adv-pod-conf-con
            image: fischerjulian/apc-demo-app:0.8.1
            ports:
              - containerPort: 4567
            env:
              - name: MY_POD_IP
                valueFrom:
                  fieldRef:
                    fieldPath: status.podIP
              - name: SLEEP_ON_STARTUP
                value: "random"
            livenessProbe:
              httpGet:
                path: /healthz
                port: 4567            
              initialDelaySeconds: 30
              periodSeconds: 3
            readinessProbe:
              httpGet:
                path: /healthz
                port: 4567            
              initialDelaySeconds: 30
              periodSeconds: 3

The `initialDelaySeconds` setting of Live and Readiness Probes postpone the execution of the first probe. For a known, fixed delay this may be handy. However, if the startup delay is unknown and varies in broader range, detecting live and ready pods as quickly as possible would be more desirable  than waiting for a fixed amount of time.

**Exercise**:

By setting the environment variable `SLEEP_ON_STARTUP` to `random` the startup delay will be a random value between `35` and `300` seconds.

The goal is to set a startup probe so that each pod will be considered live and ready as soon as the randon startup delay has passed. Setting a fixed, rather long `initialDelaySeconds` is therefore not a good idea as this fixes the startup delay to the maximum possible duration for each pod.

`91-deployment-stup.yaml`:

    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: adv-pod-conf-depl
      labels:
          app: adv-pod-conf
    spec:
      selector:
        matchLabels:
          app: adv-pod-conf
      replicas: 3
      template:
        metadata:
          labels:
            app: adv-pod-conf
        spec:
          containers:
          - name: adv-pod-conf-con
            image: fischerjulian/apc-demo-app:0.8.1
            ports:
              - containerPort: 4567
            env:
              - name: MY_POD_IP
                valueFrom:
                  fieldRef:
                    fieldPath: status.podIP
              - name: SLEEP_ON_STARTUP
                value: "random"
            livenessProbe:
              httpGet:
                path: /healthz
                port: 4567            
              initialDelaySeconds: 30
              periodSeconds: 3
            readinessProbe:
              httpGet:
                path: /healthz
                port: 4567            
              initialDelaySeconds: 30
              periodSeconds: 3
            startupProbe:
              httpGet:
                path: /healthz
                port: 4567            
              failureThreshold: 61 # 61*5 = 305s max startup time
              periodSeconds: 5

Have a closer lock at this section of the YAML file:

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