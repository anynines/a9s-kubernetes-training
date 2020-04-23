---
id: stateful-set-postgresql
title: PostgreSQL StatefulSet
---

## Introduction

In this lesson you will create a StatefulSet to start a single-node PostgreSQL PostgreSQL [1] database. 

* PostgreSQL Docker Image [2]

Steps:

1. Create and validate a headless Service
2. Use a StatefulSet to create a PostgreSQL node
3. Validate the PostgreSQL StatefulSet
4. Modify the StatefulSet
4. Delete the StatefulSet

* See [3] for a tutorial using Cassandra.

## Headless Service

* {Repeat: what is a Service}
* {Explain difference between headless and non-headless Service.}
* {Explain what the purpose of the headless service is in the StatefulSet. Here or above.}

Create `60-postgresql-headless-service.yaml`:

    apiVersion: v1
    kind: Service
    metadata:
    labels:
        app: postgresql
    name: pinkelephant
    spec:
    clusterIP: None
    ports:
    - port: 5432
    selector:
        app: postgresql

Execute:

    `kubectl apply -f 60-postgresql-headless-service.yaml`.

### Validate the PostgreSQL StatefulSet

    kubectl get svc pinkelephant

{Describe how the output shold look like}

## Make Yourself Familiar with the Container Image

{Try the container image locally to understand how it works.}

## Creating the StatefulSet

{Create the StatefulSet YAML Definition}

{Apply}

{Validate}


## Links

1. PostgreSQL, https://www.postgresql.org/
2. PostgreSQL Container Image, https://hub.docker.com/_/postgres
3. Kubernetes Documentation, Tutorials, Example: Deploying Cassandra with Stateful Sets, https://kubernetes.io/docs/tutorials/stateful-application/cassandra/
