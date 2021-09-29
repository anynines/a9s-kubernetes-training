"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[856],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=s.createContext({}),p=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,k=h["".concat(o,".").concat(d)]||h[d]||u[d]||a;return n?s.createElement(k,l(l({ref:t},c),{},{components:n})):s.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},650:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var s=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"stateful-set-headless-service",title:"Headless Service"},o=void 0,p={unversionedId:"kubernetes/stateful-sets/stateful-set-headless-service",id:"kubernetes/stateful-sets/stateful-set-headless-service",isDocsHomePage:!1,title:"Headless Service",description:"Once you have create the PostgreSQL StatefulSet you may want to access it with an application. The next lessons will therefore evolve towards application access, step by step.",source:"@site/docs/kubernetes/80-stateful-sets/35-postgresql-headless-service-exercise.md",sourceDirName:"kubernetes/80-stateful-sets",slug:"/kubernetes/stateful-sets/stateful-set-headless-service",permalink:"/kubernetes/stateful-sets/stateful-set-headless-service",tags:[],version:"current",sidebarPosition:35,frontMatter:{id:"stateful-set-headless-service",title:"Headless Service"},sidebar:"docs",previous:{title:"PostgreSQL StatefulSet",permalink:"/kubernetes/stateful-sets/stateful-set-postgresql"},next:{title:"StatefulSet vs. ReplicaSets",permalink:"/kubernetes/stateful-sets/stateful-set-vs-replicasets"}},c=[{value:"The StatefulSet and its Headless Service",id:"the-statefulset-and-its-headless-service",children:[]},{value:"Headless Service for StatefulSets with Mulitple Replicas",id:"headless-service-for-statefulsets-with-mulitple-replicas",children:[]},{value:"Links",id:"links",children:[]}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once you have create the PostgreSQL StatefulSet you may want to access it with an application. The next lessons will therefore evolve towards application access, step by step."),(0,a.kt)("h2",{id:"the-statefulset-and-its-headless-service"},"The StatefulSet and its Headless Service"),(0,a.kt)("p",null,"In the previous chapter you have learned that a StatefulSet has a stable network identity. As mentioned before, the PostgreSQL StatefulSet will be accessed by an application. As applications may change during version updates or being rescheduled in the Cluster, so could be Pods of a StatefulSet. With both the application Deployments and the StatefulSet being fast moving targets, it is the StatefulSet's headless Service providing a stable entry point for the application to reach out to the PostgreSQL StatefulSet."),(0,a.kt)("p",null,"Have a look at what you have created in the previous lesson:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe service postgresql-svc\n")),(0,a.kt)("p",null,"Shows that the headless Service ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-svc")," has the label ",(0,a.kt)("inlineCode",{parentName:"p"},"Labels: app=postgresql-a"),"."),(0,a.kt)("p",null,"And:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe service postgresql-svc\n")),(0,a.kt)("p",null,"Produces an output similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Name:              postgresql-svc\nNamespace:         k8s-training\nLabels:            app=postgresql-a\nAnnotations:       Selector:  app=postgresql-a\nType:              ClusterIP\nIP:                None\nPort:              postgresql-port  5432/TCP\nTargetPort:        5432/TCP\nEndpoints:         172.17.0.5:5432\nSession Affinity:  None\nEvents:            <none>\n")),(0,a.kt)("p",null,"Which shows ",(0,a.kt)("inlineCode",{parentName:"p"},"Annotations: Selector:  app=postgresql-a")," indicating that the Service is connected to the StatefulSet through the Label ",(0,a.kt)("inlineCode",{parentName:"p"},"app=postgresql-a"),". You can see that in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Endpoints: 172.17.0.5:5432")," line which refers to the Pod ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-sfs-0")," of the StatefulSet ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-sfs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe pod kubectl describe postgresql-sfs-0\n")),(0,a.kt)("p",null,"The output shows that the Pod ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-sfs-0")," has the ",(0,a.kt)("inlineCode",{parentName:"p"},"IP: 172.17.0.5")," which means that the Pod is set as the endpoint of the headless Service."),(0,a.kt)("p",null,"This means that a DNS entry will be created pointing directly to the the Pods associated with the Service."),(0,a.kt)("p",null,"Verify this by executing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe service postgresql-svc\n")),(0,a.kt)("p",null,"Which reveals that the headless Service ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-svc")," has the label ",(0,a.kt)("inlineCode",{parentName:"p"},"Labels: app=postgresql-a"),"."),(0,a.kt)("p",null,"And:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe service postgresql-svc\n")),(0,a.kt)("p",null,"Produces an output similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Name:              postgresql-svc\nNamespace:         k8s-training\nLabels:            app=postgresql-a\nAnnotations:       Selector:  app=postgresql-a\nType:              ClusterIP\nIP:                None\nPort:              postgresql-port  5432/TCP\nTargetPort:        5432/TCP\nEndpoints:         172.17.0.5:5432\nSession Affinity:  None\nEvents:            <none>\n")),(0,a.kt)("p",null,"This shows ",(0,a.kt)("inlineCode",{parentName:"p"},"Annotations: Selector:  app=postgresql-a")," indicating that the Service is connected to the StatefulSet through the Label ",(0,a.kt)("inlineCode",{parentName:"p"},"app=postgresql-a"),". You can see that in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Endpoints: 172.17.0.5:5432")," line which refers to the Pod ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-sfs-0")," of the StatefulSet ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-sfs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe pod kubectl describe postgresql-sfs-0\n")),(0,a.kt)("p",null,"The output shows that the Pod ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-sfs-0")," has the ",(0,a.kt)("inlineCode",{parentName:"p"},"IP: 172.17.0.5")," which means that the Pod is set as the endpoint of the headless Service."),(0,a.kt)("p",null,"Along with the headless Service ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-svc")," Kubernetes will create a cluster-internal DNS entry: ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-svc.k8s-training.svc.cluster.local"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Go and see yourself!")),(0,a.kt)("p",null,"First, get inside the cluster by launching a utility Pod:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl run -i --tty nspct --image=fischerjulian/nspct --restart=Never -- bash\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nspct")," image provides a few handy tools such as ",(0,a.kt)("inlineCode",{parentName:"p"},"nslookup")," - a utility to query nameservers."),(0,a.kt)("p",null,"Inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"nspct")," Pod check wether the resolver can resolve the service url:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nslookup postgresql-svc.k8s-training.svc.cluster.local\n")),(0,a.kt)("p",null,"Which will produce a response similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Server:     10.96.0.10\nAddress:    10.96.0.10#53\n\nName:    postgresql-svc.k8s-training.svc.cluster.local\nAddress: 172.17.0.5\n")),(0,a.kt)("p",null,"So the DNS entry has been created and resolves to the IP address of the only Pod inside of the StatefulSet. "),(0,a.kt)("p",null,"Hence, the headless Service provides a stable network identity for the StatefulSet as the Service couples to the StatefulSet loosely by using a selector in the Service referring to the label ",(0,a.kt)("inlineCode",{parentName:"p"},"app=postgresql-a")," in the StatefulSet."),(0,a.kt)("h2",{id:"headless-service-for-statefulsets-with-mulitple-replicas"},"Headless Service for StatefulSets with Mulitple Replicas"),(0,a.kt)("p",null,"With a single Pod (",(0,a.kt)("inlineCode",{parentName:"p"},"replicas: 1"),") in a StatefulSet the mapping from the headless Service to the Pod is unambiguous: ",(0,a.kt)("inlineCode",{parentName:"p"},"service -> Pod"),". "),(0,a.kt)("p",null,"This raises the question ",(0,a.kt)("strong",{parentName:"p"},"what happens if there are mulitple Pods in the StatefulSet?")),(0,a.kt)("p",null,"Let's try it!"),(0,a.kt)("p",null,"First, we need a Statefulset with mulitple replicas. So we modify the StatefulSet definition of the previous example by ",(0,a.kt)("strong",{parentName:"p"},"editing")," the file ",(0,a.kt)("inlineCode",{parentName:"p"},"30-stateful-set.yaml"),"."),(0,a.kt)("p",null,"Within ",(0,a.kt)("inlineCode",{parentName:"p"},"30-stateful-set.yaml")," change ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas: 1")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas: 3"),". Save the file and apply it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f 30-stateful-set.yaml\n")),(0,a.kt)("p",null,"This will update the existing StatefulSet ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-sfs")," and you should see the number of Pods increase from 1 to 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get statefulsets\n")),(0,a.kt)("p",null,"Of course, ",(0,a.kt)("strong",{parentName:"p"},"this StatefulSet does not consitute a functioning PostgreSQL cluster")," but that's alright. All that matters here is the number of Pods to see show the relationship between the number of replicas and the headless Service."),(0,a.kt)("p",null,"Now check on the Service again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe service postgresql-svc\n")),(0,a.kt)("p",null,"Which should produce an output similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Name:              postgresql-svc\nNamespace:         k8s-training\nLabels:            app=postgresql-a\nAnnotations:       Selector:  app=postgresql-a\nType:              ClusterIP\nIP:                None\nPort:              postgresql-port  5432/TCP\nTargetPort:        5432/TCP\nEndpoints:         172.17.0.5:5432,172.17.0.7:5432,172.17.0.8:5432\nSession Affinity:  None\nEvents:            <none>\n")),(0,a.kt)("p",null,"Pay attention how the ",(0,a.kt)("inlineCode",{parentName:"p"},"Endpoints")," attribute of the Service has changed without touching the Service explicitly. It now has 3 instead of endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"172.17.0.5:5432,172.17.0.7:5432,172.17.0.8:5432"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"So what does the existence of two additional endpoints imply for the DNS configuration"),"? It means that now the mapping from the Service ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql-svc")," ambiguous. It's not a 1:1 but a 1:3 mapping. So let's figure out what this means by running another utility Pod:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl run -i --tty nspct --image=fischerjulian/nspct --restart=Never -- bash\n")),(0,a.kt)("p",null,"Within the utility Pod perform another domain lookup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nslookup postgresql-svc.k8s-training.svc.cluster.local\n")),(0,a.kt)("p",null,"Which this time will produce:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Server:     10.96.0.10\nAddress:    10.96.0.10#53\n\nName:   postgresql-svc.k8s-training.svc.cluster.local\nAddress: 172.17.0.7\nName:   postgresql-svc.k8s-training.svc.cluster.local\nAddress: 172.17.0.5\nName:   postgresql-svc.k8s-training.svc.cluster.local\nAddress: 172.17.0.8\n")),(0,a.kt)("p",null,"As you can see all StatefulSet Pods are present in the response."),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"PostgreSQL Docker Image at DockerHub, ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/postgres"},"https://hub.docker.com/_/postgres")),(0,a.kt)("li",{parentName:"ol"},"Kubernetes Examples on GitHub, Persistent Volume Provisioning, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/examples/blob/master/staging/persistent-volume-provisioning/README.md"},"https://github.com/kubernetes/examples/blob/master/staging/persistent-volume-provisioning/README.md")),(0,a.kt)("li",{parentName:"ol"},"PostgreSQL Documentation - psql, ",(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/12/app-psql.html"},"https://www.postgresql.org/docs/12/app-psql.html")),(0,a.kt)("li",{parentName:"ol"},"Kelsey Hightower @ Twitter, ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/kelseyhightower/status/935252923721793536?lang=en"},"https://twitter.com/kelseyhightower/status/935252923721793536?lang=en")),(0,a.kt)("li",{parentName:"ol"},"Cloud Foundry, ",(0,a.kt)("a",{parentName:"li",href:"https://www.cloudfoundry.org/"},"https://www.cloudfoundry.org/")),(0,a.kt)("li",{parentName:"ol"},"Open Service Broker API, ",(0,a.kt)("a",{parentName:"li",href:"https://www.openservicebrokerapi.org/"},"https://www.openservicebrokerapi.org/")),(0,a.kt)("li",{parentName:"ol"},"anynines, a9s Data Services, ",(0,a.kt)("a",{parentName:"li",href:"https://www.anynines.com/data-services"},"https://www.anynines.com/data-services")),(0,a.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, ServiceCatalog, ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/service-catalog/"},"https://kubernetes.io/docs/concepts/extend-kubernetes/service-catalog/")),(0,a.kt)("li",{parentName:"ol"},"Wikipedia, Principle of Least Privilege, ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"},"https://en.wikipedia.org/wiki/Principle_of_least_privilege"))))}h.isMDXComponent=!0}}]);