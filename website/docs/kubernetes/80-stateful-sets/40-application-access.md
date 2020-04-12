---
id: sfs-pg-app-access
title: App Access to PostgreSQL
---

## Application Access

After setting up the database and connecting to it using the `psql` utility, the obvious next step is to access the database with an application running on Kubernetes.

At this point we should rember that Kubernetes is not a fully featured platform but rather platform for building platforms [4]. So in contrast to technologies such as Cloud Foundry [5] there is no such thing as a Service Binding as defined in the Open Service Broker API [6] where application developers can bind apps to service instances such as PostgreSQL with a single command. This will then create a dedicated database user which will be deleted if the application is unbound from the service. Obviously, this requires a service broker such as the a9s Data Services [7] to be implemented and integrated with Cloud Foundry, to be fair. To be even more fair, it is possible to integrate Service Brokers to Kubernetes using the Service Catalog extension [8]. However, this training is about bare Kubernetes. 

With the absense of Service Bindings we fall back to using Kubernetes Secrets as covered in earlier chapters. But who creates the Secrets? Exactly, you do!

{POD using the existing secret}

> But why not use the existing `postgres` user?

In trivial examples where security is not a concern, this is possible. However, in real-world scenarios it makes sense to stick to the *least privilege principle* [9]. According to this principle, the application user should be limited to the minimum set of privileges necesseary to carry out the application's tasks. Consequently, for each application you have to create a user with appropriate permissions.