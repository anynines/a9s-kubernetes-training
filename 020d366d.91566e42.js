(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{148:function(e,t,s){"use strict";s.d(t,"a",(function(){return b})),s.d(t,"b",(function(){return h}));var a=s(0),n=s.n(a);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)s=o[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)s=o[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):i({},t,{},e)),s},b=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var s=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(s),p=a,h=b["".concat(r,".").concat(p)]||b[p]||m[p]||o;return s?n.a.createElement(h,i({ref:t},c,{components:s})):n.a.createElement(h,i({ref:t},c))}));function h(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=s.length,r=new Array(o);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<o;c++)r[c]=s[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,s)}p.displayName="MDXCreateElement"},97:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return r})),s.d(t,"metadata",(function(){return i})),s.d(t,"rightToc",(function(){return l})),s.d(t,"default",(function(){return u}));var a=s(1),n=s(6),o=(s(0),s(148)),r={id:"persistent-volumes",title:"Persistent Volumes"},i={id:"kubernetes/80-stateful-sets/persistent-volumes",title:"Persistent Volumes",description:"This lesson covers the theoritical background necessary to understand the Persistent Volume concept in Kubernetes.",source:"@site/docs/kubernetes/80-stateful-sets/10-persistent-volumes.md",permalink:"/kubernetes/80-stateful-sets/persistent-volumes",sidebar:"docs",previous:{title:"CronJobs",permalink:"/kubernetes/70-jobs/cron-jobs"},next:{title:"Persistent Volumes Excercise",permalink:"/kubernetes/80-stateful-sets/persistent-volumes-exercise"}},l=[{value:"Volumes",id:"volumes",children:[{value:"Volume Mounts",id:"volume-mounts",children:[]},{value:"Docker Volumes vs. Kubernetes Volumes",id:"docker-volumes-vs-kubernetes-volumes",children:[]}]},{value:"Persistent Volumes (PV)",id:"persistent-volumes-pv",children:[{value:"Persistent Volume",id:"persistent-volume",children:[]},{value:"Persistent Volume Claim (PCV)",id:"persistent-volume-claim-pcv",children:[]},{value:"Storage Class",id:"storage-class",children:[]},{value:"Storage Provisioner",id:"storage-provisioner",children:[]},{value:"Manual Provisioning",id:"manual-provisioning",children:[]}]},{value:"Links",id:"links",children:[]}],c={rightToc:l};function u(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This lesson covers the theoritical background necessary to understand the Persistent Volume concept in Kubernetes."),Object(o.b)("p",null,"Persistent Volumes are introduced in this chapter although they can also be used with familiar Kubernetes resources such as Pods and ReplicaSets and - although many Kubernetes users do that  applications should be kept as stateless as possible. Therefore, note that state should be managed by stateful data services as proposed in the 12 factor manifest ","[14]","."),Object(o.b)("h2",{id:"volumes"},"Volumes"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Volumes bring persistency to containers"),". Containers are stateless in so far as changes to their filesystem will be lost if a container is restarted - more precicely rescheduled. Rescheduling means that the container is destroyed but a new container of the same kind is started somewhere in the cluster. This freshly created container will be derived from the given container image and hence won't reflect any changes made in prior existing containers."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Volumes allow sharing information among containers"),". At least some types of Volumes allow sharing of information among containers. A NFS Volume, for example, can be used to share assets such as photos uploaded by application users and store them on a shared files system. Be aware that this is an anti-pattern for cloud native applications which will store assets in an object store such as OpenStack Swift ","[3]",", Amazon S3 ","[4]"," or the alikes. Object stores scale horizontally for both load and capacity. In addition to that their availability and durability is usually higher than those of shared file systems. However, for some legacy applications this may be a valid choice."),Object(o.b)("p",null,"More than that, Volumes are used in conjunction with concepts such as ConfigMaps and Secrets as shown in earlier lessons. Both ConfigMaps and Secrets can be either consumed as environment variables or be mounted as files. The latter option uses the concept of Kubernetes Volumes."),Object(o.b)("h3",{id:"volume-mounts"},"Volume Mounts"),Object(o.b)("p",null,"Within a Pod-definition volumes can be mounted to containers by using a so called ",Object(o.b)("strong",{parentName:"p"},"volume mount"),". You are already familiar with the syntax as volume mounts have been used in the ConfigMap and Secrets lessons using the ",Object(o.b)("inlineCode",{parentName:"p"},"volumeMounts")," field in container specs."),Object(o.b)("h3",{id:"docker-volumes-vs-kubernetes-volumes"},"Docker Volumes vs. Kubernetes Volumes"),Object(o.b)("p",null,"If you are familiar with Docker Volumes you may already recognized the difference between Kubernetes and Docker Volumes. In Kubernetes there are many more types of Volumes and the way to use them is more flexible. For example, in Kubernetes it is possible to mount multiple containers of multiple types into a single container. Additionally, the lifecycle of Volumes is clearly defined in Kubernetes. Volumes share the lifecycle of their Pods. They are created with their Pods and cease to exist when their Pods cease to exist. You will see that there are concepts such as the ",Object(o.b)("em",{parentName:"p"},"Persistent Volume")," with lifetimes exceeding the lifetime of their Pods."),Object(o.b)("h2",{id:"persistent-volumes-pv"},"Persistent Volumes (PV)"),Object(o.b)("p",null,"It may appear intuitive that Persistent Volumes (PV) are special types of Volumes but in fact there are two distinct Kubernetes resources."),Object(o.b)("p",null,"As mentioned before, the ",Object(o.b)("strong",{parentName:"p"},"major difference of Volumes and Persistent Volumes is their lifetime"),". Volumes exist as long as their corresponding Pods while ",Object(o.b)("strong",{parentName:"p"},"Persistent Disks")," potentially survive Pods and may ",Object(o.b)("strong",{parentName:"p"},"live as long as the Kubernetes cluster lives"),"."),Object(o.b)("p",null,"Persistent Volumes are not storage implementation but rather a storage abstraction. The Persistent Volume subsystem comprises resource types for creating and attaching volumes. In order to use Persistent Volumes you need to be familiar with the folling concepts:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Persistent Volume (PV)"),Object(o.b)("li",{parentName:"ul"},"Persistent Volume Claim (PVC)"),Object(o.b)("li",{parentName:"ul"},"Storage Class"),Object(o.b)("li",{parentName:"ul"},"Storage Provisioner")),Object(o.b)("h3",{id:"persistent-volume"},"Persistent Volume"),Object(o.b)("p",null,"The Persistent Volume is what the name suggests: the actual volume where data is being stored. What exactly a Persistent Volume is, is up to its implementation. Often, a PV may be represented by a remotely attached block device such as an Amazon Block Store (AWS EBS) volume ","[5]","."),Object(o.b)("p",null,"The Persistent Volume concept implies two important questions:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"How are Persistent Volumes created?"),Object(o.b)("li",{parentName:"ol"},"Where and when are Persistent Volumes associated and mounted to containers?")),Object(o.b)("h3",{id:"persistent-volume-claim-pcv"},"Persistent Volume Claim (PCV)"),Object(o.b)("p",null,"Similar to Volumes, Persistent Volumes ","[2]"," are also mounted using the ",Object(o.b)("inlineCode",{parentName:"p"},"volumeMount"),' field in the specification of a container. The volume mount basiscally says "mount the persistent volume ',Object(o.b)("inlineCode",{parentName:"p"},"x")," to the path ",Object(o.b)("inlineCode",{parentName:"p"},"y")," of my container ",Object(o.b)("inlineCode",{parentName:"p"},"z"),". But ",Object(o.b)("strong",{parentName:"p"},"before a volume mount can happen, the Persistent Volume must be requested using a Persistent Volume Claim"),'. Think of storage as "territory" and a Persistent Volume Claim as a claim to a particular part of that "territory" or storage. Hence, ',Object(o.b)("strong",{parentName:"p"},"a Persistent Volume Claim is a declarative description of a piece of storage requested by the user"),". In this sense, a PVC may sound like "),Object(o.b)("p",null,"Give me:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},'"3 gigabytes of fast ssd storage"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},'"500 gigabytes of cheap hard disk drive storage. You know the old rotating magnetic drives."')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},'"50 gigabytes of very reliable ssd storage"'))),Object(o.b)("p",null,"As you can see these requests may include different ",Object(o.b)("strong",{parentName:"p"},"quantities")," and ",Object(o.b)("strong",{parentName:"p"},"qualitites")," of storage. While quantities are measures in bytes, qualities can be anything from ",Object(o.b)("em",{parentName:"p"},"availability"),", ",Object(o.b)("em",{parentName:"p"},"durability")," to ",Object(o.b)("em",{parentName:"p"},"speed"),"."),Object(o.b)("h3",{id:"storage-class"},"Storage Class"),Object(o.b)("p",null,"Sotarge Classes ","[13]"," are there to reflect the abovementioned qualities such as ",Object(o.b)("em",{parentName:"p"},"availability"),", ",Object(o.b)("em",{parentName:"p"},"durability"),", ",Object(o.b)("em",{parentName:"p"},"speed"),", ",Object(o.b)("em",{parentName:"p"},"backup policies")," etc."),Object(o.b)("p",null,"This leads to the question where the difference of Persistent Volumes by Storage Class is actually manifested. Simply speaking, a Storage Class represents a configuration that is passed into a so called ",Object(o.b)("em",{parentName:"p"},"Storage Provisioner"),"."),Object(o.b)("h3",{id:"storage-provisioner"},"Storage Provisioner"),Object(o.b)("p",null,"The Storage Provisioner is where Persistent Volumes of a particular Storage Classe are actually created."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"A Storage Provisioner is responsible for dynamically creating storage volumes corresponding to Persistent Volume Claims requsted by users"),"."),Object(o.b)("p",null,"The underlyting storage system can be anything from a software defined storage (SDN)","[6]"," such as ceph ","[7]",", gluster ","[8]",", etc. to hardware appliances accessed directly or through the API of an infrastructure provider such as AWS ","[9]",", Azure ","[10]",", GCP ","[11]"," or AliCloud ","[12]",". Each of these systems - along with many other storage solutions - have to be addressed in a particular way. This is the main subject of a Storage Provisioner implementation."),Object(o.b)("h3",{id:"manual-provisioning"},"Manual Provisioning"),Object(o.b)("p",null,"The documentation ","[2]"," also mentions manual provisioning. In this case Persistent Volumes are pre-created by the cluster administrator. Applications then use Persistent Volume Claims to request a Persistent Volume from the pool of of PVs. While this use case may make sense in legacy use cases, such a stone age methodology should be avoided whenever possible. The absense of dynamic volume provisioning is likely to block the workflow of application developers during deployment when Persistent Volume Claims can't be fulfilled as the cluster ran out of Persistent Volumes."),Object(o.b)("h2",{id:"links"},"Links"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, Storage, Volumes, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/storage/volumes/"}),"https://kubernetes.io/docs/concepts/storage/volumes/")),Object(o.b)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, Storage, Persistent Volumes, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"}),"https://kubernetes.io/docs/concepts/storage/persistent-volumes/")),Object(o.b)("li",{parentName:"ol"},"OpenStack Swift, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/openstack/swift"}),"https://github.com/openstack/swift")),Object(o.b)("li",{parentName:"ol"},"Amazon S3, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://aws.amazon.com/s3/"}),"https://aws.amazon.com/s3/")),Object(o.b)("li",{parentName:"ol"},"Amazon EBS, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://aws.amazon.com/ebs/"}),"https://aws.amazon.com/ebs/")),Object(o.b)("li",{parentName:"ol"},"Wikipedia, Software Defined Storage, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Software-defined_storage"}),"https://en.wikipedia.org/wiki/Software-defined_storage")),Object(o.b)("li",{parentName:"ol"},"Ceph, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://ceph.io/"}),"https://ceph.io/")),Object(o.b)("li",{parentName:"ol"},"gluster, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.gluster.org/"}),"https://www.gluster.org/")),Object(o.b)("li",{parentName:"ol"},"Amazon Web Services, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://aws.amazon.com/"}),"http://aws.amazon.com/")),Object(o.b)("li",{parentName:"ol"},"Microsoft Azure, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://azure.microsoft.com"}),"https://azure.microsoft.com")),Object(o.b)("li",{parentName:"ol"},"Google Cloud Platform, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://cloud.google.com/"}),"https://cloud.google.com/")),Object(o.b)("li",{parentName:"ol"},"Alibaba Cloud, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://eu.alibabacloud.com/"}),"https://eu.alibabacloud.com/")),Object(o.b)("li",{parentName:"ol"},"Kubernetes ocumentation, Concepts, Storage Classes, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"}),"https://kubernetes.io/docs/concepts/storage/storage-classes/")),Object(o.b)("li",{parentName:"ol"},"The Tvelve Factor App, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://12factor.net/"}),"https://12factor.net/"))))}u.isMDXComponent=!0}}]);