---
id: exercise-explanation
title: Exercise Explanation
---

The problem with the ConfigMap described in `40-pod-with-config-map-env.yaml` is not obvious. In fact, it's one of the harder problems to identify as the YAML file seems semantically valid.

In order to understand the problem it is necessary to remember that ConfigMaps are key value pairs.

Look again at the ConfigMap `config-example-1`:

    kubectl get configmaps config-example-1 -o yaml

The output is something like:

```yaml
apiVersion: v1
data:
    20-config-file.conf: |-
        # This is an exemplary config file

        number-of-requests = 20
        very-import-switch = true
kind: ConfigMap
metadata:
    creationTimestamp: "2020-03-04T17:54:19Z"
    name: config-example-1
    namespace: default
    resourceVersion: "6128955"
    selfLink: /api/v1/namespaces/default/configmaps/config-example-1
    uid: 2ef0fc0d-e128-47d7-be57-766d2b023612
```

Now compare it to the output of `config-example-2`. Can you see the subtle difference?

    kubectl get configmaps config-example-2 -o yaml

The output looks like this:

```yaml
apiVersion: v1
data:
    number-of-requests: "20"
    very-import-switch: "true"
kind: ConfigMap
metadata:
    creationTimestamp: "2020-03-04T17:40:48Z"
    name: config-example-2
    namespace: default
    resourceVersion: "6126817"
    selfLink: /api/v1/namespaces/default/configmaps/config-example-2
    uid: 3366244e-da8e-4ac8-8cf4-dc21fca7ff56
```

If you compare the indentation you may recognize that in `config-example-1` the section `data` contains only one key: `20-config-file.conf`. This implies that for Kubernetes this ConfigMap has one key and its value is a string:

    # This is an exemplary config file

    number-of-requests = 20
    very-import-switch = true

This string is literally put into the ConfigMap value corresponding to the key `20-config-file.conf`. A sign for this is the special annotation `|-` indicating that a multi-line string folllows and that newlines at the end of the string are to be stripped [1]. Consequently, Kubernetes does not parse the value associated with the key `20-config-file.conf`. It doesn't know about its structure although it is obvious to the humand mind. Exactly that's the gotcha.

In contrast to this, in `config-example-2` the structure is different. There is no top-level key named `20-config-file.conf`. Instead, there are two keys `number-of-requests` and `very-import-switch`. As Kubernetes understands ConfigMap keys and values they can be used as expected in the Pod definition to define environment variables.

Here is how the fixed ConfigMap should look like:

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

## So why Going Through This Hassle?

Sometimes you want to access several parameters individually. In this case the definition of distinct key-value pairs is necessary. However, if you want to store an entire config file as a value, reading the config file into a ConfigMap associtated with a filename-like key such as `config-file.conf` is helpful.

## Links

1. YAML Multiline, https://yaml-multiline.info/
