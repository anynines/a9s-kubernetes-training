(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),i=(n(0),n(198)),c={id:"services",title:"Services"},o={id:"kubernetes/40-replicaset-and-service/services",isDocsHomePage:!1,title:"Services",description:"In the ReplicaSet lessons we have encountered service discovery, the challenge of reliably and predictably finding and accessing workloads running in a Kubernetes cluster.",source:"@site/docs/kubernetes/40-replicaset-and-service/30-service.md",permalink:"/kubernetes/40-replicaset-and-service/services",sidebar:"docs",previous:{title:"ReplicaSets",permalink:"/kubernetes/40-replicaset-and-service/replicasets"},next:{title:"Ingress",permalink:"/kubernetes/40-replicaset-and-service/ingress"}},l=[{value:"Creating a Service",id:"creating-a-service",children:[]},{value:"What Does the Service do?",id:"what-does-the-service-do",children:[{value:"Error: No Endpoints Available",id:"error-no-endpoints-available",children:[]},{value:"Fixed Service",id:"fixed-service",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the ReplicaSet lessons we have encountered ",Object(i.b)("em",{parentName:"p"},"service discovery"),", the challenge of reliably and predictably finding and accessing workloads running in a Kubernetes cluster."),Object(i.b)("h2",{id:"creating-a-service"},"Creating a Service"),Object(i.b)("p",null,"Creating the service is simple."),Object(i.b)("p",null,"Create a file ",Object(i.b)("inlineCode",{parentName:"p"},"30-service-hello-world.yaml"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: smpl-go-web-s\nspec:\n  selector:\n    app: smpl-go-web-a-cant-work\n  ports:\n  - port: 8080\n")),Object(i.b)("p",null,"Apply it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl apply -f 30-service-hello-world.yaml\n")),Object(i.b)("p",null,"Once, the Service has been created, it can be accessed using ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl proxy"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl proxy --port 8001\n")),Object(i.b)("p",null,"Then navigate a browser to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"http://localhost:8001/api/v1/namespaces/k8s-training/services/http:smpl-go-web-s:8080/proxy/\n")),Object(i.b)("p",null,"This assumes the Service to be within the ",Object(i.b)("inlineCode",{parentName:"p"},"k8s-training")," namespace, be reachable via ",Object(i.b)("inlineCode",{parentName:"p"},"http")," and listen on port ",Object(i.b)("inlineCode",{parentName:"p"},"8080"),". The trailing ",Object(i.b)("inlineCode",{parentName:"p"},"/proxy")," is mandatory."),Object(i.b)("h2",{id:"what-does-the-service-do"},"What Does the Service do?"),Object(i.b)("p",null,"In the first step of this lession a ",Object(i.b)("strong",{parentName:"p"},"ReplicaSet with one (1)")," replica has been deployed. This lead to the creation of a single Pod with a single container running the desired web application."),Object(i.b)("p",null,"By creating a Service matching the ReplicaSet with annotations using ",Object(i.b)("inlineCode",{parentName:"p"},"selector")," and ",Object(i.b)("inlineCode",{parentName:"p"},"label"),", the created service has ",Object(i.b)("em",{parentName:"p"},"discovered")," the ",Object(i.b)("inlineCode",{parentName:"p"},"smpl-go-web-a")," app and uses it as an endpoint. Consequently, requests to the service will be routed to the ",Object(i.b)("inlineCode",{parentName:"p"},"smpl-go-web")," Pod. This is what a Service does: it's a layer 4 (ISO OSI: transport layer) router and - if mulitple endpoints are available - load balancer."),Object(i.b)("p",null,"You can verify the connection of the Service with its application by:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl describe service smpl-go-web-s\n")),Object(i.b)("p",null,"And (Don't forget to replace the Pod's ID):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl describe pod smpl-go-web-75457966b7-742sr\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"endpoints")," section of the service description should contain the Pod's IP address."),Object(i.b)("p",null,"The Service therefore has two major purposes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"Service Discovery"),": Acting as a stable entry point to access your apps."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"Load Balancing"),": Distributing requests among instances of your app in case there are multiple of them.")),Object(i.b)("h3",{id:"error-no-endpoints-available"},"Error: No Endpoints Available"),Object(i.b)("p",null,"In case you are receiving an error such as ",Object(i.b)("inlineCode",{parentName:"p"},"No endpoints available for service")," check the match labels of your service:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl describe service smpl-go-web-s\n")),Object(i.b)("p",null,"In the output pay attention to the ",Object(i.b)("inlineCode",{parentName:"p"},"Selector"),"-field. It must match the Pods's labels."),Object(i.b)("p",null,"In order to check the labels of your Pod you can obtain this information by executing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl describe Pod smpl-go-web-rs-kmqrd\n")),Object(i.b)("p",null,"Where ",Object(i.b)("inlineCode",{parentName:"p"},"smpl-go-web-rs-kmqrd")," must be replaced with your Pod's name."),Object(i.b)("p",null,"Look for the field ",Object(i.b)("inlineCode",{parentName:"p"},"Labels"),' in the output. Only if there is a match between the label and the Service\'s selector, the Service will "know" to which Pods it belongs.'),Object(i.b)("h3",{id:"fixed-service"},"Fixed Service"),Object(i.b)("p",null,"The fixed version of ",Object(i.b)("inlineCode",{parentName:"p"},"30-service-hello-world.yaml")," then looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: smpl-go-web-s\nspec:\n  selector:\n    app: smpl-go-web-a\n  ports:\n  - port: 8080\n")))}p.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);