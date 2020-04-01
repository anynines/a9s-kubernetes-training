(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(6),r=(n(0),n(138)),i={id:"advanced-jobs",title:"Advanced Job Features"},l={id:"kubernetes/70-jobs/advanced-jobs",title:"Advanced Job Features",description:"Admitedly, running a simple Job as in the earlier has little advantage over running a single Pod but there is more to Jobs than meets the eye as you will see in the following lessons.",source:"@site/docs/kubernetes/70-jobs/25-advanced-jobs.md",permalink:"/docs/kubernetes/70-jobs/advanced-jobs",sidebar:"docs",previous:{title:"Jobs",permalink:"/docs/kubernetes/70-jobs/jobs"},next:{title:"Parallel Jobs",permalink:"/docs/kubernetes/70-jobs/parallel-jobs"}},s=[{value:"Automatic Retry-Logic",id:"automatic-retry-logic",children:[{value:"A Failing Job",id:"a-failing-job",children:[]},{value:"A Flaky Job",id:"a-flaky-job",children:[]}]},{value:"Links",id:"links",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Admitedly, running a simple Job as in the earlier has little advantage over running a single Pod but there is more to Jobs than meets the eye as you will see in the following lessons."),Object(r.b)("h2",{id:"automatic-retry-logic"},"Automatic Retry-Logic"),Object(r.b)("p",null,"The Job concept in Kubernetes provides options when a container has not been executed successfully. This does not only cover the creation of Pods and their containers but also the workload running inside them."),Object(r.b)("h3",{id:"a-failing-job"},"A Failing Job"),Object(r.b)("p",null,"Run the following Job which will fail with certainty. Create the file ",Object(r.b)("inlineCode",{parentName:"p"},"30-failing-job.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: simple-one-off-job-from-yaml\nspec:\n  template:\n    spec:\n      containers:\n      - name: simple-one-off-job-container\n        image: busybox\n        imagePullPolicy: Always\n        command: ["/bin/sh","-c"]\n        args:\n        - "echo \\"I represent a failing maintenance task\\"; exit 1"\n      restartPolicy: OnFailure\n')),Object(r.b)("p",null,"Apply it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f 30-failing-job.yaml\n")),Object(r.b)("p",null,"Which will provide the insight: ",Object(r.b)("inlineCode",{parentName:"p"},"0 of 1 COMPLETIONS"),"."),Object(r.b)("p",null,"As usual a ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl describe")," is executed to obtain more information:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe job simple-one-off-job-from-yaml\n")),Object(r.b)("p",null,"Interestingly, this produces an event ",Object(r.b)("inlineCode",{parentName:"p"},"SuccessfulCreate")," originating from the ",Object(r.b)("inlineCode",{parentName:"p"},"job-controller"),". Everything seems normal although we know that the Job must have failed. A closer look reveals there is not contradiction. The event informs that the Pod ",Object(r.b)("inlineCode",{parentName:"p"},"simple-one-off-job-from-yaml-5x2xt")," has been created successfully and in fact is has. It's just that the container inside the Pod has failed. So a closer look at the pod is necessary:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods -l job-name=simple-one-off-job-from-yaml\n")),Object(r.b)("p",null,"This time we see a clear indication that something went wrong:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"STATUS")," is ",Object(r.b)("inlineCode",{parentName:"li"},"CrashLoopBackOff")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RESTARTS")," is ",Object(r.b)("inlineCode",{parentName:"li"},"4"))),Object(r.b)("p",null,"And an even closer look with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe pod simple-one-off-job-from-yaml-547xc\n")),Object(r.b)("p",null,"Reveals a warning: ",Object(r.b)("inlineCode",{parentName:"p"},"Back-off restarting failed container")," which indicated a non-zero return value from starting the container. For those new to linux/unix systems ","[2]",":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For the shell\u2019s purposes, a command which exits with a zero exit status has succeeded. A non-zero exit status indicates failure. This seemingly counter-intuitive scheme is used so there is one well-defined way to indicate success and a variety of ways to indicate various failure modes. When a command terminates on a fatal signal whose number is N, Bash uses the value 128+N as the exit status.")),Object(r.b)("p",null,"Without further specification Kubernetes determines the success of a container start by looking at the exit value of the container startup command to be zero. ",Object(r.b)("strong",{parentName:"p"},"Any non-zero value will be considered a failing container start"),"."),Object(r.b)("h3",{id:"a-flaky-job"},"A Flaky Job"),Object(r.b)("p",null,"But there is more to the previous example. The field ",Object(r.b)("inlineCode",{parentName:"p"},"RESTARTS: 4")," suggests that Kubernetes has not given up immediately but only after four (4) failed attempts. This means that if a failure is sporadic, the retry logic can help to accomplish a Job nevertheless."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Consider a Job that sometimes fails and sometimes succeeds"),". While such as case calls for a bugfix by the developer, it is also nice if Kubernetes can help so that the developer does not have to get up at night."),Object(r.b)("p",null,"We simulate a flaky Job with the folling shell command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"(( RANDOM%3 == 0 )) && exit 0 || exit 1\n")),Object(r.b)("p",null,"This will randomly exit with either success (0) or failure (1) with a bias towards failure."),Object(r.b)("p",null,"Use this version of you want to try it without existing your shell:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"(( RANDOM%3 == 0 )) && echo 0 || echo 1\n")),Object(r.b)("p",null,"Create the file ",Object(r.b)("inlineCode",{parentName:"p"},"40-flaky-job.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: flaky-job\nspec:\n  template:\n    spec:\n      maxRetries: 5\n      containers:\n      - name: flaky-job-container\n        image: ubuntu\n        imagePullPolicy: Always\n        command: ["/bin/bash","-c"]\n        args:\n        - "echo \\"I represent a flaky maintenance task\\"; (( RANDOM%3 == 0 )) && exit 0 || exit 1"\n      restartPolicy: OnFailure\n')),Object(r.b)("p",null,"Execute the Job:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f 40-flaky-job.yaml\n")),Object(r.b)("p",null,"While the Job is being created open another terminal and observe the Pods belonging to the Job:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods -l job-name=flaky-job -w\n")),Object(r.b)("p",null,"The option ",Object(r.b)("inlineCode",{parentName:"p"},"-w"),' as in "watch" keeps ',Object(r.b)("inlineCode",{parentName:"p"},"kubectl")," polling for changes. So you are likely to ses a sequence of events such as:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"flaky-job-b7nj8   0/1     Pending             0          0s\nflaky-job-b7nj8   0/1     Pending             0          0s\nflaky-job-b7nj8   0/1     ContainerCreating   0          1s\nflaky-job-b7nj8   0/1     Error               0          3s\nflaky-job-b7nj8   0/1     Error               1          5s\nflaky-job-b7nj8   0/1     CrashLoopBackOff    1          6s\nflaky-job-b7nj8   0/1     Completed           2          24s\n")),Object(r.b)("p",null,"As the containers are failing randomly you may have to delete and create the Job several times to observe a similar sequence. Give it a try."),Object(r.b)("p",null,"You can see from the output that the Pod has failed two times before it succeeded. This is free robustness for workloads when using Kubernets Jobs."),Object(r.b)("h2",{id:"links"},"Links"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Jobs, ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/job/"}),"https://kubernetes.io/docs/tasks/job/")),Object(r.b)("li",{parentName:"ol"},"gnu.org, Bash Manual, ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html"}),"https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html"))))}b.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return n?o.a.createElement(d,l({ref:t},c,{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);