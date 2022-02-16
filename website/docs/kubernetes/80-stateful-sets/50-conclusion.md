---
id: stateful-set-conclusions
title: Conclusions
---

## Conclusions

StatefulSets and Persistent Volumes are the Kubernetes means to operate data services. Especially in conjunction with Persistent Volume Provisioners [2] the creation of data service instances becomes manageable as Persistent Volumes are being created on-demand.

However, creating and managing a large set of StatefulSets and Persistent Volumes become a tedious task as the templates above need to be modified and kept track of.