(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(1),c=n(6),s=(n(0),n(138)),i={id:"kubectl",title:"kubectl Basics"},a={id:"kubernetes/10-basics/kubectl",title:"kubectl Basics",description:"In this lesson you will learn how to interact with a Kubernetes cluster using the Kubernetes CLI called `kubectl`.",source:"@site/docs/kubernetes/10-basics/10-kubectl.md",permalink:"/a9s-kubernetes-training/docs/kubernetes/10-basics/kubectl",sidebar:"docs",previous:{title:"Kubernetes Overview",permalink:"/a9s-kubernetes-training/docs/kubernetes/kubernetes-overview"},next:{title:"Namespaces",permalink:"/a9s-kubernetes-training/docs/kubernetes/10-basics/namespaces"}},o=[{value:"Identify Your Kubernetes Version",id:"identify-your-kubernetes-version",children:[]},{value:"Identify the Kubernetes Cluster",id:"identify-the-kubernetes-cluster",children:[]},{value:"Use an HTTP Proxy to Access the Kubernets API",id:"use-an-http-proxy-to-access-the-kubernets-api",children:[]},{value:"Links",id:"links",children:[]}],u={rightToc:o};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In this lesson you will learn how to interact with a Kubernetes cluster using the Kubernetes CLI called ",Object(s.b)("inlineCode",{parentName:"p"},"kubectl"),"."),Object(s.b)("h2",{id:"identify-your-kubernetes-version"},"Identify Your Kubernetes Version"),Object(s.b)("p",null,"In order to determine the version of both your Kubernetes client (CLI) and Kubernetes servicer (API) issue the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl version\n")),Object(s.b)("h2",{id:"identify-the-kubernetes-cluster"},"Identify the Kubernetes Cluster"),Object(s.b)("p",null,"When working with several Kubernetes clusters it is important to point ",Object(s.b)("inlineCode",{parentName:"p"},"kubectl")," to the right Kubernetes cluster. A simple way to figure out which Kubernetes cluster is currently selected for the usage with ",Object(s.b)("inlineCode",{parentName:"p"},"kubectl")," is:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{})," kubectl cluster-info\n")),Object(s.b)("p",null,"It's tell you the API endpoint of the selected Kubernetes cluser which should provide you the information to see whether this is the one you intend to use."),Object(s.b)("p",null,"The Kubernetes documentation explains ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"}),"how to configure multiple clusters"),"."),Object(s.b)("h2",{id:"use-an-http-proxy-to-access-the-kubernets-api"},"Use an HTTP Proxy to Access the Kubernets API"),Object(s.b)("p",null,"By using"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl proxy --port 8001\n")),Object(s.b)("p",null,"a local proxy running on your computer is started which can be accessed via ",Object(s.b)("inlineCode",{parentName:"p"},"http://localhost:8001"),". "),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"kubectl")," command takes care of the authentication against the Kubernetes API. The communication between the local proxy and the remote Kubernetes API is SSL encrypted while the local communication to the local proxy isn't."),Object(s.b)("h2",{id:"links"},"Links"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Kubernetes Documentation, Tasks, Use an HTTP Proxy to Access the Kubernets API, ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/access-kubernetes-api/http-proxy-access-api/"}),"https://kubernetes.io/docs/tasks/access-kubernetes-api/http-proxy-access-api/"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Kubernetes Documentation, Tasks, Configure Access to Multiple Clusters, ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"}),"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Kubectl Book, ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubectl.docs.kubernetes.io/"}),"https://kubectl.docs.kubernetes.io/")))))}l.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),c=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),l=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},b=function(e){var t=l(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||s;return n?c.a.createElement(h,a({ref:t},u,{components:n})):c.a.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);