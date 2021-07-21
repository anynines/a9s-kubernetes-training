(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),i=(n(0),n(198)),c={id:"replicasets",title:"ReplicaSets"},o={id:"kubernetes/40-replicaset-and-service/replicasets",isDocsHomePage:!1,title:"ReplicaSets",description:"This lesson covers how to run a stateless app in Kubernetes using a Replica Set.",source:"@site/docs/kubernetes/40-replicaset-and-service/20-replicaset.md",permalink:"/kubernetes/40-replicaset-and-service/replicasets",sidebar:"docs",previous:{title:"ReplicaSets and Services",permalink:"/kubernetes/40-replicaset-and-service/introduction"},next:{title:"Services",permalink:"/kubernetes/40-replicaset-and-service/services"}},s=[{value:"Hello World Web App",id:"hello-world-web-app",children:[]},{value:"Creating the ReplicaSet",id:"creating-the-replicaset",children:[]},{value:"Exercise: Access the Sample Web App from Withing the Cluster",id:"exercise-access-the-sample-web-app-from-withing-the-cluster",children:[]},{value:"Pods and Ports",id:"pods-and-ports",children:[]},{value:"Links",id:"links",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This lesson covers how to run a stateless app in Kubernetes using a Replica Set."),Object(i.b)("h2",{id:"hello-world-web-app"},"Hello World Web App"),Object(i.b)("p",null,"The sample application can be found on github: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fischerjulian/smpl-go-web"}),"https://github.com/fischerjulian/smpl-go-web")),Object(i.b)("h2",{id:"creating-the-replicaset"},"Creating the ReplicaSet"),Object(i.b)("p",null,"In order to create the ReplicaSet using ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl")," create a file ",Object(i.b)("inlineCode",{parentName:"p"},"20-rs-hello-world.yaml"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: smpl-go-web-rs\n  labels:\n      app: smpl-go-web-a\n      tier: fontend\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      tier: fontend\n  template:\n    metadata:\n      labels:\n        app: smpl-go-web-a\n        version: "1"\n        tier: fontend  \n    spec:\n      containers:\n        - name: smpl-go-web-c\n          image: "fischerjulian/smpl-go-web:1.0.0"\n          ports:\n            - containerPort: 8080\n')),Object(i.b)("p",null,"And apply it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl apply -f 20-rs-hello-world.yaml\n")),Object(i.b)("p",null,"This creates a Pod with a single container running a hello world application.\nVerify that the Pods has been created successfully:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get pods\n")),Object(i.b)("p",null,"You should see a running pod names something like ",Object(i.b)("inlineCode",{parentName:"p"},"smpl-go-web-rs-pkqwd")," where the last part is a random string which will be different for every instance of the replica set."),Object(i.b)("p",null,"In case you seen the ",Object(i.b)("em",{parentName:"p"},"status")," ",Object(i.b)("inlineCode",{parentName:"p"},"ContainerCreating")," you can use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get pods --watch \n")),Object(i.b)("p",null,"To observe the current Pod state until completion."),Object(i.b)("p",null,"Now the application is deployed. However, it can only be accessed from within the cluster."),Object(i.b)("h2",{id:"exercise-access-the-sample-web-app-from-withing-the-cluster"},"Exercise: Access the Sample Web App from Withing the Cluster"),Object(i.b)("p",null,"A straight forward way to access the web app is to directly access the corresponding Pod:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl describe pod smpl-go-web-rs-pkqwd")," (replace ",Object(i.b)("em",{parentName:"li"},"pkqwd")," with your Pod's suffix) and extract the IP address of the ",Object(i.b)("inlineCode",{parentName:"li"},"smpl-go-web-rs-pkqwd"),"-Pod, e.g. 100.96.14.17"),Object(i.b)("li",{parentName:"ul"},"Start a container running a shell as described in one of the previous lessons."),Object(i.b)("li",{parentName:"ul"},"Inside the interactive container use the wget command to access the Pod, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"wget 100.96.14.17:8080"),". You can read the returned file using the cat command: ",Object(i.b)("inlineCode",{parentName:"li"},"cat index.html"),"."),Object(i.b)("li",{parentName:"ul"},"Don't forget to delete the interactive busybox Pod after using it: ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl delete pod busybox"))),Object(i.b)("p",null,"However, this approach comes with some signficant disadvantages. Possibly the biggest drawback is a client trying to access the app needs to figure out where the Pod is located by obtaining its IP address. This process is also referred to as ",Object(i.b)("em",{parentName:"p"},"service discovery"),". Once, the IP address is known, the client can access the Pod but what happens if the Pod fails, e.g. caused by the failure or maintenance of the underlying Kubernetes Node (the VM the Pod is running on)? In this case the ReplicaSet will be rescheduled by Kubernetes and most likely receive a different IP address. The resulting ",Object(i.b)("em",{parentName:"p"},"service discovery"),"-challenge is non-trivial in a dynamic cluster environment."),Object(i.b)("p",null,"Kubernetes provides the concept of a ",Object(i.b)("inlineCode",{parentName:"p"},"Service")," enabling a number of ways to deal with ",Object(i.b)("em",{parentName:"p"},"service discovery"),", gracefully."),Object(i.b)("h2",{id:"pods-and-ports"},"Pods and Ports"),Object(i.b)("p",null,"Have you noticed that the container specification of the app contains an explicit port declaration?"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec:\n  containers:\n    - name: smpl-go-web-c\n      image: "fischerjulian/smpl-go-web:1.0.0"\n      ports:\n        - containerPort: 8080\n')),Object(i.b)("p",null,"The Kubernetes documentation says:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"Kubernetes gives every pod its own cluster-private IP address, so you do not need to explicitly create links between pods or map container ports to host ports. This means that containers within a Pod can all reach each other\'s ports on localhost, and all pods in a cluster can see each other without NAT."')),Object(i.b)("p",null,"By owning a private IP address within your cluster network each Pod can use the entire port range (65.535) among its containers. Obviously, this implies that two containers using a port cannot occupy the same port simultaneously. They may use the same port to communicate but only one container can open it."),Object(i.b)("h2",{id:"links"},"Links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Kubernetes Documentation, Concepts, ReplicaSet, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/replicaset"}),"https://kubernetes.io/docs/concepts/workloads/controllers/replicaset")),Object(i.b)("li",{parentName:"ul"},"Kubernetes v1.12 Documentation, API Reference, ReplicaSet, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.12/#replicaset-v1-apps"}),"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.12/#replicaset-v1-apps"))))}p.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(h,o(o({ref:t},l),{},{components:n})):a.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);