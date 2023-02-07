# Open Loops

* Set max_wal_senders
* Ensure keeping WAL segments long enough. replication slots?

# Archive

This page contains left over paragraphs from variuous pages of this chapter.


## Replication using WAL Shipping

### WAL Records
### WAL Streaming vs. WAL File Shipping

* Replication lag with WAL streaming typically < 1s [1]

Deep:

* "With streaming replication, `archive_timeout` is not required to reduce the data loss window." [1]

* "If you use streaming replication without file-based continuous archiving, the server might recycle old WAL segments before the standby has received them." [1]
  *  "If this occurs, the standby will need to be reinitialized from a new base backup" [1]
  * JF: This sounds like a scenario we'd like to provoke or avoid (by using file-based continuous archiving)
    * Avoid: 
      1. set `wal_keep_segments` high enough
        * WAL segements won't be recycled, too early.
      2. Configure a replication slot for the standby
      3. If you setup a WAL archive that's accessible from the standby, these solutions are not required.
        * The standby can always use the archive to catch up provided it retains enough segments.


* Set up a file-based log-shiping standby server
* The step that **turns a file-based log-shipping standby into a streamin replication standby** is setting the `primary_conninfo` setting to point to the primary server


  * Set the `listen_addresses`and authentication options on the primary so that the standby server can connect to the `replication` pseudo-database on the primary server
* Set keepalice socket options if supported
* Set the maximum number of concurrent connections from the standby servers (`max_wal_senders`)
* When the standby is started and `primary_conninfo` is set correctly, the standby will connect to the primary after replaying all WAL files available in the archive.
  * If the connection is established successfully, you will see a walreceiver process in the standby, 
    and a corresponding walsender process in the primary.


### On each Secondary


* the `pg_basebackup` command will also create $PGDATA/postgresql.auto.conf
  * this also sets the `primary_conninfo` attribute so that this does not have to done manually.

Start PostgreSQL

#### Proceed With Replication Slots  

#### Proceed With Synchronous Replication

## Monitoring

* An important health indicator of streaming replication is the amount of WAL records generated in the primary but not yet applied in the standby.
  * You can calculate this lag by comparing the current WAL write location on the primary with the last WAL location received by the standby.
    * These locations can be retrieved using `pg_current_wal_ln`on the primary and `pg_last_wal_receive_lsn` on the stanbdy.
  * The last WAL receive location in the standby is also displayed in the process status of the WAL receiver process.
    You can display this using the `ps` command.
* You can retrieve a list of WAL sender processes via the `pg_stat_replication`view. 
  * Large differences between `pg_current_wal_lsn`and the view's `send_lsn`field might **indicate that the master server is under heavy load**, 
    * while differences between `sent_lsn`and `pg_last_wal_receive_lsn` on the standby might **indicate network delay**, or that the standby is under heavy load.
* On a standby, the status of the WAL receiver process can be retrieved via the `pg_stat_wal_receiver` view.
  A large difference between `üg_last_wal_replay_lsn`and the view's `received_lsn` **indicates that WAL is being received faster than it can be relayed**.

## Replication Slots
* Replication Slots provide an automated way to ensure that the master does not remove WAL setments until they have been received by all standbys.
  * and that the master does not remove rows which could cause recovery conflict even when the standby is disconnected.
* Only the number of WAL segements will be kept which are needed for the replication
* The drawback of `replication slots` is that it is not possible to limit the space requirement for `pg_wal`.
  * JF: This may cause `disk full` issues.

... To be continued


## Basebackup with `pg_basebackup`




**TODO** Veryify this statement.

This is only necessary when a node joins the cluster for the first time.

**This step needs to be performed on each Secondary**.

The Service `postgresql-primary` can be used to refer to the Primary node as it provides the following, stable DNS entry: `postgresql-primary.k8s-training.svc.cluster.local`.

Remove existing data:

    rm -rf /var/lib/postgresql/data/pgdata

Perform the pg_basebackup:

    pg_basebackup -h postgresql-primary.k8s-training.svc.cluster.local -U replicator -p 5432 -D $PGDATA -Fp -Xs -P -R