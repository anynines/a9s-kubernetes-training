"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1519:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={id:"stateful-set-postgresql",title:"PostgreSQL StatefulSet"},l=void 0,p={unversionedId:"kubernetes/stateful-sets/stateful-set-postgresql",id:"kubernetes/stateful-sets/stateful-set-postgresql",isDocsHomePage:!1,title:"PostgreSQL StatefulSet",description:"In the following set of exercises StatefulSets are presented in a practical manner. The PostgreSQL [11] RDBMS is used as an example as the databse is both widely known and of great utility to any developer. The goal of the exercises are not to build a production grade automation for PostgreSQL but to illustrate StatefulSet concepts.",source:"@site/docs/kubernetes/80-stateful-sets/30-postgresql-exercise.md",sourceDirName:"kubernetes/80-stateful-sets",slug:"/kubernetes/stateful-sets/stateful-set-postgresql",permalink:"/a9s-kubernetes-training/kubernetes/stateful-sets/stateful-set-postgresql",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"stateful-set-postgresql",title:"PostgreSQL StatefulSet"},sidebar:"docs",previous:{title:"StatefulSets",permalink:"/a9s-kubernetes-training/kubernetes/stateful-sets/stateful-sets"},next:{title:"Headless Service",permalink:"/a9s-kubernetes-training/kubernetes/stateful-sets/stateful-set-headless-service"}},c=[{value:"Designing the StatefulSet",id:"designing-the-statefulset",children:[]},{value:"The Container Image",id:"the-container-image",children:[]},{value:"Creating a Secret",id:"creating-a-secret",children:[]},{value:"Creating a Service",id:"creating-a-service",children:[]},{value:"Creating the StatefulSet",id:"creating-the-statefulset",children:[]},{value:"Links",id:"links",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In the following set of exercises StatefulSets are presented in a practical manner. The PostgreSQL ","[11]"," RDBMS is used as an example as the databse is both widely known and of great utility to any developer. The goal of the exercises are not to build a production grade automation for PostgreSQL but to illustrate StatefulSet concepts."),(0,s.kt)("h2",{id:"designing-the-statefulset"},"Designing the StatefulSet"),(0,s.kt)("p",null,"In order to create the PostgreSQL StatefulSet we proceed with the following steps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Identify or build (a) container image(s)"),(0,s.kt)("li",{parentName:"ul"},"Specify a headless Service"),(0,s.kt)("li",{parentName:"ul"},"Specify a StatefulSet"),(0,s.kt)("li",{parentName:"ul"},"Provision the Service and StatefulSet"),(0,s.kt)("li",{parentName:"ul"},"Conduct simple experiments")),(0,s.kt)("p",null,"Start with finding a container image."),(0,s.kt)("h2",{id:"the-container-image"},"The Container Image"),(0,s.kt)("p",null,"An essential part of the StatefulSet for PostgreSQL is the database server itself. Luckily, there is no need to containerize PostgreSQL as this as already been done. Hence, use the official PostgreSQL Docker Image found at DockerHub ","[1]",". Pause this tutorial for a second and have a quick look at the ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/postgres"},"description of the container image"),". This is where you'll find how the container image can be parameterized - a major challenge when creating the PostgreSQL StatefulSet. In particular, this is where you find out how to set a proper password. Try to find the corresponding setting yourself so that you understand the structure of the Secret described in the next section."),(0,s.kt)("h2",{id:"creating-a-secret"},"Creating a Secret"),(0,s.kt)("p",null,"Starting PostgreSQL requires an administator password which will be stored as a Secret."),(0,s.kt)("p",null,"Create a PostgreSQL Secret containing the password for the admin user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl create secret generic postgresql-secrets --from-literal=POSTGRES_PASSWORD=tes6Aev8\n")),(0,s.kt)("p",null,"Verify its creation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl describe secret postgresql-secrets\n")),(0,s.kt)("h2",{id:"creating-a-service"},"Creating a Service"),(0,s.kt)("p",null,"In order to provide a stable network identity to address the PostgreSQL server create a headless services by creating the file ",(0,s.kt)("inlineCode",{parentName:"p"},"10-service.yaml"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: postgresql-svc\n  labels:\n    app: postgresql-a\nspec:\n  ports:\n  - port: 5432\n    name: postgresql-port\n  clusterIP: None\n  selector:\n      app: postgresql-a\n")),(0,s.kt)("p",null,"The attribute ",(0,s.kt)("inlineCode",{parentName:"p"},"clusterIP: None")," of the Service specification denotes that this is a ",(0,s.kt)("strong",{parentName:"p"},"headless Service"),"."),(0,s.kt)("p",null,"Create the Service:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl apply -f 10-service.yaml\n")),(0,s.kt)("p",null,"Inspect the Service:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl describe service postgresql-svc\n")),(0,s.kt)("p",null,"The output should be similar to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Name:              postgresql-svc\nNamespace:         default\nLabels:            app=postgresql-a\nAnnotations:       Selector:  app=postgresql-a\nType:              ClusterIP\nIP:                None\nPort:              postgresql-port  5432/TCP\nTargetPort:        5432/TCP\nEndpoints:         172.17.0.5:5432\nSession Affinity:  None\nEvents:            <none\n")),(0,s.kt)("p",null,"Pay attention to the ",(0,s.kt)("inlineCode",{parentName:"p"},"IP")," attribute."),(0,s.kt)("p",null,"Normally, a Kubernetes Service has a cluster-internal IP address as seen in the ",(0,s.kt)("a",{parentName:"p",href:"/kubernetes/replicaset-and-service/services"},"Service example")," of the ",(0,s.kt)("a",{parentName:"p",href:"/kubernetes/replicaset-and-service/introduction"},"ReplicaSet lesson"),". Requests to the Service IP are then load balanced across the Service endpoints, e.g. Pods binding to the Service by using matching Labels."),(0,s.kt)("p",null,"In constrast to a regular Service, ",(0,s.kt)("strong",{parentName:"p"},"a headless Service does not have a cluster IP address"),". This is why it is declared using the ",(0,s.kt)("inlineCode",{parentName:"p"},"ClusterIP: None")," declaration."),(0,s.kt)("p",null,"So in constrast to a standard Service, ",(0,s.kt)("strong",{parentName:"p"},"a headless Service does not perform load balancing"),". Depending on the selectors defined for the Service cluster-internal ",(0,s.kt)("strong",{parentName:"p"},"DNS entries will be created"),"."),(0,s.kt)("h2",{id:"creating-the-statefulset"},"Creating the StatefulSet"),(0,s.kt)("p",null,"Now, with the preliminaries covered, the actual StatefulSet can be created in ",(0,s.kt)("inlineCode",{parentName:"p"},"30-stateful-set.yaml"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: postgresql-sfs\nspec:\n  selector:\n    matchLabels:\n      app: postgresql-a # has to match .spec.template.metadata.labels\n  serviceName: "postgresql-svc"\n  replicas: 1 # by default is 1\n  template:\n    metadata:\n      labels:\n        app: postgresql-a # has to match .spec.selector.matchLabels\n    spec:\n      terminationGracePeriodSeconds: 10\n      containers:\n      - name: postgresql-db\n        image: postgres:12.2\n        env:\n        - name: POSTGRES_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: postgresql-secrets\n              key: POSTGRES_PASSWORD\n        ports:\n        - containerPort: 5432\n          name: postgresql-port\n        volumeMounts:\n        - name: data\n          mountPath: /var/lib/postgresql/data\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n    spec:\n      accessModes: [ "ReadWriteOnce" ]\n      storageClassName: "default"\n      resources:\n        requests:\n          storage: 1Gi\n')),(0,s.kt)("p",null,"Have you noticed how the Secret is mounted as an environment variable as described in the container image description ","[1]","?"),(0,s.kt)("p",null,"Also notice the ",(0,s.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," section. The term ",(0,s.kt)("em",{parentName:"p"},"Volume Claim Template")," indicates that this is not a Persistent Volume Claim (PVC). Consider the StatefulSet has specified mulitple ",(0,s.kt)("inlineCode",{parentName:"p"},"replicas"),", three (3) for instance. In this case three Persistent Volume Claims need to be created. As each PVC is then parameterized with the individual replica's Pod identity, the actual Persistent Volume Claims are similar but not identical. The Persistent Volume Claim Template describes their commonalities."),(0,s.kt)("p",null,"Execute the spec:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl apply -f 30-stateful-set.yaml\n")),(0,s.kt)("p",null,"List the StatefulSets:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl get statefulsets\n")),(0,s.kt)("p",null,"Describe the StatefulSet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl describe statefulset postgresql-sfs\n")),(0,s.kt)("p",null,"In case your StatefulSet doesn't become ready you may want to investigate its Pod which can be selected using a Label."),(0,s.kt)("p",null,"List the Pods of the StatefulSet by using its label ",(0,s.kt)("inlineCode",{parentName:"p"},"app=postgresql-a"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl get pods -l app=postgresql-a\n")),(0,s.kt)("p",null,"Your Pod may have entered the ",(0,s.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," state as is failed to start several times in a row so it's time to do some detective work."),(0,s.kt)("p",null,"By listing the Pods you have obtained the Pod name ",(0,s.kt)("inlineCode",{parentName:"p"},"postgresql-sfs-0"),". The name perfectly demonstrates the Pod identity that comes as number ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," attached to the StatefulSet name ",(0,s.kt)("inlineCode",{parentName:"p"},"postgresql-sfs"),"."),(0,s.kt)("p",null,"Retrieve the Pod's logs:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl logs postgresql-sfs-0\n")),(0,s.kt)("p",null,"And you should see the entry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'The files belonging to this database system will be owned by user "postgres".\nThis user must also own the server process.\n\nThe database cluster will be initialized with locale "en_US.utf8".\nThe default database encoding has accordingly been set to "UTF8".\nThe default text search configuration will be set to "english".\n\nData page checksums are disabled.\n\ninitdb: error: directory "/var/lib/postgresql/data" exists but is not empty\nIt contains a lost+found directory, perhaps due to it being a mount point.\nUsing a mount point directly as the data directory is not recommended.\nCreate a subdirectory under the mount point.\n')),(0,s.kt)("p",null,"The PostgreSQL Image description ","[1]"," says:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"PGDATA This optional variable can be used to define another location - like a subdirectory - for the database files. The default is /var/lib/postgresql/data. If the data volume you're using is a filesystem mountpoint (like with GCE persistent disks) or remote folder that cannot be chowned to the postgres user (like some NFS mounts), Postgres initdb recommends a subdirectory be created to contain the data.")),(0,s.kt)("p",null,"This means we have to tell PostgreSQL to change it's data directory to something like ",(0,s.kt)("inlineCode",{parentName:"p"},"/var/lib/postgresql/data/pgdata")," by passing the path using the ",(0,s.kt)("inlineCode",{parentName:"p"},"PGDATA")," environment variable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: postgresql-sfs\nspec:\n  selector:\n    matchLabels:\n      app: postgresql-a # has to match .spec.template.metadata.labels\n  serviceName: "postgresql-svc"\n  replicas: 1 # by default is 1\n  template:\n    metadata:\n      labels:\n        app: postgresql-a # has to match .spec.selector.matchLabels\n    spec:\n      terminationGracePeriodSeconds: 10\n      containers:\n      - name: postgresql-db\n        image: postgres:12.2\n        env:\n        - name: POSTGRES_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: postgresql-secrets\n              key: POSTGRES_PASSWORD\n        - name: PGDATA\n          value: /var/lib/postgresql/data/pgdata\n        ports:\n        - containerPort: 5432\n          name: postgresql-port\n        volumeMounts:\n        - name: data\n          mountPath: /var/lib/postgresql/data\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n    spec:\n      accessModes: [ "ReadWriteOnce" ]\n      storageClassName: "default"\n      resources:\n        requests:\n          storage: 1Gi\n')),(0,s.kt)("p",null,"First delete the existing StatefulSet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl delete statefulset postgresql-sfs\n")),(0,s.kt)("p",null,"There is no problem with the Peristent Volume as it's empty (beside of the ",(0,s.kt)("inlineCode",{parentName:"p"},"lost+found")," folder). So with the newly introduced environment variable ",(0,s.kt)("inlineCode",{parentName:"p"},"PGDATA")," you can apply the spec again:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl apply -f 30-stateful-set.yaml\n")),(0,s.kt)("p",null,"And by executing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl get statefulset postgresql-sfs\n")),(0,s.kt)("p",null,"You should see the StatefulSet being ",(0,s.kt)("inlineCode",{parentName:"p"},"RUNNING"),"."),(0,s.kt)("p",null,"Congratulations! You have deployed your first StatefulSet."),(0,s.kt)("h2",{id:"links"},"Links"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"PostgreSQL Docker Image at DockerHub, ",(0,s.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/postgres"},"https://hub.docker.com/_/postgres")),(0,s.kt)("li",{parentName:"ol"},"Kubernetes Examples on GitHub, Persistent Volume Provisioning, ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/examples/blob/master/staging/persistent-volume-provisioning/README.md"},"https://github.com/kubernetes/examples/blob/master/staging/persistent-volume-provisioning/README.md")),(0,s.kt)("li",{parentName:"ol"},"PostgreSQL Documentation - psql, ",(0,s.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/12/app-psql.html"},"https://www.postgresql.org/docs/12/app-psql.html")),(0,s.kt)("li",{parentName:"ol"},"Kelsey Hightower @ Twitter, ",(0,s.kt)("a",{parentName:"li",href:"https://twitter.com/kelseyhightower/status/935252923721793536?lang=en"},"https://twitter.com/kelseyhightower/status/935252923721793536?lang=en")),(0,s.kt)("li",{parentName:"ol"},"Cloud Foundry, ",(0,s.kt)("a",{parentName:"li",href:"https://www.cloudfoundry.org/"},"https://www.cloudfoundry.org/")),(0,s.kt)("li",{parentName:"ol"},"Open Service Broker API, ",(0,s.kt)("a",{parentName:"li",href:"https://www.openservicebrokerapi.org/"},"https://www.openservicebrokerapi.org/")),(0,s.kt)("li",{parentName:"ol"},"anynines, a9s Data Services, ",(0,s.kt)("a",{parentName:"li",href:"https://www.anynines.com/data-services"},"https://www.anynines.com/data-services")),(0,s.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, ServiceCatalog, ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/service-catalog/"},"https://kubernetes.io/docs/concepts/extend-kubernetes/service-catalog/")),(0,s.kt)("li",{parentName:"ol"},"Wikipedia, Principle of Least Privilege, ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"},"https://en.wikipedia.org/wiki/Principle_of_least_privilege")),(0,s.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, Services Networking, Service, ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/#headless-services"},"https://kubernetes.io/docs/concepts/services-networking/service/#headless-services")),(0,s.kt)("li",{parentName:"ol"},"PostgreSQL, ",(0,s.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"https://www.postgresql.org/"))))}d.isMDXComponent=!0}}]);