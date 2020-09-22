---
id: streaming-replication-configmaps
title: Streaming Replication ConfigMaps
---

As mentioned previously, the `postgresql.conf` needs refinement to activate the streaming replication. For this purpose we create a local `postgresql.conf` which will be mounted in to the Pods using ConfigMaps. Also we need to setup the authentication in `pg_hba.conf`.

## ConfigMaps and Volume Mounts

Beside of getting the configuration files `postgresql.conf` and `pg_hba.conf` right, it is also necessary to inject these configuration files into the StatefulSet while having the option to update these config files throughout the lifecycle of the StatefulSet. As there can be use cases requiring the modification of config files but do not require a modification of the underlying container, configs should be maintained separately from the container images. Even a dedicated container image would be too inflexible. So as the name implies, the Kubernets ConfigMap is a suitable tool to handle this demand well.

Each ConfigMap may contain a multiple key value pairs. As seen in previous lessons, it is possible to create such ConfigMaps from files where the filename becomes the key and their contents are turned into the corresponding values.

Once such a ConfigMap is created, it can be mounted into containers as a Volume. This will expose keys as files. To the container these config files will appear as ordinary files. In the StatefulSet definition we will then mount the ConfigMap into the `/etc/postgresql` directory.

## `postgresql.conf`

We assume the PostgreSQL cluster to have one (1) primary and two (2) secondaries with a total number of three (3) Pods in the StatefulSet. For production usage, the number of replicas must be configurable in a `m = 2n+1` fashion with `n>=1` which means `1, 3, 5, ...` Pods in the StatefulSet.

This requires setting values in config files dynamically which is not only required to set up the streaming replication but also to dynamically adapt PostgreSQL settings to container memory and CPU limits as well as the size of the Persistent Volumes. However, this needs to be covered in a later stage. For now, we are focused on getting the streaming replication going.

As it should later be possible to turn any secondary into a primary, the config files for all nodes in the cluster will structurally be the same.

Create the ConfigMap:

    kubectl create configmap postgresql-configs --from-file=postgresql.conf

The ConfigMap `postgresql-configs` will then be mounted into the StatefulSet as a Volume mount. This will create a directory containing the `postgresql.conf` file.

By default PostgreSQL will search for the `postgresql.conf` file in the `$PGDATA` directory. This is not desired as `$PGDATA` is already a Volume mount. Therefore, it is necessary to point PostgreSQL to the exact filepath of the designated `postgresql.conf` file. The exclusive way to achieve this is by starting PostgreSQL with the following command line option:

    postgresql -c config_file=/etc/postgresql/postgresql.conf

The final `postgresql.conf` including some adjustements that have yet to be discussed looks like this:

```conf
# -----------------------------
# PostgreSQL configuration file
# -----------------------------

# a8s-pg
hba_file = '/etc/postgresql/pg_hba.conf'
# a8s-pg

#------------------------------------------------------------------------------
# CONNECTIONS AND AUTHENTICATION
#------------------------------------------------------------------------------

# - Connection Settings -

listen_addresses = '*'

#------------------------------------------------------------------------------
# WRITE-AHEAD LOG
#------------------------------------------------------------------------------

# - Settings -

# a8s-pg
wal_level = replica			# minimal, replica, or logical
# a8s-pg

# a8s-pg
# Required for pg_rewind capability when standby goes out of sync with master
wal_log_hints = on			# also do full page writes of non-critical updates
# a8s-pg

#------------------------------------------------------------------------------
# REPLICATION
#------------------------------------------------------------------------------

# - Sending Servers -

# Set these on the master and on any standby that will send replication data.

# a8s-pg
# Sets the maximum number of concurrent connections from the standby servers.
max_wal_senders = 3		# max number of walsender processes
# a8s-pg

# a8s-pg
# Segments of WAL logs so that they are not deleted before standby consumes them.
wal_keep_segments = 8	# in logfile segments; 0 disables
# a8s-pg

# a8s-pg
# Standby role. This is ignored when the server is running as master.
hot_standby = on			# "off" disallows queries during recovery
# a8s-pg
```

