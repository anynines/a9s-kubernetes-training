---
id: streaming-replication
title: PostgreSQL Streaming Replication
---

Before setting up an asynchronously replicating PostgreSQL it makes sense to understand which replication method is used and - roughly - how it works.

**The replication method that will be used is WAL based streaming replication**, but before we jump to this conclusion a brief dive into WAL and Log Shipping will help to understand the choice.

## Write-Ahead Logging (WAL)

Write-Ahead Logging (WAL) is a widely adapted methodology to ensure data integrity while speeding up transactions [2]. This is achieved by writing data changes to an append-only store. Whenever data is changed a WAL file is updated and changes are flushed to the disk. This is much faster than touching and committing several data files to disk as it reduces the number of disk operations.
In case the database server fails before data files have been updated, data can be recovered from the WAL files which contain the missing data changes that have been cached but not applied to the data files, yet.

As WAL files contain the changes to be applied to data files, they qualify for additional purposes including point in time recovery (PITR) [3] and replication.

There are at least two different methods to use WALs to accomplish replication: Log Shipping and Streaming Replication.

## Asynchronous Replication using Log Shipping

In PostgreSQL the write-ahead log is data structure distributed across multiple WAL files of a defined capacity, e.g. 16 MB. One way to establish a replication of a database is to transfer the WAL files to a secondary. This process is called **Log Shipping**.

This method is asynchronous by design as WAL files can only be transferred after a transaction has been committed.

The resulting replication lag - data that has been committed but not yet transferred to secondary servers - can be lost in the event of a failing primary server. Streaming replication is a related alternative that can help to further reduce this risk of data loss.

## Replication using Streaming Replication

Instead of waiting for a WAL file to be filled and thus ready to be shipped, streaming replication allows secondaries to connect to the primary server and retrieve WAL records continuously [1]. **With streaming replication WAL records are distributed quicker. Therefore, the replication lag as well as the amount of data at risk decreases**.

## Summary

With PostgreSQL asynchronous replication can be implemented using streaming replication of WAL records. This reduces the replication leg to a minimum.

## Links
1. PostgreSQL 12 Documentation - Streaming Replication, https://www.postgresql.org/docs/12/warm-standby.html#STREAMING-REPLICATION
2. PostgreSQL 12 Documentation - Write-Ahead Logging (WAL), https://www.postgresql.org/docs/12/wal-intro.html
3. PostgreSQL 12 Documentation - Continuous Archiving and Point-in-Time Recovery (PITR), https://www.postgresql.org/docs/12/continuous-archiving.html
4. PostgreSQL 12 Documentation - Log-Shipping Standby Servers, https://www.postgresql.org/docs/12/warm-standby.html