---
id: ingress
title: Ingress
---
Pods and ReplicaSets can be used to start and operate containers. Services can be handy to provide named access to and distribute and load balance requests across Pods, **internally**.

Most application systems have a public facing interface, too. In order to expose a web service or web application to outside world, an additional Kubernetes resource comes is useful: **the Ingress**.

In contrast to Kubernetes Services which operate on layer 4 (transport) of the [ISO OSI model](https://en.wikipedia.org/wiki/OSI_model), Ingresses operate on layer 7 (application). This means that an Ingress knows the HTTP protocol and is able to read and interpret incoming HTTP requests enabling a number of additional options. A major benefit is the ability to create **virtual hosts**.

Virtual hosts address the challenge of pointing multiple domain names to a single IP address in a way that the "web server" is able to map domain names to the corresponding applications.

So with the Ingress concept it is possible to map incoming requests based on the desired domain contained in the HTTP Header to applications running within Kubernetes.

## Ingress is not Built-In to Kubernetes

While Ingress is a Kubernetes concept, there is no built-in Kubernetes implementation. In Kubernetes terminology: **Kubernetes does not ship with a default Ingress Controller**. Therefore, each Kubernetes implementation may come with a different Ingress Controller which in turn may offer slightly different features and configuration options but generally they are likely to cover the same core functionality.

One reason for this is that load balancing is a non-trivial problem to solve. It is used to enable highly available applications and is related to topics such as networking, DNS and SSL certificate management.

At some point there must be one or more highly available load balancers distributing incoming requests. These load balancers can be Kubernetes or infrastructure (e.g. AWS) provided software load balancers or even good old hardware appliances.

As a takeaway, it is worth spending a few minutes on looking at a particular Ingress implementation when using a particular Kubernetes distribution for the first time.

### DNS Entries and SSL Certificates

It is easy to use `kubectl proxy` to access Kubernetes workloads as it does not require much configuration. However, exposing an application to the outside world usually requires the configuration of a domain or sub-domain dedicated to the application such as `myapp.example.org`.

This is why Kubernetes can't do much for you as controlling DNS entries is out of its scope and so is requesting and issuing SSL certificates.

For the creation of DNS entries you might want to create:

* An **A-Record** to point a (sub-)domain to the IP address of your load balancer.
* A **CNAME-Record** to point a (sub-)domain to the DNS name of your load balancer.

The configuration of DNS entries varies across DNS providers. Their manuals will guide you through the process.

## Creating an Ingress

This works on an a9s K8s cluster by creating the file `40-ingress-hello-world-a9s.yaml`:

```YAML
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: smpl-go-web-ingress
  annotations:
    # use the shared ingress-nginx
    kubernetes.io/ingress.class: "nginx"
spec:
  tls:
    - hosts:
      - smpl-go-web-c9c99a1c-e1d5-4401-8aed-bd54319c7ca7.de.k9s.a9s.eu
      secretName: k9s-anynines-com-tls
  rules:
  - host: smpl-go-web-c9c99a1c-e1d5-4401-8aed-bd54319c7ca7.de.k9s.a9s.eu
    http:
      paths:
      - path: /
        backend:
          serviceName: smpl-go-web-s
          servicePort: 8080
```

Apply it:

    kubectl apply -f 40-ingress-hello-world-a9s.yaml

In order to verify whether the Ingress has been created list existing Ingresses:

    kubectl get ingress

In the output you can obtain the url in the `HOSTS` attribute it may look similar to `smpl-go-web-c9c99a1c-e1d5-4401-8aed-bd54319c7ca7.de.k9s.a9s.eu`. **Paste the url into your browser and you should see the output from the example web app**.

Congratulations! You have successfully deployed a web application.
