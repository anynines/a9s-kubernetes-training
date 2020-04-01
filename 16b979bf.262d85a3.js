(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},p=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),m=o,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?a.a.createElement(d,i({ref:n},c,{components:t})):a.a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var o=t(1),a=t(6),r=(t(0),t(138)),l={id:"parallel-jobs",title:"Parallel Jobs"},i={id:"kubernetes/70-jobs/parallel-jobs",title:"Parallel Jobs",description:"In this lesson you will learn about executing tasks in parallel by running multiple Pods simultaneously.",source:"@site/docs/kubernetes/70-jobs/50-parallel-jobs.md",permalink:"/a9s-kubernetes-training/docs/kubernetes/70-jobs/parallel-jobs",sidebar:"docs",previous:{title:"Advanced Job Features",permalink:"/a9s-kubernetes-training/docs/kubernetes/70-jobs/advanced-jobs"},next:{title:"CronJobs",permalink:"/a9s-kubernetes-training/docs/kubernetes/70-jobs/cron-jobs"}},s=[{value:"Job Completion Count",id:"job-completion-count",children:[]},{value:"Parallel Job Execution",id:"parallel-job-execution",children:[]}],c={rightToc:s};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this lesson you will learn about executing tasks in parallel by running multiple Pods simultaneously."),Object(r.b)("h2",{id:"job-completion-count"},"Job Completion Count"),Object(r.b)("p",null,"In the previous example using ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl get jobs")," you may have noticed the field ",Object(r.b)("inlineCode",{parentName:"p"},"COMPLETIONS")," whose value was ",Object(r.b)("inlineCode",{parentName:"p"},"1/1")," in case a Job has been completed successfully. More precisely, the count determines the number of successful Pod executions as part of the Job. In case of a failing a Job, the failing Pod has been recreated and the completion count has been reached even though the source code describe the task has been very unreliable."),Object(r.b)("p",null,"There are tasks requiring more than one iteration to fully accomplish the underlying objective. For this purpose Kubernetes Jobs allow to specify the number of desired completions, e.g. 2 completions by adding ",Object(r.b)("inlineCode",{parentName:"p"},"completions: 2"),"."),Object(r.b)("p",null,"Let's try it out! Create the file ",Object(r.b)("inlineCode",{parentName:"p"},"60-simple-job-two-completions.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: one-off-job-two-completions\nspec:\n  completions: 2\n  template:\n    spec:\n      containers:\n      - name: simple-one-off-job-container\n        image: busybox\n        imagePullPolicy: Always\n        command: ["echo"]\n        args:\n        - "I represent a very important maintenance task"\n      restartPolicy: OnFailure\n')),Object(r.b)("p",null,"And apply it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl apply -f 60-simple-job-two-completions.yaml\n")),Object(r.b)("p",null,"While the Job is running observe its Pods by opening another terminal so you can paste the observation command immediately after executing it. Ideally, you have the command already in your clipboard (CTRL+C):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl get pods -l job-name=one-off-job-two-completions -w\n")),Object(r.b)("p",null,"You should see two Pods. If things happen too fast increase the number of completions to gain more observation time."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"NAME                                READY   STATUS            RESTARTS   AGE\none-off-job-two-completions-xzhmh   0/1     Pending             0          0s\none-off-job-two-completions-xzhmh   0/1     Pending             0          0s\none-off-job-two-completions-xzhmh   0/1     ContainerCreating   0          0s\none-off-job-two-completions-xzhmh   0/1     Completed           0          3s\none-off-job-two-completions-pb44m   0/1     Pending             0          0s\none-off-job-two-completions-pb44m   0/1     Pending             0          0s\none-off-job-two-completions-pb44m   0/1     ContainerCreating   0          0s\none-off-job-two-completions-pb44m   0/1     Completed           0          3s\n")),Object(r.b)("p",null,"A close observation also reveals that ",Object(r.b)("strong",{parentName:"p"},"the Pods run in sequence"),". This may be desired if the task requires ordinality and the execution sequence matters to the the task outcome. However, if there is no ordinality requirement ",Object(r.b)("strong",{parentName:"p"},"running the Jobs Pods in sequence is a waste of time"),"."),Object(r.b)("h2",{id:"parallel-job-execution"},"Parallel Job Execution"),Object(r.b)("p",null,"Luckily Kubernets supports parallel Job execution out of the box. Changing the Job definition to enable parallelism is as easy as pie by adding a spec attributed ",Object(r.b)("inlineCode",{parentName:"p"},"parallelism: 2"),"."),Object(r.b)("p",null,"Create the Job description in file ",Object(r.b)("inlineCode",{parentName:"p"},"70-simple-job-two-completions-parallel.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: one-off-job-two-completions-parallel\nspec:\n  completions: 2\n  parallelism: 2\n  template:\n    spec:\n      containers:\n      - name: simple-one-off-job-container\n        image: busybox\n        imagePullPolicy: Always\n        command: ["echo"]\n        args:\n        - "I represent a very important maintenance task"\n      restartPolicy: OnFailure\n')),Object(r.b)("p",null,"Running the Job:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl apply -f 70-simple-job-two-completions-parallel.yaml\n")),Object(r.b)("p",null,"And observing the result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl get pods -l job-name=one-off-job-two-completions-parallel -w\n")),Object(r.b)("p",null,"The output looks similar to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"NAME                                         READY   STATUS    RESTARTS   AGE\none-off-job-two-completions-parallel-s2j5k   0/1     Pending             0          0s\none-off-job-two-completions-parallel-s2j5k   0/1     Pending             0          0s\none-off-job-two-completions-parallel-qknz4   0/1     Pending             0          0s\none-off-job-two-completions-parallel-qknz4   0/1     Pending             0          0s\none-off-job-two-completions-parallel-s2j5k   0/1     ContainerCreating   0          0s\none-off-job-two-completions-parallel-qknz4   0/1     ContainerCreating   0          0s\none-off-job-two-completions-parallel-s2j5k   0/1     Completed           0          3s\none-off-job-two-completions-parallel-qknz4   0/1     Completed           0          3s\n")),Object(r.b)("p",null,"Compare the outputs of the ",Object(r.b)("em",{parentName:"p"},"first non-parallel")," and ",Object(r.b)("em",{parentName:"p"},"second parallel")," run. "),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"first run")," the sequence was: ",Object(r.b)("inlineCode",{parentName:"p"},"Pending, Pending, ContainerCreating, Completed, ContainerCreating, Completed")," which implies sequential execution."),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"second run")," shows parallel execution with the sequence: ",Object(r.b)("inlineCode",{parentName:"p"},"Pending, Pending, ContainerCreating, ContainerCreating, Completed, Completed"),"."),Object(r.b)("p",null,"As you can see ",Object(r.b)("strong",{parentName:"p"},"it is fairly easy to define iterative, parallel Jobs using Kubernetes"),"."))}b.isMDXComponent=!0}}]);