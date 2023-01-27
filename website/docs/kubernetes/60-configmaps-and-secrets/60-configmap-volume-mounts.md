---
id: configmaps-volume-mounts
title: ConfigMap Volume Mounts
---

## Related Videos
<VideoContainer
  list={[{
   src: "https://www.youtube-nocookie.com/embed/7iU4uz-oaAU",
   title: "ConfigMaps Part 2"
  }]}
/>

In the past lesson you have learned how to map ConfigMaps to environment variables. While this is a valid approach to separate configuration information from application source code, it comes with a slight drawback.

**Environment variables are injected into a Pod during its creation and therefore changes to a ConfigMap won't be reflected during the Pod's lifetime. In other words, to update the ConfigMaps of a Pod, the Pod has to be restarted.**

Alternatively, Kubernetes allows **file based access to ConfigMaps**. With this approach **a ConfigMap is mounted as a volume into a Pod. In case the ConfigMap is updated, changes are reflected immediately in the files of the ConfigMap volume.** To date there is no notification from Kubernetes telling the application actively about a ConfigMap update. It therefore is **the responsibility of the application to observe ConfigMap files for changes** and handle them accordingly.

Have a look at the Pod definition in the file `70-pod-with-config-map-volume.yaml`:

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
        - "sh"
        - "-c"
      args:
        - "ls /config; cat /config/number-of-requests; echo \" \"; cat /config/very-important-switch"
      volumeMounts:
        - name: config-volume
          mountPath: /config
  volumes:
    - name: config-volume
      configMap:
        name: config-example-2
  restartPolicy: Never
```

The Pod definition in `70-pod-with-config-map-volume.yaml` uses `sh -c` as the container command to then execute several shell commands passed as arguments. Generally speaking, containers should have a single responsibility and thus invoking a single command should suffice. In this case of a one-off Pod building a container image would be wasteful so that the trick comes in handy.

Also worth recognizing is that the volume is defined at the Pod level but mounted at the container level. You can see this by looking at the indentation level where `volumes` is on the same level as `spec` but `volumeMounts` is located under the `busybox-config` container in the `containers` section. This means that a volume can be shared among containers of the same Pod.

Execute the Pod definition:

    kubectl apply -f 70-pod-with-config-map-volume.yaml

The `ls /config` command will print to STDOUT and the output can be gathered as logs:

    kubectl logs busybox-config

The log output should be:

    number-of-requests
    very-important-switch
    20
    true

As the log-output shows the ConfigMap keys are represented as files in the ConfigMap volume. Their contents are the ConfigMap values associated with the corresponding keys. Pretty straightforward.

## Exercise

If ConfigMap keys become files and ConfigMap values are the contents of these files, the earlier ConfigMap example `config-example-1` comes to mind. In this ConfigMap the key `20-config-file.conf` was created after importing a config file converting into a ConfigMap.

Modify the Pod definition from the previous example to mount the config file contained in the ConfigMap and write its contents to the log (like before).

Can you see how importing the config file goes together with mounting the ConfigMap as a volume? From the container's perspective the config file "feels" like any other config file.
