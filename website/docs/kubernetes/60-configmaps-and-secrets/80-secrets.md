---
id: secrets
title: Secrets
---

Secrets are represented as key value pair and thus are very similar to ConfigMaps. However, ConfigMaps are meant for non-sensitive configuration data aiming at making application code portable across environments. So - analog to ConfigMaps - **Secrets are key value sets but for sensitive data**.

## Types of Secrets

"Secrets should have a Type field to allow the Kubelet and other system components to take action based on the secret's type." [4]

## Secret Types

You may have noticed that - compared to the creation of ConfigMaps - there's an additional argument named `generic`.

Secrets have an additional `type`-field that tells other Kubernetes components to deal with a particular Secret in a particular way.

The following Secret Types are often supported:

* Generic (Opaque)
* Docker Registry
* TLS

### Generic

**The most common secret type is `generic` / `opaque`** and is meant for creating secrets from a local file, local directory or a fixed value as provided with a literal.

This lesson focuses the secret type `generic` and you will find practical examples below.

### TLS

Kubernetes offers a tooling to manage TLS Certificates as proposed in the ACME draft [6].

Kubernetes:

> lets you provision TLS certificates signed by a Certificate Authority (CA) that you control. These CA and certificates can be used by your workloads to establish trust. [7]

See [7] to learn more about managing TLS Certificates with Kubernetes as the topic is outside of this lesson.

### Docker Registry

So far all container images have been pulled from dockerhub[5], the Kubernetes default registry. Often there are reasons to use alternative container registries. One reason may be to chose a registry being within the same network as the Kubernetes cluster so that traffic of pulling container images is contained within the private network.

In the case a private registry is to be used Kubernetes has to authenticate requests issued towards the registry. This is the purpose of Docker Registry Secrets.

Creating Container Registry Secrets will be covered in a later lesson.

## Creating Generic Secrets

Generic Secrets is what most people associated with Secrets. They are often used to represent access credentials such as host, username and password sets.

The syntax for creating a `generic` Secret is close to creating a ConfigMap. They can be created from literals:

    kubectl create secret generic area51 --from-literal=are-we-alone=dontknow --from-literal=username=admin --from-literal=password=ooHao9oh

Or from files (or a mixture of both):

    kubectl create secret generic area52 --from-file=./90-username.txt --from-file=AA-password.txt

Where `90-username.txt` may look like:

    fileadmin

And `AA-password.txt` contains a password in a single line:

    Gash1voh

## Accessing Secrets Using `kubectl`

Once created secrets can be listed as usual using `kubectl get`:

    kubectl get secrets

Note that Kubernetes refers to the generic type as `Opaque` which means that the Secret is a list of arbitrary key value pairs. This is in contrast to purpose bound types such as TLS and Docker Registry Secrets which are associated with additional behavior of the Kubernetes cluster.

In order to get more information about the Secret `kubectl describe` helps:

    kubectl describe secret area51

This won't print the Secret's values but it will show its metadata and keys.

**Secret values can be decoded** by issuing:

    kubectl get secret area51 -o yaml

Generally speaking **it is a bad idea to store secrets in a plain text file that can be purposely or accidentally checked into a source control system such as Git.** Do not store your secrets outside of an encrypted password store. If you are aware of this and take care of excluding YAML definitions of your Secrets from source control, it is ok to have YAML files though.

**Did you recognize that the values of the Secret do not match the values that have been passed during their creation?**

## Editing a Secret

Secrets can be edited by using:

    kubectl edit secrets area51

On most unix/linux computers this will open a local text editor open such as `vim` [8].

Saving the edited Secret will automatically `replace` the secret as if `kubectl replace` had been executed.

### Exercise

**Try to change the value corresponding to the key `username` and save it.**

Do you receive the following error?

    error: secrets "area51" could not be patched: error decoding from json: illegal base64 data at input byte 4

The reason why this command didn't succeed is because **Secret values are base64 encoded by Kubernetes**. This is not encryption but at least it obfuscated values so that a brief look at them doesn't tell the secret. This is not really safe but we'll come back to this later. For now, just be aware that Secret values are base64 encoded and therefore **pasting plain text values won't work** (well it may be possible to store the Secret but you'll have trouble during decoding later).

So how can a string be base64 encoded? There are plenty of ways but on linux/unix machines this may do the trick:

    echo "test" | base64

The resulting string can be pasted into the Secret during editting.

As with ConfigMaps changes to Secrets are automatically available in consuming Pods after a few seconds **if the Secret has been mounted as a volume**.

## Showing a Secret Value

Assuming you have the command `base64` installed retrieving the decoded value from a Secret can be done with:

    kubectl get secret area51 -o jsonpath="{.data.username}" | base64 --decode

Where `username` is the key of the `area51` Secret to which the value should be retrieved and decoded.

## Consuming Secrets from Applications

Using Secrets from a Pod is similar to using ConfigMaps.

### Exercise

Use your new knowledge learned during the the ConfigMap lessons and:

1. Create a Pod and consume the previously created Secret `area51` as environment variables.
2. Create a Pod and consume the previously created Secret `area52` as a mounted volume.

Hints:

1. Use `secretKeyRef` instead of `configKeyRef`.
2. Use `secret` instead of `configMap` when describing the `volume`. Also change `name` to `secretName` to refer to your Secret.
3. Read the Kubernetes documentation [3] if you want to see examplary Pod definitions.

## How Secret Secrets are

While Secrets are meant to deal with access credentials such as certificates and passwords, it surprises that - by default - **Kubernetes stores Secrets into its etcd[1] data store without encryption**. However, it is possible to configure a Kubernetes cluster to encrypt Secrets [2].

**Using Secrets makes it easier to apply encryption as a cluster wide setting**. It is also to be expected that the handling of Secrets becomes more secure with future Kubernetes releaes.

Hence, **even when Secrets are unencrypted, it is a best practise to use them**.

## Links

1. etcd, https://etcd.io/
2. Kubernetes Documentation, Tasks, Encrypting Secret Data at Rest, https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/
3. Kubernetes Documentation, Concepts, Secrets, https://kubernetes.io/docs/concepts/configuration/secret/
4. Kubernetes Design Document, https://github.com/kubernetes/community/blob/master/contributors/design-proposals/auth/secrets.md
5. dockerhub, https://hub.docker.com/
6. ACME - Automatic Certificate Management Environment, https://github.com/ietf-wg-acme/acme/
7. Kubernetes Documentation, Tasks, Manage TLS Certificates in a Cluster, https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/
8. Vim - The Ubiquitous Text Editor, https://www.vim.org/
