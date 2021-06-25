(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{112:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),b=r,d=l["".concat(o,".").concat(b)]||l[b]||m[b]||s;return t?a.a.createElement(d,c(c({ref:n},u),{},{components:t})):a.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=b;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<s;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),s=(t(0),t(112)),o={id:"secrets-exercise-explanation",title:"Secrets Exercise Explanation"},c={unversionedId:"kubernetes/60-configmaps-and-secrets/secrets-exercise-explanation",id:"kubernetes/60-configmaps-and-secrets/secrets-exercise-explanation",isDocsHomePage:!1,title:"Secrets Exercise Explanation",description:"Here you can find possible solutions to the previous exercise.",source:"@site/docs/kubernetes/60-configmaps-and-secrets/90-secrets-exercise-explanation.md",slug:"/kubernetes/60-configmaps-and-secrets/secrets-exercise-explanation",permalink:"/kubernetes/60-configmaps-and-secrets/secrets-exercise-explanation",version:"current",sidebar:"docs",previous:{title:"Secrets",permalink:"/kubernetes/60-configmaps-and-secrets/secrets"},next:{title:"Jobs",permalink:"/kubernetes/70-jobs/jobs"}},i=[],u={rightToc:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Here you can find possible solutions to the previous exercise."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Create a Pod and consume the previously created Secret ",Object(s.b)("inlineCode",{parentName:"strong"},"area51")," as environment variables"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox-secrets\nspec:\n  containers:\n    - image: busybox\n      name: busybox-secrets-container\n      command:\n        - "env"\n      env:\n        - name: USERNAME\n          valueFrom:\n            secretKeyRef:\n              name: area51\n              key: username\n        - name: PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: area51\n              key: password\n  restartPolicy: Never\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Create a Pod and consume the previously created Secret ",Object(s.b)("inlineCode",{parentName:"strong"},"area52")," as a mounted volume"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox-secrets-files\nspec:\n  containers:\n    - image: busybox\n      name: busybox-secrets-files-container\n      command:\n        - "sh"\n        - "-c"\n      args:\n        - "ls /secrets; cat /secrets/90-username.txt; echo \\" \\"; cat /secrets/AA-password.txt"\n      volumeMounts:\n        - name: secrets-volume\n          mountPath: /secrets\n  volumes:\n    - name: secrets-volume\n      secret:\n        secretName: area52\n  restartPolicy: Never\n')))}p.isMDXComponent=!0}}]);