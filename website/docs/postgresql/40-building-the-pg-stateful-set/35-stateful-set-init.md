---
id: streaming-replication-sfs-init
title: Initializing the StatefulSet
---

Before the replication user can be created, the StatefulSet has to be created. Only after the PostgreSQL server is running the replication user can be created. Therefore, the next step is to engineer the StatefulSet specification.

As discussed before, bootstrapping an empty PostgreSQL StatefulSet with `3` replicas requires executing `initdb` on the primary and `pg_basebackup` on the secondary.

Once the Primary is up and running, the Secondaries have to be brought in sync with it which can be accomplished executing `pg_basebackup` [1] on all Secondaries. This will create the `$PGDATA` directories and retrieve the data set from the Primary. 

Once these directories have been created, the StatefulSet shall not execute the `pg_basebackup` command on subsequent restarts. As part of the StatefulSet's lifecycle it will surely happen that the Pods will be re-created. This may happen during Kubernetes Node failures or StatefulSet updates, for example. The Pods will then start with a Persistent Volume that does not need initialization. Therefore, the initialization logic requires nested conditionals and must recognize the Pod's role in the cluster by knowing whether the Pod is the primary or not and whether the data directory has already been created.

While theoretically a complex container command with appropriate args could be pasted into the StatefulSet YAML description, this would be hard to debug. On the other hand, modifying the PostgreSQL base image or creating a separate container image to execute a single script seems to be unnecessary overhead. If more scripts accumulate over time, collecting them in a CI/CD backed container image makes sense. For now, a script stored into another ConfigMap will help us to get going and integrate quickly during development.

The first hurdle to overcome is to make the Pod introspect itself. In particular the Pod's role must be determined. For now the cluster topology is static, the first Pod is declared as the Primary. Hence, if the label information was available in the Pod, this helps determine its role.

The Kubernetes Downward API [1] can be used to mount metadata such as Pod labels and Pod resources as a Volume into containers of the Pod:

```yml
[...]
volumes:
- name: podinfo
        downwardAPI:
          items:
            - path: "labels"
              fieldRef:
                fieldPath: metadata.labels
            - path: "annotations"
              fieldRef:
                fieldPath: metadata.annotations
[...]
```

Equipped with access to the Pod labels, the following BASH script accomplishes the initialization as described above. 

Create the file `pg-init.sh` with the following content:

```bash
#!/bin/bash

PGDATA=/var/lib/postgresql/data/pgdata
PODINFO_LABELS_FILE=/etc/podinfo/labels

if [ ! -d $PGDATA ] 
then
  echo "The postgresql data directory $PGDATA does not exist."

  if [ ! -e $PODINFO_LABELS_FILE ]
  then
    echo "  The podinfo file $PODINFO_LABELS_FILE does not exist. Did you create a downward API volume? For more details see: https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/"
    echo "  Exitting with a failure."
    exit 1
  fi

  # /etc/podinfo/labels only exists if the Kubernetes Downward API is mounted as volume.
  # For more details see: https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/

  cat $PODINFO_LABELS_FILE

  if grep -q 'statefulset.kubernetes.io/pod-name="postgresql-sfs-0"' $PODINFO_LABELS_FILE
  then
    echo "  Identified this Pod to be the static primary: postgresql-sfs-0."
    echo "  Executing initdb..."
    initdb --username postgres --pwfile <(echo $POSTGRES_PASSWORD)
    if [ $? -ne 0 ] 
    then
      echo "  Failed to execute initdb."
      exit 1
    fi
  else
    echo "  Identified this Pod to a secondary."
    echo "  Executing pg_basebackup..."
    /usr/lib/postgresql/14/bin/pg_basebackup -h postgresql-primary.k8s-training.svc.cluster.local -U replicator -p 5432 -D $PGDATA -Fp -Xs -R
    if [ $? -ne 0 ] 
    then
      echo "  Failed to execute pg_basebackup."
      exit 1
    fi
  fi
  echo "  Done."  
else
  echo "Found the postgresql data directory at $PGDATA."
fi

echo "Starting PostgreSQL..."
/usr/lib/postgresql/14/bin/postgres -c config_file=/etc/postgresql/postgresql.conf -D $PGDATA
```

The script does not use `su` or `sudo` but will later be invoked with `gosu` - a similar tool - to ensure the script is run as the `postgres` use which ensures the correct ownership of the `$PGDATA` directory.

