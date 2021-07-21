(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),i=(r(0),r(198)),o={id:"postgresql-overview",title:"Overview"},s={id:"postgresql/postgresql-overview",isDocsHomePage:!1,title:"Overview",description:"In the Kubernetes Training a simple PostgreSQL StatefulSet has been developed. This training carries the PostgreSQL StatefulSet further and provides a deep dive into building a highly available, clustered PostgreSQL StatefulSet.",source:"@site/docs/postgresql/05-overview.md",permalink:"/postgresql/postgresql-overview",sidebar:"docs",previous:{title:"Conclusions",permalink:"/kubernetes/80-stateful-sets/stateful-set-conclusions"},next:{title:"Why use Replication?",permalink:"/postgresql/20-postgresql-theory/why-use-replication"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Namespace",id:"namespace",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the Kubernetes Training a simple PostgreSQL StatefulSet has been developed. This training carries the PostgreSQL StatefulSet further and provides a deep dive into building a highly available, clustered PostgreSQL StatefulSet."),Object(i.b)("p",null,"This training aims to provide a introduction to both ",Object(i.b)("em",{parentName:"p"},"data service automation with Kubernetes")," as well ",Object(i.b)("em",{parentName:"p"},"automating PostgreSQL"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The goal of the course is to learn about data service automation and not to produce a production automation solution"),". Covering the entire lifecycle of a data service requires more effort than can be covered in a single training."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"You should have processed the Kubernetes tutorial with special attention to the StatefulSet chapters."),Object(i.b)("h2",{id:"namespace"},"Namespace"),Object(i.b)("p",null,"The namespace for this training is ",Object(i.b)("inlineCode",{parentName:"p"},"pg"),"."),Object(i.b)("p",null,"Create the namespace and set it as a default as described in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kubernetes/10-basics/namespaces"}),"Kubernetes Tutorial"),"."))}u.isMDXComponent=!0},198:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);