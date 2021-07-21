(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),c=(n(0),n(198)),s={id:"secrets",title:"Secrets"},i={id:"kubernetes/60-configmaps-and-secrets/secrets",isDocsHomePage:!1,title:"Secrets",description:"Secrets are represented as key value pair and thus are very similar to ConfigMaps. However, ConfigMaps are meant for non-sensitive configuration data aiming at making application code portable across environments. So - analog to ConfigMaps - Secrets are key value sets but for sensitive data.",source:"@site/docs/kubernetes/60-configmaps-and-secrets/80-secrets.md",permalink:"/kubernetes/60-configmaps-and-secrets/secrets",sidebar:"docs",previous:{title:"ConfigMap Volume Mounts",permalink:"/kubernetes/60-configmaps-and-secrets/configmaps-volume-mounts"},next:{title:"Secrets Exercise Explanation",permalink:"/kubernetes/60-configmaps-and-secrets/secrets-exercise-explanation"}},o=[{value:"Types of Secrets",id:"types-of-secrets",children:[]},{value:"Secret Types",id:"secret-types",children:[{value:"Generic",id:"generic",children:[]},{value:"TLS",id:"tls",children:[]},{value:"Docker Registry",id:"docker-registry",children:[]}]},{value:"Creating Generic Secrets",id:"creating-generic-secrets",children:[]},{value:"Accessing Secrets Using <code>kubectl</code>",id:"accessing-secrets-using-kubectl",children:[]},{value:"Editing a Secret",id:"editing-a-secret",children:[{value:"Exercise",id:"exercise",children:[]}]},{value:"Showing a Secret Value",id:"showing-a-secret-value",children:[]},{value:"Consuming Secrets from Applications",id:"consuming-secrets-from-applications",children:[{value:"Exercise",id:"exercise-1",children:[]}]},{value:"How Secret Secrets are",id:"how-secret-secrets-are",children:[]},{value:"Links",id:"links",children:[]}],l={rightToc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Secrets are represented as key value pair and thus are very similar to ConfigMaps. However, ConfigMaps are meant for non-sensitive configuration data aiming at making application code portable across environments. So - analog to ConfigMaps - ",Object(c.b)("strong",{parentName:"p"},"Secrets are key value sets but for sensitive data"),"."),Object(c.b)("h2",{id:"types-of-secrets"},"Types of Secrets"),Object(c.b)("p",null,'"Secrets should have a Type field to allow the Kubelet and other system components to take action based on the secret\'s type." ',"[4]"),Object(c.b)("h2",{id:"secret-types"},"Secret Types"),Object(c.b)("p",null,"You may have noticed that - compared to the creation of ConfigMaps - there's an additional argument named ",Object(c.b)("inlineCode",{parentName:"p"},"generic"),"."),Object(c.b)("p",null,"Secrets have an additional ",Object(c.b)("inlineCode",{parentName:"p"},"type"),"-field that tells other Kubernetes components to deal with a particular Secret in a particular way."),Object(c.b)("p",null,"The following Secret Types are often supported:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Generic (Opaque)"),Object(c.b)("li",{parentName:"ul"},"Docker Registry"),Object(c.b)("li",{parentName:"ul"},"TLS")),Object(c.b)("h3",{id:"generic"},"Generic"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"The most common secret type is ",Object(c.b)("inlineCode",{parentName:"strong"},"generic")," / ",Object(c.b)("inlineCode",{parentName:"strong"},"opaque"))," and is meant for creating secrets from a local file, local directory or a fixed value as provided with a literal."),Object(c.b)("p",null,"This lesson focuses the secret type ",Object(c.b)("inlineCode",{parentName:"p"},"generic")," and you will find practical examples below."),Object(c.b)("h3",{id:"tls"},"TLS"),Object(c.b)("p",null,"Kubernetes offers a tooling to manage TLS Certificates as proposed in the ACME draft ","[6]","."),Object(c.b)("p",null,"Kubernetes:"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"lets you provision TLS certificates signed by a Certificate Authority (CA) that you control. These CA and certificates can be used by your workloads to establish trust. ","[7]")),Object(c.b)("p",null,"See ","[7]"," to learn more about managing TLS Certificates with Kubernetes as the topic is outside of this lesson."),Object(c.b)("h3",{id:"docker-registry"},"Docker Registry"),Object(c.b)("p",null,"So far all container images have been pulled from dockerhub","[5]",", the Kubernetes default registry. Often there are reasons to use alternative container registries. One reason may be to chose a registry being within the same network as the Kubernetes cluster so that traffic of pulling container images is contained within the private network."),Object(c.b)("p",null,"In the case a private registry is to be used Kubernetes has to authenticate requests issued towards the registry. This is the purpose of Docker Registry Secrets."),Object(c.b)("p",null,"Creating Container Registry Secrets will be covered in a later lesson."),Object(c.b)("h2",{id:"creating-generic-secrets"},"Creating Generic Secrets"),Object(c.b)("p",null,"Generic Secrets is what most people associated with Secrets. They are often used to represent access credentials such as host, username and password sets."),Object(c.b)("p",null,"The syntax for creating a ",Object(c.b)("inlineCode",{parentName:"p"},"generic")," Secret is close to creating a ConfigMap. They can be created from literals:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl create secret generic area51 --from-literal=are-we-alone=dontknow --from-literal=username=admin --from-literal=password=ooHao9oh\n")),Object(c.b)("p",null,"Or from files (or a mixture of both):"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl create secret generic area52 --from-file=./90-username.txt --from-file=AA-password.txt\n")),Object(c.b)("p",null,"Where ",Object(c.b)("inlineCode",{parentName:"p"},"90-username.txt")," may look like:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"fileadmin\n")),Object(c.b)("p",null,"And ",Object(c.b)("inlineCode",{parentName:"p"},"AA-password.txt")," contains a password in a single line:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Gash1voh\n")),Object(c.b)("h2",{id:"accessing-secrets-using-kubectl"},"Accessing Secrets Using ",Object(c.b)("inlineCode",{parentName:"h2"},"kubectl")),Object(c.b)("p",null,"Once created secrets can be listed as usual using ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl get"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get secrets\n")),Object(c.b)("p",null,"Note that Kubernetes refers to the generic type as ",Object(c.b)("inlineCode",{parentName:"p"},"Opaque")," which means that the Secret is a list of arbitrary key value pairs. This is in contrast to purpose bound types such as TLS and Docker Registry Secrets which are associated with additional behavior of the Kubernetes cluster."),Object(c.b)("p",null,"In order to get more information about the Secret ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl describe")," helps:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl describe secret area51\n")),Object(c.b)("p",null,"This won't print the Secret's values but it will show its metadata and keys."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Secret values can be decoded")," by issuing:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get secret area51 -o yaml\n")),Object(c.b)("p",null,"Generally speaking ",Object(c.b)("strong",{parentName:"p"},"it is a bad idea to store secrets in a plain text file that can be purposely or accidentally checked into a source control system such as Git.")," Do not store your secrets outside of an encrypted password store. If you are aware of this and take care of excluding YAML definitions of your Secrets from source control, it is ok to have YAML files though."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Did you recognize that the values of the Secret do not match the values that have been passed during their creation?")),Object(c.b)("h2",{id:"editing-a-secret"},"Editing a Secret"),Object(c.b)("p",null,"Secrets can be edited by using:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl edit secrets area51\n")),Object(c.b)("p",null,"On most unix/linux computers this will open a local text editor open such as ",Object(c.b)("inlineCode",{parentName:"p"},"vim")," ","[8]","."),Object(c.b)("p",null,"Saving the edited Secret will automatically ",Object(c.b)("inlineCode",{parentName:"p"},"replace")," the secret as if ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl replace")," had been executed."),Object(c.b)("h3",{id:"exercise"},"Exercise"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Try to change the value corresponding to the key ",Object(c.b)("inlineCode",{parentName:"strong"},"username")," and save it.")),Object(c.b)("p",null,"Do you receive the following error?"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'error: secrets "area51" could not be patched: error decoding from json: illegal base64 data at input byte 4\n')),Object(c.b)("p",null,"The reason why this command didn't succeed is because ",Object(c.b)("strong",{parentName:"p"},"Secret values are base64 encoded by Kubernetes"),". This is not encryption but at least it obfuscated values so that a brief look at them doesn't tell the secret. This is not really safe but we'll come back to this later. For now, just be aware that Secret values are base64 encoded and therefore ",Object(c.b)("strong",{parentName:"p"},"pasting plain text values won't work")," (well it may be possible to store the Secret but you'll have trouble during decoding later)."),Object(c.b)("p",null,"So how can a string be base64 encoded? There are plenty of ways but on linux/unix machines this may do the trick:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'echo "test" | base64\n')),Object(c.b)("p",null,"The resulting string can be pasted into the Secret during editting."),Object(c.b)("p",null,"As with ConfigMaps changes to Secrets are automatically available in consuming Pods after a few seconds ",Object(c.b)("strong",{parentName:"p"},"if the Secret has been mounted as a volume"),"."),Object(c.b)("h2",{id:"showing-a-secret-value"},"Showing a Secret Value"),Object(c.b)("p",null,"Assuming you have the command ",Object(c.b)("inlineCode",{parentName:"p"},"base64")," installed retrieving the decoded value from a Secret can be done with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'kubectl get secret area51 -o jsonpath="{.data.username}" | base64 --decode\n')),Object(c.b)("p",null,"Where ",Object(c.b)("inlineCode",{parentName:"p"},"username")," is the key of the ",Object(c.b)("inlineCode",{parentName:"p"},"area51")," Secret to which the value should be retrieved and decoded."),Object(c.b)("h2",{id:"consuming-secrets-from-applications"},"Consuming Secrets from Applications"),Object(c.b)("p",null,"Using Secrets from a Pod is similar to using ConfigMaps."),Object(c.b)("h3",{id:"exercise-1"},"Exercise"),Object(c.b)("p",null,"Use your new knowledge learned during the the ConfigMap lessons and:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Create a Pod and consume the previously created Secret ",Object(c.b)("inlineCode",{parentName:"li"},"area51")," as environment variables."),Object(c.b)("li",{parentName:"ol"},"Create a Pod and consume the previously created Secret ",Object(c.b)("inlineCode",{parentName:"li"},"area52")," as a mounted volume.")),Object(c.b)("p",null,"Hints:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Use ",Object(c.b)("inlineCode",{parentName:"li"},"secretKeyRef")," instead of ",Object(c.b)("inlineCode",{parentName:"li"},"configKeyRef"),"."),Object(c.b)("li",{parentName:"ol"},"Use ",Object(c.b)("inlineCode",{parentName:"li"},"secret")," instead of ",Object(c.b)("inlineCode",{parentName:"li"},"configMap")," when describing the ",Object(c.b)("inlineCode",{parentName:"li"},"volume"),". Also change ",Object(c.b)("inlineCode",{parentName:"li"},"name")," to ",Object(c.b)("inlineCode",{parentName:"li"},"secretName")," to refer to your Secret."),Object(c.b)("li",{parentName:"ol"},"Read the Kubernetes documentation ","[3]"," if you want to see examplary Pod definitions.")),Object(c.b)("h2",{id:"how-secret-secrets-are"},"How Secret Secrets are"),Object(c.b)("p",null,"While Secrets are meant to deal with access credentials such as certificates and passwords, it surprises that - by default - ",Object(c.b)("strong",{parentName:"p"},"Kubernetes stores Secrets into its etcd","[1]"," data store without encryption"),". However, it is possible to configure a Kubernetes cluster to encrypt Secrets ","[2]","."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Using Secrets makes it easier to apply encryption as a cluster wide setting"),". It is also to be expected that the handling of Secrets becomes more secure with future Kubernetes releaes."),Object(c.b)("p",null,"Hence, ",Object(c.b)("strong",{parentName:"p"},"even when Secrets are unencrypted, it is a best practise to use them"),"."),Object(c.b)("h2",{id:"links"},"Links"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"etcd, ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://etcd.io/"}),"https://etcd.io/")),Object(c.b)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Encrypting Secret Data at Rest, ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"}),"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/")),Object(c.b)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, Secrets, ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/secret/"}),"https://kubernetes.io/docs/concepts/configuration/secret/")),Object(c.b)("li",{parentName:"ol"},"Kubernetes Design Document, ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/auth/secrets.md"}),"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/auth/secrets.md")),Object(c.b)("li",{parentName:"ol"},"dockerhub, ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.docker.com/"}),"https://hub.docker.com/")),Object(c.b)("li",{parentName:"ol"},"ACME - Automatic Certificate Management Environment, ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ietf-wg-acme/acme/"}),"https://github.com/ietf-wg-acme/acme/")),Object(c.b)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Manage TLS Certificates in a Cluster, ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/"}),"https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/")),Object(c.b)("li",{parentName:"ol"},"Vim - The Ubiquitous Text Editor, ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.vim.org/"}),"https://www.vim.org/"))))}b.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||c;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<c;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);