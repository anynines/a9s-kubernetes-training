(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(112)),o={id:"container-overview",title:"Container Overview"},c={unversionedId:"containerization/container-overview",id:"containerization/container-overview",isDocsHomePage:!1,title:"Container Overview",description:"The goal of the Container lessons are to enable developers to create container images as a preparation for the Kubernetes Training.",source:"@site/docs/containerization/05-overview.md",slug:"/containerization/container-overview",permalink:"/containerization/container-overview",version:"current",sidebar:"docs",previous:{title:"Kubernetes Training Overview",permalink:"/training-overview"},next:{title:"Containers Basics",permalink:"/containerization/container-intro"}},l=[{value:"Scope",id:"scope",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Skills",id:"skills",children:[]},{value:"Operating System",id:"operating-system",children:[]},{value:"Editor",id:"editor",children:[]}]},{value:"Links",id:"links",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The goal of the Container lessons are to enable developers to create container images as a ",Object(i.b)("strong",{parentName:"p"},"preparation for the Kubernetes Training"),"."),Object(i.b)("p",null,"Therefore, the training will cover container basics and use Docker as the container image format. However, the training does not aim to enable developers to deploy application workloads to production environments using stand-alone Docker (in contrast to Docker as a container runtime in Kubernetes)."),Object(i.b)("h2",{id:"scope"},"Scope"),Object(i.b)("p",null,"At the end of this training you will know:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"What a container is."),Object(i.b)("li",{parentName:"ul"},"What a container images is."),Object(i.b)("li",{parentName:"ul"},"How to start a container."),Object(i.b)("li",{parentName:"ul"},"How to build a container image."),Object(i.b)("li",{parentName:"ul"},"What a container registry is."),Object(i.b)("li",{parentName:"ul"},"How to publish a local container image to a container registry."),Object(i.b)("li",{parentName:"ul"},"What a container volume is.")),Object(i.b)("p",null,"By the end of the training you should be able to wrap simple applications into container images which is a prerequisite for deploying workloads to Kubernetes."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"The training aims to address a broad target audience. The following constraints apply."),Object(i.b)("h3",{id:"skills"},"Skills"),Object(i.b)("p",null,"The Container Training assumes that you are a developer."),Object(i.b)("p",null,"You should know:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"at least one programming language")),Object(i.b)("p",null,"Experience in the following areas are helpful but not absolutely necessary:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unix/Linux operating systems."),Object(i.b)("li",{parentName:"ul"},"Virtualization such as vmware ","[1]"," or the XEN hypervisor ","[2]","."),Object(i.b)("li",{parentName:"ul"},"Virtual Infrastructures such as Amazon Web Services ","[3]"," (in particular EC2) or OpenStack ","[4]","."),Object(i.b)("li",{parentName:"ul"},"12 Factor Manifest ","[5]")),Object(i.b)("p",null,"Training material will try to provide references and explain core concepts where where necessary."),Object(i.b)("h3",{id:"operating-system"},"Operating System"),Object(i.b)("p",null,"It is assumed that you are using an unix/linux operating system with access to a terminal application and a shell. On a Mac ",Object(i.b)("inlineCode",{parentName:"p"},"iTerm2")," ","[1]"," and either ",Object(i.b)("inlineCode",{parentName:"p"},"Bash")," ","[2]"," or ",Object(i.b)("inlineCode",{parentName:"p"},"Zsh")," ","[3]"," will work fine."),Object(i.b)("p",null,"In case you are using Microsoft Windows you may want to get a ",Object(i.b)("inlineCode",{parentName:"p"},"Cygwin")," ","[4]"," shell. However, the training has not been tested under Windows so you may run into issues."),Object(i.b)("h3",{id:"editor"},"Editor"),Object(i.b)("p",null,"Have your favorite text editor ready. Anything from Vim ","[6]"," to Microsoft Visual Studio Code ","[7]"," will work. Both editors are free and available across operating systems such as Windows, major Linux Distros and MacOS. Feel free to use your favorite editor though."),Object(i.b)("h2",{id:"links"},"Links"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"vmware, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.vmware.com/de.html"}),"https://www.vmware.com/de.html")),Object(i.b)("li",{parentName:"ol"},"Xen Project, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://xenproject.org/"}),"https://xenproject.org/")),Object(i.b)("li",{parentName:"ol"},"Amazon Web Services (AWS), ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://aws.amazon.com/"}),"https://aws.amazon.com/")),Object(i.b)("li",{parentName:"ol"},"OpenStack, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.openstack.org/"}),"https://www.openstack.org/")),Object(i.b)("li",{parentName:"ol"},"The Twelve-Factor App, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://12factor.net"}),"https://12factor.net")),Object(i.b)("li",{parentName:"ol"},"Vim, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.vim.org/"}),"https://www.vim.org/")),Object(i.b)("li",{parentName:"ol"},"Microsoft Visual Studio Code, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"https://code.visualstudio.com/"))))}p.isMDXComponent=!0}}]);