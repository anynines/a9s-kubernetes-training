(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),l=n(9),r=(n(0),n(198)),o={id:"deployments",title:"Deployments"},i={id:"kubernetes/50-deployments/deployments",isDocsHomePage:!1,title:"Deployments",description:"The Kubernetes Deployment resource is designed to support the continous delivery of application releases beyond the abilities of Pods and ReplicaSets.",source:"@site/docs/kubernetes/50-deployments/10-deployments.md",permalink:"/kubernetes/50-deployments/deployments",sidebar:"docs",previous:{title:"Tyding Up",permalink:"/kubernetes/40-replicaset-and-service/tidyup"},next:{title:"ConfigMaps and Secrets",permalink:"/kubernetes/60-configmaps-and-secrets/configmaps-and-secrets"}},p=[{value:"Creating the First Deployment",id:"creating-the-first-deployment",children:[]},{value:"Scaling the Deployment",id:"scaling-the-deployment",children:[{value:"Exercise",id:"exercise",children:[]}]},{value:"Updating the Deployment with a new Application Version",id:"updating-the-deployment-with-a-new-application-version",children:[]},{value:"Controlling a Rollout",id:"controlling-a-rollout",children:[]},{value:"Rollout History",id:"rollout-history",children:[]},{value:"Ups, Kaputt! Undoing a Rollout",id:"ups-kaputt-undoing-a-rollout",children:[]},{value:"Tidying Up - Part 1 of 2",id:"tidying-up---part-1-of-2",children:[]},{value:"Deployment Strategies",id:"deployment-strategies",children:[{value:"Recreate Strategy",id:"recreate-strategy",children:[]},{value:"RollingUpdate Strategy",id:"rollingupdate-strategy",children:[]},{value:"Other Strategies",id:"other-strategies",children:[]}]},{value:"Tyding Up - Part 2 of 2",id:"tyding-up---part-2-of-2",children:[]},{value:"Links",id:"links",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Kubernetes Deployment resource is designed to support the continous delivery of application releases beyond the abilities of Pods and ReplicaSets."),Object(r.b)("p",null,"Using a Deployment, the deployment process is controlled by a deployment controller running within the Kubernetes cluster."),Object(r.b)("h2",{id:"creating-the-first-deployment"},"Creating the First Deployment"),Object(r.b)("p",null,"Create the first deployment by deploying the application version ",Object(r.b)("strong",{parentName:"p"},'"blue"'),"."),Object(r.b)("p",null,"Create a file ",Object(r.b)("inlineCode",{parentName:"p"},"20-deployment-blue.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: app-gamma\n  labels:\n      app: app-gamma\nspec:\n  selector:\n    matchLabels:\n      run: app-gamma\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        run: app-gamma\n    spec:\n      containers:\n      - name: app-gamma-blue\n        image: fischerjulian/smpl-go-web:blue\n        ports:\n            - containerPort: 8080\n")),Object(r.b)("p",null,"Apply it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create -f 20-deployment-blue.yaml\n")),Object(r.b)("p",null,"Verify the deployment has been successful:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get deployments\n")),Object(r.b)("p",null,"It's also worth having a look at the list of ReplicaSets:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get replicasets\n")),Object(r.b)("p",null,"You should also find a ReplicaSet ",Object(r.b)("strong",{parentName:"p"},"blue")," as a Kubernetes Deployment internally creates a ReplicaSet which in turn creates one or more Pods creating one or more containers.\nSo it's no surprise to find ",Object(r.b)("strong",{parentName:"p"},"blue")," Pods:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods\n")),Object(r.b)("p",null,"Now in order to access the application we also have to create a service and an ingress again, just like we did in the ReplicaSet lesson."),Object(r.b)("p",null,"Create a file ",Object(r.b)("inlineCode",{parentName:"p"},"40-service.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: app-gamma-service\nspec:\n  selector:\n    run: app-gamma\n  ports:\n  - port: 8080\n")),Object(r.b)("p",null,"Apply it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f 40-service.yaml\n")),Object(r.b)("p",null,"Create a file ",Object(r.b)("inlineCode",{parentName:"p"},"50-ingress.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: networking.k8s.io/v1beta1 # Kubernetes 1.13+\nkind: Ingress\nmetadata:\n  name: app-gamma-ingress\n  annotations:\n    # use the shared ingress-nginx\n    kubernetes.io/ingress.class: "nginx"\nspec:\n  tls:\n    - hosts:\n      - app-gamma-c9c99a1c-e1d5-4401-8aed-bd54319c7ca7.de.k9s.a9s.eu\n      secretName: k9s-anynines-com-tls\n  rules:\n  - host: app-gamma-c9c99a1c-e1d5-4401-8aed-bd54319c7ca7.de.k9s.a9s.eu\n    http:\n      paths:\n      - path: /\n        backend:\n          serviceName: app-gamma-service\n          servicePort: 8080\n')),Object(r.b)("p",null,"Apply it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f 50-ingress.yaml\n")),Object(r.b)("p",null,"Obtain the URL with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get ingresses\n")),Object(r.b)("p",null,'Browse to the url and it should say "',Object(r.b)("strong",{parentName:"p"},"I am blue"),'".'),Object(r.b)("h2",{id:"scaling-the-deployment"},"Scaling the Deployment"),Object(r.b)("p",null,"So far we have declared the desired state of our resources such as ReplicaSets, Services and Deployments using YAML files and applied them use ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl apply -f <filename>"),". So this is what we will try again. A copy of the file ",Object(r.b)("inlineCode",{parentName:"p"},"20-deployment-blue.yaml")," with an increased ",Object(r.b)("inlineCode",{parentName:"p"},"replicas")," setting can be found in ",Object(r.b)("inlineCode",{parentName:"p"},"60-deployment-blue-scale-out.yaml"),". All it does is to set ",Object(r.b)("inlineCode",{parentName:"p"},"replicas: 2")," indicating we desire two application instances to be running."),Object(r.b)("p",null,"So let's give it a try!"),Object(r.b)("p",null,"Create a file ",Object(r.b)("inlineCode",{parentName:"p"},"60-deployment-blue-scale-out.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: app-gamma\n  labels:\n      app: app-gamma\nspec:\n  selector:\n    matchLabels:\n      run: app-gamma\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        run: app-gamma\n    spec:\n      containers:\n      - name: app-gamma-blue\n        image: fischerjulian/smpl-go-web:blue\n        ports:\n            - containerPort: 8080\n")),Object(r.b)("p",null,"Apply it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f 60-deployment-blue-scale-out.yaml\n")),Object(r.b)("p",null,"And you will see the following error message:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Warning: kubectl apply should be used on resource created by either  kubectl create --save-config or kubectl apply deployment.extensions/app-gamma configured\n")),Object(r.b)("p",null,"Try the following command instead:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl replace -f 60-deployment-blue-scale-out.yaml --save-config\n")),Object(r.b)("p",null,"This overwrites the existing spec stored in the Kubernetes cluster with the newly provided one. See ","[1]"," for more details on this."),Object(r.b)("p",null,"Once ",Object(r.b)("inlineCode",{parentName:"p"},"--save-config")," has been used, subsequent updates can be performed using ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl apply -f")," again."),Object(r.b)("h3",{id:"exercise"},"Exercise"),Object(r.b)("p",null,"Change the replica count to 3 and update your deployment using ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl apply -f"),". Did it work?"),Object(r.b)("h2",{id:"updating-the-deployment-with-a-new-application-version"},"Updating the Deployment with a new Application Version"),Object(r.b)("p",null,"A successful real world application is likely to be under constant development. Subsequently, the application team has to deploy new software versions regularly."),Object(r.b)("p",null,"The new software version is delived by creating a new container version. Compare the YAML file ",Object(r.b)("inlineCode",{parentName:"p"},"70-deployment-green.yaml")," with the previous version and look for differences. You will see that the container name and container image (tag) have changed. Hence, the team had to build a new container version and upload it to the default container registry of the Kubernetes cluster which is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/"}),"https://hub.docker.com/"),", by default."),Object(r.b)("p",null,"Create a file ",Object(r.b)("inlineCode",{parentName:"p"},"70-deployment-green.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: app-gamma\n  labels:\n      app: app-gamma\nspec:\n  selector:\n    matchLabels:\n      run: app-gamma\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        run: app-gamma\n    spec:\n      containers:\n      - name: app-gamma-green\n        image: fischerjulian/smpl-go-web:green\n        ports:\n            - containerPort: 8080\n")),Object(r.b)("p",null,"Perform the update:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f 70-deployment-green.yaml\n")),Object(r.b)("p",null,"Try running the following command directly after running the update:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe deployment app-gamma\n")),Object(r.b)("p",null,"You should see that the fields ",Object(r.b)("inlineCode",{parentName:"p"},"OldReplicaSets")," and ",Object(r.b)("inlineCode",{parentName:"p"},"NewReplicaSet")," both have a value, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"app-gamma-7464575685")," and ",Object(r.b)("inlineCode",{parentName:"p"},"app-gamma-75457966b7"),".\nAfter the deployment has been completed successfully this will be different: ",Object(r.b)("inlineCode",{parentName:"p"},"OldReplicaSets:  <none>"),". This also tells ",Object(r.b)("strong",{parentName:"p"},"how the rollout works: by replacing underlying ReplicaSets"),". At this point it becomes clear what the added value of a Deployment is. Deployments stay, ReplicaSets come and go. ",Object(r.b)("strong",{parentName:"p"},"The Deployment provides a Kubernetes entity that allows you to manage the lifecycle of an application across application versions each represented by a dedicated ReplicaSet"),"."),Object(r.b)("p",null,"The status of a rollout can be retrieved by executing:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl rollout status deployments app-gamma\n")),Object(r.b)("p",null,"Which will provide you with a brief success message such as ",Object(r.b)("inlineCode",{parentName:"p"},'deployment "app-gamma" successfully rolled out'),"."),Object(r.b)("p",null,"Reloading the app in your browser should now tell you ",Object(r.b)("inlineCode",{parentName:"p"},'"I am green."'),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note, if you reload your browser repeatedly you may see both blue and green application versions alternating.")," This is due to the default ",Object(r.b)("em",{parentName:"p"},"Deployment Strategy")," which will be covered later in detail."),Object(r.b)("h2",{id:"controlling-a-rollout"},"Controlling a Rollout"),Object(r.b)("p",null,"More control is offered with commands such as"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl rollout pause deployments app-gamma\n")),Object(r.b)("p",null,"and"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl rollout resume deployments app-gamma\n")),Object(r.b)("p",null,"which become handy if the rollout produces unpredicated behavior, for example."),Object(r.b)("h2",{id:"rollout-history"},"Rollout History"),Object(r.b)("p",null,"Deployments also collect metadata on which rollouts have been performed in the past:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl rollout history deployment app-gamma\n")),Object(r.b)("p",null,"This allows you to dig into a particular revision:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl rollout history deployment app-gamma --revision 1\n")),Object(r.b)("p",null,"And provides you information about the structure and annotation of the ReplicaSet corresponding to the given revision."),Object(r.b)("h2",{id:"ups-kaputt-undoing-a-rollout"},"Ups, Kaputt! Undoing a Rollout"),Object(r.b)("p",null,"While it is possible to pause and resume a rollout, sometimes it may be necessary to undo it. ",Object(r.b)("strong",{parentName:"p"},"Undoing a rollout is another major advantage of using a Deployment over plain ReplicaSets"),'. As the Deployment knows which ReplicaSets have been representing previous versions it\'s easy to bring them back to "life".'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl rollout undo deployments app-gamma\n")),Object(r.b)("p",null,'And the browser should turn from the "green" back to the "blue" version.'),Object(r.b)("p",null,"While the ",Object(r.b)("inlineCode",{parentName:"p"},"rollout undo")," option does the trick of going back to the last rollout, it has a bad taste to it. The command modifies the live Kubernetes objects without reflecting this in our local YAML files."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},'The preferable alternative would be to deploy the "green" version by applying it\'s original YAML file')," and thus creating another rollout instead of a rollback."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f 20-deployment-blue.yaml\n")),Object(r.b)("p",null,"Check the status of the deployment:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl rollout status deployments app-gamma\n")),Object(r.b)("h2",{id:"tidying-up---part-1-of-2"},"Tidying Up - Part 1 of 2"),Object(r.b)("p",null,"Remove the Deployment:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl delete -f 20-deployment-blue.yaml\n")),Object(r.b)("h2",{id:"deployment-strategies"},"Deployment Strategies"),Object(r.b)("p",null,"The deployment strategy determines how the Kubernetes deployment controller starts and stops ReplicaSets during an application rollout."),Object(r.b)("p",null,"Two strategies are provided by default:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Recreate"),Object(r.b)("li",{parentName:"ul"},"RollingUpgrade")),Object(r.b)("h3",{id:"recreate-strategy"},"Recreate Strategy"),Object(r.b)("p",null,"The Recreate strategy is straight forward. The existing ReplicaSet with all its belonging Pods is destroyed and only after the termination of the last Pod, Pods of the new ReplicaSet will be started."),Object(r.b)("p",null,"For this reason the ",Object(r.b)("inlineCode",{parentName:"p"},"Recreate"),"-strategy is not recommended for productive use. However, there are ",Object(r.b)("strong",{parentName:"p"},"cases where this strategy makes sense"),". For example, ",Object(r.b)("strong",{parentName:"p"},"if avoiding the coexistence of two application version is necessary"),"."),Object(r.b)("p",null,"Create a first deployment with a file ",Object(r.b)("inlineCode",{parentName:"p"},"80-deployment-blue-recreate.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: app-gamma\n  labels:\n      app: app-gamma\nspec:\n  selector:\n    matchLabels:\n      run: app-gamma\n  replicas: 2\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        run: app-gamma\n    spec:\n      containers:\n      - name: app-gamma-blue\n        image: fischerjulian/smpl-go-web:blue\n        ports:\n            - containerPort: 8080\n")),Object(r.b)("p",null,"Apply it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create -f 80-deployment-blue-recreate.yaml --save-config\n")),Object(r.b)("p",null,"Update the deployment by creating a file ",Object(r.b)("inlineCode",{parentName:"p"},"90-deployment-green-recreate.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: app-gamma\n  labels:\n      app: app-gamma\nspec:\n  selector:\n    matchLabels:\n      run: app-gamma\n  replicas: 2\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        run: app-gamma\n    spec:\n      containers:\n      - name: app-gamma-green\n        image: fischerjulian/smpl-go-web:green\n        ports:\n            - containerPort: 8080\n")),Object(r.b)("p",null,"And apply it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f 90-deployment-green-recreate.yaml\n")),Object(r.b)("p",null,"The complete termination of all Pods of one ReplicaSet before creating the new ReplicaSet with new Pods ",Object(r.b)("strong",{parentName:"p"},"leads to a downtime of the application during the deployment"),". This is the case even when the number of replicas is set to a value greater than 1. You can find a great ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ContainerSolutions/k8s-deployment-strategies/tree/master/recreate"}),"illustration of the Recreate deployment strategy here"),"."),Object(r.b)("h3",{id:"rollingupdate-strategy"},"RollingUpdate Strategy"),Object(r.b)("p",null,"The RollingUpdate strategy terminates a number of Pods from the old (blue) ReplicaSet and start a number of new Pods with the new version (green). So gradually the new application version is rolled out."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Be aware:"),' The grudual or "rolling" update means that ',Object(r.b)("strong",{parentName:"p"},"Pods of both the old (blue) and new (green) versions are being served traffic simultaneously"),". This implies that two adjacent application versions need to coexist peacefully.\nIf the new (green) version requires a different database schema, for example, this may become problematic as a schema migration can either be executed or not. The application therefore should be architected in a way that schema migrations happen gradually over multiple versions while maintaining compatibility among adjacent versions."),Object(r.b)("p",null,"Engineers must decide yourself whether the increased application availability is worth the increased effort in development."),Object(r.b)("h3",{id:"other-strategies"},"Other Strategies"),Object(r.b)("p",null,"There are many more possible deployment patterns. They do not represent strategies in the sense that they can be pasted as a ",Object(r.b)("inlineCode",{parentName:"p"},"strategy: <my-strategy>")," into the deployment specification but rather represent higher level methodologies on how to perform a rollout ","[3][4]",". This includes patterns such as blue-green and canary deployments."),Object(r.b)("h2",{id:"tyding-up---part-2-of-2"},"Tyding Up - Part 2 of 2"),Object(r.b)("p",null,"All resources of this lesson can be deleted:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl delete deployment app-gamma\nkubectl delete -f 50-ingress.yaml\nkubectl delete -f 40-service.yaml\n")),Object(r.b)("h2",{id:"links"},"Links"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Kuberentes Documentation, Conecepts, Working With Objects, ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/"}),"https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/")),Object(r.b)("li",{parentName:"ol"},"Kubernetes Up & Running, 2nd Edition, O'Reilly, 2019, ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/kubernetes-up-and/9781492046523/"}),"https://learning.oreilly.com/library/view/kubernetes-up-and/9781492046523/")),Object(r.b)("li",{parentName:"ol"},"Deployment Strategies, ContainerSolutions, ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.container-solutions.com/kubernetes-deployment-strategies"}),"https://blog.container-solutions.com/kubernetes-deployment-strategies")),Object(r.b)("li",{parentName:"ol"},"Kubernetes Patterns, O'Reilly, 2019, ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050278/"}),"https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050278/"))))}s.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),s=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return n?l.a.createElement(d,i(i({ref:t},c),{},{components:n})):l.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);