Load the script into a ConfigMap `postgresl-utils`:

    kubectl create configmap postgresql-utils --from-file=pg-init.sh

## The StatefulSet

The StatefulSet description of PostgreSQL looks similar to following. Store it in a file named `30-stateful-set.yaml`:

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgresql-sfs
spec:
  selector:
    matchLabels:
      app: postgresql-a # has to match .spec.template.metadata.labels
  serviceName: "postgresql-svc"
  replicas: 3 # by standard is 1
  template:
    metadata:
      labels:
        app: postgresql-a # has to match .spec.selector.matchLabels
    spec:
      terminationGracePeriodSeconds: 10
      containers:
      - name: postgresql-db
        image: postgres:14.5        
        command: ["gosu"]
        args: ["postgres", "bash", "/utils/pg-init.sh"]
        env:
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-secrets
              key: POSTGRES_PASSWORD              
        - name: POSTGRES_REPLICATION_USERNAME
          valueFrom:
            secretKeyRef:
              name: postgresql-replication-user
              key: POSTGRES_REPLICATION_USERNAME
        - name: POSTGRES_REPLICATION_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-replication-user
              key: POSTGRES_REPLICATION_PASSWORD
        - name: PGPASSWORD # for pg_basebackup. It will authenticate as the replication user "replicator"
          valueFrom:
            secretKeyRef:
              name: postgresql-replication-user
              key: POSTGRES_REPLICATION_PASSWORD

        - name: PGDATA
          value: /var/lib/postgresql/data/pgdata
        ports:
        - containerPort: 5432
          name: postgresql-port
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
        - name: configs
          mountPath: /etc/postgresql        
        - name: podinfo
          mountPath: /etc/podinfo
        - name: utils
          mountPath: /utils
      volumes:
      - name: configs
        configMap:
          name: postgresql-configs
      - name: utils
        configMap:
          name: postgresql-utils          
      - name: podinfo
        downwardAPI:
          items:
            - path: "labels"
              fieldRef:
                fieldPath: metadata.labels
            - path: "annotations"
              fieldRef:
                fieldPath: metadata.annotations
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 1Gi
```

In conjunction with the previously created Services, ConfigMaps and Secrets you can instantiate the StatefulSet by applying its YAML spec:

    kubectl apply -f 30-stateful-set.yaml

This will create a StatefulSet along with its `3` Pods as well as the corresponding Persistent Volume Claims. 

    NAME                               READY   STATUS             RESTARTS   AGE
    postgresql-sfs-0                   1/1     Running            0          5m20s
    postgresql-sfs-1                   0/1     CrashLoopBackOff   5          5m17s
    postgresql-sfs-2                   0/1     CrashLoopBackOff   5          5m14s

While the Primary Pod has been started successfully, the two Secondary Pods are failing.

A brief look into their logs:

    kubectl logs postgresql-sfs-1

Reveals the following failure message:

    statefulset.kubernetes.io/pod-name="postgresql-sfs-1"  Identified this Pod to a secondary.
      Executing pg_basebackup...
    pg_basebackup: error: could not connect to server: could not translate host name "postgresql-primary.k8s-training.svc.cluster.local" to address: Name or service not known
      Failed to execute pg_basebackup.

The reason for this is simple: **there is no replication user, yet**.

## Working with StatefulSets

**Be reminded that deleting the StatefulSet will delete the corresponding Pods, but it will not delete the Persistent Volume Claims nor the associated Persistent Volumes**. The lifecycle of Persistent Volume Claims are independent of the StatefulSet. This is to prevent data loss when deleting the StatefulSet, accidentally. For this reason, you will have to delete the Persistent Volume Claims manually when testing the initialization logic for bootstrapping the StatefulSet. Otherwise, the initialization script might behave unexpected as it will see existing artifacts on the Persistent Volumes which will be reattached when a StatefulSet with the same name is created where a prior StatefulSet created Persistent Volume Claims

## Summary

In this section we started connecting the dots. The PostgreSQL streaming replication implementation has been started. An initialization script has been developed enabling the StatefulSet Pods to introspect and determine their static cluster roles `Primary` or `Secondary`. Accordingly, the Pods either initialize by executing `initdb` or `pg_basebackup`. The corresponding StatefulSet definition has been created and tested.

In the next step the replication user has to be created so that Secondaries can connect to the Primary to start the streaming replication.

## Links
1. Kubernetes Documentation, Tasks, Expose Pod Information to containers Through Files, https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/