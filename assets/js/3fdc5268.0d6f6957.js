"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2144],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={id:"streaming-replication-sfs-init",title:"Initializing the StatefulSet"},l=void 0,p={unversionedId:"postgresql/building-the-pg-stateful-set/streaming-replication-sfs-init",id:"postgresql/building-the-pg-stateful-set/streaming-replication-sfs-init",isDocsHomePage:!1,title:"Initializing the StatefulSet",description:"Before the replication user can be created, the StatefulSet has to be created. Only after the PostgreSQL server is running the replication user can be created. Therefore, the next step is to engineer the StatefulSet specification.",source:"@site/docs/postgresql/40-building-the-pg-stateful-set/35-stateful-set-init.md",sourceDirName:"postgresql/40-building-the-pg-stateful-set",slug:"/postgresql/building-the-pg-stateful-set/streaming-replication-sfs-init",permalink:"/postgresql/building-the-pg-stateful-set/streaming-replication-sfs-init",tags:[],version:"current",sidebarPosition:35,frontMatter:{id:"streaming-replication-sfs-init",title:"Initializing the StatefulSet"},sidebar:"docs",previous:{title:"Streaming Replication ConfigMaps",permalink:"/postgresql/building-the-pg-stateful-set/streaming-replication-configmaps"},next:{title:"Creating a Replication User",permalink:"/postgresql/building-the-pg-stateful-set/replication-user"}},c=[{value:"The StatefulSet",id:"the-statefulset",children:[]},{value:"Working with StatefulSets",id:"working-with-statefulsets",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Links",id:"links",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before the replication user can be created, the StatefulSet has to be created. Only after the PostgreSQL server is running the replication user can be created. Therefore, the next step is to engineer the StatefulSet specification."),(0,r.kt)("p",null,"As discussed before, bootstrapping an empty PostgreSQL StatefulSet with ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," replicas requires executing ",(0,r.kt)("inlineCode",{parentName:"p"},"initdb")," on the primary and ",(0,r.kt)("inlineCode",{parentName:"p"},"pg_basebackup")," on the secondary."),(0,r.kt)("p",null,"Once the Primary is up and running, the Secondaries have to be brought in sync with it which can be accomplished executing ",(0,r.kt)("inlineCode",{parentName:"p"},"pg_basebackup")," ","[1]"," on all Secondaries. This will create the ",(0,r.kt)("inlineCode",{parentName:"p"},"$PGDATA")," directories and retrieve the data set from the Primary. "),(0,r.kt)("p",null,"Once these directories have been created, the StatefulSet shall not execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"pg_basebackup")," command on subsequent restarts. As part of the StatefulSet's lifecycle it will surely happen that the Pods will be re-created. This may happen during Kubernetes Node failures or StatefulSet updates, for example. The Pods will then start with a Persistent Volume that does not need initializiation. Therefore, the initialization logic requires nested conditionals and must recognize the Pod's role in the cluster by knowing whether the Pod is the primary or not and whether the data directory has already been created."),(0,r.kt)("p",null,"While theoretically a complex container command with appropriate args could be pasted into the StatefulSet YAML description, this would be hard to debug. On the other hand, modifying the PostgreSQL base image or creating a separate container image to execute a single script seems to be unnecessary overhead. If more scripts accumulate over time, collecting them in a CI/CD backed container image makes sense. For now, a script stored into another ConfigMap will help us to get going and interate quickly during development."),(0,r.kt)("p",null,"The first hurdle to overcome is to make the Pod introspect itself. In particular the Pod's role must be determined. For now the cluster topology is static, the first Pod is declared as the Primary. Hence, if the label information was available in the Pod, this helps determining its role."),(0,r.kt)("p",null,"The Kubernetes Downward API ","[1]"," can be used to mount metainformation such as Pod labels and Pod resources as a Volume into containers of the Pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'[...]\nvolumes:\n- name: podinfo\n        downwardAPI:\n          items:\n            - path: "labels"\n              fieldRef:\n                fieldPath: metadata.labels\n            - path: "annotations"\n              fieldRef:\n                fieldPath: metadata.annotations\n[...]\n')),(0,r.kt)("p",null,"Equipped with access to the Pod labels, the following BASH script accomplishes the initalization as described above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nPGDATA=/var/lib/postgresql/data/pgdata\nPODINFO_LABELS_FILE=/etc/podinfo/labels\n\nif [ ! -d $PGDATA ] \nthen\n  echo "The postgresql data directory $PGDATA does not exist."\n\n  if [ ! -e $PODINFO_LABELS_FILE ]\n  then\n    echo "  The podinfo file $PODINFO_LABELS_FILE does not exist. Did you create a downward API volume? For more details see: https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/"\n    echo "  Exitting with a failure."\n    exit 1\n  fi\n\n  # /etc/podinfo/labels only exists if the Kubernetes Downward API is mounted as volume.\n  # For more details see: https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/\n\n  cat $PODINFO_LABELS_FILE\n\n  if grep -q \'statefulset.kubernetes.io/pod-name="postgresql-sfs-0"\' $PODINFO_LABELS_FILE\n  then\n    echo "  Identified this Pod to be the static primary: postgresql-sfs-0."\n    echo "  Executing initdb..."\n    initdb --username postgres --pwfile <(echo $POSTGRES_PASSWORD)\n    if [ $? -ne 0 ] \n    then\n      echo "  Failed to execute initdb."\n      exit 1\n    fi\n  else\n    echo "  Identified this Pod to a secondary."\n    echo "  Executing pg_basebackup..."\n    /usr/lib/postgresql/12/bin/pg_basebackup -h postgresql-primary.pg.svc.cluster.local -U replicator -p 5432 -D $PGDATA -Fp -Xs -R\n    if [ $? -ne 0 ] \n    then\n      echo "  Failed to execute pg_basebackup."\n      exit 1\n    fi\n  fi\n  echo "  Done."  \nelse\n  echo "Found the postgresql data directory at $PGDATA."\nfi\n\necho "Starting PostgreSQL..."\n/usr/lib/postgresql/12/bin/postgres -c config_file=/etc/postgresql/postgresql.conf -D $PGDATA\n')),(0,r.kt)("p",null,"The script does not use ",(0,r.kt)("inlineCode",{parentName:"p"},"su")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," but will later be invoked with ",(0,r.kt)("inlineCode",{parentName:"p"},"gosu")," - a similar tool - to ensure the script is run as the ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres")," use which ensures the correct ownership of the ",(0,r.kt)("inlineCode",{parentName:"p"},"$PGDATA")," directory."),(0,r.kt)("p",null,"Load the script into a ConfigMap ",(0,r.kt)("inlineCode",{parentName:"p"},"postgresl-utils"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create configmap postgresql-utils --from-file=pg-init.sh\n")),(0,r.kt)("h2",{id:"the-statefulset"},"The StatefulSet"),(0,r.kt)("p",null,"The StatefulSet description of PostgreSQL looks similar to following. Store it in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"30-stateful-set.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: postgresql-sfs\nspec:\n  selector:\n    matchLabels:\n      app: postgresql-a # has to match .spec.template.metadata.labels\n  serviceName: "postgresql-svc"\n  replicas: 3 # by standard is 1\n  template:\n    metadata:\n      labels:\n        app: postgresql-a # has to match .spec.selector.matchLabels\n    spec:\n      terminationGracePeriodSeconds: 10\n      containers:\n      - name: postgresql-db\n        image: postgres:12.2        \n        command: ["gosu"]\n        args: ["postgres", "bash", "/utils/pg-init.sh"]\n        env:\n        - name: POSTGRES_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: postgresql-secrets\n              key: POSTGRES_PASSWORD              \n        - name: POSTGRES_REPLICATION_USERNAME\n          valueFrom:\n            secretKeyRef:\n              name: postgresql-replication-user\n              key: POSTGRES_REPLICATION_USERNAME\n        - name: POSTGRES_REPLICATION_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: postgresql-replication-user\n              key: POSTGRES_REPLICATION_PASSWORD\n        - name: PGPASSWORD # for pg_basebackup. It will authenticate as the replication user "replicator"\n          valueFrom:\n            secretKeyRef:\n              name: postgresql-replication-user\n              key: POSTGRES_REPLICATION_PASSWORD\n\n        - name: PGDATA\n          value: /var/lib/postgresql/data/pgdata\n        ports:\n        - containerPort: 5432\n          name: postgresql-port\n        volumeMounts:\n        - name: data\n          mountPath: /var/lib/postgresql/data\n        - name: configs\n          mountPath: /etc/postgresql        \n        - name: podinfo\n          mountPath: /etc/podinfo\n        - name: utils\n          mountPath: /utils\n      volumes:\n      - name: configs\n        configMap:\n          name: postgresql-configs\n      - name: utils\n        configMap:\n          name: postgresql-utils          \n      - name: podinfo\n        downwardAPI:\n          items:\n            - path: "labels"\n              fieldRef:\n                fieldPath: metadata.labels\n            - path: "annotations"\n              fieldRef:\n                fieldPath: metadata.annotations\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n    spec:\n      accessModes: [ "ReadWriteOnce" ]\n      storageClassName: "standard"\n      resources:\n        requests:\n          storage: 1Gi\n')),(0,r.kt)("p",null,"In conjunction with the previously created Services, ConfigMaps and Secrets you can intantiate the StatefulSet by applying its YAML spec:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f 30-stateful-set.yaml\n")),(0,r.kt)("p",null,"This will create a StatefulSet along with its ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," Pods as well as the corresponding Peristent Volume Claims. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                               READY   STATUS             RESTARTS   AGE\npostgresql-sfs-0                   1/1     Running            0          5m20s\npostgresql-sfs-1                   0/1     CrashLoopBackOff   5          5m17s\npostgresql-sfs-2                   0/1     CrashLoopBackOff   5          5m14s\n")),(0,r.kt)("p",null,"While the Primary Pod has been started successfully, the two Secondary Pods are failing."),(0,r.kt)("p",null,"A brief look into their logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl logs postgresql-sfs-1\n")),(0,r.kt)("p",null,"Reveals the following failure message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'statefulset.kubernetes.io/pod-name="postgresql-sfs-1"  Identified this Pod to a secondary.\n  Executing pg_basebackup...\npg_basebackup: error: could not connect to server: could not translate host name "postgresql-primary.pg.svc.cluster.local" to address: Name or service not known\n  Failed to execute pg_basebackup.\n')),(0,r.kt)("p",null,"The reason for this is simple: ",(0,r.kt)("strong",{parentName:"p"},"there is not replication user, yet"),"."),(0,r.kt)("h2",{id:"working-with-statefulsets"},"Working with StatefulSets"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Be reminded that deleting the StatefulSet will delete the corresponding Pods but it will not delete the Persistent Volume Claims nor the associated Persistent Volumes"),". The lifecycle of Persistent Volume Claims are independent from the StatefulSet. This is to prevent data loss when deleting the StatefulSet, accidentally. For this reason, you will have to delete the Persistent Volume Claims manually when testing the initalization logic for bootstrapping the StatefulSet. Otherwise the initialization script might behave unexpected as it will see existing artefacts on the Persistent Volumes which will be reattached when a StatefulSet with the same name is created where a prior StatefulSet created Peristent Volume Claims"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this section we started connecting the dots. The PostgreSQL streaming replication implementation has been started. An initalization script has been developed enabling the StatefulSet Pods to introspect and determine their static cluster roles ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary"),". Accordingly, the Pods either initialize by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"initdb")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pg_basebackup"),". The corresponding StatefulSet definition has been created and tested."),(0,r.kt)("p",null,"In the next step the replication user has to be created so that Secondaries can connect to the Primary to start the streaming replication."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Expose Pod Information to containers Through Files, ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/"},"https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/"))))}d.isMDXComponent=!0}}]);