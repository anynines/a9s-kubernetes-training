---
id: replication-outline
title: Replication Outline
---

Before looking into **how** a highly available PostgreSQL using streaming replication is build, let's draw an outline of **what** is to be achieved. Then in subsequent sections the design goals will be iteratively approximated.

In the remainder of this training the focus will be to create an asynchronous streaming replication with PostgreSQL. This will lead to certain characteristics and challenges.

Let's assume a cluster consisting of three (3) PostgreSQL replicas in a StatefulSet setup with asynchronous streaming replication.

## Primary and Secondary PostgreSQL Servers

In PostgreSQL there is no client awareness that replication is used. When configuring an application to connect to a PostgreSQL server, server credentials have to be provided. These credentials usually include the **hostname**, username, password, port and other configuration options.

**Only a single hostname pointing to a single PostgreSQL server can be supplied to a standard PostgreSQL client**.

Per default, all write and read requests will be issued against this particular server. 

## Asynchronous Replication

With *asynchronous* replication changes made to a PostgreSQL's dataset are replicated **after** the actual transaction.

Let's assume an application inserts a record into a table. At the exact moment the transaction has been committed only the server accepting the incoming SQL statement reflects the change. None of the two other PostgreSQL servers in the StatefulSet will take notice, instantly. It takes a bit for them to retrieve changes.

If asynchronous streaming replication is set up properly, the remaining servers will retrieve changes made to their peer and store them locally. The time delay in which the servers are out of sync is called **replication lag**. In case of a failure this data - lagging behind - would be lost.

As asynchronous streaming replication in PostgreSQL means applying data changes of a particular server to a number of other servers which act as *followers* a clear topology is established. The server receiving all read and write requests is called the **Primary** and its followers are called **Secondaries**. Other terminologies use **Leader & Followers** and (obsolete) **Master and Slaves**.

The simplest approach is to determine the roles of primary and secondary servers statically. However, in a failure scenario it would be desirable to have **automatic failure detection**, **leader election** and **leader promotion**.

## Automatic Failure Detection

Detecting a failure in a distributed system is a non-trivial problem which can be traced by to the well known Byzantine Generals Problem [1]. Overly simplifying, it is hard to distinguish between a failed server and a failing network connection.

Consider a simple scenario where the Primary server has failed due to the failure of the underlying infrastructure availability zone. In this scenario, the failed Primary is down and will stay down. No other Pod can replace it as the entire availability zone is affected.
In such as case a surviving Secondary pod could detect that the Primary is missing and initiate a leader election. But how can the Secondary be sure that the Primary is really down and distinguish this scenario from the scenario where only the Secondary can't reach the Primary? In the latter case, a falsely triggered leader election could do harm. The worst case would be to have multiple Primaries receiving incoming requests resulting into data inconsistencies which cannot be resolved automatically.

## Consensus and Leader Election

In distributed systems engineering the solution to the Byzantine Generals Problems is sometimes referred to as **consensus algorithms**. Without going too much into details two algorithms dominate the scene: *Paxos* and *RAFT* [2]. The essence here is: a cluster requires an odd number of nodes (3, 5, ...) to reach consensus by forming a quorum - imagine it as a majority vote.

Implementations of consensus algorithms are all over the place. Kubernetes itself, etcd, Zookeeper and the alike are all equipped with them.

With an implementation of a consensus algorithm at hand, being certain of a failed node and forming a quorum to elect a new leader is possible.

## Leader Promotion

Once a leader has been elected, it also has to be promoted. In technical terms: during leader promotion it is ensured that database clients will exclusively connect to the newly promoted Primary. Not to the old Primary (which may still be around) and not to any of the Secondaries.

## Summary

As you can see: things get complicated quickly. Therefore, following the *divide and conquer* paradigm, the PostgreSQL replication endeavor is split into manageable steps.

In the next step, you'll look into how replication works with PostgreSQL and **the first milestone is to set up a static three node Primary / Secondary StatefulSet** that will replicate changes to the Primary to all its Secondaries.

## Links and Sources
1. Wikipedia, Byzantine Fault, https://en.wikipedia.org/wiki/Byzantine_fault
2. Cornell University, Paxos vs Raft: Have we reached consensus on distributed consensus?, Heidi Howard, Richard Mortier
, https://arxiv.org/abs/2004.05074

