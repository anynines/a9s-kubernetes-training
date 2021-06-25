(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return c}));var o=n(3),a=n(7),r=(n(0),n(112)),l={id:"jobs",title:"Jobs"},i={unversionedId:"kubernetes/70-jobs/jobs",id:"kubernetes/70-jobs/jobs",isDocsHomePage:!1,title:"Jobs",description:"ReplicaSets and Deployments are Kubernetes resources to describe long running processes (LRPs). For web applications, for example, application instances, once started, are often running continuously and keeping them alive is a major goal.",source:"@site/docs/kubernetes/70-jobs/10-jobs.md",slug:"/kubernetes/70-jobs/jobs",permalink:"/kubernetes/70-jobs/jobs",version:"current",sidebar:"docs",previous:{title:"Secrets Exercise Explanation",permalink:"/kubernetes/60-configmaps-and-secrets/secrets-exercise-explanation"},next:{title:"Advanced Job Features",permalink:"/kubernetes/70-jobs/advanced-jobs"}},b=[{value:"When to use a Job?",id:"when-to-use-a-job",children:[]},{value:"What is a Job?",id:"what-is-a-job",children:[]},{value:"Creating Jobs",id:"creating-jobs",children:[{value:"Single Container One-Off Task",id:"single-container-one-off-task",children:[]}]},{value:"Deleting a Job",id:"deleting-a-job",children:[]},{value:"Links",id:"links",children:[]}],s={rightToc:b};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ReplicaSets and Deployments are Kubernetes resources to describe long running processes (LRPs). For web applications, for example, application instances, once started, are often running continuously and keeping them alive is a major goal."),Object(r.b)("p",null,"However, there are also - compared to LRPs - ",Object(r.b)("strong",{parentName:"p"},"short lived workloads"),". These include ",Object(r.b)("strong",{parentName:"p"},"one-off tasks")," as well as ",Object(r.b)("strong",{parentName:"p"},"tasks requiring recurring execution")," both of varying complexity."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"One-Off Tasks")," will be covered in this lesson while ",Object(r.b)("strong",{parentName:"p"},"recurring tasks will be covered in the CRON Job Lesson"),"."),Object(r.b)("h2",{id:"when-to-use-a-job"},"When to use a Job?"),Object(r.b)("p",null,"Whenever it's not a long-running process but still needs to run code from a container image, it may be a Job."),Object(r.b)("p",null,"A few examples include running tasks such as"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"database schema migrations"),Object(r.b)("li",{parentName:"ul"},"administrative one-off tasks in general"),Object(r.b)("li",{parentName:"ul"},"Analytic workflows"),Object(r.b)("li",{parentName:"ul"},"in general batch jobs which are run (partially) in sequence and/or (partially) in parallel.")),Object(r.b)("p",null,'Note that these tasks may be "long" running in dimension of hours or even days but compared to the average web application\'s lifecycle this is still comparatively short.'),Object(r.b)("h2",{id:"what-is-a-job"},"What is a Job?"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"A Job is a utility to execute short-lived workloads by starting Pods up until successful completion.")),Object(r.b)("p",null,"The following examples will help you understand the concept of Jobs in greater details."),Object(r.b)("h2",{id:"creating-jobs"},"Creating Jobs"),Object(r.b)("p",null,"Let's start creating Job by creating the simplest Job: a single container one-off Task."),Object(r.b)("h3",{id:"single-container-one-off-task"},"Single Container One-Off Task"),Object(r.b)("p",null,"In this example a simple task is to be executed. The task is to run a simple shell command and then exit. In this case a single container will suffice. Neither sequential nor parallel processing of multiple containers or Pods is necessary."),Object(r.b)("p",null,"Running a simple Job appears familiar to you as you have already done it in an earlier lesson:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl run -i --tty busybox --image=busybox --restart=Never -- sh\n")),Object(r.b)("p",null,"If all you care about is the outcome of a shell command there is no need to attach an interactive terminal (",Object(r.b)("inlineCode",{parentName:"p"},"-i --tty"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'kubectl run simple-one-off-task --image=busybox --restart=Never -- echo "I represent a very important maintenance task."\n')),Object(r.b)("p",null,"Retrieve the corresponding job:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl get jobs\n")),Object(r.b)("p",null,"As you can see there is no job because ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl run")," doesn't create one. It's just a regular Pod. If that gets the (methaphorical) job done ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl run")," is a way to go."),Object(r.b)("p",null,"Now proceed with creating a real Job in file ",Object(r.b)("inlineCode",{parentName:"p"},"20-simple-job.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: simple-one-off-job-from-yaml\nspec:\n  template:\n    spec:\n      containers:\n      - name: simple-one-off-job-container\n        image: busybox\n        imagePullPolicy: Always\n        command: ["echo"]\n        args:\n        - "I represent a very important maintenance task"\n      restartPolicy: OnFailure\n')),Object(r.b)("p",null,"Apply it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl apply -f 20-simple-job.yaml\n")),Object(r.b)("p",null,"And look again at:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl get jobs\n")),Object(r.b)("p",null,"There should be your job."),Object(r.b)("p",null,"Let's have a look at its description:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl describe job simple-one-off-job-from-yaml\n")),Object(r.b)("p",null,"You should see a list of events containing a single event from ",Object(r.b)("inlineCode",{parentName:"p"},"job-controller"),"."),Object(r.b)("p",null,"As well as a field called ",Object(r.b)("inlineCode",{parentName:"p"},"Labels"),". It likely contains a key value pair such as ",Object(r.b)("inlineCode",{parentName:"p"},"job-name=simple-one-off-job-from-yaml"),"."),Object(r.b)("p",null,"Let's use this Label obtained from our Job metadata to query the corresponding Pod:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl get pods -l job-name=simple-one-off-job-from-yaml\n")),Object(r.b)("p",null,"You should find a completed Pod with a name similar to ",Object(r.b)("inlineCode",{parentName:"p"},"simple-one-off-job-from-yaml-bbwkw"),". The suffix ",Object(r.b)("inlineCode",{parentName:"p"},"bbwkw")," is a randon string attached by the JobController. Looking up the Pod of a Job in an environment with many Pods may become tricky so searching by label comes in handy."),Object(r.b)("p",null,"Now we can also have a look at the Pods log:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl logs simple-one-off-job-from-yaml-bbwkw\n")),Object(r.b)("p",null,'Which will tell us: "',Object(r.b)("inlineCode",{parentName:"p"},"I represent a very important maintenance task"),'".'),Object(r.b)("p",null,"So you can see that ",Object(r.b)("strong",{parentName:"p"},"both the Job and corresponding Pod(s) exist past their execution"),". This is good for debugging but bad if many Jobs are executed and nobody does the garbage collection."),Object(r.b)("h2",{id:"deleting-a-job"},"Deleting a Job"),Object(r.b)("p",null,"Deleting a Job works as expected:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl delete job simple-one-off-job-from-yaml\n")),Object(r.b)("p",null,"Now look for the corresponding Pods:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl get pods -l job-name=simple-one-off-job-from-yaml\n")),Object(r.b)("p",null,"They are gone too. So keep in mind: ",Object(r.b)("strong",{parentName:"p"},"deleting a Job also deletes corresponding Pods"),"."),Object(r.b)("h2",{id:"links"},"Links"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Jobs, ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/job/"}),"https://kubernetes.io/docs/tasks/job/")),Object(r.b)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, Jobs - Run to Completion, ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"}),"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"))))}c.isMDXComponent=!0}}]);