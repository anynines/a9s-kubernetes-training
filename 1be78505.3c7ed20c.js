(window.webpackJsonp=window.webpackJsonp||[]).push([[11,49],{214:function(e,t,n){"use strict";var a=n(2),o=n(9),r=n(0),i=n.n(r),c=n(196),l=n.n(c),s=n(188),u=n(186),m=n(187),d=(n(130),n(190)),p=n(4),f=n(210),_=n.n(f),v=n(30),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).tagManagerArgs={gtmId:"GTM-KFW8C8L"},n}Object(p.a)(t,e);var n=t.prototype;return n.catchEvent=function(e,t){var n=window.addEventListener?"addEventListener":"attachEvent",a="attachEvent"===n?"onmessage":"message";(0,window[n])(a,(function(n){var a;n&&n.data&&(a=e,-1!==JSON.stringify(n.data).indexOf(a))&&t()}),!1)},n.componentDidMount=function(){v.a.canUseEventListeners&&(this.catchEvent("oil_optin_done",this.addAnalytics.bind(this)),this.catchEvent("oil_has_optedin",this.addAnalytics.bind(this)))},n.addAnalytics=function(){console.log("[GTM:\u2705] Analytics added."),_.a.initialize(this.tagManagerArgs)},n.render=function(){return null},t}(r.Component),h=function(){var e=Object(m.a)("js/oil.1.3.5-RELEASE.min.js"),t=null;i.a.useEffect((function(){t="//"+window.location.hostname+(window.location.port?":"+window.location.port:"")}),[]),console.log("Does render Oil");var n=""+(t+Object(m.a)("js/")),a=""+(t+Object(m.a)("js/vendorlist.json")),o=""+(t+Object(m.a)("js/vendors.json"));return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement("script",null,'\n          /*! 1.3.5-SNAPSHOT */!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=117)}({117:function(e,n,t){"use strict";!function(e,n){e.__cmp||(e.__cmp=function(){function t(e){if(e){var t=!0,r=n.querySelector(\'script[type="application/configuration"]#oil-configuration\');if(null!==r&&r.text)try{var a=JSON.parse(r.text);a&&a.hasOwnProperty("gdpr_applies_globally")&&(t=a.gdpr_applies_globally)}catch(e){}e({gdprAppliesGlobally:t,cmpLoaded:o()},!0)}}function o(){return!(!e.AS_OIL||!e.AS_OIL.commandCollectionExecutor)}!function e(){if(!(n.getElementsByName("__cmpLocator").length>0))if(n.body){var t=n.createElement("iframe");t.style.display="none",t.name="__cmpLocator",n.body.appendChild(t)}else setTimeout(e,5)}();var r=[],a=function(n,a,c){if("ping"===n)t(c);else{var i={command:n,parameter:a,callback:c};r.push(i),o()&&e.AS_OIL.commandCollectionExecutor(i)}};return a.commandCollection=r,a.receiveMessage=function(n){var a=n&&n.data,c="string"==typeof a;if(a=c&&-1!==a.indexOf("__cmpCall")?JSON.parse(a).__cmpCall:a.__cmpCall)if("ping"===a.command)t(function(e,t){var o={__cmpReturn:{returnValue:e,success:t,callId:a.callId}};n.source.postMessage(c?JSON.stringify(o):o,n.origin)});else{var i={callId:a.callId,command:a.command,parameter:a.parameter,event:n};r.push(i),o()&&e.AS_OIL.commandCollectionExecutor(i)}},function(n){var t=e.addEventListener||e.attachEvent;t("attachEvent"===t?"onmessage":"message",function(e){n.receiveMessage(e)},!1)}(a),a}())}(window,document)}});\n        '),i.a.createElement("script",{src:e,type:"text/javascript"}),i.a.createElement("script",{id:"oil-configuration",type:"application/configuration"},'\n          {\n            "config_version": 1,\n            "publicPath": "'+n+'",\n            "advanced_settings": true,\n            "default_to_optin": true,\n            "gdpr_applies_globally": true,\n            "timeout": -1,\n            "iabVendorListUrl": "'+a+'",\n            "customVendorListUrl": "'+o+'",\n          }\n        ')),i.a.createElement(g,null))};function E(e){var t=e.to,n=e.href,r=e.label,c=Object(o.a)(e,["to","href","label"]),l=Object(m.a)(t);return i.a.createElement(s.a,Object(a.a)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:n}:{to:l},c),r)}t.a=function(){var e=Object(u.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,n=(void 0===t?{}:t).footer,a=n||{},o=a.copyright,r=a.links,c=void 0===r?[]:r,s=a.logo,d=void 0===s?{}:s;return Object(m.a)(d.src),n?i.a.createElement("footer",{className:l()("footer",{"footer--dark":"dark"===n.style})},i.a.createElement("div",{className:"container"},c&&c.length>0&&i.a.createElement("div",{className:"row footer__links"},c.map((function(e,t){return i.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?i.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?i.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?i.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):i.a.createElement("li",{key:e.href||e.to,className:"footer__item"},i.a.createElement(E,e))}))):null)}))),o&&i.a.createElement("div",{className:"text--center"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}}))),i.a.createElement(h,null)):null}}}]);