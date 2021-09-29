"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4463],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4841:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"advanced-jobs",title:"Advanced Job Features"},s=void 0,u={unversionedId:"kubernetes/jobs/advanced-jobs",id:"kubernetes/jobs/advanced-jobs",isDocsHomePage:!1,title:"Advanced Job Features",description:"Admittedly, running a simple Job as earlier has little advantage over running a single Pod but there is more to Jobs than meets the eye as you will see in the following lessons.",source:"@site/docs/kubernetes/70-jobs/25-advanced-jobs.md",sourceDirName:"kubernetes/70-jobs",slug:"/kubernetes/jobs/advanced-jobs",permalink:"/a9s-kubernetes-training/kubernetes/jobs/advanced-jobs",tags:[],version:"current",sidebarPosition:25,frontMatter:{id:"advanced-jobs",title:"Advanced Job Features"},sidebar:"docs",previous:{title:"Jobs",permalink:"/a9s-kubernetes-training/kubernetes/jobs/jobs"},next:{title:"Parallel Jobs",permalink:"/a9s-kubernetes-training/kubernetes/jobs/parallel-jobs"}},c=[{value:"Automatic Retry-Logic",id:"automatic-retry-logic",children:[{value:"A Failing Job",id:"a-failing-job",children:[]},{value:"A Flaky Job",id:"a-flaky-job",children:[]}]},{value:"Links",id:"links",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Admittedly, running a simple Job as earlier has little advantage over running a single Pod but there is more to Jobs than meets the eye as you will see in the following lessons."),(0,r.kt)("h2",{id:"automatic-retry-logic"},"Automatic Retry-Logic"),(0,r.kt)("p",null,"The Job concept in Kubernetes provides options when a container has not been executed successfully. This does not only cover the creation of Pods and their containers but also the workload running inside them."),(0,r.kt)("h3",{id:"a-failing-job"},"A Failing Job"),(0,r.kt)("p",null,"Run the following Job which will fail with certainty. Create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"30-failing-job.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: simple-one-off-job-from-yaml\nspec:\n  template:\n    spec:\n      containers:\n      - name: simple-one-off-job-container\n        image: busybox\n        imagePullPolicy: Always\n        command: ["/bin/sh","-c"]\n        args:\n        - "echo \\"I represent a failing maintenance task\\"; exit 1"\n      restartPolicy: OnFailure\n')),(0,r.kt)("p",null,"Apply it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f 30-failing-job.yaml\n")),(0,r.kt)("p",null,"As usual a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe")," is executed to obtain more information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl describe job simple-one-off-job-from-yaml\n")),(0,r.kt)("p",null,"Interestingly, this produces an event ",(0,r.kt)("inlineCode",{parentName:"p"},"SuccessfulCreate")," originating from the ",(0,r.kt)("inlineCode",{parentName:"p"},"job-controller"),". Everything seems normal although we know that the Job must have failed. A closer look reveals there is no contradiction. The event informs that the Pod ",(0,r.kt)("inlineCode",{parentName:"p"},"simple-one-off-job-from-yaml-5x2xt")," has been created successfully and in fact it has been. It's just that the container inside the Pod has failed. So a closer look at the pod is necessary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get pods -l job-name=simple-one-off-job-from-yaml\n")),(0,r.kt)("p",null,"This time we see a clear indication that something went wrong:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STATUS")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"CrashLoopBackOff")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RESTARTS")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"4"))),(0,r.kt)("p",null,"And an even closer look with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl describe pod simple-one-off-job-from-yaml-547xc\n")),(0,r.kt)("p",null,"Reveals a warning: ",(0,r.kt)("inlineCode",{parentName:"p"},"Back-off restarting failed container")," which indicated a non-zero return value from starting the container. For those new to linux/unix systems ","[2]",":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For the shell's purposes, a command which exits with a status code of zero has succeeded. A non-zero exit status indicates failure. This seemingly counter-intuitive scheme is used so there is one well-defined way to indicate success and a variety of ways to indicate various failure modes. When a command terminates on a fatal signal whose number is N, Bash uses the value 128+N as the exit status.")),(0,r.kt)("p",null,"Without further specification Kubernetes determines the success of a container start by looking at the exit value of the container startup command to be zero. ",(0,r.kt)("strong",{parentName:"p"},"Any non-zero value will be considered a failing container start"),"."),(0,r.kt)("h3",{id:"a-flaky-job"},"A Flaky Job"),(0,r.kt)("p",null,"But there is more to the previous example. The field ",(0,r.kt)("inlineCode",{parentName:"p"},"RESTARTS: 4")," suggests that Kubernetes has not given up immediately but only after four (4) failed attempts. This means that if a failure is sporadic, the retry logic can help to accomplish a Job nevertheless."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Consider a Job that sometimes fails and sometimes succeeds"),". While such a case calls for a bugfix by the developer, it is also nice if Kubernetes can help so that the developer does not have to get up at night."),(0,r.kt)("p",null,"We simulate a flaky Job with the folling shell command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(( RANDOM%3 == 0 )) && exit 0 || exit 1\n")),(0,r.kt)("p",null,"This will randomly exit with either success (0) or failure (1) with a bias towards failure."),(0,r.kt)("p",null,"Use this version of you want to try it without existing your shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(( RANDOM%3 == 0 )) && echo 0 || echo 1\n")),(0,r.kt)("p",null,"Create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"40-flaky-job.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: flaky-job\nspec:\n  backoffLimit: 5\n  template:\n    spec:\n      containers:\n      - name: flaky-job-container\n        image: ubuntu\n        imagePullPolicy: Always\n        command: ["/bin/bash","-c"]\n        args:\n        - "echo \\"I represent a flaky maintenance task\\"; (( RANDOM%3 == 0 )) && exit 0 || exit 1"\n      restartPolicy: OnFailure\n')),(0,r.kt)("p",null,"Execute the Job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f 40-flaky-job.yaml\n")),(0,r.kt)("p",null,"While the Job is being created open another terminal and observe the Pods belonging to the Job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get pods -l job-name=flaky-job -w\n")),(0,r.kt)("p",null,"The option ",(0,r.kt)("inlineCode",{parentName:"p"},"-w"),' as in "watch" keeps ',(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," polling for changes. So you are likely to ses a sequence of events such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flaky-job-b7nj8   0/1     Pending             0          0s\nflaky-job-b7nj8   0/1     Pending             0          0s\nflaky-job-b7nj8   0/1     ContainerCreating   0          1s\nflaky-job-b7nj8   0/1     Error               0          3s\nflaky-job-b7nj8   0/1     Error               1          5s\nflaky-job-b7nj8   0/1     CrashLoopBackOff    1          6s\nflaky-job-b7nj8   0/1     Completed           2          24s\n")),(0,r.kt)("p",null,"As the containers are failing randomly you may have to delete and create the Job several times to observe a similar sequence. Give it a try."),(0,r.kt)("p",null,"You can see from the output that the Pod has failed two times before it succeeded. This is free robustness for workloads when using Kubernets Jobs."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Jobs, ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/job/"},"https://kubernetes.io/docs/tasks/job/")),(0,r.kt)("li",{parentName:"ol"},"gnu.org, Bash Manual, ",(0,r.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html"},"https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html"))))}m.isMDXComponent=!0}}]);