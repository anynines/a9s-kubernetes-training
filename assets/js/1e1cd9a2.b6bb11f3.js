"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[191],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return t?a.createElement(d,r(r({ref:n},c),{},{components:t})):a.createElement(d,r({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2233:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return f}});var a,o=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],p={id:"configmaps",title:"ConfigMaps"},s=void 0,c={unversionedId:"kubernetes/configmaps-and-secrets/configmaps",id:"kubernetes/configmaps-and-secrets/configmaps",title:"ConfigMaps",description:"Related Videos",source:"@site/docs/kubernetes/60-configmaps-and-secrets/15-config-maps.md",sourceDirName:"kubernetes/60-configmaps-and-secrets",slug:"/kubernetes/configmaps-and-secrets/configmaps",permalink:"/kubernetes/configmaps-and-secrets/configmaps",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"configmaps",title:"ConfigMaps"},sidebar:"docs",previous:{title:"ConfigMaps and Secrets",permalink:"/kubernetes/configmaps-and-secrets/configmaps-and-secrets"},next:{title:"Exercise Explanation",permalink:"/kubernetes/configmaps-and-secrets/exercise-explanation"}},u={},f=[{value:"Related Videos",id:"related-videos",level:2},{value:"Creating a ConfigMap",id:"creating-a-configmap",level:2},{value:"Creating a ConfigMap from a Configuration File",id:"creating-a-configmap-from-a-configuration-file",level:3},{value:"Creating a ConfigMap from Command Line Literals",id:"creating-a-configmap-from-command-line-literals",level:3},{value:"Deleting a ConfigMap",id:"deleting-a-configmap",level:2},{value:"Accessing ConfigMaps",id:"accessing-configmaps",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Links",id:"links",level:2}],m=(a="VideoContainer",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),d={toc:f},g="wrapper";function k(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)(g,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"related-videos"},"Related Videos"),(0,r.kt)(m,{list:[{src:"https://www.youtube-nocookie.com/embed/7iU4uz-oaAU",title:"ConfigMaps Part 2"}],mdxType:"VideoContainer"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"ConfigMaps are used to store non-sensitive application configuration parameters. Think of config files managed by Kubernetes and you are already close."),(0,r.kt)("h2",{id:"creating-a-configmap"},"Creating a ConfigMap"),(0,r.kt)("p",null,"There are multiple ways of creating a ConfigMap. They can be created from files, directories or by providing values directly using the command line ","[3]","."),(0,r.kt)("p",null,"Although ConfigMaps are key value pairs, this does not mean that values have to be very short. In fact, a value can contain content ",(0,r.kt)("strong",{parentName:"p"},"up to 1 megabyte of non-binary UTF-8 text"),"."),(0,r.kt)("h3",{id:"creating-a-configmap-from-a-configuration-file"},"Creating a ConfigMap from a Configuration File"),(0,r.kt)("p",null,"The example ",(0,r.kt)("inlineCode",{parentName:"p"},"20-config-file.conf")," contains an imaginary configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# This is an exemplary config file\n\nnumber-of-requests = 20\nvery-import-switch = true\n")),(0,r.kt)("p",null,"To import the config file into a ConfigMap execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create configmap config-example-1 --from-file=20-config-file.conf\n")),(0,r.kt)("p",null,"To verify that the ConfigMap has been created successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get configmaps config-example-1 -o yaml\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-o yaml")," switch has the effect that not only the ConfigMap is listed but also its content shown. You should see a section ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," contain the content of the imported configuration file."),(0,r.kt)("h3",{id:"creating-a-configmap-from-command-line-literals"},"Creating a ConfigMap from Command Line Literals"),(0,r.kt)("p",null,"It is also possible to specify ConfigMaps using command line literals:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create configmap config-example-2 --from-literal=number-of-requests=20 --from-literal=very-important-switch=true\n")),(0,r.kt)("p",null,"See yourself how the key values pairs have been joined into a ConfigMap:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get configmaps config-example-2 -o yaml\n")),(0,r.kt)("h2",{id:"deleting-a-configmap"},"Deleting a ConfigMap"),(0,r.kt)("p",null,"Deleting a ConfigMap is simple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete configmap config-example-1\nkubectl delete configmap config-example-2\n")),(0,r.kt)("h2",{id:"accessing-configmaps"},"Accessing ConfigMaps"),(0,r.kt)("p",null,"Once a ConfigMap is created Kubernetes offers several access mechanisms to applications."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Env Variable"),(0,r.kt)("li",{parentName:"ul"},"Filesystem")),(0,r.kt)("p",null,"In order to grant an application access to a ConfigMap it must be told which ConfigMap to access and which mechanism is to be used. This is done in the Pod spec:"),(0,r.kt)("p",null,"See YAML file: ",(0,r.kt)("inlineCode",{parentName:"p"},"40-pod-with-config-map-env.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox-config\nspec:\n  containers:\n    - image: busybox\n      name: busybox-config-container\n      command:\n        - 'env'\n      env:\n        - name: NUMBER_OF_REQUESTS\n          valueFrom:\n            configMapKeyRef:\n              name: config-example-2\n              key: number-of-requests\n        - name: VERY_IMPORTANT_SWITCH\n          valueFrom:\n            configMapKeyRef:\n              name: config-example-2\n              key: very-important-switch\n  restartPolicy: Never\n")),(0,r.kt)("p",null,"Apply the YAML file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f 40-pod-with-config-map-env.yml\n")),(0,r.kt)("p",null,"Verify whether the Pod has been created successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get pod busybox-config\n")),(0,r.kt)("p",null,"You should see an error with the ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS")," field indicating ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateContainerConfigError"),". This gives you the opportunity to think about how a failing Pod can be investigated. Maybe it's worth having a look at the Pod's log output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl logs busybox-config\n")),(0,r.kt)("p",null,"But the output is disappointing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'error: the server doesn\'t have a resource type "logs"\n')),(0,r.kt)("p",null,"Why are there no logs?"),(0,r.kt)("p",null,"The answer is because there is no Pod that could produce logs as ",(0,r.kt)("strong",{parentName:"p"},"the Pod creation failed"),". At this stage the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl log")," command is not helpful."),(0,r.kt)("p",null,"As a general utility to investigate Kubernetes objects - not only Pod objects - the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe")," command is very handy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl describe Pod busybox-config\n")),(0,r.kt)("p",null,"At the end of the output a tabular paragraph ",(0,r.kt)("inlineCode",{parentName:"p"},"Events")," tells us about the lifecycle events of our ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox-config")," Pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Error: configmap "config-example-2" not found\n')),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("p",null,"Try to fix the above ",(0,r.kt)("em",{parentName:"p"},"ConfigMap not found")," issue."),(0,r.kt)("p",null,"If you have fixed the issue, the container named ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox-config")," should have been started successfully."),(0,r.kt)("p",null,"Then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl logs busybox-config\n")),(0,r.kt)("p",null,"Should return the environment variables seen by the container inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox-config")," Pod. The listing should include:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NUMBER_OF_REQUESTS=20\nVERY_IMPORTANT_SWITCH=true\n")),(0,r.kt)("p",null,"Also have a look at all the other environment variables added by Kubernetes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nHOSTNAME=busybox-config\nAPP_GAMMA_SERVICE_PORT_8080_TCP_PORT=8080\nKUBERNETES_SERVICE_HOST=10.100.200.1\nKUBERNETES_PORT_443_TCP_PROTO=tcp\nAPP_GAMMA_SERVICE_SERVICE_HOST=10.100.200.246\nAPP_GAMMA_SERVICE_PORT_8080_TCP=tcp://10.100.200.246:8080\nKUBERNETES_SERVICE_PORT_HTTPS=443\nAPP_GAMMA_SERVICE_PORT_8080_TCP_PROTO=tcp\nAPP_GAMMA_SERVICE_PORT_8080_TCP_ADDR=10.100.200.246\nKUBERNETES_PORT=tcp://10.100.200.1:443\nKUBERNETES_PORT_443_TCP_ADDR=10.100.200.1\nAPP_GAMMA_SERVICE_SERVICE_PORT=8080\nAPP_GAMMA_SERVICE_PORT=tcp://10.100.200.246:8080\nKUBERNETES_SERVICE_PORT=443\nKUBERNETES_PORT_443_TCP=tcp://10.100.200.1:443\nKUBERNETES_PORT_443_TCP_PORT=443\nHOME=/root\n")),(0,r.kt)("p",null,"It's worth remembering that Kubernetes provides you with context information of the execution environment."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Twelve Factor App, ",(0,r.kt)("a",{parentName:"li",href:"https://12factor.net/"},"https://12factor.net/")),(0,r.kt)("li",{parentName:"ol"},"Environment Variables, Wikipedia, ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Environment_variable"},"https://en.wikipedia.org/wiki/Environment_variable")),(0,r.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Configure a Pod to Use a ConfigMap, ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"},"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"))))}k.isMDXComponent=!0}}]);