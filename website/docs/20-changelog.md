---
id: changelog
title: Changelog
---

The following changes have been made:

## 2023-06-01: Changelog and Fixes

### The Container Workflow

- On page **The Container Workflow**: Fixes incorrect command which correctly must be `docker image build -t <your-image> .` instead of `docker -t <your-image> .`.

### Changelog

- Moved the changelog to a separate page.

## 2022-09-26: PostgreSQL 14.5

- Updated PostgreSQL Chapters to PostgreSQL 14.5.
- Fixed several inconsistencies in the tutorial.

## 2022-03-09: Docker and Kubernetees Updates

- Adjust information in Docker tutorial to include the fact that Kubernetes moved
away from Docker
- Add minikube instructions and remove a9s Paas instructions
- Update Kubernetes objects to recent API versions
- Correct spelling and grammar

## 2020-08-31: PostgreSQL Streaming Replication

- Adds a PostgreSQL tutorial on how to build a simple, three node PostgreSQL Streaming Replication with Kubernetes StatefulSets.

## 2020-04-30: StatefulSet and Fixes

- Adds generating a self-signed SSL Certificate to the Ingress lesson.
- Adds a command on how to retrieve and decode a Secret's value for a given key.
- Fixes some spelling mistakes.
- Fixes namespaces inconsistencies to `k8s-training`.

## 2020-04-27: StatefulSet Chapters Renamed

- Renamed Chapters from "PostgreSQL Exercise {n}" to more titles describing the content of the chapters in greater detail.

## 2020-04-23: StatefulSets

- Added large parts of the StatefulSet section. Still incomplete.
