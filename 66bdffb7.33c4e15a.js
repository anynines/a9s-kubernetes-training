(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(1),o=t(6),a=(t(0),t(138)),b={id:"cron-jobs",title:"CronJobs"},l={id:"kubernetes/70-jobs/cron-jobs",title:"CronJobs",description:"Cron [1] is an daemon available as a package for most unix/linux operating systems and is a time-based job scheduler.",source:"@site/docs/kubernetes/70-jobs/80-cron-jobs.md",permalink:"/a9s-kubernetes-training/docs/kubernetes/70-jobs/cron-jobs",sidebar:"docs",previous:{title:"Parallel Jobs",permalink:"/a9s-kubernetes-training/docs/kubernetes/70-jobs/parallel-jobs"}},c=[{value:"Linux/Unix Cron Jobs and Cron Tab",id:"linuxunix-cron-jobs-and-cron-tab",children:[]},{value:"Kubernetes Cron Jobs",id:"kubernetes-cron-jobs",children:[]},{value:"Tidying Up",id:"tidying-up",children:[]},{value:"Links",id:"links",children:[]}],i={rightToc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Cron ","[1]"," is an daemon available as a package for most unix/linux operating systems and is a time-based job scheduler."),Object(a.b)("h2",{id:"linuxunix-cron-jobs-and-cron-tab"},"Linux/Unix Cron Jobs and Cron Tab"),Object(a.b)("p",null,"A so called Cron Job is represented as an entry in a Cron Tab describen when a particular command is to be executed. A Cron Tab entry may look like this ","[1]",":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"# \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n# \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n# \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the month (1 - 31)\n# \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n# \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the week (0 - 6) (Sunday to Saturday;\n# \u2502 \u2502 \u2502 \u2502 \u2502                                   7 is also Sunday on some systems)\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# * * * * * command to execute\n")),Object(a.b)("p",null,"The following entry, for example, writes ",Object(a.b)("inlineCode",{parentName:"p"},"Hello World")," to ",Object(a.b)("inlineCode",{parentName:"p"},"/var/log/hello.log")," at 00:01 o'clock every day."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'1 0 * * * printf "Hello World\\n" >> /var/log/hello.log\n')),Object(a.b)("h2",{id:"kubernetes-cron-jobs"},"Kubernetes Cron Jobs"),Object(a.b)("p",null,"In Kubernetes a Cron Job is a Kubernetes Job that is executed according to a given schedule described in the classical Cron Tab format. The Cron Tab format is quite expressive and there are online tools helping to express a particular schedule such as ","[2]","."),Object(a.b)("p",null,"Respectively the pattern ",Object(a.b)("inlineCode",{parentName:"p"},"1 0 * * *")," also schedules a CronJob for daily execution at 00:01 (12:01 a.m.)."),Object(a.b)("p",null,"The following example runs a CRON Job every 2 minutes. This frequence is most likely inappriate for a Kubernetes CRON Job but good to observe what CRON Jobs do."),Object(a.b)("p",null,"Create the file ",Object(a.b)("inlineCode",{parentName:"p"},"90-cron-job.yaml"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: batch/v1beta1\nkind: CronJob\nmetadata:\n  name: cron-job-hello-world\nspec:\n\n  # See https://crontab.guru/\n  # At every 2nd minute.\n  schedule: "*/2 * * * *"\n\n  # See https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#writing-a-job-spec\n  jobTemplate:\n    spec:\n      template:\n        spec:      \n          containers:\n          - name: simple-one-off-job-container\n            image: busybox\n            imagePullPolicy: Always\n            command: ["echo"]\n            args:\n            - "I represent a very important maintenance task"\n          restartPolicy: OnFailure      \n')),Object(a.b)("p",null,"And apply it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl apply -f 90-cron-job.yaml\n")),Object(a.b)("p",null,"Verify its creation:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get cronjobs\n")),Object(a.b)("p",null,"And obtain CRON Job details:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl decribe cronjob cron-job-hello-world\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Events")," section will list a number of Jobs. ",Object(a.b)("strong",{parentName:"p"},"Apperently, CRON Jobs are used to derive Jobs which in turn create Pods.")),Object(a.b)("p",null,"The CRON Job should be executed periodically every 2 minutes."),Object(a.b)("p",null,"So let's look for the Jobs:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get jobs\n\nNAME                                   COMPLETIONS   DURATION   AGE\ncron-job-hello-world-1583929080        1/1           3s         5m18s\ncron-job-hello-world-1583929200        1/1           3s         3m18s\n")),Object(a.b)("p",null,"As expected Jobs are created regularly and their names contain a suffix to uniquely distinguish them from another."),Object(a.b)("p",null,"You can retrieve the Pods corresonding to a particular Job:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get pods -l job-name=cron-job-hello-world-1583929440\n")),Object(a.b)("p",null,"Or watch Pods being created:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get pods -w\n\nNAME                                         READY   STATUS      RESTARTS   AGE\ncron-job-hello-world-1583928480-mqxqj        0/1     Completed   0          5m20s\ncron-job-hello-world-1583928600-5l8gb        0/1     Completed   0          3m20s\ncron-job-hello-world-1583928720-x7bpj        0/1     Completed   0          80s\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kubernetes CRON Jobs are a convenient way to execute containerized workloads as Jobs, periodically.")),Object(a.b)("h2",{id:"tidying-up"},"Tidying Up"),Object(a.b)("p",null,"Delete the CRON Job:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl delete cronjob cron-job-hello-world\n")),Object(a.b)("p",null,"Have a look at Jobs and Pods:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get jobs\nkubectl get pods\n")),Object(a.b)("p",null,"You will notice that ",Object(a.b)("strong",{parentName:"p"},"deleting the CRON Job will also delete corresponding Jobs and Pods"),"."),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Wikipedia, cron, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Cron"}),"https://en.wikipedia.org/wiki/Cron")),Object(a.b)("li",{parentName:"ol"},"crontab guru, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://crontab.guru/"}),"https://crontab.guru/"))))}s.isMDXComponent=!0},138:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return j}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),s=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},p=function(e){var n=s(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,j=p["".concat(b,".").concat(d)]||p[d]||u[d]||a;return t?o.a.createElement(j,l({ref:n},i,{components:t})):o.a.createElement(j,l({ref:n},i))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,b=new Array(a);b[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var i=2;i<a;i++)b[i]=t[i];return o.a.createElement.apply(null,b)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);