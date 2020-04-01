(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=(n(0),n(138));const i={id:"container-overview",title:"Container Overview"},o={id:"containerization/container-overview",title:"Container Overview",description:"The goal of the Container lessons are to enable developers to create container images as a **preparation for the Kubernetes Training**.",source:"@site/docs/containerization/05-overview.md",permalink:"/containerization/container-overview",sidebar:"docs",previous:{title:"Kubernetes Training Overview",permalink:"/training-overview"},next:{title:"Containers Basics",permalink:"/containerization/container-intro"}},c=[{value:"Scope",id:"scope",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Skills",id:"skills",children:[]},{value:"Operating System",id:"operating-system",children:[]},{value:"Editor",id:"editor",children:[]}]},{value:"Links",id:"links",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The goal of the Container lessons are to enable developers to create container images as a ",Object(a.b)("strong",{parentName:"p"},"preparation for the Kubernetes Training"),"."),Object(a.b)("p",null,"Therefore, the training will cover container basics and use Docker as the container image format. However, the training does not aim to enable developers to deploy application workloads to production environments using stand-alone Docker (in contrast to Docker as a container runtime in Kubernetes)."),Object(a.b)("h2",{id:"scope"},"Scope"),Object(a.b)("p",null,"At the end of this training you will know:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"What a container is."),Object(a.b)("li",{parentName:"ul"},"What a container images is."),Object(a.b)("li",{parentName:"ul"},"How to start a container."),Object(a.b)("li",{parentName:"ul"},"How to build a container image."),Object(a.b)("li",{parentName:"ul"},"What a container registry is."),Object(a.b)("li",{parentName:"ul"},"How to publish a local container image to a container registry."),Object(a.b)("li",{parentName:"ul"},"What a container volume is.")),Object(a.b)("p",null,"By the end of the training you should be able to wrap simple applications into container images which is a prerequisite for deploying workloads to Kubernetes."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"The training aims to address a broad target audience. The following constraints apply."),Object(a.b)("h3",{id:"skills"},"Skills"),Object(a.b)("p",null,"The Container Training assumes that you are a developer."),Object(a.b)("p",null,"You should know:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"at least one programming language")),Object(a.b)("p",null,"Experience in the following areas are helpful but not absolutely necessary:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Unix/Linux operating systems."),Object(a.b)("li",{parentName:"ul"},"Virtualization such as vmware ","[1]"," or the XEN hypervisor ","[2]","."),Object(a.b)("li",{parentName:"ul"},"Virtual Infrastructures such as Amazon Web Services ","[3]"," (in particular EC2) or OpenStack ","[4]","."),Object(a.b)("li",{parentName:"ul"},"12 Factor Manifest ","[5]")),Object(a.b)("p",null,"Training material will try to provide references and explain core concepts where where necessary."),Object(a.b)("h3",{id:"operating-system"},"Operating System"),Object(a.b)("p",null,"It is assumed that you are using an unix/linux operating system with access to a terminal application and a shell. On a Mac ",Object(a.b)("inlineCode",{parentName:"p"},"iTerm2")," ","[1]"," and either ",Object(a.b)("inlineCode",{parentName:"p"},"Bash")," ","[2]"," or ",Object(a.b)("inlineCode",{parentName:"p"},"Zsh")," ","[3]"," will work fine."),Object(a.b)("p",null,"In case you are using Microsoft Windows you may want to get a ",Object(a.b)("inlineCode",{parentName:"p"},"Cygwin")," ","[4]"," shell. However, the training has not been tested under Windows so you may run into issues."),Object(a.b)("h3",{id:"editor"},"Editor"),Object(a.b)("p",null,"Have your favorite text editor ready. Anything from Vim ","[6]"," to Microsoft Visual Studio Code ","[7]"," will work. Both editors are free and available across operating systems such as Windows, major Linux Distros and MacOS. Feel free to use your favorite editor though."),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"vmware, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.vmware.com/de.html"}),"https://www.vmware.com/de.html")),Object(a.b)("li",{parentName:"ol"},"Xen Project, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://xenproject.org/"}),"https://xenproject.org/")),Object(a.b)("li",{parentName:"ol"},"Amazon Web Services (AWS), ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://aws.amazon.com/"}),"https://aws.amazon.com/")),Object(a.b)("li",{parentName:"ol"},"OpenStack, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.openstack.org/"}),"https://www.openstack.org/")),Object(a.b)("li",{parentName:"ol"},"The Twelve-Factor App, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://12factor.net"}),"https://12factor.net")),Object(a.b)("li",{parentName:"ol"},"Vim, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.vim.org/"}),"https://www.vim.org/")),Object(a.b)("li",{parentName:"ol"},"Microsoft Visual Studio Code, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"https://code.visualstudio.com/"))))}s.isMDXComponent=!0}}]);