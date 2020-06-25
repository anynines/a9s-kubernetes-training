(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(9),o=(n(0),n(185)),s={id:"stateful-sets",title:"StatefulSets"},r={id:"kubernetes/80-stateful-sets/stateful-sets",isDocsHomePage:!1,title:"StatefulSets",description:"Now that you have made your first experience with Persistent Volumes, it is time to introduce a closely related Kubernetes concept called StatefulSets.",source:"@site/docs/kubernetes/80-stateful-sets/20-stateful-sets.md",permalink:"/kubernetes/80-stateful-sets/stateful-sets",sidebar:"docs",previous:{title:"Persistent Volumes Excercise",permalink:"/kubernetes/80-stateful-sets/persistent-volumes-exercise"},next:{title:"PostgreSQL StatefulSet",permalink:"/kubernetes/80-stateful-sets/stateful-set-postgresql"}},l=[{value:"Pod Identities",id:"pod-identities",children:[]},{value:"Pod Ordinality",id:"pod-ordinality",children:[]},{value:"When to Use a StatefulSet?",id:"when-to-use-a-statefulset",children:[]},{value:"Pod Identity and Persistent Volumes",id:"pod-identity-and-persistent-volumes",children:[]},{value:"Stable Network Identity",id:"stable-network-identity",children:[]},{value:"Hands-On",id:"hands-on",children:[]},{value:"Links",id:"links",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that you have made your first experience with Persistent Volumes, it is time to introduce a closely related Kubernetes concept called StatefulSets."),Object(o.b)("p",null,"While it is possible to use Persistent Volume with Pods, ReplicaSets and Deployments, possible the best use of a Persistent Volume is the StatefulSet. While other resources may go with objects stores instead of Persistent Volumes where possible, this is not an option for heavy-weight stateful data services such as databases, message queues, analytics servers, etc."),Object(o.b)("p",null,"It is therefore not surprising that with Kubernetes 1.5 StatefulSets have been introduced being tailored to address some specific needs of data service automation such as the following properties of Pods in a StatefulSet:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Pod identities based on sequential numbering (Pod 1, Pod 2, Pod 3, ...)"),Object(o.b)("li",{parentName:"ul"},"Stable network identities based on Pod identities"),Object(o.b)("li",{parentName:"ul"},"Orderinality allowing Pods to be created, updated or deleted in their particular order (Pod 1 to Pod 3 and vice versa).")),Object(o.b)("h2",{id:"pod-identities"},"Pod Identities"),Object(o.b)("p",null,"A stable identity of Pods in a StatefulSet is useful as the Pods may change, e.g. due to failing Kubernetes Nodes. In such a case a Pod may have to be rescheduled on a different Node. Obviously, it is expected that the Pod will have access to its data located on a Persistent Volume and that it will be reachable via the same DNS name as before."),Object(o.b)("h2",{id:"pod-ordinality"},"Pod Ordinality"),Object(o.b)("p",null,"The ordinality requires Pods of a StatefulSet to having associated numbers such as ",Object(o.b)("inlineCode",{parentName:"p"},"pod-1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"pod-2")," and ",Object(o.b)("inlineCode",{parentName:"p"},"pod-3"),". Using numbers it is possible to sort the list of Pods and process them ",Object(o.b)("em",{parentName:"p"},"in order"),". "),Object(o.b)("p",null,"A common scenario where ordinality - or at least individual node identities - are essential is asynchronous replication with a primary node to which all write commands are directed and a set of secondary nodes which replicate all operations beformed on the master and be used as read-only-nodes. In these cases certain administrative tasks need to performed on the primary node only. An example for a more complex workflow involving node identities it the upgrade from PostgreSQL 11.x to 12.x ","[2]"," which requires orchestration of actions in a particular sequence applied to indivudal or groups of nodes. Concepts such as ReplicaSets where all Pods are considered equal therefore work for statless apps but not for stateful databases."),Object(o.b)("h2",{id:"when-to-use-a-statefulset"},"When to Use a StatefulSet?"),Object(o.b)("p",null,"The answer is implied by the aforementioned differences to alternative Kubernetes resources such as Pods, ReplicaSets and Deployments.\nStatefulSets are helpful when Pods require a stable identity, when the order in which Pod lifecycle actions are executed matter and in particular when persistency beyond the lifecycle of Pods is desired."),Object(o.b)("h2",{id:"pod-identity-and-persistent-volumes"},"Pod Identity and Persistent Volumes"),Object(o.b)("p",null,"In the case of ",Object(o.b)("inlineCode",{parentName:"p"},"a9s Kubernetes")," deployed on AWS ","[3]"," as the underlying infrastructure the ",Object(o.b)("inlineCode",{parentName:"p"},"kubernetes.io/aws-ebs")," provisioner creates a remotely attached block devices ","[4]"," using the AWS Elastic Block Storage (EBS) service ","[5]",". You can imagine the remotely attached block device as a ",Object(o.b)("em",{parentName:"p"},"remotely attached hard disk"),". A hard disk is a thing that you can format with filesystem and then mount and use. The formatting part will be taken care for your as long as you have set the ",Object(o.b)("inlineCode",{parentName:"p"},"volumeFormat: Filesystem")," as shown in the last exercise.\nHowever, one restriction of (most) block devices is that they can only be used by a single machine and this restriction also applies to EBS backed Persistent Volumes."),Object(o.b)("p",null,"Imagine a StatefulSet with three Pods ",Object(o.b)("inlineCode",{parentName:"p"},"pod-1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"pod-2")," and ",Object(o.b)("inlineCode",{parentName:"p"},"pod-3"),". Three Persistent Volume Claims will then create three Persistent Volumes. The StatefulSet then ensures that each PV will be mounted to a particular Pod. There's a 1:1 mapping from Persistent Volume to a Pod identity. So even when a Pod is lost, the newly created Pod will be bound to the Persistent Volume associated with the identity of the former Pod."),Object(o.b)("h2",{id:"stable-network-identity"},"Stable Network Identity"),Object(o.b)("p",null,"A stable network identity can be provided to a StatefulSet by using a headless Service which will be covered in a later exercise in greater detail."),Object(o.b)("h2",{id:"hands-on"},"Hands-On"),Object(o.b)("p",null,"There is more to know about StatefulSet but this is enough theory for now. The next lessons are more hands-on with practical examples and exercies along with additional information about StatefulSets."),Object(o.b)("h2",{id:"links"},"Links"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, StatefulSets, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"}),"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/")),Object(o.b)("li",{parentName:"ol"},"PostgreSQL Upgrade to 12.x, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/12/pgupgrade.html"}),"https://www.postgresql.org/docs/12/pgupgrade.html")),Object(o.b)("li",{parentName:"ol"},"Amazon Web Services, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://aws.amazon.com/"}),"http://aws.amazon.com/")),Object(o.b)("li",{parentName:"ol"},"Wikipedia - Device File - Block Devices, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Device_file#Block_devices"}),"https://en.wikipedia.org/wiki/Device_file#Block_devices")),Object(o.b)("li",{parentName:"ol"},"Amazon EBS, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://aws.amazon.com/ebs/"}),"https://aws.amazon.com/ebs/"))))}d.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,h=u["".concat(s,".").concat(b)]||u[b]||p[b]||o;return n?i.a.createElement(h,r(r({ref:t},c),{},{components:n})):i.a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);