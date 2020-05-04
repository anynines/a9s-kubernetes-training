import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Helmet } from 'react-helmet';
import Analytics from '../Analytics/analytics.js';

export default function Oil() {
  const oilVersion = 'oil.1.3.5-RELEASE.min.js';
  const oilURL = useBaseUrl(`js/${oilVersion}`);
  const hostURL = '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  const publicPath = `${hostURL + useBaseUrl('js/')}`;
  const vendorList = `${hostURL + useBaseUrl('js/vendorlist.json')}`;
  const customVendorListUrl = `${hostURL + useBaseUrl('js/vendors.json')}`;

  return (
    <Helmet>
      <Analytics />
      <script>
        {`
          /*! 1.3.5-SNAPSHOT */!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=117)}({117:function(e,n,t){"use strict";!function(e,n){e.__cmp||(e.__cmp=function(){function t(e){if(e){var t=!0,r=n.querySelector('script[type="application/configuration"]#oil-configuration');if(null!==r&&r.text)try{var a=JSON.parse(r.text);a&&a.hasOwnProperty("gdpr_applies_globally")&&(t=a.gdpr_applies_globally)}catch(e){}e({gdprAppliesGlobally:t,cmpLoaded:o()},!0)}}function o(){return!(!e.AS_OIL||!e.AS_OIL.commandCollectionExecutor)}!function e(){if(!(n.getElementsByName("__cmpLocator").length>0))if(n.body){var t=n.createElement("iframe");t.style.display="none",t.name="__cmpLocator",n.body.appendChild(t)}else setTimeout(e,5)}();var r=[],a=function(n,a,c){if("ping"===n)t(c);else{var i={command:n,parameter:a,callback:c};r.push(i),o()&&e.AS_OIL.commandCollectionExecutor(i)}};return a.commandCollection=r,a.receiveMessage=function(n){var a=n&&n.data,c="string"==typeof a;if(a=c&&-1!==a.indexOf("__cmpCall")?JSON.parse(a).__cmpCall:a.__cmpCall)if("ping"===a.command)t(function(e,t){var o={__cmpReturn:{returnValue:e,success:t,callId:a.callId}};n.source.postMessage(c?JSON.stringify(o):o,n.origin)});else{var i={callId:a.callId,command:a.command,parameter:a.parameter,event:n};r.push(i),o()&&e.AS_OIL.commandCollectionExecutor(i)}},function(n){var t=e.addEventListener||e.attachEvent;t("attachEvent"===t?"onmessage":"message",function(e){n.receiveMessage(e)},!1)}(a),a}())}(window,document)}});
        `}
      </script>
      <script src={oilURL} type='text/javascript'></script>
      <script id="oil-configuration" type="application/configuration">
        {`
          {
            "publicPath": "${publicPath}",
            "advanced_settings": true,
            "default_to_optin": true,
            "gdpr_applies_globally": true,
            "timeout": -1,
            "iabVendorListUrl": "${vendorList}",
            "customVendorListUrl": "${customVendorListUrl}"
          }
        `}
      </script>
    </Helmet>
  );
}