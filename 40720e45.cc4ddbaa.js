(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(1),a=(t(0),t(138));const o={id:"secrets-exercise-explanation",title:"Secrets Exercise Explanation"},c={id:"kubernetes/60-configmaps-and-secrets/secrets-exercise-explanation",title:"Secrets Exercise Explanation",description:"Here you can find possible solutions to the previous exercise.",source:"@site/docs/kubernetes/60-configmaps-and-secrets/90-secrets-exercise-explanation.md",permalink:"/kubernetes/60-configmaps-and-secrets/secrets-exercise-explanation",sidebar:"docs",previous:{title:"Secrets",permalink:"/kubernetes/60-configmaps-and-secrets/secrets"},next:{title:"Jobs",permalink:"/kubernetes/70-jobs/jobs"}},s=[],i={rightToc:s};function u({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here you can find possible solutions to the previous exercise."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Create a Pod and consume the previously created Secret ",Object(a.b)("inlineCode",{parentName:"strong"},"area51")," as environment variables"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox-secrets\nspec:\n  containers:\n    - image: busybox \n      name: busybox-secrets-container\n      command:\n        - "env"        \n      env:\n        - name: USERNAME\n          valueFrom:\n            secretKeyRef:\n              name: area51\n              key: username\n        - name: PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: area51\n              key: password\n  restartPolicy: Never\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Create a Pod and consume the previously created Secret ",Object(a.b)("inlineCode",{parentName:"strong"},"area52")," as a mounted volume"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox-secrets-files\nspec:\n  containers:\n    - image: busybox \n      name: busybox-secrets-files-container\n      command:\n        - "sh"\n        - "-c"        \n      args:   \n        - "ls /secrets; cat /secrets/90-username.txt; echo \\" \\"; cat /secrets/AA-password.txt"             \n      volumeMounts:\n        - name: secrets-volume\n          mountPath: /secrets\n  volumes:\n    - name: secrets-volume\n      secret:\n        secretName: area52\n  restartPolicy: Never\n')))}u.isMDXComponent=!0},138:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},l=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,d=l["".concat(c,".").concat(m)]||l[m]||b[m]||o;return t?a.a.createElement(d,s({ref:n},u,{components:t})):a.a.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);