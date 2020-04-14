---
id: deployments
title: Deployments
---

The Kubernetes Deployment resource is designed to support the continous delivery of application releases beyond the abilities of Pods and ReplicaSets.

Using a Deployment, the deployment process is controlled by a deployment controller running within the Kubernetes cluster.

## Creating the First Deployment

Create the first deployment by deploying the application version **"blue"**.

Create a file `20-deployment-blue.yaml`:

```YAML
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: app-gamma
  labels:
      app: app-gamma
spec:
  selector:
    matchLabels:
      run: app-gamma
  replicas: 1
  template:
    metadata:
      labels:
        run: app-gamma
    spec:
      containers:
      - name: app-gamma-blue
        image: fischerjulian/smpl-go-web:blue
        ports:
            - containerPort: 8080
```

Apply it:

    kubectl create -f 20-deployment-blue.yaml

Verify the deployment has been successful:

    kubectl get deployments

It's also worth having a look at the list of ReplicaSets:

    kubectl get replicasets

You should also find a ReplicaSet **blue** as a Kubernetes Deployment internally creates a ReplicaSet which in turn creates one or more Pods creating one or more containers.
So it's no surprise to find **blue** Pods:

    kubectl get pods

Now in order to access the application we also have to create a service and an ingress again, just like we did in the ReplicaSet lesson.

Create a file `40-service.yaml`:

```YAML
apiVersion: v1
kind: Service
metadata:
  name: app-gamma-service
spec:
  selector:
    run: app-gamma
  ports:
  - port: 8080
```

Apply it:

    kubectl apply -f 40-service.yaml

Create a file `50-ingress.yaml`:

```YAML
apiVersion: networking.k8s.io/v1beta1 # Kubernetes 1.13+
kind: Ingress
metadata:
  name: app-gamma-ingress
  annotations:
    # use the shared ingress-nginx
    kubernetes.io/ingress.class: "nginx"
spec:
  tls:
    - hosts:
      - app-gamma-c9c99a1c-e1d5-4401-8aed-bd54319c7ca7.de.k9s.a9s.eu
      secretName: k9s-anynines-com-tls
  rules:
  - host: app-gamma-c9c99a1c-e1d5-4401-8aed-bd54319c7ca7.de.k9s.a9s.eu
    http:
      paths:
      - path: /
        backend:
          serviceName: app-gamma-service
          servicePort: 8080
```

Apply it:

    kubectl apply -f 50-ingress.yaml

Obtain the URL with:

    kubectl get ingresses

Browse to the url and it should say "**I am blue**".

## Scaling the Deployment

So far we have declared the desired state of our resources such as ReplicaSets, Services and Deployments using YAML files and applied them use `kubectl apply -f <filename>`. So this is what we will try again. A copy of the file `20-deployment-blue.yaml` with an increased `replicas` setting can be found in `60-deployment-blue-scale-out.yaml`. All it does is to set `replicas: 2` indicating we desire two application instances to be running.

So let's give it a try!

Create a file `60-deployment-blue-scale-out.yaml`:

```YAML
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: app-gamma
  labels:
      app: app-gamma
spec:
  selector:
    matchLabels:
      run: app-gamma
  replicas: 2
  template:
    metadata:
      labels:
        run: app-gamma
    spec:
      containers:
      - name: app-gamma-blue
        image: fischerjulian/smpl-go-web:blue
        ports:
            - containerPort: 8080
```

Apply it:

    kubectl apply -f 60-deployment-blue-scale-out.yaml

And you will see the following error message:

    Warning: kubectl apply should be used on resource created by either  kubectl create --save-config or kubectl apply deployment.extensions/app-gamma configured

Try the following command instead:

    kubectl replace -f 60-deployment-blue-scale-out.yaml --save-config

This overwrites the existing spec stored in the Kubernetes cluster with the newly provided one. See [1] for more details on this.

Once `--save-config` has been used, subsequent updates can be performed using `kubectl apply -f` again.

### Exercise

Change the replica count to 3 and update your deployment using `kubectl apply -f`. Did it work?

## Updating the Deployment with a new Application Version

A successful real world application is likely to be under constant development. Subsequently, the application team has to deploy new software versions regularly.

The new software version is delived by creating a new container version. Compare the YAML file `70-deployment-green.yaml` with the previous version and look for differences. You will see that the container name and container image (tag) have changed. Hence, the team had to build a new container version and upload it to the default container registry of the Kubernetes cluster which is https://hub.docker.com/, by default.

Create a file `70-deployment-green.yaml`:

```YAML
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: app-gamma
  labels:
      app: app-gamma
spec:
  selector:
    matchLabels:
      run: app-gamma
  replicas: 2
  template:
    metadata:
      labels:
        run: app-gamma
    spec:
      containers:
      - name: app-gamma-green
        image: fischerjulian/smpl-go-web:green
        ports:
            - containerPort: 8080
```

Perform the update:

    kubectl apply -f 70-deployment-green.yaml

Try running the following command directly after running the update:

    kubectl describe deployment app-gamma

You should see that the fields `OldReplicaSets` and `NewReplicaSet` both have a value, e.g. `app-gamma-7464575685` and `app-gamma-75457966b7`.
After the deployment has been completed successfully this will be different: `OldReplicaSets:  <none>`. This also tells **how the rollout works: by replacing underlying ReplicaSets**. At this point it becomes clear what the added value of a Deployment is. Deployments stay, ReplicaSets come and go. **The Deployment provides a Kubernetes entity that allows you to manage the lifecycle of an application across application versions each represented by a dedicated ReplicaSet**.

