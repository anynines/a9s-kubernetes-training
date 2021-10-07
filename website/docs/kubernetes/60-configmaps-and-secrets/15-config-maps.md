---
id: configmaps
title: ConfigMaps
---

## Related Videos
<VideoContainer
  list={[{
   src: "https://www.youtube-nocookie.com/embed/7iU4uz-oaAU",
   title: "ConfigMaps Part 2"
  }]}
/>

ConfigMaps are used to store non-sensitive application configuration parameters. Think of config files managed by Kubernetes and you are already close.

## Creating a ConfigMap

There are multiple ways of creating a ConfigMap. They can be created from files, directories or by providing values directly using the command line [3].

Although ConfigMaps are key value pairs, this does not mean that values have to be very short. In fact, a value can contain content **up to 1 megabyte of non-binary UTF-8 text**.

### Creating a ConfigMap from a Configuration File

The example `20-config-file.conf` contains an imaginary configuration file:

    # This is an exemplary config file

    number-of-requests = 20
    very-import-switch = true

To import the config file into a ConfigMap execute the following command:

    kubectl create configmap config-example-1 --from-file=20-config-file.conf

To verify that the ConfigMap has been created successfully:

    kubectl get configmaps config-example-1 -o yaml

The `-o yaml` switch has the effect that not only the ConfigMap is listed but also its content shown. You should see a section `data` contain the content of the imported configuration file.

### Creating a ConfigMap from Command Line Literals

It is also possible to specify ConfigMaps using command line literals:

    kubectl create configmap config-example-2 --from-literal=number-of-requests=20 --from-literal=very-important-switch=true

See yourself how the key values pairs have been joined into a ConfigMap:

    kubectl get configmaps config-example-2 -o yaml

## Deleting a ConfigMap

Deleting a ConfigMap is simple:

    kubectl delete configmap config-example-1
    kubectl delete configmap config-example-2

## Accessing ConfigMaps

Once a ConfigMap is created Kubernetes offers several access mechanisms to applications.

  * Env Variable
  * Filesystem

In order to grant an application access to a ConfigMap it must be told which ConfigMap to access and which mechanism is to be used. This is done in the Pod spec:

See YAML file: `40-pod-with-config-map-env.yml`:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox-config
spec:
  containers:
    - image: busybox
      name: busybox-config-container
      command:
        - "env"
      env:
        - name: NUMBER_OF_REQUESTS
          valueFrom:
            configMapKeyRef:
              name: config-example-2
              key: number-of-requests
        - name: VERY_IMPORTANT_SWITCH
          valueFrom:
            configMapKeyRef:
              name: config-example-2
              key: very-important-switch
  restartPolicy: Never
```

Apply the YAML file:

    kubectl apply -f 40-pod-with-config-map-env.yml

Verify whether the Pod has been created successfully:

    kubectl get pod busybox-config

You should see an error with the `STATUS` field indicating `CreateContainerConfigError`. This gives you the opportunity to think about how a failing Pod can be investigated. Maybe it's worth having a look at the Pod's log output:

    kubectl logs busybox-config

But the output is disappointing:

    error: the server doesn't have a resource type "logs"

Why are there no logs?

The answer is because there is no Pod that could produce logs as **the Pod creation failed**. At this stage the `kubectl log` command is not helpful.

As a general utility to investigate Kubernetes objects - not only Pod objects - the `kubectl describe` command is very handy:

    kubectl describe Pod busybox-config

At the end of the output a tabular paragraph `Events` tells us about the lifecycle events of our `busybox-config` Pod:

    Error: configmap "config-example-2" not found

## Exercise

Try to fix the above *configmap not found* issue.

If you have fixed the issue, the container named `busybox-config` should have been started successfully.

Then:

    kubectl logs busybox-config

Should return the environment variables seen by the container inside the `busybox-config` Pod. The listing should include:

    NUMBER_OF_REQUESTS=20
    VERY_IMPORTANT_SWITCH=true

Also have a look at all the other environment variables added by Kubernetes:

    PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
    HOSTNAME=busybox-config
    APP_GAMMA_SERVICE_PORT_8080_TCP_PORT=8080
    KUBERNETES_SERVICE_HOST=10.100.200.1
    KUBERNETES_PORT_443_TCP_PROTO=tcp
    APP_GAMMA_SERVICE_SERVICE_HOST=10.100.200.246
    APP_GAMMA_SERVICE_PORT_8080_TCP=tcp://10.100.200.246:8080
    KUBERNETES_SERVICE_PORT_HTTPS=443
    APP_GAMMA_SERVICE_PORT_8080_TCP_PROTO=tcp
    APP_GAMMA_SERVICE_PORT_8080_TCP_ADDR=10.100.200.246
    KUBERNETES_PORT=tcp://10.100.200.1:443
    KUBERNETES_PORT_443_TCP_ADDR=10.100.200.1
    APP_GAMMA_SERVICE_SERVICE_PORT=8080
    APP_GAMMA_SERVICE_PORT=tcp://10.100.200.246:8080
    KUBERNETES_SERVICE_PORT=443
    KUBERNETES_PORT_443_TCP=tcp://10.100.200.1:443
    KUBERNETES_PORT_443_TCP_PORT=443
    HOME=/root

It's worth remembering that Kubernetes provides you with context information of the execution environment.

## Links

1. The Twelve Factor App, https://12factor.net/
2. Environment Variables, Wikipedia, https://en.wikipedia.org/wiki/Environment_variable
3. Kubernetes Documentation, Tasks, Configure a Pod to Use a ConfigMap, https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/
