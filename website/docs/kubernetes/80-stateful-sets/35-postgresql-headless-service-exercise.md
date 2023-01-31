---
id: stateful-set-headless-service
title: Headless Service
---

## Related Videos
<VideoContainer
  list={[{
   src: "https://www.youtube-nocookie.com/embed/6IoZCGSxI7Y",
   title: "Headless Services"
  }]}
/>

Once you have create the PostgreSQL StatefulSet you may want to access it with an application. The next lessons will therefore evolve towards application access, step by step.

## The StatefulSet and its Headless Service

In the previous chapter you have learned that a StatefulSet has a stable network identity. As mentioned before, the PostgreSQL StatefulSet will be accessed by an application. As applications may change during version updates or being rescheduled in the Cluster, so could be Pods of a StatefulSet. With both the application Deployments and the StatefulSet being fast moving targets, it is the StatefulSet's headless Service providing a stable entry point for the application to reach out to the PostgreSQL StatefulSet.

Have a look at what you have created in the previous lesson:

    kubectl describe service postgresql-svc


Shows that the headless Service `postgresql-svc` has the label `Labels: app=postgresql-a`.

And:

    kubectl describe service postgresql-svc

Produces an output similar to:

    Name:              postgresql-svc
    Namespace:         k8s-training
    Labels:            app=postgresql-a
    Annotations:       Selector:  app=postgresql-a
    Type:              ClusterIP
    IP:                None
    Port:              postgresql-port  5432/TCP
    TargetPort:        5432/TCP
    Endpoints:         172.17.0.5:5432
    Session Affinity:  None
    Events:            <none>


Which shows `Annotations: Selector:  app=postgresql-a` indicating that the Service is connected to the StatefulSet through the Label `app=postgresql-a`. You can see that in the `Endpoints: 172.17.0.5:5432` line which refers to the Pod `postgresql-sfs-0` of the StatefulSet `postgresql-sfs`.

    kubectl describe pod kubectl describe postgresql-sfs-0

The output shows that the Pod `postgresql-sfs-0` has the `IP: 172.17.0.5` which means that the Pod is set as the endpoint of the headless Service.

This means that a DNS entry will be created pointing directly to the Pods associated with the Service.

Verify this by executing:

    kubectl describe service postgresql-svc

Which reveals that the headless Service `postgresql-svc` has the label `Labels: app=postgresql-a`.

And:

    kubectl describe service postgresql-svc

Produces an output similar to:

    Name:              postgresql-svc
    Namespace:         k8s-training
    Labels:            app=postgresql-a
    Annotations:       Selector:  app=postgresql-a
    Type:              ClusterIP
    IP:                None
    Port:              postgresql-port  5432/TCP
    TargetPort:        5432/TCP
    Endpoints:         172.17.0.5:5432
    Session Affinity:  None
    Events:            <none>


This shows `Annotations: Selector:  app=postgresql-a` indicating that the Service is connected to the StatefulSet through the Label `app=postgresql-a`. You can see that in the `Endpoints: 172.17.0.5:5432` line which refers to the Pod `postgresql-sfs-0` of the StatefulSet `postgresql-sfs`.

    kubectl describe pod kubectl describe postgresql-sfs-0

The output shows that the Pod `postgresql-sfs-0` has the `IP: 172.17.0.5` which means that the Pod is set as the endpoint of the headless Service.

Along with the headless Service `postgresql-svc` Kubernetes will create a cluster-internal DNS entry: `postgresql-svc.k8s-training.svc.cluster.local`.

**Go and see yourself!**

First, get inside the cluster by launching a utility Pod:

    kubectl run -i --tty nspct --image=fischerjulian/nspct --restart=Never -- bash

The `nspct` image provides a few handy tools such as `nslookup` - a utility to query nameservers.

Inside the `nspct` Pod check whether the resolver can resolve the service URL:

    nslookup postgresql-svc.k8s-training.svc.cluster.local

