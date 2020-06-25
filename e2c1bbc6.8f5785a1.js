(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{180:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(9),a=(t(0),t(185)),i={id:"container-workflow",title:"The Container Workflow"},c={id:"docker/container-workflow",isDocsHomePage:!1,title:"The Container Workflow",description:"To summarize the previous lessons a simple workflow of creating container images may look like this:",source:"@site/docs/docker/60-container-workflow.md",permalink:"/docker/container-workflow",sidebar:"docs",previous:{title:"Publishing a Container Image",permalink:"/docker/publish-image"},next:{title:"Docker Cheat Sheet",permalink:"/docker/docker-cheatsheet"}},l=[],u={rightToc:l};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To summarize the previous lessons a simple workflow of creating container images may look like this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Login with ",Object(a.b)("inlineCode",{parentName:"li"},"docker login <your-dockerhub-username>")),Object(a.b)("li",{parentName:"ol"},"Change application code and/or change the ",Object(a.b)("inlineCode",{parentName:"li"},"Dockerfile")),Object(a.b)("li",{parentName:"ol"},"Create a local image with ",Object(a.b)("inlineCode",{parentName:"li"},"docker -t <your-image> .")),Object(a.b)("li",{parentName:"ol"},"Test your local image with ",Object(a.b)("inlineCode",{parentName:"li"},"docker run -p <computer-port>:<container-port> <your-image>")),Object(a.b)("li",{parentName:"ol"},"Tag your image with ",Object(a.b)("inlineCode",{parentName:"li"},"docker tag <your-image> <your-dockerhub-username>/<your-image>:<tag>")),Object(a.b)("li",{parentName:"ol"},"Push the tagged image with ",Object(a.b)("inlineCode",{parentName:"li"},"docker push <your-dockerhub-username>/<your-image>:<tag>"))))}p.isMDXComponent=!0},185:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=n,f=m["".concat(i,".").concat(b)]||m[b]||s[b]||a;return t?o.a.createElement(f,c(c({ref:r},u),{},{components:t})):o.a.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);