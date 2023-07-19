"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7238],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return y}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,y=u["".concat(i,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:l,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7920:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var a,l=n(7462),r=n(3366),o=(n(7294),n(3905)),p=["components"],i={id:"deployments",title:"Deployments"},s=void 0,m={unversionedId:"kubernetes/deployments/deployments",id:"kubernetes/deployments/deployments",title:"Deployments",description:"Related Videos",source:"@site/docs/kubernetes/50-deployments/10-deployments.md",sourceDirName:"kubernetes/50-deployments",slug:"/kubernetes/deployments/deployments",permalink:"/kubernetes/deployments/deployments",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"deployments",title:"Deployments"},sidebar:"docs",previous:{title:"Tidying Up",permalink:"/kubernetes/replicaset-and-service/tidyup"},next:{title:"ConfigMaps and Secrets",permalink:"/kubernetes/configmaps-and-secrets/configmaps-and-secrets"}},u={},c=[{value:"Related Videos",id:"related-videos",level:2},{value:"Creating the First Deployment",id:"creating-the-first-deployment",level:2},{value:"Scaling the Deployment",id:"scaling-the-deployment",level:2},{value:"Exercise",id:"exercise",level:3},{value:"Updating the Deployment with a new Application Version",id:"updating-the-deployment-with-a-new-application-version",level:2},{value:"Controlling a Rollout",id:"controlling-a-rollout",level:2},{value:"Rollout History",id:"rollout-history",level:2},{value:"Ups, Kaputt! Undoing a Rollout",id:"ups-kaputt-undoing-a-rollout",level:2},{value:"Tidying Up - Part 1 of 2",id:"tidying-up---part-1-of-2",level:2},{value:"Deployment Strategies",id:"deployment-strategies",level:2},{value:"Recreate Strategy",id:"recreate-strategy",level:3},{value:"RollingUpdate Strategy",id:"rollingupdate-strategy",level:3},{value:"Other Strategies",id:"other-strategies",level:3},{value:"Tidying Up - Part 2 of 2",id:"tidying-up---part-2-of-2",level:2},{value:"Links",id:"links",level:2}],d=(a="VideoContainer",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),y={toc:c},h="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)(h,(0,l.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"related-videos"},"Related Videos"),(0,o.kt)(d,{list:[{src:"https://www.youtube-nocookie.com/embed/DoQIvm8dBw0",title:"Deployments Part 1"},{src:"https://www.youtube-nocookie.com/embed/cpzs02iu-RE",title:"Deployments Part 2"},{src:"https://www.youtube-nocookie.com/embed/l8FrEoibmGE",title:"Deployments Part 3"},{src:"https://www.youtube-nocookie.com/embed/sd_dmHCTfrI",title:"Deployments Part 4"},{src:"https://www.youtube-nocookie.com/embed/VYlC2yK2r7s",title:"Deployments Part 5"},{src:"https://www.youtube-nocookie.com/embed/zXLsl-4l0yw",title:"Deployments Part 6"},{src:"https://www.youtube-nocookie.com/embed/VjLheCWpAM8",title:"Deployments Part 7"}],mdxType:"VideoContainer"}),(0,o.kt)("p",null,"The Kubernetes Deployment resource is designed to support the continuos delivery of application releases beyond the abilities of Pods and ReplicaSets."),(0,o.kt)("p",null,"Using a Deployment, the deployment process is controlled by a deployment controller running within the Kubernetes cluster."),(0,o.kt)("h2",{id:"creating-the-first-deployment"},"Creating the First Deployment"),(0,o.kt)("p",null,"Create the first deployment by deploying the application version ",(0,o.kt)("strong",{parentName:"p"},'"blue"'),"."),(0,o.kt)("p",null,"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"20-deployment-blue.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-gamma\n  labels:\n    app: app-gamma\nspec:\n  selector:\n    matchLabels:\n      run: app-gamma\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        run: app-gamma\n    spec:\n      containers:\n        - name: app-gamma-blue\n          image: fischerjulian/smpl-go-web:blue\n          ports:\n            - containerPort: 8080\n")),(0,o.kt)("p",null,"Apply it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f 20-deployment-blue.yaml\n")),(0,o.kt)("p",null,"Verify the deployment has been successful:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get deployments\n")),(0,o.kt)("p",null,"It's also worth having a look at the list of ReplicaSets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get replicasets\n")),(0,o.kt)("p",null,"You should also find a ReplicaSet ",(0,o.kt)("strong",{parentName:"p"},"blue")," as a Kubernetes Deployment internally creates a ReplicaSet which in turn creates one or more Pods creating one or more containers.\nSo it's no surprise to find ",(0,o.kt)("strong",{parentName:"p"},"blue")," Pods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods\n")),(0,o.kt)("p",null,"Now in order to access the application we also have to create a service and an ingress again, just like we did in the ReplicaSet lesson."),(0,o.kt)("p",null,"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"40-service.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: app-gamma-service\nspec:\n  selector:\n    run: app-gamma\n  ports:\n    - port: 8080\n")),(0,o.kt)("p",null,"Apply it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f 40-service.yaml\n")),(0,o.kt)("p",null,"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"50-ingress.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: app-gamma-ingress\n  annotations:\n    # use the shared ingress-nginx\n    kubernetes.io/ingress.class: 'nginx'\nspec:\n  tls:\n    - hosts:\n        - myapp.example.org\n      secretName: k9s-anynines-com-tls\n  rules:\n    - host: myapp.example.org\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: app-gamma-service\n                port:\n                  number: 8080\n")),(0,o.kt)("p",null,"Apply it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f 50-ingress.yaml\n")),(0,o.kt)("p",null,"Obtain the URL with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get ingresses\n")),(0,o.kt)("p",null,"Browse to the URL or use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --insecure https://myapp.example.org\n")),(0,o.kt)("p",null,'and it should say "',(0,o.kt)("strong",{parentName:"p"},"I am blue"),'".'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note : We are reusing the DNS entry in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," so make sure it is still there and valid.")),(0,o.kt)("h2",{id:"scaling-the-deployment"},"Scaling the Deployment"),(0,o.kt)("p",null,"So far we have declared the desired state of our resources such as ReplicaSets, Services and Deployments using YAML files and applied them use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply -f <filename>"),". So this is what we will try again. A copy of the file ",(0,o.kt)("inlineCode",{parentName:"p"},"20-deployment-blue.yaml")," with an increased ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," setting can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"60-deployment-blue-scale-out.yaml"),". All it does is to set ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas: 2")," indicating we desire two application instances to be running."),(0,o.kt)("p",null,"So let's give it a try!"),(0,o.kt)("p",null,"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"60-deployment-blue-scale-out.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-gamma\n  labels:\n    app: app-gamma\nspec:\n  selector:\n    matchLabels:\n      run: app-gamma\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        run: app-gamma\n    spec:\n      containers:\n        - name: app-gamma-blue\n          image: fischerjulian/smpl-go-web:blue\n          ports:\n            - containerPort: 8080\n")),(0,o.kt)("p",null,"Apply it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f 60-deployment-blue-scale-out.yaml\n")),(0,o.kt)("p",null,"And you will see the following error message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Warning: kubectl apply should be used on resource created by either  kubectl create --save-config or kubectl apply deployment.extensions/app-gamma configured\n")),(0,o.kt)("p",null,"Try the following command instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl replace -f 60-deployment-blue-scale-out.yaml --save-config\n")),(0,o.kt)("p",null,"This overwrites the existing spec stored in the Kubernetes cluster with the newly provided one. See ","[1]"," for more details on this."),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-config")," has been used, subsequent updates can be performed using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply -f")," again."),(0,o.kt)("h3",{id:"exercise"},"Exercise"),(0,o.kt)("p",null,"Change the replica count to 3 and update your deployment using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply -f"),". Did it work?"),(0,o.kt)("h2",{id:"updating-the-deployment-with-a-new-application-version"},"Updating the Deployment with a new Application Version"),(0,o.kt)("p",null,"A successful real world application is likely to be under constant development. Subsequently, the application team has to deploy new software versions regularly."),(0,o.kt)("p",null,"The new software version is delivered by creating a new container version. Compare the YAML file ",(0,o.kt)("inlineCode",{parentName:"p"},"70-deployment-green.yaml")," with the previous version and look for differences. You will see that the container name and container image (tag) have changed. Hence, the team had to build a new container version and upload it to the default container registry of the Kubernetes cluster which is ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"https://hub.docker.com/"),", by default."),(0,o.kt)("p",null,"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"70-deployment-green.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-gamma\n  labels:\n    app: app-gamma\nspec:\n  selector:\n    matchLabels:\n      run: app-gamma\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        run: app-gamma\n    spec:\n      containers:\n        - name: app-gamma-green\n          image: fischerjulian/smpl-go-web:green\n          ports:\n            - containerPort: 8080\n")),(0,o.kt)("p",null,"Perform the update:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f 70-deployment-green.yaml\n")),(0,o.kt)("p",null,"Try running the following command directly after running the update:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl describe deployment app-gamma\n")),(0,o.kt)("p",null,"You should see that the fields ",(0,o.kt)("inlineCode",{parentName:"p"},"OldReplicaSets")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NewReplicaSet")," both have a value, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"app-gamma-7464575685")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app-gamma-75457966b7"),".\nAfter the deployment has been completed successfully this will be different: ",(0,o.kt)("inlineCode",{parentName:"p"},"OldReplicaSets:  <none>"),". This also tells ",(0,o.kt)("strong",{parentName:"p"},"how the rollout works: by replacing underlying ReplicaSets"),". At this point it becomes clear what the added value of a Deployment is. Deployments stay, ReplicaSets come and go. ",(0,o.kt)("strong",{parentName:"p"},"The Deployment provides a Kubernetes entity that allows you to manage the lifecycle of an application across application versions each represented by a dedicated ReplicaSet"),"."),(0,o.kt)("p",null,"The status of a rollout can be retrieved by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl rollout status deployments app-gamma\n")),(0,o.kt)("p",null,"Which will provide you with a brief success message such as ",(0,o.kt)("inlineCode",{parentName:"p"},'deployment "app-gamma" successfully rolled out'),"."),(0,o.kt)("p",null,"Reloading the app in your browser should now tell you ",(0,o.kt)("inlineCode",{parentName:"p"},'"I am green."'),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note, if you reload your browser repeatedly you may see both blue and green application versions alternating.")," This is due to the default ",(0,o.kt)("em",{parentName:"p"},"Deployment Strategy")," which will be covered later in detail."),(0,o.kt)("h2",{id:"controlling-a-rollout"},"Controlling a Rollout"),(0,o.kt)("p",null,"More control is offered with commands such as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl rollout pause deployments app-gamma\n")),(0,o.kt)("p",null,"and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl rollout resume deployments app-gamma\n")),(0,o.kt)("p",null,"which become handy if the rollout produces unpredicted behavior, for example."),(0,o.kt)("h2",{id:"rollout-history"},"Rollout History"),(0,o.kt)("p",null,"Deployments also collect metadata on which rollouts have been performed in the past:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl rollout history deployment app-gamma\n")),(0,o.kt)("p",null,"This allows you to dig into a particular revision:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl rollout history deployment app-gamma --revision 1\n")),(0,o.kt)("p",null,"And provides you information about the structure and annotation of the ReplicaSet corresponding to the given revision."),(0,o.kt)("h2",{id:"ups-kaputt-undoing-a-rollout"},"Ups, Kaputt! Undoing a Rollout"),(0,o.kt)("p",null,"While it is possible to pause and resume a rollout, sometimes it may be necessary to undo it. ",(0,o.kt)("strong",{parentName:"p"},"Undoing a rollout is another major advantage of using a Deployment over plain ReplicaSets"),'. As the Deployment knows which ReplicaSets have been representing previous versions it\'s easy to bring them back to "life".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl rollout undo deployments app-gamma\n")),(0,o.kt)("p",null,'And the browser should turn from the "green" back to the "blue" version.'),(0,o.kt)("p",null,"While the ",(0,o.kt)("inlineCode",{parentName:"p"},"rollout undo")," option does the trick of going back to the last rollout, it has a bad taste to it. The command modifies the live Kubernetes objects without reflecting this in our local YAML files."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'The preferable alternative would be to deploy the "green" version by applying it\'s original YAML file')," and thus creating another rollout instead of a rollback."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f 20-deployment-blue.yaml\n")),(0,o.kt)("p",null,"Check the status of the deployment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl rollout status deployments app-gamma\n")),(0,o.kt)("h2",{id:"tidying-up---part-1-of-2"},"Tidying Up - Part 1 of 2"),(0,o.kt)("p",null,"Remove the Deployment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl delete -f 20-deployment-blue.yaml\n")),(0,o.kt)("h2",{id:"deployment-strategies"},"Deployment Strategies"),(0,o.kt)("p",null,"The deployment strategy determines how the Kubernetes deployment controller starts and stops ReplicaSets during an application rollout."),(0,o.kt)("p",null,"Two strategies are provided by default:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recreate"),(0,o.kt)("li",{parentName:"ul"},"RollingUpgrade")),(0,o.kt)("h3",{id:"recreate-strategy"},"Recreate Strategy"),(0,o.kt)("p",null,"The Recreate strategy is straight forward. The existing ReplicaSet with all its belonging Pods is destroyed and only after the termination of the last Pod, Pods of the new ReplicaSet will be started."),(0,o.kt)("p",null,"For this reason the ",(0,o.kt)("inlineCode",{parentName:"p"},"Recreate"),"-strategy is not recommended for productive use. However, there are ",(0,o.kt)("strong",{parentName:"p"},"cases where this strategy makes sense"),". For example, ",(0,o.kt)("strong",{parentName:"p"},"if avoiding the coexistence of two application version is necessary"),"."),(0,o.kt)("p",null,"Create a first deployment with a file ",(0,o.kt)("inlineCode",{parentName:"p"},"80-deployment-blue-recreate.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-gamma\n  labels:\n    app: app-gamma\nspec:\n  selector:\n    matchLabels:\n      run: app-gamma\n  replicas: 2\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        run: app-gamma\n    spec:\n      containers:\n        - name: app-gamma-blue\n          image: fischerjulian/smpl-go-web:blue\n          ports:\n            - containerPort: 8080\n")),(0,o.kt)("p",null,"Apply it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f 80-deployment-blue-recreate.yaml --save-config\n")),(0,o.kt)("p",null,"Update the deployment by creating a file ",(0,o.kt)("inlineCode",{parentName:"p"},"90-deployment-green-recreate.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-gamma\n  labels:\n    app: app-gamma\nspec:\n  selector:\n    matchLabels:\n      run: app-gamma\n  replicas: 2\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        run: app-gamma\n    spec:\n      containers:\n        - name: app-gamma-green\n          image: fischerjulian/smpl-go-web:green\n          ports:\n            - containerPort: 8080\n")),(0,o.kt)("p",null,"And apply it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f 90-deployment-green-recreate.yaml\n")),(0,o.kt)("p",null,"The complete termination of all Pods of one ReplicaSet before creating the new ReplicaSet with new Pods ",(0,o.kt)("strong",{parentName:"p"},"leads to a downtime of the application during the deployment"),". This is the case even when the number of replicas is set to a value greater than 1. You can find a great ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ContainerSolutions/k8s-deployment-strategies/tree/master/recreate"},"illustration of the Recreate deployment strategy here"),"."),(0,o.kt)("h3",{id:"rollingupdate-strategy"},"RollingUpdate Strategy"),(0,o.kt)("p",null,"The RollingUpdate strategy terminates a number of Pods from the old (blue) ReplicaSet and start a number of new Pods with the new version (green). So gradually the new application version is rolled out."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Be aware:"),' The gradual or "rolling" update means that ',(0,o.kt)("strong",{parentName:"p"},"Pods of both the old (blue) and new (green) versions are being served traffic simultaneously"),". This implies that two adjacent application versions need to coexist peacefully.\nIf the new (green) version requires a different database schema, for example, this may become problematic as a schema migration can either be executed or not. The application therefore should be architected in a way that schema migrations happen gradually over multiple versions while maintaining compatibility among adjacent versions."),(0,o.kt)("p",null,"Engineers must decide yourself whether the increased application availability is worth the increased effort in development."),(0,o.kt)("h3",{id:"other-strategies"},"Other Strategies"),(0,o.kt)("p",null,"There are many more possible deployment patterns. They do not represent strategies in the sense that they can be pasted as a ",(0,o.kt)("inlineCode",{parentName:"p"},"strategy: <my-strategy>")," into the deployment specification but rather represent higher level methodologies on how to perform a rollout ","[3][4]",". This includes patterns such as blue-green and canary deployments."),(0,o.kt)("h2",{id:"tidying-up---part-2-of-2"},"Tidying Up - Part 2 of 2"),(0,o.kt)("p",null,"All resources of this lesson can be deleted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl delete deployment app-gamma\nkubectl delete -f 50-ingress.yaml\nkubectl delete -f 40-service.yaml\n")),(0,o.kt)("p",null,"You can also now remove your local DNS entry, by removing it from ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nano /etc/hosts\n")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, Working With Objects, ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/"},"https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/")),(0,o.kt)("li",{parentName:"ol"},"Kubernetes Up & Running, 2nd Edition, O'Reilly, 2019, ",(0,o.kt)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/kubernetes-up-and/9781492046523/"},"https://learning.oreilly.com/library/view/kubernetes-up-and/9781492046523/")),(0,o.kt)("li",{parentName:"ol"},"Deployment Strategies, ContainerSolutions, ",(0,o.kt)("a",{parentName:"li",href:"https://blog.container-solutions.com/kubernetes-deployment-strategies"},"https://blog.container-solutions.com/kubernetes-deployment-strategies")),(0,o.kt)("li",{parentName:"ol"},"Kubernetes Patterns, O'Reilly, 2019, ",(0,o.kt)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050278/"},"https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050278/"))))}k.isMDXComponent=!0}}]);