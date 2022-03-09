"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8504],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16165:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var r,a=n(87462),s=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"secrets",title:"Secrets"},c=void 0,p={unversionedId:"kubernetes/configmaps-and-secrets/secrets",id:"kubernetes/configmaps-and-secrets/secrets",isDocsHomePage:!1,title:"Secrets",description:"Related Videos",source:"@site/docs/kubernetes/60-configmaps-and-secrets/80-secrets.md",sourceDirName:"kubernetes/60-configmaps-and-secrets",slug:"/kubernetes/configmaps-and-secrets/secrets",permalink:"/kubernetes/configmaps-and-secrets/secrets",tags:[],version:"current",sidebarPosition:80,frontMatter:{id:"secrets",title:"Secrets"},sidebar:"docs",previous:{title:"ConfigMap Volume Mounts",permalink:"/kubernetes/configmaps-and-secrets/configmaps-volume-mounts"},next:{title:"Secrets Exercise Explanation",permalink:"/kubernetes/configmaps-and-secrets/secrets-exercise-explanation"}},u=[{value:"Related Videos",id:"related-videos",children:[]},{value:"Types of Secrets",id:"types-of-secrets",children:[]},{value:"Secret Types",id:"secret-types",children:[{value:"Generic",id:"generic",children:[]},{value:"TLS",id:"tls",children:[]},{value:"Docker Registry",id:"docker-registry",children:[]}]},{value:"Creating Generic Secrets",id:"creating-generic-secrets",children:[]},{value:"Accessing Secrets Using <code>kubectl</code>",id:"accessing-secrets-using-kubectl",children:[]},{value:"Editing a Secret",id:"editing-a-secret",children:[{value:"Exercise",id:"exercise",children:[]}]},{value:"Showing a Secret Value",id:"showing-a-secret-value",children:[]},{value:"Consuming Secrets from Applications",id:"consuming-secrets-from-applications",children:[{value:"Exercise",id:"exercise-1",children:[]}]},{value:"How Secret Secrets are",id:"how-secret-secrets-are",children:[]},{value:"Links",id:"links",children:[]}],d=(r="VideoContainer",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:u};function k(e){var t=e.components,n=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"related-videos"},"Related Videos"),(0,i.kt)(d,{list:[{src:"https://www.youtube-nocookie.com/embed/vFGlpm1ctYw",title:"Secrets"}],mdxType:"VideoContainer"}),(0,i.kt)("p",null,"Secrets are represented as key value pair and thus are very similar to ConfigMaps. However, ConfigMaps are meant for non-sensitive configuration data aiming at making application code portable across environments. So - analog to ConfigMaps - ",(0,i.kt)("strong",{parentName:"p"},"Secrets are key value sets but for sensitive data"),"."),(0,i.kt)("h2",{id:"types-of-secrets"},"Types of Secrets"),(0,i.kt)("p",null,'"Secrets should have a Type field to allow the Kubelet and other system components to take action based on the secret\'s type." ',"[4]"),(0,i.kt)("h2",{id:"secret-types"},"Secret Types"),(0,i.kt)("p",null,"You may have noticed that - compared to the creation of ConfigMaps - there's an additional argument named ",(0,i.kt)("inlineCode",{parentName:"p"},"generic"),"."),(0,i.kt)("p",null,"Secrets have an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"-field that tells other Kubernetes components to deal with a particular Secret in a particular way."),(0,i.kt)("p",null,"The following Secret Types are often supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generic (Opaque)"),(0,i.kt)("li",{parentName:"ul"},"Docker Registry"),(0,i.kt)("li",{parentName:"ul"},"TLS")),(0,i.kt)("h3",{id:"generic"},"Generic"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The most common secret type is ",(0,i.kt)("inlineCode",{parentName:"strong"},"generic")," / ",(0,i.kt)("inlineCode",{parentName:"strong"},"opaque"))," and is meant for creating secrets from a local file, local directory or a fixed value as provided with a literal."),(0,i.kt)("p",null,"This lesson focuses the secret type ",(0,i.kt)("inlineCode",{parentName:"p"},"generic")," and you will find practical examples below."),(0,i.kt)("h3",{id:"tls"},"TLS"),(0,i.kt)("p",null,"Kubernetes offers a tooling to manage TLS Certificates as proposed in the ACME draft ","[6]","."),(0,i.kt)("p",null,"Kubernetes:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lets you provision TLS certificates signed by a Certificate Authority (CA) that you control. These CA and certificates can be used by your workloads to establish trust. ","[7]")),(0,i.kt)("p",null,"See ","[7]"," to learn more about managing TLS Certificates with Kubernetes as the topic is outside of this lesson."),(0,i.kt)("h3",{id:"docker-registry"},"Docker Registry"),(0,i.kt)("p",null,"So far all container images have been pulled from Docker Hub","[5]",", the Kubernetes default registry. Often there are reasons to use alternative container registries. One reason may be to choose a registry being within the same network as the Kubernetes cluster so that traffic of pulling container images is contained within the private network."),(0,i.kt)("p",null,"In the case a private registry is to be used Kubernetes has to authenticate requests issued towards the registry. This is the purpose of Docker Registry Secrets."),(0,i.kt)("p",null,"Creating Container Registry Secrets will be covered in a later lesson."),(0,i.kt)("h2",{id:"creating-generic-secrets"},"Creating Generic Secrets"),(0,i.kt)("p",null,"Generic Secrets is what most people associated with Secrets. They are often used to represent access credentials such as host, username and password sets."),(0,i.kt)("p",null,"The syntax for creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"generic")," Secret is close to creating a ConfigMap. They can be created from literals:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create secret generic area51 --from-literal=are-we-alone=dontknow --from-literal=username=admin --from-literal=password=ooHao9oh\n")),(0,i.kt)("p",null,"Or from files (or a mixture of both):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create secret generic area52 --from-file=./90-username.txt --from-file=AA-password.txt\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"90-username.txt")," may look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fileadmin\n")),(0,i.kt)("p",null,"And ",(0,i.kt)("inlineCode",{parentName:"p"},"AA-password.txt")," contains a password in a single line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Gash1voh\n")),(0,i.kt)("h2",{id:"accessing-secrets-using-kubectl"},"Accessing Secrets Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"kubectl")),(0,i.kt)("p",null,"Once created secrets can be listed as usual using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get secrets\n")),(0,i.kt)("p",null,"Note that Kubernetes refers to the generic type as ",(0,i.kt)("inlineCode",{parentName:"p"},"Opaque")," which means that the Secret is a list of arbitrary key value pairs. This is in contrast to purpose bound types such as TLS and Docker Registry Secrets which are associated with additional behavior of the Kubernetes cluster."),(0,i.kt)("p",null,"In order to get more information about the Secret ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl describe")," helps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl describe secret area51\n")),(0,i.kt)("p",null,"This won't print the Secret's values, but it will show its metadata and keys."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Secret values can be decoded")," by issuing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get secret area51 -o yaml\n")),(0,i.kt)("p",null,"Generally speaking ",(0,i.kt)("strong",{parentName:"p"},"it is a bad idea to store secrets in a plain text file that can be purposely or accidentally checked into a source control system such as Git.")," Do not store your secrets outside of an encrypted password store. If you are aware of this and take care of excluding YAML definitions of your Secrets from source control, it is ok to have YAML files though."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Did you recognize that the values of the Secret do not match the values that have been passed during their creation?")),(0,i.kt)("h2",{id:"editing-a-secret"},"Editing a Secret"),(0,i.kt)("p",null,"Secrets can be edited by using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl edit secrets area51\n")),(0,i.kt)("p",null,"On most Unix/Linux computers this will open a local text editor open such as ",(0,i.kt)("inlineCode",{parentName:"p"},"nano")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"vim")," ","[8]","."),(0,i.kt)("p",null,"Saving the edited Secret will automatically ",(0,i.kt)("inlineCode",{parentName:"p"},"replace")," the secret as if ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl replace")," had been executed."),(0,i.kt)("h3",{id:"exercise"},"Exercise"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Try to change the value corresponding to the key ",(0,i.kt)("inlineCode",{parentName:"strong"},"username")," and save it.")),(0,i.kt)("p",null,"Do you receive the following error?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'error: secrets "area51" could not be patched: error decoding from json: illegal base64 data at input byte 4\n')),(0,i.kt)("p",null,"The reason why this command didn't succeed is that ",(0,i.kt)("strong",{parentName:"p"},"Secret values are base64 encoded by Kubernetes"),". This is not encryption but at least it obfuscated values so that a brief look at them doesn't tell the secret. This is not really safe, but we'll come back to this later. For now, just be aware that Secret values are base64 encoded and therefore ",(0,i.kt)("strong",{parentName:"p"},"pasting plain text values won't work")," (well it may be possible to store the Secret, but you'll have trouble during decoding later)."),(0,i.kt)("p",null,"So how can a string be base64 encoded? There are plenty of ways but on Unix/Linux machines this may do the trick:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo "test" | base64\n')),(0,i.kt)("p",null,"The resulting string can be pasted into the Secret during editing."),(0,i.kt)("p",null,"As with ConfigMaps changes to Secrets are automatically available in consuming Pods after a few seconds ",(0,i.kt)("strong",{parentName:"p"},"if the Secret has been mounted as a volume"),"."),(0,i.kt)("h2",{id:"showing-a-secret-value"},"Showing a Secret Value"),(0,i.kt)("p",null,"Assuming you have the command ",(0,i.kt)("inlineCode",{parentName:"p"},"base64")," installed retrieving the decoded value from a Secret can be done with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl get secret area51 -o jsonpath="{.data.username}" | base64 --decode\n')),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," is the key of the ",(0,i.kt)("inlineCode",{parentName:"p"},"area51")," Secret to which the value should be retrieved and decoded."),(0,i.kt)("h2",{id:"consuming-secrets-from-applications"},"Consuming Secrets from Applications"),(0,i.kt)("p",null,"Using Secrets from a Pod is similar to using ConfigMaps."),(0,i.kt)("h3",{id:"exercise-1"},"Exercise"),(0,i.kt)("p",null,"Use your new knowledge learned during the ConfigMap lessons and:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a Pod and consume the previously created Secret ",(0,i.kt)("inlineCode",{parentName:"li"},"area51")," as environment variables."),(0,i.kt)("li",{parentName:"ol"},"Create a Pod and consume the previously created Secret ",(0,i.kt)("inlineCode",{parentName:"li"},"area52")," as a mounted volume.")),(0,i.kt)("p",null,"Hints:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"secretKeyRef")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"configKeyRef"),"."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"secret")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"configMap")," when describing the ",(0,i.kt)("inlineCode",{parentName:"li"},"volume"),". Also change ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"secretName")," to refer to your Secret."),(0,i.kt)("li",{parentName:"ol"},"Read the Kubernetes documentation ","[3]"," if you want to see exemplary Pod definitions.")),(0,i.kt)("h2",{id:"how-secret-secrets-are"},"How Secret Secrets are"),(0,i.kt)("p",null,"While Secrets are meant to deal with access credentials such as certificates and passwords, it surprises that - by default - ",(0,i.kt)("strong",{parentName:"p"},"Kubernetes stores Secrets into its etcd","[1]"," data store without encryption"),". However, it is possible to configure a Kubernetes cluster to encrypt Secrets ","[2]","."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using Secrets makes it easier to apply encryption as a cluster wide setting"),". It is also to be expected that the handling of Secrets becomes more secure with future Kubernetes releases."),(0,i.kt)("p",null,"Hence, ",(0,i.kt)("strong",{parentName:"p"},"even when Secrets are unencrypted, it is a best practice to use them"),"."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"etcd, ",(0,i.kt)("a",{parentName:"li",href:"https://etcd.io/"},"https://etcd.io/")),(0,i.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Encrypting Secret Data at Rest, ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"},"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/")),(0,i.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Concepts, Secrets, ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"https://kubernetes.io/docs/concepts/configuration/secret/")),(0,i.kt)("li",{parentName:"ol"},"Kubernetes Design Document, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/auth/secrets.md"},"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/auth/secrets.md")),(0,i.kt)("li",{parentName:"ol"},"Docker Hub, ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/"},"https://hub.docker.com/")),(0,i.kt)("li",{parentName:"ol"},"ACME - Automatic Certificate Management Environment, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ietf-wg-acme/acme/"},"https://github.com/ietf-wg-acme/acme/")),(0,i.kt)("li",{parentName:"ol"},"Kubernetes Documentation, Tasks, Manage TLS Certificates in a Cluster, ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/"},"https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/")),(0,i.kt)("li",{parentName:"ol"},"Vim - The Ubiquitous Text Editor, ",(0,i.kt)("a",{parentName:"li",href:"https://www.vim.org/"},"https://www.vim.org/"))))}k.isMDXComponent=!0}}]);