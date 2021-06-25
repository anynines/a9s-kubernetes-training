(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(a,".").concat(d)]||s[d]||p[d]||i;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var b=2;b<i;b++)a[b]=n[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(112)),a={id:"creating-images",title:"Creating Container Images"},c={unversionedId:"docker/creating-images",id:"docker/creating-images",isDocsHomePage:!1,title:"Creating Container Images",description:"So far we have been using existing container images. This is nice to learn how to use them but in order to run your own workloads in containers, it is necessary to learn how to build container images yourself.",source:"@site/docs/docker/30-creating-a-container-image.md",slug:"/docker/creating-images",permalink:"/docker/creating-images",version:"current",sidebar:"docs",previous:{title:"Docker Basics",permalink:"/docker/docker-basics"},next:{title:"Containerizing a Simple Web App",permalink:"/docker/simple-web-app"}},l=[{value:"From Dockerfile to Container Image",id:"from-dockerfile-to-container-image",children:[]},{value:"Workflow Summary",id:"workflow-summary",children:[]},{value:"Links",id:"links",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"So far we have been using existing container images. This is nice to learn how to use them but in order to run your own workloads in containers, it is necessary to learn how to build container images yourself."),Object(i.b)("h2",{id:"from-dockerfile-to-container-image"},"From Dockerfile to Container Image"),Object(i.b)("p",null,"A Dockerfile describes how a container image is to be created. So let's have a first look at ",Object(i.b)("strong",{parentName:"p"},"the container image creation workflow"),"."),Object(i.b)("p",null,"Create a working directory for the training:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir workspace-ct\ncd workspace-ct\n")),Object(i.b)("p",null,"Create a working directory for your new container image:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir 10-hello-container-world\ncd 10-hello-container-world\n")),Object(i.b)("p",null,"In your ",Object(i.b)("inlineCode",{parentName:"p"},"hello-container-world")," working directory create a file named ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": Visual Studio Code ","[1]"," offers a Docker plugin that will assist you when working with Docker including authoring Dockerfiles ","[2]","."),Object(i.b)("p",null,"Paste this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'FROM busybox:1.31.1\nWORKDIR /app\nCMD ["printf", "Hello World of Containers\\n"]\n')),Object(i.b)("p",null,"And run your new image:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"docker image build -t hello-container-world:0.1.0 .\n")),Object(i.b)("p",null,"This will build a container local container image by the image name ",Object(i.b)("inlineCode",{parentName:"p"},"hello-container-world")," and tag it with the tag ",Object(i.b)("inlineCode",{parentName:"p"},"0.1.0"),"."),Object(i.b)("p",null,"You should see ",Object(i.b)("inlineCode",{parentName:"p"},"Hello World of Containers")," in your terminal. "),Object(i.b)("p",null,"Run it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"docker run hello-container-world:0.1.0\n")),Object(i.b)("p",null,"You should see:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Hello World of Containers\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Congratulations, you have built your first container image!")),Object(i.b)("h2",{id:"workflow-summary"},"Workflow Summary"),Object(i.b)("p",null,"Summarizing the workflow above, this is what you did to create your first container image:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a working directory for your container image"),Object(i.b)("li",{parentName:"ol"},"Create a Dockerfile"),Object(i.b)("li",{parentName:"ol"},"Build and Tag the container image from the Dockerfile")),Object(i.b)("p",null,"As you can see from this minimalistic example, defining a container image can be very simple."),Object(i.b)("h2",{id:"links"},"Links"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Microsoft Visual Studio Code, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"https://code.visualstudio.com/")),Object(i.b)("li",{parentName:"ol"},"Visual Studio Code, Documentation, Working with Containers, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/containers/overview"}),"https://code.visualstudio.com/docs/containers/overview"))))}u.isMDXComponent=!0}}]);