(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(1),a=(r(0),r(138));const c={id:"secrets",title:"Secrets"},s={id:"kubernetes/60-configmaps-and-secrets/secrets",title:"Secrets",description:"Secrets are represented as key value pair and thus are very similar to ConfigMaps. However, ConfigMaps are meant for non-sensitive configuration data aiming at making application code portable across environments. So - analog to ConfigMaps - **Secrets are key value sets but for sensitive data**.",source:"@site/docs/kubernetes/60-configmaps-and-secrets/80-secrets.md",permalink:"/kubernetes/60-configmaps-and-secrets/secrets",sidebar:"docs",previous:{title:"ConfigMap Volume Mounts",permalink:"/kubernetes/60-configmaps-and-secrets/configmaps-volume-mounts"},next:{title:"Secrets Exercise Explanation",permalink:"/kubernetes/60-configmaps-and-secrets/secrets-exercise-explanation"}},i=[{value:"Types of Secrets",id:"types-of-secrets",children:[]},{value:"Secret Types",id:"secret-types",children:[{value:"Generic",id:"generic",children:[]},{value:"TLS",id:"tls",children:[]},{value:"Docker Registry",id:"docker-registry",children:[]}]},{value:"Creating Generic Secrets",id:"creating-generic-secrets",children:[]},{value:"Accessing Secrets Using <code>kubectl</code>",id:"accessing-secrets-using-kubectl",children:[]},{value:"Editing a Secret",id:"editing-a-secret",children:[{value:"Exercise",id:"exercise",children:[]}]},{value:"Consuming Secrets from Applications",id:"consuming-secrets-from-applications",children:[{value:"Exercise",id:"exercise-1",children:[]}]},{value:"How Secret Secrets are",id:"how-secret-secrets-are",children:[]},{value:"Links",id:"links",children:[]}],o={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Secrets are represented as key value pair and thus are very similar to ConfigMaps. However, ConfigMaps are meant for non-sensitive configuration data aiming at making application code portable across environments. So - analog to ConfigMaps - ",Object(a.b)("strong",{parentName:"p"},"Secrets are key value sets but for sensitive data"),"."),Object(a.b)("h2",{id:"types-of-secrets"},"Types of Secrets"),Object(a.b)("p",null,'"Secrets should have a Type field to allow the Kubelet and other system components to take action based on the secret\'s type." ',"[4]"),Object(a.b)("h2",{id:"secret-types"},"Secret Types"),Object(a.b)("p",null,"You may have noticed that - compared to the creation of ConfigMaps - there's an additional argument named ",Object(a.b)("inlineCode",{parentName:"p"},"generic"),"."),Object(a.b)("p",null,"Secrets have an additional ",Object(a.b)("inlineCode",{parentName:"p"},"type"),"-field that may tell other Kubernetes components to deal a particular Secret in a particular way."),Object(a.b)("p",null,"The following Secret Types are often supported:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Generic (Opaque)"),Object(a.b)("li",{parentName:"ul"},"Docker Registry"),Object(a.b)("li",{parentName:"ul"},"TLS")),Object(a.b)("h3",{id:"generic"},"Generic"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"The most common secret type is ",Object(a.b)("inlineCode",{parentName:"strong"},"generic")," / ",Object(a.b)("inlineCode",{parentName:"strong"},"opaque"))," and is meant for creating secrets from a local file, local directory or a fixed value as provided with a literal. "),Object(a.b)("p",null,"This lesson focuses the secret type ",Object(a.b)("inlineCode",{parentName:"p"},"generic")," and you will find practical examples below."),Object(a.b)("h3",{id:"tls"},"TLS"),Object(a.b)("p",null,"Kubernetes offers a tooling to manage TLS Certificates as proposed in the ACME draft ","[6]","."),Object(a.b)("p",null,"Kubernetes: "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"lets you provision TLS certificates signed by a Certificate Authority (CA) that you control. These CA and certificates can be used by your workloads to establish trust. ","[7]")),Object(a.b)("p",null,"See ","[7]"," to learn more about managing TLS Certificates with Kubernetes as the topic is outside of this lesson."),Object(a.b)("h3",{id:"docker-registry"},"Docker Registry"),Object(a.b)("p",null,"So far all container images have been pulled from dockerhub","[5]",", the Kubernetes default registry. Often there are reasons to use alternative container registries. One reason may be to chose a registry being within the same network as the Kubernetes cluser so that traffic of pulling container images is contained within the private network."),Object(a.b)("p",null,"In the case a private registry is to be used Kubernetes has to authenticate requests issued towards the registry. This is the purpose of Docker Registry Secrets."),Object(a.b)("p",null,"Creating Container Registry Secrets will be covered in a later lesson."),Object(a.b)("h2",{id:"creating-generic-secrets"},"Creating Generic Secrets"),Object(a.b)("p",null,"Generic Secrets is what most people associated with Secrets. They are often used to represent access credentials such as host, username and password sets."),Object(a.b)("p",null,"The syntax for creating a ",Object(a.b)("inlineCode",{parentName:"p"},"generic")," Secret is close to creating a ConfigMap. They can be created from literals:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create secret generic area51 --from-literal=are-we-alone=dontknow --from-literal=username=admin --from-literal=password=ooHao9oh\n")),Object(a.b)("p",null,"Or from files (or a mixture of both):"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"  kubectl create secret generic area52 --from-file=./90-username.txt --from-file=AA-password.txt\n")),Object(a.b)("p",null,"Where ",Object(a.b)("inlineCode",{parentName:"p"},"90-username.txt")," may look like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"fileadmin\n")),Object(a.b)("p",null,"And ",Object(a.b)("inlineCode",{parentName:"p"},"AA-password.txt")," contains a password in a single line:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Gash1voh\n")),Object(a.b)("h2",{id:"accessing-secrets-using-kubectl"},"Accessing Secrets Using ",Object(a.b)("inlineCode",{parentName:"h2"},"kubectl")),Object(a.b)("p",null,"Once created secrets can be listed as usual using ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl get"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get secrets\n")),Object(a.b)("p",null,"Note that Kubernetes refers to the generic type as ",Object(a.b)("inlineCode",{parentName:"p"},"Opaque")," which means that the Secret is a list of arbitrary key value pairs. This is in contrast to purpose bound types such as TLS and Docker Registry Secrets which are associated with additional behavor of the Kubernetes cluster."),Object(a.b)("p",null,"In order to get more information about the Secret ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl describe")," helps:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl describe secret area51\n")),Object(a.b)("p",null,"This won't print the Secret's values but it will show its metadata and keys."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Secret values can be decoded")," by issuing:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get secret area51 -o yaml\n")),Object(a.b)("p",null,"Generally speaking ",Object(a.b)("strong",{parentName:"p"},"it is a bad idea to store secrets in a plain text file that can be purposely or accidentally checked into a source control system such as Git.")," Do not store your secrets outside of an encrypted password store.\nIf you are aware of this and take care of excluding YAML definitions of your Secrets from source control, it is ok to have YAML files though."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Did you recognize that the values of the Secret do not match the values that have been passed during their creation?")),Object(a.b)("h2",{id:"editing-a-secret"},"Editing a Secret"),Object(a.b)("p",null,"Secrets can be edited by using:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl edit secrets area51\n")),Object(a.b)("p",null,"On most unix/linux computers this will open a local text editor open such as ",Object(a.b)("inlineCode",{parentName:"p"},"vim")," ","[8]","."),Object(a.b)("p",null,"Saving the edited Secret will automatically ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," the secret as if ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl replace")," had been executed."),Object(a.b)("h3",{id:"exercise"},"Exercise"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Try to change the value of corresponding to the key ",Object(a.b)("inlineCode",{parentName:"strong"},"username")," and save it.")),Object(a.b)("p",null,"Do you receive the following error?"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'error: secrets "area51" could not be patched: error decoding from json: illegal base64 data at input byte 4\n')),Object(a.b)("p",null,"The reason why this command didn't succeed is because ",Object(a.b)("strong",{parentName:"p"},"Secret values are base64 encoded by Kubernetes"),". This is not encryption but at least it obfuscated values so that a brief look at them doesn't tell the secret. This is not really safe but we'll come back to this later. For now, just be aware that Secret values are base64 encoded and therefore ",Object(a.b)("strong",{parentName:"p"},"pasting plain text values won't work")," (well it may be possible to store the Secret but you'll have trouble during decoding later)."),Object(a.b)("p",null,"So how can a string be base64 encoded? There are plenty of ways but on linux/unix machines this may do the trick:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'echo "test" | base64\n')),Object(a.b)("p",null,"The resulting string can be pasted into the Secret during editting."),Object(a.b)("p",null,"As with ConfigMaps changes to Secrets are automatically available in consuming Pods after a few seconds ",Object(a.b)("strong",{parentName:"p"},"if the Secret has been mounted as a volume"),"."),Object(a.b)("h2",{id:"consuming-secrets-from-applications"},"Consuming Secrets from Applications"),Object(a.b)("p",null,"Using Secrets from a Pod is similar to using ConfigMaps."),Object(a.b)("h3",{id:"exercise-1"},"Exercise"),Object(a.b)("p",null,"Use your new knowledge learned during the the ConfigMap lessons and:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a Pod and consume the previously created Secret ",Object(a.b)("inlineCode",{parentName:"li"},"area51")," as environment variables."),Object(a.b)("li",{parentName:"ol"},"Create a Pod and consume the previously created Secret ",Object(a.b)("inlineCode",{parentName:"li"},"area52")," as a mounted volume.")),Object(a.b)("p",null,"Hints:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Use ",Object(a.b)("inlineCode",{parentName:"li"},"secretKeyRef")," instead of ",Object(a.b)("inlineCode",{parentName:"li"},"configKeyRef"),"."),Object(a.b)("li",{parentName:"ol"},"Use ",Object(a.b)("inlineCode",{parentName:"li"},"secret")," instead of ",Object(a.b)("inlineCode",{parentName:"li"},"configMap")," when describing the ",Object(a.b)("inlineCode",{parentName:"li"},"volume"),". Also change ",Object(a.b)("inlineCode",{parentName:"li"},"name")," to ",Object(a.b)("inlineCode",{parentName:"li"},"secretName")," to refer to your Secret."),Object(a.b)("li",{parentName:"ol"},"Read the Kubernetes documentation ","[3]"," if you want to see examplary Pod definitions.")),Object(a.b)("h2",{id:"how-secret-secrets-are"},"How Secret Secrets are"),Object(a.b)("p",null,"While Secrets are meant to deal with access credentials such as certificates and passwords, it surprises that - by default - ",Object(a.b)("strong",{parentName:"p"},"Kubernetes stores Secrets into its etcd","[1]"," data store without encryption"),". However, it is possible to configure a Kubernetes cluster to encrypt Secrets ","[2]","."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Using Secrets makes it then easier to apply encryption as a cluster wide setting"),". It is also to be expected that the handling of Secrets becomes more secure with future Kubernetes releaes."),Object(a.b)("p",null,"Hence, ",Object(a.b)("strong",{parentName:"p"},"even when Secrets are unencrypted, it is a best practise to use them"),"."),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"etcd, ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://etcd.io/"}),"https://etcd.io/")),Object(a.b)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Encrypting Secret Data at Rest, ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"}),"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/")),Object(a.b)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, Secrets, ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/secret/"}),"https://kubernetes.io/docs/concepts/configuration/secret/")),Object(a.b)("li",{parentName:"ol"},"Kubernetes Design Document, ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/auth/secrets.md"}),"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/auth/secrets.md")),Object(a.b)("li",{parentName:"ol"},"dockerhub, ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://hub.docker.com/"}),"https://hub.docker.com/")),Object(a.b)("li",{parentName:"ol"},"ACME - Automatic Certificate Management Environment, ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ietf-wg-acme/acme/"}),"https://github.com/ietf-wg-acme/acme/")),Object(a.b)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Manage TLS Certificates in a Cluster, ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/"}),"https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/")),Object(a.b)("li",{parentName:"ol"},"Vim - The Ubiquitous Text Editor, ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.vim.org/"}),"https://www.vim.org/"))))}l.isMDXComponent=!0},138:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||c;return r?a.a.createElement(m,i({ref:t},l,{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,s=new Array(c);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<c;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);