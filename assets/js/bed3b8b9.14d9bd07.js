"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r,i=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],s={id:"services",title:"Services"},c=void 0,p={unversionedId:"kubernetes/replicaset-and-service/services",id:"kubernetes/replicaset-and-service/services",title:"Services",description:"Related Videos",source:"@site/docs/kubernetes/40-replicaset-and-service/30-service.md",sourceDirName:"kubernetes/40-replicaset-and-service",slug:"/kubernetes/replicaset-and-service/services",permalink:"/kubernetes/replicaset-and-service/services",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"services",title:"Services"},sidebar:"docs",previous:{title:"ReplicaSets",permalink:"/kubernetes/replicaset-and-service/replicasets"},next:{title:"Ingress",permalink:"/kubernetes/replicaset-and-service/ingress"}},d={},u=[{value:"Related Videos",id:"related-videos",level:2},{value:"Creating a Service",id:"creating-a-service",level:2},{value:"What Does the Service do?",id:"what-does-the-service-do",level:2},{value:"Error: No Endpoints Available",id:"error-no-endpoints-available",level:3},{value:"Fixed Service",id:"fixed-service",level:3}],m=(r="VideoContainer",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),v={toc:u},k="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(k,(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"related-videos"},"Related Videos"),(0,o.kt)(m,{list:[{src:"https://www.youtube-nocookie.com/embed/2hdv-ZpYIj8",title:"Services Part 1"},{src:"https://www.youtube-nocookie.com/embed/BEXU7KyXI-U",title:"Services Part 2"}],mdxType:"VideoContainer"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In the ReplicaSet lessons we have encountered ",(0,o.kt)("em",{parentName:"p"},"service discovery"),", the challenge of reliably and predictably finding and accessing workloads running in a Kubernetes cluster."),(0,o.kt)("h2",{id:"creating-a-service"},"Creating a Service"),(0,o.kt)("p",null,"Creating the service is simple."),(0,o.kt)("p",null,"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"30-service-hello-world.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: smpl-go-web-s\nspec:\n  selector:\n    app: smpl-go-web-a-cant-work\n  ports:\n    - port: 8080\n")),(0,o.kt)("p",null,"Apply it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f 30-service-hello-world.yaml\n")),(0,o.kt)("p",null,"Once, the Service has been created, it can be accessed using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl proxy"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl proxy --port 8001\n")),(0,o.kt)("p",null,"Then navigate a browser to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:8001/api/v1/namespaces/k8s-training/services/http:smpl-go-web-s:8080/proxy/\n")),(0,o.kt)("p",null,"This assumes the Service to be within the ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s-training")," namespace, be reachable via ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," and listen on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8080"),". The trailing ",(0,o.kt)("inlineCode",{parentName:"p"},"/proxy")," is mandatory."),(0,o.kt)("h2",{id:"what-does-the-service-do"},"What Does the Service do?"),(0,o.kt)("p",null,"In the first step of this lesson a ",(0,o.kt)("strong",{parentName:"p"},"ReplicaSet with one (1)")," replica has been deployed. This lead to the creation of a single Pod with a single container running the desired web application."),(0,o.kt)("p",null,"By creating a Service matching the ReplicaSet with annotations using ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"label"),", the created service should ",(0,o.kt)("em",{parentName:"p"},"discover")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"smpl-go-web-a")," app and uses it as an endpoint. Consequently, requests to the service will be routed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"smpl-go-web")," Pod. This is what a Service does: it's a layer 4 (ISO OSI: transport layer) router and - if multiple endpoints are available - load balancer."),(0,o.kt)("p",null,"You can verify the connection of the Service with its application by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl describe service smpl-go-web-s\n")),(0,o.kt)("p",null,"And (Don't forget to replace the Pod's ID):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl describe pod smpl-go-web-75457966b7-742sr\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints")," section of the service description should contain the Pod's IP address"),(0,o.kt)("p",null,"The Service therefore has two major purposes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Service Discovery"),": Acting as a stable entry point to access your apps."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Load Balancing"),": Distributing requests among instances of your app in case there are multiple of them.")),(0,o.kt)("h3",{id:"error-no-endpoints-available"},"Error: No Endpoints Available"),(0,o.kt)("p",null,"In case you are receiving an error such as ",(0,o.kt)("inlineCode",{parentName:"p"},"No endpoints available for service")," check the match labels of your service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl describe service smpl-go-web-s\n")),(0,o.kt)("p",null,"In the output pay attention to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Selector"),"-field. It must match the Pods's labels."),(0,o.kt)("p",null,"In order to check the labels of your Pod you can obtain this information by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl describe Pod smpl-go-web-rs-kmqrd\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"smpl-go-web-rs-kmqrd")," must be replaced with your Pod's name."),(0,o.kt)("p",null,"Look for the field ",(0,o.kt)("inlineCode",{parentName:"p"},"Labels"),' in the output. Only if there is a match between the label and the Service\'s selector, the Service will "know" to which Pods it belongs.'),(0,o.kt)("h3",{id:"fixed-service"},"Fixed Service"),(0,o.kt)("p",null,"The fixed version of ",(0,o.kt)("inlineCode",{parentName:"p"},"30-service-hello-world.yaml")," then looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: smpl-go-web-s\nspec:\n  selector:\n    app: smpl-go-web-a\n  ports:\n    - port: 8080\n")))}h.isMDXComponent=!0}}]);