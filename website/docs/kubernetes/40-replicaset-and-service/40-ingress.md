---
id: ingress
title: Ingress
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7MmJQpoPr4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

## Creating a Self-Signed SSL Certificate

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KV3XheQDRuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Securing websites with SSL encryption (`HTTPS` instead of `HTTP`) [1] has become a defacto standard. Therefore, it is worth dealing with the additional complexity here and show how an application on Kubernetes can be SSL encrypted.

First, it should be mentioned that the termination of the SSL certificate happens within the Ingress controller, in this example the `ngninx` ingress [2][3]. While most of this training has been applicable to most Kubernetes flavors, the Ingress is often specific to a particular Kubernetes distribution. So be prepared to search the documentation in case you want to apply this tutorial to a different Kubernetes cluster.

In order to enable the Ingress controller to terminate an SSL certificate, you either have to create one. If you want to get a free SSL certificate that will be ok for most browsers and surely better than a self-signed certificate have a look at [Let's Encrypt [4]](https://letsencrypt.org/).

For this example, a self-signed certificate will be good enough as the process of setting up the certificate is the same for trusted certificates.

Assuming you have installed `openssl` creating a self-signed SSL certificate for the domain `smpl-go-web-apps-4fca26e8-2c54-4ad0-9136-542d0789b5c2.de.k9s.a9s.eu` can be achieved by issuing the following command:

    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout k9s.key -out k9s.crt -subj "/CN=smpl-go-web-apps-4fca26e8-2c54-4ad0-9136-542d0789b5c2.de.k9s.a9s.eu/O=smpl-go-web-apps-4fca26e8-2c54-4ad0-9136-542d0789b5c2.de.k9s.a9s.eu"

This will create the files `k9s.key` and `k9s.crt` which you will need during the creation of a TLS Secret.

## Creating the TLS Secret

Creating a TLS Secret is straight forward:

    kubectl create secret tls k9s-anynines-com-tls --key k9s.key --cert k9s.crt

This will read the files `k9s.key` and `k9s.crt`. As you can see the TLS Secret is a special type of a Kubernetes Secret. Secrets will be covered in a later lesson in greater detail. For now, it's enough to know that a Secret is a set of key-value pairs managed by the Kubernetes API and stored in the Kubernetes etcd. The TLD Secret is special in so far that its keys are fixed to `key` and `cert`. This ensures that the Ingress knows where to look for both the key and certificate requires to utilize the SSL certificate.

Check whether the Secret has been created successfully:

    kubectl get secrets

And describe it:

    kubectl describe secret k9s-anynines-com-tls

You should see an output similar to:

    Name:         k9s-anynines-com-tls
    Namespace:    k8s-training
    Labels:       <none>
    Annotations:  <none>

    Type:  kubernetes.io/tls

    Data
    ====
    tls.crt:  1322 bytes
    tls.key:  1704 bytes

You can see that both the key and certificate have been stored as `tls.crt` and `tls.key`. The Ingress controller will then retrieve these files by mounting them as files.

Now you are ready to create the actual Ingress object.

## Creating an Ingress

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0QpZL6NOam4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

On an a9s Kubernetes cluster creating an Ingress can be done by creating the file `40-ingress-hello-world-a9s.yaml`:

```yaml
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
      - smpl-go-web-apps-4fca26e8-2c54-4ad0-9136-542d0789b5c2.de.k9s.a9s.eu
      secretName: k9s-anynines-com-tls
  rules:
  - host: smpl-go-web-apps-4fca26e8-2c54-4ad0-9136-542d0789b5c2.de.k9s.a9s.eu
    http:
      paths:
      - path: /
        backend:
          serviceName: smpl-go-web-s
          servicePort: 8080
```

Again: You may have to search the documentation of your Kubernetes cluster as the Ingress may require a different specification.

You can also see that `annotations` contains an element `kubernetes.io/ingress.class: "nginx"` declaring that the `nginx`-Ingress is to be used.

The `tls` section declares a list of hosts, in this case the domain `smpl-go-web-apps-4fca26e8-2c54-4ad0-9136-542d0789b5c2.de.k9s.a9s.eu`. Recognized how the SSL certificate for the domain is passed to the Ingress as a Secret with `secretName: k9s-anynines-com-tls`. As the TLS Secret type has a well known structure no further arguments are required.

Lastly, the actual web application is connected to the Ingress by mounting the application to the path `/`. When using many microservice apps, it can be handy to mount a set of microservices to a domain which will create the impression of a single application to the outside user. In our case, there is only one application. Note that there is no reference to a Pod, ReplicaSet or Deployment. Instead, the reference is to a Service `smpl-go-web-s` and its port `8080`.

The Ingress is responsible for mapping external HTTP requests to particular applications. This connection is done by the Service. In other words: the Ingress - a layer 7 proxy - read the HTTP requests, extracts the host information and maps the incoming request to a layer 4 load balancer - the Service which in turn distributes the requests across its endpoints. In this case, our singe instance web app.

Apply it:

    kubectl apply -f 40-ingress-hello-world-a9s.yaml

In order to verify whether the Ingress has been created list existing Ingresses:

    kubectl get ingress

In the output you can obtain the url in the `HOSTS` attribute it may look similar to `smpl-go-web-apps-4fca26e8-2c54-4ad0-9136-542d0789b5c2.de.k9s.a9s.eu`. **Paste the url into your browser and you should see the output from the example web app**.

Congratulations! You have successfully deployed a web application.

## Links

1. Google Guidelines, Secure your site with HTTPS, https://support.google.com/webmasters/answer/6073543?hl=en
2. Nginx, https://nginx.org
3. Nginx Ingress, https://kubernetes.github.io/ingress-nginx/
4. Let's Encrypt, https://letsencrypt.org/
5. OpenSSL, https://www.openssl.org/
