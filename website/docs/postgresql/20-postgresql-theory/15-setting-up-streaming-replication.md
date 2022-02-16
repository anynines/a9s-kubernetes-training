---
id: setting-up-streaming-replication
title: Setting up Streaming Replication
---

Now that it has been decided which replication type to use and that you have learned how it works, it's time to investigate how streaming replication is configured.

As general advice for data service automation, it is wise to understand the operational first, before diving into writing automation code.

Therefore, before diving into the depths of Kubernetes automation it makes to understand how a manual configuration of PostgreSQL streaming replication works. In other words, we need to understand what a database administrator would do before we can automate his work. 

## Setting up Streaming Replication
The PostgreSQL documentation [1] explains how streaming replication can be configured. 

The configuration procedure is similar to setting up a file-based log shipping. Remember that *write-ahead log shipping* transfers entire WAL files (containing many WAL records) while streaming replication continuously ships WAL records.

The configuration step on a secondary that switches from *log shipping* to streaming replication is setting the `primary_conninfo` setting to point to the primary server.

This will tell PostgreSQL on the secondary to connect to the primary to retrieve WAL records. In order for this to work, **the primary PostgreSQL must be configured to authenticate incoming replication requests from secondaries**.

To make the primary ready, the `listen_addresses` must be set so that PostgreSQL will bind to the right network interface and not only to `localhost`. This ensures that secondaries can establish socket connections to the primary PostgreSQL. 

This can be achieved by modifying the `postgresql.conf` similar to this:

```conf
# Possible values are replica|minimal|logical
wal_level = replica

# required for pg_rewind capability when standby goes out of sync with master

wal_log_hints = on
# sets the maximum number of concurrent connections from the standby servers.

max_wal_senders = 3
# The below parameter is used to tell the master to keep the minimum number of segments of WAL logs so that they are not deleted before standby consumes them. Each segment is 16MB.

wal_keep_segments = 8

# The below parameter enables read only connection on the node when it is in standby role. This is ignored when the server is running as master.
hot_standby = on
```

Furthermore, the primary must successfully authenticate these incoming network connections. **As streaming replication requests are implemented as PostgreSQL connections, it is necessary to create a replication user with appropriate access privileges**.

Once the `primary_conninfo` is set, secondaries when starting will first replay all WAL files available in their archive and then connect to the primary. After a successful start of a secondary the process list will show a `walreceiver` process:

    postgres    20    15  0 Jun22 ?        00:02:21 postgres: walreceiver   streamin

There are more details to a production grade configuration such as:

* Ensuring WAL segments are kept on the primary long enough so that secondaries can retrieve them.
* Ensuring that `max_wal_senders` is set appropriately.
* SSL encryption
* ...

Just to name few. For now, these settings are left aside, and the focus is to establish a minimal streaming replication setup.

### Authenticating Secondaries on the Primary

In order to allow secondaries to connect to the primary, a replication user (role) has to be created on the primary, e.g. with the username `replicator`. 

This `replicator` user will be granted the `REPLICATION` and `LOGIN`privilege. In contrast to the `SUPERUSER` privilege, the `REPLICATION` privilege doesn't allow altering any data. For the purpose of replication this isn't necessary.

Creating the replication user on the primary server can be achieved by using `psql`:

    CREATE USER replicator WITH REPLICATION ENCRYPTED PASSWORD 'secret'

In PostgreSQL authentication is controlled by the configuration file `pg_hba.conf` so that a record for the `replicator` user is necessary.

The necessary `pg_hba.conf` entries have the following format:

    host    replication  replicator  host1  md5
    host    replication  replicator  host2  md5
    host    replication  replicator  host3  md5

Note, that actually we only need two hosts for two secondaries. However, we may want to enable leader election at some point. So it makes sense to have a single `pg_hba.conf` that will work if applied to any of the servers when elected to become the new primary.

#### Configure Access of Secondaries to the Primary

Now that the primary is configured to accept incoming replication requests from secondaries, secondaries have to be configured to do exactly this.

As mentioned before, the `primary_conninfo` has to be configured in the `postgresql.conf` config file. It is not necessary to make this adjustment manually.

A secondary node may join a PostgreSQL replication cluster at a later time. In this case the primary as well as older secondaries already have data but the new secondary hasn't. In order to bring such a new secondary up to speed, PostgreSQL offers the `pg_basebackup` command [2]. Executing `pg_basebackup` will achieve two important goals.

It will:

1. Create a `postgresql.auto.conf` in the `$PGDATA` directory with a proper `primar_conninfo` setting.
2. Retrieve a binary copy of all data files of the entire primary server. While doing so it will activate the backup mode when necessary.

Hence, after running `pg_basebackup` the new secondary will be properly configured to connect to the primary in both regards: knowing which primary to connect to and having the dataset ready to begin streaming replication of subsequent changes.

Backup data directory of the primary using `pg_basebackup`:

    -h primary.hostname -U replicator -p 5432 -D $PGDATA -Fp -Xs -R

Where `primary.hostname` has to be replaced with the actual hostname.

Note that initializing an empty set of three cluster nodes: one primary and two secondaries requires to initialize the primary by executing `initdb` while on the secondaries `pg_basebackup` is to be executed.

## Summary

In order to set up streaming replication both the primary and the secondary servers have to be configured.

* `postgresql.conf` has to be changed to enable write-ahead logging (WAL).
* A replication user with `REPLICATION` and `LOGIN` privileges has to be created.
* Changes of `pg_hba.conf` grant secondaries access to the primary using the replication user.
* Execute `initdb` on the primary and `pg_basebackup` on secondaries.

## Links
1. PostgreSQL 12 Documentation - Streaming Replication, https://www.postgresql.org/docs/12/warm-standby.html#STREAMING-REPLICATION
2. PostgreSQL 12 Documentation - pg_basebackup, https://www.postgresql.org/docs/12/app-pgbasebackup.html