## `pg_hba.conf`

In order to allow secondaries to connect to the master to retrieve replicas, the master must allow secondaries to authenticate. This is done in the `pg_hba.conf` file. 

As all secondaries should be able to become primaries, it makes sense to configure all nodes right from the beginning.

Similar to `postgres.conf` the `pg_hba.conf` file is assumed to be located in the `$PGDATA` dir. While it is possible to supply the `postgres` startup command with a `pg_hba.conf` location there is a more elegant way: set the location in the `postgres.conf` file.

Create a `pg_hba.conf` and **recreate the `postgresql-configs` Config Map**:

    kubectl create configmap postgresql-configs --from-file=postgresql.conf --from-file=pg_hba.conf

The location of the `pg_hba.conf` file will be: `/etc/postgresql/pg_hba.conf`.

As you can see in `postgresql.conf` the following line already exists and ensures to read our `pg_hba.conf` from the Volume mount:

    hba_file = '/etc/postgresql/pg_hba.conf'

The syntax of `pg_hba.conf` has been explained earlier.

One entry per cluster Pod is required.

Just to remember: the syntax is as follows:

    # host  DATABASE     USER        ADDRESS           METHOD  [OPTIONS]
    host    replication  replicator  192.168.0.107/32  md5

Hence, we need three entries. This will allow a client to connect to itself but a single config can be used across all cluster nodes.

    host    replication  replicator  postgresql-sfs-0.postgresql-svc.pg.svc.cluster.local  md5
    host    replication  replicator  postgresql-sfs-1.postgresql-svc.pg.svc.cluster.local  md5
    host    replication  replicator  postgresql-sfs-2.postgresql-svc.pg.svc.cluster.local  md5

Using the DNS names created by the corresponding Kubernetes Service ensures a stable network identity as the underlying Pod IP addresses may change when Pods need to be rescheduled (e.g. during node maintenance).

However, this does not work as there is a deadlock between starting the Pod and updating the DNS entries of the `postgresql-svc` service. Within the Pods Postgres will only start if the DNS entries resolve but these DNS entries depend on the Pods being ready so that the corresponding Service Endpoints will be created. 

There are solutions to this problem but for now we'll circumnavigate the issue with by being less restrictive:

    # host  DATABASE     USER        ADDRESS  METHOD  [OPTIONS]
    host    replication  replicator  samenet  md5
    host    replication  replicator  samenet  md5
    host    replication  replicator  samenet  md5

This won't restrict access to a particular IP address or DNS name - desirable for productive use - but limit access to IP addresses in the same subnet - the internal Kubernetes network.

Another entry needs to be added to allow the `postgres` user to login in remotely. This will be needed when executing administrative Kubernetes Jobs such as creating the `replication` user.

    host    all          postgres    samenet  md5

The final `pg_hba.conf` then looks similar to this:

```conf
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     trust

# IPv4 local connections:
host    all             all             127.0.0.1/32            trust

# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     trust
host    replication     all             127.0.0.1/32            trust
host    replication     all             ::1/128                 trust

host    replication  replicator  samenet  md5
host    replication  replicator  samenet  md5
host    replication  replicator  samenet  md5

# Allow psql connections from Kubernetes Jobs
host    all          postgres    samenet  md5
```

## Summary
The required PostgreSQL configuration files `postgresql.conf` and `pg_hba.conf` are ready.

`postgresql.conf` activates write-ahead logging and sets the path to our custom version of `pg_hba.conf` while the latter creates the necessary prerequisites for authenticating the `replication` and `postgres` users.

Both files are stored in the `postgresql-configs` ConfigMap. This way the config files can be updated independently from the PostgreSQL container image.

In the following we will define the StatefulSet specification and look into how the replication user is created.

## Links

1. PostgreSQL 12 Documentation - pg_basebackup, https://www.postgresql.org/docs/12/app-pgbasebackup.html
