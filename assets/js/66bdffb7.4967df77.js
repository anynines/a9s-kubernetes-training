"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4438],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||l;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},203:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o,r=t(7462),l=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"cron-jobs",title:"CronJobs"},c=void 0,u={unversionedId:"kubernetes/jobs/cron-jobs",id:"kubernetes/jobs/cron-jobs",title:"CronJobs",description:"Related Videos",source:"@site/docs/kubernetes/70-jobs/80-cron-jobs.md",sourceDirName:"kubernetes/70-jobs",slug:"/kubernetes/jobs/cron-jobs",permalink:"/kubernetes/jobs/cron-jobs",draft:!1,tags:[],version:"current",sidebarPosition:80,frontMatter:{id:"cron-jobs",title:"CronJobs"},sidebar:"docs",previous:{title:"Parallel Jobs",permalink:"/kubernetes/jobs/parallel-jobs"},next:{title:"Persistent Volumes",permalink:"/kubernetes/stateful-sets/persistent-volumes"}},p={},d=[{value:"Related Videos",id:"related-videos",level:2},{value:"Linux/Unix Cron Jobs and Cron Tab",id:"linuxunix-cron-jobs-and-cron-tab",level:2},{value:"Kubernetes Cron Jobs",id:"kubernetes-cron-jobs",level:2},{value:"Tidying Up",id:"tidying-up",level:2},{value:"Links",id:"links",level:2}],b=(o="VideoContainer",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),m={toc:d},k="wrapper";function f(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)(k,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"related-videos"},"Related Videos"),(0,a.kt)(b,{list:[{src:"https://www.youtube-nocookie.com/embed/Lye_qdofqjg",title:"CronJobs"}],mdxType:"VideoContainer"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Cron ","[1]"," is a daemon available as a package for most Unix/Linux operating systems and is a time-based job scheduler."),(0,a.kt)("h2",{id:"linuxunix-cron-jobs-and-cron-tab"},"Linux/Unix Cron Jobs and Cron Tab"),(0,a.kt)("p",null,"A so-called Cron Job is represented as an entry in a Cron Tab describing when a particular command is to be executed. A Cron Tab entry may look like this ","[1]",":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n# \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n# \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the month (1 - 31)\n# \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n# \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the week (0 - 6) (Sunday to Saturday;\n# \u2502 \u2502 \u2502 \u2502 \u2502                                   7 is also Sunday on some systems)\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# * * * * * command to execute\n")),(0,a.kt)("p",null,"The following entry, for example, writes ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello World")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/hello.log")," at 00:01 o'clock every day."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1 0 * * * printf "Hello World\\n" >> /var/log/hello.log\n')),(0,a.kt)("h2",{id:"kubernetes-cron-jobs"},"Kubernetes Cron Jobs"),(0,a.kt)("p",null,"In Kubernetes a Cron Job is a Kubernetes Job that is executed according to a given schedule described in the classical Cron Tab format. The Cron Tab format is quite expressive and there are online tools helping to express a particular schedule such as ","[2]","."),(0,a.kt)("p",null,"Respectively, the pattern ",(0,a.kt)("inlineCode",{parentName:"p"},"1 0 * * *")," also schedules a CronJob for daily execution at 00:01 (12:01 a.m.)."),(0,a.kt)("p",null,"The following example runs a CRON Job every 2 minutes. This frequency is most likely inappropriate for a Kubernetes CRON Job but good to observe what CRON Jobs do."),(0,a.kt)("p",null,"Create the file ",(0,a.kt)("inlineCode",{parentName:"p"},"90-cron-job.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: CronJob\nmetadata:\n  name: cron-job-hello-world\nspec:\n  # See https://crontab.guru/\n  # At every 2nd minute.\n  schedule: '*/2 * * * *'\n\n  # See https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#writing-a-job-spec\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n            - name: simple-one-off-job-container\n              image: busybox\n              imagePullPolicy: Always\n              command: ['echo']\n              args:\n                - 'I represent a very important maintenance task'\n          restartPolicy: OnFailure\n")),(0,a.kt)("p",null,"And apply it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f 90-cron-job.yaml\n")),(0,a.kt)("p",null,"Verify its creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get cronjobs\n")),(0,a.kt)("p",null,"And obtain CRON Job details:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe cronjob cron-job-hello-world\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Events")," section will list a number of Jobs. ",(0,a.kt)("strong",{parentName:"p"},"Apparently, CRON Jobs are used to derive Jobs which in turn create Pods.")),(0,a.kt)("p",null,"The CRON Job should be executed periodically every 2 minutes."),(0,a.kt)("p",null,"So let's look for the Jobs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get jobs\n\nNAME                                   COMPLETIONS   DURATION   AGE\ncron-job-hello-world-1583929080        1/1           3s         5m18s\ncron-job-hello-world-1583929200        1/1           3s         3m18s\n")),(0,a.kt)("p",null,"As expected Jobs are created regularly and their names contain a suffix to uniquely distinguish them from another."),(0,a.kt)("p",null,"You can retrieve the Pods corresponding to a particular Job:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get pods -l job-name=cron-job-hello-world-1583929440\n")),(0,a.kt)("p",null,"Or watch Pods being created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get pods -w\n\nNAME                                         READY   STATUS      RESTARTS   AGE\ncron-job-hello-world-1583928480-mqxqj        0/1     Completed   0          5m20s\ncron-job-hello-world-1583928600-5l8gb        0/1     Completed   0          3m20s\ncron-job-hello-world-1583928720-x7bpj        0/1     Completed   0          80s\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kubernetes CRON Jobs are a convenient way to execute containerized workloads as Jobs, periodically.")),(0,a.kt)("h2",{id:"tidying-up"},"Tidying Up"),(0,a.kt)("p",null,"Delete the CRON Job:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl delete cronjob cron-job-hello-world\n")),(0,a.kt)("p",null,"Have a look at Jobs and Pods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get jobs\nkubectl get pods\n")),(0,a.kt)("p",null,"You will notice that ",(0,a.kt)("strong",{parentName:"p"},"deleting the CRON Job will also delete corresponding Jobs and Pods"),"."),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Wikipedia, cron, ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cron"},"https://en.wikipedia.org/wiki/Cron")),(0,a.kt)("li",{parentName:"ol"},"crontab guru, ",(0,a.kt)("a",{parentName:"li",href:"https://crontab.guru/"},"https://crontab.guru/"))))}f.isMDXComponent=!0}}]);