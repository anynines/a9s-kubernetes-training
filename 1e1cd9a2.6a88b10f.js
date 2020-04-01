(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(1),i=(t(0),t(138));const o={id:"configmaps",title:"ConfigMaps"},r={id:"kubernetes/60-configmaps-and-secrets/configmaps",title:"ConfigMaps",description:"ConfigMaps are used to store non-sensitive application configuration parameters. Think of config files managed by Kubernetes and you are already close.",source:"@site/docs/kubernetes/60-configmaps-and-secrets/15-config-maps.md",permalink:"/kubernetes/60-configmaps-and-secrets/configmaps",sidebar:"docs",previous:{title:"ConfigMaps and Secrets",permalink:"/kubernetes/60-configmaps-and-secrets/configmaps-and-secrets"},next:{title:"Exercise Explanation",permalink:"/kubernetes/60-configmaps-and-secrets/exercise-explanation"}},c=[{value:"Creating a ConfigMap",id:"creating-a-configmap",children:[{value:"Creating a ConfigMap from a Configuration File",id:"creating-a-configmap-from-a-configuration-file",children:[]},{value:"Creating a ConfigMap from Command Line Literals",id:"creating-a-configmap-from-command-line-literals",children:[]}]},{value:"Deleting a ConfigMap",id:"deleting-a-configmap",children:[]},{value:"Accessing ConfigMaps",id:"accessing-configmaps",children:[]},{value:"Exercise",id:"exercise",children:[]},{value:"Links",id:"links",children:[]}],l={rightToc:c};function b({components:e,...n}){return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ConfigMaps are used to store non-sensitive application configuration parameters. Think of config files managed by Kubernetes and you are already close."),Object(i.b)("h2",{id:"creating-a-configmap"},"Creating a ConfigMap"),Object(i.b)("p",null,"There are multiple ways of creating a ConfigMap. They can be created from files, directories or by providing values directly using the command line ","[3]",". "),Object(i.b)("p",null,"Although ConfigMap are key value pairs, this does not mean that values have to be very short. In fact, a value can contain content ",Object(i.b)("strong",{parentName:"p"},"up to 1 megabyte of non-binary UTF-8 text"),"."),Object(i.b)("h3",{id:"creating-a-configmap-from-a-configuration-file"},"Creating a ConfigMap from a Configuration File"),Object(i.b)("p",null,"The example ",Object(i.b)("inlineCode",{parentName:"p"},"20-config-file.conf")," contains an imaginary configuration file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"# This is an exemplary config file\n\nnumber-of-requests = 20\nvery-import-switch = true\n")),Object(i.b)("p",null,"To import the config file into a ConfigMap execute the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create configmap config-example-1 --from-file=20-config-file.conf\n")),Object(i.b)("p",null,"To verify that the ConfigMap has been created successfully:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get configmaps config-example-1 -o yaml\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"-o yaml")," switch has the effect that not only the ConfigMap is listed but also its content shown. You should see a section ",Object(i.b)("inlineCode",{parentName:"p"},"data")," contain the content of the imported configuration file."),Object(i.b)("h3",{id:"creating-a-configmap-from-command-line-literals"},"Creating a ConfigMap from Command Line Literals"),Object(i.b)("p",null,"It is also possible to specify ConfigMaps using command line literals:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create configmap config-example-2 --from-literal=number-of-requests=20 --from-literal=very-important-switch=true \n")),Object(i.b)("p",null,"See yourself how the key values pairs have been joined into a ConfigMap:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create configmap config-example-1 --from-file=20-config-file.conf\n")),Object(i.b)("h2",{id:"deleting-a-configmap"},"Deleting a ConfigMap"),Object(i.b)("p",null,"Deleting a ConfigMap is simple: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl delete configmap config-example-1\nkubectl delete configmap config-example-2\n")),Object(i.b)("h2",{id:"accessing-configmaps"},"Accessing ConfigMaps"),Object(i.b)("p",null,"Once a ConfigMap is created Kubernetes offers several access mechanisms to applications."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Env Variable "),Object(i.b)("li",{parentName:"ul"},"Filesystem")),Object(i.b)("p",null,"In order to grand an application access to a ConfigMap it must best told which ConfigMap to access and which mechanism is to be used. This is done in the Pod spec:"),Object(i.b)("p",null,"See YAML file: ",Object(i.b)("inlineCode",{parentName:"p"},"40-pod-with-config-map-env.yml"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox-config\nspec:\n  containers:\n    - image: busybox \n      name: busybox-config-container\n      command:\n        - "env"        \n      env:\n        - name: NUMBER_OF_REQUESTS\n          valueFrom:\n            configMapKeyRef:\n              name: config-example-1\n              key: number-of-requests\n        - name: VERY_IMPORTANT_SWITCH\n          valueFrom:\n            configMapKeyRef:\n              name: config-example-1\n              key: very-important-switch\n  restartPolicy: Never\n')),Object(i.b)("p",null,"Apply the YAML file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f 40-pod-with-config-map-env.yml\n")),Object(i.b)("p",null,"Verify whether the Pod has been created successfully:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pod busybox-config\n")),Object(i.b)("p",null,"You should see an error with the ",Object(i.b)("inlineCode",{parentName:"p"},"STATUS")," field indicating ",Object(i.b)("inlineCode",{parentName:"p"},"CreateContainerConfigError"),". This gives you the opportunity to think about how a failing Pod can be investigated. Maybe it's worth having a look at the Pod's log output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl logs busybox-config\n")),Object(i.b)("p",null,"But the output is disappointing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'error: the server doesn\'t have a resource type "logs"\n')),Object(i.b)("p",null,"Why are there no logs? "),Object(i.b)("p",null,"The answer is because there is no Pod that could produce logs as ",Object(i.b)("strong",{parentName:"p"},"the Pod creation failed"),". At this stage the ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl log")," command is not helpful."),Object(i.b)("p",null,"As a general utility to investigate Kubernetes objects - not only Pod objects - the ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl describe")," command is very handy:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe Pod busybox-config\n")),Object(i.b)("p",null,"At the end of the output a tabular paragraph ",Object(i.b)("inlineCode",{parentName:"p"},"Events")," tells us about the lifecycle events of our ",Object(i.b)("inlineCode",{parentName:"p"},"busybox-config")," Pod:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'Error: configmap "config-example-3" not found\n')),Object(i.b)("h2",{id:"exercise"},"Exercise"),Object(i.b)("p",null,"Try to fix the above ",Object(i.b)("em",{parentName:"p"},"configmap not found")," issue."),Object(i.b)("p",null,"If you have fixed the issue, the container named ",Object(i.b)("inlineCode",{parentName:"p"},"busybox-config")," should have been started successfully."),Object(i.b)("p",null,"Then:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl logs busybox-config\n")),Object(i.b)("p",null,"Should return the environment variables seen by the container inside the ",Object(i.b)("inlineCode",{parentName:"p"},"busybox-config")," Pod. The listing should include:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"NUMBER_OF_REQUESTS=20\nVERY_IMPORTANT_SWITCH=true\n")),Object(i.b)("p",null,"Also have a look at all the other environment variables added by Kubernetes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nHOSTNAME=busybox-config\nAPP_GAMMA_SERVICE_PORT_8080_TCP_PORT=8080\nKUBERNETES_SERVICE_HOST=10.100.200.1\nKUBERNETES_PORT_443_TCP_PROTO=tcp\nAPP_GAMMA_SERVICE_SERVICE_HOST=10.100.200.246\nAPP_GAMMA_SERVICE_PORT_8080_TCP=tcp://10.100.200.246:8080\nKUBERNETES_SERVICE_PORT_HTTPS=443\nAPP_GAMMA_SERVICE_PORT_8080_TCP_PROTO=tcp\nAPP_GAMMA_SERVICE_PORT_8080_TCP_ADDR=10.100.200.246\nKUBERNETES_PORT=tcp://10.100.200.1:443\nKUBERNETES_PORT_443_TCP_ADDR=10.100.200.1\nAPP_GAMMA_SERVICE_SERVICE_PORT=8080\nAPP_GAMMA_SERVICE_PORT=tcp://10.100.200.246:8080\nKUBERNETES_SERVICE_PORT=443\nKUBERNETES_PORT_443_TCP=tcp://10.100.200.1:443\nKUBERNETES_PORT_443_TCP_PORT=443\nHOME=/root  \n")),Object(i.b)("p",null,"It's worth remembering that Kubernetes provides you with context information of the execution environment."),Object(i.b)("h2",{id:"links"},"Links"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The Twelve Factor App, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://12factor.net/"}),"https://12factor.net/")),Object(i.b)("li",{parentName:"ol"},"Environment Variables, Wikipedia, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Environment_variable"}),"https://en.wikipedia.org/wiki/Environment_variable")),Object(i.b)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Configure a Pod to Use a ConfigMap, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"}),"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"))))}b.isMDXComponent=!0},138:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),p=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=p(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=a,m=s["".concat(r,".").concat(f)]||s[f]||u[f]||o;return t?i.a.createElement(m,c({ref:n},b,{components:t})):i.a.createElement(m,c({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<o;b++)r[b]=t[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);