The status of a rollout can be retrieved by executing:

    kubectl rollout status deployments app-gamma

Which will provide you with a brief success message such as `deployment "app-gamma" successfully rolled out`.

Reloading the app in your browser should now tell you `"I am green."`.

**Note, if you reload your browser repeatedly you may see both blue and green application versions alternating.** This is due to the default *Deployment Strategy* which will be covered later in detail.

## Controlling a Rollout

More control is offered with commands such as

    kubectl rollout pause deployments app-gamma

and

    kubectl rollout resume deployments app-gamma

which become handy if the rollout produces unpredicated behavior, for example.

## Rollout History

Deployments also collect metadata on which rollouts have been performed in the past:

    kubectl rollout history deployment app-gamma

This allows you to dig into a particular revision:

    kubectl rollout history deployment app-gamma --revision 1

And provides you information about the structure and annotation of the ReplicaSet corresponding to the given revision.

## Ups, Kaputt! Undoing a Rollout

While it is possible to pause and resume a rollout, sometimes it may be necessary to undo it. **Undoing a rollout is another major advantage of using a Deployment over plain ReplicaSets**. As the Deployment knows which ReplicaSets have been representing previous versions it's easy to bring them back to "life".

    kubectl rollout undo deployments app-gamma

And the browser should turn from the "green" back to the "blue" version.

While the `rollout undo` option does the trick of going back to the last rollout, it has a bad taste to it. The command modifies the live Kubernetes objects without reflecting this in our local YAML files.

**The preferable alternative would be to deploy the "green" version by applying it's original YAML file** and thus creating another rollout instead of a rollback.

    kubectl apply -f 20-deployment-blue.yaml

Check the status of the deployment:

    kubectl rollout status deployments app-gamma

## Tidying Up - Part 1 of 2

Remove the Deployment:

    kubectl delete -f 20-deployment-blue.yaml

## Deployment Strategies

The deployment strategy determines how the Kubernetes deployment controller starts and stops ReplicaSets during an application rollout.

Two strategies are provided by default:

* Recreate
* RollingUpgrade

### Recreate Strategy

The Recreate strategy is straight forward. The existing ReplicaSet with all its belonging Pods is destroyed and only after the termination of the last Pod, Pods of the new ReplicaSet will be started.

For this reason the `Recreate`-strategy is not recommended for productive use. However, there are **cases where this strategy makes sense**. For example, **if avoiding the coexistence of two application version is necessary**.

Create a first deployment with a file `80-deployment-blue-recreate.yaml`:

```YAML
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: app-gamma
  labels:
      app: app-gamma
spec:
  selector:
    matchLabels:
      run: app-gamma
  replicas: 2
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        run: app-gamma
    spec:
      containers:
      - name: app-gamma-blue
        image: fischerjulian/smpl-go-web:blue
        ports:
            - containerPort: 8080
```

Apply it:

    kubectl create -f 80-deployment-blue-recreate.yaml --save-config

Update the deployment by creating a file `90-deployment-green-recreate.yaml`:

```YAML
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: app-gamma
  labels:
      app: app-gamma
spec:
  selector:
    matchLabels:
      run: app-gamma
  replicas: 2
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        run: app-gamma
    spec:
      containers:
      - name: app-gamma-green
        image: fischerjulian/smpl-go-web:green
        ports:
            - containerPort: 8080
```

And apply it:

    kubectl apply -f 90-deployment-green-recreate.yaml

The complete termination of all Pods of one ReplicaSet before creating the new ReplicaSet with new Pods **leads to a downtime of the application during the deployment**. This is the case even when the number of replicas is set to a value greater than 1. You can find a great [illustration of the Recreate deployment strategy here](https://github.com/ContainerSolutions/k8s-deployment-strategies/tree/master/recreate).

### RollingUpdate Strategy

The RollingUpdate strategy terminates a number of Pods from the old (blue) ReplicaSet and start a number of new Pods with the new version (green). So gradually the new application version is rolled out.

**Be aware:** The grudual or "rolling" update means that **Pods of both the old (blue) and new (green) versions are being served traffic simultaneously**. This implies that two adjacent application versions need to coexist peacefully.
If the new (green) version requires a different database schema, for example, this may become problematic as a schema migration can either be executed or not. The application therefore should be architected in a way that schema migrations happen gradually over multiple versions while maintaining compatibility among adjacent versions.

Engineers must decide yourself whether the increased application availability is worth the increased effort in development.

### Other Strategies

There are many more possible deployment patterns. They do not represent strategies in the sense that they can be pasted as a `strategy: <my-strategy>` into the deployment specification but rather represent higher level methodologies on how to perform a rollout [3][4]. This includes patterns such as blue-green and canary deployments.

## Tyding Up - Part 2 of 2

All resources of this lesson can be deleted:

    kubectl delete deployment app-gamma
    kubectl delete -f 50-ingress.yaml
    kubectl delete -f 40-service.yaml

## Links

1. Kuberentes Documentation, Conecepts, Working With Objects, https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/
2. Kubernetes Up & Running, 2nd Edition, O'Reilly, 2019, https://learning.oreilly.com/library/view/kubernetes-up-and/9781492046523/
3. Deployment Strategies, ContainerSolutions, https://blog.container-solutions.com/kubernetes-deployment-strategies
4. Kubernetes Patterns, O'Reilly, 2019, https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050278/
