(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var o=t(0),a=t.n(o);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},b=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=o,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||l;return t?a.a.createElement(d,i({ref:n},s,{components:t})):a.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=t[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t(1),a=t(6),l=(t(0),t(138)),r={id:"parallel-jobs",title:"Parallel Jobs"},i={id:"kubernetes/70-jobs/parallel-jobs",title:"Parallel Jobs",description:"In this lesson you will learn about executing tasks in parallel by running multiple Pods simultaneously.",source:"@site/docs/kubernetes/70-jobs/50-parallel-jobs.md",permalink:"/kubernetes/70-jobs/parallel-jobs",sidebar:"docs",previous:{title:"Advanced Job Features",permalink:"/kubernetes/70-jobs/advanced-jobs"},next:{title:"CronJobs",permalink:"/kubernetes/70-jobs/cron-jobs"}},c=[{value:"Job Completion Count",id:"job-completion-count",children:[]},{value:"Parallel Job Execution",id:"parallel-job-execution",children:[]}],s={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this lesson you will learn about executing tasks in parallel by running multiple Pods simultaneously."),Object(l.b)("h2",{id:"job-completion-count"},"Job Completion Count"),Object(l.b)("p",null,"In the previous example using ",Object(l.b)("inlineCode",{parentName:"p"},"kubectl get jobs")," you may have noticed the field ",Object(l.b)("inlineCode",{parentName:"p"},"COMPLETIONS")," whose value was ",Object(l.b)("inlineCode",{parentName:"p"},"1/1")," in case a Job has been completed successfully. More precisely, the count determines the number of successful Pod executions as part of the Job. In case of a failing a Job, the failing Pod has been recreated and the completion count has been reached even though the source code describe the task has been very unreliable."),Object(l.b)("p",null,"There are tasks requiring more than one iteration to fully accomplish the underlying objective. For this purpose Kubernetes Jobs allow to specify the number of desired completions, e.g. 2 completions by adding ",Object(l.b)("inlineCode",{parentName:"p"},"completions: 2"),"."),Object(l.b)("p",null,"Let's try it out! Create the file ",Object(l.b)("inlineCode",{parentName:"p"},"60-simple-job-two-completions.yaml"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: one-off-job-two-completions\nspec:\n  completions: 2\n  template:\n    spec:\n      containers:\n      - name: simple-one-off-job-container\n        image: busybox\n        imagePullPolicy: Always\n        command: ["echo"]\n        args:\n        - "I represent a very important maintenance task"\n      restartPolicy: OnFailure\n')),Object(l.b)("p",null,"And apply it:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl apply -f 60-simple-job-two-completions.yaml\n")),Object(l.b)("p",null,"While the Job is running observe its Pods by opening another terminal so you can paste the observation command immediately after executing it. Ideally, you have the command already in your clipboard (CTRL+C):"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl get pods -l job-name=one-off-job-two-completions -w\n")),Object(l.b)("p",null,"You should see two Pods. If things happen too fast increase the number of completions to gain more observation time."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"NAME                                READY   STATUS            RESTARTS   AGE\none-off-job-two-completions-xzhmh   0/1     Pending             0          0s\none-off-job-two-completions-xzhmh   0/1     Pending             0          0s\none-off-job-two-completions-xzhmh   0/1     ContainerCreating   0          0s\none-off-job-two-completions-xzhmh   0/1     Completed           0          3s\none-off-job-two-completions-pb44m   0/1     Pending             0          0s\none-off-job-two-completions-pb44m   0/1     Pending             0          0s\none-off-job-two-completions-pb44m   0/1     ContainerCreating   0          0s\none-off-job-two-completions-pb44m   0/1     Completed           0          3s\n")),Object(l.b)("p",null,"A close observation also reveals that ",Object(l.b)("strong",{parentName:"p"},"the Pods run in sequence"),". This may be desired if the task requires ordinality and the execution sequence matters to the the task outcome. However, if there is no ordinality requirement ",Object(l.b)("strong",{parentName:"p"},"running the Jobs Pods in sequence is a waste of time"),"."),Object(l.b)("h2",{id:"parallel-job-execution"},"Parallel Job Execution"),Object(l.b)("p",null,"Luckily Kubernets supports parallel Job execution out of the box. Changing the Job definition to enable parallelism is as easy as pie by adding a spec attributed ",Object(l.b)("inlineCode",{parentName:"p"},"parallelism: 2"),"."),Object(l.b)("p",null,"Create the Job description in file ",Object(l.b)("inlineCode",{parentName:"p"},"70-simple-job-two-completions-parallel.yaml"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: one-off-job-two-completions-parallel\nspec:\n  completions: 2\n  parallelism: 2\n  template:\n    spec:\n      containers:\n      - name: simple-one-off-job-container\n        image: busybox\n        imagePullPolicy: Always\n        command: ["echo"]\n        args:\n        - "I represent a very important maintenance task"\n      restartPolicy: OnFailure\n')),Object(l.b)("p",null,"Running the Job:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl apply -f 70-simple-job-two-completions-parallel.yaml\n")),Object(l.b)("p",null,"And observing the result:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl get pods -l job-name=one-off-job-two-completions-parallel -w\n")),Object(l.b)("p",null,"The output looks similar to:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"NAME                                         READY   STATUS    RESTARTS   AGE\none-off-job-two-completions-parallel-s2j5k   0/1     Pending             0          0s\none-off-job-two-completions-parallel-s2j5k   0/1     Pending             0          0s\none-off-job-two-completions-parallel-qknz4   0/1     Pending             0          0s\none-off-job-two-completions-parallel-qknz4   0/1     Pending             0          0s\none-off-job-two-completions-parallel-s2j5k   0/1     ContainerCreating   0          0s\none-off-job-two-completions-parallel-qknz4   0/1     ContainerCreating   0          0s\none-off-job-two-completions-parallel-s2j5k   0/1     Completed           0          3s\none-off-job-two-completions-parallel-qknz4   0/1     Completed           0          3s\n")),Object(l.b)("p",null,"Compare the outputs of the ",Object(l.b)("em",{parentName:"p"},"first non-parallel")," and ",Object(l.b)("em",{parentName:"p"},"second parallel")," run. "),Object(l.b)("p",null,"The ",Object(l.b)("em",{parentName:"p"},"first run")," the sequence was: ",Object(l.b)("inlineCode",{parentName:"p"},"Pending, Pending, ContainerCreating, Completed, ContainerCreating, Completed")," which implies sequential execution."),Object(l.b)("p",null,"The ",Object(l.b)("em",{parentName:"p"},"second run")," shows parallel execution with the sequence: ",Object(l.b)("inlineCode",{parentName:"p"},"Pending, Pending, ContainerCreating, ContainerCreating, Completed, Completed"),"."),Object(l.b)("p",null,"As you can see ",Object(l.b)("strong",{parentName:"p"},"it is fairly easy to define iterative, parallel Jobs using Kubernetes"),"."))}p.isMDXComponent=!0}}]);