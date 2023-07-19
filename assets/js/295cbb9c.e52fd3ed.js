"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4792],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,v=c["".concat(l,".").concat(d)]||c[d]||f[d]||i;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},757:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"postgresql-overview",title:"Overview"},l=void 0,u={unversionedId:"postgresql/postgresql-overview",id:"postgresql/postgresql-overview",title:"Overview",description:"In the Kubernetes Training a simple PostgreSQL StatefulSet has been developed. This training carries the PostgreSQL StatefulSet further and provides a deep dive into building a highly available, clustered PostgreSQL StatefulSet.",source:"@site/docs/postgresql/05-overview.md",sourceDirName:"postgresql",slug:"/postgresql/postgresql-overview",permalink:"/postgresql/postgresql-overview",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"postgresql-overview",title:"Overview"},sidebar:"docs",previous:{title:"Conclusions",permalink:"/kubernetes/stateful-sets/stateful-set-conclusions"},next:{title:"Why use Replication?",permalink:"/postgresql/postgresql-theory/why-use-replication"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Namespace",id:"namespace",level:2}],f={toc:c},d="wrapper";function v(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the Kubernetes Training a simple PostgreSQL StatefulSet has been developed. This training carries the PostgreSQL StatefulSet further and provides a deep dive into building a highly available, clustered PostgreSQL StatefulSet."),(0,i.kt)("p",null,"This training aims to provide a introduction to both ",(0,i.kt)("em",{parentName:"p"},"data service automation with Kubernetes")," as well ",(0,i.kt)("em",{parentName:"p"},"automating PostgreSQL"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The goal of the course is to learn about data service automation and not to produce a production automation solution"),". Covering the entire lifecycle of a data service requires more effort than can be covered in a single training."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You should have processed the Kubernetes tutorial with special attention to the StatefulSet chapters."),(0,i.kt)("h2",{id:"namespace"},"Namespace"),(0,i.kt)("p",null,"The namespace for this training is ",(0,i.kt)("inlineCode",{parentName:"p"},"pg"),"."),(0,i.kt)("p",null,"Create the namespace and set it as a default as described in the ",(0,i.kt)("a",{parentName:"p",href:"/kubernetes/basics/namespaces"},"Kubernetes Tutorial"),"."))}v.isMDXComponent=!0}}]);