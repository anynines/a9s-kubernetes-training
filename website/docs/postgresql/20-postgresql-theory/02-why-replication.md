---
id: why-use-replication
title: Why use Replication?
---

In previous chapters of the Kubernetes training a StatefulSet has been developed.

## Limitations of the Previously Created PostgreSQL StatefulSet

This PostgreSQL StatefulSet can provide a single PostgreSQL Pod meaningfully. The single PostgreSQL pod is meaningful as it can be used to store data and can be accessed by application. While it is possible to set the number of `replicas` to more then `1` this doesn't make sense as there is not replication among the pods of the StatefulSet. Having `3` unrelated PostgreSQL servers doesn't really provide any benefit.

This leads to two questions:

1. Why replicate at all?
2. How can replication be configured?

## Why Replicate at all?

Experienced database administrators may find this question disturbing as a highly available database seem to be impossible without replication. However, there is more to this question than meets the eye.

Experience shows that in a physical server setup, a failed PostgreSQL has a certain average time to repair (TTR). If hardware needs to be replaced, for example, this may take up to several hours - without the necessary spare parts - even days or weeks. Having a standby-server to failover to is therefore crucial. This will reduce the TTR down to minutes or even seconds.

**With virtual machines on a contemporary infrastructure a separation of the ephemeral VM and it's persistent disk has become standard**. With this architectural pattern, the data of a database isn't stored on the local disk of a infrastructure host but on a highly available, remotely attached block device. This so-called *persistent disk* or *persistent volume* separates the lifecycle of the (PostgreSQL) VM from the lifecycle of its (PostgreSQL) data.

In case of a failed VM, there is no need to wait for hardware to be fixed. With the proper automation, the VM will be rescheduled on a different infrastructure host and the persistent disk will be attached. **The time to repair for such a self-healing scenario lies within several minutes**.

The motivation to tackle the complexity of replication and cluster management already decreases as the TTR has been drastically reduced by the self-healing automation.

With Kubernetes and containers this time to repair may shrink even further. Assuming that involved container images are relatively small and/or cached on the Kubernetes nodes, **the self-healing of a failed Pod instead of a failed VM is a matter of seconds rather than minutes**.

However, this is an oversimplification as **the time to repair may dramatically change** if the failure isn't caused by the failure of a single infrastructure host but of the **failure of an entire infrastructure availability zone** or if the **storage server containing the persistent disk has failed**.

In these cases a recovery from a backup may be necessary which implies a corresponding **data loss**.

## Summary

In order to allow a fast failover and reduce to the potential data loss to a minimum, **replication can be used to keep spare standby servers across availability zones**. For most infrastructures, this also implies using disjunct storage servers.
