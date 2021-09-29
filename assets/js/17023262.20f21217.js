"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2647],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9865:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"container-overview",title:"Container Overview"},s=void 0,c={unversionedId:"containerization/container-overview",id:"containerization/container-overview",isDocsHomePage:!1,title:"Container Overview",description:"The goal of the Container lessons are to enable developers to create container images as a preparation for the Kubernetes Training.",source:"@site/docs/containerization/05-overview.md",sourceDirName:"containerization",slug:"/containerization/container-overview",permalink:"/containerization/container-overview",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"container-overview",title:"Container Overview"},sidebar:"docs",previous:{title:"Kubernetes Training Overview",permalink:"/training-overview"},next:{title:"Containers Basics",permalink:"/containerization/container-intro"}},p=[{value:"Scope",id:"scope",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Skills",id:"skills",children:[]},{value:"Operating System",id:"operating-system",children:[]},{value:"Editor",id:"editor",children:[]}]},{value:"Links",id:"links",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The goal of the Container lessons are to enable developers to create container images as a ",(0,i.kt)("strong",{parentName:"p"},"preparation for the Kubernetes Training"),"."),(0,i.kt)("p",null,"Therefore, the training will cover container basics and use Docker as the container image format. However, the training does not aim to enable developers to deploy application workloads to production environments using stand-alone Docker (in contrast to Docker as a container runtime in Kubernetes)."),(0,i.kt)("h2",{id:"scope"},"Scope"),(0,i.kt)("p",null,"At the end of this training you will know:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What a container is."),(0,i.kt)("li",{parentName:"ul"},"What a container images is."),(0,i.kt)("li",{parentName:"ul"},"How to start a container."),(0,i.kt)("li",{parentName:"ul"},"How to build a container image."),(0,i.kt)("li",{parentName:"ul"},"What a container registry is."),(0,i.kt)("li",{parentName:"ul"},"How to publish a local container image to a container registry."),(0,i.kt)("li",{parentName:"ul"},"What a container volume is.")),(0,i.kt)("p",null,"By the end of the training you should be able to wrap simple applications into container images which is a prerequisite for deploying workloads to Kubernetes."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The training aims to address a broad target audience. The following constraints apply."),(0,i.kt)("h3",{id:"skills"},"Skills"),(0,i.kt)("p",null,"The Container Training assumes that you are a developer."),(0,i.kt)("p",null,"You should know:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"at least one programming language")),(0,i.kt)("p",null,"Experience in the following areas are helpful but not absolutely necessary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unix/Linux operating systems."),(0,i.kt)("li",{parentName:"ul"},"Virtualization such as vmware ","[1]"," or the XEN hypervisor ","[2]","."),(0,i.kt)("li",{parentName:"ul"},"Virtual Infrastructures such as Amazon Web Services ","[3]"," (in particular EC2) or OpenStack ","[4]","."),(0,i.kt)("li",{parentName:"ul"},"12 Factor Manifest ","[5]")),(0,i.kt)("p",null,"Training material will try to provide references and explain core concepts where where necessary."),(0,i.kt)("h3",{id:"operating-system"},"Operating System"),(0,i.kt)("p",null,"It is assumed that you are using an unix/linux operating system with access to a terminal application and a shell. On a Mac ",(0,i.kt)("inlineCode",{parentName:"p"},"iTerm2")," ","[1]"," and either ",(0,i.kt)("inlineCode",{parentName:"p"},"Bash")," ","[2]"," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Zsh")," ","[3]"," will work fine."),(0,i.kt)("p",null,"In case you are using Microsoft Windows you may want to get a ",(0,i.kt)("inlineCode",{parentName:"p"},"Cygwin")," ","[4]"," shell. However, the training has not been tested under Windows so you may run into issues."),(0,i.kt)("h3",{id:"editor"},"Editor"),(0,i.kt)("p",null,"Have your favorite text editor ready. Anything from Vim ","[6]"," to Microsoft Visual Studio Code ","[7]"," will work. Both editors are free and available across operating systems such as Windows, major Linux Distros and MacOS. Feel free to use your favorite editor though."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"vmware, ",(0,i.kt)("a",{parentName:"li",href:"https://www.vmware.com/de.html"},"https://www.vmware.com/de.html")),(0,i.kt)("li",{parentName:"ol"},"Xen Project, ",(0,i.kt)("a",{parentName:"li",href:"https://xenproject.org/"},"https://xenproject.org/")),(0,i.kt)("li",{parentName:"ol"},"Amazon Web Services (AWS), ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/"},"https://aws.amazon.com/")),(0,i.kt)("li",{parentName:"ol"},"OpenStack, ",(0,i.kt)("a",{parentName:"li",href:"https://www.openstack.org/"},"https://www.openstack.org/")),(0,i.kt)("li",{parentName:"ol"},"The Twelve-Factor App, ",(0,i.kt)("a",{parentName:"li",href:"https://12factor.net"},"https://12factor.net")),(0,i.kt)("li",{parentName:"ol"},"Vim, ",(0,i.kt)("a",{parentName:"li",href:"https://www.vim.org/"},"https://www.vim.org/")),(0,i.kt)("li",{parentName:"ol"},"Microsoft Visual Studio Code, ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"https://code.visualstudio.com/"))))}m.isMDXComponent=!0}}]);