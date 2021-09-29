"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5761],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4760:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"training-overview",title:"Kubernetes Training Overview"},s=void 0,u={unversionedId:"training-overview",id:"training-overview",isDocsHomePage:!1,title:"Kubernetes Training Overview",description:"Status: Under Development",source:"@site/docs/10-overview.md",sourceDirName:".",slug:"/training-overview",permalink:"/training-overview",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"training-overview",title:"Kubernetes Training Overview"},sidebar:"docs",next:{title:"Container Overview",permalink:"/containerization/container-overview"}},c=[{value:"Status: Under Development",id:"status-under-development",children:[]},{value:"Changelog",id:"changelog",children:[{value:"2020-08-31: PostgreSQL Streaming Replication",id:"2020-08-31-postgresql-streaming-replication",children:[]},{value:"2020-04-30: StatefulSet and Fixes",id:"2020-04-30-statefulset-and-fixes",children:[]},{value:"2020-04-27: StatefulSet Chapters Renamed",id:"2020-04-27-statefulset-chapters-renamed",children:[]},{value:"2020-04-23: StatefulSets",id:"2020-04-23-statefulsets",children:[]}]},{value:"Goal",id:"goal",children:[]},{value:"Target Audience",id:"target-audience",children:[]},{value:"Training Structure",id:"training-structure",children:[]},{value:"<code>paas.anynines.com</code>",id:"paasanyninescom",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"status-under-development"},"Status: Under Development"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This training is still under development. "),(0,i.kt)("li",{parentName:"ul"},"Smaller changes - mostly spelling and fixes - will be applied throughout the tutorial."),(0,i.kt)("li",{parentName:"ul"},"Content will be mostly appended to late chapters."),(0,i.kt)("li",{parentName:"ul"},"Currently the chapter ",(0,i.kt)("strong",{parentName:"li"},"StatefulSets")," is under development.")),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("p",null,"The following changes have been made:"),(0,i.kt)("h3",{id:"2020-08-31-postgresql-streaming-replication"},"2020-08-31: PostgreSQL Streaming Replication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adds a PostgreSQL tutorial on how to build a simple, three node PostgreSQL Streaming Replication with Kubernetes StatefulSets.")),(0,i.kt)("h3",{id:"2020-04-30-statefulset-and-fixes"},"2020-04-30: StatefulSet and Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adds generating a self-signed SSL Certificate to the Ingress lesson."),(0,i.kt)("li",{parentName:"ul"},"Adds a command on how to retrieve and decode a Secret's value for a given key."),(0,i.kt)("li",{parentName:"ul"},"Fixes some spelling mistakes."),(0,i.kt)("li",{parentName:"ul"},"Fixes namespaces inconsistencies to ",(0,i.kt)("inlineCode",{parentName:"li"},"k8s-training"),".")),(0,i.kt)("h3",{id:"2020-04-27-statefulset-chapters-renamed"},"2020-04-27: StatefulSet Chapters Renamed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Renamed Chapters from "PostgreSQL Exercise {n}" to more titles describing the content of the chapters in greater detail.')),(0,i.kt)("h3",{id:"2020-04-23-statefulsets"},"2020-04-23: StatefulSets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added large parts of the StatefulSet section. Still incomplete.")),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"The goal of this training is to enable you with the skills necessary to containerize your applications in order to run them in a Kubernetes cluster."),(0,i.kt)("h2",{id:"target-audience"},"Target Audience"),(0,i.kt)("p",null,"This training has been created by anynines CEO Julian Fischer for the ",(0,i.kt)("em",{parentName:"p"},"Cloud Computing")," lecture held together with Prof. Esch at the Saarland University of Applied Sciences (HTWdS)."),(0,i.kt)("p",null,"The training therefore targets at developers entering the world of containerization and Kubernetes. Ever interested person who as mastered the basics of at least one programming language should be able to follow the training."),(0,i.kt)("h2",{id:"training-structure"},"Training Structure"),(0,i.kt)("p",null,"The Kubernetes training has two major parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Containerization"),(0,i.kt)("li",{parentName:"ol"},"Kubernetes")),(0,i.kt)("p",null,"The first part ",(0,i.kt)("em",{parentName:"p"},"Containerization")," covers container basics such as containers, container images, container registries as well as how to build and publish simple container images."),(0,i.kt)("p",null,"The second part ",(0,i.kt)("em",{parentName:"p"},"Kubernetes")," then introduces the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command followed by core Kubernetes concepts such as Pods, ReplicaSets, Deployments, ConfigMaps, Securities, Jobs and StatefulSets. Practical examples show their basic usage. Additionally, a few common failure scenarios are included illustrating how these issues can be fixed."),(0,i.kt)("h2",{id:"paasanyninescom"},(0,i.kt)("inlineCode",{parentName:"h2"},"paas.anynines.com")),(0,i.kt)("p",null,"The training has been written using ",(0,i.kt)("inlineCode",{parentName:"p"},"a9s Kubernetes")," as offered at ",(0,i.kt)("a",{parentName:"p",href:"https://paas.anynines.com."},"https://paas.anynines.com.")," Reach out to the ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@anynines.com"},"support")," to get an early access."))}d.isMDXComponent=!0}}]);