(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),i=(n(0),n(185)),o={id:"training-overview",title:"Kubernetes Training Overview"},l={id:"training-overview",isDocsHomePage:!1,title:"Kubernetes Training Overview",description:"Status: Under Development",source:"@site/docs/overview.md",permalink:"/training-overview",sidebar:"docs",next:{title:"Container Overview",permalink:"/containerization/container-overview"}},c=[{value:"Status: Under Development",id:"status-under-development",children:[]},{value:"Changelog",id:"changelog",children:[{value:"2020-04-30: StatefulSet and Fixes",id:"2020-04-30-statefulset-and-fixes",children:[]},{value:"2020-04-27: StatefulSet Chapters Renamed",id:"2020-04-27-statefulset-chapters-renamed",children:[]},{value:"2020-04-23: StatefulSets",id:"2020-04-23-statefulsets",children:[]}]},{value:"Goal",id:"goal",children:[]},{value:"Target Audience",id:"target-audience",children:[]},{value:"Training Structure",id:"training-structure",children:[]},{value:"<code>paas.anynines.com</code>",id:"paasanyninescom",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"status-under-development"},"Status: Under Development"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This training is still under development. "),Object(i.b)("li",{parentName:"ul"},"Smaller changes - mostly spelling and fixes - will be applied throughout the tutorial."),Object(i.b)("li",{parentName:"ul"},"Content will be mostly appended to late chapters."),Object(i.b)("li",{parentName:"ul"},"Currently the chapter ",Object(i.b)("strong",{parentName:"li"},"StatefulSets")," is under development.")),Object(i.b)("h2",{id:"changelog"},"Changelog"),Object(i.b)("p",null,"The following changes have been made:"),Object(i.b)("h3",{id:"2020-04-30-statefulset-and-fixes"},"2020-04-30: StatefulSet and Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adds generating a self-signed SSL Certificate to the Ingress lesson."),Object(i.b)("li",{parentName:"ul"},"Adds a command on how to retrieve and decode a Secret's value for a given key."),Object(i.b)("li",{parentName:"ul"},"Fixes some spelling mistakes."),Object(i.b)("li",{parentName:"ul"},"Fixes namespaces inconsistencies to ",Object(i.b)("inlineCode",{parentName:"li"},"k8s-training"),".")),Object(i.b)("h3",{id:"2020-04-27-statefulset-chapters-renamed"},"2020-04-27: StatefulSet Chapters Renamed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Renamed Chapters from "PostgreSQL Exercise {n}" to more titles describing the content of the chapters in greater detail.')),Object(i.b)("h3",{id:"2020-04-23-statefulsets"},"2020-04-23: StatefulSets"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added large parts of the StatefulSet section. Still incomplete.")),Object(i.b)("h2",{id:"goal"},"Goal"),Object(i.b)("p",null,"The goal of this training is to enable you with the skills necessary to containerize your applications in order to run them in a Kubernetes cluster."),Object(i.b)("h2",{id:"target-audience"},"Target Audience"),Object(i.b)("p",null,"This training has been created by anynines CEO Julian Fischer for the ",Object(i.b)("em",{parentName:"p"},"Cloud Computing")," lecture held together with Prof. Esch at the Saarland University of Applied Sciences (HTWdS)."),Object(i.b)("p",null,"The training therefore targets at developers entering the world of containerization and Kubernetes. Ever interested person who as mastered the basics of at least one programming language should be able to follow the training."),Object(i.b)("h2",{id:"training-structure"},"Training Structure"),Object(i.b)("p",null,"The Kubernetes training has two major parts:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Containerization"),Object(i.b)("li",{parentName:"ol"},"Kubernetes")),Object(i.b)("p",null,"The first part ",Object(i.b)("em",{parentName:"p"},"Containerization")," covers container basics such as containers, container images, container registries as well as how to build and publish simple container images."),Object(i.b)("p",null,"The second part ",Object(i.b)("em",{parentName:"p"},"Kubernetes")," then introduces the ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl")," command followed by core Kubernetes concepts such as Pods, ReplicaSets, Deployments, ConfigMaps, Securities, Jobs and StatefulSets. Practical examples show their basic usage. Additionally, a few common failure scenarios are included illustrating how these issues can be fixed."),Object(i.b)("h2",{id:"paasanyninescom"},Object(i.b)("inlineCode",{parentName:"h2"},"paas.anynines.com")),Object(i.b)("p",null,"The training has been written using ",Object(i.b)("inlineCode",{parentName:"p"},"a9s Kubernetes")," as offered at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://paas.anynines.com."}),"https://paas.anynines.com.")," Reach out to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:support@anynines.com"}),"support")," to get an early access."))}u.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);