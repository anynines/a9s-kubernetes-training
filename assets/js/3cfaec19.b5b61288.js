"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6998],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4820:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"configmaps-and-secrets",title:"ConfigMaps and Secrets"},c=void 0,p={unversionedId:"kubernetes/configmaps-and-secrets/configmaps-and-secrets",id:"kubernetes/configmaps-and-secrets/configmaps-and-secrets",isDocsHomePage:!1,title:"ConfigMaps and Secrets",description:"ConfigMaps and Secrets are utilities provided by Kubernetes to fascilitate the development of cloud-native - or 12 factor [1] compliant - applications. In particular, ConfigMaps relate to chapter 3 Config of the 12 factor manifest. This best practice suggests to store application configuration outside the application, e.g. by using environment variables [2]. This allows a strict separation of functionality and configuration which increases the portability of applications. An application can thus be operated from the same code base among different environments such as staging & production or the application could even be deployed per customer still using a single source code version.",source:"@site/docs/kubernetes/60-configmaps-and-secrets/10-introduction.md",sourceDirName:"kubernetes/60-configmaps-and-secrets",slug:"/kubernetes/configmaps-and-secrets/configmaps-and-secrets",permalink:"/kubernetes/configmaps-and-secrets/configmaps-and-secrets",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"configmaps-and-secrets",title:"ConfigMaps and Secrets"},sidebar:"docs",previous:{title:"Deployments",permalink:"/kubernetes/deployments/deployments"},next:{title:"ConfigMaps",permalink:"/kubernetes/configmaps-and-secrets/configmaps"}},l=[{value:"Links",id:"links",children:[]}],u={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ConfigMaps and Secrets are utilities provided by Kubernetes to fascilitate the development of cloud-native - or 12 factor ","[1]"," compliant - applications. In particular, ConfigMaps relate to chapter 3 ",(0,i.kt)("em",{parentName:"p"},"Config")," of the 12 factor manifest. This best practice suggests to store application configuration outside the application, e.g. by using environment variables ","[2]",". This allows a strict separation of functionality and configuration which increases the portability of applications. An application can thus be operated from the same code base among different environments such as staging & production or the application could even be deployed ",(0,i.kt)("em",{parentName:"p"},"per customer")," still using a single source code version."),(0,i.kt)("p",null,"So instead of hard wiring the application configuration options or access credentials into source code, the better option is to use ConfigMaps and Secrets."),(0,i.kt)("p",null,"Both ",(0,i.kt)("strong",{parentName:"p"},"ConfigMaps and Secrets can be thought of key value sets managed using the Kubernetes API"),". In the following it will be shown how these key value sets can be created, maintained and retrieved."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Twelve Factor App, ",(0,i.kt)("a",{parentName:"li",href:"https://12factor.net/"},"https://12factor.net/")),(0,i.kt)("li",{parentName:"ol"},"Environment Variables, Wikipedia, ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Environment_variable"},"https://en.wikipedia.org/wiki/Environment_variable")),(0,i.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Configure a Pod to Use a ConfigMap, ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"},"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"))))}f.isMDXComponent=!0}}]);