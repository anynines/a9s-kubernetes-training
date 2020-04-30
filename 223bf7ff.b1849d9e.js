(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var s=n(1),a=n(6),r=(n(0),n(147)),l={id:"stateful-set-vs-replicasets",title:"StatefulSet vs. ReplicaSets"},o={id:"kubernetes/80-stateful-sets/stateful-set-vs-replicasets",title:"StatefulSet vs. ReplicaSets",description:"In the last lession you have scaled the PostgreSQL StatefulSet to 3 replicas so that it now consists of 3 Pods.",source:"@site/docs/kubernetes/80-stateful-sets/36-postgresql-sfs-rs-deployments.md",permalink:"/kubernetes/80-stateful-sets/stateful-set-vs-replicasets",sidebar:"docs",previous:{title:"Headless Service",permalink:"/kubernetes/80-stateful-sets/stateful-set-headless-service"},next:{title:"PSQL Access to PostgreSQL",permalink:"/kubernetes/80-stateful-sets/stateful-set-psql-access-to-postgresql"}},i=[{value:"StatefulSets vs. ReplicaSets",id:"statefulsets-vs-replicasets",children:[]},{value:"StatefulSets vs. Deployments",id:"statefulsets-vs-deployments",children:[]},{value:"Tidy Up",id:"tidy-up",children:[]},{value:"Links",id:"links",children:[]}],c={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In the last lession you have scaled the PostgreSQL StatefulSet to 3 replicas so that it now consists of 3 Pods."),Object(r.b)("p",null,"In this lesson you will conduct more experiments to become familiar with the particularities and similarities of StatefulSets compared to other resource types such as ReplicaSets and Deployments."),Object(r.b)("h2",{id:"statefulsets-vs-replicasets"},"StatefulSets vs. ReplicaSets"),Object(r.b)("p",null,'The most obvious similiarity between StatefulSets and ReplicaSets is their name as both contain the word "Set".'),Object(r.b)("p",null,"Just like a ReplicaSet a StatefulSet is more than just a collection of Pods. Similar to a ReplicaSet Controller is watchinv over the Pods of a ReplicaSet, a StatefulSet Controller is watching all Pods of a StatefulSet."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Let's see this in action!")),Object(r.b)("p",null,"Open a terminal window and observe the Pods of your StatefulSet continuously:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{}),"kubectl get pods -l app=postgresql-a -w\n")),Object(r.b)("p",null,"This will produce an output such as:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{}),"NAME               READY   STATUS    RESTARTS   AGE\npostgresql-sfs-0   1/1     Running   0          34m\npostgresql-sfs-1   1/1     Running   0          24s\npostgresql-sfs-2   1/1     Running   0          23s\n")),Object(r.b)("p",null,"And it will also block the terminal window. ",Object(r.b)("strong",{parentName:"p"},"Place the windows so that you can keep an eye on it and open another terminal window"),". You should now see both terminal windows simultaneously. "),Object(r.b)("p",null,"In the new window disturb the StatefulSet by deleting one of its Pods:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{}),"kubectl delete pod postgresql-sfs-1\n")),Object(r.b)("p",null,"Watch what's happening:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{}),"postgresql-sfs-1   1/1     Terminating   0          3m44s\npostgresql-sfs-1   0/1     Terminating   0          3m45s\npostgresql-sfs-1   0/1     Terminating   0          3m52s\npostgresql-sfs-1   0/1     Terminating   0          3m52s\npostgresql-sfs-1   0/1     Pending       0          0s\npostgresql-sfs-1   0/1     Pending       0          0s\npostgresql-sfs-1   0/1     ContainerCreating   0          0s\npostgresql-sfs-1   1/1     Running             0          1s\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The delete Pod has been recreated"),". "),Object(r.b)("p",null,"Check the StatefulSet:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{}),"kubectl get statefulset postgresql-sfs\n")),Object(r.b)("p",null,"All three Pods are back and ",Object(r.b)("inlineCode",{parentName:"p"},"Running"),". So what happened here? "),Object(r.b)("p",null,'The StatefulSet Controller has been told to nurse three (3) Pods and that\'s what it does. As a "higher ranked officer" it does not care why a Pod has been lost. All it does is to apply the ',Object(r.b)("inlineCode",{parentName:"p"},"desired state vs actual state"),"-comparison, recognize that a Pod is missing and take a corrective action: creating the missing Pod."),Object(r.b)("p",null,"Another takeaway from this example is how the Pod identity in a StatefulSet is respected during self-healing. The newly created Pod has the same name: ",Object(r.b)("inlineCode",{parentName:"p"},"postgresql-sfs-1")," and the same Persistent Volume Claim ",Object(r.b)("inlineCode",{parentName:"p"},"data-postgresql-sfs-1")," which results in the same Persistent Volume and hence the same persisted data! In other words: the node has been recovered as it was before."),Object(r.b)("h2",{id:"statefulsets-vs-deployments"},"StatefulSets vs. Deployments"),Object(r.b)("p",null,"In contrast to ReplicaSets but similar to Deployments, StatefulSets support update stragies such as ",Object(r.b)("inlineCode",{parentName:"p"},"RollingUpdate")," and ",Object(r.b)("inlineCode",{parentName:"p"},"OnDelete"),". "),Object(r.b)("p",null,"For this reason, ",Object(r.b)("strong",{parentName:"p"},"StatefulSets are neither stateful ReplicaSets nor stateful Deployments. They are entities on their own sharing similarities with both"),"."),Object(r.b)("h2",{id:"tidy-up"},"Tidy Up"),Object(r.b)("p",null,"Now revert your changes by editing ",Object(r.b)("inlineCode",{parentName:"p"},"30-stateful-set.yaml")," to the StatefulSet and set the number of replicas back to 1: ",Object(r.b)("inlineCode",{parentName:"p"},"replicas: 1"),"."),Object(r.b)("p",null,"Apply the changes by executing:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{}),"kubectl apply -f 30-stateful-set.yaml\n")),Object(r.b)("h2",{id:"links"},"Links"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Kubernetes Documentation - Tutorials - StatefulSet Basics, ",Object(r.b)("a",Object(s.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set"}),"https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set"))))}p.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var s=n(0),a=n.n(s);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(s.forwardRef)((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,f=u["".concat(l,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(f,o({ref:t},c,{components:n})):a.a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);