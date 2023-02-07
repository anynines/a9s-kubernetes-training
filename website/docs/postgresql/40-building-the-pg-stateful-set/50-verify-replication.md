---
id: verify-replication
title: Verifying the Replication
---

## Verifying the Streaming Replication

Now that everything is set up, it's time to verify that the streaming replication works. For this, we will write data to the Primary and ensure it can be read from the Secondaries shortly after.

## Writing Data to the Primary

Connect to the Primary Pod:

    kubectl exec -it postgresql-sfs-0 -- bash

And within the Pod connect to the Primary PostgreSQL server:

    psql -U postgres

Inside `psql` select the `postgres` database:

    \c postgres

And create a table:

    CREATE TABLE COMPANY(
      ID INT PRIMARY KEY     NOT NULL,
      NAME           TEXT    NOT NULL
    ); 

Insert a record:

    INSERT INTO COMPANY (ID, NAME) VALUES (1, 'anynines GmbH');

The record should now be streamed to all Secondaries.

## Reading Data from a Secondary

Connect to a Secondary Pod such as `postgresql-sfs-1`:

    kubectl exec -it postgresql-sfs-1 -- bash

And execute:

    psql -U postgres

Within `psql` run:

    \c postgres

Then:

    SELECT * FROM COMPANY;

The output should look like this:

     id |     name
    ----+---------------
      1 | anynines GmbH
    (1 row)

Repeat the above procedure for the other Secondary node `postgresql-sfs-2`. It should also return the record you've inserted.

**Congratulations! You have set up a PostgreSQL streaming cluster on Kubernetes**.

## Summary

You have learned about PostgreSQL streaming replication and in particular mastered how it works and how it is configured. More than that you have transferred this knowledge and containerized the configuration overcoming many little hurdles on the way.

At this point, the PostgreSQL automation sets up a streaming replication what will stream changes of the Primary to all its Secondaries.

## What's Missing?

As long as the cluster is healthy, the streaming replication will provide a near real-time backup of the Primary database. However, there is much more work to be done which goes beyond the scope of this lesson.

Beside of some security related improvements, there is more to add to the automation so that the streaming replication take full effect in production.

### Failure Detection, Leader Election and Leader Promotion

Currently, there is no mechanism in place that detects a failing Primary. Theoretically there are two Secondaries which may be up-to-date with the failed Primary or they may lag a little behind resulting into a data loss of the replication lag's size.

Detecting a failed Primary seems to be a simple task but as we are dealing with a distributed system, sadly this is a non-trivial problem going back to the Byzantine General Problem [1]. The health monitor should be fault-tolerant itself which means that it should be spread equally across cluster nodes. If the health manager itself is distributed it becomes hard to distinguish a failed Primary from a failed connection between a Secondary and the Primary. Especially in the case of network segmentation, applications may still have access to the Primary while a Secondary may think it's his time to take over leadership. There are algorithms solving leader election problem with a satisfying level of reliability. These so called [consensus algorithms](https://en.wikipedia.org/wiki/Consensus_algorithm) [2] can be rather complex. The most popular two algorithms include [Paxos](https://en.wikipedia.org/wiki/Paxos_(computer_science)) [3] and [RAFT](https://en.wikipedia.org/wiki/Raft_(computer_science)) [4].

## Sources and Links
1. https://en.wikipedia.org/wiki/Byzantine_fault
2. https://en.wikipedia.org/wiki/Consensus_algorithm
3. https://en.wikipedia.org/wiki/Paxos_(computer_science)
4. https://en.wikipedia.org/wiki/Raft_(computer_science)