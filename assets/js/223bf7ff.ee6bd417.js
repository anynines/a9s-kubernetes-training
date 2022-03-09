"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2028],{3905:function(e,t,s){s.d(t,{Zo:function(){return u},kt:function(){return f}});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(s),f=a,m=d["".concat(i,".").concat(f)]||d[f]||c[f]||r;return s?n.createElement(m,l(l({ref:t},u),{},{components:s})):n.createElement(m,l({ref:t},u))}));function f(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,l=new Array(r);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=s[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},47124:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n,a=s(87462),r=s(63366),l=(s(67294),s(3905)),o=["components"],i={id:"stateful-set-vs-replicasets",title:"StatefulSet vs. ReplicaSets"},p=void 0,u={unversionedId:"kubernetes/stateful-sets/stateful-set-vs-replicasets",id:"kubernetes/stateful-sets/stateful-set-vs-replicasets",isDocsHomePage:!1,title:"StatefulSet vs. ReplicaSets",description:"Related Videos",source:"@site/docs/kubernetes/80-stateful-sets/36-postgresql-sfs-rs-deployments.md",sourceDirName:"kubernetes/80-stateful-sets",slug:"/kubernetes/stateful-sets/stateful-set-vs-replicasets",permalink:"/kubernetes/stateful-sets/stateful-set-vs-replicasets",tags:[],version:"current",sidebarPosition:36,frontMatter:{id:"stateful-set-vs-replicasets",title:"StatefulSet vs. ReplicaSets"},sidebar:"docs",previous:{title:"Headless Service",permalink:"/kubernetes/stateful-sets/stateful-set-headless-service"},next:{title:"PSQL Access to PostgreSQL",permalink:"/kubernetes/stateful-sets/stateful-set-psql-access-to-postgresql"}},c=[{value:"Related Videos",id:"related-videos",children:[]},{value:"StatefulSets vs. ReplicaSets",id:"statefulsets-vs-replicasets",children:[]},{value:"StatefulSets vs. Deployments",id:"statefulsets-vs-deployments",children:[]},{value:"Tidy Up",id:"tidy-up",children:[]},{value:"Links",id:"links",children:[]}],d=(n="VideoContainer",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),f={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"related-videos"},"Related Videos"),(0,l.kt)(d,{list:[{src:"https://www.youtube-nocookie.com/embed/YQZJpezPyFQ",title:"StatefulSets vs ReplicaSets"}],mdxType:"VideoContainer"}),(0,l.kt)("p",null,"In the last lesson you have scaled the PostgreSQL StatefulSet to 3 replicas so that it now consists of 3 Pods."),(0,l.kt)("p",null,"In this lesson you will conduct more experiments to become familiar with the particularities and similarities of StatefulSets compared to other resource types such as ReplicaSets and Deployments."),(0,l.kt)("h2",{id:"statefulsets-vs-replicasets"},"StatefulSets vs. ReplicaSets"),(0,l.kt)("p",null,'The most obvious similarity between StatefulSets and ReplicaSets is their name as both contain the word "Set".'),(0,l.kt)("p",null,"Just like a ReplicaSet a StatefulSet is more than just a collection of Pods. Similar to a ReplicaSet Controller is watching over the Pods of a ReplicaSet, a StatefulSet Controller is watching all Pods of a StatefulSet."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Let's see this in action!")),(0,l.kt)("p",null,"Open a terminal window and observe the Pods of your StatefulSet continuously:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get pods -l app=postgresql-a -w\n")),(0,l.kt)("p",null,"This will produce an output such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME               READY   STATUS    RESTARTS   AGE\npostgresql-sfs-0   1/1     Running   0          34m\npostgresql-sfs-1   1/1     Running   0          24s\npostgresql-sfs-2   1/1     Running   0          23s\n")),(0,l.kt)("p",null,"And it will also block the terminal window. ",(0,l.kt)("strong",{parentName:"p"},"Place the windows so that you can keep an eye on it and open another terminal window"),". You should now see both terminal windows simultaneously."),(0,l.kt)("p",null,"In the new window disturb the StatefulSet by deleting one of its Pods:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl delete pod postgresql-sfs-1\n")),(0,l.kt)("p",null,"Watch what's happening:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"postgresql-sfs-1   1/1     Terminating   0          3m44s\npostgresql-sfs-1   0/1     Terminating   0          3m45s\npostgresql-sfs-1   0/1     Terminating   0          3m52s\npostgresql-sfs-1   0/1     Terminating   0          3m52s\npostgresql-sfs-1   0/1     Pending       0          0s\npostgresql-sfs-1   0/1     Pending       0          0s\npostgresql-sfs-1   0/1     ContainerCreating   0          0s\npostgresql-sfs-1   1/1     Running             0          1s\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The deleted Pod has been recreated"),"."),(0,l.kt)("p",null,"Check the StatefulSet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get statefulset postgresql-sfs\n")),(0,l.kt)("p",null,"All three Pods are back and ",(0,l.kt)("inlineCode",{parentName:"p"},"Running"),". So what happened here?"),(0,l.kt)("p",null,'The StatefulSet Controller has been told to nurse three (3) Pods and that\'s what it does. As a "higher ranked officer" it does not care why a Pod has been lost. All it does is to apply the ',(0,l.kt)("inlineCode",{parentName:"p"},"desired state vs actual state"),"-comparison, recognize that a Pod is missing and take a corrective action: creating the missing Pod."),(0,l.kt)("p",null,"Another takeaway from this example is how the Pod identity in a StatefulSet is respected during self-healing. The newly created Pod has the same name: ",(0,l.kt)("inlineCode",{parentName:"p"},"postgresql-sfs-1")," and the same Persistent Volume Claim ",(0,l.kt)("inlineCode",{parentName:"p"},"data-postgresql-sfs-1")," which results in the same Persistent Volume and hence the same persisted data! In other words: the node has been recovered as it was before."),(0,l.kt)("h2",{id:"statefulsets-vs-deployments"},"StatefulSets vs. Deployments"),(0,l.kt)("p",null,"In contrast to ReplicaSets but similar to Deployments, StatefulSets support update strategies such as ",(0,l.kt)("inlineCode",{parentName:"p"},"RollingUpdate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"OnDelete"),"."),(0,l.kt)("p",null,"For this reason, ",(0,l.kt)("strong",{parentName:"p"},"StatefulSets are neither stateful ReplicaSets nor stateful Deployments. They are entities on their own sharing similarities with both"),"."),(0,l.kt)("h2",{id:"tidy-up"},"Tidy Up"),(0,l.kt)("p",null,"Now revert your changes by editing ",(0,l.kt)("inlineCode",{parentName:"p"},"30-stateful-set.yaml")," to the StatefulSet and set the number of replicas back to 1: ",(0,l.kt)("inlineCode",{parentName:"p"},"replicas: 1"),"."),(0,l.kt)("p",null,"Apply the changes by executing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl apply -f 30-stateful-set.yaml\n")),(0,l.kt)("h2",{id:"links"},"Links"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Kubernetes Documentation - Tutorials - StatefulSet Basics, ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set"},"https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set"))))}m.isMDXComponent=!0}}]);