"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"services",title:"Services"},s=void 0,c={unversionedId:"kubernetes/replicaset-and-service/services",id:"kubernetes/replicaset-and-service/services",isDocsHomePage:!1,title:"Services",description:"In the ReplicaSet lessons we have encountered service discovery, the challenge of reliably and predictably finding and accessing workloads running in a Kubernetes cluster.",source:"@site/docs/kubernetes/40-replicaset-and-service/30-service.md",sourceDirName:"kubernetes/40-replicaset-and-service",slug:"/kubernetes/replicaset-and-service/services",permalink:"/a9s-kubernetes-training/kubernetes/replicaset-and-service/services",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"services",title:"Services"},sidebar:"docs",previous:{title:"ReplicaSets",permalink:"/a9s-kubernetes-training/kubernetes/replicaset-and-service/replicasets"},next:{title:"Ingress",permalink:"/a9s-kubernetes-training/kubernetes/replicaset-and-service/ingress"}},p=[{value:"Creating a Service",id:"creating-a-service",children:[]},{value:"What Does the Service do?",id:"what-does-the-service-do",children:[{value:"Error: No Endpoints Available",id:"error-no-endpoints-available",children:[]},{value:"Fixed Service",id:"fixed-service",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the ReplicaSet lessons we have encountered ",(0,i.kt)("em",{parentName:"p"},"service discovery"),", the challenge of reliably and predictably finding and accessing workloads running in a Kubernetes cluster."),(0,i.kt)("h2",{id:"creating-a-service"},"Creating a Service"),(0,i.kt)("p",null,"Creating the service is simple."),(0,i.kt)("p",null,"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"30-service-hello-world.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: smpl-go-web-s\nspec:\n  selector:\n    app: smpl-go-web-a-cant-work\n  ports:\n  - port: 8080\n")),(0,i.kt)("p",null,"Apply it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl apply -f 30-service-hello-world.yaml\n")),(0,i.kt)("p",null,"Once, the Service has been created, it can be accessed using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl proxy"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl proxy --port 8001\n")),(0,i.kt)("p",null,"Then navigate a browser to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:8001/api/v1/namespaces/k8s-training/services/http:smpl-go-web-s:8080/proxy/\n")),(0,i.kt)("p",null,"This assumes the Service to be within the ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s-training")," namespace, be reachable via ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," and listen on port ",(0,i.kt)("inlineCode",{parentName:"p"},"8080"),". The trailing ",(0,i.kt)("inlineCode",{parentName:"p"},"/proxy")," is mandatory."),(0,i.kt)("h2",{id:"what-does-the-service-do"},"What Does the Service do?"),(0,i.kt)("p",null,"In the first step of this lession a ",(0,i.kt)("strong",{parentName:"p"},"ReplicaSet with one (1)")," replica has been deployed. This lead to the creation of a single Pod with a single container running the desired web application."),(0,i.kt)("p",null,"By creating a Service matching the ReplicaSet with annotations using ",(0,i.kt)("inlineCode",{parentName:"p"},"selector")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"label"),", the created service has ",(0,i.kt)("em",{parentName:"p"},"discovered")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"smpl-go-web-a")," app and uses it as an endpoint. Consequently, requests to the service will be routed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"smpl-go-web")," Pod. This is what a Service does: it's a layer 4 (ISO OSI: transport layer) router and - if mulitple endpoints are available - load balancer."),(0,i.kt)("p",null,"You can verify the connection of the Service with its application by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl describe service smpl-go-web-s\n")),(0,i.kt)("p",null,"And (Don't forget to replace the Pod's ID):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl describe pod smpl-go-web-75457966b7-742sr\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoints")," section of the service description should contain the Pod's IP address."),(0,i.kt)("p",null,"The Service therefore has two major purposes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Service Discovery"),": Acting as a stable entry point to access your apps."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Load Balancing"),": Distributing requests among instances of your app in case there are multiple of them.")),(0,i.kt)("h3",{id:"error-no-endpoints-available"},"Error: No Endpoints Available"),(0,i.kt)("p",null,"In case you are receiving an error such as ",(0,i.kt)("inlineCode",{parentName:"p"},"No endpoints available for service")," check the match labels of your service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl describe service smpl-go-web-s\n")),(0,i.kt)("p",null,"In the output pay attention to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Selector"),"-field. It must match the Pods's labels."),(0,i.kt)("p",null,"In order to check the labels of your Pod you can obtain this information by executing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl describe Pod smpl-go-web-rs-kmqrd\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"smpl-go-web-rs-kmqrd")," must be replaced with your Pod's name."),(0,i.kt)("p",null,"Look for the field ",(0,i.kt)("inlineCode",{parentName:"p"},"Labels"),' in the output. Only if there is a match between the label and the Service\'s selector, the Service will "know" to which Pods it belongs.'),(0,i.kt)("h3",{id:"fixed-service"},"Fixed Service"),(0,i.kt)("p",null,"The fixed version of ",(0,i.kt)("inlineCode",{parentName:"p"},"30-service-hello-world.yaml")," then looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: smpl-go-web-s\nspec:\n  selector:\n    app: smpl-go-web-a\n  ports:\n  - port: 8080\n")))}u.isMDXComponent=!0}}]);