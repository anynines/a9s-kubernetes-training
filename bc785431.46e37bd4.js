(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(6),a=(n(0),n(148)),o={id:"kubernetes-overview",title:"Kubernetes Overview"},s={id:"kubernetes/kubernetes-overview",title:"Kubernetes Overview",description:"The goal of the Kubernetes training is to enable you to deploy workloads to Kubernetes clusters. The training will guide you through the most frequently used Kubernetes resources and make you familiar with interacting with Kubernetes.",source:"@site/docs/kubernetes/05-overview.md",permalink:"/kubernetes/kubernetes-overview",sidebar:"docs",previous:{title:"Docker Cheat Sheet",permalink:"/docker/docker-cheatsheet"},next:{title:"kubectl Basics",permalink:"/kubernetes/10-basics/kubectl"}},l=[{value:"Scope of the Training",id:"scope-of-the-training",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Training Didadicts",id:"training-didadicts",children:[]},{value:"Links",id:"links",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The goal of the Kubernetes training is to enable you to deploy workloads to Kubernetes clusters. The training will guide you through the most frequently used Kubernetes resources and make you familiar with interacting with Kubernetes."),Object(a.b)("h2",{id:"scope-of-the-training"},"Scope of the Training"),Object(a.b)("p",null,"Areas covered in this training: "),Object(a.b)("p",null,"How to run a distributed application system in Kubernetes covering topics such as:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Kubectl basics"),Object(a.b)("li",{parentName:"ul"},"Pods"),Object(a.b)("li",{parentName:"ul"},"ReplicaSets"),Object(a.b)("li",{parentName:"ul"},"Deployments"),Object(a.b)("li",{parentName:"ul"},"Services"),Object(a.b)("li",{parentName:"ul"},"Ingresses"),Object(a.b)("li",{parentName:"ul"},"ConfigMaps and Secrets"),Object(a.b)("li",{parentName:"ul"},"Jobs and CRONJobs"),Object(a.b)("li",{parentName:"ul"},"StatefuleSets")),Object(a.b)("p",null,"At the end of the training a final exam is described which provides you with the opportunity to test your freshly learned skills."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"The Kubernetes training assumes that you are familiar with ",Object(a.b)("strong",{parentName:"p"},"containerization basics"),"."),Object(a.b)("p",null,"In particular you should know:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"What a container is."),Object(a.b)("li",{parentName:"ul"},"What a container images is."),Object(a.b)("li",{parentName:"ul"},"How to start a container."),Object(a.b)("li",{parentName:"ul"},"How to build a container image."),Object(a.b)("li",{parentName:"ul"},"What a container registry is."),Object(a.b)("li",{parentName:"ul"},"How to publish a local container image to a container registry."),Object(a.b)("li",{parentName:"ul"},"What a container volume is.")),Object(a.b)("p",null,"It is therefore recommended to go through the ",Object(a.b)("strong",{parentName:"p"},"container-training"),", first."),Object(a.b)("h2",{id:"training-didadicts"},"Training Didadicts"),Object(a.b)("p",null,"Learning is an iterative if not recursive process. It is hardly possible to grasp complex concepts in a single learning step. Often, a first impression is made and by revisiting a topic many times a more complete mental model is created."),Object(a.b)("p",null,"Consequently, this training does not aim to provide Kubernetes with all its facets and features. Depending on previous knowledge flooding a learner with architectural details and a large number of nuanced features may be rather confusing or even frustrating."),Object(a.b)("p",null,"When drawing a Koch snowflake fractal ","[1]"," the first iteration draws the outer shape. In subsequent iterations more depth is added. Similar to this, the main goal of this training is therefore to draw the outline of what Kubernetes is. More depth can be added with subsequent trainings."),Object(a.b)("p",null,"The first iteration also ",Object(a.b)("strong",{parentName:"p"},"does not cover the Kubernetes architecture")," in-depth. A few comments are made where a concept is relevant to the lesson at hand but the idea is to ",Object(a.b)("strong",{parentName:"p"},"focus on providing a learner with a maxium of utility"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"At the end of this training you will be able to deploy and operate a stateful, distributed application system with Kubernetes.")),Object(a.b)("p",null,"In order to achieve this goal corners will be cut and nuances be omitted. This way you should be able to follow the common theme."),Object(a.b)("p",null,"The training also contains ",Object(a.b)("strong",{parentName:"p"},"exercises")," providing you with tiny challenges to avoid falling into a cognitive cut-and-paste paralysis. Solutions to most of the exercises can be found in the training so that you can see how to solve a potential problem yourself."),Object(a.b)("p",null,"A few common mistakes are provoked during the training. These mistakes have been selected by observing a few trainings. Be prepared to make your own mistakes though. The more time you spend thinking about something, the more you will learn. Therefore, embrace your mistakes."),Object(a.b)("p",null,"The training has been tested on ",Object(a.b)("inlineCode",{parentName:"p"},"https://paas.anynines.com")," but any Kubernetes distribution will do the trick although minor modifcations may be necessary. Especially in the context of Ingresses this is to be expected."),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Wikipedia, Koch Snowflake, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Koch_snowflake"}),"https://en.wikipedia.org/wiki/Koch_snowflake"))))}u.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(h,s({ref:t},c,{components:n})):i.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);