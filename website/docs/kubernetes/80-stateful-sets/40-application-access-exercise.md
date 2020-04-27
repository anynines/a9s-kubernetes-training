---
id: stateful-set-application-access
title: Application Access to a StatefulSet
---

## Application Access

After setting up the database and connecting to it using the `psql` utility, the next step is to access the database with an application running on Kubernetes.

At this point we should rember that Kubernetes is not a fully featured platform but rather platform for building platforms [4]. So in contrast to technologies such as Cloud Foundry [5] there is no such thing as a Service Binding as defined in the Open Service Broker API [6] where application developers can bind apps to service instances such as PostgreSQL with a single command. This will then create a dedicated database user which will be deleted if the application is unbound from the service. This requires a so called Service Broker such as implemented by the a9s Data Services [7] which can then be integrated with Cloud Foundry and Kubernetes. The integration of Service Brokers with Kubernetes requires the Service Catalog extension [8]. However, this lesson is about core Kubernetes so Service Bindings won't be covered in detail. 

With the absense of Service Bindings we fall back to using Kubernetes Secrets as covered in earlier chapters. Hence, with a bare Kubernetes it is up to the user to manage Secrets to grand and/or revoke access to StatefulSets.

You may ask yourself **why not use the existing `postgres` user**?

In non-production applications - where security is not a concern - using the `postgresql` is possible. However, for production grade applications, it makes sense to stick to the *least privilege principle* [9]. According to this principle, the application user should be limited to the minimum set of privileges necesseary to carry out the application's tasks. Consequently, an application user should not be granted admin privileges unless absolutely necessary. 
Another major drawback of using shared credentials among users is that the credentials have to be changed if a user is removed. Think about a team member who knew the `postgresql` password and then left the team. In order to secure access to the database, the password needs to be changed. If the password is used by ten other users including application machine users, the effort for updating the password is highly wasteful.
With a dedicated set of credentials - a database username and password - per user is therefore much simpler. It allows revoking access or modifying privileges on a per user level easily.

## Example

In this example you will create a another Secret, deploy a simple application and gran the application access to the PostgreSQL StatefulSet.

### The Example Application

The example uses a very [simple web app [1]](https://golang.org/) written in Go [2].


### Creating the Application Secret

First create a separate Secret. This time as a combination of a username and password:

    kubectl create secret generic postgresql-secrets \
        --from-literal=POSTGRES_USERNAME=gaeMo6di \
        --from-literal=POSTGRES_PASSWORD=UaGu5chu

As this is a machine user, using a cryptic username makes it harder to guess and the application doesn't care about the password complexity.

### Deploying the Application

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox-secrets
spec:
  containers:
    - image: busybox
      name: busybox-secrets-container
      command:
        - "env"
      env:
        - name: USERNAME
          valueFrom:
            secretKeyRef:
              name: area51
              key: username
        - name: PASSWORD
          valueFrom:
            secretKeyRef:
              name: area51
              key: password
  restartPolicy: Never
```

## Links

1. Simple Go PostgreSQL Application, Julian Fischer @ Github, https://github.com/fischerjulian/smpl-go-pg
2. Golang, https://golang.org/