Which will produce a response similar to:

    Server:		10.96.0.10
    Address:	10.96.0.10#53

    Name:	 postgresql-svc.k8s-training.svc.cluster.local
    Address: 172.17.0.5

So the DNS entry has been created and resolves to the IP address of the only Pod inside the StatefulSet.

Hence, the headless Service provides a stable network identity for the StatefulSet as the Service couples to the StatefulSet loosely by using a selector in the Service referring to the label `app=postgresql-a` in the StatefulSet.

## Headless Service for StatefulSets with Multiple Replicas

With a single Pod (`replicas: 1`) in a StatefulSet the mapping from the headless Service to the Pod is unambiguous: `service -> Pod`.

This raises the question **what happens if there are multiple Pods in the StatefulSet?**

Let's try it!

First, we need a StatefulSet with multiple replicas. So we modify the StatefulSet definition of the previous example by **editing** the file `30-stateful-set.yaml`.

Within `30-stateful-set.yaml` change `replicas: 1` to `replicas: 3`. Save the file and apply it:

    kubectl apply -f 30-stateful-set.yaml

This will update the existing StatefulSet `postgresql-sfs` and you should see the number of Pods increase from 1 to 3:

    kubectl get statefulsets

Of course, **this StatefulSet does not constitute a functioning PostgreSQL cluster**, but that's alright. All that matters here is the number of Pods to show the relationship between the number of replicas and the headless Service.

Now check on the Service again:

    kubectl describe service postgresql-svc

Which should produce an output similar to:

    Name:              postgresql-svc
    Namespace:         k8s-training
    Labels:            app=postgresql-a
    Annotations:       Selector:  app=postgresql-a
    Type:              ClusterIP
    IP:                None
    Port:              postgresql-port  5432/TCP
    TargetPort:        5432/TCP
    Endpoints:         172.17.0.5:5432,172.17.0.7:5432,172.17.0.8:5432
    Session Affinity:  None
    Events:            <none>

Pay attention how the `Endpoints` attribute of the Service has changed without touching the Service explicitly. It now has 3 instead of endpoint: `172.17.0.5:5432,172.17.0.7:5432,172.17.0.8:5432`.

**So what does the existence of two additional endpoints imply for the DNS configuration**? It means that now the mapping from the Service `postgresql-svc` ambiguous. It's not a 1:1 but a 1:3 mapping. So let's figure out what this means by running another utility Pod:

    kubectl run -i --tty nspct --image=fischerjulian/nspct --restart=Never -- bash

Within the utility Pod perform another domain lookup:

    nslookup postgresql-svc.k8s-training.svc.cluster.local

Which this time will produce:

    Server:		10.96.0.10
    Address:	10.96.0.10#53

    Name:	postgresql-svc.k8s-training.svc.cluster.local
    Address: 172.17.0.7
    Name:	postgresql-svc.k8s-training.svc.cluster.local
    Address: 172.17.0.5
    Name:	postgresql-svc.k8s-training.svc.cluster.local
    Address: 172.17.0.8

As you can see all StatefulSet Pods are present in the response.

## Links
1. PostgreSQL Docker Image at Docker Hub, https://hub.docker.com/_/postgres
2. Kubernetes Examples on GitHub, Persistent Volume Provisioning, https://github.com/kubernetes/examples/blob/master/staging/persistent-volume-provisioning/README.md
3. PostgreSQL Documentation - psql, https://www.postgresql.org/docs/12/app-psql.html
4. Kelsey Hightower @ Twitter, https://twitter.com/kelseyhightower/status/935252923721793536?lang=en
5. Cloud Foundry, https://www.cloudfoundry.org/
6. Open Service Broker API, https://www.openservicebrokerapi.org/
7. anynines, a9s Data Services, https://www.anynines.com/data-services
8. Kubernetes Documentation, Concepts, ServiceCatalog, https://kubernetes.io/docs/concepts/extend-kubernetes/service-catalog/
9. Wikipedia, Principle of Least Privilege, https://en.wikipedia.org/wiki/Principle_of_least_privilege
