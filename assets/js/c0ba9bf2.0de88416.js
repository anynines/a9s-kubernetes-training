"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2997],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),k=s,d=p["".concat(a,".").concat(k)]||p[k]||b[k]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=k;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[p]="string"==typeof e?e:s,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},935:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return b}});var r,s=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],a={id:"kubectl",title:"kubectl Basics"},c=void 0,l={unversionedId:"kubernetes/basics/kubectl",id:"kubernetes/basics/kubectl",title:"kubectl Basics",description:"Related Videos",source:"@site/docs/kubernetes/10-basics/10-kubectl.md",sourceDirName:"kubernetes/10-basics",slug:"/kubernetes/basics/kubectl",permalink:"/kubernetes/basics/kubectl",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"kubectl",title:"kubectl Basics"},sidebar:"docs",previous:{title:"Prerequisite",permalink:"/kubernetes/basics/prerequisite"},next:{title:"Namespaces",permalink:"/kubernetes/basics/namespaces"}},p={},b=[{value:"Related Videos",id:"related-videos",level:2},{value:"Identify Your Kubernetes Version",id:"identify-your-kubernetes-version",level:2},{value:"Identify the Kubernetes Cluster",id:"identify-the-kubernetes-cluster",level:2},{value:"Use an HTTP Proxy to Access the Kubernetes API",id:"use-an-http-proxy-to-access-the-kubernetes-api",level:2},{value:"Links",id:"links",level:2}],k=(r="VideoContainer",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),d={toc:b},h="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)(h,(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"related-videos"},"Related Videos"),(0,i.kt)(k,{list:[{src:"https://www.youtube-nocookie.com/embed/xKCa8ZENCJQ",title:"kubectl Basics"}],mdxType:"VideoContainer"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In this lesson you will learn how to interact with a Kubernetes cluster using the Kubernetes CLI called ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,i.kt)("h2",{id:"identify-your-kubernetes-version"},"Identify Your Kubernetes Version"),(0,i.kt)("p",null,"In order to determine the version of both your Kubernetes client (CLI) and Kubernetes service (API) issue the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl version\n")),(0,i.kt)("h2",{id:"identify-the-kubernetes-cluster"},"Identify the Kubernetes Cluster"),(0,i.kt)("p",null,"When working with several Kubernetes clusters it is important to point ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to the right Kubernetes cluster. A simple way to figure out which Kubernetes cluster is currently selected for the usage with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl cluster-info\n")),(0,i.kt)("p",null,"It's telling you the API endpoint of the selected Kubernetes cluster which should provide you the information to see whether this is the one you intend to use."),(0,i.kt)("p",null,"The Kubernetes documentation explains ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"},"how to configure multiple clusters"),"."),(0,i.kt)("h2",{id:"use-an-http-proxy-to-access-the-kubernetes-api"},"Use an HTTP Proxy to Access the Kubernetes API"),(0,i.kt)("p",null,"By using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl proxy --port 8001\n")),(0,i.kt)("p",null,"a local proxy running on your computer is started which can be accessed via ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8001"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command takes care of the authentication against the Kubernetes API. The communication between the local proxy and the remote Kubernetes API is SSL encrypted while the local communication to the local proxy isn't."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubernetes Documentation, Tasks, Use an HTTP Proxy to Access the Kubernetes API, ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-kubernetes-api/http-proxy-access-api/"},"https://kubernetes.io/docs/tasks/access-kubernetes-api/http-proxy-access-api/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubernetes Documentation, Tasks, Configure Access to Multiple Clusters, ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"},"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubectl Book, ",(0,i.kt)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/"},"https://kubectl.docs.kubernetes.io/")))))}f.isMDXComponent=!0}}]);