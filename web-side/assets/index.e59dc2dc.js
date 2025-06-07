function Gf(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const R2=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};R2();var x={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io=Symbol.for("react.element"),A2=Symbol.for("react.portal"),M2=Symbol.for("react.fragment"),L2=Symbol.for("react.strict_mode"),z2=Symbol.for("react.profiler"),O2=Symbol.for("react.provider"),N2=Symbol.for("react.context"),I2=Symbol.for("react.forward_ref"),$2=Symbol.for("react.suspense"),_2=Symbol.for("react.memo"),F2=Symbol.for("react.lazy"),Fd=Symbol.iterator;function D2(e){return e===null||typeof e!="object"?null:(e=Fd&&e[Fd]||e["@@iterator"],typeof e=="function"?e:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yf=Object.assign,Zf={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=Zf,this.updater=n||Kf}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qf(){}Qf.prototype=Zr.prototype;function tc(e,t,n){this.props=e,this.context=t,this.refs=Zf,this.updater=n||Kf}var nc=tc.prototype=new Qf;nc.constructor=tc;Yf(nc,Zr.prototype);nc.isPureReactComponent=!0;var Dd=Array.isArray,Xf=Object.prototype.hasOwnProperty,rc={current:null},Jf={key:!0,ref:!0,__self:!0,__source:!0};function qf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xf.call(t,r)&&!Jf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:io,type:e,key:o,ref:s,props:i,_owner:rc.current}}function V2(e,t){return{$$typeof:io,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ic(e){return typeof e=="object"&&e!==null&&e.$$typeof===io}function j2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vd=/\/+/g;function Ha(e,t){return typeof e=="object"&&e!==null&&e.key!=null?j2(""+e.key):t.toString(36)}function Bo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case io:case A2:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ha(s,0):r,Dd(i)?(n="",e!=null&&(n=e.replace(Vd,"$&/")+"/"),Bo(i,t,n,"",function(u){return u})):i!=null&&(ic(i)&&(i=V2(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Vd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Dd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ha(o,a);s+=Bo(o,t,n,l,i)}else if(l=D2(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ha(o,a++),s+=Bo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function wo(e,t,n){if(e==null)return e;var r=[],i=0;return Bo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function B2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},Uo={transition:null},U2={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Uo,ReactCurrentOwner:rc};function eh(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:wo,forEach:function(e,t,n){wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wo(e,function(){t++}),t},toArray:function(e){return wo(e,function(t){return t})||[]},only:function(e){if(!ic(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Zr;X.Fragment=M2;X.Profiler=z2;X.PureComponent=tc;X.StrictMode=L2;X.Suspense=$2;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U2;X.act=eh;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=rc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Xf.call(t,l)&&!Jf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:io,type:e.type,key:i,ref:o,props:r,_owner:s}};X.createContext=function(e){return e={$$typeof:N2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:O2,_context:e},e.Consumer=e};X.createElement=qf;X.createFactory=function(e){var t=qf.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:I2,render:e}};X.isValidElement=ic;X.lazy=function(e){return{$$typeof:F2,_payload:{_status:-1,_result:e},_init:B2}};X.memo=function(e,t){return{$$typeof:_2,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Uo.transition;Uo.transition={};try{e()}finally{Uo.transition=t}};X.unstable_act=eh;X.useCallback=function(e,t){return Xe.current.useCallback(e,t)};X.useContext=function(e){return Xe.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};X.useEffect=function(e,t){return Xe.current.useEffect(e,t)};X.useId=function(){return Xe.current.useId()};X.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Xe.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};X.useRef=function(e){return Xe.current.useRef(e)};X.useState=function(e){return Xe.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Xe.current.useTransition()};X.version="18.3.1";x.exports=X;var re=x.exports,oc=Gf({__proto__:null,default:re},[x.exports]),_l={},Us={exports:{}},pt={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,D){var U=L.length;L.push(D);e:for(;0<U;){var V=U-1>>>1,z=L[V];if(0<i(z,D))L[V]=D,L[U]=z,U=V;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var D=L[0],U=L.pop();if(U!==D){L[0]=U;e:for(var V=0,z=L.length,N=z>>>1;V<N;){var I=2*(V+1)-1,H=L[I],b=I+1,Y=L[b];if(0>i(H,U))b<z&&0>i(Y,H)?(L[V]=Y,L[b]=U,V=b):(L[V]=H,L[I]=U,V=I);else if(b<z&&0>i(Y,U))L[V]=Y,L[b]=U,V=b;else break e}}return D}function i(L,D){var U=L.sortIndex-D.sortIndex;return U!==0?U:L.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,h=3,v=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=L)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function C(L){if(w=!1,m(L),!y)if(n(l)!==null)y=!0,ae(T);else{var D=n(u);D!==null&&he(C,D.startTime-L)}}function T(L,D){y=!1,w&&(w=!1,g(E),E=-1),v=!0;var U=h;try{for(m(D),f=n(l);f!==null&&(!(f.expirationTime>D)||L&&!j());){var V=f.callback;if(typeof V=="function"){f.callback=null,h=f.priorityLevel;var z=V(f.expirationTime<=D);D=e.unstable_now(),typeof z=="function"?f.callback=z:f===n(l)&&r(l),m(D)}else r(l);f=n(l)}if(f!==null)var N=!0;else{var I=n(u);I!==null&&he(C,I.startTime-D),N=!1}return N}finally{f=null,h=U,v=!1}}var R=!1,A=null,E=-1,$=5,F=-1;function j(){return!(e.unstable_now()-F<$)}function W(){if(A!==null){var L=e.unstable_now();F=L;var D=!0;try{D=A(!0,L)}finally{D?Z():(R=!1,A=null)}}else R=!1}var Z;if(typeof p=="function")Z=function(){p(W)};else if(typeof MessageChannel!="undefined"){var J=new MessageChannel,me=J.port2;J.port1.onmessage=W,Z=function(){me.postMessage(null)}}else Z=function(){S(W,0)};function ae(L){A=L,R||(R=!0,Z())}function he(L,D){E=S(function(){L(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ae(T))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var U=h;h=D;try{return L()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,D){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=h;h=L;try{return D()}finally{h=U}},e.unstable_scheduleCallback=function(L,D,U){var V=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?V+U:V):U=V,L){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=U+z,L={id:d++,callback:D,priorityLevel:L,startTime:U,expirationTime:z,sortIndex:-1},U>V?(L.sortIndex=U,t(u,L),n(l)===null&&L===n(u)&&(w?(g(E),E=-1):w=!0,he(C,U-V))):(L.sortIndex=z,t(l,L),y||v||(y=!0,ae(T))),L},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(L){var D=h;return function(){var U=h;h=D;try{return L.apply(this,arguments)}finally{h=U}}}})(nh);th.exports=nh;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H2=x.exports,ft=th.exports;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rh=new Set,Ni={};function sr(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(Ni[e]=t,e=0;e<t.length;e++)rh.add(t[e])}var Qt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Fl=Object.prototype.hasOwnProperty,W2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jd={},Bd={};function G2(e){return Fl.call(Bd,e)?!0:Fl.call(jd,e)?!1:W2.test(e)?Bd[e]=!0:(jd[e]=!0,!1)}function K2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y2(e,t,n,r){if(t===null||typeof t=="undefined"||K2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var sc=/[\-:]([a-z])/g;function ac(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sc,ac);Ve[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sc,ac);Ve[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sc,ac);Ve[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function lc(e,t,n,r){var i=Ve.hasOwnProperty(t)?Ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y2(t,n,i,r)&&(n=null),r||i===null?G2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=H2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),Dl=Symbol.for("react.profiler"),ih=Symbol.for("react.provider"),oh=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),jl=Symbol.for("react.suspense_list"),dc=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),sh=Symbol.for("react.offscreen"),Ud=Symbol.iterator;function ii(e){return e===null||typeof e!="object"?null:(e=Ud&&e[Ud]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,Wa;function pi(e){if(Wa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wa=t&&t[1]||""}return`
`+Wa+e}var Ga=!1;function Ka(e,t){if(!e||Ga)return"";Ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ga=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pi(e):""}function Z2(e){switch(e.tag){case 5:return pi(e.type);case 16:return pi("Lazy");case 13:return pi("Suspense");case 19:return pi("SuspenseList");case 0:case 2:case 15:return e=Ka(e.type,!1),e;case 11:return e=Ka(e.type.render,!1),e;case 1:return e=Ka(e.type,!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case mr:return"Portal";case Dl:return"Profiler";case uc:return"StrictMode";case Vl:return"Suspense";case jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oh:return(e.displayName||"Context")+".Consumer";case ih:return(e._context.displayName||"Context")+".Provider";case cc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dc:return t=e.displayName||null,t!==null?t:Bl(e.type)||"Memo";case ln:t=e._payload,e=e._init;try{return Bl(e(t))}catch{}}return null}function Q2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(t);case 8:return t===uc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ah(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function X2(e){var t=ah(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){e._valueTracker||(e._valueTracker=X2(e))}function lh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ah(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Hd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uh(e,t){t=t.checked,t!=null&&lc(e,"checked",t,!1)}function Hl(e,t){uh(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wl(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wl(e,t,n){(t!=="number"||ss(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mi=Array.isArray;function zr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(mi(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function ch(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,fh=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ii(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J2=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(e){J2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xi[t]=xi[e]})});function hh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xi.hasOwnProperty(e)&&xi[e]?(""+t).trim():t+"px"}function ph(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var q2=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){if(q2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xl=null,Or=null,Nr=null;function Yd(e){if(e=ao(e)){if(typeof Xl!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ys(t),Xl(e.stateNode,e.type,t))}}function mh(e){Or?Nr?Nr.push(e):Nr=[e]:Or=e}function gh(){if(Or){var e=Or,t=Nr;if(Nr=Or=null,Yd(e),t)for(e=0;e<t.length;e++)Yd(t[e])}}function vh(e,t){return e(t)}function yh(){}var Ya=!1;function wh(e,t,n){if(Ya)return e(t,n);Ya=!0;try{return vh(e,t,n)}finally{Ya=!1,(Or!==null||Nr!==null)&&(yh(),gh())}}function $i(e,t){var n=e.stateNode;if(n===null)return null;var r=Ys(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Jl=!1;if(Qt)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{Jl=!1}function eg(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ci=!1,as=null,ls=!1,ql=null,tg={onError:function(e){Ci=!0,as=e}};function ng(e,t,n,r,i,o,s,a,l){Ci=!1,as=null,eg.apply(tg,arguments)}function rg(e,t,n,r,i,o,s,a,l){if(ng.apply(this,arguments),Ci){if(Ci){var u=as;Ci=!1,as=null}else throw Error(M(198));ls||(ls=!0,ql=u)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zd(e){if(ar(e)!==e)throw Error(M(188))}function ig(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zd(i),e;if(o===r)return Zd(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Ch(e){return e=ig(e),e!==null?Sh(e):null}function Sh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sh(e);if(t!==null)return t;e=e.sibling}return null}var kh=ft.unstable_scheduleCallback,Qd=ft.unstable_cancelCallback,og=ft.unstable_shouldYield,sg=ft.unstable_requestPaint,Pe=ft.unstable_now,ag=ft.unstable_getCurrentPriorityLevel,hc=ft.unstable_ImmediatePriority,Ph=ft.unstable_UserBlockingPriority,us=ft.unstable_NormalPriority,lg=ft.unstable_LowPriority,bh=ft.unstable_IdlePriority,Hs=null,Ft=null;function ug(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Hs,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:fg,cg=Math.log,dg=Math.LN2;function fg(e){return e>>>=0,e===0?32:31-(cg(e)/dg|0)|0}var ko=64,Po=4194304;function gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=gi(a):(o&=s,o!==0&&(r=gi(o)))}else s=n&~i,s!==0?r=gi(s):o!==0&&(r=gi(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),i=1<<n,r|=e[n],t&=~i;return r}function hg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-zt(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=hg(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function eu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Th(){var e=ko;return ko<<=1,(ko&4194240)===0&&(ko=64),e}function Za(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function mg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-zt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function pc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ie=0;function Eh(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rh,mc,Ah,Mh,Lh,tu=!1,bo=[],gn=null,vn=null,yn=null,_i=new Map,Fi=new Map,dn=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xd(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function si(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ao(t),t!==null&&mc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vg(e,t,n,r,i){switch(t){case"focusin":return gn=si(gn,e,t,n,r,i),!0;case"dragenter":return vn=si(vn,e,t,n,r,i),!0;case"mouseover":return yn=si(yn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _i.set(o,si(_i.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fi.set(o,si(Fi.get(o)||null,e,t,n,r,i)),!0}return!1}function zh(e){var t=Gn(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=xh(n),t!==null){e.blockedOn=t,Lh(e.priority,function(){Ah(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=ao(n),t!==null&&mc(t),e.blockedOn=n,!1;t.shift()}return!0}function Jd(e,t,n){Ho(e)&&n.delete(t)}function yg(){tu=!1,gn!==null&&Ho(gn)&&(gn=null),vn!==null&&Ho(vn)&&(vn=null),yn!==null&&Ho(yn)&&(yn=null),_i.forEach(Jd),Fi.forEach(Jd)}function ai(e,t){e.blockedOn===t&&(e.blockedOn=null,tu||(tu=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,yg)))}function Di(e){function t(i){return ai(i,e)}if(0<bo.length){ai(bo[0],e);for(var n=1;n<bo.length;n++){var r=bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&ai(gn,e),vn!==null&&ai(vn,e),yn!==null&&ai(yn,e),_i.forEach(t),Fi.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)zh(n),n.blockedOn===null&&dn.shift()}var Ir=nn.ReactCurrentBatchConfig,ds=!0;function wg(e,t,n,r){var i=ie,o=Ir.transition;Ir.transition=null;try{ie=1,gc(e,t,n,r)}finally{ie=i,Ir.transition=o}}function xg(e,t,n,r){var i=ie,o=Ir.transition;Ir.transition=null;try{ie=4,gc(e,t,n,r)}finally{ie=i,Ir.transition=o}}function gc(e,t,n,r){if(ds){var i=nu(e,t,n,r);if(i===null)ol(e,t,r,fs,n),Xd(e,r);else if(vg(i,e,t,n,r))r.stopPropagation();else if(Xd(e,r),t&4&&-1<gg.indexOf(e)){for(;i!==null;){var o=ao(i);if(o!==null&&Rh(o),o=nu(e,t,n,r),o===null&&ol(e,t,r,fs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var fs=null;function nu(e,t,n,r){if(fs=null,e=fc(r),e=Gn(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fs=e,null}function Oh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ag()){case hc:return 1;case Ph:return 4;case us:case lg:return 16;case bh:return 536870912;default:return 16}default:return 16}}var hn=null,vc=null,Wo=null;function Nh(){if(Wo)return Wo;var e,t=vc,n=t.length,r,i="value"in hn?hn.value:hn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Wo=i.slice(e,1<r?1-r:void 0)}function Go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function qd(){return!1}function mt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?To:qd,this.isPropagationStopped=qd,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=mt(Qr),so=we({},Qr,{view:0,detail:0}),Cg=mt(so),Qa,Xa,li,Ws=we({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(Qa=e.screenX-li.screenX,Xa=e.screenY-li.screenY):Xa=Qa=0,li=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),e0=mt(Ws),Sg=we({},Ws,{dataTransfer:0}),kg=mt(Sg),Pg=we({},so,{relatedTarget:0}),Ja=mt(Pg),bg=we({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Tg=mt(bg),Eg=we({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rg=mt(Eg),Ag=we({},Qr,{data:0}),t0=mt(Ag),Mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Og(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zg[e])?!!t[e]:!1}function wc(){return Og}var Ng=we({},so,{key:function(e){if(e.key){var t=Mg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(e){return e.type==="keypress"?Go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ig=mt(Ng),$g=we({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n0=mt($g),_g=we({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),Fg=mt(_g),Dg=we({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=mt(Dg),jg=we({},Ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bg=mt(jg),Ug=[9,13,27,32],xc=Qt&&"CompositionEvent"in window,Si=null;Qt&&"documentMode"in document&&(Si=document.documentMode);var Hg=Qt&&"TextEvent"in window&&!Si,Ih=Qt&&(!xc||Si&&8<Si&&11>=Si),r0=String.fromCharCode(32),i0=!1;function $h(e,t){switch(e){case"keyup":return Ug.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _h(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function Wg(e,t){switch(e){case"compositionend":return _h(t);case"keypress":return t.which!==32?null:(i0=!0,r0);case"textInput":return e=t.data,e===r0&&i0?null:e;default:return null}}function Gg(e,t){if(vr)return e==="compositionend"||!xc&&$h(e,t)?(e=Nh(),Wo=vc=hn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ih&&t.locale!=="ko"?null:t.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kg[e.type]:t==="textarea"}function Fh(e,t,n,r){mh(r),t=hs(t,"onChange"),0<t.length&&(n=new yc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ki=null,Vi=null;function Yg(e){Zh(e,0)}function Gs(e){var t=xr(e);if(lh(t))return e}function Zg(e,t){if(e==="change")return t}var Dh=!1;if(Qt){var qa;if(Qt){var el="oninput"in document;if(!el){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),el=typeof s0.oninput=="function"}qa=el}else qa=!1;Dh=qa&&(!document.documentMode||9<document.documentMode)}function a0(){ki&&(ki.detachEvent("onpropertychange",Vh),Vi=ki=null)}function Vh(e){if(e.propertyName==="value"&&Gs(Vi)){var t=[];Fh(t,Vi,e,fc(e)),wh(Yg,t)}}function Qg(e,t,n){e==="focusin"?(a0(),ki=t,Vi=n,ki.attachEvent("onpropertychange",Vh)):e==="focusout"&&a0()}function Xg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gs(Vi)}function Jg(e,t){if(e==="click")return Gs(t)}function qg(e,t){if(e==="input"||e==="change")return Gs(t)}function e3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:e3;function ji(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fl.call(t,i)||!Nt(e[i],t[i]))return!1}return!0}function l0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function u0(e,t){var n=l0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=l0(n)}}function jh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bh(){for(var e=window,t=ss();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ss(e.document)}return t}function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function t3(e){var t=Bh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jh(n.ownerDocument.documentElement,n)){if(r!==null&&Cc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=u0(n,o);var s=u0(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n3=Qt&&"documentMode"in document&&11>=document.documentMode,yr=null,ru=null,Pi=null,iu=!1;function c0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;iu||yr==null||yr!==ss(r)||(r=yr,"selectionStart"in r&&Cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&ji(Pi,r)||(Pi=r,r=hs(ru,"onSelect"),0<r.length&&(t=new yc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function Eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},tl={},Uh={};Qt&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Ks(e){if(tl[e])return tl[e];if(!wr[e])return e;var t=wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uh)return tl[e]=t[n];return e}var Hh=Ks("animationend"),Wh=Ks("animationiteration"),Gh=Ks("animationstart"),Kh=Ks("transitionend"),Yh=new Map,d0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){Yh.set(e,t),sr(t,[e])}for(var nl=0;nl<d0.length;nl++){var rl=d0[nl],r3=rl.toLowerCase(),i3=rl[0].toUpperCase()+rl.slice(1);On(r3,"on"+i3)}On(Hh,"onAnimationEnd");On(Wh,"onAnimationIteration");On(Gh,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Kh,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o3=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function f0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rg(r,t,void 0,e),e.currentTarget=null}function Zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;f0(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;f0(i,a,u),o=l}}}if(ls)throw e=ql,ls=!1,ql=null,e}function de(e,t){var n=t[uu];n===void 0&&(n=t[uu]=new Set);var r=e+"__bubble";n.has(r)||(Qh(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),Qh(n,e,r,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[Ro]){e[Ro]=!0,rh.forEach(function(n){n!=="selectionchange"&&(o3.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,il("selectionchange",!1,t))}}function Qh(e,t,n,r){switch(Oh(t)){case 1:var i=wg;break;case 4:i=xg;break;default:i=gc}n=i.bind(null,t,n,e),i=void 0,!Jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Gn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wh(function(){var u=o,d=fc(n),f=[];e:{var h=Yh.get(e);if(h!==void 0){var v=yc,y=e;switch(e){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":v=Ig;break;case"focusin":y="focus",v=Ja;break;case"focusout":y="blur",v=Ja;break;case"beforeblur":case"afterblur":v=Ja;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=e0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Fg;break;case Hh:case Wh:case Gh:v=Tg;break;case Kh:v=Vg;break;case"scroll":v=Cg;break;case"wheel":v=Bg;break;case"copy":case"cut":case"paste":v=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=n0}var w=(t&4)!==0,S=!w&&e==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,m;p!==null;){m=p;var C=m.stateNode;if(m.tag===5&&C!==null&&(m=C,g!==null&&(C=$i(p,g),C!=null&&w.push(Ui(p,C,m)))),S)break;p=p.return}0<w.length&&(h=new v(h,y,null,n,d),f.push({event:h,listeners:w}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Ql&&(y=n.relatedTarget||n.fromElement)&&(Gn(y)||y[Xt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Gn(y):null,y!==null&&(S=ar(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=e0,C="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=n0,C="onPointerLeave",g="onPointerEnter",p="pointer"),S=v==null?h:xr(v),m=y==null?h:xr(y),h=new w(C,p+"leave",v,n,d),h.target=S,h.relatedTarget=m,C=null,Gn(d)===u&&(w=new w(g,p+"enter",y,n,d),w.target=m,w.relatedTarget=S,C=w),S=C,v&&y)t:{for(w=v,g=y,p=0,m=w;m;m=fr(m))p++;for(m=0,C=g;C;C=fr(C))m++;for(;0<p-m;)w=fr(w),p--;for(;0<m-p;)g=fr(g),m--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=fr(w),g=fr(g)}w=null}else w=null;v!==null&&h0(f,h,v,w,!1),y!==null&&S!==null&&h0(f,S,y,w,!0)}}e:{if(h=u?xr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var T=Zg;else if(o0(h))if(Dh)T=qg;else{T=Xg;var R=Qg}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Jg);if(T&&(T=T(e,u))){Fh(f,T,n,d);break e}R&&R(e,h,u),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Wl(h,"number",h.value)}switch(R=u?xr(u):window,e){case"focusin":(o0(R)||R.contentEditable==="true")&&(yr=R,ru=u,Pi=null);break;case"focusout":Pi=ru=yr=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,c0(f,n,d);break;case"selectionchange":if(n3)break;case"keydown":case"keyup":c0(f,n,d)}var A;if(xc)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else vr?$h(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ih&&n.locale!=="ko"&&(vr||E!=="onCompositionStart"?E==="onCompositionEnd"&&vr&&(A=Nh()):(hn=d,vc="value"in hn?hn.value:hn.textContent,vr=!0)),R=hs(u,E),0<R.length&&(E=new t0(E,e,null,n,d),f.push({event:E,listeners:R}),A?E.data=A:(A=_h(n),A!==null&&(E.data=A)))),(A=Hg?Wg(e,n):Gg(e,n))&&(u=hs(u,"onBeforeInput"),0<u.length&&(d=new t0("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=A))}Zh(f,t)})}function Ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$i(e,n),o!=null&&r.unshift(Ui(e,o,i)),o=$i(e,t),o!=null&&r.push(Ui(e,o,i))),e=e.return}return r}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function h0(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=$i(n,o),l!=null&&s.unshift(Ui(n,l,a))):i||(l=$i(n,o),l!=null&&s.push(Ui(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var s3=/\r\n?/g,a3=/\u0000|\uFFFD/g;function p0(e){return(typeof e=="string"?e:""+e).replace(s3,`
`).replace(a3,"")}function Ao(e,t,n){if(t=p0(t),p0(e)!==t&&n)throw Error(M(425))}function ps(){}var ou=null,su=null;function au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,l3=typeof clearTimeout=="function"?clearTimeout:void 0,m0=typeof Promise=="function"?Promise:void 0,u3=typeof queueMicrotask=="function"?queueMicrotask:typeof m0!="undefined"?function(e){return m0.resolve(null).then(e).catch(c3)}:lu;function c3(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Di(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Di(t)}function wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function g0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Xr,Hi="__reactProps$"+Xr,Xt="__reactContainer$"+Xr,uu="__reactEvents$"+Xr,d3="__reactListeners$"+Xr,f3="__reactHandles$"+Xr;function Gn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=g0(e);e!==null;){if(n=e[_t])return n;e=g0(e)}return t}e=n,n=e.parentNode}return null}function ao(e){return e=e[_t]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ys(e){return e[Hi]||null}var cu=[],Cr=-1;function Nn(e){return{current:e}}function fe(e){0>Cr||(e.current=cu[Cr],cu[Cr]=null,Cr--)}function ue(e,t){Cr++,cu[Cr]=e.current,e.current=t}var Mn={},Ke=Nn(Mn),rt=Nn(!1),qn=Mn;function Dr(e,t){var n=e.type.contextTypes;if(!n)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function ms(){fe(rt),fe(Ke)}function v0(e,t,n){if(Ke.current!==Mn)throw Error(M(168));ue(Ke,t),ue(rt,n)}function Xh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Q2(e)||"Unknown",i));return we({},n,r)}function gs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,qn=Ke.current,ue(Ke,e),ue(rt,rt.current),!0}function y0(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Xh(e,t,qn),r.__reactInternalMemoizedMergedChildContext=e,fe(rt),fe(Ke),ue(Ke,e)):fe(rt),ue(rt,n)}var Ut=null,Zs=!1,al=!1;function Jh(e){Ut===null?Ut=[e]:Ut.push(e)}function h3(e){Zs=!0,Jh(e)}function In(){if(!al&&Ut!==null){al=!0;var e=0,t=ie;try{var n=Ut;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Zs=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),kh(hc,In),i}finally{ie=t,al=!1}}return null}var Sr=[],kr=0,vs=null,ys=0,wt=[],xt=0,er=null,Ht=1,Wt="";function jn(e,t){Sr[kr++]=ys,Sr[kr++]=vs,vs=e,ys=t}function qh(e,t,n){wt[xt++]=Ht,wt[xt++]=Wt,wt[xt++]=er,er=e;var r=Ht;e=Wt;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var o=32-zt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ht=1<<32-zt(t)+i|n<<i|r,Wt=o+e}else Ht=1<<o|n<<i|r,Wt=e}function Sc(e){e.return!==null&&(jn(e,1),qh(e,1,0))}function kc(e){for(;e===vs;)vs=Sr[--kr],Sr[kr]=null,ys=Sr[--kr],Sr[kr]=null;for(;e===er;)er=wt[--xt],wt[xt]=null,Wt=wt[--xt],wt[xt]=null,Ht=wt[--xt],wt[xt]=null}var dt=null,ut=null,pe=!1,Mt=null;function ep(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function w0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ut=wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=er!==null?{id:Ht,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ut=null,!0):!1;default:return!1}}function du(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fu(e){if(pe){var t=ut;if(t){var n=t;if(!w0(e,t)){if(du(e))throw Error(M(418));t=wn(n.nextSibling);var r=dt;t&&w0(e,t)?ep(r,n):(e.flags=e.flags&-4097|2,pe=!1,dt=e)}}else{if(du(e))throw Error(M(418));e.flags=e.flags&-4097|2,pe=!1,dt=e}}}function x0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Mo(e){if(e!==dt)return!1;if(!pe)return x0(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!au(e.type,e.memoizedProps)),t&&(t=ut)){if(du(e))throw tp(),Error(M(418));for(;t;)ep(e,t),t=wn(t.nextSibling)}if(x0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=dt?wn(e.stateNode.nextSibling):null;return!0}function tp(){for(var e=ut;e;)e=wn(e.nextSibling)}function Vr(){ut=dt=null,pe=!1}function Pc(e){Mt===null?Mt=[e]:Mt.push(e)}var p3=nn.ReactCurrentBatchConfig;function ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Lo(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function C0(e){var t=e._init;return t(e._payload)}function np(e){function t(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=kn(g,p),g.index=0,g.sibling=null,g}function o(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,C){return p===null||p.tag!==6?(p=pl(m,g.mode,C),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,C){var T=m.type;return T===gr?d(g,p,m.props.children,C,m.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ln&&C0(T)===p.type)?(C=i(p,m.props),C.ref=ui(g,p,m),C.return=g,C):(C=qo(m.type,m.key,m.props,null,g.mode,C),C.ref=ui(g,p,m),C.return=g,C)}function u(g,p,m,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=ml(m,g.mode,C),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function d(g,p,m,C,T){return p===null||p.tag!==7?(p=Xn(m,g.mode,C,T),p.return=g,p):(p=i(p,m),p.return=g,p)}function f(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=pl(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xo:return m=qo(p.type,p.key,p.props,null,g.mode,m),m.ref=ui(g,null,p),m.return=g,m;case mr:return p=ml(p,g.mode,m),p.return=g,p;case ln:var C=p._init;return f(g,C(p._payload),m)}if(mi(p)||ii(p))return p=Xn(p,g.mode,m,null),p.return=g,p;Lo(g,p)}return null}function h(g,p,m,C){var T=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(g,p,""+m,C);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xo:return m.key===T?l(g,p,m,C):null;case mr:return m.key===T?u(g,p,m,C):null;case ln:return T=m._init,h(g,p,T(m._payload),C)}if(mi(m)||ii(m))return T!==null?null:d(g,p,m,C,null);Lo(g,m)}return null}function v(g,p,m,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(m)||null,a(p,g,""+C,T);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case xo:return g=g.get(C.key===null?m:C.key)||null,l(p,g,C,T);case mr:return g=g.get(C.key===null?m:C.key)||null,u(p,g,C,T);case ln:var R=C._init;return v(g,p,m,R(C._payload),T)}if(mi(C)||ii(C))return g=g.get(m)||null,d(p,g,C,T,null);Lo(p,C)}return null}function y(g,p,m,C){for(var T=null,R=null,A=p,E=p=0,$=null;A!==null&&E<m.length;E++){A.index>E?($=A,A=null):$=A.sibling;var F=h(g,A,m[E],C);if(F===null){A===null&&(A=$);break}e&&A&&F.alternate===null&&t(g,A),p=o(F,p,E),R===null?T=F:R.sibling=F,R=F,A=$}if(E===m.length)return n(g,A),pe&&jn(g,E),T;if(A===null){for(;E<m.length;E++)A=f(g,m[E],C),A!==null&&(p=o(A,p,E),R===null?T=A:R.sibling=A,R=A);return pe&&jn(g,E),T}for(A=r(g,A);E<m.length;E++)$=v(A,g,E,m[E],C),$!==null&&(e&&$.alternate!==null&&A.delete($.key===null?E:$.key),p=o($,p,E),R===null?T=$:R.sibling=$,R=$);return e&&A.forEach(function(j){return t(g,j)}),pe&&jn(g,E),T}function w(g,p,m,C){var T=ii(m);if(typeof T!="function")throw Error(M(150));if(m=T.call(m),m==null)throw Error(M(151));for(var R=T=null,A=p,E=p=0,$=null,F=m.next();A!==null&&!F.done;E++,F=m.next()){A.index>E?($=A,A=null):$=A.sibling;var j=h(g,A,F.value,C);if(j===null){A===null&&(A=$);break}e&&A&&j.alternate===null&&t(g,A),p=o(j,p,E),R===null?T=j:R.sibling=j,R=j,A=$}if(F.done)return n(g,A),pe&&jn(g,E),T;if(A===null){for(;!F.done;E++,F=m.next())F=f(g,F.value,C),F!==null&&(p=o(F,p,E),R===null?T=F:R.sibling=F,R=F);return pe&&jn(g,E),T}for(A=r(g,A);!F.done;E++,F=m.next())F=v(A,g,E,F.value,C),F!==null&&(e&&F.alternate!==null&&A.delete(F.key===null?E:F.key),p=o(F,p,E),R===null?T=F:R.sibling=F,R=F);return e&&A.forEach(function(W){return t(g,W)}),pe&&jn(g,E),T}function S(g,p,m,C){if(typeof m=="object"&&m!==null&&m.type===gr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xo:e:{for(var T=m.key,R=p;R!==null;){if(R.key===T){if(T=m.type,T===gr){if(R.tag===7){n(g,R.sibling),p=i(R,m.props.children),p.return=g,g=p;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ln&&C0(T)===R.type){n(g,R.sibling),p=i(R,m.props),p.ref=ui(g,R,m),p.return=g,g=p;break e}n(g,R);break}else t(g,R);R=R.sibling}m.type===gr?(p=Xn(m.props.children,g.mode,C,m.key),p.return=g,g=p):(C=qo(m.type,m.key,m.props,null,g.mode,C),C.ref=ui(g,p,m),C.return=g,g=C)}return s(g);case mr:e:{for(R=m.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=ml(m,g.mode,C),p.return=g,g=p}return s(g);case ln:return R=m._init,S(g,p,R(m._payload),C)}if(mi(m))return y(g,p,m,C);if(ii(m))return w(g,p,m,C);Lo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=pl(m,g.mode,C),p.return=g,g=p),s(g)):n(g,p)}return S}var jr=np(!0),rp=np(!1),ws=Nn(null),xs=null,Pr=null,bc=null;function Tc(){bc=Pr=xs=null}function Ec(e){var t=ws.current;fe(ws),e._currentValue=t}function hu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){xs=e,bc=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(bc!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(xs===null)throw Error(M(308));Pr=e,xs.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var Kn=null;function Rc(e){Kn===null?Kn=[e]:Kn.push(e)}function ip(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Rc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var un=!1;function Ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ee&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Jt(e,n)}return i=r.interleaved,i===null?(t.next=t,Rc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Jt(e,n)}function Ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pc(e,n)}}function S0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Cs(e,t,n,r){var i=e.updateQueue;un=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var h=a.lane,v=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(h=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(v,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(v,f,h):y,h==null)break e;f=we({},f,h);break e;case 2:un=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);nr|=s,e.lanes=s,e.memoizedState=f}}function k0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var lo={},Dt=Nn(lo),Wi=Nn(lo),Gi=Nn(lo);function Yn(e){if(e===lo)throw Error(M(174));return e}function Mc(e,t){switch(ue(Gi,t),ue(Wi,e),ue(Dt,lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}fe(Dt),ue(Dt,t)}function Br(){fe(Dt),fe(Wi),fe(Gi)}function sp(e){Yn(Gi.current);var t=Yn(Dt.current),n=Kl(t,e.type);t!==n&&(ue(Wi,e),ue(Dt,n))}function Lc(e){Wi.current===e&&(fe(Dt),fe(Wi))}var ge=Nn(0);function Ss(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function zc(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var Yo=nn.ReactCurrentDispatcher,ul=nn.ReactCurrentBatchConfig,tr=0,ye=null,Re=null,Me=null,ks=!1,bi=!1,Ki=0,m3=0;function Ue(){throw Error(M(321))}function Oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function Nc(e,t,n,r,i,o){if(tr=o,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yo.current=e===null||e.memoizedState===null?w3:x3,e=n(r,i),bi){o=0;do{if(bi=!1,Ki=0,25<=o)throw Error(M(301));o+=1,Me=Re=null,t.updateQueue=null,Yo.current=C3,e=n(r,i)}while(bi)}if(Yo.current=Ps,t=Re!==null&&Re.next!==null,tr=0,Me=Re=ye=null,ks=!1,t)throw Error(M(300));return e}function Ic(){var e=Ki!==0;return Ki=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ye.memoizedState=Me=e:Me=Me.next=e,Me}function Pt(){if(Re===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Me===null?ye.memoizedState:Me.next;if(t!==null)Me=t,Re=e;else{if(e===null)throw Error(M(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Me===null?ye.memoizedState=Me=e:Me=Me.next=e}return Me}function Yi(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=Pt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((tr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,ye.lanes|=d,nr|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Nt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ye.lanes|=o,nr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=Pt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Nt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ap(){}function lp(e,t){var n=ye,r=Pt(),i=t(),o=!Nt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,$c(dp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Zi(9,cp.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(M(349));(tr&30)!==0||up(n,t,i)}return i}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cp(e,t,n,r){t.value=n,t.getSnapshot=r,fp(t)&&hp(e)}function dp(e,t,n){return n(function(){fp(t)&&hp(e)})}function fp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function hp(e){var t=Jt(e,1);t!==null&&Ot(t,e,1,-1)}function P0(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},t.queue=e,e=e.dispatch=y3.bind(null,ye,e),[t.memoizedState,e]}function Zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pp(){return Pt().memoizedState}function Zo(e,t,n,r){var i=$t();ye.flags|=e,i.memoizedState=Zi(1|t,n,void 0,r===void 0?null:r)}function Qs(e,t,n,r){var i=Pt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var s=Re.memoizedState;if(o=s.destroy,r!==null&&Oc(r,s.deps)){i.memoizedState=Zi(t,n,o,r);return}}ye.flags|=e,i.memoizedState=Zi(1|t,n,o,r)}function b0(e,t){return Zo(8390656,8,e,t)}function $c(e,t){return Qs(2048,8,e,t)}function mp(e,t){return Qs(4,2,e,t)}function gp(e,t){return Qs(4,4,e,t)}function vp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yp(e,t,n){return n=n!=null?n.concat([e]):null,Qs(4,4,vp.bind(null,t,e),n)}function _c(){}function wp(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xp(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cp(e,t,n){return(tr&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(Nt(n,t)||(n=Th(),ye.lanes|=n,nr|=n,e.baseState=!0),t)}function g3(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=ul.transition;ul.transition={};try{e(!1),t()}finally{ie=n,ul.transition=r}}function Sp(){return Pt().memoizedState}function v3(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kp(e))Pp(t,n);else if(n=ip(e,t,n,r),n!==null){var i=Qe();Ot(n,e,r,i),bp(n,t,r)}}function y3(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kp(e))Pp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,s)){var l=t.interleaved;l===null?(i.next=i,Rc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ip(e,t,i,r),n!==null&&(i=Qe(),Ot(n,e,r,i),bp(n,t,r))}}function kp(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Pp(e,t){bi=ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bp(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pc(e,n)}}var Ps={readContext:kt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},w3={readContext:kt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:b0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4194308,4,vp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=v3.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:P0,useDebugValue:_c,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=P0(!1),t=e[0];return e=g3.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=$t();if(pe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),ze===null)throw Error(M(349));(tr&30)!==0||up(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,b0(dp.bind(null,r,o,e),[e]),r.flags|=2048,Zi(9,cp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$t(),t=ze.identifierPrefix;if(pe){var n=Wt,r=Ht;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ki++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=m3++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},x3={readContext:kt,useCallback:wp,useContext:kt,useEffect:$c,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:xp,useReducer:cl,useRef:pp,useState:function(){return cl(Yi)},useDebugValue:_c,useDeferredValue:function(e){var t=Pt();return Cp(t,Re.memoizedState,e)},useTransition:function(){var e=cl(Yi)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:lp,useId:Sp,unstable_isNewReconciler:!1},C3={readContext:kt,useCallback:wp,useContext:kt,useEffect:$c,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:xp,useReducer:dl,useRef:pp,useState:function(){return dl(Yi)},useDebugValue:_c,useDeferredValue:function(e){var t=Pt();return Re===null?t.memoizedState=e:Cp(t,Re.memoizedState,e)},useTransition:function(){var e=dl(Yi)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:lp,useId:Sp,unstable_isNewReconciler:!1};function Rt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xs={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Sn(e),o=Kt(r,i);o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Ot(t,e,i,r),Ko(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Sn(e),o=Kt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Ot(t,e,i,r),Ko(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Sn(e),i=Kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(Ot(t,e,r,n),Ko(t,e,r))}};function T0(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ji(n,r)||!ji(i,o):!0}function Tp(e,t,n){var r=!1,i=Mn,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=it(t)?qn:Ke.current,r=t.contextTypes,o=(r=r!=null)?Dr(e,i):Mn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function E0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xs.enqueueReplaceState(t,t.state,null)}function mu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ac(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=it(t)?qn:Ke.current,i.context=Dr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(pu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xs.enqueueReplaceState(i,i.state,null),Cs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var n="",r=t;do n+=Z2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function gu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var S3=typeof WeakMap=="function"?WeakMap:Map;function Ep(e,t,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ts||(Ts=!0,Tu=r),gu(e,t)},n}function Rp(e,t,n){n=Kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){gu(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function R0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new S3;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$3.bind(null,e,t,n),t.then(e,e))}function A0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function M0(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var k3=nn.ReactCurrentOwner,tt=!1;function Ze(e,t,n,r){t.child=e===null?rp(t,null,n,r):jr(t,e.child,n,r)}function L0(e,t,n,r,i){n=n.render;var o=t.ref;return $r(t,i),r=Nc(e,t,n,r,o,i),n=Ic(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(pe&&n&&Sc(t),t.flags|=1,Ze(e,t,r,i),t.child)}function z0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Wc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ap(e,t,o,r,i)):(e=qo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ji,n(s,r)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=kn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ap(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ji(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,qt(e,t,i)}return vu(e,t,n,r,i)}function Mp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Tr,lt),lt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Tr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ue(Tr,lt),lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ue(Tr,lt),lt|=r;return Ze(e,t,i,n),t.child}function Lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vu(e,t,n,r,i){var o=it(n)?qn:Ke.current;return o=Dr(t,o),$r(t,i),n=Nc(e,t,n,r,o,i),r=Ic(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(pe&&r&&Sc(t),t.flags|=1,Ze(e,t,n,i),t.child)}function O0(e,t,n,r,i){if(it(n)){var o=!0;gs(t)}else o=!1;if($r(t,i),t.stateNode===null)Qo(e,t),Tp(t,n,r),mu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=it(n)?qn:Ke.current,u=Dr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&E0(t,s,r,u),un=!1;var h=t.memoizedState;s.state=h,Cs(t,r,s,i),l=t.memoizedState,a!==r||h!==l||rt.current||un?(typeof d=="function"&&(pu(t,n,d,r),l=t.memoizedState),(a=un||T0(t,n,a,r,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,op(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Rt(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=it(n)?qn:Ke.current,l=Dr(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&E0(t,s,r,l),un=!1,h=t.memoizedState,s.state=h,Cs(t,r,s,i);var y=t.memoizedState;a!==f||h!==y||rt.current||un?(typeof v=="function"&&(pu(t,n,v,r),y=t.memoizedState),(u=un||T0(t,n,u,r,h,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return yu(e,t,n,r,o,i)}function yu(e,t,n,r,i,o){Lp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&y0(t,n,!1),qt(e,t,o);r=t.stateNode,k3.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=jr(t,e.child,null,o),t.child=jr(t,null,a,o)):Ze(e,t,a,o),t.memoizedState=r.state,i&&y0(t,n,!0),t.child}function zp(e){var t=e.stateNode;t.pendingContext?v0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&v0(e,t.context,!1),Mc(e,t.containerInfo)}function N0(e,t,n,r,i){return Vr(),Pc(i),t.flags|=256,Ze(e,t,n,r),t.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Op(e,t,n){var r=t.pendingProps,i=ge.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(ge,i&1),e===null)return fu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ea(s,r,0,null),e=Xn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=xu(n),t.memoizedState=wu,e):Fc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return P3(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=kn(a,o):(o=Xn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?xu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=wu,r}return o=e.child,e=o.sibling,r=kn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fc(e,t){return t=ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,n,r){return r!==null&&Pc(r),jr(t,e.child,null,n),e=Fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function P3(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(M(422))),zo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ea({mode:"visible",children:r.children},i,0,null),o=Xn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&jr(t,e.child,null,s),t.child.memoizedState=xu(s),t.memoizedState=wu,o);if((t.mode&1)===0)return zo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(M(419)),r=fl(o,r,void 0),zo(e,t,s,r)}if(a=(s&e.childLanes)!==0,tt||a){if(r=ze,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jt(e,i),Ot(r,e,i,-1))}return Hc(),r=fl(Error(M(421))),zo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_3.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ut=wn(i.nextSibling),dt=t,pe=!0,Mt=null,e!==null&&(wt[xt++]=Ht,wt[xt++]=Wt,wt[xt++]=er,Ht=e.id,Wt=e.overflow,er=t),t=Fc(t,r.children),t.flags|=4096,t)}function I0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hu(e.return,t,n)}function hl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Np(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ze(e,t,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&I0(e,n,t);else if(e.tag===19)I0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ge,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ss(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ss(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hl(t,!0,n,null,o);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function b3(e,t,n){switch(t.tag){case 3:zp(t),Vr();break;case 5:sp(t);break;case 1:it(t.type)&&gs(t);break;case 4:Mc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ue(ws,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Op(e,t,n):(ue(ge,ge.current&1),e=qt(e,t,n),e!==null?e.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Np(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,Mp(e,t,n)}return qt(e,t,n)}var Ip,Cu,$p,_p;Ip=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};$p=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yn(Dt.current);var o=null;switch(n){case"input":i=Ul(e,i),r=Ul(e,r),o=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),o=[];break;case"textarea":i=Gl(e,i),r=Gl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ps)}Yl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ni.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ni.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};_p=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function T3(e,t,n){var r=t.pendingProps;switch(kc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return it(t.type)&&ms(),He(t),null;case 3:return r=t.stateNode,Br(),fe(rt),fe(Ke),zc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mt!==null&&(Au(Mt),Mt=null))),Cu(e,t),He(t),null;case 5:Lc(t);var i=Yn(Gi.current);if(n=t.type,e!==null&&t.stateNode!=null)$p(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return He(t),null}if(e=Yn(Dt.current),Mo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[_t]=t,r[Hi]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<vi.length;i++)de(vi[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Hd(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":Gd(r,o),de("invalid",r)}Yl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ao(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ao(r.textContent,a,e),i=["children",""+a]):Ni.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&de("scroll",r)}switch(n){case"input":Co(r),Wd(r,o,!0);break;case"textarea":Co(r),Kd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ps)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[_t]=t,e[Hi]=r,Ip(e,t,!1,!1),t.stateNode=e;e:{switch(s=Zl(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<vi.length;i++)de(vi[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":Hd(e,r),i=Ul(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",e);break;case"textarea":Gd(e,r),i=Gl(e,r),de("invalid",e);break;default:i=r}Yl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ph(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ii(e,l):typeof l=="number"&&Ii(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ni.hasOwnProperty(o)?l!=null&&o==="onScroll"&&de("scroll",e):l!=null&&lc(e,o,l,s))}switch(n){case"input":Co(e),Wd(e,r,!1);break;case"textarea":Co(e),Kd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zr(e,!!r.multiple,o,!1):r.defaultValue!=null&&zr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ps)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)_p(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Yn(Gi.current),Yn(Dt.current),Mo(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(o=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return He(t),null;case 13:if(fe(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)tp(),Vr(),t.flags|=98560,o=!1;else if(o=Mo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[_t]=t}else Vr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else Mt!==null&&(Au(Mt),Mt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ge.current&1)!==0?Ae===0&&(Ae=3):Hc())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Br(),Cu(e,t),e===null&&Bi(t.stateNode.containerInfo),He(t),null;case 10:return Ec(t.type._context),He(t),null;case 17:return it(t.type)&&ms(),He(t),null;case 19:if(fe(ge),o=t.memoizedState,o===null)return He(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ci(o,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Ss(e),s!==null){for(t.flags|=128,ci(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pe()>Hr&&(t.flags|=128,r=!0,ci(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ss(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!pe)return He(t),null}else 2*Pe()-o.renderingStartTime>Hr&&n!==1073741824&&(t.flags|=128,r=!0,ci(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pe(),t.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Uc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(lt&1073741824)!==0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function E3(e,t){switch(kc(t),t.tag){case 1:return it(t.type)&&ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),fe(rt),fe(Ke),zc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Lc(t),null;case 13:if(fe(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ge),null;case 4:return Br(),null;case 10:return Ec(t.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var Oo=!1,Ge=!1,R3=typeof WeakSet=="function"?WeakSet:Set,_=null;function br(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function Su(e,t,n){try{n()}catch(r){xe(e,t,r)}}var $0=!1;function A3(e,t){if(ou=ds,e=Bh(),Cc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++d===r&&(l=s),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(su={focusedElem:e,selectionRange:n},ds=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Rt(t.type,w),S);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(C){xe(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=$0,$0=!1,y}function Ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Su(t,n,o)}i=i.next}while(i!==r)}}function Js(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ku(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fp(e){var t=e.alternate;t!==null&&(e.alternate=null,Fp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[Hi],delete t[uu],delete t[d3],delete t[f3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dp(e){return e.tag===5||e.tag===3||e.tag===4}function _0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ps));else if(r!==4&&(e=e.child,e!==null))for(Pu(e,t,n),e=e.sibling;e!==null;)Pu(e,t,n),e=e.sibling}function bu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bu(e,t,n),e=e.sibling;e!==null;)bu(e,t,n),e=e.sibling}var Fe=null,At=!1;function sn(e,t,n){for(n=n.child;n!==null;)Vp(e,t,n),n=n.sibling}function Vp(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Hs,n)}catch{}switch(n.tag){case 5:Ge||br(n,t);case 6:var r=Fe,i=At;Fe=null,sn(e,t,n),Fe=r,At=i,Fe!==null&&(At?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(At?(e=Fe,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Di(e)):sl(Fe,n.stateNode));break;case 4:r=Fe,i=At,Fe=n.stateNode.containerInfo,At=!0,sn(e,t,n),Fe=r,At=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Su(n,t,s),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!Ge&&(br(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,t,a)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,sn(e,t,n),Ge=r):sn(e,t,n);break;default:sn(e,t,n)}}function F0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new R3),t.forEach(function(r){var i=F3.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Fe=a.stateNode,At=!1;break e;case 3:Fe=a.stateNode.containerInfo,At=!0;break e;case 4:Fe=a.stateNode.containerInfo,At=!0;break e}a=a.return}if(Fe===null)throw Error(M(160));Vp(o,s,i),Fe=null,At=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jp(t,e),t=t.sibling}function jp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),It(e),r&4){try{Ti(3,e,e.return),Js(3,e)}catch(w){xe(e,e.return,w)}try{Ti(5,e,e.return)}catch(w){xe(e,e.return,w)}}break;case 1:Et(t,e),It(e),r&512&&n!==null&&br(n,n.return);break;case 5:if(Et(t,e),It(e),r&512&&n!==null&&br(n,n.return),e.flags&32){var i=e.stateNode;try{Ii(i,"")}catch(w){xe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&uh(i,o),Zl(a,s);var u=Zl(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?ph(i,f):d==="dangerouslySetInnerHTML"?fh(i,f):d==="children"?Ii(i,f):lc(i,d,f,u)}switch(a){case"input":Hl(i,o);break;case"textarea":ch(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?zr(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?zr(i,!!o.multiple,o.defaultValue,!0):zr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Hi]=o}catch(w){xe(e,e.return,w)}}break;case 6:if(Et(t,e),It(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){xe(e,e.return,w)}}break;case 3:if(Et(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Di(t.containerInfo)}catch(w){xe(e,e.return,w)}break;case 4:Et(t,e),It(e);break;case 13:Et(t,e),It(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(jc=Pe())),r&4&&F0(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||d,Et(t,e),Ge=u):Et(t,e),It(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(_=e,d=e.child;d!==null;){for(f=_=d;_!==null;){switch(h=_,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ti(4,h,h.return);break;case 1:br(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){xe(r,n,w)}}break;case 5:br(h,h.return);break;case 22:if(h.memoizedState!==null){V0(f);continue}}v!==null?(v.return=h,_=v):V0(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hh("display",s))}catch(w){xe(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){xe(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Et(t,e),It(e),r&4&&F0(e);break;case 21:break;default:Et(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dp(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ii(i,""),r.flags&=-33);var o=_0(e);bu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=_0(e);Pu(e,a,s);break;default:throw Error(M(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M3(e,t,n){_=e,Bp(e)}function Bp(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Oo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ge;a=Oo;var u=Ge;if(Oo=s,(Ge=l)&&!u)for(_=i;_!==null;)s=_,l=s.child,s.tag===22&&s.memoizedState!==null?j0(i):l!==null?(l.return=s,_=l):j0(i);for(;o!==null;)_=o,Bp(o),o=o.sibling;_=i,Oo=a,Ge=u}D0(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,_=o):D0(e)}}function D0(e){for(;_!==null;){var t=_;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||Js(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&k0(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}k0(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Di(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ge||t.flags&512&&ku(t)}catch(h){xe(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function V0(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function j0(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Js(4,t)}catch(l){xe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){xe(t,i,l)}}var o=t.return;try{ku(t)}catch(l){xe(t,o,l)}break;case 5:var s=t.return;try{ku(t)}catch(l){xe(t,s,l)}}}catch(l){xe(t,t.return,l)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var L3=Math.ceil,bs=nn.ReactCurrentDispatcher,Dc=nn.ReactCurrentOwner,St=nn.ReactCurrentBatchConfig,ee=0,ze=null,Ee=null,De=0,lt=0,Tr=Nn(0),Ae=0,Qi=null,nr=0,qs=0,Vc=0,Ei=null,et=null,jc=0,Hr=1/0,Bt=null,Ts=!1,Tu=null,Cn=null,No=!1,pn=null,Es=0,Ri=0,Eu=null,Xo=-1,Jo=0;function Qe(){return(ee&6)!==0?Pe():Xo!==-1?Xo:Xo=Pe()}function Sn(e){return(e.mode&1)===0?1:(ee&2)!==0&&De!==0?De&-De:p3.transition!==null?(Jo===0&&(Jo=Th()),Jo):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Oh(e.type)),e)}function Ot(e,t,n,r){if(50<Ri)throw Ri=0,Eu=null,Error(M(185));oo(e,n,r),((ee&2)===0||e!==ze)&&(e===ze&&((ee&2)===0&&(qs|=n),Ae===4&&fn(e,De)),ot(e,r),n===1&&ee===0&&(t.mode&1)===0&&(Hr=Pe()+500,Zs&&In()))}function ot(e,t){var n=e.callbackNode;pg(e,t);var r=cs(e,e===ze?De:0);if(r===0)n!==null&&Qd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qd(n),t===1)e.tag===0?h3(B0.bind(null,e)):Jh(B0.bind(null,e)),u3(function(){(ee&6)===0&&In()}),n=null;else{switch(Eh(r)){case 1:n=hc;break;case 4:n=Ph;break;case 16:n=us;break;case 536870912:n=bh;break;default:n=us}n=Qp(n,Up.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Up(e,t){if(Xo=-1,Jo=0,(ee&6)!==0)throw Error(M(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=cs(e,e===ze?De:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Rs(e,r);else{t=r;var i=ee;ee|=2;var o=Wp();(ze!==e||De!==t)&&(Bt=null,Hr=Pe()+500,Qn(e,t));do try{N3();break}catch(a){Hp(e,a)}while(1);Tc(),bs.current=o,ee=i,Ee!==null?t=0:(ze=null,De=0,t=Ae)}if(t!==0){if(t===2&&(i=eu(e),i!==0&&(r=i,t=Ru(e,i))),t===1)throw n=Qi,Qn(e,0),fn(e,r),ot(e,Pe()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!z3(i)&&(t=Rs(e,r),t===2&&(o=eu(e),o!==0&&(r=o,t=Ru(e,o))),t===1))throw n=Qi,Qn(e,0),fn(e,r),ot(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Bn(e,et,Bt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=jc+500-Pe(),10<t)){if(cs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=lu(Bn.bind(null,e,et,Bt),t);break}Bn(e,et,Bt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-zt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L3(r/1960))-r,10<r){e.timeoutHandle=lu(Bn.bind(null,e,et,Bt),r);break}Bn(e,et,Bt);break;case 5:Bn(e,et,Bt);break;default:throw Error(M(329))}}}return ot(e,Pe()),e.callbackNode===n?Up.bind(null,e):null}function Ru(e,t){var n=Ei;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=Rs(e,t),e!==2&&(t=et,et=n,t!==null&&Au(t)),e}function Au(e){et===null?et=e:et.push.apply(et,e)}function z3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~Vc,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function B0(e){if((ee&6)!==0)throw Error(M(327));_r();var t=cs(e,0);if((t&1)===0)return ot(e,Pe()),null;var n=Rs(e,t);if(e.tag!==0&&n===2){var r=eu(e);r!==0&&(t=r,n=Ru(e,r))}if(n===1)throw n=Qi,Qn(e,0),fn(e,t),ot(e,Pe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,et,Bt),ot(e,Pe()),null}function Bc(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Hr=Pe()+500,Zs&&In())}}function rr(e){pn!==null&&pn.tag===0&&(ee&6)===0&&_r();var t=ee;ee|=1;var n=St.transition,r=ie;try{if(St.transition=null,ie=1,e)return e()}finally{ie=r,St.transition=n,ee=t,(ee&6)===0&&In()}}function Uc(){lt=Tr.current,fe(Tr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,l3(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(kc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ms();break;case 3:Br(),fe(rt),fe(Ke),zc();break;case 5:Lc(r);break;case 4:Br();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:Ec(r.type._context);break;case 22:case 23:Uc()}n=n.return}if(ze=e,Ee=e=kn(e.current,null),De=lt=t,Ae=0,Qi=null,Vc=qs=nr=0,et=Ei=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Kn=null}return e}function Hp(e,t){do{var n=Ee;try{if(Tc(),Yo.current=Ps,ks){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ks=!1}if(tr=0,Me=Re=ye=null,bi=!1,Ki=0,Dc.current=null,n===null||n.return===null){Ae=1,Qi=t,Ee=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if((d.mode&1)===0&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=A0(s);if(v!==null){v.flags&=-257,M0(v,s,a,o,t),v.mode&1&&R0(o,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if((t&1)===0){R0(o,u,t),Hc();break e}l=Error(M(426))}}else if(pe&&a.mode&1){var S=A0(s);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),M0(S,s,a,o,t),Pc(Ur(l,a));break e}}o=l=Ur(l,a),Ae!==4&&(Ae=2),Ei===null?Ei=[o]:Ei.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Ep(o,l,t);S0(o,g);break e;case 1:a=l;var p=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Cn===null||!Cn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Rp(o,a,t);S0(o,C);break e}}o=o.return}while(o!==null)}Kp(n)}catch(T){t=T,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function Wp(){var e=bs.current;return bs.current=Ps,e===null?Ps:e}function Hc(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),ze===null||(nr&268435455)===0&&(qs&268435455)===0||fn(ze,De)}function Rs(e,t){var n=ee;ee|=2;var r=Wp();(ze!==e||De!==t)&&(Bt=null,Qn(e,t));do try{O3();break}catch(i){Hp(e,i)}while(1);if(Tc(),ee=n,bs.current=r,Ee!==null)throw Error(M(261));return ze=null,De=0,Ae}function O3(){for(;Ee!==null;)Gp(Ee)}function N3(){for(;Ee!==null&&!og();)Gp(Ee)}function Gp(e){var t=Zp(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?Kp(e):Ee=t,Dc.current=null}function Kp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=T3(n,t,lt),n!==null){Ee=n;return}}else{if(n=E3(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ee=null;return}}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ae===0&&(Ae=5)}function Bn(e,t,n){var r=ie,i=St.transition;try{St.transition=null,ie=1,I3(e,t,n,r)}finally{St.transition=i,ie=r}return null}function I3(e,t,n,r){do _r();while(pn!==null);if((ee&6)!==0)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mg(e,o),e===ze&&(Ee=ze=null,De=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||No||(No=!0,Qp(us,function(){return _r(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=St.transition,St.transition=null;var s=ie;ie=1;var a=ee;ee|=4,Dc.current=null,A3(e,n),jp(n,e),t3(su),ds=!!ou,su=ou=null,e.current=n,M3(n),sg(),ee=a,ie=s,St.transition=o}else e.current=n;if(No&&(No=!1,pn=e,Es=i),o=e.pendingLanes,o===0&&(Cn=null),ug(n.stateNode),ot(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ts)throw Ts=!1,e=Tu,Tu=null,e;return(Es&1)!==0&&e.tag!==0&&_r(),o=e.pendingLanes,(o&1)!==0?e===Eu?Ri++:(Ri=0,Eu=e):Ri=0,In(),null}function _r(){if(pn!==null){var e=Eh(Es),t=St.transition,n=ie;try{if(St.transition=null,ie=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,Es=0,(ee&6)!==0)throw Error(M(331));var i=ee;for(ee|=4,_=e.current;_!==null;){var o=_,s=o.child;if((_.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:Ti(8,d,o)}var f=d.child;if(f!==null)f.return=d,_=f;else for(;_!==null;){d=_;var h=d.sibling,v=d.return;if(Fp(d),d===u){_=null;break}if(h!==null){h.return=v,_=h;break}_=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}_=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,_=s;else e:for(;_!==null;){if(o=_,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Ti(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,_=g;break e}_=o.return}}var p=e.current;for(_=p;_!==null;){s=_;var m=s.child;if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,_=m;else e:for(s=p;_!==null;){if(a=_,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Js(9,a)}}catch(T){xe(a,a.return,T)}if(a===s){_=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,_=C;break e}_=a.return}}if(ee=i,In(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Hs,e)}catch{}r=!0}return r}finally{ie=n,St.transition=t}}return!1}function U0(e,t,n){t=Ur(n,t),t=Ep(e,t,1),e=xn(e,t,1),t=Qe(),e!==null&&(oo(e,1,t),ot(e,t))}function xe(e,t,n){if(e.tag===3)U0(e,e,n);else for(;t!==null;){if(t.tag===3){U0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=Ur(n,e),e=Rp(t,e,1),t=xn(t,e,1),e=Qe(),t!==null&&(oo(t,1,e),ot(t,e));break}}t=t.return}}function $3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(De&n)===n&&(Ae===4||Ae===3&&(De&130023424)===De&&500>Pe()-jc?Qn(e,0):Vc|=n),ot(e,t)}function Yp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var n=Qe();e=Jt(e,t),e!==null&&(oo(e,t,n),ot(e,n))}function _3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yp(e,n)}function F3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Yp(e,n)}var Zp;Zp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,b3(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,pe&&(t.flags&1048576)!==0&&qh(t,ys,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qo(e,t),e=t.pendingProps;var i=Dr(t,Ke.current);$r(t,n),i=Nc(null,t,r,e,i,n);var o=Ic();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(o=!0,gs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ac(t),i.updater=Xs,t.stateNode=i,i._reactInternals=t,mu(t,r,e,n),t=yu(null,t,r,!0,o,n)):(t.tag=0,pe&&o&&Sc(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=V3(r),e=Rt(r,e),i){case 0:t=vu(null,t,r,e,n);break e;case 1:t=O0(null,t,r,e,n);break e;case 11:t=L0(null,t,r,e,n);break e;case 14:t=z0(null,t,r,Rt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),vu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),O0(e,t,r,i,n);case 3:e:{if(zp(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,op(e,t),Cs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ur(Error(M(423)),t),t=N0(e,t,r,n,i);break e}else if(r!==i){i=Ur(Error(M(424)),t),t=N0(e,t,r,n,i);break e}else for(ut=wn(t.stateNode.containerInfo.firstChild),dt=t,pe=!0,Mt=null,n=rp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===i){t=qt(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return sp(t),e===null&&fu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,au(r,i)?s=null:o!==null&&au(r,o)&&(t.flags|=32),Lp(e,t),Ze(e,t,s,n),t.child;case 6:return e===null&&fu(t),null;case 13:return Op(e,t,n);case 4:return Mc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jr(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),L0(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ue(ws,r._currentValue),r._currentValue=s,o!==null)if(Nt(o.value,s)){if(o.children===i.children&&!rt.current){t=qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Kt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(M(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),hu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$r(t,n),i=kt(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Rt(r,t.pendingProps),i=Rt(r.type,i),z0(e,t,r,i,n);case 15:return Ap(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Qo(e,t),t.tag=1,it(r)?(e=!0,gs(t)):e=!1,$r(t,n),Tp(t,r,i),mu(t,r,i,n),yu(null,t,r,!0,e,n);case 19:return Np(e,t,n);case 22:return Mp(e,t,n)}throw Error(M(156,t.tag))};function Qp(e,t){return kh(e,t)}function D3(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new D3(e,t,n,r)}function Wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function V3(e){if(typeof e=="function")return Wc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cc)return 11;if(e===dc)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Wc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case gr:return Xn(n.children,i,o,t);case uc:s=8,i|=8;break;case Dl:return e=Ct(12,n,t,i|2),e.elementType=Dl,e.lanes=o,e;case Vl:return e=Ct(13,n,t,i),e.elementType=Vl,e.lanes=o,e;case jl:return e=Ct(19,n,t,i),e.elementType=jl,e.lanes=o,e;case sh:return ea(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ih:s=10;break e;case oh:s=9;break e;case cc:s=11;break e;case dc:s=14;break e;case ln:s=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=Ct(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xn(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function ea(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=sh,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function j3(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Za(0),this.expirationTimes=Za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Za(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gc(e,t,n,r,i,o,s,a,l){return e=new j3(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(o),e}function B3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xp(e){if(!e)return Mn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(it(n))return Xh(e,n,t)}return t}function Jp(e,t,n,r,i,o,s,a,l){return e=Gc(n,r,!0,e,i,o,s,a,l),e.context=Xp(null),n=e.current,r=Qe(),i=Sn(n),o=Kt(r,i),o.callback=t!=null?t:null,xn(n,o,i),e.current.lanes=i,oo(e,i,r),ot(e,r),e}function ta(e,t,n,r){var i=t.current,o=Qe(),s=Sn(i);return n=Xp(n),t.context===null?t.context=n:t.pendingContext=n,t=Kt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,s),e!==null&&(Ot(e,i,s,o),Ko(e,i,s)),s}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function H0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kc(e,t){H0(e,t),(e=e.alternate)&&H0(e,t)}function U3(){return null}var qp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}na.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));ta(e,t,null,null)};na.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rr(function(){ta(null,e,null,null)}),t[Xt]=null}};function na(e){this._internalRoot=e}na.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&zh(e)}};function Zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function W0(){}function H3(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=As(s);o.call(u)}}var s=Jp(t,r,e,0,null,!1,!1,"",W0);return e._reactRootContainer=s,e[Xt]=s.current,Bi(e.nodeType===8?e.parentNode:e),rr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=As(l);a.call(u)}}var l=Gc(e,0,!1,null,null,!1,!1,"",W0);return e._reactRootContainer=l,e[Xt]=l.current,Bi(e.nodeType===8?e.parentNode:e),rr(function(){ta(t,l,n,r)}),l}function ia(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=As(s);a.call(l)}}ta(t,s,e,i)}else s=H3(n,t,e,i,r);return As(s)}Rh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gi(t.pendingLanes);n!==0&&(pc(t,n|1),ot(t,Pe()),(ee&6)===0&&(Hr=Pe()+500,In()))}break;case 13:rr(function(){var r=Jt(e,1);if(r!==null){var i=Qe();Ot(r,e,1,i)}}),Kc(e,1)}};mc=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=Qe();Ot(t,e,134217728,n)}Kc(e,134217728)}};Ah=function(e){if(e.tag===13){var t=Sn(e),n=Jt(e,t);if(n!==null){var r=Qe();Ot(n,e,t,r)}Kc(e,t)}};Mh=function(){return ie};Lh=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Xl=function(e,t,n){switch(t){case"input":if(Hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ys(r);if(!i)throw Error(M(90));lh(r),Hl(r,i)}}}break;case"textarea":ch(e,n);break;case"select":t=n.value,t!=null&&zr(e,!!n.multiple,t,!1)}};vh=Bc;yh=rr;var W3={usingClientEntryPoint:!1,Events:[ao,xr,Ys,mh,gh,Bc]},di={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G3={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ch(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||U3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Hs=Io.inject(G3),Ft=Io}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W3;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zc(t))throw Error(M(200));return B3(e,t,null,n)};pt.createRoot=function(e,t){if(!Zc(e))throw Error(M(299));var n=!1,r="",i=qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Gc(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,Bi(e.nodeType===8?e.parentNode:e),new Yc(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Ch(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return rr(e)};pt.hydrate=function(e,t,n){if(!ra(t))throw Error(M(200));return ia(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!Zc(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=qp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jp(t,null,e,1,n!=null?n:null,i,!1,o,s),e[Xt]=t.current,Bi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new na(t)};pt.render=function(e,t,n){if(!ra(t))throw Error(M(200));return ia(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!ra(e))throw Error(M(40));return e._reactRootContainer?(rr(function(){ia(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};pt.unstable_batchedUpdates=Bc;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ra(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return ia(e,t,n,!1,r)};pt.version="18.3.1-next-f1338f8080-20240426";function em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(em)}catch(e){console.error(e)}}em(),Us.exports=pt;var tm=Us.exports,K3=Gf({__proto__:null,default:tm},[Us.exports]),G0=Us.exports;_l.createRoot=G0.createRoot,_l.hydrateRoot=G0.hydrateRoot;var Qc={exports:{}},oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=Symbol.for("react.element"),Jc=Symbol.for("react.portal"),oa=Symbol.for("react.fragment"),sa=Symbol.for("react.strict_mode"),aa=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),ua=Symbol.for("react.context"),Y3=Symbol.for("react.server_context"),ca=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),fa=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),pa=Symbol.for("react.lazy"),Z3=Symbol.for("react.offscreen"),nm;nm=Symbol.for("react.module.reference");function bt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xc:switch(e=e.type,e){case oa:case aa:case sa:case da:case fa:return e;default:switch(e=e&&e.$$typeof,e){case Y3:case ua:case ca:case pa:case ha:case la:return e;default:return t}}case Jc:return t}}}oe.ContextConsumer=ua;oe.ContextProvider=la;oe.Element=Xc;oe.ForwardRef=ca;oe.Fragment=oa;oe.Lazy=pa;oe.Memo=ha;oe.Portal=Jc;oe.Profiler=aa;oe.StrictMode=sa;oe.Suspense=da;oe.SuspenseList=fa;oe.isAsyncMode=function(){return!1};oe.isConcurrentMode=function(){return!1};oe.isContextConsumer=function(e){return bt(e)===ua};oe.isContextProvider=function(e){return bt(e)===la};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xc};oe.isForwardRef=function(e){return bt(e)===ca};oe.isFragment=function(e){return bt(e)===oa};oe.isLazy=function(e){return bt(e)===pa};oe.isMemo=function(e){return bt(e)===ha};oe.isPortal=function(e){return bt(e)===Jc};oe.isProfiler=function(e){return bt(e)===aa};oe.isStrictMode=function(e){return bt(e)===sa};oe.isSuspense=function(e){return bt(e)===da};oe.isSuspenseList=function(e){return bt(e)===fa};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===oa||e===aa||e===sa||e===da||e===fa||e===Z3||typeof e=="object"&&e!==null&&(e.$$typeof===pa||e.$$typeof===ha||e.$$typeof===la||e.$$typeof===ua||e.$$typeof===ca||e.$$typeof===nm||e.getModuleId!==void 0)};oe.typeOf=bt;Qc.exports=oe;function Q3(e){function t(z,N,I,H,b){for(var Y=0,O=0,le=0,q=0,Q,K,Ne=0,qe=0,te,Be=te=Q=0,ne=0,Ie=0,ni=0,$e=0,yo=I.length,ri=yo-1,Tt,G="",ke="",Ba="",Ua="",on;ne<yo;){if(K=I.charCodeAt(ne),ne===ri&&O+q+le+Y!==0&&(O!==0&&(K=O===47?10:47),q=le=Y=0,yo++,ri++),O+q+le+Y===0){if(ne===ri&&(0<Ie&&(G=G.replace(h,"")),0<G.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:G+=I.charAt(ne)}K=59}switch(K){case 123:for(G=G.trim(),Q=G.charCodeAt(0),te=1,$e=++ne;ne<yo;){switch(K=I.charCodeAt(ne)){case 123:te++;break;case 125:te--;break;case 47:switch(K=I.charCodeAt(ne+1)){case 42:case 47:e:{for(Be=ne+1;Be<ri;++Be)switch(I.charCodeAt(Be)){case 47:if(K===42&&I.charCodeAt(Be-1)===42&&ne+2!==Be){ne=Be+1;break e}break;case 10:if(K===47){ne=Be+1;break e}}ne=Be}}break;case 91:K++;case 40:K++;case 34:case 39:for(;ne++<ri&&I.charCodeAt(ne)!==K;);}if(te===0)break;ne++}switch(te=I.substring($e,ne),Q===0&&(Q=(G=G.replace(f,"").trim()).charCodeAt(0)),Q){case 64:switch(0<Ie&&(G=G.replace(h,"")),K=G.charCodeAt(1),K){case 100:case 109:case 115:case 45:Ie=N;break;default:Ie=ae}if(te=t(N,Ie,te,K,b+1),$e=te.length,0<L&&(Ie=n(ae,G,ni),on=a(3,te,Ie,N,Z,W,$e,K,b,H),G=Ie.join(""),on!==void 0&&($e=(te=on.trim()).length)===0&&(K=0,te="")),0<$e)switch(K){case 115:G=G.replace(R,s);case 100:case 109:case 45:te=G+"{"+te+"}";break;case 107:G=G.replace(p,"$1 $2"),te=G+"{"+te+"}",te=me===1||me===2&&o("@"+te,3)?"@-webkit-"+te+"@"+te:"@"+te;break;default:te=G+te,H===112&&(te=(ke+=te,""))}else te="";break;default:te=t(N,n(N,G,ni),te,H,b+1)}Ba+=te,te=ni=Ie=Be=Q=0,G="",K=I.charCodeAt(++ne);break;case 125:case 59:if(G=(0<Ie?G.replace(h,""):G).trim(),1<($e=G.length))switch(Be===0&&(Q=G.charCodeAt(0),Q===45||96<Q&&123>Q)&&($e=(G=G.replace(" ",":")).length),0<L&&(on=a(1,G,N,z,Z,W,ke.length,H,b,H))!==void 0&&($e=(G=on.trim()).length)===0&&(G="\0\0"),Q=G.charCodeAt(0),K=G.charCodeAt(1),Q){case 0:break;case 64:if(K===105||K===99){Ua+=G+I.charAt(ne);break}default:G.charCodeAt($e-1)!==58&&(ke+=i(G,Q,K,G.charCodeAt(2)))}ni=Ie=Be=Q=0,G="",K=I.charCodeAt(++ne)}}switch(K){case 13:case 10:O===47?O=0:1+Q===0&&H!==107&&0<G.length&&(Ie=1,G+="\0"),0<L*U&&a(0,G,N,z,Z,W,ke.length,H,b,H),W=1,Z++;break;case 59:case 125:if(O+q+le+Y===0){W++;break}default:switch(W++,Tt=I.charAt(ne),K){case 9:case 32:if(q+Y+O===0)switch(Ne){case 44:case 58:case 9:case 32:Tt="";break;default:K!==32&&(Tt=" ")}break;case 0:Tt="\\0";break;case 12:Tt="\\f";break;case 11:Tt="\\v";break;case 38:q+O+Y===0&&(Ie=ni=1,Tt="\f"+Tt);break;case 108:if(q+O+Y+J===0&&0<Be)switch(ne-Be){case 2:Ne===112&&I.charCodeAt(ne-3)===58&&(J=Ne);case 8:qe===111&&(J=qe)}break;case 58:q+O+Y===0&&(Be=ne);break;case 44:O+le+q+Y===0&&(Ie=1,Tt+="\r");break;case 34:case 39:O===0&&(q=q===K?0:q===0?K:q);break;case 91:q+O+le===0&&Y++;break;case 93:q+O+le===0&&Y--;break;case 41:q+O+Y===0&&le--;break;case 40:if(q+O+Y===0){if(Q===0)switch(2*Ne+3*qe){case 533:break;default:Q=1}le++}break;case 64:O+le+q+Y+Be+te===0&&(te=1);break;case 42:case 47:if(!(0<q+Y+le))switch(O){case 0:switch(2*K+3*I.charCodeAt(ne+1)){case 235:O=47;break;case 220:$e=ne,O=42}break;case 42:K===47&&Ne===42&&$e+2!==ne&&(I.charCodeAt($e+2)===33&&(ke+=I.substring($e,ne+1)),Tt="",O=0)}}O===0&&(G+=Tt)}qe=Ne,Ne=K,ne++}if($e=ke.length,0<$e){if(Ie=N,0<L&&(on=a(2,ke,Ie,z,Z,W,$e,H,b,H),on!==void 0&&(ke=on).length===0))return Ua+ke+Ba;if(ke=Ie.join(",")+"{"+ke+"}",me*J!==0){switch(me!==2||o(ke,2)||(J=0),J){case 111:ke=ke.replace(C,":-moz-$1")+ke;break;case 112:ke=ke.replace(m,"::-webkit-input-$1")+ke.replace(m,"::-moz-$1")+ke.replace(m,":-ms-input-$1")+ke}J=0}}return Ua+ke+Ba}function n(z,N,I){var H=N.trim().split(S);N=H;var b=H.length,Y=z.length;switch(Y){case 0:case 1:var O=0;for(z=Y===0?"":z[0]+" ";O<b;++O)N[O]=r(z,N[O],I).trim();break;default:var le=O=0;for(N=[];O<b;++O)for(var q=0;q<Y;++q)N[le++]=r(z[q]+" ",H[O],I).trim()}return N}function r(z,N,I){var H=N.charCodeAt(0);switch(33>H&&(H=(N=N.trim()).charCodeAt(0)),H){case 38:return N.replace(g,"$1"+z.trim());case 58:return z.trim()+N.replace(g,"$1"+z.trim());default:if(0<1*I&&0<N.indexOf("\f"))return N.replace(g,(z.charCodeAt(0)===58?"":"$1")+z.trim())}return z+N}function i(z,N,I,H){var b=z+";",Y=2*N+3*I+4*H;if(Y===944){z=b.indexOf(":",9)+1;var O=b.substring(z,b.length-1).trim();return O=b.substring(0,z).trim()+O+";",me===1||me===2&&o(O,1)?"-webkit-"+O+O:O}if(me===0||me===2&&!o(b,1))return b;switch(Y){case 1015:return b.charCodeAt(10)===97?"-webkit-"+b+b:b;case 951:return b.charCodeAt(3)===116?"-webkit-"+b+b:b;case 963:return b.charCodeAt(5)===110?"-webkit-"+b+b:b;case 1009:if(b.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+b+b;case 978:return"-webkit-"+b+"-moz-"+b+b;case 1019:case 983:return"-webkit-"+b+"-moz-"+b+"-ms-"+b+b;case 883:if(b.charCodeAt(8)===45)return"-webkit-"+b+b;if(0<b.indexOf("image-set(",11))return b.replace(j,"$1-webkit-$2")+b;break;case 932:if(b.charCodeAt(4)===45)switch(b.charCodeAt(5)){case 103:return"-webkit-box-"+b.replace("-grow","")+"-webkit-"+b+"-ms-"+b.replace("grow","positive")+b;case 115:return"-webkit-"+b+"-ms-"+b.replace("shrink","negative")+b;case 98:return"-webkit-"+b+"-ms-"+b.replace("basis","preferred-size")+b}return"-webkit-"+b+"-ms-"+b+b;case 964:return"-webkit-"+b+"-ms-flex-"+b+b;case 1023:if(b.charCodeAt(8)!==99)break;return O=b.substring(b.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+O+"-webkit-"+b+"-ms-flex-pack"+O+b;case 1005:return y.test(b)?b.replace(v,":-webkit-")+b.replace(v,":-moz-")+b:b;case 1e3:switch(O=b.substring(13).trim(),N=O.indexOf("-")+1,O.charCodeAt(0)+O.charCodeAt(N)){case 226:O=b.replace(T,"tb");break;case 232:O=b.replace(T,"tb-rl");break;case 220:O=b.replace(T,"lr");break;default:return b}return"-webkit-"+b+"-ms-"+O+b;case 1017:if(b.indexOf("sticky",9)===-1)break;case 975:switch(N=(b=z).length-10,O=(b.charCodeAt(N)===33?b.substring(0,N):b).substring(z.indexOf(":",7)+1).trim(),Y=O.charCodeAt(0)+(O.charCodeAt(7)|0)){case 203:if(111>O.charCodeAt(8))break;case 115:b=b.replace(O,"-webkit-"+O)+";"+b;break;case 207:case 102:b=b.replace(O,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+b.replace(O,"-webkit-"+O)+";"+b.replace(O,"-ms-"+O+"box")+";"+b}return b+";";case 938:if(b.charCodeAt(5)===45)switch(b.charCodeAt(6)){case 105:return O=b.replace("-items",""),"-webkit-"+b+"-webkit-box-"+O+"-ms-flex-"+O+b;case 115:return"-webkit-"+b+"-ms-flex-item-"+b.replace(E,"")+b;default:return"-webkit-"+b+"-ms-flex-line-pack"+b.replace("align-content","").replace(E,"")+b}break;case 973:case 989:if(b.charCodeAt(3)!==45||b.charCodeAt(4)===122)break;case 931:case 953:if(F.test(z)===!0)return(O=z.substring(z.indexOf(":")+1)).charCodeAt(0)===115?i(z.replace("stretch","fill-available"),N,I,H).replace(":fill-available",":stretch"):b.replace(O,"-webkit-"+O)+b.replace(O,"-moz-"+O.replace("fill-",""))+b;break;case 962:if(b="-webkit-"+b+(b.charCodeAt(5)===102?"-ms-"+b:"")+b,I+H===211&&b.charCodeAt(13)===105&&0<b.indexOf("transform",10))return b.substring(0,b.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+b}return b}function o(z,N){var I=z.indexOf(N===1?":":"{"),H=z.substring(0,N!==3?I:10);return I=z.substring(I+1,z.length-1),D(N!==2?H:H.replace($,"$1"),I,N)}function s(z,N){var I=i(N,N.charCodeAt(0),N.charCodeAt(1),N.charCodeAt(2));return I!==N+";"?I.replace(A," or ($1)").substring(4):"("+N+")"}function a(z,N,I,H,b,Y,O,le,q,Q){for(var K=0,Ne=N,qe;K<L;++K)switch(qe=he[K].call(d,z,Ne,I,H,b,Y,O,le,q,Q)){case void 0:case!1:case!0:case null:break;default:Ne=qe}if(Ne!==N)return Ne}function l(z){switch(z){case void 0:case null:L=he.length=0;break;default:if(typeof z=="function")he[L++]=z;else if(typeof z=="object")for(var N=0,I=z.length;N<I;++N)l(z[N]);else U=!!z|0}return l}function u(z){return z=z.prefix,z!==void 0&&(D=null,z?typeof z!="function"?me=1:(me=2,D=z):me=0),u}function d(z,N){var I=z;if(33>I.charCodeAt(0)&&(I=I.trim()),V=I,I=[V],0<L){var H=a(-1,N,I,I,Z,W,0,0,0,0);H!==void 0&&typeof H=="string"&&(N=H)}var b=t(ae,I,N,0,0);return 0<L&&(H=a(-2,b,I,I,Z,W,b.length,0,0,0),H!==void 0&&(b=H)),V="",J=0,W=Z=1,b}var f=/^\0+/g,h=/[\0\r\f]/g,v=/: */g,y=/zoo|gra/,w=/([,: ])(transform)/g,S=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,C=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,E=/-self|flex-/g,$=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,W=1,Z=1,J=0,me=1,ae=[],he=[],L=0,D=null,U=0,V="";return d.use=l,d.set=u,e!==void 0&&u(e),d}var X3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function J3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var q3=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,K0=J3(function(e){return q3.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),rm={exports:{}},se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=typeof Symbol=="function"&&Symbol.for,qc=Oe?Symbol.for("react.element"):60103,ed=Oe?Symbol.for("react.portal"):60106,ma=Oe?Symbol.for("react.fragment"):60107,ga=Oe?Symbol.for("react.strict_mode"):60108,va=Oe?Symbol.for("react.profiler"):60114,ya=Oe?Symbol.for("react.provider"):60109,wa=Oe?Symbol.for("react.context"):60110,td=Oe?Symbol.for("react.async_mode"):60111,xa=Oe?Symbol.for("react.concurrent_mode"):60111,Ca=Oe?Symbol.for("react.forward_ref"):60112,Sa=Oe?Symbol.for("react.suspense"):60113,e4=Oe?Symbol.for("react.suspense_list"):60120,ka=Oe?Symbol.for("react.memo"):60115,Pa=Oe?Symbol.for("react.lazy"):60116,t4=Oe?Symbol.for("react.block"):60121,n4=Oe?Symbol.for("react.fundamental"):60117,r4=Oe?Symbol.for("react.responder"):60118,i4=Oe?Symbol.for("react.scope"):60119;function gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qc:switch(e=e.type,e){case td:case xa:case ma:case va:case ga:case Sa:return e;default:switch(e=e&&e.$$typeof,e){case wa:case Ca:case Pa:case ka:case ya:return e;default:return t}}case ed:return t}}}function im(e){return gt(e)===xa}se.AsyncMode=td;se.ConcurrentMode=xa;se.ContextConsumer=wa;se.ContextProvider=ya;se.Element=qc;se.ForwardRef=Ca;se.Fragment=ma;se.Lazy=Pa;se.Memo=ka;se.Portal=ed;se.Profiler=va;se.StrictMode=ga;se.Suspense=Sa;se.isAsyncMode=function(e){return im(e)||gt(e)===td};se.isConcurrentMode=im;se.isContextConsumer=function(e){return gt(e)===wa};se.isContextProvider=function(e){return gt(e)===ya};se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qc};se.isForwardRef=function(e){return gt(e)===Ca};se.isFragment=function(e){return gt(e)===ma};se.isLazy=function(e){return gt(e)===Pa};se.isMemo=function(e){return gt(e)===ka};se.isPortal=function(e){return gt(e)===ed};se.isProfiler=function(e){return gt(e)===va};se.isStrictMode=function(e){return gt(e)===ga};se.isSuspense=function(e){return gt(e)===Sa};se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ma||e===xa||e===va||e===ga||e===Sa||e===e4||typeof e=="object"&&e!==null&&(e.$$typeof===Pa||e.$$typeof===ka||e.$$typeof===ya||e.$$typeof===wa||e.$$typeof===Ca||e.$$typeof===n4||e.$$typeof===r4||e.$$typeof===i4||e.$$typeof===t4)};se.typeOf=gt;rm.exports=se;var nd=rm.exports,o4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a4={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},om={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rd={};rd[nd.ForwardRef]=a4;rd[nd.Memo]=om;function Y0(e){return nd.isMemo(e)?om:rd[e.$$typeof]||o4}var l4=Object.defineProperty,u4=Object.getOwnPropertyNames,Z0=Object.getOwnPropertySymbols,c4=Object.getOwnPropertyDescriptor,d4=Object.getPrototypeOf,Q0=Object.prototype;function sm(e,t,n){if(typeof t!="string"){if(Q0){var r=d4(t);r&&r!==Q0&&sm(e,r,n)}var i=u4(t);Z0&&(i=i.concat(Z0(t)));for(var o=Y0(e),s=Y0(t),a=0;a<i.length;++a){var l=i[a];if(!s4[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=c4(t,l);try{l4(e,l,u)}catch{}}}}return e}var f4=sm;function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var X0=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Mu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Qc.exports.typeOf(e)},Ms=Object.freeze([]),Pn=Object.freeze({});function Wr(e){return typeof e=="function"}function J0(e){return e.displayName||e.name||"Component"}function id(e){return e&&typeof e.styledComponentId=="string"}var Gr=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",od=typeof window!="undefined"&&"HTMLElement"in window,h4=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),p4={};function ir(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var m4=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&ir(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),es=new Map,Ls=new Map,Ai=1,$o=function(e){if(es.has(e))return es.get(e);for(;Ls.has(Ai);)Ai++;var t=Ai++;return es.set(e,t),Ls.set(t,e),t},g4=function(e){return Ls.get(e)},v4=function(e,t){t>=Ai&&(Ai=t+1),es.set(e,t),Ls.set(t,e)},y4="style["+Gr+'][data-styled-version="5.3.11"]',w4=new RegExp("^"+Gr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),x4=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},C4=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(w4);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(v4(u,l),x4(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},S4=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},am=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var d=l[u];if(d&&d.nodeType===1&&d.hasAttribute(Gr))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Gr,"active"),r.setAttribute("data-styled-version","5.3.11");var s=S4();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},k4=function(){function e(n){var r=this.element=am(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}ir(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),P4=function(){function e(n){var r=this.element=am(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),b4=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),q0=od,T4={isServer:!od,useCSSOMInjection:!h4},zs=function(){function e(n,r,i){n===void 0&&(n=Pn),r===void 0&&(r={}),this.options=Lt({},T4,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&od&&q0&&(q0=!1,function(o){for(var s=document.querySelectorAll(y4),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Gr)!=="active"&&(C4(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return $o(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Lt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new b4(s):o?new k4(s):new P4(s),new m4(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if($o(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules($o(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup($o(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=g4(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var d=Gr+".g"+s+'[id="'+a+'"]',f="";l!==void 0&&l.forEach(function(h){h.length>0&&(f+=h+",")}),o+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),E4=/(a)(d)/gi,e1=function(e){return String.fromCharCode(e+(e>25?39:97))};function Lu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=e1(t%52)+n;return(e1(t%52)+n).replace(E4,"$1-$2")}var Er=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},lm=function(e){return Er(5381,e)};function um(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Wr(n)&&!id(n))return!1}return!0}var R4=lm("5.3.11"),A4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&um(t),this.componentId=n,this.baseHash=Er(R4,n),this.baseStyle=r,zs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=or(this.rules,t,n,r).join(""),a=Lu(Er(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=Er(this.baseHash,r.hash),f="",h=0;h<u;h++){var v=this.rules[h];if(typeof v=="string")f+=v;else if(v){var y=or(v,t,n,r),w=Array.isArray(y)?y.join(""):y;d=Er(d,w+h),f+=w}}if(f){var S=Lu(d>>>0);if(!n.hasNameForId(i,S)){var g=r(f,"."+S,void 0,i);n.insertRules(i,S,g)}o.push(S)}}return o.join(" ")},e}(),M4=/^\s*\/\/.*$/gm,L4=[":","[",".","#"];function z4(e){var t,n,r,i,o=e===void 0?Pn:e,s=o.options,a=s===void 0?Pn:s,l=o.plugins,u=l===void 0?Ms:l,d=new Q3(a),f=[],h=function(w){function S(g){if(g)try{w(g+"}")}catch{}}return function(g,p,m,C,T,R,A,E,$,F){switch(g){case 1:if($===0&&p.charCodeAt(0)===64)return w(p+";"),"";break;case 2:if(E===0)return p+"/*|*/";break;case 3:switch(E){case 102:case 112:return w(m[0]+p),"";default:return p+(F===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(S)}}}(function(w){f.push(w)}),v=function(w,S,g){return S===0&&L4.indexOf(g[n.length])!==-1||g.match(i)?w:"."+t};function y(w,S,g,p){p===void 0&&(p="&");var m=w.replace(M4,""),C=S&&g?g+" "+S+" { "+m+" }":m;return t=p,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(g||!S?"":S,C)}return d.use([].concat(u,[function(w,S,g){w===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,v))},h,function(w){if(w===-2){var S=f;return f=[],S}}])),y.hash=u.length?u.reduce(function(w,S){return S.name||ir(15),Er(w,S.name)},5381).toString():"",y}var cm=re.createContext();cm.Consumer;var dm=re.createContext(),O4=(dm.Consumer,new zs),zu=z4();function fm(){return x.exports.useContext(cm)||O4}function hm(){return x.exports.useContext(dm)||zu}var N4=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=zu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return ir(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=zu),this.name+t.hash},e}(),I4=/([A-Z])/,$4=/([A-Z])/g,_4=/^ms-/,F4=function(e){return"-"+e.toLowerCase()};function t1(e){return I4.test(e)?e.replace($4,F4).replace(_4,"-ms-"):e}var n1=function(e){return e==null||e===!1||e===""};function or(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=or(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(n1(e))return"";if(id(e))return"."+e.styledComponentId;if(Wr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return or(l,t,n,r)}var u;return e instanceof N4?n?(e.inject(n,r),e.getName(r)):e:Mu(e)?function d(f,h){var v,y,w=[];for(var S in f)f.hasOwnProperty(S)&&!n1(f[S])&&(Array.isArray(f[S])&&f[S].isCss||Wr(f[S])?w.push(t1(S)+":",f[S],";"):Mu(f[S])?w.push.apply(w,d(f[S],S)):w.push(t1(S)+": "+(v=S,(y=f[S])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||v in X3||v.startsWith("--")?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(w,["}"]):w}(e):e.toString()}var r1=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function pm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Wr(e)||Mu(e)?r1(or(X0(Ms,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:r1(or(X0(e,n)))}var mm=function(e,t,n){return n===void 0&&(n=Pn),e.theme!==n.theme&&e.theme||t||n.theme},D4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,V4=/(^-|-$)/g;function gl(e){return e.replace(D4,"-").replace(V4,"")}var gm=function(e){return Lu(lm(e)>>>0)};function _o(e){return typeof e=="string"&&!0}var Ou=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},j4=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function B4(e,t,n){var r=e[n];Ou(t)&&Ou(r)?vm(r,t):e[n]=t}function vm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(Ou(s))for(var a in s)j4(a)&&B4(e,s[a],a)}return e}var Xi=re.createContext();Xi.Consumer;function U4(e){var t=x.exports.useContext(Xi),n=x.exports.useMemo(function(){return function(r,i){if(!r)return ir(14);if(Wr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?ir(8):i?Lt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?re.createElement(Xi.Provider,{value:n},e.children):null}var vl={};function ym(e,t,n){var r=id(e),i=!_o(e),o=t.attrs,s=o===void 0?Ms:o,a=t.componentId,l=a===void 0?function(p,m){var C=typeof p!="string"?"sc":gl(p);vl[C]=(vl[C]||0)+1;var T=C+"-"+gm("5.3.11"+C+vl[C]);return m?m+"-"+T:T}(t.displayName,t.parentComponentId):a,u=t.displayName,d=u===void 0?function(p){return _o(p)?"styled."+p:"Styled("+J0(p)+")"}(e):u,f=t.displayName&&t.componentId?gl(t.displayName)+"-"+t.componentId:t.componentId||l,h=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(p,m,C){return e.shouldForwardProp(p,m,C)&&t.shouldForwardProp(p,m,C)}:e.shouldForwardProp);var y,w=new A4(n,f,r?e.componentStyle:void 0),S=w.isStatic&&s.length===0,g=function(p,m){return function(C,T,R,A){var E=C.attrs,$=C.componentStyle,F=C.defaultProps,j=C.foldedComponentIds,W=C.shouldForwardProp,Z=C.styledComponentId,J=C.target,me=function(H,b,Y){H===void 0&&(H=Pn);var O=Lt({},b,{theme:H}),le={};return Y.forEach(function(q){var Q,K,Ne,qe=q;for(Q in Wr(qe)&&(qe=qe(O)),qe)O[Q]=le[Q]=Q==="className"?(K=le[Q],Ne=qe[Q],K&&Ne?K+" "+Ne:K||Ne):qe[Q]}),[O,le]}(mm(T,x.exports.useContext(Xi),F)||Pn,T,E),ae=me[0],he=me[1],L=function(H,b,Y,O){var le=fm(),q=hm(),Q=b?H.generateAndInjectStyles(Pn,le,q):H.generateAndInjectStyles(Y,le,q);return Q}($,A,ae),D=R,U=he.$as||T.$as||he.as||T.as||J,V=_o(U),z=he!==T?Lt({},T,{},he):T,N={};for(var I in z)I[0]!=="$"&&I!=="as"&&(I==="forwardedAs"?N.as=z[I]:(W?W(I,K0,U):!V||K0(I))&&(N[I]=z[I]));return T.style&&he.style!==T.style&&(N.style=Lt({},T.style,{},he.style)),N.className=Array.prototype.concat(j,Z,L!==Z?L:null,T.className,he.className).filter(Boolean).join(" "),N.ref=D,x.exports.createElement(U,N)}(y,p,m,S)};return g.displayName=d,(y=re.forwardRef(g)).attrs=h,y.componentStyle=w,y.displayName=d,y.shouldForwardProp=v,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ms,y.styledComponentId=f,y.target=r?e.target:e,y.withComponent=function(p){var m=t.componentId,C=function(R,A){if(R==null)return{};var E,$,F={},j=Object.keys(R);for($=0;$<j.length;$++)E=j[$],A.indexOf(E)>=0||(F[E]=R[E]);return F}(t,["componentId"]),T=m&&m+"-"+(_o(p)?p:gl(J0(p)));return ym(p,Lt({},C,{attrs:h,componentId:T}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?vm({},e.defaultProps,p):p}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&f4(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Nu=function(e){return function t(n,r,i){if(i===void 0&&(i=Pn),!Qc.exports.isValidElementType(r))return ir(1,String(r));var o=function(){return n(r,i,pm.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,Lt({},i,{},s))},o.attrs=function(s){return t(n,r,Lt({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(ym,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Nu[e]=Nu(e)});var H4=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=um(n),zs.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var s=o(or(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,s)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&zs.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function W4(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=pm.apply(void 0,[e].concat(n)),o="sc-global-"+gm(JSON.stringify(i)),s=new H4(i,o);function a(u){var d=fm(),f=hm(),h=x.exports.useContext(Xi),v=x.exports.useRef(d.allocateGSInstance(o)).current;return d.server&&l(v,u,d,h,f),x.exports.useLayoutEffect(function(){if(!d.server)return l(v,u,d,h,f),function(){return s.removeStyles(v,d)}},[v,u,d,h,f]),null}function l(u,d,f,h,v){if(s.isStatic)s.renderStyles(u,p4,f,v);else{var y=Lt({},d,{theme:mm(d,h,a.defaultProps)});s.renderStyles(u,y,f,v)}}return re.memo(a)}var P=Nu;function sd(){return window.GetParentResourceName?window.GetParentResourceName():"nui-frame-app"}const en=()=>!window.invokeNative,G4=()=>{};async function Le(e,t,n,r){const i={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)};if(en()&&n)return n;const o=sd(),s=r!=null?r:o;return await(await fetch(`https://${s}/${e}`,i)).json()}const yl={tag:"default",isFromHookCache:!0,logo:"https://cdn.discordapp.com/attachments/1093997802381656085/1126600893706551408/santa.png",smallLogo:"https://media.discordapp.net/attachments/1008191296030117948/1095025699590512698/Group_33.png",colors:{main:{50:"#ffe3ec",100:"#ffb4c7",200:"#fc84a2",300:"#f9537d",400:"#f62358",500:"#f20a45",600:"#ac0331",700:"#7c0022",800:"#4c0014",900:"#1f0007"},"main-opacity":{50:"rgba(242, 10, 69, 0.05)",100:"rgba(242, 10, 69, 0.1)",200:"rgba(242, 10, 69, 0.2)",300:"rgba(242, 10, 69, 0.3)",400:"rgba(242, 10, 69, 0.4)",500:"rgba(242, 10, 69, 0.5)",600:"rgba(242, 10, 69, 0.6)",700:"rgba(242, 10, 69, 0.7)",800:"rgba(242, 10, 69, 0.8)",900:"rgba(242, 10, 69, 0.9)"},red:{50:"#ffe1e1",100:"#ffb1b1",200:"#ff7f7f",300:"#ff4c4c",400:"#ff1a1a",500:"#e60000",600:"#b40000",700:"#810000",800:"#500000",900:"#210000"},"red-opacity":{50:"rgba(255, 29, 29, 0);",100:"rgba(255, 29, 29, 0.1);",200:"rgba(255, 29, 29, 0.2);",300:"rgba(255, 29, 29, 0.3);",400:"rgba(255, 29, 29, 0.4);",500:"rgba(255, 29, 29, 0.5);",600:"rgba(255, 29, 29, 0.6);",700:"rgba(255, 29, 29, 0.7);",800:"rgba(255, 29, 29, 0.8);",900:"rgba(255, 29, 29, 0.9);"},white:{50:"#f2f2f2",100:"#d9d9d9",200:"#bfbfbf",300:"#a6a6a6",400:"#8c8c8c",500:"#737373",600:"#595959",700:"#404040",800:"#262626",900:"#0d0d0d"},background:{50:"#f2f2f2",100:"#d9d9d9",200:"#bfbfbf",300:"#a6a6a6",400:"#8c8c8c",500:"#737373",600:"#595959",700:"#404040",800:"#262626",900:"#0d0d0d"}},borders:{}},Ce=(e,t)=>{const n=x.exports.useRef(G4);x.exports.useEffect(()=>{n.current=t},[t]),x.exports.useEffect(()=>{const r=i=>{const{action:o,data:s}=i.data;n.current&&o===e&&n.current(s)};return window.addEventListener("message",r),()=>{window.removeEventListener("message",r)}},[e])};var wm={exports:{}},ba={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K4=re,Y4=Symbol.for("react.element"),Z4=Symbol.for("react.fragment"),Q4=Object.prototype.hasOwnProperty,X4=K4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J4={key:!0,ref:!0,__self:!0,__source:!0};function xm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Q4.call(t,r)&&!J4.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Y4,type:e,key:o,ref:s,props:i,_owner:X4.current}}ba.Fragment=Z4;ba.jsx=xm;ba.jsxs=xm;wm.exports=ba;const Iu=wm.exports.jsx,Cm=x.exports.createContext(null),q4=5e3,i1=12;function ev({children:e,customResource:t,customTheme:n}){const[r,i]=x.exports.useState(n!=null?n:yl),[o,s]=x.exports.useState(!1),[a,l]=x.exports.useState(1),[u,d]=x.exports.useState(null),[f]=x.exports.useState(sd()),h=async()=>{if(!o){console.log(`themes(${f}): attemping ${a}/${i1}`);try{const y=await Le("getTheme",{},yl,t!=null?t:"vrp");if(y==null)throw new Error("Theme is undefined or null.");u&&clearTimeout(u),s(!0),i(y),console.log(`themes(${f}): theme found, using it.`);return}catch(y){console.error(`themes(${f}): error while fetching theme.`,y)}l(a+1)}},v=()=>{const y=n!=null?n:yl;i(y)};return x.exports.useEffect(()=>{if(en()){console.log(`themes(${f}): running in browser, using custom or default theme.`),v();return}if(!o){if(a<i1&&!o){if(a===1){h();return}d(setTimeout(()=>{h()},q4));return}console.log(`themes(${f}): attemps limit reached, using custom or default theme.`),v()}},[a]),Ce("setTheme",y=>{i(y)}),Iu(Cm.Provider,{value:{theme:r,setTheme:i},children:Iu(U4,{theme:r,children:e})})}const at=()=>x.exports.useContext(Cm),Sm=x.exports.createContext(null),tv=5e3,o1=12;function nv({children:e,customLang:t,customResource:n}){const[r,i]=x.exports.useState(t!=null?t:null),[o,s]=x.exports.useState(!1),[a,l]=x.exports.useState(1),[u,d]=x.exports.useState(null),[f]=x.exports.useState(sd()),h=S=>{if(S.includes(".")){const g=S.split(".");let p=r;return g.forEach(m=>{p=p[m]}),p}return r[S]},v=(S,...g)=>{if(!r)return S;const p=h(S);return p?g.length>0?p.replace(/{(\d+)}/g,(m,C)=>typeof g[C]!="undefined"?g[C]:m):p:S},y=async()=>{if(!o){console.log(`lang(${f}): attemping ${a}/${o1}`);try{const S=await Le("getLang",f,t,n!=null?n:"localization");if(v==null)throw new Error("Lang is undefined or null.");u&&clearTimeout(u),s(!0),i(S),console.log(`lang(${f}): lang found, using it.`);return}catch(S){console.error(`lang(${f}): error while fetching lang.`,S)}l(a+1)}},w=()=>{const S=t!=null?t:null;i(S)};return x.exports.useEffect(()=>{if(en()){console.log(`lang(${f}): running in browser, using custom or no lang.`),w();return}if(!o){if(a<o1&&!o){if(a===1){y();return}d(setTimeout(()=>{y()},tv));return}console.log(`lang(${f}): attemps limit reached, using null.`),w()}},[a]),Iu(Sm.Provider,{value:{t:v,lang:r,getT:h},children:e})}const $n=()=>x.exports.useContext(Sm);var Ta={exports:{}},Ea={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=x.exports,iv=Symbol.for("react.element"),ov=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,av=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lv={key:!0,ref:!0,__self:!0,__source:!0};function km(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)sv.call(t,r)&&!lv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iv,type:e,key:o,ref:s,props:i,_owner:av.current}}Ea.Fragment=ov;Ea.jsx=km;Ea.jsxs=km;Ta.exports=Ea;const c=Ta.exports.jsx,k=Ta.exports.jsxs,Jn=Ta.exports.Fragment,uv=x.exports.createContext(null),cv=({children:e})=>{const[t,n]=x.exports.useState(!1);return Ce("setVisible",n),x.exports.useEffect(()=>{if(!t)return;const r=i=>{["Escape"].includes(i.code)&&(en()?n(!t):Le("hideFrame"))};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[t]),x.exports.useEffect(()=>{en()&&n(!0)},[]),c(uv.Provider,{value:{visible:t,setVisible:n},children:c("div",{style:{visibility:t?"visible":"hidden",height:"100%"},children:e})})};var dv=W4`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    outline: 0;
    
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    overflow-y: hidden;
    overflow-x: hidden;
    user-select: none;
    background: ${en()?"green":"none"};
  }
  
  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    user-select: none;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    user-select: none;
  }
  
  button {
    cursor: pointer;
  }
  
  :root {
    font-size: 16px;
  }
  
  *
  ::-webkit-scrollbar {
      width: 0.5vw;
  }

  ::-webkit-scrollbar-thumb {
      background: radial-gradient(87.22% 84.84% at 17.04% 12.91%, ${({theme:e})=>e.colors.main[500]} 0%, #69510C 99%);
      border-radius: 100vw;
      overflow: hidden;
  }

  ::-webkit-scrollbar-track {
      background: radial-gradient(87.22% 84.84% at 17.04% 12.91%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.03) 100%);
      border-radius: 100vw;
      overflow: hidden;
  }

  @media screen and (max-width: 800px), screen and (max-height: 600px) {
    :root {
      font-size: 0.3rem;
    }
  }
  @media screen and (min-width: 800px) and (min-height: 600px) {
    :root {
      font-size: 0.425rem;
    }
  }
  @media screen and (min-width: 1000px) and (min-height: 700px) {
    :root {
      font-size: 0.55rem;
    }
  }
  @media screen and (min-width: 1100px) and (min-height: 700px) {
    :root {
    font-size: 0.6rem;
    }
  }
  @media screen and (min-width: 1300px) and (min-height: 700px) {
    :root {
      font-size: 0.7rem;
    }
  }
  @media screen and (min-width: 1400px) and (min-height: 700px) {
    :root {
      font-size: 0.75rem;
    }
  }
  @media screen and (min-width: 1600px) and (min-height: 800px) {
    :root {
      font-size: 0.8rem;
    }
  }
  @media screen and (min-width: 1750px) and (min-height: 900px) {
    :root {
      font-size: 0.9rem;
    }
  }
  @media screen and (min-width: 1850px) and (min-height: 1000px) {
    :root {
      font-size: 1rem;
    }
  }
`,fv="./assets/santa-pvp.90c2f434.png";const hv=P.div`
  position: absolute;
  left: 1.5rem;
  top: -2%;
  background: url(${fv}) no-repeat center;
  background-size: 100% 100%;
  width: 24rem;
  height: 16rem;
`;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ji.apply(this,arguments)}var mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mn||(mn={}));const s1="popstate";function pv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return $u("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Os(i)}return gv(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function Pm(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function mv(){return Math.random().toString(36).substr(2,8)}function a1(e,t){return{usr:e.state,key:e.key,idx:t}}function $u(e,t,n,r){return n===void 0&&(n=null),Ji({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jr(t):t,{state:n,key:t&&t.key||r||mv()})}function Os(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function gv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=mn.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Ji({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=mn.Pop;let S=d(),g=S==null?null:S-u;u=S,l&&l({action:a,location:w.location,delta:g})}function h(S,g){a=mn.Push;let p=$u(w.location,S,g);n&&n(p,S),u=d()+1;let m=a1(p,u),C=w.createHref(p);try{s.pushState(m,"",C)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(C)}o&&l&&l({action:a,location:w.location,delta:1})}function v(S,g){a=mn.Replace;let p=$u(w.location,S,g);n&&n(p,S),u=d();let m=a1(p,u),C=w.createHref(p);s.replaceState(m,"",C),o&&l&&l({action:a,location:w.location,delta:0})}function y(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Os(S);return p=p.replace(/ $/,"%20"),be(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(s1,f),l=S,()=>{i.removeEventListener(s1,f),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:v,go(S){return s.go(S)}};return w}var l1;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(l1||(l1={}));function vv(e,t,n){return n===void 0&&(n="/"),yv(e,t,n,!1)}function yv(e,t,n,r){let i=typeof t=="string"?Jr(t):t,o=ad(i.pathname||"/",n);if(o==null)return null;let s=bm(e);wv(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=Mv(o);a=Rv(s[l],u,r)}return a}function bm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=bn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(be(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),bm(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Tv(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Tm(o.path))i(o,s,l)}),t}function Tm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Tm(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function wv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ev(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xv=/^:[\w-]+$/,Cv=3,Sv=2,kv=1,Pv=10,bv=-2,u1=e=>e==="*";function Tv(e,t){let n=e.split("/"),r=n.length;return n.some(u1)&&(r+=bv),t&&(r+=Sv),n.filter(i=>!u1(i)).reduce((i,o)=>i+(xv.test(o)?Cv:o===""?kv:Pv),r)}function Ev(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Rv(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=c1({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=c1({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:bn([o,f.pathname]),pathnameBase:Nv(bn([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=bn([o,f.pathnameBase]))}return s}function c1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Av(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let w=a[f]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[f];return v&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Av(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Mv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ad(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Lv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jr(e):e;return{pathname:n?n.startsWith("/")?n:zv(n,t):t,search:Iv(r),hash:$v(i)}}function zv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ov(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ld(e,t){let n=Ov(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ud(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jr(e):(i=Ji({},e),be(!i.pathname||!i.pathname.includes("?"),wl("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),wl("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),wl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=Lv(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const bn=e=>e.join("/").replace(/\/\/+/g,"/"),Nv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Iv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$v=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _v(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fv=["post","put","patch","delete"];[...Fv];/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}const cd=x.exports.createContext(null),Dv=x.exports.createContext(null),_n=x.exports.createContext(null),Ra=x.exports.createContext(null),rn=x.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),Em=x.exports.createContext(null);function Vv(e,t){let{relative:n}=t===void 0?{}:t;qr()||be(!1);let{basename:r,navigator:i}=x.exports.useContext(_n),{hash:o,pathname:s,search:a}=Am(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:bn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function qr(){return x.exports.useContext(Ra)!=null}function uo(){return qr()||be(!1),x.exports.useContext(Ra).location}function Rm(e){x.exports.useContext(_n).static||x.exports.useLayoutEffect(e)}function co(){let{isDataRoute:e}=x.exports.useContext(rn);return e?e6():jv()}function jv(){qr()||be(!1);let e=x.exports.useContext(cd),{basename:t,future:n,navigator:r}=x.exports.useContext(_n),{matches:i}=x.exports.useContext(rn),{pathname:o}=uo(),s=JSON.stringify(ld(i,n.v7_relativeSplatPath)),a=x.exports.useRef(!1);return Rm(()=>{a.current=!0}),x.exports.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=ud(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:bn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,o,e])}function Bv(){let{matches:e}=x.exports.useContext(rn),t=e[e.length-1];return t?t.params:{}}function Am(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.exports.useContext(_n),{matches:i}=x.exports.useContext(rn),{pathname:o}=uo(),s=JSON.stringify(ld(i,r.v7_relativeSplatPath));return x.exports.useMemo(()=>ud(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Uv(e,t){return Hv(e,t)}function Hv(e,t,n,r){qr()||be(!1);let{navigator:i}=x.exports.useContext(_n),{matches:o}=x.exports.useContext(rn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=uo(),d;if(t){var f;let S=typeof t=="string"?Jr(t):t;l==="/"||((f=S.pathname)==null?void 0:f.startsWith(l))||be(!1),d=S}else d=u;let h=d.pathname||"/",v=h;if(l!=="/"){let S=l.replace(/^\//,"").split("/"),g=h.replace(/^\//,"").split("/");v="/"+g.slice(S.length).join("/")}let y=vv(e,{pathname:v}),w=Zv(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:bn([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:bn([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&w?x.exports.createElement(Ra.Provider,{value:{location:qi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:mn.Pop}},w):w}function Wv(){let e=qv(),t=_v(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return x.exports.createElement(x.exports.Fragment,null,x.exports.createElement("h2",null,"Unexpected Application Error!"),x.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.exports.createElement("pre",{style:i},n):null,o)}const Gv=x.exports.createElement(Wv,null);class Kv extends x.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.exports.createElement(rn.Provider,{value:this.props.routeContext},x.exports.createElement(Em.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yv(e){let{routeContext:t,match:n,children:r}=e,i=x.exports.useContext(cd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.exports.createElement(rn.Provider,{value:t},r)}function Zv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||be(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:v}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let v,y=!1,w=null,S=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||Gv,l&&(u<0&&h===0?(t6("route-fallback",!1),y=!0,S=null):u===h&&(y=!0,S=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,h+1)),p=()=>{let m;return v?m=w:y?m=S:f.route.Component?m=x.exports.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,x.exports.createElement(Yv,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?x.exports.createElement(Kv,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Mm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Mm||{}),Ns=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ns||{});function Qv(e){let t=x.exports.useContext(cd);return t||be(!1),t}function Xv(e){let t=x.exports.useContext(Dv);return t||be(!1),t}function Jv(e){let t=x.exports.useContext(rn);return t||be(!1),t}function Lm(e){let t=Jv(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function qv(){var e;let t=x.exports.useContext(Em),n=Xv(Ns.UseRouteError),r=Lm(Ns.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function e6(){let{router:e}=Qv(Mm.UseNavigateStable),t=Lm(Ns.UseNavigateStable),n=x.exports.useRef(!1);return Rm(()=>{n.current=!0}),x.exports.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,qi({fromRouteId:t},o)))},[e,t])}const d1={};function t6(e,t,n){!t&&!d1[e]&&(d1[e]=!0)}const n6="startTransition";oc[n6];function r6(e){let{to:t,replace:n,state:r,relative:i}=e;qr()||be(!1);let{future:o,static:s}=x.exports.useContext(_n),{matches:a}=x.exports.useContext(rn),{pathname:l}=uo(),u=co(),d=ud(t,ld(a,o.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return x.exports.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function _e(e){be(!1)}function i6(e){let{basename:t="/",children:n=null,location:r,navigationType:i=mn.Pop,navigator:o,static:s=!1,future:a}=e;qr()&&be(!1);let l=t.replace(/^\/*/,"/"),u=x.exports.useMemo(()=>({basename:l,navigator:o,static:s,future:qi({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Jr(r));let{pathname:d="/",search:f="",hash:h="",state:v=null,key:y="default"}=r,w=x.exports.useMemo(()=>{let S=ad(d,l);return S==null?null:{location:{pathname:S,search:f,hash:h,state:v,key:y},navigationType:i}},[l,d,f,h,v,y,i]);return w==null?null:x.exports.createElement(_n.Provider,{value:u},x.exports.createElement(Ra.Provider,{children:n,value:w}))}function o6(e){let{children:t,location:n}=e;return Uv(_u(t),n)}new Promise(()=>{});function _u(e,t){t===void 0&&(t=[]);let n=[];return x.exports.Children.forEach(e,(r,i)=>{if(!x.exports.isValidElement(r))return;let o=[...t,i];if(r.type===x.exports.Fragment){n.push.apply(n,_u(r.props.children,o));return}r.type!==_e&&be(!1),!r.props.index||!r.props.children||be(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=_u(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fu.apply(this,arguments)}function s6(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function a6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function l6(e,t){return e.button===0&&(!t||t==="_self")&&!a6(e)}const u6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],c6="6";try{window.__reactRouterVersion=c6}catch{}const d6="startTransition",f1=oc[d6],f6="flushSync";K3[f6];const h6="useId";oc[h6];function p6(e){let{basename:t,children:n,future:r,window:i}=e,o=x.exports.useRef();o.current==null&&(o.current=pv({window:i,v5Compat:!0}));let s=o.current,[a,l]=x.exports.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=x.exports.useCallback(f=>{u&&f1?f1(()=>l(f)):l(f)},[l,u]);return x.exports.useLayoutEffect(()=>s.listen(d),[s,d]),x.exports.createElement(i6,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const m6=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",g6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pr=x.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,h=s6(t,u6),{basename:v}=x.exports.useContext(_n),y,w=!1;if(typeof u=="string"&&g6.test(u)&&(y=u,m6))try{let m=new URL(window.location.href),C=u.startsWith("//")?new URL(m.protocol+u):new URL(u),T=ad(C.pathname,v);C.origin===m.origin&&T!=null?u=T+C.search+C.hash:w=!0}catch{}let S=Vv(u,{relative:i}),g=v6(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:f});function p(m){r&&r(m),m.defaultPrevented||g(m)}return x.exports.createElement("a",Fu({},h,{href:y||S,onClick:w||o?r:p,ref:n,target:l}))});var h1;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(h1||(h1={}));var p1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(p1||(p1={}));function v6(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=co(),u=uo(),d=Am(e,{relative:s});return x.exports.useCallback(f=>{if(l6(f,n)){f.preventDefault();let h=r!==void 0?r:Os(u)===Os(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,d,r,i,n,e,o,s,a])}const y6=P.div`
  position: absolute;
  width: 32.5rem;
  height: 4rem;
  top: 1.7rem;
  font-size: 0.7rem;

  background: rgba(0, 0, 0, 0.75);
  border-radius: 37px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  .team {
    display: flex;
    gap: 0.5rem;

    span {
      margin-bottom: -1.4rem;
    }
    h1 {
      margin-top: -0.6rem;
    }

    &-timer {
      .time {
        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(0, 0, 0, 0.53);
        border-radius: 40px;
        width: 100%;
        height: 2rem;
        font-size: 0.6rem;
      }
    }
  }
`;function w6(){const{theme:e}=at();return k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"none",viewBox:"0 0 30 30",children:[c("path",{fill:e.colors.main[500],d:"M14.483 0h1.034c.286 0 .518.232.518.517v4.655a.517.517 0 01-.518.518h-1.034a.517.517 0 01-.518-.518V.518c0-.285.232-.517.518-.517zM14.483 24.31h1.034c.286 0 .518.232.518.518v4.655a.517.517 0 01-.518.517h-1.034a.517.517 0 01-.518-.517v-4.655c0-.286.232-.518.518-.518zM24.828 13.966h4.655c.285 0 .517.231.517.517v1.034a.517.517 0 01-.517.518h-4.655a.517.517 0 01-.518-.518v-1.034c0-.286.232-.518.518-.518zM.517 13.966h4.655c.286 0 .518.231.518.517v1.034a.517.517 0 01-.518.518H.518A.517.517 0 010 15.517v-1.034c0-.286.232-.518.517-.518zM28.283 12.931A13.401 13.401 0 0017.069 1.76v2.084a11.36 11.36 0 019.119 9.088h2.095zM1.764 12.931h2.09a11.366 11.366 0 019.077-9.078v-2.09A13.397 13.397 0 001.764 12.932zM28.283 17.069h-2.095a11.36 11.36 0 01-9.12 9.088v2.084A13.401 13.401 0 0028.284 17.07zM12.931 28.236v-2.09a11.366 11.366 0 01-9.078-9.077h-2.09a13.397 13.397 0 0011.168 11.167zM17.855 11.922l-1.117.745a1.534 1.534 0 01-.859.264h-1.758a1.555 1.555 0 01-.87-.269l-1.106-.74c-.896.097-1.78.275-2.643.533l-.187.062a.333.333 0 01-.067.02c.155 1.6.698 2.846 1.614 3.498a2.01 2.01 0 002.586 0c.693-.694 1.086-1.04 1.552-1.04.466 0 .858.347 1.552 1.04a2.01 2.01 0 002.586 0c.92-.652 1.459-1.889 1.614-3.497-.016-.005-.037-.01-.052-.016a1.743 1.743 0 00-.15-.051 14.324 14.324 0 00-2.695-.549z"}),c("path",{fill:e.colors.main[500],d:"M19.138 19.138a3.615 3.615 0 001.034-2.07l.037-.584a4.18 4.18 0 01-.471.393 3.44 3.44 0 01-1.981.657 2.685 2.685 0 01-1.935-.77A5.985 5.985 0 0015 16.04a5.99 5.99 0 00-.822.724 2.685 2.685 0 01-1.935.77 3.44 3.44 0 01-1.98-.656 4.177 4.177 0 01-.472-.393l.037.584c.102.94.46 1.835 1.034 2.586l1.552 1.552c.42.384.984.572 1.552.517h2.069a1.374 1.374 0 001.034-.517l2.069-2.07zm-5.322.884c-.204.2-.531.2-.735 0l-1.034-1.034a.52.52 0 01.734-.735l1.035 1.035a.522.522 0 010 .734zm2.219.15a.531.531 0 01-.368-.15.522.522 0 010-.734l1.035-1.035a.52.52 0 11.734.735l-1.034 1.034a.53.53 0 01-.367.15zM21.047 11.545a.512.512 0 00.553-.823l-1.82-1.81a.548.548 0 00-.296-.145l-3.413-.486a.349.349 0 00-.073-.005h-1.996c-.025-.001-.049 0-.073.005l-3.414.486a.522.522 0 00-.294.15l-1.816 1.805a.517.517 0 00.559.823c.072-.026.145-.047.222-.072a15.08 15.08 0 013.047-.595.53.53 0 01.33.082l1.273.849a.512.512 0 00.285.088h1.758c.102 0 .2-.031.285-.088l1.272-.849a.53.53 0 01.331-.082 14.767 14.767 0 013.28.667z"})]})}function x6(){const{theme:e}=at();return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",fill:"none",viewBox:"0 0 23 23",children:c("path",{fill:e.colors.main[500],d:"M17.122 22.196c-.297 0-.59-.072-.851-.21l-4.87-2.56a.26.26 0 00-.245 0l-4.869 2.56a1.827 1.827 0 01-2.65-1.927l.929-5.42a.263.263 0 00-.078-.235L.552 10.563a1.826 1.826 0 011.016-3.117l5.44-.79a.263.263 0 00.198-.144l2.432-4.934a1.826 1.826 0 013.276 0l2.433 4.932a.266.266 0 00.199.145l5.444.79a1.827 1.827 0 011.016 3.117l-3.94 3.839a.265.265 0 00-.078.234l.93 5.421a1.83 1.83 0 01-1.797 2.137v.003zm-5.844-4.364c.297 0 .589.072.85.211l4.87 2.559a.251.251 0 00.277-.02.255.255 0 00.106-.259l-.93-5.421a1.83 1.83 0 01.524-1.617l3.94-3.84a.264.264 0 00-.147-.45l-5.443-.791a1.824 1.824 0 01-1.375-1l-2.437-4.932a.265.265 0 00-.474 0L8.607 7.203a1.824 1.824 0 01-1.375 1l-5.443.792a.263.263 0 00-.146.45l3.939 3.84a1.83 1.83 0 01.525 1.617l-.93 5.421a.264.264 0 00.384.279l4.867-2.56c.263-.138.554-.21.85-.21z"})})}function C6(){var h,v,y,w;const[e,t]=x.exports.useState(10),[n,r]=x.exports.useState(),[i,o]=x.exports.useState("-86904375"),[s,a]=x.exports.useState({headshots:0,points:0,time:"1:00"}),[l,u]=x.exports.useState(!1),[d,f]=x.exports.useState({});return Ce("aimLabsKillFeed",S=>{r(S.killfeed),o(S.image)}),Ce("aimLabsScore",S=>{u(S.initRound),f(S.buttons),a(S.score)}),x.exports.useEffect(()=>{e<=0&&u(!1)},[e]),k(md,{children:[n&&c(za,{killfeed:n,image:i}),k(y6,{children:[k("div",{className:"team",children:[c(w6,{}),k("div",{children:[c("span",{children:"HEADSHOTS"}),c("h1",{children:s.headshots})]})]}),k("div",{className:"team-timer",children:[c("span",{children:"TEMPO RESTANTE"}),c("div",{className:"time",children:c("h1",{children:s.time})})]}),k("div",{className:"team",children:[c(x6,{}),k("div",{children:[c("span",{children:"PONTUA\xC7\xC3O"}),c("h1",{children:s.points})]})]})]}),l?c(r5,{time:e,title:"AIMLABS",setTime:t}):null,d!=null&&d.enter?c(eo,{shortcut:(h=d==null?void 0:d.enter)==null?void 0:h.control,text:(v=d==null?void 0:d.enter)==null?void 0:v.text,altura:75}):null,d!=null&&d.exit?c(eo,{shortcut:(y=d==null?void 0:d.exit)==null?void 0:y.control,text:(w=d==null?void 0:d.exit)==null?void 0:w.text,altura:81}):null]})}const zm=x.exports.createContext(null);function S6({children:e}){const t=co(),[n,r]=x.exports.useState({discord:"discord.gg/santagrupo",logo:"https://media.discordapp.net/attachments/978975375914831912/1059710189416230982/maresia.png"}),[i,o]=x.exports.useState(0);return Ce("router",s=>{t(s.path.replaceAll("/","/"))}),Ce("back",()=>{t(-1)}),x.exports.useEffect(()=>{Le("GetServerInfos").then(s=>{r(s)})},[]),Ce("UpdateHealth",s=>{o(s-100)}),c(zm.Provider,{value:{serverInfos:n,health:i},children:e})}const Om=()=>x.exports.useContext(zm),k6=P.div`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: 1vw;
  padding: 0.2vw 1vw;
  border-radius: 1vw;
  display: flex;
  gap: 1.4vw;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
`;var Nm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m1=re.createContext&&re.createContext(Nm),Tn=globalThis&&globalThis.__assign||function(){return Tn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Tn.apply(this,arguments)},P6=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Im(e){return e&&e.map(function(t,n){return re.createElement(t.tag,Tn({key:n},t.attr),Im(t.child))})}function je(e){return function(t){return re.createElement(b6,Tn({attr:Tn({},e.attr)},t),Im(e.child))}}function b6(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=P6(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),re.createElement("svg",Tn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Tn(Tn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&re.createElement("title",null,o),e.children)};return m1!==void 0?re.createElement(m1.Consumer,null,function(n){return t(n)}):t(Nm)}function T6(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M262.81 16.098c-10.335-.044-20.657.6-30.867 1.894l-2.68.246c1.754 19.05-1.177 32.7-7.144 39.69-5.967 6.99-15.964 10.454-36.102 6.328l-18.686-3.83 8.426 17.11c5.744 11.666 2.894 24.13-5.42 31.386s-22.805 10.594-44.797-1.443l-17.257-9.447 3.582 19.344c3.326 17.958-1.815 26.41-10.158 31.99-8.343 5.582-21.628 7.223-33.15 4.725l-.14.644-2.292-1.51c-8.416 30.07-10.557 65.306-4.252 106.08l15.184 94.135 70.295-13.24 3.46 18.366-15.384 2.897L179.96 488.79h25.39l-7.81-61.89 18.534-2.337 8.104 64.226h29.613v-65.325h18.69v65.324h29.61l8.105-64.228 18.534 2.338-7.81 61.89h25.486l44.352-126.808-18.133-3.416 3.46-18.365 70.185 13.22 18.236-94.22c12.634-81.883-9.59-141.71-48.71-181.966-39.135-40.268-95.95-60.884-152.966-61.136h-.02zm-14.51 20.14c45.57 29.486 39.706 97.78-19.587 70.834 34.772 67.943-24.572 97.148-69.838 55.2 3.894 37.6-40.093 48.023-69.316 11.056 7.962-1.166 15.703-3.855 22.538-8.428 10.563-7.066 17.958-19.23 19.1-34.785 20.852 6.868 39.385 3.4 51.43-7.113 10.958-9.566 16.144-24.103 14.368-38.635 16.913.726 30.568-4.03 39.34-14.306 7.624-8.933 11.127-20.532 11.965-33.822zm-61.9 167.98c32.884 0 59.54 26.656 59.54 59.54 0 32.885-26.656 59.543-59.54 59.543-32.883 0-59.543-26.657-59.543-59.542 0-32.886 26.66-59.54 59.543-59.54zm157.543 0c32.884 0 59.54 26.656 59.54 59.54 0 32.885-26.656 59.543-59.54 59.543-32.883 0-59.543-26.657-59.543-59.542 0-32.886 26.66-59.54 59.543-59.54zm-80.675 79.74l39.937 101.6-17.03 7.05-22.905-35.477-22.905 35.477-17.62-7.048 40.523-101.603z"}}]})(e)}function E6(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M172.7 19.27l-25.4 25.46L256 153.5 364.7 44.73l-25.4-25.46L256 102.5l-83.3-83.23zM44.73 147.3l-25.46 25.4L102.5 256l-83.23 83.3 25.46 25.4L153.5 256 44.73 147.3zm422.47 0L358.6 256l108.6 108.7 25.4-25.4-83.2-83.3 83.2-83.3-25.4-25.4zM256 358.5L147.3 467.3l25.4 25.4 83.3-83.2 83.3 83.2 25.4-25.4L256 358.5z"}}]})(e)}function R6({kills:e}){return k(k6,{children:[c(T6,{}),c("span",{children:e})]})}function A6(){const{t:e}=$n(),{serverInfos:t,health:n}=Om(),[r,i]=re.useState(),[o,s]=re.useState("https://media.discordapp.net/attachments/1008423378065043566/1037847123804295168/-86904375.png"),[a,l]=re.useState("E"),[u,d]=re.useState("F"),[f,h]=re.useState(0);return Ce("killFeed",v=>{i(v.killFeed),s(v.image)}),Ce("killCount",v=>{h(v)}),Ce("setText",v=>{d(v.enter),l(v.exit)}),k(md,{children:[c(za,{killfeed:r,image:o}),c(R6,{kills:f}),a!=""&&c(eo,{shortcut:a,text:e("exit_action"),altura:75}),u!=""&&c(eo,{shortcut:u,text:e("enter_action"),altura:81}),c(i5,{discord:t.discord,health:n})]})}function M6({color:e}){return k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"72",height:"70",fill:"none",viewBox:"0 0 72 70",style:{width:"5vw",height:"4vw"},children:[c("g",{filter:"url(#filter0_d_2_200)",children:c("path",{fill:e,d:"M30.271 36.315l4.09 4.091-1.634 1.636 1.637 1.638-1.637 1.636-2.863-2.864-3.273 3.273-1.636-1.636 3.273-3.273-2.864-2.863L27 36.316l1.636 1.635 1.636-1.636zm-4.684-12.04l4.102.004 13.674 13.673 1.636-1.636 1.637 1.637-2.864 2.863 3.273 3.273-1.636 1.636-3.273-3.273-2.863 2.864-1.637-1.636 1.636-1.637L25.59 28.36l-.003-4.086zm16.727 0l4.1.004.002 4.076-4.69 4.688-4.091-4.09 4.68-4.678z"})}),c("defs",{children:k("filter",{id:"filter0_d_2_200",width:"70.09",height:"69.45",x:"0.955",y:"0.275",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[c("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),c("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),c("feOffset",{}),c("feGaussianBlur",{stdDeviation:"12"}),c("feComposite",{in2:"hardAlpha",operator:"out"}),c("feColorMatrix",{values:"0 0 0 0 0.94902 0 0 0 0 0.0392157 0 0 0 0 0.270588 0 0 0 1 0"}),c("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_2_200"}),c("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow_2_200",result:"shape"})]})})]})}const L6=P.div`
  display: flex;
  padding: 2.6rem 1rem 1rem 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;

  width: 100%;
  height: 100%;

  border: 0.1rem solid rgba(${e=>e.rgba}, 0.5);
  background:  linear-gradient(360deg, #000 0%, rgba(0, 0, 0, 0) 100%),
  linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${e=>e.backgroundImage}) no-repeat center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 1.1rem;
  position: relative;

  :hover {
    background:  linear-gradient(360deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(0deg, rgba(${e=>e.rgba}, 0.8) -50%, rgba(0, 0, 0, 0.8) 100%), url(${e=>e.backgroundImage}) no-repeat center;
    
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .lobbyNumber {
    position: absolute;
    top: 4.5%;
    left: 5%;
  }
`,z6=P.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  img {
    margin-bottom: -1.5rem;
  }
  h1 {
    margin-top: -1.5rem;
    font-size: .7vw;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
  }
`,O6=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    font-size: .8vw;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
  }
`,N6=P.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3vw;
  height: 1.2vw;
  border-radius: 0.25rem;
  background: rgba(${e=>e.rgba}, 0.5);
  border: 0;
  font-weight: 600;
  font-size: .6vw;
  color: #fff;
  text-transform: uppercase;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;function I6({arenas:e,onClick:t,category:n,color:r,index:i,rgba:o,backgroundImage:s}){return k(L6,{backgroundImage:s||"",color:r||"",rgba:o||"",children:[c("h4",{className:"lobbyNumber",children:i}),k(z6,{children:[c(M6,{color:r}),k("h1",{children:["Arena ",n]})]}),k(O6,{children:[c("span",{style:{color:e.split("/")[0]!=="0"?"#f20a45":""},children:e}),c(N6,{rgba:o||"",onClick:t,children:"Entrar"})]})]})}const $6=P.div`
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.colors["main-opacity"][300]};
  background: linear-gradient(360deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%),
    url(${e=>e.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: flex-end;
  padding: 20px;
`,_6=P.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  color: #fff;
  font-family: Poppins;
  font-size: .7vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`,F6=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-right: 20px;
`,D6=P.button`
  border: none;
  outline: none;
  color: #fff;
  width: 100%;
  height: 3.6vw;
  border-radius: 4px;
  font-size: 1.4vw;
  text-transform: uppercase;
  background: ${e=>e.theme.colors["main-opacity"][500]};
  transition: 0.3s;

  :hover {
    background: ${e=>e.theme.colors["main-opacity"][700]};
  }
`;function g1({onClick:e,name:t,maxPlayers:n,players:r,backgroundImage:i}){return c($6,{backgroundImage:i,children:k(_6,{children:[k(F6,{children:[c("h1",{children:t}),k("h2",{children:[r,"/",n]})]}),c(D6,{onClick:e,children:"Entrar"})]})})}const V6=P.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  background: ${({theme:e})=>e.colors["main-opacity"][100]};
  padding: 1.25rem 1.5vw;
`,j6=P.div`
  display: flex;
`,B6=P.div`
  padding: 0.3vw 3vw;
  border: 1px solid ${({theme:e})=>e.colors.main[500]};
  background: ${({theme:e})=>e.colors["main-opacity"][200]};
  font-size: .6vw;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;

  &:not(:last-child) {
    border-radius: 0.25rem 0rem 0rem 0.25rem;
  }
  &:last-child {
    border-radius: 0rem 0.25rem 0.25rem 0rem;
  }

  :hover {
    cursor: pointer;
    border: 1px solid ${({theme:e})=>e.colors.main[500]};
    background: ${({theme:e})=>e.colors["main-opacity"][400]};
  }
`;var U6="./assets/1.a052fa04.png",H6="./assets/2.fecffb9b.png",W6="./assets/3.180641d9.png";const G6=P.div`
  padding: 2rem;
  gap: 1.375rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  height: 37.5vw;

  background: linear-gradient(332deg, ${e=>e.theme.colors["main-opacity"][900]} -27%, rgba(0, 0, 0, 0.63) 60%), rgba(0, 0, 0, 0.63);
  border: .1vw solid ${e=>e.theme.colors.main[500]};
`,K6=P.div`
  display: grid;
  ${e=>e.teamsPage?"grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(1, 1fr);":"grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);"}
  grid-gap: .8rem;
  width: 100%;
  height: 100%;
`;function v1(){var w,S;const{theme:e}=at(),t=[{color:e.colors.main[500],backgroundImage:U6,rgba:"242, 10, 69",name:"1x1"},{color:"#FFB81D",backgroundImage:H6,rgba:"255, 184, 29",name:"3x3"},{color:"#00FFFF",backgroundImage:W6,rgba:"0, 255, 255",name:"6x6"}],[n,r]=x.exports.useState(!1),{t:i}=$n(),[o,s]=x.exports.useState(void 0),[a,l]=x.exports.useState("1x1"),[u,d]=x.exports.useState(null);x.exports.useEffect(()=>{Le("GetArenaInfo").then(g=>{s({"1x1":g.filter(p=>p.category==="1x1"),"3x3":g.filter(p=>p.category==="3x3"),"6x6":g.filter(p=>p.category==="6x6")})})},[]);const f=(g,p,m)=>{Le("PlayerClickAction",{action:g,id:p,team:m})},[h,v]=x.exports.useState([{maxPlayers:12,players:6},{maxPlayers:12,players:6}]),y=(g,p)=>{Le("PlayerClickLobby",{action:g,id:p}).then(m=>{v(m),r(!n)})};return x.exports.useEffect(()=>{const g=p=>{p.key==="Escape"&&(Le("hideFrame"),r(!1),l("1x1"),u&&d(null))};return window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}},[]),c(md,{children:k(G6,{children:[c(V6,{children:c(j6,{children:t.map(g=>c(B6,{onClick:()=>{l(g.name),u&&d(null),r(!1)},color:g.color,children:g.name},g.name))})}),c(K6,{teamsPage:n,children:n?k(Jn,{children:[c(g1,{name:i("team_01"),maxPlayers:h[0].maxPlayers,players:h[0].players,backgroundImage:(w=t.find(g=>g.name===a))==null?void 0:w.backgroundImage,onClick:()=>{Le("hideFrame"),f(a,u,1)}}),c(g1,{name:i("team_02"),maxPlayers:h[1].maxPlayers,players:h[1].players,backgroundImage:(S=t.find(g=>g.name===a))==null?void 0:S.backgroundImage,onClick:()=>{Le("hideFrame"),f(a,u,2)}})]}):c(Jn,{children:o!==void 0&&a!==null?c(Jn,{children:o[a].map((g,p)=>{var m,C,T;return c(I6,{onClick:()=>{y(a,p+1),d(p+1)},index:p+1,color:(m=t.find(R=>R.name===a))==null?void 0:m.color,rgba:(C=t.find(R=>R.name===a))==null?void 0:C.rgba,backgroundImage:(T=t.find(R=>R.name===a))==null?void 0:T.backgroundImage,category:a,arenas:`${g.players}/${g.maxPlayers}`},p)})}):null})})]})})}const Y6=P.div`
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  position: relative;
`,Z6=P.div`
  height: 34vh;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);

  mix-blend-mode: normal;

  .Text-Left {
    text-align: left;
    font-size: 1.45rem;
  }

  strong {
    font-weight: 700;
  }
`,Q6=P.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
`;function X6({time:e,text:t}){return c(Z6,{children:k(Q6,{children:[c("span",{className:"Text-Left",children:"DOMINA\xC7\xC3O"}),k("span",{children:[t," ",c("strong",{children:e})]})]})})}const J6=P.div`
  width: 16.5rem;
  min-height: 19rem;

  font-size: .8rem;
  padding: 2rem;

  border: 0.1vh solid ${({theme:e})=>e.colors.main[500]};

  background: rgba(0, 0, 0, 0.22);
  border-radius: 4px;

  .Box-Title {
    font-size: 1.8rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
  }

  .Box-Content {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    line-height: 35px;
    font-size: 1rem;

    &-Text {
      margin-bottom: 0;
    }
    &-Value {
      margin-top: -.7rem;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 30px;
    }
  }
`;function q6({group:e,points:t,players:n}){return k(J6,{children:[c("div",{className:"Box-Title",children:"DOMINA\xC7\xC3O"}),k("div",{className:"Box-Content",children:[c("span",{className:"Box-Content-Text",children:"MINHA ORGANIZA\xC7\xC3O"}),c("span",{className:"Box-Content-Value",children:e})]}),k("div",{className:"Box-Content",children:[c("span",{className:"Box-Content-Text",children:"PONTUA\xC7\xC3O"}),c("span",{className:"Box-Content-Value",children:t})]}),k("div",{className:"Box-Content",children:[c("span",{className:"Box-Content-Text",children:"PLAYERS VIVOS"}),c("span",{className:"Box-Content-Value",children:n})]})]})}const e8=P.div`
  position: absolute;
  top: 50%;
  left: 1.771vw;
  transform: translateY(-50%);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;function t8({teamScore:e,isHidden:t}){return c(e8,{children:!t&&c(q6,{...e})})}const n8=P.div`
  position: absolute;
  top: 2vh;
  left: 50%;
  transform: translateX(-50%);

  img {
    height: 10vh;
  }
`;function r8({link:e}){return c(n8,{children:c("img",{src:e})})}function i8(){const{serverInfos:e,health:t}=Om(),{t:n}=$n(),[r,i]=x.exports.useState(0),[o,s]=x.exports.useState(),[a,l]=x.exports.useState("https://media.discordapp.net/attachments/1008423378065043566/1037847123804295168/-86904375.png"),[u,d]=x.exports.useState({group:"YAKUZA",players:10,points:1e3}),[f,h]=x.exports.useState([{name:"VERMELHOS",score:1e3},{name:"VERDES",score:999},{name:"AMARELOS",score:988},{name:"ROXOS",score:115},{name:"YAKUZA",score:19}]),[v,y]=x.exports.useState(!1);return Ce("HideUI",w=>{y(w)}),Ce("KillFeed",w=>{s(w.killFeed),l(w.image)}),Ce("UpdateTeamsScore",w=>{h(w)}),Ce("UpdateSelfTeamScore",w=>{d(w)}),Ce("UpdateCountdown",w=>{i(w)}),k(Y6,{children:[c(za,{killfeed:o,image:a}),r>0?c(X6,{time:`${r}S`,text:n("starting_at")}):k(Jn,{children:[c(r8,{link:e.logo}),u&&c(t8,{teamScore:u,isHidden:v}),!v&&c(o5,{teams:f}),c(i5,{discord:e.discord,health:t})]})]})}const o8=P.div`
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    position: relative;

    .Status {
        position: absolute;
        right: 0;
        top: 72%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .Mode {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        left: 1rem;
        top: 66%;
        font-size: .8rem;

        &-item {
            display: flex;
            gap: 1rem;

            span {
                font-weight: 275;
            }
            h1 {
                margin-top: -.5rem;
            }
        }
    }
`,s8=P.div`
    position: absolute;
    top: 0;

    .scoreboard {
        display: flex;
        gap: 1.2rem;

        &-user {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            width: 6rem;

            &-avatar {
                width: 6.2rem;
                border-radius: 0 0 16px 16px;
            }

            &-gun {

                img {
                    max-width: 7rem;
                }
            }
        }
    }
`,a8=P.div`

    .challenger {
        position: absolute;
        top: 50%;
        right: 0;

        &-guns {
            display: flex;
            flex-direction: column;
            align-items: end;
            gap: 2rem;
            &-item {
                img {
                    max-width: 10.5rem;
                }
            }
            &-active {
                display: flex;
                flex-direction: column;
                align-items: end;
                gap: 1.6rem;

                span {
                    margin-right: 1.2rem;
                    margin-bottom: -0.8rem;
                }

                img {
                    max-width: 14.5rem;
                }
            }

            &-points {
                display: flex;
                gap: 1rem;
                font-size: .6rem;

                &-item {
                    display: flex;

                    gap: .4rem;
                }
            }
        }
    }
`;function y1(){return k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"211",height:"4",fill:"none",viewBox:"0 0 211 4",children:[c("path",{stroke:"url(#paint0_linear_8_453)",strokeWidth:"3",d:"M214.5 2.5L0 2.498"}),c("defs",{children:k("linearGradient",{id:"paint0_linear_8_453",x1:"160",x2:"0",y1:"1.015",y2:"-2.985",gradientUnits:"userSpaceOnUse",children:[c("stop",{stopColor:"#fff"}),c("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0"})]})})]})}function l8(){const{t:e}=$n(),[t,n]=re.useState(10),[r,i]=re.useState([]),[o,s]=re.useState({activeGun:-86904375,guns:[{gunHash:-86904375},{gunHash:-86904375}]}),[a,l]=re.useState(!0),[u,d]=re.useState(),[f,h]=re.useState("https://media.discordapp.net/attachments/1008423378065043566/1037847123804295168/-86904375.png");Ce("gunGame",y=>{i(y.users),l(y.initRound)}),Ce("killFeedGunGame",y=>{d(y.killFeed),h(y.image)}),Ce("gunGameChallenges",y=>{s(y.challenges)}),re.useEffect(()=>{t<=0&&l(!1)},[t]);const v=o.guns.slice(0,2).map((y,w)=>c("div",{className:"challenger-guns-item",children:c("img",{src:`nui://arena/web-side/assets/weapons/${y.gunHash}.png`,alt:""})}));return k(o8,{children:[c(za,{killfeed:u,image:f}),c(hv,{}),o.guns.length>0?c(a8,{children:c("div",{className:"challenger",children:k("div",{className:"challenger-guns",children:[v,k("div",{className:"challenger-guns-active",children:[k("span",{children:[e("next_weapon")," "]}),c(y1,{}),c("div",{className:"challenger-guns-active-img",children:c("img",{src:`nui://arena/web-side/assets/weapons/${o.activeGun}.png`,alt:""})}),c(y1,{})]})]})})}):null,r.length>0?c(s8,{children:c("div",{className:"scoreboard",children:r.map((y,w)=>k("div",{className:"scoreboard-user",children:[c("img",{className:"scoreboard-user-avatar",src:`https://ui-avatars.com/api/?name=${y.name}&background=00000&color=fff`,alt:""}),c("div",{className:"scoreboard-user-gun",children:c("img",{src:`nui://arena/web/build/assets/weapons/${y.gun}.png`,alt:""})})]},w))})}):null,a?c(r5,{time:t,title:"GUNGAME",setTime:n}):null,c(eo,{shortcut:"G",text:e("exit_action"),altura:81})]})}const Fn=P.div`
  border: 0.01vh solid ${({theme:e})=>e.colors.main[500]};
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1.5vh;
  padding: 1vh 1vw;
  overflow: hidden;
`,fo=P.button`
  display: flex;
  align-items: center;
  border-radius: 0.9vh;
  background-color: rgba(255, 255, 255, 0.04);

  padding: 0.9vh;
  text-transform: uppercase;
  font-weight: 600;

  outline: none;
  border: none;

  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`,dd=P.div`
  height: 100%;
  min-height: 4.25vh;
  padding: 0 1.25vw;
  border-left: 0.1vh solid ${({theme:e})=>e.colors.main[500]};
  text-transform: uppercase;
  border-radius: 1vh;
  background-color: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.9vh;
  font-family: 'Rajdhani';
  font-weight: 600;

  svg {
    fill: ${({theme:e})=>e.colors.main[500]};
  }
`,u8=P(Fn)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: 1 / 2 / 2 / 3;
  padding: 1.5vh 1vw;
  overflow: visible;
`,c8=P.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;function ei({children:e,text:t}){return k(u8,{children:[c(dd,{children:t}),c(c8,{children:e})]})}function d8(){return c("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M19.5625 3.03124V7.34374C19.5625 7.53436 19.4868 7.71718 19.352 7.85197C19.2172 7.98676 19.0344 8.06249 18.8437 8.06249H14.5312C14.389 8.0626 14.2499 8.0205 14.1316 7.94153C14.0133 7.86256 13.9211 7.75027 13.8667 7.61887C13.8122 7.48746 13.798 7.34286 13.8258 7.20336C13.8535 7.06386 13.9221 6.93574 14.0227 6.83522L15.5501 5.30788L14.6022 4.44088L14.5798 4.41932C13.5808 3.4207 12.3096 2.73857 10.9252 2.45816C9.54081 2.17775 8.10445 2.31148 6.79559 2.84265C5.48674 3.37382 4.36341 4.27888 3.56593 5.44476C2.76846 6.61065 2.3322 7.98567 2.31165 9.39805C2.2911 10.8104 2.68717 12.1976 3.45039 13.3862C4.2136 14.5747 5.31013 15.5121 6.60298 16.0811C7.89583 16.6501 9.32769 16.8256 10.7197 16.5856C12.1117 16.3456 13.4021 15.7007 14.4297 14.7316C14.4983 14.6667 14.579 14.616 14.6673 14.5823C14.7555 14.5486 14.8495 14.5326 14.9439 14.5352C15.0383 14.5378 15.1312 14.559 15.2174 14.5976C15.3036 14.6361 15.3814 14.6913 15.4463 14.7599C15.5112 14.8285 15.5619 14.9092 15.5956 14.9974C15.6293 15.0856 15.6453 15.1796 15.6427 15.274C15.6401 15.3684 15.6189 15.4614 15.5803 15.5476C15.5418 15.6338 15.4866 15.7116 15.418 15.7765C13.8198 17.2898 11.701 18.1307 9.49999 18.125H9.38139C7.96881 18.1056 6.58261 17.7396 5.34462 17.0591C4.10663 16.3785 3.05476 15.4043 2.28145 14.222C1.50815 13.0398 1.03708 11.6857 0.909667 10.2787C0.78225 8.87176 1.00238 7.45504 1.55071 6.15309C2.09904 4.85113 2.95878 3.7038 4.05437 2.81192C5.14996 1.92005 6.44785 1.31094 7.83397 1.03814C9.22009 0.765332 10.652 0.837183 12.0039 1.24738C13.3557 1.65757 14.5861 2.39354 15.5869 3.39061L16.5689 4.28905L18.3352 2.51913C18.436 2.41827 18.5644 2.34965 18.7042 2.32198C18.8441 2.29432 18.989 2.30885 19.1205 2.36375C19.2521 2.41864 19.3643 2.51141 19.443 2.63027C19.5217 2.74912 19.5633 2.88869 19.5625 3.03124Z",fill:"white","fill-opacity":"0.5"})})}const f8=P(fo)`
  justify-content: center;
  height: 100%;
  width: 3.8vh;

  svg {
    height: 1.8vh;
    width: 1.8vh;
  }
`;function Aa({...e}){return c(f8,{...e,children:c(d8,{})})}function h8(){return c("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M8.87221 8.88191L12.125 12.125M10.25 5.5625C10.25 8.15133 8.15133 10.25 5.5625 10.25C2.97367 10.25 0.875 8.15133 0.875 5.5625C0.875 2.97367 2.97367 0.875 5.5625 0.875C8.15133 0.875 10.25 2.97367 10.25 5.5625Z",stroke:"white","stroke-width":"1.1","stroke-linecap":"round","stroke-linejoin":"round"})})}const p8=P.div`
  height: 100%;
  min-width: 20vw;
  display: flex;
  align-items: center;
  border-radius: 0.9vh;
  background-color: rgba(255, 255, 255, 0.04);

  padding: 0.5vw 1.1vh;
  text-transform: uppercase;
  font-weight: 600;

  input {
    width: 100%;
    margin-left: 0.75vw;
    background: none;
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.775vw;
  }

  svg {
    height: 1.25vh;
    width: 1.25vw;
  }
`;function Ma({icon:e,handleChange:t,...n}){return k(p8,{children:[e||c(h8,{}),c("input",{onChange:t,...n})]})}const $m=P.div`
  position: absolute;
  width: 100%;
  background: rgba(43, 37, 29, 0.98);
  border-radius: 1vh;
  z-index: 9;
`,_m=P.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100vw;
  height: 1vw;
  width: 1vw;
  margin-right: 0.4vw;

  svg {
    width: 1vw;
    height: 0.8vh;
  }
`;function m8(){const{theme:e}=at();return c(_m,{style:{background:e.colors.main[500]},children:c("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M1 3.80001L3.32929 6.1293C3.36834 6.16835 3.43166 6.16835 3.47071 6.1293L9 0.600006",stroke:"white","stroke-linecap":"round"})})})}function g8(){return c(_m,{style:{border:"0.15vw solid rgba(255, 255, 255, 0.3)"}})}function v8({isSelected:e,text:t,...n}){return k(fd,{...n,children:[e?c(m8,{}):c(g8,{})," ",t]})}function y8({isSelected:e,text:t,...n}){return c(fd,{className:e?"selected":"",...n,children:t})}function w8({type:e,...t}){switch(e){case"multi":return c(v8,{...t});case"single":return c(y8,{...t})}}function x8({text:e,children:t,preMounter:n,...r}){return k(Vm,{children:[k(Dm,{style:{borderBottomRightRadius:r.isOpen?0:"1vh"},...r,children:[n||k("div",{className:"mounter",children:[k("b",{children:[c(Z8,{}),c("span",{children:"Filtro:"})]}),c("span",{className:"text",children:e})]}),c("div",{className:"expandable",children:r.isOpen?c("div",{style:{transform:"rotate(180deg)"},children:c(w1,{})}):c(w1,{})})]}),t]})}function Fm({options:e,type:t,text:n,isOpen:r,preMounter:i,onClickOption:o,...s}){return c(x8,{text:n,isOpen:r,preMounter:i,...s,children:c($m,{children:r&&c("div",{style:{marginTop:"4.1vh",padding:"1vh 0.8vw 2vh 0.8vw"},children:e.map((a,l)=>c(w8,{type:t,onClick:()=>o&&o(l),...a},l))})})})}const Dm=P(fo)`
  display: flex;
  align-items: center;
  justify-content: space-between;	
  z-index: 10;
  text-transform: none;
  color: white;
  padding: 0.525vw 1.1vh;
  font-size: 0.7vw;
  border-left: 0vh solid ${({theme:e})=>e.colors.main[500]};
  transition: all 0.2s;

  svg {
    height: 1.3vh;
    width: 1.3vh;
  }
  
  .mounter {
    display: flex;
    .text {
      margin-left: 0.25vw;
      margin-right: 0.5vw;
      font-weight: 400;
    }
  }

  b {
    font-weight: bold;
    display: flex;
    align-items: center;

    span {
      margin-left: 0.35vw;
    }
  }

  .expandable {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;

    svg {
      width: 0.5vw;
      height: 0.5vw;
    }
  }
`,Vm=P.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,fd=P(fo)`
  width: 100%;
  margin-top: 0.5vh;
  padding: 0.5vh 0.6vw;
  color: white;
  font-weight: normal;
  font-size: 0.75vw;
  text-transform: none;
  border-radius: 0.5vh;
  transition: all 0.3s;
  border: 0.1vh solid transparent;

  &.selected {
    background: rgba(233, 174, 9, 0.2);
    border: 0.1vh solid ${({theme:e})=>e.colors.main[500]};
  }
`,C8=P.div`
  grid-area: 2 / 1 / 3 / 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: min-content;

  padding: 0.4vw;
  border-radius: 1.5vh;

  border-right: 0.05vh solid ${({theme:e})=>e.colors.main[500]};

  background-color: rgba(0, 0, 0, 0.5);

  .explore {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1vh;
    height: 2.5vw;
    width: 100%;

    background-color: rgba(255, 255, 255, 0.02);
    color: #fff;

    &:not(:first-child) {
      margin-top: 0.5vh;
    }

    &.selected {
      background-color: ${({theme:e})=>e.colors.main[500]};
    }

    &:hover:not(.selected) {
      background-color: rgba(255, 255, 255, 0.04);
    }

    svg {
      height: 1.5vh;
      width: 1.5vw;
    }
  }
`;function S8(){return c("svg",{width:"22",height:"17",viewBox:"0 0 22 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M21.9508 12.919C21.9512 12.9145 21.9512 12.91 21.9508 12.9055L20.448 4.77545C20.448 4.76966 20.448 4.76386 20.448 4.75807C20.216 3.42323 19.5473 2.21625 18.5582 1.34697C17.569 0.477688 16.3219 0.00107711 15.0338 4.27562e-07H6.95511C5.66335 -0.000522583 4.41278 0.478795 3.42334 1.35365C2.4339 2.22851 1.76896 3.44288 1.54547 4.78318L0.0500302 12.9055C0.0495886 12.91 0.0495886 12.9145 0.0500302 12.919C-0.0716933 13.6472 0.0300496 14.3972 0.340487 15.0603C0.650925 15.7233 1.1539 16.2649 1.77638 16.6064C2.39886 16.9478 3.10844 17.0714 3.80211 16.9591C4.49578 16.8468 5.13742 16.5045 5.63387 15.9819L5.66596 15.9462L9.30509 11.5909H12.6976L16.3385 15.9462C16.3486 15.9587 16.3596 15.9703 16.3706 15.9819C16.9893 16.6323 17.8273 16.9983 18.7013 17C19.1831 16.9997 19.659 16.8882 20.0956 16.6735C20.5322 16.4588 20.9188 16.146 21.2284 15.7571C21.538 15.3681 21.763 14.9125 21.8876 14.4223C22.0123 13.932 22.0335 13.4189 21.9499 12.919H21.9508ZM8.79897 6.95455H8.06546V7.72727C8.06546 7.93221 7.98818 8.12876 7.85062 8.27367C7.71306 8.41859 7.52648 8.5 7.33195 8.5C7.13741 8.5 6.95084 8.41859 6.81328 8.27367C6.67572 8.12876 6.59844 7.93221 6.59844 7.72727V6.95455H5.86493C5.67039 6.95455 5.48382 6.87313 5.34626 6.72822C5.2087 6.5833 5.13142 6.38676 5.13142 6.18182C5.13142 5.97688 5.2087 5.78033 5.34626 5.63542C5.48382 5.4905 5.67039 5.40909 5.86493 5.40909H6.59844V4.63636C6.59844 4.43142 6.67572 4.23488 6.81328 4.08996C6.95084 3.94505 7.13741 3.86364 7.33195 3.86364C7.52648 3.86364 7.71306 3.94505 7.85062 4.08996C7.98818 4.23488 8.06546 4.43142 8.06546 4.63636V5.40909H8.79897C8.9935 5.40909 9.18007 5.4905 9.31763 5.63542C9.45519 5.78033 9.53247 5.97688 9.53247 6.18182C9.53247 6.38676 9.45519 6.5833 9.31763 6.72822C9.18007 6.87313 8.9935 6.95455 8.79897 6.95455ZM12.4665 6.18182C12.4665 5.97688 12.5438 5.78033 12.6814 5.63542C12.8189 5.4905 13.0055 5.40909 13.2 5.40909H15.4006C15.5951 5.40909 15.7817 5.4905 15.9192 5.63542C16.0568 5.78033 16.1341 5.97688 16.1341 6.18182C16.1341 6.38676 16.0568 6.5833 15.9192 6.72822C15.7817 6.87313 15.5951 6.95455 15.4006 6.95455H13.2C13.0055 6.95455 12.8189 6.87313 12.6814 6.72822C12.5438 6.5833 12.4665 6.38676 12.4665 6.18182ZM20.2023 14.6306C20.0649 14.839 19.8896 15.0166 19.6866 15.1531C19.4835 15.2895 19.2568 15.3821 19.0195 15.4256C18.7325 15.4785 18.4376 15.4588 18.1591 15.3683C17.8807 15.2778 17.6266 15.119 17.4177 14.9049L14.6487 11.5909H15.0338C15.9703 11.591 16.8913 11.3393 17.7096 10.8596C18.5279 10.3799 19.2164 9.68809 19.7099 8.84966L20.5113 13.1962C20.5521 13.445 20.5458 13.6998 20.4928 13.9459C20.4397 14.1921 20.341 14.4248 20.2023 14.6306Z",fill:"white"})})}function k8(){return c("svg",{width:"26",height:"20",viewBox:"0 0 26 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M24.765 5.73805C24.5817 5.57824 24.3551 5.4765 24.1138 5.44576C23.8726 5.41502 23.6277 5.45666 23.4102 5.56539L18.3107 8.10445L14.0532 1.03266C13.9438 0.85119 13.7893 0.70108 13.6048 0.596881C13.4202 0.492681 13.2119 0.437927 13 0.437927C12.7881 0.437927 12.5798 0.492681 12.3952 0.596881C12.2107 0.70108 12.0562 0.85119 11.9468 1.03266L7.68929 8.1075L2.59187 5.56844C2.37487 5.46067 2.13088 5.41939 1.89051 5.44979C1.65014 5.48018 1.4241 5.58089 1.24076 5.73928C1.05742 5.89767 0.924938 6.10669 0.859951 6.34009C0.794963 6.5735 0.80036 6.8209 0.875465 7.05125L4.63328 18.5644C4.67106 18.68 4.73434 18.7857 4.81844 18.8737C4.90254 18.9616 5.00532 19.0295 5.11919 19.0724C5.23305 19.1153 5.3551 19.1321 5.47632 19.1215C5.59753 19.1109 5.71482 19.0732 5.81953 19.0113C5.84492 18.996 8.44187 17.5 13 17.5C17.5581 17.5 20.1551 18.996 20.1784 19.0102C20.2832 19.0728 20.4007 19.111 20.5222 19.122C20.6437 19.1329 20.7661 19.1164 20.8804 19.0735C20.9946 19.0307 21.0978 18.9627 21.1821 18.8746C21.2665 18.7864 21.3299 18.6804 21.3677 18.5644L25.1255 7.0543C25.2028 6.82388 25.2098 6.57569 25.1456 6.3413C25.0814 6.10692 24.9489 5.89692 24.765 5.73805ZM17.8587 13.925C17.8256 14.113 17.7273 14.2832 17.5812 14.406C17.435 14.5287 17.2503 14.5961 17.0595 14.5963C17.0118 14.5963 16.9642 14.5922 16.9173 14.5841C14.322 14.1386 11.6698 14.1386 9.07461 14.5841C8.96951 14.6027 8.86179 14.6003 8.75759 14.5772C8.6534 14.5542 8.55478 14.5108 8.46735 14.4496C8.29079 14.3259 8.17056 14.1373 8.13312 13.925C8.09568 13.7127 8.14409 13.4943 8.2677 13.3177C8.39132 13.1412 8.58001 13.021 8.79226 12.9835C11.5743 12.5055 14.4175 12.5055 17.1996 12.9835C17.3051 13.0016 17.4059 13.0403 17.4964 13.0974C17.5869 13.1545 17.6652 13.229 17.7268 13.3165C17.7884 13.4039 17.8322 13.5027 17.8555 13.6072C17.8788 13.7116 17.8813 13.8196 17.8628 13.925H17.8587Z",fill:"white"})})}function P8(){return c("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M16.3654 10.6154C16.3654 11.5777 16.08 12.5183 15.5454 13.3184C15.0108 14.1186 14.2509 14.7422 13.3619 15.1104C12.4729 15.4787 11.4946 15.575 10.5508 15.3873C9.60702 15.1995 8.74009 14.7362 8.05966 14.0557C7.37922 13.3753 6.91584 12.5084 6.72811 11.5646C6.54037 10.6208 6.63673 9.64251 7.00497 8.75348C7.37322 7.86445 7.99683 7.10458 8.79694 6.56996C9.59705 6.03535 10.5377 5.75 11.5 5.75C12.7899 5.75146 14.0266 6.26453 14.9387 7.17665C15.8509 8.08877 16.3639 9.32545 16.3654 10.6154ZM23 11.5C23 13.7745 22.3255 15.9979 21.0619 17.8891C19.7983 19.7802 18.0022 21.2542 15.9009 22.1246C13.7995 22.995 11.4872 23.2228 9.25646 22.779C7.02568 22.3353 4.97658 21.24 3.36828 19.6317C1.75997 18.0234 0.664704 15.9743 0.220974 13.7435C-0.222756 11.5128 0.00498277 9.20049 0.87539 7.09914C1.7458 4.99779 3.21978 3.20174 5.11095 1.9381C7.00211 0.674463 9.22552 0 11.5 0C14.549 0.0032198 17.4722 1.21586 19.6282 3.37183C21.7841 5.5278 22.9968 8.451 23 11.5ZM21.2308 11.5C21.2294 10.1903 20.9638 8.89424 20.45 7.68947C19.9363 6.4847 19.1848 5.39592 18.2406 4.48824C17.2963 3.58056 16.1788 2.87263 14.9547 2.40677C13.7306 1.94092 12.4251 1.72672 11.1163 1.77697C5.90813 1.97822 1.75486 6.31615 1.76924 11.5276C1.77423 13.9001 2.64923 16.1883 4.22847 17.9588C4.87161 17.026 5.68857 16.2259 6.63462 15.6024C6.71528 15.5491 6.81117 15.5237 6.90762 15.5301C7.00408 15.5365 7.09578 15.5743 7.16871 15.6378C8.37087 16.6776 9.90722 17.2498 11.4967 17.2498C13.0862 17.2498 14.6225 16.6776 15.8247 15.6378C15.8976 15.5743 15.9893 15.5365 16.0857 15.5301C16.1822 15.5237 16.2781 15.5491 16.3588 15.6024C17.306 16.2256 18.1241 17.0257 18.7682 17.9588C20.3553 16.1819 21.232 13.8825 21.2308 11.5Z",fill:"white"})})}function b8(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"21",fill:"none",viewBox:"0 0 22 21",children:c("path",{fill:"#fff",d:"M21.45 9.566l-4.426 3.827 1.326 5.698a1.542 1.542 0 01-.606 1.611 1.58 1.58 0 01-1.734.075l-5.016-3.015-5.006 3.015a1.581 1.581 0 01-1.734-.075 1.542 1.542 0 01-.606-1.612L4.972 13.4.545 9.566a1.542 1.542 0 01.05-2.397c.242-.19.536-.306.844-.332l5.836-.5L9.553.954c.119-.283.32-.524.576-.694a1.576 1.576 0 012.313.694l2.285 5.383 5.834.5c.308.026.602.141.844.331.243.19.423.448.518.74a1.542 1.542 0 01-.468 1.658h-.005z"})})}function T8(e){return je({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"}}]})(e)}function E8(e){return je({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}function R8(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}function jm(e){return je({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}const A8=P.div`
  height: 74.25vh;
  width: 68.75vw;
  display: grid;
  grid-template-columns: 3.3vw;
  grid-template-rows: 7vh;
  grid-column-gap: 0.75vw;
  grid-row-gap: 1.25vh;
`,M8=P.div`
  position: absolute;
  top: 50%;
  left: 47.5%;
  transform: translate(-50%, -50%);
`,L8=P.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;function ti({children:e}){return c(L8,{children:c(M8,{children:k(A8,{children:[k(C8,{children:[c(pr,{to:"/Lobby/Gamemodes",className:`explore ${location.pathname.includes("Gamemodes")&&"selected"}`,children:c(S8,{})}),c(pr,{to:"/Lobby/Profile",className:`explore ${location.pathname.endsWith("Profile")&&"selected"}`,children:c(P8,{})}),c(pr,{to:"/Lobby/Ranking",className:`explore ${location.pathname.endsWith("Ranking")&&"selected"}`,children:c(k8,{})}),c(pr,{to:"/Lobby/Teams",className:`explore ${location.pathname.endsWith("Teams")&&"selected"}`,children:c(jm,{})}),c(pr,{to:"/Lobby/Ranks",className:`explore ${location.pathname.includes("Ranks")&&"selected"}`,children:c(b8,{})})]}),e]})})})}function z8({...e}){return c("svg",{width:"19",height:"15",viewBox:"0 0 19 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:c("path",{d:"M16.7188 0.28125H2.28125C1.93315 0.28125 1.59931 0.419531 1.35317 0.665672C1.10703 0.911814 0.96875 1.24565 0.96875 1.59375V13.4062C0.96875 13.7543 1.10703 14.0882 1.35317 14.3343C1.59931 14.5805 1.93315 14.7188 2.28125 14.7188H16.7188C17.0668 14.7188 17.4007 14.5805 17.6468 14.3343C17.893 14.0882 18.0312 13.7543 18.0312 13.4062V1.59375C18.0312 1.24565 17.893 0.911814 17.6468 0.665672C17.4007 0.419531 17.0668 0.28125 16.7188 0.28125ZM11.7969 4.21875C11.9916 4.21875 12.1819 4.27648 12.3438 4.38465C12.5056 4.49281 12.6318 4.64655 12.7063 4.82642C12.7808 5.00629 12.8003 5.20422 12.7623 5.39517C12.7244 5.58612 12.6306 5.76152 12.4929 5.89918C12.3553 6.03685 12.1799 6.1306 11.9889 6.16859C11.798 6.20657 11.6 6.18707 11.4202 6.11257C11.2403 6.03806 11.0866 5.91189 10.9784 5.75001C10.8702 5.58813 10.8125 5.39782 10.8125 5.20312C10.8125 4.94205 10.9162 4.69167 11.1008 4.50707C11.2854 4.32246 11.5358 4.21875 11.7969 4.21875ZM2.28125 13.4062V11.1094L6.54688 6.84375L13.1094 13.4062H2.28125ZM16.7188 13.4062H14.9657L12.0126 10.4531L13.6532 8.8125L16.7188 11.8788V13.4062Z",fill:"white"})})}var O8="./assets/BRONZE.9a129c62.png",N8="./assets/OURO.dec99c4d.png",I8="./assets/PLATINA.ce357e3c.png",$8="./assets/PRATA.ce0d2e6b.png",_8="./assets/DIAMANTE.9a776439.png",F8="./assets/MESTRE.bfd3abb2.png",D8="./assets/IMORTAL.66a8bfca.png";const lr=P.img`
  height: 2.5vh;
  width: 2.5vh;
`;function V8(e){return c(lr,{src:O8,alt:"Bronze",...e})}function j8(e){return c(lr,{src:N8,alt:"Gold",...e})}function B8(e){return c(lr,{src:$8,alt:"Silver",...e})}function U8(e){return c(lr,{src:I8,alt:"Platinum",...e})}function H8(e){return c(lr,{src:_8,alt:"Diamond",...e})}function W8(e){return c(lr,{src:F8,alt:"Master",...e})}function G8(e){return c(lr,{src:D8,alt:"Immortal",...e})}function nt({rank:e,...t}){switch(e){case"bronze":return c(V8,{...t});case"silver":return c(B8,{...t});case"gold":return c(j8,{...t});case"platinum":return c(U8,{...t});case"diamond":return c(H8,{...t});case"immortal":return c(G8,{...t});case"master":return c(W8,{...t});default:return c(Jn,{})}}function Bm(e){switch(e){case"bronze":return"Bronze";case"silver":return"Prata";case"gold":return"Ouro";case"platinum":return"Platina";case"diamond":return"Diamante";case"immortal":return"Imortal";case"master":return"Mestre";default:return""}}function K8(e){switch(e){case"bronze":return"linear-gradient(270deg, rgba(197, 122, 76, 0.11) 0%, rgba(197, 122, 76, 0) 100%)";case"silver":return"linear-gradient(270deg, rgba(255, 255, 255, 0.11) 0%, rgba(146, 197, 255, 0) 100%)";case"gold":return"linear-gradient(270deg, rgba(197, 169, 76, 0.11) 0%, rgba(197, 122, 76, 0) 100%)";case"platinum":return"linear-gradient(270deg, rgba(146, 197, 255, 0.11) 0%, rgba(146, 197, 255, 0) 100%)";case"diamond":return"linear-gradient(270deg, rgba(0, 4, 255, 0.11) 0%, rgba(255, 255, 255, 0) 100%)";case"immortal":return"linear-gradient(270deg, rgba(255, 0, 0, 0.11) 0%, rgba(255, 255, 255, 0) 100%)";case"master":return"linear-gradient(270deg, rgba(30, 255, 0, 0.11) 0%, rgba(255, 255, 255, 0) 100%)";default:return""}}function Um(e){switch(e){case"bronze":return"#C57A4C";case"silver":return"#777777";case"gold":return"#e9c345";case"platinum":return"#6DB1FD";case"diamond":return"#6e71ff";case"immortal":return"#FF4800";case"master":return"#00FF55";default:return""}}const La=P.svg`
  margin-right: 0.25vw;
  height: 1.75vh;
  width: 1.75vh;
`;function Hm(){return c(La,{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M10.847 6.34695L9.19532 8L10.8491 9.65305C11.0076 9.81155 11.0966 10.0265 11.0966 10.2507C11.0966 10.4749 11.0076 10.6899 10.8491 10.8484C10.6906 11.0069 10.4756 11.0959 10.2514 11.0959C10.0272 11.0959 9.81226 11.0069 9.65375 10.8484L8 9.19531L6.34696 10.8491C6.18845 11.0076 5.97346 11.0966 5.7493 11.0966C5.52514 11.0966 5.31015 11.0076 5.15164 10.8491C4.99314 10.6906 4.90409 10.4756 4.90409 10.2514C4.90409 10.0272 4.99314 9.81226 5.15164 9.65375L6.80469 8L5.15305 6.34695C5.07456 6.26847 5.01231 6.17529 4.96983 6.07275C4.92735 5.9702 4.90549 5.86029 4.90549 5.7493C4.90549 5.52513 4.99454 5.31015 5.15305 5.15164C5.31156 4.99313 5.52654 4.90408 5.75071 4.90408C5.97487 4.90408 6.18985 4.99313 6.34836 5.15164L8 6.80469L9.65305 5.15094C9.81156 4.99243 10.0265 4.90338 10.2507 4.90338C10.4749 4.90338 10.6899 4.99243 10.8484 5.15094C11.0069 5.30945 11.0959 5.52443 11.0959 5.74859C11.0959 5.97276 11.0069 6.18774 10.8484 6.34625L10.847 6.34695ZM15.5938 8C15.5938 9.5019 15.1484 10.9701 14.314 12.2189C13.4796 13.4676 12.2936 14.441 10.906 15.0157C9.51843 15.5905 7.99158 15.7408 6.51854 15.4478C5.04549 15.1548 3.69242 14.4316 2.63041 13.3696C1.56841 12.3076 0.845172 10.9545 0.552165 9.48147C0.259159 8.00842 0.40954 6.48157 0.984293 5.094C1.55905 3.70642 2.53236 2.52044 3.78114 1.68603C5.02993 0.851616 6.4981 0.40625 8 0.40625C10.0133 0.408483 11.9435 1.20925 13.3671 2.63287C14.7907 4.0565 15.5915 5.9867 15.5938 8ZM13.9063 8C13.9063 6.83185 13.5599 5.68994 12.9109 4.71866C12.2619 3.74739 11.3395 2.99037 10.2602 2.54334C9.181 2.09631 7.99345 1.97934 6.84775 2.20724C5.70205 2.43513 4.64966 2.99765 3.82365 3.82365C2.99765 4.64965 2.43513 5.70205 2.20724 6.84775C1.97935 7.99345 2.09631 9.181 2.54334 10.2602C2.99037 11.3394 3.74739 12.2619 4.71867 12.9109C5.68994 13.5599 6.83186 13.9062 8 13.9062C9.56592 13.9046 11.0672 13.2818 12.1745 12.1745C13.2818 11.0672 13.9046 9.56592 13.9063 8Z",fill:"white","fill-opacity":"0.5"})})}function Wm(){return c(La,{width:"18",height:"15",viewBox:"0 0 18 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M16.3125 2.21875H14.9062V1.9375C14.9063 1.56454 14.7581 1.20685 14.4944 0.943131C14.2306 0.679408 13.873 0.53125 13.5 0.53125H4.5C4.12704 0.53125 3.76935 0.679408 3.50563 0.943131C3.24191 1.20685 3.09375 1.56454 3.09375 1.9375V2.21875H1.6875C1.50283 2.21875 1.31997 2.25512 1.14935 2.32579C0.978737 2.39646 0.823713 2.50005 0.693131 2.63063C0.429408 2.89435 0.28125 3.25204 0.28125 3.625V4.75C0.28218 5.57023 0.608427 6.35659 1.18842 6.93658C1.76841 7.51657 2.55477 7.84282 3.375 7.84375H3.42914C3.78951 8.85914 4.42021 9.7569 5.25323 10.4402C6.08625 11.1236 7.09 11.5666 8.15625 11.7215V12.9062H6.75C6.52622 12.9062 6.31161 12.9951 6.15338 13.1534C5.99514 13.3116 5.90625 13.5262 5.90625 13.75C5.90625 13.9738 5.99514 14.1884 6.15338 14.3466C6.31161 14.5049 6.52622 14.5938 6.75 14.5938H11.25C11.4738 14.5937 11.6884 14.5049 11.8466 14.3466C12.0049 14.1884 12.0938 13.9738 12.0938 13.75C12.0938 13.5262 12.0049 13.3116 11.8466 13.1534C11.6884 12.9951 11.4738 12.9062 11.25 12.9062H9.84375V11.7187C12.0192 11.4016 13.8185 9.87648 14.5547 7.84375H14.625C15.4452 7.84282 16.2316 7.51657 16.8116 6.93658C17.3916 6.35659 17.7178 5.57023 17.7188 4.75V3.625C17.7188 3.25204 17.5706 2.89435 17.3069 2.63063C17.0431 2.36691 16.6855 2.21875 16.3125 2.21875ZM1.96875 4.75V3.90625H3.09375V5.875C3.09375 5.96008 3.09375 6.04445 3.10008 6.12883C2.78116 6.06525 2.49413 5.89311 2.28786 5.64171C2.08159 5.39031 1.96882 5.07519 1.96875 4.75ZM13.2188 5.81172C13.2188 8.15523 11.3407 10.0762 9.03234 10.0938C8.47561 10.098 7.92355 9.99205 7.40796 9.78195C6.89238 9.57185 6.42349 9.26177 6.02831 8.8696C5.63313 8.47743 5.31948 8.01091 5.10545 7.49695C4.89142 6.98299 4.78123 6.43175 4.78125 5.875V2.21875H13.2188V5.81172ZM16.0312 4.75C16.0312 5.07561 15.9183 5.39113 15.7115 5.64272C15.5048 5.8943 15.2172 6.06636 14.8978 6.12953C14.9034 6.02406 14.9062 5.91859 14.9062 5.81172V3.90625H16.0312V4.75Z",fill:"white","fill-opacity":"0.5"})})}function Gm(){return c(La,{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M7.15625 9.28125C7.15625 9.61501 7.05728 9.94127 6.87185 10.2188C6.68643 10.4963 6.42288 10.7126 6.11453 10.8403C5.80618 10.968 5.46688 11.0014 5.13954 10.9363C4.81219 10.8712 4.51151 10.7105 4.27551 10.4745C4.03951 10.2385 3.87879 9.93781 3.81367 9.61047C3.74856 9.28312 3.78198 8.94382 3.9097 8.63547C4.03743 8.32712 4.25372 8.06357 4.53123 7.87815C4.80873 7.69272 5.13499 7.59375 5.46875 7.59375C5.9163 7.59375 6.34553 7.77154 6.66199 8.08801C6.97846 8.40447 7.15625 8.8337 7.15625 9.28125ZM10.5312 7.59375C10.1975 7.59375 9.87123 7.69272 9.59373 7.87815C9.31622 8.06357 9.09993 8.32712 8.9722 8.63547C8.84448 8.94382 8.81106 9.28312 8.87617 9.61047C8.94129 9.93781 9.10201 10.2385 9.33801 10.4745C9.57401 10.7105 9.87469 10.8712 10.202 10.9363C10.5294 11.0014 10.8687 10.968 11.177 10.8403C11.4854 10.7126 11.7489 10.4963 11.9344 10.2188C12.1198 9.94127 12.2188 9.61501 12.2188 9.28125C12.2187 8.8337 12.041 8.40447 11.7245 8.08801C11.408 7.77154 10.9788 7.59375 10.5312 7.59375ZM15.5938 8.15625C15.5938 10.2551 14.6762 12.2189 13.0625 13.6069V15.1875C13.0625 15.5605 12.9143 15.9181 12.6506 16.1819C12.3869 16.4456 12.0292 16.5938 11.6562 16.5938H4.34375C3.97079 16.5938 3.6131 16.4456 3.34938 16.1819C3.08566 15.9181 2.9375 15.5605 2.9375 15.1875V13.6069C1.32031 12.2189 0.40625 10.2551 0.40625 8.15625C0.40625 4.12383 3.81289 0.84375 8 0.84375C12.1871 0.84375 15.5938 4.12383 15.5938 8.15625ZM13.9062 8.15625C13.9062 5.05477 11.2569 2.53125 8 2.53125C4.74313 2.53125 2.09375 5.05477 2.09375 8.15625C2.09375 9.86555 2.89602 11.4609 4.29523 12.5367C4.39785 12.6155 4.48096 12.7169 4.53814 12.833C4.59532 12.949 4.62504 13.0767 4.625 13.2061V14.9062H5.75V13.5C5.75 13.2762 5.83889 13.0616 5.99713 12.9034C6.15536 12.7451 6.36997 12.6562 6.59375 12.6562C6.81753 12.6562 7.03214 12.7451 7.19037 12.9034C7.34861 13.0616 7.4375 13.2762 7.4375 13.5V14.9062H8.5625V13.5C8.5625 13.2762 8.6514 13.0616 8.80963 12.9034C8.96786 12.7451 9.18247 12.6562 9.40625 12.6562C9.63003 12.6562 9.84464 12.7451 10.0029 12.9034C10.1611 13.0616 10.25 13.2762 10.25 13.5V14.9062H11.375V13.2061C11.3751 13.0768 11.4048 12.9493 11.462 12.8334C11.5192 12.7174 11.6022 12.6162 11.7048 12.5374C13.104 11.4609 13.9062 9.86555 13.9062 8.15625Z",fill:"white","fill-opacity":"0.5"})})}function Km(){return c(La,{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M8 0.40625C6.4981 0.40625 5.02993 0.851616 3.78114 1.68603C2.53236 2.52044 1.55905 3.70642 0.984293 5.094C0.40954 6.48157 0.259159 8.00842 0.552165 9.48147C0.845172 10.9545 1.56841 12.3076 2.63041 13.3696C3.69242 14.4316 5.04549 15.1548 6.51854 15.4478C7.99158 15.7408 9.51843 15.5905 10.906 15.0157C12.2936 14.441 13.4796 13.4676 14.314 12.2189C15.1484 10.9701 15.5938 9.5019 15.5938 8C15.5915 5.9867 14.7907 4.0565 13.3671 2.63287C11.9435 1.20925 10.0133 0.408483 8 0.40625ZM8.84375 13.8451V11.9375C8.84375 11.7137 8.75486 11.4991 8.59662 11.3409C8.43839 11.1826 8.22378 11.0938 8 11.0938C7.77623 11.0938 7.56162 11.1826 7.40338 11.3409C7.24515 11.4991 7.15625 11.7137 7.15625 11.9375V13.8451C5.89531 13.6609 4.72747 13.0747 3.82639 12.1736C2.92531 11.2725 2.3391 10.1047 2.15493 8.84375H4.0625C4.28628 8.84375 4.50089 8.75485 4.65912 8.59662C4.81736 8.43839 4.90625 8.22378 4.90625 8C4.90625 7.77622 4.81736 7.56161 4.65912 7.40338C4.50089 7.24514 4.28628 7.15625 4.0625 7.15625H2.15493C2.3391 5.89531 2.92531 4.72747 3.82639 3.82639C4.72747 2.9253 5.89531 2.33909 7.15625 2.15492V4.0625C7.15625 4.28628 7.24515 4.50089 7.40338 4.65912C7.56162 4.81736 7.77623 4.90625 8 4.90625C8.22378 4.90625 8.43839 4.81736 8.59662 4.65912C8.75486 4.50089 8.84375 4.28628 8.84375 4.0625V2.15492C10.1047 2.33909 11.2725 2.9253 12.1736 3.82639C13.0747 4.72747 13.6609 5.89531 13.8451 7.15625H11.9375C11.7137 7.15625 11.4991 7.24514 11.3409 7.40338C11.1826 7.56161 11.0938 7.77622 11.0938 8C11.0938 8.22378 11.1826 8.43839 11.3409 8.59662C11.4991 8.75485 11.7137 8.84375 11.9375 8.84375H13.8451C13.6609 10.1047 13.0747 11.2725 12.1736 12.1736C11.2725 13.0747 10.1047 13.6609 8.84375 13.8451Z",fill:"white","fill-opacity":"0.5"})})}function Y8(e){return k("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.8 7.2C11.4627 7.2 12 7.73726 12 8.4V10.8C12 11.4627 11.4627 12 10.8 12C10.1373 12 9.6 11.4627 9.6 10.8V8.4C9.6 7.73726 10.1373 7.2 10.8 7.2Z",fill:"white","fill-opacity":"0.5"}),c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 0C6.66274 0 7.2 0.537258 7.2 1.2V10.8C7.2 11.4627 6.66274 12 6 12C5.33726 12 4.8 11.4627 4.8 10.8V1.2C4.8 0.537258 5.33726 0 6 0Z",fill:"white","fill-opacity":"0.5"}),c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.2 4.8C1.86274 4.8 2.4 5.33726 2.4 6V10.8C2.4 11.4627 1.86274 12 1.2 12C0.537258 12 0 11.4627 0 10.8V6C0 5.33726 0.537258 4.8 1.2 4.8Z",fill:"white","fill-opacity":"0.5"})]})}function w1(){return c("svg",{width:"9",height:"5",viewBox:"0 0 9 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M1 1L4.5 4L8 1",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})}function Z8(){return c("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M11.4369 0H0.563154C0.0635131 0 -0.188604 0.606234 0.165419 0.960258L4.5 5.29549V10.125C4.5 10.3085 4.58955 10.4805 4.73993 10.5858L6.61493 11.8979C6.98484 12.1568 7.5 11.8944 7.5 11.437V5.29549L11.8347 0.960258C12.188 0.606937 11.9376 0 11.4369 0Z",fill:"white"})})}const Du=P.div`
  table {
    width: 100%;
    font-family: 'Poppins';
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: 0.75vw;
    font-size: 0.8vw;

    padding: 0.75vh 0.75vh;
  
    border-spacing: 0;
  }

  tbody {
    tr:first-child td:first-child { border-top-left-radius: 10px; }
    tr:first-child td:last-child { border-top-right-radius: 10px; }

    tr:last-child td:first-child { border-bottom-left-radius: 10px; }
    tr:last-child td:last-child { border-bottom-right-radius: 10px; }

    tr {
      height: 3.25vh;
      text-align: center;
      color: rgba(255, 255, 255, 0.5);
      font-weight: 500;

      background: rgba(255, 255, 255, 0.01);
      border-radius: 0.5vw;
      
      &:nth-child(even) {
        background: rgba(255, 255, 255, 0.03);
      }

      td {
        position: relative;
        vertical-align: middle;
      }
    }

    &::before {
      content: '';
      display: block;
      height: 1vh;;
    }
  }

  thead {
    height: 4vh;
    tr {
      background-color: rgba(255, 255, 255, 0.04);
      th {
        text-align: center;
        vertical-align: middle;
        text-transform: uppercase;

        color: rgba(255, 255, 255, 0.5);
        padding: 0vh 1vw;
        margin: 0;
        outline: 0;
        box-sizing: border-box;

        .rev {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5vh;
          line-height: 1.5vh;
        }

        &:first-child {
          border-top-left-radius: 0.5vw;
          border-bottom-left-radius: 0.5vw;
        }

        &:last-child {
          border-top-right-radius: 0.5vw;
          border-bottom-right-radius: 0.5vw;
        }
      }
    }
  }
`;function Ym(e){const{theme:t}=at();return c("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:c("path",{d:"M9.5 0.15625C7.65198 0.15625 5.84547 0.704251 4.30889 1.73096C2.77232 2.75766 1.57471 4.21695 0.867505 5.9243C0.160299 7.63165 -0.0247389 9.51037 0.335792 11.3229C0.696322 13.1354 1.58623 14.8003 2.89298 16.107C4.19972 17.4138 5.86462 18.3037 7.67713 18.6642C9.48964 19.0247 11.3684 18.8397 13.0757 18.1325C14.783 17.4253 16.2423 16.2277 17.269 14.6911C18.2958 13.1545 18.8438 11.348 18.8438 9.5C18.8411 7.02269 17.8559 4.64759 16.1041 2.89586C14.3524 1.14413 11.9773 0.158866 9.5 0.15625ZM9.5 17.4062C7.9363 17.4062 6.4077 16.9426 5.10753 16.0738C3.80735 15.2051 2.79399 13.9703 2.19558 12.5256C1.59718 11.0809 1.44061 9.49123 1.74567 7.95757C2.05073 6.4239 2.80373 5.01515 3.90944 3.90944C5.01515 2.80373 6.42391 2.05073 7.95757 1.74567C9.49123 1.4406 11.0809 1.59717 12.5256 2.19558C13.9703 2.79398 15.2051 3.80735 16.0738 5.10752C16.9426 6.4077 17.4063 7.93629 17.4063 9.5C17.4039 11.5961 16.5701 13.6057 15.0879 15.0879C13.6057 16.5701 11.5961 17.4039 9.5 17.4062ZM13.6023 8.99148C13.6691 9.05824 13.7221 9.13751 13.7583 9.22476C13.7945 9.31202 13.8131 9.40555 13.8131 9.5C13.8131 9.59445 13.7945 9.68798 13.7583 9.77524C13.7221 9.86249 13.6691 9.94176 13.6023 10.0085L10.7273 12.8835C10.5924 13.0184 10.4095 13.0942 10.2188 13.0942C10.028 13.0942 9.84511 13.0184 9.71024 12.8835C9.57537 12.7486 9.4996 12.5657 9.4996 12.375C9.4996 12.1843 9.57537 12.0014 9.71024 11.8665L11.3589 10.2188H5.90625C5.71563 10.2188 5.53281 10.143 5.39802 10.0082C5.26323 9.87344 5.1875 9.69062 5.1875 9.5C5.1875 9.30938 5.26323 9.12656 5.39802 8.99177C5.53281 8.85698 5.71563 8.78125 5.90625 8.78125H11.3589L9.71024 7.13352C9.57537 6.99865 9.4996 6.81573 9.4996 6.625C9.4996 6.43427 9.57537 6.25135 9.71024 6.11648C9.84511 5.98162 10.028 5.90585 10.2188 5.90585C10.4095 5.90585 10.5924 5.98162 10.7273 6.11648L13.6023 8.99148Z",fill:t.colors.main[500]})})}function Q8(){return c(Ym,{style:{transform:"rotate(180deg)"}})}const X8=P.div`
  display: flex;
  font-family: 'Poppins';
  font-size: 0.75vw;

  b {
    margin: 0 0.2vw;
    color: ${({theme:e})=>e.colors.main[500]};
  }

  button {
    margin: 0 0.2vw;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;function J8({onPageChange:e,page:t,totalPages:n}){const r=i=>{i<1||i>n||e(i)};return k(X8,{children:["p\xE1gina",c("b",{children:t}),"de",c("b",{children:n}),t-1>=1&&c("button",{onClick:()=>r(t-1),children:c(Q8,{})}),t+1<=n&&c("button",{onClick:()=>r(t+1),children:c(Ym,{})})]})}function q8(e,t){if(e===0){const s=t.every(l=>l.isSelected);return t.map(l=>({...l,isSelected:!s}))}const n=[...t],r=n[e].isSelected;r&&(n[0].isSelected=!1),n[e].isSelected=!r;const[,...i]=n;return i.every(s=>s.isSelected)&&(n[0].isSelected=!0),n}function ey(e,t=1){const n=[{value:1,symbol:""},{value:1e3,symbol:"K"},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}],r=/\.0+$|(\.[0-9]*[1-9])0+$/;var i=n.slice().reverse().find(function(s){return e>=s.value});return`$ ${i?(e/i.value).toFixed(t).replace(r,"$1")+i.symbol:"0"}`}const xl={data:{avatarUrl:"https://media.discordapp.net/attachments/1008191296030117948/1088245715203014706/FryVtBkWcAIyTIJ.png",backgroundUrl:"https://media.discordapp.net/attachments/1008191296030117948/1088320707538202745/image.png",isOnline:!0,name:"Self Rafael",id:1},ranks:[{deaths:0,kills:0,gamemode:"Battle Royale",position:1,rank:"bronze",wins:0,losses:0},{deaths:0,kills:0,gamemode:"Modo 1v1",position:2,rank:"bronze",wins:0,losses:0},{deaths:0,kills:0,gamemode:"Modo 2v2",position:3,rank:"bronze",wins:0,losses:0},{deaths:0,kills:0,gamemode:"Modo 3v3",position:4,rank:"bronze",wins:0,losses:0},{deaths:0,kills:0,gamemode:"Modo 4v4",position:5,rank:"bronze",wins:0,losses:0}]},ty={data:{avatarUrl:"https://media.discordapp.net/attachments/1008191296030117948/1088245715203014706/FryVtBkWcAIyTIJ.png",backgroundUrl:"https://media.discordapp.net/attachments/1008191296030117948/1088320707538202745/image.png",isOnline:!1,name:"Non Self Rafael",id:1},ranks:[{deaths:0,kills:0,gamemode:"Battle Royale",position:0,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 1v1",position:0,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 2v2",position:0,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 3v3",position:0,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 4v4",position:0,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"}]},ny={["Battle Royale"]:{totalPages:10,data:[{deaths:0,kills:0,gamemode:"Battle Royale",position:1,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 1v1",position:2,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 2v2",position:3,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 3v3",position:4,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 4v4",position:5,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 4v4",position:6,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 4v4",position:7,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 4v4",position:8,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 4v4",position:9,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"},{deaths:0,kills:0,gamemode:"Modo 4v4",position:10,rank:"bronze",wins:0,losses:0,id:1,name:"Rafael"}]}};function ry(e,t){const n=[];for(let r=0;r<10;r++)n.push({deaths:0,kills:0,gamemode:e,position:0,rank:"bronze",wins:0,losses:0,id:1,name:`GAMEMODE-> ${e} PAGE-> ${t} INDEX -> ${r}`});return{totalPages:Math.floor(Math.random()*10)+2,data:n}}const x1=10,Zm=x.exports.createContext(null);function iy({children:e}){const[t,n]=x.exports.useState(xl),[r,i]=x.exports.useState(xl),[o,s]=x.exports.useState([]),[a,l]=x.exports.useState(ny),[u,d]=x.exports.useState(["Battle Royale","Modo 1v1","Modo 2v2","Modo 3v3","Modo 4v4"]),f=(g,p=1,m=x1)=>{const C=(p-1)*m,T=C+m;return{...g,data:g.data.slice(C,T)}},h=async(g,p=1,m=x1)=>{const C=a[g];if(C&&C.data.length>=p*m)return f({...a[g]},p,m);var T;en()&&(T=await ry(g,p));const{data:R,totalPages:A}=await Le("requestRank",{gamemode:g,page:p,itemsPerPage:m},T);var E;if(C){const $=C.data||[];R.forEach(F=>{$.push(F)}),E={...C,data:$}}else E={data:R,totalPages:A};return l({[g]:E,...a}),f(E,p,m)},v=async g=>(delete a[g],await h(g)),y=async g=>{if(!g){const m=await Le("requestSelfProfile",{},xl);return i(m),m}const p=await Le("requestProfile",{id:g},ty);return i(p),p},w=async(g,p)=>await Le("requestUserRanking",{gamemode:p,id:g},[{deaths:0,kills:0,gamemode:p,position:0,rank:"bronze",wins:0,losses:0,id:g,name:`MOCK SEARCH USER GAMEMODE-> ${p}`}]),S=async()=>{const g=await Le("requestGamemodes",{},[{allowed:"all",mode:"Battle Royale",location:"Los Santos",max:32,min:2,uuid:"1234567890"}]);return s(g),d(g.map(p=>p.mode)),g};return c(Zm.Provider,{value:{selfProfile:t,profile:r,gamemodes:o,globalRankCache:a,disponibleGamemodes:u,refreshGlobalRankGamemode:h,refreshGlobalWithNewData:v,refreshProfileWithNewData:y,searchUserRanking:w,setSelfProfile:n,refreshDisponibleGamemodes:S},children:e})}const hd=()=>x.exports.useContext(Zm);function oy(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"9",fill:"none",viewBox:"0 0 6 8",style:{marginLeft:"0.1rem"},children:c("path",{fill:"#fff",fillRule:"evenodd",d:"M.955.625L5.5 3.75c.15.104.181.3.068.438a.328.328 0 01-.068.062L.955 7.375a.362.362 0 01-.478-.063.296.296 0 01-.068-.187V.875C.41.702.562.562.75.562c.074 0 .146.022.205.063z",clipRule:"evenodd"})})}function sy(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"none",viewBox:"0 0 10 10",children:c("path",{fill:"#fff",d:"M6.425 7.642a.312.312 0 01-.262.483H.4a.313.313 0 01-.262-.483 3.743 3.743 0 011.844-1.473 2.344 2.344 0 112.598 0c.758.279 1.405.796 1.845 1.473zm3.434-.006a3.745 3.745 0 00-1.841-1.467 2.344 2.344 0 00-2.366-4.037.156.156 0 00-.052.235 2.962 2.962 0 01.142 3.513.156.156 0 00.042.216c.462.323.858.732 1.166 1.204.124.19.175.42.143.644a.156.156 0 00.154.181h2.355a.313.313 0 00.302-.232.321.321 0 00-.045-.257z"})})}function ay(){const{theme:e}=at();return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"none",viewBox:"0 0 10 10",children:c("path",{fill:e.colors.main[500],d:"M9.665 6.787v-.005l-.64-3.288v-.007A2.347 2.347 0 006.72 1.562H3.277A2.34 2.34 0 00.972 3.498L.335 6.782v.005a1.406 1.406 0 002.379 1.239l.014-.015 1.55-1.761h1.445l1.551 1.761.014.015a1.41 1.41 0 001.587.28 1.406 1.406 0 00.79-1.519zM4.063 4.375H3.75v.313a.313.313 0 01-.625 0v-.313h-.313a.312.312 0 110-.625h.313v-.313a.312.312 0 11.625 0v.313h.312a.312.312 0 110 .625zm1.563-.313a.312.312 0 01.312-.312h.938a.312.312 0 110 .625h-.938a.312.312 0 01-.312-.313zM8.92 7.48a.775.775 0 01-.87.299.785.785 0 01-.317-.188l-1.18-1.34h.165A2.344 2.344 0 008.71 5.141L9.052 6.9a.774.774 0 01-.131.58z"})})}function ly(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9",height:"10",fill:"none",viewBox:"0 0 9 10",children:c("path",{fill:"#fff",d:"M2.4 3.683L8.255.303l.7 1.212-.366.211.175.303-2.196 1.268a.47.47 0 00-.207.238.323.323 0 00.016.276l.175.303c.093.161.105.36.033.553a.942.942 0 01-.415.476l-1.237.714a.444.444 0 00-.231.36l-.041 2a.433.433 0 01-.23.354l-1.237.714s-1.098.634-.683-2.03c0 0 .398-1.845-1.066-1L.57 4.74l.366-.211.008-.41 1.098-.633.358.197zm3.786.643l-.175-.303a.323.323 0 00-.23-.153.47.47 0 00-.31.06l-.367.212s-.19.514.35.606a.942.942 0 01-.62.121.645.645 0 01-.462-.304.47.47 0 00-.207.238.323.323 0 00.016.276l.175.303c.047.08.13.135.231.152a.47.47 0 00.31-.06l1.098-.634a.47.47 0 00.208-.238.323.323 0 00-.017-.276z"})})}function uy(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"none",viewBox:"0 0 10 10",children:c("path",{fill:"#fff",d:"M5 .625a3.441 3.441 0 00-3.438 3.438c0 2.94 3.125 5.162 3.259 5.255a.313.313 0 00.358 0c.133-.093 3.258-2.314 3.258-5.255A3.441 3.441 0 005 .624zm0 2.188a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"})})}const cy=P.div`
    width: 98%;
    height: 15.78rem;
    display: flex;
    flex-direction: column;
    font-size: .4rem;
    padding: 8px;

    background: radial-gradient(87.22% 84.84% at 17.04% 12.91%, rgba(235, 235, 235, 0.03) 0%, rgba(37, 39, 41, 0.12) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-radius: 5px;
`,dy=P.img`
    width: 100%;
    height: 42%;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
`,fy=P.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: #161206;
    border-radius: 0px;
    padding: 4px 0px;
`,hy=P.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    gap: .5rem;
    padding: 1px 8px;
    background: rgba(183, 183, 183, 0.02);
    border-radius: 4px 4px 0px 0px;

    h2 {
        align-self: center;
        font-weight: 700;
        line-height: 14px;
    }
    h2:first-child {
        color: ${({theme:e})=>e.colors.main[500]};
    }
`,py=P.button`
    width: 100%;
    height: 18%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${({theme:e})=>e.colors.main[500]};
    cursor: pointer;
    font-size: .45rem;
    color: #fff;
    text-transform: uppercase;
    transition: all .2s ease-in-out;
    border-radius: 0px 0px 4px 4px;

    h2 {
        font-weight: 800;
        font-family: 'Inter';
    }

    &:disabled {
        background: #E9AE0698;
        cursor: not-allowed;
    }

    &:hover {
        opacity: .65;
    }
`,my=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11.6%;
    height: 80%;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 5px;

    svg {
        width: .9rem;
        height: .9rem;
        color: #fff;
    }
`;function gy({mode:e,location:t,min:n,max:r,allowed:i,uuid:o}){const s=co(),a=[{icon:c(ay,{}),description:e},{icon:c(uy,{}),description:t},{icon:c(sy,{}),description:`${n}/${r}`},{icon:c(ly,{}),description:i}],l=()=>{s(`/Lobby/Teams/Gamemodes/${o}`)};return k(cy,{children:[c(dy,{src:"https://media.discordapp.net/attachments/1008191296030117948/1087815080621649920/Rectangle_456.png"}),c(fy,{children:a.map((u,d)=>k(hy,{children:[c(my,{children:u.icon}),c("h2",{children:u.description})]},d))}),c(py,{onClick:l,children:k("h2",{children:["ENTRAR NO JOGO ",c(oy,{})]})})]})}function vy(){const{gamemodes:e,refreshDisponibleGamemodes:t}=hd(),[n,r]=x.exports.useState(e),[i,o]=x.exports.useState([]),[s,a]=x.exports.useState(!1),[l,u]=x.exports.useState("Todos os Modos");x.exports.useEffect(()=>{const v=[...e].map(y=>({text:y.mode,isSelected:!0}));o([{text:"Todos os Modos",isSelected:!0},...v])},[e]);const d=()=>{a(!s)},f=v=>{const y=q8(v,i),w=y.filter(g=>g.isSelected);y[0].isSelected?u("Todos os Modos"):w.length===1?u(w[0].text):u(`${w.length} selecionados`);const S=e.filter(g=>!!w.find(m=>m.text===g.mode));r(S),o(y)},h=async()=>{const v=await t();r(v)};return x.exports.useEffect(()=>{e.length<=0&&h()},[]),k(ti,{children:[k(ei,{text:"modos DE JOGO",children:[c(Fm,{isOpen:s,onClick:d,options:i,text:l,type:"multi",onClickOption:f,style:{minWidth:"12vw"}}),c(Aa,{onClick:h,style:{marginLeft:"0.5vw"}})]}),c(Fn,{style:{gridArea:"2 / 2 / 3 / 3"},children:k("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gridGap:"1rem"},children:["asdas",n.map((v,y)=>x.exports.createElement(gy,{...v,key:y}))]})})]})}function yy(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",fill:"none",viewBox:"0 0 8 8",children:c("path",{fill:"#fff",d:"M1.292 7.043a.334.334 0 01-.317-.227.33.33 0 01-.017-.137l.082-.9L4.82 2l1.181 1.182-3.779 3.78-.9.081c-.01.001-.02.002-.03.001zm4.945-4.099l-1.18-1.18.708-.71a.334.334 0 01.472 0l.709.71a.334.334 0 010 .472l-.709.708z"})})}const wy=P.div`
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 100%;
    margin: 1.1rem;

    :hover {
        cursor: pointer;
    }

    svg {
        width: .8rem;
        height: .8rem;
    }
`;function Qm({...e}){return c(wy,{...e,children:c(yy,{})})}const xy=P.div`
  position: relative;
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  font-size: 0.4rem;
  padding: 8px;
  align-items: flex-end;
  justify-content: flex-end;

  border-radius: 5px;
`,Cy=P.div`
  width: 98%;
  height: 82%;
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 59%;
  left: 2.3%;

  .fix-relative {
    position: relative;
    top: 10px;
    left: -50px;
  }
`,Sy=P.img`
  width: 12.5vh;
  height: 12.5vh;
  border-radius: 100%;
  border: 0.1vh solid ${({theme:e})=>e.colors.main[500]};
  object-fit: cover;
  object-position: center center;
`,ky=P.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`,Py=P.div`
  margin-bottom: 0.4rem;
  h2 {
    color: rgba(255, 255, 255, 0.5);
  }
`,C1=P.div`
  display: flex;
  align-items: baseline;
  gap: 0.4rem;

  h1 {
    font-size: 1.3rem;
  }
`,by=P.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background-color: ${e=>e.isOnline?"#00FF00":"#FF0000"};
`;function Ty({Avatar:e,onClickEdit:t,isEditable:n}){return k(xy,{children:[c(Sy,{src:e}),c("div",{style:{position:"absolute",right:"0.5vw",bottom:"0.5vh"},children:n&&c(Qm,{onClick:t})})]})}function Ey(){const{theme:e}=at();return k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"none",viewBox:"0 0 15 15",children:[c("path",{fill:"#fff",d:"M3.75 4.688h8.438v5.625H3.75V4.686z"}),c("path",{fill:e.colors.main[500],d:"M5.182 15l-1.296-2.286-2.454-.571L1.67 9.5 0 7.5l1.67-2-.238-2.643 2.454-.571L5.182 0 7.5 1.036 9.818 0l1.296 2.286 2.454.571L13.33 5.5 15 7.5l-1.67 2 .238 2.643-2.454.571L9.818 15 7.5 13.964 5.182 15zm1.602-4.964L10.636 6l-.954-1.036L6.784 8 5.318 6.5l-.954 1 2.42 2.536z"})]})}const Ry=P.div`
    position: relative;
    width: 103%;
    height: 17vh;
    padding: 8px;
    display: flex;
    font-size: .4rem;
    margin: -1vh -1vw;

    background-image: url(
        ${e=>e.Background}
    );
    background-size: 100% auto;
    mix-blend-mode: luminosity;
`;P.img`
    width: 100%;
    height: 42%;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
`;function Ay({avatarUrl:e,backgroundUrl:t,isOnline:n,name:r,onClickEditPhotoButton:i,onClickEditBackgroundButton:o,isEditable:s}){return k(Ry,{Background:t,children:[c(Cy,{children:k(ky,{children:[c(Ty,{onClickEdit:i,isEditable:s,Avatar:e}),k(Py,{children:[k(C1,{children:[c("h1",{children:r}),c(Ey,{})]}),k(C1,{children:[k("h2",{children:[n?"Online":"Offline"," agora"]}),c(by,{isOnline:n})]})]})]})}),c("div",{style:{position:"absolute",right:"0",bottom:"0"},children:s&&c(Qm,{onClick:o})})]})}const My=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  background: ${({background:e})=>e};
  border: 0.01vh solid ${({border:e})=>e};
  border-radius: 0.5vw;
  background: ${({background:e})=>e};
  color: white;
  font-size: 1.5vh;

  &:hover {
    cursor: pointer;
  }
`;function S1({children:e,...t}){return c(My,{...t,children:e})}const Ly=P.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,zy=P.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
`,Oy=P.div`
  width: ${({size:e})=>e?typeof e=="number"?`${e}px`:e:"100%"};
  height: ${({size:e})=>e?typeof e=="number"?`${e}px`:"10vh":"100%"};
  border-radius:
    ${({size:e})=>e&&(typeof e=="number"?"100%":"10px")};

  display: flex;
  justify-content: center;
  align-items: ${({size:e})=>e&&typeof e=="number"?"flex-end":"center"};
  padding: 10px 0px;
  color: rgba(255, 255, 255, 0.2);

  background: ${({preview:e})=>e?`url(${e})`:"rgba(255, 255, 255, 0.08)"};
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
`,Ny=P.div`
  width: 100%;
  height: 2.6rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 3fr 2fr;
`;function Iy({isOpen:e,onClose:t,children:n}){return e?c(Ly,{onClick:t,children:c(Fn,{onClick:r=>r.stopPropagation(),children:n})}):null}function $y({isOpen:e,closeOverlayHandler:t,background:n,confirmOverlayHandler:r}){const{theme:i}=at();let o=[];switch(n){case!0:o=[{size:"100%",text:"1244x168"}];break;default:o=[{size:130,text:"130x130"},{size:100,text:"100x100"},{size:70,text:"70x70"}];break}const[s,a]=x.exports.useState("");return x.exports.useEffect(()=>{a("")},[e]),tm.createPortal(c(Iy,{isOpen:e,onClose:t,children:k("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:"2vh",padding:"1.75vh 0.25vw"},children:[k(dd,{style:{width:"max-content"},children:["Adicionar ",n?"background":"foto de perfil"]}),c(zy,{children:o.map((l,u)=>c(Oy,{size:l.size,preview:s,children:s===""&&l.text},u))}),c(Ma,{icon:c(z8,{}),handleChange:l=>a(l.target.value),placeholder:"Cole o link da imagem aqui..."}),k(Ny,{children:[c(S1,{border:i.colors.main[500],background:i.colors["main-opacity"][300],onClick:()=>{s.length>0?r(s):t()},children:"Confirmar"}),c(S1,{border:"#C62B2B",background:"rgba(198, 43, 43, 0.65)",onClick:t,children:"Fechar"})]})]})}),document.getElementById("overlay"))}function _y(){const{profile:e,selfProfile:t,setSelfProfile:n,refreshProfileWithNewData:r}=hd(),[i,o]=x.exports.useState(e),[s,a]=x.exports.useState(!1),[l,u]=x.exports.useState(!0),[d,f]=x.exports.useState(!1),h=()=>{a(!1)},v=()=>{a(!0),f(!0)},y=()=>{a(!0),f(!1)},w=async p=>{const m=parseInt(p.target.value),C=isNaN(m);u(C);const T=await r(m);o(T)},S=async()=>{const p=await r();o(p),n(p)},g=async p=>{const m=t.data;d?(m.backgroundUrl=p,Le("updateBackground",p)):(m.avatarUrl=p,Le("updateAvatar",p)),n({...t,data:m}),a(!1)};return x.exports.useEffect(()=>{S()},[]),k(ti,{children:[c($y,{isOpen:s,closeOverlayHandler:h,confirmOverlayHandler:g,background:d}),k(ei,{text:"meu perfil",children:[l&&c(Aa,{onClick:S,style:{marginRight:"0.5vw"}}),c(Ma,{placeholder:"Pesquisar o perfil de um jogador",onChange:w})]}),k(Fn,{style:{gridArea:"2 / 2 / 3 / 3"},children:[c(Ay,{onClickEditBackgroundButton:v,onClickEditPhotoButton:y,isEditable:l,...i.data}),c(Du,{style:{marginTop:"7.5vh"},children:k("table",{children:[c("thead",{children:k("tr",{children:[c("th",{children:c("div",{className:"rev",children:"Modos De Jogo"})}),c("th",{children:c("div",{className:"rev",children:"Posi\xE7\xE3o"})}),c("th",{children:c("div",{className:"rev",children:"Rank"})}),c("th",{children:k("div",{className:"rev",children:[c(Km,{}),"Matou"]})}),c("th",{children:k("div",{className:"rev",children:[c(Gm,{}),"Morreu"]})}),c("th",{children:k("div",{className:"rev",children:[c(Wm,{}),"Vit\xF3rias"]})}),c("th",{children:k("div",{className:"rev",children:[c(Hm,{}),"Derrotas"]})})]})}),c("tbody",{children:i.ranks.map((p,m)=>k("tr",{children:[c("td",{children:p.gamemode}),k("td",{children:[p.position,"\xBA"]}),c("td",{children:c(nt,{rank:p.rank})}),c("td",{children:p.kills}),c("td",{children:p.deaths}),c("td",{children:p.wins}),c("td",{children:p.losses})]},m))})]})})]})]})}const Fy=P.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  width: 100%;
  height: 100%;
`,Dy=P.div`
  width: 100%;
  height: 30vh;

  padding-right: 0.5vw;

  overflow-y: auto;
`,Vy=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.25vw;
  background: ${({isWinner:e})=>e?"linear-gradient(270deg, rgba(0, 255, 85, 0.14) 0%, rgba(33, 255, 107, 0.15) 93.15%)":"linear-gradient(270deg, rgba(225, 28, 28, 0.14) 0%, rgba(198, 43, 43, 0.15) 93.15%)"};
  border-bottom: 1px solid
    ${({isWinner:e})=>e?"rgba(0, 255, 85, 1)":"rgba(225, 28, 28, 1)"};
  border-radius: 0.75vw;
  padding: 0 1vw;

  margin-bottom: 0.5vw;
`,k1=P.div`
  display: flex;
  align-items: center;
  gap: 0.75vw;
`,P1=P.span`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 0.8vw;
  line-height: 0.8vw;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  align-items: center;
`,Cl=P.span`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 0.875vw;
  font-size: 0.875vw;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5vw;
`,b1=P.div`
  width: 0.15vw;
  height: 0.85vw;

  background: rgba(255, 255, 255, 0.07);
  border-radius: 17px;
`,jy=P.div`
  width: 1.8vw;
  height: 1.8vw;
  
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`,By=P.div`
  height: 0.65vw;
  width: 0.65vw;

  position: absolute;
  right: 0;
  bottom: 0;

  background: ${({isWinner:e})=>e?"#01BD40":"#E42121"};
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;function Uy(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M112 160l-64 64 64 64"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M64 224h294c58.76 0 106 49.33 106 108v20"}}]})(e)}function Xm(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 225.64v99a64 64 0 01-40.23 59.42l-23.68 9.47A32 32 0 00364.6 417l-10 50.14A16 16 0 01338.88 480H173.12a16 16 0 01-15.69-12.86L147.4 417a32 32 0 00-19.49-23.44l-23.68-9.47A64 64 0 0164 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64z"}},{tag:"circle",attr:{cx:"168",cy:"280",r:"40",fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32"}},{tag:"circle",attr:{cx:"344",cy:"280",r:"40",fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 336l-16 48h32l-16-48zm0 112v32m-48-32v32m96-32v32"}}]})(e)}function Hy(e){return je({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M13 4.069V2h-2v2.069A8.008 8.008 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"}}]})(e)}var yi=(e=>(e[e.bronze=0]="bronze",e[e.silver=1]="silver",e[e.gold=2]="gold",e[e.platinum=3]="platinum",e[e.diamond=4]="diamond",e[e.master=5]="master",e[e.immortal=6]="immortal",e))(yi||{});function Wy(e){return je({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M8 5v14l11-7z"}}]})(e)}function Gy(e){return je({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}}]})(e)}function Ky(e){return je({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"}}]})(e)}function hr({points:e,enemyTeam:t,selfTeam:n,deaths:r,kills:i,rank:o}){const s=n.score>t.score,a=yi[o.last]<yi[o.current],l=yi[o.last]===yi[o.current];return k(Vy,{isWinner:s,children:[k(k1,{children:[k(jy,{children:[c(nt,{rank:o.current,style:{width:"100%",height:"100%"}}),!l&&c(By,{isWinner:a,children:a?c(Ky,{}):c(Gy,{})})]}),k(P1,{children:[c("span",{style:{color:s?"#00FF00":"#FF0000"},children:s?"+":"-"}),e,"pts"]}),c(b1,{}),k(Cl,{children:[c("span",{style:{color:s?"#21FF6B":"#E42121"},children:s?"Vit\xF3ria":"Derrota"})," ",k("span",{style:{fontSize:"0.925vw"},children:[n.score," - ",t.score]})]})]}),k(k1,{children:[k(P1,{style:{gap:"0.5vw",textTransform:"uppercase"},children:[c(jm,{size:16}),n.name?n.name:"Sua equipe"]}),c(b1,{}),k(Cl,{children:[c(Hy,{size:16,color:"rgba(255, 255, 255, 0.5)"}),i]}),k(Cl,{children:[c(Xm,{size:14,color:"rgba(255, 255, 255, 0.5)"}),r]})]})]})}const Yy=P.button`
  background: rgba(255, 255, 255, 0.04);
  padding: 0.4vw 0.8vw;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 0.74vw;

  border: none;
  outline: none;
  color: white;
  text-decoration: none;

  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`,Zy=P.div`
  width: 100%;
  border-radius: 0.25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.75vh;
`,Qy=P.div`
  width: 100%;
  height: 1.25vh;
  position: relative;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 100vw;
  overflow: hidden;
`,Xy=P.div`
  width: 50%;
  height: 100%;
  background: #21ff6b;
  top: 0;
  left: 0;
  position: absolute;
  transition: all 0.25s ease;
  border-radius: 100vw;
`,Jy=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 1.5vh;
`,qy=P.div`
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8vw;
  line-height: 1vw;

  text-transform: uppercase;

  color: #ffffff;
`,T1=P.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,e7=P.div`
  display: flex;
  width: 35%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.5vh;
  margin-top: -1.25vh;
`,E1=P.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 0.75vw;

  display: flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.5);

  span {
    color: #fff;
  }
`;function Jm({children:e,returnable:t}){const{theme:n}=at();return k(ti,{children:[c(ei,{text:"PROGRESS\xC3O DE RANK",children:!t&&k(Yy,{as:pr,to:"Preview",children:[c(E8,{color:n.colors.main[500]}),"Ver todos os ranks"]})}),k(Fn,{style:{gridArea:"2 / 2 / 3 / 3",display:"flex",flexDirection:"column",position:"relative",gap:"2vh"},children:[k(Zy,{children:[k(Jy,{children:[c(nt,{rank:"bronze",style:{width:"8vw",height:"8vw"}}),c(qy,{style:{color:Um("bronze")},children:Bm("bronze")})]}),k(e7,{children:[k(T1,{children:[c(nt,{rank:"bronze",style:{width:"1.75vw",height:"1.75vw"}}),c(nt,{rank:"gold",style:{width:"1.75vw",height:"1.75vw"}})]}),c(Qy,{children:c(Xy,{})}),k(T1,{children:[c(E1,{children:"Progresso atual"}),k(E1,{children:[c("span",{children:"1875"}),"/2000 pts"]})]})]})]}),e]})]})}const qm=P.div`
  display: flex;
  flex-direction: column;

  gap: 1vh;
`,e5=P.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.1vw;
  line-height: 1.1vw;

  color: #ffffff;
`,t5=P.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 0.7vw;
  line-height: 0.7vw;

  color: rgba(255, 255, 255, 0.3);
`;function t7(){return c(Jm,{children:k(Fy,{children:[k(qm,{children:[c(e5,{children:"Hist\xF3rico"}),c(t5,{children:"Verifique as \xFAltimas 8 partidas jogadas"})]}),k(Dy,{children:[c(hr,{deaths:5,enemyTeam:{score:10,name:"Team 2"},kills:10,points:100,rank:{current:"bronze",last:"diamond"},selfTeam:{score:0,name:"Team 1"}}),c(hr,{deaths:5,enemyTeam:{score:10,name:"Team 2"},kills:10,points:100,rank:{current:"diamond",last:"bronze"},selfTeam:{score:100,name:"Team 1"}}),c(hr,{deaths:5,enemyTeam:{score:10,name:"Team 2"},kills:10,points:100,rank:{current:"bronze",last:"bronze"},selfTeam:{score:10,name:"Team 1"}}),c(hr,{deaths:5,enemyTeam:{score:10,name:"Team 2"},kills:10,points:100,rank:{current:"bronze",last:"bronze"},selfTeam:{score:10,name:"Team 1"}}),c(hr,{deaths:5,enemyTeam:{score:10,name:"Team 2"},kills:10,points:100,rank:{current:"bronze",last:"bronze"},selfTeam:{score:10,name:"Team 1"}}),c(hr,{deaths:5,enemyTeam:{score:10,name:"Team 2"},kills:10,points:100,rank:{current:"bronze",last:"bronze"},selfTeam:{score:10,name:"Team 1"}})]})]})})}const n7=P.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  width: 100%;
  height: 100%;
`,r7=P.div`
  display: flex;

  gap: 1vw;
  width: 100%;
  height: 100%;
`,R1=P.div`
  background: rgba(255, 255, 255, 0.04);
  border: 0.1vw solid rgba(255, 255, 255, 0.04);
  border-radius: 0.25vw;
  width: 65%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,i7=P.div`
  display: flex;
  align-items: center;
  padding: 1vw;
  gap: 1.3rem;
  width: 43%;
`,o7=P.div`
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 600;
  font-size: .9vw;
  line-height: 2.5vw;
  text-transform: uppercase;
`,s7=P.div`
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 600;
  font-size: .9vw;
  line-height: 2.5vw;
  color: #C57A4C;
`,a7=P.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`,l7=P.div`
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 43px;
`,u7=P.div`
  font-family: 'Rajdhani';
  font-weight: 700;
  font-size: 1.8vw;
  color: #FF4800;
`;function c7(){return c(Jm,{returnable:!0,children:k(n7,{children:[k(qm,{children:[c(e5,{children:"Ranks"}),c(t5,{children:"Verifique o MMR necess\xE1rio para cada rank"})]}),k(r7,{children:[c(R1,{children:["bronze","silver","gold","platinum","diamond","immortal"].map(e=>k(i7,{children:[c(nt,{rank:e,style:{height:"2.6vw",width:"2.6vw"}}),k(a7,{children:[c(o7,{children:e}),c(s7,{children:"0 - 999"})]})]},e))}),k(R1,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"60%"},children:[c(nt,{rank:"immortal",style:{height:"8vw",width:"8vw",marginBottom:".3vw"}}),c(l7,{children:"IMORTAL"}),c(u7,{children:"10000+ PONTOS"})]})]})]})})}const A1=P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5vh 0;
`;function d7(){const{theme:e}=at();return c("svg",{width:"19",height:"14",viewBox:"0 0 19 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M18.9575 10.6392C18.9579 10.6355 18.9579 10.6318 18.9575 10.6281L17.6596 3.93273C17.6596 3.92795 17.6596 3.92318 17.6596 3.91841C17.4593 2.81913 16.8818 1.82515 16.0275 1.10927C15.1732 0.39339 14.0962 0.000887032 12.9837 3.5211e-07H6.00668C4.89107 -0.000430362 3.81103 0.394302 2.95652 1.11477C2.10201 1.83524 1.52774 2.83531 1.33473 3.93909L0.0432079 10.6281C0.0428265 10.6318 0.0428265 10.6355 0.0432079 10.6392C-0.061917 11.2388 0.0259519 11.8565 0.294057 12.4026C0.562162 12.9486 0.996547 13.3946 1.53414 13.6758C2.07174 13.957 2.68457 14.0588 3.28364 13.9663C3.88272 13.8738 4.43686 13.5919 4.86562 13.1616L4.89333 13.1322L8.03621 9.54545H10.9661L14.1105 13.1322C14.1193 13.1425 14.1288 13.152 14.1383 13.1616C14.6726 13.6972 15.3963 13.9986 16.1512 14C16.5673 13.9997 16.9783 13.908 17.3553 13.7311C17.7323 13.5543 18.0663 13.2967 18.3336 12.9764C18.601 12.6561 18.7953 12.2809 18.903 11.8772C19.0106 11.4734 19.0289 11.0508 18.9567 10.6392H18.9575ZM7.59911 5.72727H6.96562V6.36364C6.96562 6.53241 6.89888 6.69427 6.78008 6.81361C6.66128 6.93296 6.50015 7 6.33214 7C6.16412 7 6.003 6.93296 5.88419 6.81361C5.76539 6.69427 5.69865 6.53241 5.69865 6.36364V5.72727H5.06516C4.89715 5.72727 4.73602 5.66023 4.61722 5.54089C4.49842 5.42155 4.43168 5.25968 4.43168 5.09091C4.43168 4.92214 4.49842 4.76027 4.61722 4.64093C4.73602 4.52159 4.89715 4.45455 5.06516 4.45455H5.69865V3.81818C5.69865 3.64941 5.76539 3.48755 5.88419 3.36821C6.003 3.24886 6.16412 3.18182 6.33214 3.18182C6.50015 3.18182 6.66128 3.24886 6.78008 3.36821C6.89888 3.48755 6.96562 3.64941 6.96562 3.81818V4.45455H7.59911C7.76712 4.45455 7.92825 4.52159 8.04705 4.64093C8.16585 4.76027 8.23259 4.92214 8.23259 5.09091C8.23259 5.25968 8.16585 5.42155 8.04705 5.54089C7.92825 5.66023 7.76712 5.72727 7.59911 5.72727ZM10.7665 5.09091C10.7665 4.92214 10.8333 4.76027 10.9521 4.64093C11.0709 4.52159 11.232 4.45455 11.4 4.45455H13.3005C13.4685 4.45455 13.6296 4.52159 13.7484 4.64093C13.8672 4.76027 13.934 4.92214 13.934 5.09091C13.934 5.25968 13.8672 5.42155 13.7484 5.54089C13.6296 5.66023 13.4685 5.72727 13.3005 5.72727H11.4C11.232 5.72727 11.0709 5.66023 10.9521 5.54089C10.8333 5.42155 10.7665 5.25968 10.7665 5.09091ZM17.4474 12.0487C17.3288 12.2204 17.1774 12.3666 17.002 12.479C16.8267 12.5914 16.6309 12.6676 16.4259 12.7034C16.178 12.747 15.9234 12.7308 15.6829 12.6563C15.4424 12.5817 15.2229 12.451 15.0426 12.2747L12.6512 9.54545H12.9837C13.7925 9.54556 14.5879 9.33828 15.2946 8.94322C16.0014 8.54817 16.596 7.97842 17.0222 7.28795L17.7143 10.8675C17.7495 11.0723 17.7441 11.2822 17.6983 11.4849C17.6525 11.6876 17.5672 11.8793 17.4474 12.0487Z",fill:e.colors.main[500]})})}function f7(){const{theme:e}=at();return c("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M16.9128 15.68C16.8554 15.7773 16.7728 15.8581 16.6734 15.9143C16.574 15.9705 16.4612 16 16.3464 16H0.653212C0.538488 15.9999 0.425815 15.9702 0.326506 15.914C0.227196 15.8578 0.144747 15.777 0.087436 15.6798C0.0301252 15.5825 -2.94314e-05 15.4722 2.1555e-08 15.3599C2.94745e-05 15.2477 0.0302419 15.1374 0.0876037 15.0401C1.33243 12.934 3.25076 11.4238 5.48949 10.7079C4.38211 10.0628 3.52175 9.07972 3.04052 7.90974C2.5593 6.73975 2.48382 5.44752 2.82569 4.23149C3.16755 3.01546 3.90784 1.94287 4.93289 1.17844C5.95794 0.414005 7.21105 0 8.49979 0C9.78854 0 11.0417 0.414005 12.0667 1.17844C13.0917 1.94287 13.832 3.01546 14.1739 4.23149C14.5158 5.44752 14.4403 6.73975 13.9591 7.90974C13.4778 9.07972 12.6175 10.0628 11.5101 10.7079C13.7488 11.4238 15.6672 12.934 16.912 15.0401C16.9695 15.1373 16.9999 15.2477 17 15.36C17.0001 15.4723 16.9701 15.5827 16.9128 15.68Z",fill:e.colors.main[500]})})}function M1(){return c("thead",{children:k("tr",{children:[c("th",{children:c("div",{className:"rev",children:c(Y8,{style:{height:"1.25vh",width:"1.25vh"}})})}),c("th",{children:c("div",{className:"rev",children:"ID"})}),c("th",{children:c("div",{className:"rev",children:"Nome do jogador"})}),c("th",{children:c("div",{className:"rev",children:"Rank"})}),c("th",{children:k("div",{className:"rev",children:[c(Km,{}),"Matou"]})}),c("th",{children:k("div",{className:"rev",children:[c(Gm,{}),"Morreu"]})}),c("th",{children:k("div",{className:"rev",children:[c(Wm,{}),"Vit\xF3rias"]})}),c("th",{children:k("div",{className:"rev",children:[c(Hm,{}),"Derrotas"]})})]})})}function h7(){const{disponibleGamemodes:e,selfProfile:t,refreshGlobalRankGamemode:n,refreshGlobalWithNewData:r,searchUserRanking:i,refreshProfileWithNewData:o}=hd(),[s,a]=x.exports.useState(),[l,u]=x.exports.useState({data:[],totalPages:0}),[d,f]=x.exports.useState(!1),[h,v]=x.exports.useState(-1),[y,w]=x.exports.useState([]),[S,g]=x.exports.useState(1),[p,m]=x.exports.useState(!1),C=async j=>{const W=t.ranks.find(J=>J.gamemode===j);W&&a(W),g(1);const Z=await n(j,1);u(Z)},T=()=>{f(!d)},R=j=>{if(j!==h){v(j);var W;y.length>0?W=y.map((Z,J)=>({...Z,isSelected:J===j})):W=e.map(Z=>({text:Z,isSelected:Z===e[j]})),w(W),C(W[j].text),m(!1)}},A=async j=>{const W=await n(y[h].text,j);u(W),g(j)},E=async()=>{const j=await r(y[h].text);u(j),g(1),m(!1)},$=async j=>{const W=j.target.value,Z=W.length>0;if(m(Z),Z){const J=await i(parseInt(W),y[h].text);J&&u({data:J,totalPages:0})}else await C(y[h].text)},F=async()=>{await R(0),await o(),y[h]&&await n(y[h].text,1)};return x.exports.useEffect(()=>{F()},[]),k(ti,{children:[k(ei,{text:"tabela de rank geral",children:[c(Ma,{onChange:$,placeholder:"Pesquisar o perfil de um jogador"}),c(Aa,{style:{marginLeft:"0.5vw"},onClick:E})]}),k(Fn,{style:{gridArea:"2 / 2 / 3 / 3",display:"flex",flexDirection:"column"},children:[c(A1,{children:c(Fm,{isOpen:d,onClick:T,options:y,text:y.length>0?y[h].text:"",type:"single",onClickOption:R,preMounter:k("div",{className:"mounter",children:[k("b",{children:[c(d7,{}),c("span",{children:"Modo de jogo:"})]}),c("div",{className:"text",children:y.length>0?y[h].text:""})]}),style:{borderLeftWidth:d?"0.0vh":"0.1vh"}})}),c(Du,{style:{height:"100%"},children:k("table",{children:[c(M1,{}),c("tbody",{children:l.data.map((j,W)=>k("tr",{children:[k("td",{children:[j.position,"\xBA"]}),c("td",{children:j.id}),c("td",{children:j.name}),c("td",{children:c(nt,{rank:j.rank})}),c("td",{children:j.kills}),c("td",{children:j.deaths}),c("td",{children:j.wins}),c("td",{children:j.losses})]},W))})]})}),k(A1,{children:[k(dd,{style:{fontFamily:"Poppins",fontSize:"1.3vh",fontWeight:"normal",textTransform:"capitalize",padding:"0 0.8vw"},children:[c(f7,{}),c("span",{style:{marginLeft:"0.5vw"},children:"Sua coloca\xE7\xE3o"})]}),!p&&c(J8,{onPageChange:A,page:S,totalPages:l.totalPages})]}),c(Du,{children:k("table",{children:[c(M1,{}),c("tbody",{children:s&&k("tr",{children:[k("td",{children:[s.position,"\xBA"]}),c("td",{children:t.data.id}),c("td",{children:t.data.name}),c("td",{children:c(nt,{rank:s.rank})}),c("td",{children:s.kills}),c("td",{children:s.deaths}),c("td",{children:s.wins}),c("td",{children:s.losses})]})})]})})]})]})}const p7=P.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1vw;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 0.5vw;
  }
  h2 {
    font-size: 0.75vw;
    color: #FFFFFF;
    opacity: 0.3;
  }
`;function Vu({children:e,subContent:t}){return k(p7,{children:[c("h1",{children:e}),c("h2",{children:t})]})}function m7(e){return je({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm127.978 274.82-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 0 0-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 0 0 0 .07l.01.022a.268.268 0 0 0 .049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 0 0 0 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 0 0 0-.07l-.01-.022a.268.268 0 0 0-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 0 0 0-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02c-.04-.04-.06-.05-.083-.058a.118.118 0 0 0-.07 0Z"}}]})(e)}function g7(e){return je({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"}}]})(e)}function v7(e){return je({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885 780H165c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM400 325.7h73.9V664c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V325.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 171a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13z"}}]})(e)}const y7=P(fd)`
  display: flex;
  justify-content: space-between;

  &:hover {
    opacity: 0.8;
  }
`,w7=P.button`
  border: none;
  outline: none;

  width: 1.5vw;
  height: 1.25vw;

  background: #AB2121;
  border-radius: 0.35vw;
  color: white;
  font-size: 0.8vw;
  line-height: 0.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
`,x7=P.div`
  display: flex;
  align-items: center;
  width: 100%;

  gap: 0.5vw;

  img {
    width: 1.25vw;
    height: 1.25vw;
    border-radius: 200vw;
  }
`;function C7({avatar:e,name:t,onClick:n,canManage:r}){return k(y7,{as:"div",children:[k(x7,{children:[c("img",{src:e}),t]}),r&&c(w7,{onClick:n,children:c(m7,{})})]})}const n5=P.div`
  display: flex;
  align-items: center;
  padding: 0vh 0.5vw 0vh 1vw;

  background: rgba(255, 255, 255, 0.04);
  border-radius: 0.5vw;
`;P(n5)`
  justify-content: center;
  height: 6vh;

  font-size: 0.9vw;
  line-height: 0.9vw;
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 600;

  white-space: nowrap;
`;const S7=P.div`
  font-size: 0.8vw;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;

  width: 100%;
`,k7=P.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5vw;
`,P7=P.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.5vw;
  font-size: 0.725vw;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.02);
  height: 100%;
  padding: 1.5vh 1.25vw;

  span {
    font-size: 0.725vw;
    color: #ffffff;
    font-weight: 600;
  }
`,pd=P.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  white-space: nowrap;

  border-radius: 0.5vw;
  border: none;
  padding: 0.5vh 0.9vw;
  font-size: 0.625vw;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  gap: 0.25vw;

  ${({unactive:e})=>e&&`
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.04);
      cursor: not-allowed;
    `}

  transition: all 0.3s;
  ${({unactive:e})=>!e&&`
      &:hover {
        opacity: 0.8;
      }
  `}
`,b7=P(pd)`
  background: ${({theme:e})=>e.colors.main[500]};
`,L1=P(pd)`
  background: #ab2121;
`,T7=P.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5vw;
  width: 13vw;
`;function jt({id:e,isOwner:t,name:n,players:r,max:i}){const[o,s]=x.exports.useState(!1),a=r.length>=i,l=x.exports.useRef(null),{t:u}=$n();return k(n5,{children:[c(S7,{children:n}),k(k7,{children:[k(P7,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),ref:l,children:[u("members"),":"," ",k("span",{children:[r.length,"/",i]}),o&&k(Vm,{style:{width:"12.5vw",position:"absolute",left:"-2.5vw",top:"5vh"},onMouseEnter:()=>s(!0),onMouseLeave:d=>{var f,h;s((h=(f=l.current)==null?void 0:f.contains(d.relatedTarget))!=null?h:!1)},children:[c(Dm,{children:c("span",{style:{fontWeight:500,fontSize:"0.85vw"},children:u("all_members")})}),c($m,{children:c("div",{style:{marginTop:"4.1vh",padding:"1vh 0.8vw 2vh 0.8vw"},children:r.map((d,f)=>c(C7,{canManage:t,...d}))})})]})]}),t?k(T7,{children:[a?c(pd,{unactive:!0,children:u("team_full")}):k(b7,{children:[c(g7,{}),u("invite")]}),k(L1,{children:[c(R8,{}),u("delete_team")]})]}):c(L1,{children:u("leave_team")})]})]})}const E7=P.div`
  font-size: 0.8vw;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
`,R7=P.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 100%;
  border-top-right-radius: 0.5vw;
  border-bottom-right-radius: 0.5vw;

  padding: 0 0.5vw;
`,A7=P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6vh;
  padding-left: 1vw;
  margin-bottom: 0.75vh;

  border-radius: 0.5vw;
  background: rgba(255, 255, 255, 0.04);

  hr {
    border: 0;
    height: 1.35vh;
    width: 0.2vw;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 2vw;
  }
  
  span {
    position: relative;
    font-size: 0.9vw;
    line-height: 0.9vw;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;

    white-space: nowrap;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`,z1=P.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1vw;
  height: 100%;
  width: 100%;
`,M7=P.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &, span {
    font-size: 0.9vw;
    line-height: 0.9vw;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
  }

  .opacity {
    color: rgba(255, 255, 255, 0.5);
    margin-right: 0.25vw;
  }

  .green {
    color: #21FF6B;
    margin-left: 0.25vw;
  }

  .ball {
    width: 0.25vw;
    height: 0.25vw;
    border-radius: 200vw;
    background: #21FF6B;
    margin-left: 0.25vw;
  }
`,L7=P(fo)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  font-size: 0.75vw;
  line-height: 0.75vw;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;

  padding: 0.5vw 0.8vw 0.5vw 1.25vw;
`;function z7({name:e,players:t,max:n,rank:r,points:i}){return k(A7,{children:[k(z1,{style:{background:K8(r)},children:[k(z1,{children:[c(E7,{children:e}),c("hr",{}),k(M7,{children:[t.length,k("span",{className:"opacity",children:["/",n]})," Jogadores ",c("span",{className:"green",children:"online"})," ",c("div",{className:"ball"})]})]}),k("span",{style:{gap:"0.5vw",marginRight:"0.5vw"},children:[c("span",{style:{color:Um(r)},children:Bm(r).toUpperCase()})," ",i,"pts ",c(nt,{rank:r})]})]}),c(R7,{children:k(L7,{children:["JOGAR ",c(Wy,{})]})})]})}const O1=P.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  height: 100%;

  overflow-y: scroll;
  padding-right: 0.5vw;
  margin-top: 0.5vw;
`;function O7(){const{theme:e}=at();return k(ti,{children:[c(ei,{text:"todos os times"}),k(Fn,{style:{gridArea:"2 / 2 / 3 / 3",display:"flex",flexDirection:"column",padding:"1vw"},children:[k(Vu,{subContent:"Veja os times que voc\xEA \xE9 dono",children:["Meus times ",c(T8,{color:e.colors.main[500]})]}),k(O1,{children:[c(jt,{id:1,isOwner:!0,max:10,players:[{avatar:"https://i.imgur.com/0y8Ftya.png",name:"Jogador 1",id:1},{avatar:"https://i.imgur.com/0y8Ftya.png",name:"Jogador 2",id:2}],name:"NOME TIME",points:100,rank:"bronze"}),c(jt,{id:1,isOwner:!0,max:0,players:[],name:"NOME TIME",points:100,rank:"bronze"})]}),c(Vu,{subContent:"Times que voc\xEA faz parte",children:"Outros times"}),k(O1,{children:[c(jt,{id:1,max:10,players:[{avatar:"https://i.imgur.com/0y8Ftya.png",name:"Jogador 1",id:1},{avatar:"https://i.imgur.com/0y8Ftya.png",name:"Jogador 2",id:2}],name:"NOME TIME",points:100,rank:"bronze"}),c(jt,{id:1,max:10,players:[],name:"NOME TIME",points:100,rank:"bronze"}),c(jt,{id:1,max:10,players:[],name:"NOME TIME",points:100,rank:"bronze"}),c(jt,{id:1,max:10,players:[],name:"NOME TIME",points:100,rank:"bronze"}),c(jt,{id:1,max:10,players:[],name:"NOME TIME",points:100,rank:"bronze"}),c(jt,{id:1,max:10,players:[],name:"NOME TIME",points:100,rank:"bronze"}),c(jt,{id:1,max:10,players:[],name:"NOME TIME",points:100,rank:"bronze"})]})]})]})}const N7=P.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5vw;

`,I7=P(fo)`
  justify-content: center;
  color: #FFFFFF;

  height: 2vw;
  width: 2vw;
`,$7=P.ul`
  height: 100%;

  overflow-y: auto;
  padding-right: 0.75vw;
`;function _7(){const{t:e}=$n();let{uuid:t}=Bv();const n=co(),[r,i]=x.exports.useState([]),[o,s]=x.exports.useState([]),a=u=>{const d=u.target.value;if(d.length>0){const h=r.filter(v=>v.name.toLowerCase().includes(d.toLowerCase()));s(h)}else s(r)},l=()=>{Le("getDisponibleTeams",{uuid:t},[{id:1,max:5,name:"Time 1",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 2",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 3",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 4",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 5",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 6",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 7",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 6",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 7",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 6",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 7",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 6",players:[],rank:"bronze",points:0},{id:1,max:5,name:"Time 7",players:[],rank:"bronze",points:0}]).then(u=>{i(u),s(u)})};return x.exports.useEffect(()=>{l()},[]),k(ti,{children:[k(ei,{text:"modos de jogo",children:[c(Ma,{placeholder:e("search_by_team"),onChange:a}),c(Aa,{onClick:l,style:{marginLeft:"0.5vw"}})]}),k(Fn,{style:{gridArea:"2 / 2 / 3 / 3",display:"flex",flexDirection:"column",padding:"1vw",gap:"1vh",height:"100%"},children:[k(N7,{children:[c(I7,{onClick:()=>{n(-1)},children:c(Uy,{})}),c(Vu,{subContent:e("all_teams_ready"),children:e("teams")})]}),c($7,{children:o.map((u,d)=>c(z7,{...u},d))})]})]})}const F7=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: max-content;
  padding: 20px;

  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid ${({theme:e})=>e.colors.main[500]};
  border-radius: 15px;
`,D7=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`,V7=P.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 15px;
  overflow: hidden;

  thead {
    background: rgba(255, 255, 255, 0.04);
    border-radius: 10px;

    tr, th {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: .8rem;
      line-height: 24px;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  th, td {
    padding: 5px;
    text-align: center;
  }

  tr, td {
    font-size: .9rem;

    .positive {
      color: #00FF55;
    }
    .negative {
      color: #FF4545;
    }
  }

  .winner {
    background:  rgba(1, 189, 64, 0.3);
  }

  .winner:nth-child(even) {
    background: rgba(1, 189, 64, 0.15);
  }

  .lose {
    background:  rgba(255, 69, 69, 0.2);
  }

  .lose:nth-child(even) {
    background:  rgba(255, 69, 69, 0.1);
  }
`,N1=P.div`
  margin-top: 18px;
`,Sl=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,j7=P.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #00FF55;
`,B7=P.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #FF4545;
`,U7=P.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  margin-right: 20px;
  margin-left: 20px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 20%;
    width: 65%;
    height: .1rem;
    background: #00FF55;
    border-radius: 0px 0px 1.5px 1.5px;
  }
`,H7=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  gap: 10px;
  margin-top: 15px;
`,I1=P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }
`,W7=P.div`
  width: 100%;
  height: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    background: rgba(33, 255, 107, 0.5);
    border-radius: 15px;
    overflow: hidden;
    z-index: 1;
  }
`,G7=P.div`
  width: 20%;
  height: 100%;
  background: rgba(33, 255, 107, 1);
  border-radius: 15px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`,K7=P.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #FFFFFF;
  position: absolute;
  right: 0;
  top: -1.4rem;
  z-index: 3;
`;function Y7(e){return je({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M944 224c-44.192 0-79.999 35.824-79.999 80 0 9.072 1.84 17.632 4.607 25.76L673.6 497.68C659.92 486.784 642.848 480 624 480c-21.743 0-41.407 8.736-55.808 22.816l-152.752-76.48C412.465 384.848 378.241 352 336 352c-44.175 0-80 35.824-80 80 0 12.096 2.88 23.44 7.68 33.712L107.936 645.296C99.2 642.032 89.872 640 80 640c-44.176 0-80 35.824-80 80s35.824 80 80 80 80-35.824 80-80c0-10.64-2.176-20.767-5.952-30.048l158.272-181.92C319.856 510.368 327.696 512 336 512c23.28 0 44.047-10.112 58.671-26l149.408 74.912C544.608 604.656 580.127 640 624 640c44.193 0 80-35.824 80-80 0-1.424-.336-2.752-.416-4.16L911.68 377.072C921.584 381.456 932.463 384 944 384c44.193 0 80-35.808 80-80 0-44.176-35.807-80-79.999-80z"}}]})(e)}const Z7=P.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;function Q7(){return k(Z7,{children:[k(D7,{children:[c(j7,{children:"5 "}),c(U7,{children:"VIT\xD3RIA"}),c(B7,{children:" 8"})]}),c(F7,{children:k(V7,{children:[c("thead",{children:k("tr",{children:[c("th",{children:c(Y7,{})}),c("th",{children:"NOME DO JOGADOR"}),c("th",{children:"RANK"}),c("th",{children:k(Sl,{children:[c(E6,{}),"MATOU"]})}),c("th",{children:k(Sl,{children:[c(Xm,{}),"MORREU"]})}),c("th",{children:k(Sl,{children:[c(v7,{}),"PONTOS"]})})]})}),c(N1,{}),k("tbody",{children:[Array.from(Array(5).keys()).map((e,t)=>k("tr",{className:"winner",children:[k("td",{children:[t+1,"\xB0"]}),c("td",{children:"NORRIS SANTA GROUP"}),c("td",{children:c(nt,{rank:"bronze"})}),c("td",{children:"8"}),c("td",{children:"5"}),k("td",{children:[t===1?c("span",{className:"positive",children:"+"}):c("span",{className:"negative",children:"-"}),"8"]})]},t)),c(N1,{}),Array.from(Array(5).keys()).map((e,t)=>k("tr",{className:"lose",children:[k("td",{children:[t+1,"\xB0"]}),c("td",{children:"NORRIS SANTA GROUP"}),c("td",{children:c(nt,{rank:"bronze"})}),c("td",{children:"8"}),c("td",{children:"5"}),k("td",{children:[t===1?c("span",{className:"positive",children:"+"}):c("span",{className:"negative",children:"-"}),"8"]})]},t))]})]})}),k(H7,{children:[k(I1,{children:[c(nt,{style:{width:"2rem",height:"2rem"},rank:"bronze"}),c(nt,{style:{width:"2rem",height:"2rem"},rank:"silver"})]}),c(W7,{children:c(G7,{children:c(K7,{children:"+200"})})}),k(I1,{children:[c("span",{children:"Progresso atual"}),c("span",{children:"1875/2000 pts"})]})]})]})}P.div`
  background: linear-gradient(
    180deg,
    rgba(255, 184, 29, 0.12) 0%,
    rgba(255, 184, 29, 0) 100%
  );
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
`;P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90rem;
  height: 50rem;
  position: relative;

  background: rgba(0, 0, 0, 0.67);

  .exit {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    right: -1%;
    top: -2%;
    background: #0c0801;
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      cursor: pointer;
    }
  }

  .header {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 2rem;
    background: rgba(0, 0, 0, 0.46);

    &-logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 100%;
      padding-left: 2%;
      font-size: 1rem;

      img {
        width: 30rem;
        height: 25rem;
      }
    }

    &-categorys {
      display: flex;
      gap: 1rem;
      font-size: 0.6rem;

      &-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        cursor: pointer;
        transition: 0.2s;
        background: rgba(255, 255, 255, 0.04);

        :hover {
          opacity: 0.8;
          background: ${({theme:e})=>e.colors.main[500]};
          box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);

          h1 {
            color: #0c0801;
            opacity: 1;
          }
        }
      }
    }
  }

  .lobby {
    height: 86%;
    width: 96%;

    &-arenas {
      display: flex;
      width: 100%;
      height: 100%;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      overflow: auto;
      padding: 1.6rem;

      ::-webkit-scrollbar {
        display: none;
      }

      #item {
        visibility: hidden;
      }
      &-item:hover #item {
        visibility: ${e=>e.visible?"hidden":"visible"};
      }

      &-item {
        display: flex;
        flex-direction: column;
        font-size: 0.6rem;
        width: 21%;
        height: 27%;
        opacity: 0.8;
        transition: 0.2s;

        &-header {
          background: rgba(0, 0, 0, 0.89);
          text-align: center;
        }
        &-select {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 80%;
          font-size: 0.5rem;
        }
        &-footer {
          display: flex;
          align-items: baseline;
          justify-content: end;
          gap: 0.4rem;
          font-size: 1rem;
          padding-right: 1rem;
        }

        :hover {
          cursor: pointer;
          opacity: 1;
          box-shadow: 0px 0px 16px ${({theme:e})=>e.colors.main[500]};
        }
      }
    }
  }
`;P.div`
  background: url(${e=>e.bg}) no-repeat center;
  background-size: 100% 100%;
`;const X7=P.div`
  height: 100vh;
  width: 100vw;
  padding: 2vh 1vw;
`,J7=P.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
`,q7=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0.5vh;
  box-shadow: 0 0 0.5vh 0.1vh rgba(0, 0, 0, 0.5);

  padding: 1vh 1vw;

  b {
    font-weight: bold;
    color: ${({theme:e})=>e.colors.main[500]};
  }

  h1 {
    font-size: 1.2vh;
  }

  h2 {
    font-size: 1vh;
    margin-top: 0.1vh;
  }
`,e9=P.div`
  margin-top: 0.5vh;
  font-size: 1vh;
`;function t9(){const{t:e}=$n(),[t,n]=x.exports.useState("corrida armada"),[r,i]=x.exports.useState(5),[o,s]=x.exports.useState("F7");return Ce("updateQueueData",a=>{n(a.gamemode),i(a.remainingPlayers),s(a.buttonText||"F7")}),c(X7,{children:k(J7,{children:[k(q7,{children:[k("h1",{children:[e("you_are_in_queue")," ",c("b",{children:t})]}),k("h2",{children:[k("b",{children:[" ",e("players_left")," "]})," ",e("to_be_start")]})]}),k(e9,{children:[" ",e("press")," ",o," ",e("to_cancel")]})]})})}function n9(){return c(Jn,{children:k(o6,{children:[c(_e,{path:"/",element:c(v1,{})}),c(_e,{path:"/GunGame",element:c(l8,{})}),c(_e,{path:"/GunGameQueue",element:c(t9,{})}),c(_e,{path:"/AimLabs",element:c(C6,{})}),c(_e,{path:"/DominationProvisional",element:c(i8,{})}),c(_e,{path:"/Arena",element:c(A6,{})}),c(_e,{path:"/ArenaProvisional",element:c(v1,{})}),c(_e,{path:"/Score",element:c(Q7,{})}),c(_e,{path:"/Lobby",element:c(r6,{to:"/Lobby/Gamemodes"})}),c(_e,{path:"/Lobby/Gamemodes",element:c(vy,{})}),c(_e,{path:"/Lobby/Teams/Gamemodes/:uuid",element:c(_7,{})}),c(_e,{path:"/Lobby/Profile",element:c(_y,{})}),c(_e,{path:"/Lobby/Ranking",element:c(h7,{})}),c(_e,{path:"/Lobby/Ranks",element:c(t7,{})}),c(_e,{path:"/Lobby/Ranks/Preview",element:c(c7,{})}),c(_e,{path:"/Lobby/Teams",element:c(O7,{})})]})})}P.div`
  display: flex;

  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 4px ${({theme:e})=>e.colors["main-opacity"][50]};

  border-radius: 8px 0px 0px 8px;

  font-size: 8px;
  overflow: hidden;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme:e})=>e.colors["main-opacity"][600]};

    padding: 0.6rem;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
    padding: 0 1rem;

    h1 {
      font-weight: 800;
    }
  }
`;const r9=P.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  width: 10rem;
  height: 3rem;
  left: 0;
  top: ${e=>e.top}%;
  font-size: 1.2rem;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;

  border-radius: 0 20px 20px 0;

  background: rgba(0, 0, 0, 0.67);

  .shortcut {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 100%;
    border-radius: 0 20px 20px 0;
    background: ${({theme:e})=>e.colors["main-opacity"][600]};
  }
`;function eo({text:e,shortcut:t,altura:n}){return k(r9,{top:n,children:[c("div",{className:"shortcut",children:c("span",{children:t})}),e]})}const i9=P.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @keyframes bounceY {
    0% {
      transform: scaleX(1) translateY(0);
    }
    50% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: scaleX(-1) translateY(0);
    }
  }

  @keyframes bounceX {
    0% {
      transform: scaleX(1) translateY(0);
    }
    50% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: scaleX(-1) translateY(0);
    }
  }

  .flag-scaleX {
    animation: bounceX 1.2s infinite alternate;
  }
  .flag-scaleY {
    animation: bounceY 1.2s infinite alternate;
  }

  .timer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
    }
    span {
      font-size: 0.8rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;function $1({rotate:e,size:t,scaleX:n}){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||50,fill:"none",viewBox:"0 0 50 50",className:n?"flag-scaleX":"flag-scaleY",style:{transform:`rotate(${e}deg)`},children:c("path",{fill:"#fff",d:"M34.756 49.537l2.1-.929a1.723 1.723 0 00.88-2.272l-1.188-2.688A21.457 21.457 0 0045.37 33.06a21.451 21.451 0 00.6-13.77l2.687-1.188a1.723 1.723 0 00.879-2.272l-.929-2.101a1.723 1.723 0 00-2.272-.879l-2.688 1.188A21.454 21.454 0 0033.06 5.215a21.45 21.45 0 00-13.77-.6l-1.188-2.687a1.723 1.723 0 00-2.272-.879l-2.101.929a1.723 1.723 0 00-.88 2.272l1.19 2.688a21.453 21.453 0 00-8.823 10.588 21.452 21.452 0 00-.6 13.77l-2.688 1.188a1.723 1.723 0 00-.879 2.272l.929 2.1a1.723 1.723 0 002.272.88l2.688-1.188a21.453 21.453 0 0010.588 8.823 21.451 21.451 0 0013.77.6l1.188 2.687a1.723 1.723 0 002.272.879zm-15.158-9.522a15.67 15.67 0 01-7.343-5.818l2.276-1.007a1.723 1.723 0 00.88-2.272l-.93-2.1a1.723 1.723 0 00-2.272-.88l-2.276 1.007a15.67 15.67 0 01.638-9.347 15.669 15.669 0 015.818-7.343l1.007 2.277a1.723 1.723 0 002.272.879l2.1-.93a1.723 1.723 0 00.88-2.271L21.64 9.933a15.67 15.67 0 019.347.638 15.67 15.67 0 017.343 5.818l-2.277 1.007a1.723 1.723 0 00-.879 2.272l.93 2.101a1.723 1.723 0 002.271.879l2.277-1.006a15.67 15.67 0 01-.638 9.346 15.67 15.67 0 01-5.818 7.343l-1.007-2.277a1.723 1.723 0 00-2.272-.879l-2.101.93a1.723 1.723 0 00-.879 2.272l1.007 2.276a15.67 15.67 0 01-9.347-.638z"})})}function _1({scaleX:e}){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",fill:"none",className:e?"flag-scaleX":"flag-scaleY",viewBox:"0 0 70 70",children:c("path",{fill:"#fff",d:"M59.862 47.465l-.889.35a1.663 1.663 0 01-2.157-.938L42.502 10.525a2.079 2.079 0 011.173-2.696l.115-.045a2.079 2.079 0 012.696 1.173L60.8 45.308a1.663 1.663 0 01-.938 2.157zM14.469 48.832a39.837 39.837 0 003.505-10.556.819.819 0 00-.319-.807A117.852 117.852 0 015.8 26.806c-.613-.638-.391-1.13.371-.95C21.058 29.29 26.217 8.001 40.694 10.408c.04.254.11.503.205.741l9.295 23.595C35.781 32.45 30.618 53.635 15.76 50.21c-.761-.18-1.502-1.002-1.29-1.378z"})})}function r5({time:e,title:t,setTime:n}){return x.exports.useEffect(()=>{const r=setInterval(()=>{n(e-1)},1e3);return()=>clearInterval(r)}),k(i9,{children:[t==="DOMINA\xC7\xC3O"?c(_1,{scaleX:!1}):c($1,{rotate:60,scaleX:!1}),k("div",{className:"timer",children:[c("h1",{children:t}),k("span",{children:["Partida iniciando em ",e]})]}),t==="DOMINA\xC7\xC3O"?c(_1,{scaleX:!0}):c($1,{rotate:60,scaleX:!0})]})}var o9=e=>typeof e=="function",F1=(e,t)=>o9(e)?e(t):e,s9=(()=>{let e=0;return()=>(++e).toString()})(),a9=20,ts=new Map,l9=1e3,D1=e=>{if(ts.has(e))return;let t=setTimeout(()=>{ts.delete(e),ur({type:4,toastId:e})},l9);ts.set(e,t)},u9=e=>{let t=ts.get(e);t&&clearTimeout(t)},ju=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a9)};case 1:return t.toast.id&&u9(t.toast.id),{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:n}=t;return e.toasts.find(o=>o.id===n.id)?ju(e,{type:1,toast:n}):ju(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?D1(r):e.toasts.forEach(o=>{D1(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===r||r===void 0?{...o,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},ns=[],rs={toasts:[],pausedAt:void 0},ur=e=>{rs=ju(rs,e),ns.forEach(t=>{t(rs)})},c9={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},d9=(e={})=>{let[t,n]=x.exports.useState(rs);x.exports.useEffect(()=>(ns.push(n),()=>{let i=ns.indexOf(n);i>-1&&ns.splice(i,1)}),[t]);let r=t.toasts.map(i=>{var o,s;return{...e,...e[i.type],...i,duration:i.duration||((o=e[i.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||c9[i.type],style:{...e.style,...(s=e[i.type])==null?void 0:s.style,...i.style}}});return{...t,toasts:r}},f9=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||s9()}),ho=e=>(t,n)=>{let r=f9(t,e,n);return ur({type:2,toast:r}),r.id},ct=(e,t)=>ho("blank")(e,t);ct.error=ho("error");ct.success=ho("success");ct.loading=ho("loading");ct.custom=ho("custom");ct.dismiss=e=>{ur({type:3,toastId:e})};ct.remove=e=>ur({type:4,toastId:e});ct.promise=(e,t,n)=>{let r=ct.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(i=>(ct.success(F1(t.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{ct.error(F1(t.error,i),{id:r,...n,...n==null?void 0:n.error})}),e};var h9=(e,t)=>{ur({type:1,toast:{id:e,height:t}})},p9=()=>{ur({type:5,time:Date.now()})},m9=e=>{let{toasts:t,pausedAt:n}=d9(e);x.exports.useEffect(()=>{if(n)return;let o=Date.now(),s=t.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(o-a.createdAt);if(l<0){a.visible&&ct.dismiss(a.id);return}return setTimeout(()=>ct.dismiss(a.id),l)});return()=>{s.forEach(a=>a&&clearTimeout(a))}},[t,n]);let r=x.exports.useCallback(()=>{n&&ur({type:6,time:Date.now()})},[n]),i=x.exports.useCallback((o,s)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=s||{},d=t.filter(v=>(v.position||u)===(o.position||u)&&v.height),f=d.findIndex(v=>v.id===o.id),h=d.filter((v,y)=>y<f&&v.visible).length;return d.filter(v=>v.visible).slice(...a?[h+1]:[0,h]).reduce((v,y)=>v+(y.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:h9,startPause:p9,endPause:r,calculateOffset:i}}};const g9=()=>{const{toasts:e,handlers:t}=m9(),{startPause:n,endPause:r,calculateOffset:i,updateHeight:o}=t,{theme:s}=at();return c("div",{style:{position:"absolute",top:100,left:"75%",display:"flex",flexDirection:"column-reverse"},children:e.map(a=>{const l=i(a,{reverseOrder:!0,gutter:10});return c("div",{ref:d=>{if(d&&typeof a.height!="number"){const f=d.getBoundingClientRect().height;o(a.id,f)}},style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem",padding:"8px 16px",position:"absolute",width:"295px",transition:"all 0.5s ease-out",opacity:a.visible?1:0,transform:`translateY(${l}px)`,background:"linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),rgba(255,255,255,0.02)",border:`0.1vh solid ${s.colors.main[500]}`,borderRadius:"0.5vh"},...a.ariaProps,children:a.message},a.id)})})};function za({killfeed:e,image:t}){return x.exports.useEffect(()=>{!e||ct.custom(k(Jn,{children:[c("span",{style:{color:"#ffffff",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",width:"35%",fontSize:"0.85em",fontFamily:"Poppins",marginRight:"-32px"},children:e==null?void 0:e.killer}),c("img",{style:{objectFit:"contain",objectPosition:"center center",width:"32px",height:"100%",margin:"0 5px",clear:"both"},src:en()?"https://www.pngplay.com/wp-content/uploads/12/Handgun-PNG-HD-Images.png":`nui://arena/web-side/assets/weapons/${t}.png`,alt:""}),c("span",{style:{color:"#ffffff",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",width:"35%",fontSize:"0.85em",fontFamily:"Poppins",marginLeft:"-32px"},children:e==null?void 0:e.victim})]}))},[e]),c(g9,{})}const md=P.div`
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  position: relative;
`,v9=P.div`
  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 0.2vw;
  height: 1.4vh;
  width: 13vw;
  overflow: hidden;

  .bar {
    position: absolute;
    display: flex;
    height: 100%;
    border-radius: 0.2vw;
    border: 0.25vh solid;
  }
`;function y9({innerBackground:e,outerBackground:t,max:n,value:r}){return c(v9,{style:{background:e!=null?e:"rgba(0, 0, 0, 0.7)"},children:c("div",{className:"bar",style:{background:t,width:`${100*r/n}%`,borderColor:e!=null?e:"rgba(0, 0, 0, 0.7)"}})})}function w9({value:e,max:t,...n}){const{theme:r}=at();return c(y9,{outerBackground:r.colors.main[500],value:e,max:t-100,...n})}const x9=P.div`
  position: absolute;
  bottom: 3vh;
  right: 4vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .discord {
    color: rgba(255, 255, 255, 0.9);
    margin-top: 0.5vh;
    font-weight: 500;
    font-size: 0.775vw;
    text-transform: uppercase;
    letter-spacing: 0.1vw;
  }
`;function i5({discord:e,health:t}){return k(x9,{children:[c(w9,{max:400,value:t}),c("div",{className:"discord",children:e})]})}function C9(e){return c("svg",{width:"11",height:"17",viewBox:"0 0 11 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:c("path",{d:"M9.42857 0.5H6.28571V3.7472C7.41032 3.87306 8.48848 4.27347 9.42857 4.9144V0.5ZM4.71429 0.5H1.57143V4.9144C2.51152 4.27347 3.58968 3.87306 4.71429 3.7472V0.5ZM5.5 16.5C6.95869 16.5 8.35764 15.91 9.38909 14.8598C10.4205 13.8096 11 12.3852 11 10.9C11 9.41479 10.4205 7.99041 9.38909 6.9402C8.35764 5.89 6.95869 5.3 5.5 5.3C4.04131 5.3 2.64236 5.89 1.61091 6.9402C0.579463 7.99041 0 9.41479 0 10.9C0 12.3852 0.579463 13.8096 1.61091 14.8598C2.64236 15.91 4.04131 16.5 5.5 16.5ZM4.5375 9.6848L5.5 7.7L6.4625 9.6848L8.61379 10.0024L7.05729 11.548L7.425 13.7296L5.5 12.7L3.57579 13.7296L3.9435 11.548L2.387 10.0024L4.5375 9.6848Z",fill:e.fill})})}const S9=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3vw;
  padding: 1.2vh 1.1vw;
  color: white;
  background: ${e=>kl[e.rankColor].background};
  border: 0.15vh solid ${e=>kl[e.rankColor].color};
  margin-bottom: 0.5vh;

  span.score {
    color: rgba(255,255,255, 0.5);
    font-size: 0.86vw;
    font-weight: 600;
  }

  span.dotted {
    color: #00ff00;
  }

  span.warn {
    background: rgba(255,0,0, 0.5);
    border: 0.15vh solid red;
    padding: 0vh 0.5vw;
    border-radius: 0.3vw;

    margin-left: 0.35vw;
  }

  span.rank-number {
    margin-right: 1vw;
    width: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section {
    display: flex;
    align-items: center;
    min-width: 8vw;
    
    span {
      color: white;
      font-size: 0.8vw;
    }
  }

  svg {
    height: 2vh;
    width: 2vh;
    max-height: 1vw;
    margin-right: 1vw;
    fill: ${e=>kl[e.rankColor].color};
  }
`,kl={gold:{background:"linear-gradient(90deg, rgba(242, 207, 10, 0.2) 0%, rgba(242, 207, 10, 0) 47.66%), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), rgba(255, 255, 255, 0.02)",color:"#FFD700"},silver:{background:"linear-gradient(90deg, rgba(192, 192, 192, 0.2) 0%, rgba(192, 192, 192, 0) 50%), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), rgba(255, 255, 255, 0.02)",color:"#C0C0C0"},bronze:{background:"linear-gradient(90deg, rgba(205, 127, 50, 0.2) 0%, rgba(50, 217, 107, 0) 50%, rgba(205, 127, 50, 0) 50%), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), rgba(255, 255, 255, 0.02)",color:"#CD7F32"},default:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), rgba(255, 255, 255, 0.02)",color:"rgba(0,0,0,0.25)"}};function k9({name:e,tag:t,dotted:n,fullRank:r,dataRanking:i,warn:o,score:s,format:a,index:l,...u}){const[d,f]=x.exports.useState("default");return x.exports.useEffect(()=>{switch(l){case 0:f("gold");break;case 1:f("silver");break;case 2:f("bronze");break;default:f("default");break}},[]),k(S9,{rankColor:d,...u,children:[k("section",{children:[c(()=>d==="default"?r?k("span",{className:"rank-number",children:[l+1,"\xBA"]}):null:c(C9,{}),{}),c("span",{children:e}),o&&c("span",{className:"warn",children:"VOC\xCA"})]}),k("span",{className:"score",children:[a==="money"?ey(s||0,3):s," ",t!=null?t:"PONTOS",n&&c("span",{className:"dotted",children:"\u2022"})]})]})}const P9=P.div`
  position: absolute;
  top: 50%;
  right: -.15vw;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1vw;
    font-weight: 500;
    color: #fff;
    text-align: center;
    margin-bottom: 0.5vw;
  }

  h2   {
    font-size: 0.85vw;
    font-weight: 500;
    color: rgba(255,255,255,0.75);
    text-align: center;
    margin-top: 0.5vw;
  }

  h3   {
    font-size: 0.75vw;
    font-weight: 500;
    color: rgba(255,255,255,0.75);
    text-align: center;
    width: 17.5vw;
    margin-top: 0.1vw;

    b {
      color: ${e=>e.theme.colors.main[500]};
      font-weight: 600;
    }
  }

  hr {
    margin-bottom: 1.5vh;
    border: none;
  }
`,b9=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3vw;
  padding: .8vh 1vw;
  color: white;
  background: rgba(242,10,69,0.4);
  border: 0.15vh solid rgba(242,10,69,0.5);

  svg {
    height: 1vw;
    width: 1vw;
    margin-right: 0.5vw;
  }

  span {
    font-size: 1.5vw;
    font-weight: 500;
    color: #fff;
    text-align: center;
    margin: 0 0.5vw;
  }
`;function T9(e){return je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"}}]})(e)}function o5({teams:e,countdown:t,subtitle:n,format:r,title:i,fullRank:o,dotted:s,tag:a,showWarning:l,...u}){return k(P9,{...u,children:[c("h1",{children:i}),e.map((d,f)=>c(k9,{kills:0,format:r,typeRanking:"",dataRanking:e,dotted:s,fullRank:o,tag:a,index:f,...d})),t&&k(b9,{children:[c(T9,{}),c("div",{children:t})]}),n&&c("h2",{children:n}),l&&k("h3",{children:[c("b",{children:"Voc\xEA est\xE1 acima de 96%"})," dos players com a mesma m\xE9dia de tempo jogado que voc\xEA. Parab\xE9ns!"]})]})}function E9(){return c(S6,{children:c(n9,{})})}const s5=x.exports.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Oa=x.exports.createContext({}),Na=x.exports.createContext(null),Ia=typeof document!="undefined",gd=Ia?x.exports.useLayoutEffect:x.exports.useEffect,a5=x.exports.createContext({strict:!1}),vd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),R9="framerAppearId",l5="data-"+vd(R9);function A9(e,t,n,r){const{visualElement:i}=x.exports.useContext(Oa),o=x.exports.useContext(a5),s=x.exports.useContext(Na),a=x.exports.useContext(s5).reducedMotion,l=x.exports.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;x.exports.useInsertionEffect(()=>{u&&u.update(n,s)});const d=x.exports.useRef(Boolean(n[l5]&&!window.HandoffComplete));return gd(()=>{!u||(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),x.exports.useEffect(()=>{!u||(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function Rr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function M9(e,t,n){return x.exports.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Rr(n)&&(n.current=r))},[t])}function to(e){return typeof e=="string"||Array.isArray(e)}function $a(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const yd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wd=["initial",...yd];function _a(e){return $a(e.animate)||wd.some(t=>to(e[t]))}function u5(e){return Boolean(_a(e)||e.variants)}function L9(e,t){if(_a(e)){const{initial:n,animate:r}=e;return{initial:n===!1||to(n)?n:void 0,animate:to(r)?r:void 0}}return e.inherit!==!1?t:{}}function z9(e){const{initial:t,animate:n}=L9(e,x.exports.useContext(Oa));return x.exports.useMemo(()=>({initial:t,animate:n}),[V1(t),V1(n)])}function V1(e){return Array.isArray(e)?e.join(" "):e}const j1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},no={};for(const e in j1)no[e]={isEnabled:t=>j1[e].some(n=>!!t[n])};function O9(e){for(const t in e)no[t]={...no[t],...e[t]}}const xd=x.exports.createContext({}),c5=x.exports.createContext({}),N9=Symbol.for("motionComponentSymbol");function I9({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&O9(e);function o(a,l){let u;const d={...x.exports.useContext(s5),...a,layoutId:$9(a)},{isStatic:f}=d,h=z9(a),v=r(a,f);if(!f&&Ia){h.visualElement=A9(i,v,d,t);const y=x.exports.useContext(c5),w=x.exports.useContext(a5).strict;h.visualElement&&(u=h.visualElement.loadFeatures(d,w,e,y))}return x.exports.createElement(Oa.Provider,{value:h},u&&h.visualElement?x.exports.createElement(u,{visualElement:h.visualElement,...d}):null,n(i,a,M9(v,h.visualElement,l),v,f,h.visualElement))}const s=x.exports.forwardRef(o);return s[N9]=i,s}function $9({layoutId:e}){const t=x.exports.useContext(xd).id;return t&&e!==void 0?t+"-"+e:e}function _9(e){function t(r,i={}){return I9(e(r,i))}if(typeof Proxy=="undefined")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const F9=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cd(e){return typeof e!="string"||e.includes("-")?!1:!!(F9.indexOf(e)>-1||/[A-Z]/.test(e))}const Is={};function D9(e){Object.assign(Is,e)}const po=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],cr=new Set(po);function d5(e,{layout:t,layoutId:n}){return cr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Is[e]||e==="opacity")}const st=e=>Boolean(e&&e.getVelocity),V9={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},j9=po.length;function B9(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<j9;s++){const a=po[s];e[a]!==void 0&&(o+=`${V9[a]||a}(${e[a]}) `)}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const f5=e=>t=>typeof t=="string"&&t.startsWith(e),h5=f5("--"),Bu=f5("var(--"),U9=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,H9=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ln=(e,t,n)=>Math.min(Math.max(n,e),t),dr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Mi={...dr,transform:e=>Ln(0,1,e)},Fo={...dr,default:1},Li=e=>Math.round(e*1e5)/1e5,Fa=/(-)?([\d]*\.?[\d])+/g,p5=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,W9=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function mo(e){return typeof e=="string"}const go=e=>({test:t=>mo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),an=go("deg"),Vt=go("%"),B=go("px"),G9=go("vh"),K9=go("vw"),B1={...Vt,parse:e=>Vt.parse(e)/100,transform:e=>Vt.transform(e*100)},U1={...dr,transform:Math.round},m5={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,radius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,size:B,top:B,right:B,bottom:B,left:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,rotate:an,rotateX:an,rotateY:an,rotateZ:an,scale:Fo,scaleX:Fo,scaleY:Fo,scaleZ:Fo,skew:an,skewX:an,skewY:an,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:Mi,originX:B1,originY:B1,originZ:B,zIndex:U1,fillOpacity:Mi,strokeOpacity:Mi,numOctaves:U1};function Sd(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,d=!0;for(const f in t){const h=t[f];if(h5(f)){o[f]=h;continue}const v=m5[f],y=H9(h,v);if(cr.has(f)){if(l=!0,s[f]=y,!d)continue;h!==(v.default||0)&&(d=!1)}else f.startsWith("origin")?(u=!0,a[f]=y):i[f]=y}if(t.transform||(l||r?i.transform=B9(e.transform,n,d,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:v=0}=a;i.transformOrigin=`${f} ${h} ${v}`}}const kd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function g5(e,t,n){for(const r in t)!st(t[r])&&!d5(r,n)&&(e[r]=t[r])}function Y9({transformTemplate:e},t,n){return x.exports.useMemo(()=>{const r=kd();return Sd(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Z9(e,t,n){const r=e.style||{},i={};return g5(i,r,e),Object.assign(i,Y9(e,t,n)),e.transformValues?e.transformValues(i):i}function Q9(e,t,n){const r={},i=Z9(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const X9=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function $s(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||X9.has(e)}let v5=e=>!$s(e);function J9(e){!e||(v5=t=>t.startsWith("on")?!$s(t):e(t))}try{J9(require("@emotion/is-prop-valid").default)}catch{}function q9(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(v5(i)||n===!0&&$s(i)||!t&&!$s(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function H1(e,t,n){return typeof e=="string"?e:B.transform(t+n*e)}function ew(e,t,n){const r=H1(t,e.x,e.width),i=H1(n,e.y,e.height);return`${r} ${i}`}const tw={offset:"stroke-dashoffset",array:"stroke-dasharray"},nw={offset:"strokeDashoffset",array:"strokeDasharray"};function rw(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?tw:nw;e[o.offset]=B.transform(-r);const s=B.transform(t),a=B.transform(n);e[o.array]=`${s} ${a}`}function Pd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},d,f,h){if(Sd(e,u,d,h),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:y,dimensions:w}=e;v.transform&&(w&&(y.transform=v.transform),delete v.transform),w&&(i!==void 0||o!==void 0||y.transform)&&(y.transformOrigin=ew(w,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),r!==void 0&&(v.scale=r),s!==void 0&&rw(v,s,a,l,!1)}const y5=()=>({...kd(),attrs:{}}),bd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function iw(e,t,n,r){const i=x.exports.useMemo(()=>{const o=y5();return Pd(o,t,{enableHardwareAcceleration:!1},bd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};g5(o,e.style,e),i.style={...o,...i.style}}return i}function ow(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Cd(n)?iw:Q9)(r,o,s,n),d={...q9(r,typeof n=="string",e),...l,ref:i},{children:f}=r,h=x.exports.useMemo(()=>st(f)?f.get():f,[f]);return x.exports.createElement(n,{...d,children:h})}}function w5(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const x5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function C5(e,t,n,r){w5(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(x5.has(i)?i:vd(i),t.attrs[i])}function Td(e,t){const{style:n}=e,r={};for(const i in n)(st(n[i])||t.style&&st(t.style[i])||d5(i,e))&&(r[i]=n[i]);return r}function S5(e,t){const n=Td(e,t);for(const r in e)if(st(e[r])||st(t[r])){const i=po.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Ed(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function k5(e){const t=x.exports.useRef(null);return t.current===null&&(t.current=e()),t.current}const _s=e=>Array.isArray(e),sw=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),aw=e=>_s(e)?e[e.length-1]||0:e;function is(e){const t=st(e)?e.get():e;return sw(t)?t.toValue():t}function lw({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:uw(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const P5=e=>(t,n)=>{const r=x.exports.useContext(Oa),i=x.exports.useContext(Na),o=()=>lw(e,t,r,i);return n?o():k5(o)};function uw(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=is(o[h]);let{initial:s,animate:a}=e;const l=_a(e),u=u5(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?a:s;return f&&typeof f!="boolean"&&!$a(f)&&(Array.isArray(f)?f:[f]).forEach(v=>{const y=Ed(e,v);if(!y)return;const{transitionEnd:w,transition:S,...g}=y;for(const p in g){let m=g[p];if(Array.isArray(m)){const C=d?m.length-1:0;m=m[C]}m!==null&&(i[p]=m)}for(const p in w)i[p]=w[p]}),i}const Se=e=>e;class W1{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function cw(e){let t=new W1,n=new W1,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,d=!1)=>{const f=d&&i,h=f?t:n;return u&&s.add(l),h.add(l)&&f&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(l),s.has(d)&&(a.schedule(d),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const Do=["prepare","read","update","preRender","render","postRender"],dw=40;function fw(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Do.reduce((f,h)=>(f[h]=cw(()=>n=!0),f),{}),s=f=>o[f].process(i),a=()=>{const f=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(f-i.timestamp,dw),1),i.timestamp=f,i.isProcessing=!0,Do.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:Do.reduce((f,h)=>{const v=o[h];return f[h]=(y,w=!1,S=!1)=>(n||l(),v.schedule(y,w,S)),f},{}),cancel:f=>Do.forEach(h=>o[h].cancel(f)),state:i,steps:o}}const{schedule:ce,cancel:tn,state:We,steps:Pl}=fw(typeof requestAnimationFrame!="undefined"?requestAnimationFrame:Se,!0),hw={useVisualState:P5({scrapeMotionValuesFromProps:S5,createRenderState:y5,onMount:(e,t,{renderState:n,latestValues:r})=>{ce.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ce.render(()=>{Pd(n,r,{enableHardwareAcceleration:!1},bd(t.tagName),e.transformTemplate),C5(t,n)})}})},pw={useVisualState:P5({scrapeMotionValuesFromProps:Td,createRenderState:kd})};function mw(e,{forwardMotionProps:t=!1},n,r){return{...Cd(e)?hw:pw,preloadedFeatures:n,useRender:ow(t),createVisualElement:r,Component:e}}function Gt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const b5=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Da(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const gw=e=>t=>b5(t)&&e(t,Da(t));function Yt(e,t,n,r){return Gt(e,t,gw(n),r)}const vw=(e,t)=>n=>t(e(n)),En=(...e)=>e.reduce(vw);function T5(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const G1=T5("dragHorizontal"),K1=T5("dragVertical");function E5(e){let t=!1;if(e==="y")t=K1();else if(e==="x")t=G1();else{const n=G1(),r=K1();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function R5(){const e=E5(!0);return e?(e(),!1):!0}class Dn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Y1(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||R5())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&ce.update(()=>a[r](o,s))};return Yt(e.current,n,i,{passive:!e.getProps()[r]})}class yw extends Dn{mount(){this.unmount=En(Y1(this.node,!0),Y1(this.node,!1))}unmount(){}}class ww extends Dn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=En(Gt(this.node.current,"focus",()=>this.onFocus()),Gt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const A5=(e,t)=>t?e===t?!0:A5(e,t.parentElement):!1;function bl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Da(n))}class xw extends Dn{constructor(){super(...arguments),this.removeStartListeners=Se,this.removeEndListeners=Se,this.removeAccessibleListeners=Se,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Yt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps();ce.update(()=>{!f&&!A5(this.node.current,a.target)?d&&d(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Yt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=En(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||bl("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&ce.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=Gt(this.node.current,"keyup",s),bl("down",(a,l)=>{this.startPress(a,l)})},n=Gt(this.node.current,"keydown",t),r=()=>{!this.isPressing||bl("cancel",(o,s)=>this.cancelPress(o,s))},i=Gt(this.node.current,"blur",r);this.removeAccessibleListeners=En(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ce.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!R5()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ce.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Yt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Gt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=En(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Uu=new WeakMap,Tl=new WeakMap,Cw=e=>{const t=Uu.get(e.target);t&&t(e)},Sw=e=>{e.forEach(Cw)};function kw({root:e,...t}){const n=e||document;Tl.has(n)||Tl.set(n,{});const r=Tl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Sw,{root:e,...t})),r[i]}function Pw(e,t,n){const r=kw(t);return Uu.set(e,n),r.observe(e),()=>{Uu.delete(e),r.unobserve(e)}}const bw={some:0,all:1};class Tw extends Dn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:bw[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(l)};return Pw(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver=="undefined")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Ew(t,n))&&this.startObserver()}unmount(){}}function Ew({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Rw={inView:{Feature:Tw},tap:{Feature:xw},focus:{Feature:ww},hover:{Feature:yw}};function M5(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Aw(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Mw(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Va(e,t,n){const r=e.getProps();return Ed(r,t,n!==void 0?n:r.custom,Aw(e),Mw(e))}let Rd=Se,ja=Se;const Rn=e=>e*1e3,Zt=e=>e/1e3,Z1={current:!1},L5=e=>Array.isArray(e)&&typeof e[0]=="number";function z5(e){return Boolean(!e||typeof e=="string"&&O5[e]||L5(e)||Array.isArray(e)&&e.every(z5))}const wi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,O5={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:wi([0,.65,.55,1]),circOut:wi([.55,0,1,.45]),backIn:wi([.31,.01,.66,-.59]),backOut:wi([.33,1.53,.69,.99])};function N5(e){if(!!e)return L5(e)?wi(e):Array.isArray(e)?e.map(N5):O5[e]}function Lw(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=N5(a);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function zw(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const I5=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Ow=1e-7,Nw=12;function Iw(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=I5(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Ow&&++a<Nw);return s}function vo(e,t,n,r){if(e===t&&n===r)return Se;const i=o=>Iw(o,0,1,e,n);return o=>o===0||o===1?o:I5(i(o),t,r)}const $w=vo(.42,0,1,1),_w=vo(0,0,.58,1),$5=vo(.42,0,.58,1),Fw=e=>Array.isArray(e)&&typeof e[0]!="number",_5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,F5=e=>t=>1-e(1-t),Ad=e=>1-Math.sin(Math.acos(e)),D5=F5(Ad),Dw=_5(Ad),V5=vo(.33,1.53,.69,.99),Md=F5(V5),Vw=_5(Md),jw=e=>(e*=2)<1?.5*Md(e):.5*(2-Math.pow(2,-10*(e-1))),Bw={linear:Se,easeIn:$w,easeInOut:$5,easeOut:_w,circIn:Ad,circInOut:Dw,circOut:D5,backIn:Md,backInOut:Vw,backOut:V5,anticipate:jw},Q1=e=>{if(Array.isArray(e)){ja(e.length===4);const[t,n,r,i]=e;return vo(t,n,r,i)}else if(typeof e=="string")return Bw[e];return e},Ld=(e,t)=>n=>Boolean(mo(n)&&W9.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),j5=(e,t,n)=>r=>{if(!mo(r))return r;const[i,o,s,a]=r.match(Fa);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},Uw=e=>Ln(0,255,e),El={...dr,transform:e=>Math.round(Uw(e))},Zn={test:Ld("rgb","red"),parse:j5("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+El.transform(e)+", "+El.transform(t)+", "+El.transform(n)+", "+Li(Mi.transform(r))+")"};function Hw(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Hu={test:Ld("#"),parse:Hw,transform:Zn.transform},Ar={test:Ld("hsl","hue"),parse:j5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Vt.transform(Li(t))+", "+Vt.transform(Li(n))+", "+Li(Mi.transform(r))+")"},Ye={test:e=>Zn.test(e)||Hu.test(e)||Ar.test(e),parse:e=>Zn.test(e)?Zn.parse(e):Ar.test(e)?Ar.parse(e):Hu.parse(e),transform:e=>mo(e)?e:e.hasOwnProperty("red")?Zn.transform(e):Ar.transform(e)},ve=(e,t,n)=>-n*e+n*t+e;function Rl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ww({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Rl(l,a,e+1/3),o=Rl(l,a,e),s=Rl(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const Al=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},Gw=[Hu,Zn,Ar],Kw=e=>Gw.find(t=>t.test(e));function X1(e){const t=Kw(e);let n=t.parse(e);return t===Ar&&(n=Ww(n)),n}const B5=(e,t)=>{const n=X1(e),r=X1(t),i={...n};return o=>(i.red=Al(n.red,r.red,o),i.green=Al(n.green,r.green,o),i.blue=Al(n.blue,r.blue,o),i.alpha=ve(n.alpha,r.alpha,o),Zn.transform(i))};function Yw(e){var t,n;return isNaN(e)&&mo(e)&&(((t=e.match(Fa))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(p5))===null||n===void 0?void 0:n.length)||0)>0}const U5={regex:U9,countKey:"Vars",token:"${v}",parse:Se},H5={regex:p5,countKey:"Colors",token:"${c}",parse:Ye.parse},W5={regex:Fa,countKey:"Numbers",token:"${n}",parse:dr.parse};function Ml(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);!o||(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function Fs(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ml(n,U5),Ml(n,H5),Ml(n,W5),n}function G5(e){return Fs(e).values}function K5(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Fs(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(U5.token,s[l]):l<r+n?a=a.replace(H5.token,Ye.transform(s[l])):a=a.replace(W5.token,Li(s[l]));return a}}const Zw=e=>typeof e=="number"?0:e;function Qw(e){const t=G5(e);return K5(e)(t.map(Zw))}const zn={test:Yw,parse:G5,createTransformer:K5,getAnimatableNone:Qw},Y5=(e,t)=>n=>`${n>0?t:e}`;function Z5(e,t){return typeof e=="number"?n=>ve(e,t,n):Ye.test(e)?B5(e,t):e.startsWith("var(")?Y5(e,t):X5(e,t)}const Q5=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>Z5(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},Xw=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Z5(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},X5=(e,t)=>{const n=zn.createTransformer(t),r=Fs(e),i=Fs(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?En(Q5(r.values,i.values),n):(Rd(!0),Y5(e,t))},ro=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},J1=(e,t)=>n=>ve(e,t,n);function Jw(e){return typeof e=="number"?J1:typeof e=="string"?Ye.test(e)?B5:X5:Array.isArray(e)?Q5:typeof e=="object"?Xw:J1}function qw(e,t,n){const r=[],i=n||Jw(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Se:t;a=En(l,a)}r.push(a)}return r}function J5(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(ja(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=qw(t,r,i),a=s.length,l=u=>{let d=0;if(a>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=ro(e[d],e[d+1],u);return s[d](f)};return n?u=>l(Ln(e[0],e[o-1],u)):l}function ex(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ro(0,t,r);e.push(ve(n,1,i))}}function tx(e){const t=[0];return ex(t,e.length-1),t}function nx(e,t){return e.map(n=>n*t)}function rx(e,t){return e.map(()=>t||$5).splice(0,e.length-1)}function Ds({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Fw(r)?r.map(Q1):Q1(r),o={done:!1,value:t[0]},s=nx(n&&n.length===t.length?n:tx(t),e),a=J5(s,t,{ease:Array.isArray(i)?i:rx(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function q5(e,t){return t?e*(1e3/t):0}const ix=5;function e2(e,t,n){const r=Math.max(t-ix,0);return q5(n-e(r),t-r)}const Ll=.001,ox=.01,q1=10,sx=.05,ax=1;function lx({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;Rd(e<=Rn(q1));let s=1-t;s=Ln(sx,ax,s),e=Ln(ox,q1,Zt(e)),s<1?(i=u=>{const d=u*s,f=d*e,h=d-n,v=Wu(u,s),y=Math.exp(-f);return Ll-h/v*y},o=u=>{const f=u*s*e,h=f*n+n,v=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-f),w=Wu(Math.pow(u,2),s);return(-i(u)+Ll>0?-1:1)*((h-v)*y)/w}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Ll+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const a=5/e,l=cx(i,o,a);if(e=Rn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const ux=12;function cx(e,t,n){let r=n;for(let i=1;i<ux;i++)r=r-e(r)/t(r);return r}function Wu(e,t){return e*Math.sqrt(1-t*t)}const dx=["duration","bounce"],fx=["stiffness","damping","mass"];function ef(e,t){return t.some(n=>e[n]!==void 0)}function hx(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!ef(e,fx)&&ef(e,dx)){const n=lx(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function t2({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=hx({...r,velocity:-Zt(r.velocity||0)}),v=f||0,y=l/(2*Math.sqrt(a*u)),w=o-i,S=Zt(Math.sqrt(a/u)),g=Math.abs(w)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let p;if(y<1){const m=Wu(S,y);p=C=>{const T=Math.exp(-y*S*C);return o-T*((v+y*S*w)/m*Math.sin(m*C)+w*Math.cos(m*C))}}else if(y===1)p=m=>o-Math.exp(-S*m)*(w+(v+S*w)*m);else{const m=S*Math.sqrt(y*y-1);p=C=>{const T=Math.exp(-y*S*C),R=Math.min(m*C,300);return o-T*((v+y*S*w)*Math.sinh(R)+m*w*Math.cosh(R))/m}}return{calculatedDuration:h&&d||null,next:m=>{const C=p(m);if(h)s.done=m>=d;else{let T=v;m!==0&&(y<1?T=e2(p,m,C):T=0);const R=Math.abs(T)<=n,A=Math.abs(o-C)<=t;s.done=R&&A}return s.value=s.done?o:C,s}}}function tf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},v=E=>a!==void 0&&E<a||l!==void 0&&E>l,y=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let w=n*t;const S=f+w,g=s===void 0?S:s(S);g!==S&&(w=g-f);const p=E=>-w*Math.exp(-E/r),m=E=>g+p(E),C=E=>{const $=p(E),F=m(E);h.done=Math.abs($)<=u,h.value=h.done?g:F};let T,R;const A=E=>{!v(h.value)||(T=E,R=t2({keyframes:[h.value,y(h.value)],velocity:e2(m,E,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return A(0),{calculatedDuration:null,next:E=>{let $=!1;return!R&&T===void 0&&($=!0,C(E),A(E)),T!==void 0&&E>T?R.next(E-T):(!$&&C(E),h)}}}const px=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ce.update(t,!0),stop:()=>tn(t),now:()=>We.isProcessing?We.timestamp:performance.now()}},nf=2e4;function rf(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<nf;)t+=n,r=e.next(t);return t>=nf?1/0:t}const mx={decay:tf,inertia:tf,tween:Ds,keyframes:Ds,spring:t2};function Vs({autoplay:e=!0,delay:t=0,driver:n=px,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:f,...h}){let v=1,y=!1,w,S;const g=()=>{S=new Promise(V=>{w=V})};g();let p;const m=mx[i]||Ds;let C;m!==Ds&&typeof r[0]!="number"&&(C=J5([0,100],r,{clamp:!1}),r=[0,100]);const T=m({...h,keyframes:r});let R;a==="mirror"&&(R=m({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let A="idle",E=null,$=null,F=null;T.calculatedDuration===null&&o&&(T.calculatedDuration=rf(T));const{calculatedDuration:j}=T;let W=1/0,Z=1/0;j!==null&&(W=j+s,Z=W*(o+1)-s);let J=0;const me=V=>{if($===null)return;v>0&&($=Math.min($,V)),v<0&&($=Math.min(V-Z/v,$)),E!==null?J=E:J=Math.round(V-$)*v;const z=J-t*(v>=0?1:-1),N=v>=0?z<0:z>Z;J=Math.max(z,0),A==="finished"&&E===null&&(J=Z);let I=J,H=T;if(o){const le=Math.min(J,Z)/W;let q=Math.floor(le),Q=le%1;!Q&&le>=1&&(Q=1),Q===1&&q--,q=Math.min(q,o+1),Boolean(q%2)&&(a==="reverse"?(Q=1-Q,s&&(Q-=s/W)):a==="mirror"&&(H=R)),I=Ln(0,1,Q)*W}const b=N?{done:!1,value:r[0]}:H.next(I);C&&(b.value=C(b.value));let{done:Y}=b;!N&&j!==null&&(Y=v>=0?J>=Z:J<=0);const O=E===null&&(A==="finished"||A==="running"&&Y);return f&&f(b.value),O&&L(),b},ae=()=>{p&&p.stop(),p=void 0},he=()=>{A="idle",ae(),w(),g(),$=F=null},L=()=>{A="finished",d&&d(),ae(),w()},D=()=>{if(y)return;p||(p=n(me));const V=p.now();l&&l(),E!==null?$=V-E:(!$||A==="finished")&&($=V),A==="finished"&&g(),F=$,E=null,A="running",p.start()};e&&D();const U={then(V,z){return S.then(V,z)},get time(){return Zt(J)},set time(V){V=Rn(V),J=V,E!==null||!p||v===0?E=V:$=p.now()-V/v},get duration(){const V=T.calculatedDuration===null?rf(T):T.calculatedDuration;return Zt(V)},get speed(){return v},set speed(V){V===v||!p||(v=V,U.time=Zt(J))},get state(){return A},play:D,pause:()=>{A="paused",E=J},stop:()=>{y=!0,A!=="idle"&&(A="idle",u&&u(),he())},cancel:()=>{F!==null&&me(F),he()},complete:()=>{A="finished"},sample:V=>($=0,me(V))};return U}function gx(e){let t;return()=>(t===void 0&&(t=e()),t)}const vx=gx(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),yx=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Vo=10,wx=2e4,xx=(e,t)=>t.type==="spring"||e==="backgroundColor"||!z5(t.ease);function Cx(e,t,{onUpdate:n,onComplete:r,...i}){if(!(vx()&&yx.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const d=()=>{l=new Promise(m=>{a=m})};d();let{keyframes:f,duration:h=300,ease:v,times:y}=i;if(xx(t,i)){const m=Vs({...i,repeat:0,delay:0});let C={done:!1,value:f[0]};const T=[];let R=0;for(;!C.done&&R<wx;)C=m.sample(R),T.push(C.value),R+=Vo;y=void 0,f=T,h=R-Vo,v="linear"}const w=Lw(e.owner.current,t,f,{...i,duration:h,ease:v,times:y}),S=()=>{u=!1,w.cancel()},g=()=>{u=!0,ce.update(S),a(),d()};return w.onfinish=()=>{u||(e.set(zw(f,i)),r&&r(),g())},{then(m,C){return l.then(m,C)},attachTimeline(m){return w.timeline=m,w.onfinish=null,Se},get time(){return Zt(w.currentTime||0)},set time(m){w.currentTime=Rn(m)},get speed(){return w.playbackRate},set speed(m){w.playbackRate=m},get duration(){return Zt(h)},play:()=>{s||(w.play(),tn(S))},pause:()=>w.pause(),stop:()=>{if(s=!0,w.playState==="idle")return;const{currentTime:m}=w;if(m){const C=Vs({...i,autoplay:!1});e.setWithVelocity(C.sample(m-Vo).value,C.sample(m).value,Vo)}g()},complete:()=>{u||w.finish()},cancel:g}}function Sx({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Se,pause:Se,stop:Se,then:o=>(o(),Promise.resolve()),cancel:Se,complete:Se});return t?Vs({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const kx={type:"spring",stiffness:500,damping:25,restSpeed:10},Px=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),bx={type:"keyframes",duration:.8},Tx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ex=(e,{keyframes:t})=>t.length>2?bx:cr.has(e)?e.startsWith("scale")?Px(t[1]):kx:Tx,Gu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(zn.test(t)||t==="0")&&!t.startsWith("url(")),Rx=new Set(["brightness","contrast","saturate","opacity"]);function Ax(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Fa)||[];if(!r)return e;const i=n.replace(r,"");let o=Rx.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Mx=/([a-z-]*)\(.*?\)/g,Ku={...zn,getAnimatableNone:e=>{const t=e.match(Mx);return t?t.map(Ax).join(" "):e}},Lx={...m5,color:Ye,backgroundColor:Ye,outlineColor:Ye,fill:Ye,stroke:Ye,borderColor:Ye,borderTopColor:Ye,borderRightColor:Ye,borderBottomColor:Ye,borderLeftColor:Ye,filter:Ku,WebkitFilter:Ku},zd=e=>Lx[e];function n2(e,t){let n=zd(e);return n!==Ku&&(n=zn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const r2=e=>/^0[^.\s]+$/.test(e);function zx(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||r2(e)}function Ox(e,t,n,r){const i=Gu(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),zx(o[u])&&l.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(a=o[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const d=l[u];o[d]=n2(t,a)}return o}function Nx({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function Od(e,t){return e[t]||e.default||e}const Ix={skipAnimations:!1},Nd=(e,t,n,r={})=>i=>{const o=Od(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Rn(s);const l=Ox(t,e,n,o),u=l[0],d=l[l.length-1],f=Gu(e,u),h=Gu(e,d);Rd(f===h);let v={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:y=>{t.set(y),o.onUpdate&&o.onUpdate(y)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(Nx(o)||(v={...v,...Ex(e,v)}),v.duration&&(v.duration=Rn(v.duration)),v.repeatDelay&&(v.repeatDelay=Rn(v.repeatDelay)),!f||!h||Z1.current||o.type===!1||Ix.skipAnimations)return Sx(Z1.current?{...v,delay:0}:v);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const y=Cx(t,e,v);if(y)return y}return Vs(v)};function js(e){return Boolean(st(e)&&e.add)}const i2=e=>/^\-?\d*\.?\d+$/.test(e);function Id(e,t){e.indexOf(t)===-1&&e.push(t)}function $d(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class _d{constructor(){this.subscriptions=[]}add(t){return Id(this.subscriptions,t),()=>$d(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(!!i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $x=e=>!isNaN(parseFloat(e));class _x{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=We;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,ce.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ce.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=$x(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new _d);const r=this.events[t].add(n);return t==="change"?()=>{r(),ce.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?q5(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Kr(e,t){return new _x(e,t)}const o2=e=>t=>t.test(e),Fx={test:e=>e==="auto",parse:e=>e},s2=[dr,B,Vt,an,K9,G9,Fx],fi=e=>s2.find(o2(e)),Dx=[...s2,Ye,zn],Vx=e=>Dx.find(o2(e));function jx(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Kr(n))}function Bx(e,t){const n=Va(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=aw(o[s]);jx(e,s,a)}}function Ux(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(!!s)for(let a=0;a<s;a++){const l=o[a],u=t[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),d!=null&&(typeof d=="string"&&(i2(d)||r2(d))?d=parseFloat(d):!Vx(d)&&zn.test(u)&&(d=n2(l,u)),e.addValue(l,Kr(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function Hx(e,t){return t?(t[e]||t.default||t).from:void 0}function Wx(e,t,n){const r={};for(const i in e){const o=Hx(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function Gx({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Kx(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function a2(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const h=e.getValue(f),v=a[f];if(!h||v===void 0||d&&Gx(d,f))continue;const y={delay:n,elapsed:0,...Od(o||{},f)};if(window.HandoffAppearAnimations){const g=e.getProps()[l5];if(g){const p=window.HandoffAppearAnimations(g,f,h,ce);p!==null&&(y.elapsed=p,y.isHandoff=!0)}}let w=!y.isHandoff&&!Kx(h,v);if(y.type==="spring"&&(h.getVelocity()||y.velocity)&&(w=!1),h.animation&&(w=!1),w)continue;h.start(Nd(f,h,v,e.shouldReduceMotion&&cr.has(f)?{type:!1}:y));const S=h.animation;js(l)&&(l.add(f),S.then(()=>l.remove(f))),u.push(S)}return s&&Promise.all(u).then(()=>{s&&Bx(e,s)}),u}function Yu(e,t,n={}){const r=Va(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(a2(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=i;return Yx(e,t,u+l,d,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function Yx(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(Zx).forEach((u,d)=>{u.notify("AnimationStart",t),s.push(Yu(u,t,{...o,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function Zx(e,t){return e.sortNodePosition(t)}function Qx(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Yu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Yu(e,t,n);else{const i=typeof t=="function"?Va(e,t,n.custom):t;r=Promise.all(a2(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Xx=[...yd].reverse(),Jx=yd.length;function qx(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Qx(e,n,r)))}function eC(e){let t=qx(e);const n=nC();let r=!0;const i=(l,u)=>{const d=Va(e,u);if(d){const{transition:f,transitionEnd:h,...v}=d;l={...l,...v,...h}}return l};function o(l){t=l(e)}function s(l,u){const d=e.getProps(),f=e.getVariantContext(!0)||{},h=[],v=new Set;let y={},w=1/0;for(let g=0;g<Jx;g++){const p=Xx[g],m=n[p],C=d[p]!==void 0?d[p]:f[p],T=to(C),R=p===u?m.isActive:null;R===!1&&(w=g);let A=C===f[p]&&C!==d[p]&&T;if(A&&r&&e.manuallyAnimateOnMount&&(A=!1),m.protectedKeys={...y},!m.isActive&&R===null||!C&&!m.prevProp||$a(C)||typeof C=="boolean")continue;let $=tC(m.prevProp,C)||p===u&&m.isActive&&!A&&T||g>w&&T,F=!1;const j=Array.isArray(C)?C:[C];let W=j.reduce(i,{});R===!1&&(W={});const{prevResolvedValues:Z={}}=m,J={...Z,...W},me=ae=>{$=!0,v.has(ae)&&(F=!0,v.delete(ae)),m.needsAnimating[ae]=!0};for(const ae in J){const he=W[ae],L=Z[ae];if(y.hasOwnProperty(ae))continue;let D=!1;_s(he)&&_s(L)?D=!M5(he,L):D=he!==L,D?he!==void 0?me(ae):v.add(ae):he!==void 0&&v.has(ae)?me(ae):m.protectedKeys[ae]=!0}m.prevProp=C,m.prevResolvedValues=W,m.isActive&&(y={...y,...W}),r&&e.blockInitialAnimation&&($=!1),$&&(!A||F)&&h.push(...j.map(ae=>({animation:ae,options:{type:p,...l}})))}if(v.size){const g={};v.forEach(p=>{const m=e.getBaseTarget(p);m!==void 0&&(g[p]=m)}),h.push({animation:g})}let S=Boolean(h.length);return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(h):Promise.resolve()}function a(l,u,d){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(v=>{var y;return(y=v.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const h=s(d,l);for(const v in n)n[v].protectedKeys={};return h}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function tC(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!M5(t,e):!1}function Vn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function nC(){return{animate:Vn(!0),whileInView:Vn(),whileHover:Vn(),whileTap:Vn(),whileDrag:Vn(),whileFocus:Vn(),exit:Vn()}}class rC extends Dn{constructor(t){super(t),t.animationState||(t.animationState=eC(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),$a(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let iC=0;class oC extends Dn{constructor(){super(...arguments),this.id=iC++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r!=null?r:this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const sC={animation:{Feature:rC},exit:{Feature:oC}},of=(e,t)=>Math.abs(e-t);function aC(e,t){const n=of(e.x,t.x),r=of(e.y,t.y);return Math.sqrt(n**2+r**2)}class l2{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Ol(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,v=aC(f.offset,{x:0,y:0})>=3;if(!h&&!v)return;const{point:y}=f,{timestamp:w}=We;this.history.push({...y,timestamp:w});const{onStart:S,onMove:g}=this.handlers;h||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=zl(h,this.transformPagePoint),ce.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:v,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Ol(f.type==="pointercancel"?this.lastMoveEventInfo:zl(h,this.transformPagePoint),this.history);this.startEvent&&v&&v(f,S),y&&y(f,S)},!b5(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Da(t),a=zl(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=We;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Ol(a,this.history)),this.removeListeners=En(Yt(this.contextWindow,"pointermove",this.handlePointerMove),Yt(this.contextWindow,"pointerup",this.handlePointerUp),Yt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),tn(this.updatePoint)}}function zl(e,t){return t?{point:t(e.point)}:e}function sf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ol({point:e},t){return{point:e,delta:sf(e,u2(t)),offset:sf(e,lC(t)),velocity:uC(t,.1)}}function lC(e){return e[0]}function u2(e){return e[e.length-1]}function uC(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=u2(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Rn(t)));)n--;if(!r)return{x:0,y:0};const o=Zt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ht(e){return e.max-e.min}function Zu(e,t=0,n=.01){return Math.abs(e-t)<=n}function af(e,t,n,r=.5){e.origin=r,e.originPoint=ve(t.min,t.max,e.origin),e.scale=ht(n)/ht(t),(Zu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ve(n.min,n.max,e.origin)-e.originPoint,(Zu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function zi(e,t,n,r){af(e.x,t.x,n.x,r?r.originX:void 0),af(e.y,t.y,n.y,r?r.originY:void 0)}function lf(e,t,n){e.min=n.min+t.min,e.max=e.min+ht(t)}function cC(e,t,n){lf(e.x,t.x,n.x),lf(e.y,t.y,n.y)}function uf(e,t,n){e.min=t.min-n.min,e.max=e.min+ht(t)}function Oi(e,t,n){uf(e.x,t.x,n.x),uf(e.y,t.y,n.y)}function dC(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ve(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ve(n,e,r.max):Math.min(e,n)),e}function cf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function fC(e,{top:t,left:n,bottom:r,right:i}){return{x:cf(e.x,n,i),y:cf(e.y,t,r)}}function df(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function hC(e,t){return{x:df(e.x,t.x),y:df(e.y,t.y)}}function pC(e,t){let n=.5;const r=ht(e),i=ht(t);return i>r?n=ro(t.min,t.max-r,e.min):r>i&&(n=ro(e.min,e.max-i,t.min)),Ln(0,1,n)}function mC(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Qu=.35;function gC(e=Qu){return e===!1?e=0:e===!0&&(e=Qu),{x:ff(e,"left","right"),y:ff(e,"top","bottom")}}function ff(e,t,n){return{min:hf(e,t),max:hf(e,n)}}function hf(e,t){return typeof e=="number"?e:e[t]||0}const pf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mr=()=>({x:pf(),y:pf()}),mf=()=>({min:0,max:0}),Te=()=>({x:mf(),y:mf()});function yt(e){return[e("x"),e("y")]}function c2({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function vC({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function yC(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Nl(e){return e===void 0||e===1}function Xu({scale:e,scaleX:t,scaleY:n}){return!Nl(e)||!Nl(t)||!Nl(n)}function Un(e){return Xu(e)||d2(e)||e.z||e.rotate||e.rotateX||e.rotateY}function d2(e){return gf(e.x)||gf(e.y)}function gf(e){return e&&e!=="0%"}function Bs(e,t,n){const r=e-n,i=t*r;return n+i}function vf(e,t,n,r,i){return i!==void 0&&(e=Bs(e,i,r)),Bs(e,n,r)+t}function Ju(e,t=0,n=1,r,i){e.min=vf(e.min,t,n,r,i),e.max=vf(e.max,t,n,r,i)}function f2(e,{x:t,y:n}){Ju(e.x,t.translate,t.scale,t.originPoint),Ju(e.y,n.translate,n.scale,n.originPoint)}function wC(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Lr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,f2(e,s)),r&&Un(o.latestValues)&&Lr(e,o.latestValues))}t.x=yf(t.x),t.y=yf(t.y)}function yf(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function cn(e,t){e.min=e.min+t,e.max=e.max+t}function wf(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=ve(e.min,e.max,o);Ju(e,t[n],t[r],s,t.scale)}const xC=["x","scaleX","originX"],CC=["y","scaleY","originY"];function Lr(e,t){wf(e.x,t,xC),wf(e.y,t,CC)}function h2(e,t){return c2(yC(e.getBoundingClientRect(),t))}function SC(e,t,n){const r=h2(e,n),{scroll:i}=t;return i&&(cn(r.x,i.offset.x),cn(r.y,i.offset.y)),r}const p2=({current:e})=>e?e.ownerDocument.defaultView:null,kC=new WeakMap;class PC{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Te(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Da(d,"page").point)},o=(d,f)=>{const{drag:h,dragPropagation:v,onDragStart:y}=this.getProps();if(h&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=E5(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),yt(S=>{let g=this.getAxisMotionValue(S).get()||0;if(Vt.test(g)){const{projection:p}=this.visualElement;if(p&&p.layout){const m=p.layout.layoutBox[S];m&&(g=ht(m)*(parseFloat(g)/100))}}this.originPoint[S]=g}),y&&ce.update(()=>y(d,f),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(d,f)=>{const{dragPropagation:h,dragDirectionLock:v,onDirectionLock:y,onDrag:w}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:S}=f;if(v&&this.currentDirection===null){this.currentDirection=bC(S),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),w&&w(d,f)},a=(d,f)=>this.stop(d,f),l=()=>yt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new l2(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:p2(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ce.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!jo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=dC(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Rr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=fC(i.layoutBox,n):this.constraints=!1,this.elastic=gC(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&yt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=mC(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Rr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=SC(r,i.root,this.visualElement.getTransformPagePoint());let s=hC(i.layout.layoutBox,o);if(n){const a=n(vC(s));this.hasMutatedConstraints=!!a,a&&(s=c2(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=yt(d=>{if(!jo(d,n,this.currentDirection))return;let f=l&&l[d]||{};s&&(f={min:0,max:0});const h=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Nd(t,r,0,n))}stopAnimation(){yt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){yt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){yt(n=>{const{drag:r}=this.getProps();if(!jo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-ve(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Rr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};yt(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=pC({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),yt(s=>{if(!jo(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(ve(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;kC.set(this.visualElement,this);const t=this.visualElement.current,n=Yt(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Rr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Gt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(yt(d=>{const f=this.getAxisMotionValue(d);!f||(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Qu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function jo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function bC(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class TC extends Dn{constructor(t){super(t),this.removeGroupControls=Se,this.removeListeners=Se,this.controls=new PC(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Se}unmount(){this.removeGroupControls(),this.removeListeners()}}const xf=e=>(t,n)=>{e&&ce.update(()=>e(t,n))};class EC extends Dn{constructor(){super(...arguments),this.removePointerDownListener=Se}onPointerDown(t){this.session=new l2(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:p2(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:xf(t),onStart:xf(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&ce.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Yt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function RC(){const e=x.exports.useContext(Na);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=x.exports.useId();return x.exports.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const os={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Cf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const hi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(B.test(e))e=parseFloat(e);else return e;const n=Cf(e,t.target.x),r=Cf(e,t.target.y);return`${n}% ${r}%`}},AC={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=zn.parse(e);if(i.length>5)return r;const o=zn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=ve(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class MC extends re.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;D9(LC),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),os.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||ce.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function m2(e){const[t,n]=RC(),r=x.exports.useContext(xd);return c(MC,{...e,layoutGroup:r,switchLayoutGroup:x.exports.useContext(c5),isPresent:t,safeToRemove:n})}const LC={borderRadius:{...hi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hi,borderTopRightRadius:hi,borderBottomLeftRadius:hi,borderBottomRightRadius:hi,boxShadow:AC},g2=["TopLeft","TopRight","BottomLeft","BottomRight"],zC=g2.length,Sf=e=>typeof e=="string"?parseFloat(e):e,kf=e=>typeof e=="number"||B.test(e);function OC(e,t,n,r,i,o){i?(e.opacity=ve(0,n.opacity!==void 0?n.opacity:1,NC(r)),e.opacityExit=ve(t.opacity!==void 0?t.opacity:1,0,IC(r))):o&&(e.opacity=ve(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<zC;s++){const a=`border${g2[s]}Radius`;let l=Pf(t,a),u=Pf(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||kf(l)===kf(u)?(e[a]=Math.max(ve(Sf(l),Sf(u),r),0),(Vt.test(u)||Vt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=ve(t.rotate||0,n.rotate||0,r))}function Pf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const NC=v2(0,.5,D5),IC=v2(.5,.95,Se);function v2(e,t,n){return r=>r<e?0:r>t?1:n(ro(e,t,r))}function bf(e,t){e.min=t.min,e.max=t.max}function vt(e,t){bf(e.x,t.x),bf(e.y,t.y)}function Tf(e,t,n,r,i){return e-=t,e=Bs(e,1/n,r),i!==void 0&&(e=Bs(e,1/i,r)),e}function $C(e,t=0,n=1,r=.5,i,o=e,s=e){if(Vt.test(t)&&(t=parseFloat(t),t=ve(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=ve(o.min,o.max,r);e===o&&(a-=t),e.min=Tf(e.min,t,n,a,i),e.max=Tf(e.max,t,n,a,i)}function Ef(e,t,[n,r,i],o,s){$C(e,t[n],t[r],t[i],t.scale,o,s)}const _C=["x","scaleX","originX"],FC=["y","scaleY","originY"];function Rf(e,t,n,r){Ef(e.x,t,_C,n?n.x:void 0,r?r.x:void 0),Ef(e.y,t,FC,n?n.y:void 0,r?r.y:void 0)}function Af(e){return e.translate===0&&e.scale===1}function y2(e){return Af(e.x)&&Af(e.y)}function DC(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function w2(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Mf(e){return ht(e.x)/ht(e.y)}class VC{constructor(){this.members=[]}add(t){Id(this.members,t),t.scheduleRender()}remove(t){if($d(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Lf(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const jC=(e,t)=>e.depth-t.depth;class BC{constructor(){this.children=[],this.isDirty=!1}add(t){Id(this.children,t),this.isDirty=!0}remove(t){$d(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(jC),this.isDirty=!1,this.children.forEach(t)}}function UC(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(tn(r),e(o-t))};return ce.read(r,!0),()=>tn(r)}function HC(e){window.MotionDebug&&window.MotionDebug.record(e)}function WC(e){return e instanceof SVGElement&&e.tagName!=="svg"}function GC(e,t,n){const r=st(e)?e:Kr(e);return r.start(Nd("",r,t,n)),r.animation}const zf=["","X","Y","Z"],KC={visibility:"hidden"},Of=1e3;let YC=0;const Hn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function x2({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=YC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Hn.totalNodes=Hn.resolvedTargetDeltas=Hn.recalculatedProjection=0,this.nodes.forEach(XC),this.nodes.forEach(nS),this.nodes.forEach(rS),this.nodes.forEach(JC),HC(Hn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new BC)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new _d),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=WC(s),this.instance=s;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=UC(h,250),os.hasAnimatedSinceResize&&(os.hasAnimatedSinceResize=!1,this.nodes.forEach(If))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:v,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||lS,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=d.getProps(),p=!this.targetLayout||!w2(this.targetLayout,y)||v,m=!h&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||h&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const C={...Od(w,"layout"),onPlay:S,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else h||If(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(iS),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Nf);return}this.isUpdating||this.nodes.forEach(eS),this.isUpdating=!1,this.nodes.forEach(tS),this.nodes.forEach(ZC),this.nodes.forEach(QC),this.clearAllSnapshots();const a=performance.now();We.delta=Ln(0,1e3/60,a-We.timestamp),We.timestamp=a,We.isProcessing=!0,Pl.update.process(We),Pl.preRender.process(We),Pl.render.process(We),We.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(qC),this.sharedNodes.forEach(oS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ce.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ce.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Te(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!y2(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&(a||Un(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),uS(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return Te();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(cn(a.x,l.offset.x),cn(a.y,l.offset.y)),a}removeElementScroll(s){const a=Te();vt(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:f}=u;if(u!==this.root&&d&&f.layoutScroll){if(d.isRoot){vt(a,s);const{scroll:h}=this.root;h&&(cn(a.x,-h.offset.x),cn(a.y,-h.offset.y))}cn(a.x,d.offset.x),cn(a.y,d.offset.y)}}return a}applyTransform(s,a=!1){const l=Te();vt(l,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Lr(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Un(d.latestValues)&&Lr(l,d.latestValues)}return Un(this.latestValues)&&Lr(l,this.latestValues),l}removeTransform(s){const a=Te();vt(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Un(u.latestValues))continue;Xu(u.latestValues)&&u.updateSnapshot();const d=Te(),f=u.measurePageBox();vt(d,f),Rf(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Un(this.latestValues)&&Rf(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){!this.relativeParent||this.relativeParent.resolvedRelativeTargetAt!==We.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=Boolean(this.resumingFrom)||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||((a=this.parent)===null||a===void 0?void 0:a.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=We.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Te(),this.relativeTargetOrigin=Te(),Oi(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),vt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Te(),this.targetWithTransforms=Te()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),cC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):vt(this.target,this.layout.layoutBox),f2(this.target,this.targetDelta)):vt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&Boolean(v.resumingFrom)===Boolean(this.resumingFrom)&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Te(),this.relativeTargetOrigin=Te(),Oi(this.relativeTargetOrigin,this.target,v.target),vt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Hn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Xu(this.parent.latestValues)||d2(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=Boolean(this.resumingFrom)||this!==a;let u=!0;if((this.isProjectionDirty||((s=this.parent)===null||s===void 0?void 0:s.isProjectionDirty))&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===We.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;vt(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,v=this.treeScale.y;wC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:y}=a;if(!y){this.projectionTransform&&(this.projectionDelta=Mr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Mr(),this.projectionDeltaWithTransform=Mr());const w=this.projectionTransform;zi(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=Lf(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==h||this.treeScale.y!==v)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Hn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=Mr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Te(),v=l?l.source:void 0,y=this.layout?this.layout.source:void 0,w=v!==y,S=this.getStack(),g=!S||S.members.length<=1,p=Boolean(w&&!g&&this.options.crossfade===!0&&!this.path.some(aS));this.animationProgress=0;let m;this.mixTargetDelta=C=>{const T=C/1e3;$f(f.x,s.x,T),$f(f.y,s.y,T),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Oi(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),sS(this.relativeTarget,this.relativeTargetOrigin,h,T),m&&DC(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Te()),vt(m,this.relativeTarget)),w&&(this.animationValues=d,OC(d,u,this.latestValues,T,p,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ce.update(()=>{os.hasAnimatedSinceResize=!0,this.currentAnimation=GC(0,Of,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Of),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&C2(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Te();const f=ht(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const h=ht(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}vt(a,l),Lr(a,d),zi(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new VC),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let d=0;d<zf.length;d++){const f="rotate"+zf[d];l[f]&&(u[f]=l[f],s.setStaticValue(f,0))}s.render();for(const d in u)s.setStaticValue(d,u[d]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return KC;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=is(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=is(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Un(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Lf(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:v,y}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const w in Is){if(h[w]===void 0)continue;const{correct:S,applyTo:g}=Is[w],p=u.transform==="none"?h[w]:S(h[w],f);if(g){const m=g.length;for(let C=0;C<m;C++)u[g[C]]=p}else u[w]=p}return this.options.layoutId&&(u.pointerEvents=f===this?is(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Nf),this.root.sharedNodes.clear()}}}function ZC(e){e.updateLayout()}function QC(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?yt(f=>{const h=s?n.measuredBox[f]:n.layoutBox[f],v=ht(h);h.min=r[f].min,h.max=h.min+v}):C2(o,n.layoutBox,r)&&yt(f=>{const h=s?n.measuredBox[f]:n.layoutBox[f],v=ht(r[f]);h.max=h.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+v)});const a=Mr();zi(a,r,n.layoutBox);const l=Mr();s?zi(l,e.applyTransform(i,!0),n.measuredBox):zi(l,r,n.layoutBox);const u=!y2(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:v}=f;if(h&&v){const y=Te();Oi(y,n.layoutBox,h.layoutBox);const w=Te();Oi(w,r,v.layoutBox),w2(y,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function XC(e){Hn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function JC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function qC(e){e.clearSnapshot()}function Nf(e){e.clearMeasurements()}function eS(e){e.isLayoutDirty=!1}function tS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function If(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function nS(e){e.resolveTargetDelta()}function rS(e){e.calcProjection()}function iS(e){e.resetRotation()}function oS(e){e.removeLeadSnapshot()}function $f(e,t,n){e.translate=ve(t.translate,0,n),e.scale=ve(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function _f(e,t,n,r){e.min=ve(t.min,n.min,r),e.max=ve(t.max,n.max,r)}function sS(e,t,n,r){_f(e.x,t.x,n.x,r),_f(e.y,t.y,n.y,r)}function aS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const lS={duration:.45,ease:[.4,0,.1,1]},Ff=e=>typeof navigator!="undefined"&&navigator.userAgent.toLowerCase().includes(e),Df=Ff("applewebkit/")&&!Ff("chrome/")?Math.round:Se;function Vf(e){e.min=Df(e.min),e.max=Df(e.max)}function uS(e){Vf(e.x),Vf(e.y)}function C2(e,t,n){return e==="position"||e==="preserve-aspect"&&!Zu(Mf(t),Mf(n),.2)}const cS=x2({attachResizeListener:(e,t)=>Gt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Il={current:void 0},S2=x2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Il.current){const e=new cS({});e.mount(window),e.setOptions({layoutScroll:!0}),Il.current=e}return Il.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),dS={pan:{Feature:EC},drag:{Feature:TC,ProjectionNode:S2,MeasureLayout:m2}},fS=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function hS(e){const t=fS.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function qu(e,t,n=1){const[r,i]=hS(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return i2(s)?parseFloat(s):s}else return Bu(i)?qu(i,t,n+1):i}function pS(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!Bu(o))return;const s=qu(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!Bu(o))continue;const s=qu(o,r);!s||(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const mS=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),k2=e=>mS.has(e),gS=e=>Object.keys(e).some(k2),jf=e=>e===dr||e===B,Bf=(e,t)=>parseFloat(e.split(", ")[t]),Uf=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Bf(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?Bf(o[1],e):0}},vS=new Set(["x","y","z"]),yS=po.filter(e=>!vS.has(e));function wS(e){const t=[];return yS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Yr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Uf(4,13),y:Uf(5,14)};Yr.translateX=Yr.x;Yr.translateY=Yr.y;const xS=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=Yr[u](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(a[u]),e[u]=Yr[u](l,o)}),e},CS=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(k2);let o=[],s=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],f=fi(d);const h=t[l];let v;if(_s(h)){const y=h.length,w=h[0]===null?1:0;d=h[w],f=fi(d);for(let S=w;S<y&&h[S]!==null;S++)v?ja(fi(h[S])===v):v=fi(h[S])}else v=fi(h);if(f!==v)if(jf(f)&&jf(v)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof h=="string"?t[l]=parseFloat(h):Array.isArray(h)&&v===B&&(t[l]=h.map(parseFloat))}else(f==null?void 0:f.transform)&&(v==null?void 0:v.transform)&&(d===0||h===0)?d===0?u.set(v.transform(d)):t[l]=f.transform(h):(s||(o=wS(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=xS(t,e,a);return o.length&&o.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),Ia&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function SS(e,t,n,r){return gS(t)?CS(e,t,n,r):{target:t,transitionEnd:r}}const kS=(e,t,n,r)=>{const i=pS(e,t,r);return t=i.target,r=i.transitionEnd,SS(e,t,n,r)},ec={current:null},P2={current:!1};function PS(){if(P2.current=!0,!!Ia)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ec.current=e.matches;e.addListener(t),t()}else ec.current=!1}function bS(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(st(o))e.addValue(i,o),js(r)&&r.add(i);else if(st(s))e.addValue(i,Kr(o,{owner:e})),js(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,Kr(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Hf=new WeakMap,b2=Object.keys(no),TS=b2.length,Wf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],ES=wd.length;class RS{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{!this.current||(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ce.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=_a(n),this.isVariantNode=u5(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const h=d[f];a[f]!==void 0&&st(h)&&(h.set(a[f],!1),js(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Hf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),P2.current||PS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ec.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Hf.delete(this.current),this.projection&&this.projection.unmount(),tn(this.notifyUpdate),tn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=cr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ce.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<TS;l++){const u=b2[l],{isEnabled:d,Feature:f,ProjectionNode:h,MeasureLayout:v}=no[u];h&&(s=h),d(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),v&&(a=v))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:f,layoutScroll:h,layoutRoot:v}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:Boolean(d)||f&&Rr(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:h,layoutRoot:v})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Te()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Wf.length;r++){const i=Wf[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=bS(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<ES;r++){const i=wd[r],o=this.props[i];(to(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Kr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Ed(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!st(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new _d),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class T2 extends RS{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=Wx(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){Ux(this,r,s);const a=kS(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function AS(e){return window.getComputedStyle(e)}class MS extends T2{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(cr.has(n)){const r=zd(n);return r&&r.default||0}else{const r=AS(t),i=(h5(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return h2(t,n)}build(t,n,r,i){Sd(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Td(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;st(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){w5(t,n,r,i)}}class LS extends T2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(cr.has(n)){const r=zd(n);return r&&r.default||0}return n=x5.has(n)?n:vd(n),t.getAttribute(n)}measureInstanceViewportBox(){return Te()}scrapeMotionValuesFromProps(t,n){return S5(t,n)}build(t,n,r,i){Pd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){C5(t,n,r,i)}mount(t){this.isSVGTag=bd(t.tagName),super.mount(t)}}const zS=(e,t)=>Cd(e)?new LS(t,{enableHardwareAcceleration:!1}):new MS(t,{enableHardwareAcceleration:!0}),OS={layout:{ProjectionNode:S2,MeasureLayout:m2}},NS={...sC,...Rw,...dS,...OS},IS=_9((e,t)=>mw(e,t,NS,zS));function E2(){const e=x.exports.useRef(!1);return gd(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function $S(){const e=E2(),[t,n]=x.exports.useState(0),r=x.exports.useCallback(()=>{e.current&&n(t+1)},[t]);return[x.exports.useCallback(()=>ce.postRender(r),[r]),t]}class _S extends x.exports.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function FS({children:e,isPresent:t}){const n=x.exports.useId(),r=x.exports.useRef(null),i=x.exports.useRef({width:0,height:0,top:0,left:0});return x.exports.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),x.exports.createElement(_S,{isPresent:t,childRef:r,sizeRef:i},x.exports.cloneElement(e,{ref:r}))}const $l=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=k5(DS),l=x.exports.useId(),u=x.exports.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),o?void 0:[n]);return x.exports.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),x.exports.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=x.exports.createElement(FS,{isPresent:n},e)),x.exports.createElement(Na.Provider,{value:u},e)};function DS(){return new Map}function VS(e){return x.exports.useEffect(()=>()=>e(),[])}const Wn=e=>e.key||"";function jS(e,t){e.forEach(n=>{const r=Wn(n);t.set(r,n)})}function BS(e){const t=[];return x.exports.Children.forEach(e,n=>{x.exports.isValidElement(n)&&t.push(n)}),t}const US=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{ja(!i);const a=x.exports.useContext(xd).forceRender||$S()[0],l=E2(),u=BS(e);let d=u;const f=x.exports.useRef(new Map).current,h=x.exports.useRef(d),v=x.exports.useRef(new Map).current,y=x.exports.useRef(!0);if(gd(()=>{y.current=!1,jS(u,v),h.current=d}),VS(()=>{y.current=!0,v.clear(),f.clear()}),y.current)return x.exports.createElement(x.exports.Fragment,null,d.map(p=>x.exports.createElement($l,{key:Wn(p),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},p)));d=[...d];const w=h.current.map(Wn),S=u.map(Wn),g=w.length;for(let p=0;p<g;p++){const m=w[p];S.indexOf(m)===-1&&!f.has(m)&&f.set(m,void 0)}return s==="wait"&&f.size&&(d=[]),f.forEach((p,m)=>{if(S.indexOf(m)!==-1)return;const C=v.get(m);if(!C)return;const T=w.indexOf(m);let R=p;if(!R){const A=()=>{f.delete(m);const E=Array.from(v.keys()).filter($=>!S.includes($));if(E.forEach($=>v.delete($)),h.current=u.filter($=>{const F=Wn($);return F===m||E.includes(F)}),!f.size){if(l.current===!1)return;a(),r&&r()}};R=x.exports.createElement($l,{key:Wn(C),isPresent:!1,onExitComplete:A,custom:t,presenceAffectsLayout:o,mode:s},C),f.set(m,R)}d.splice(T,0,R)}),d=d.map(p=>{const m=p.key;return f.has(m)?p:x.exports.createElement($l,{key:Wn(p),isPresent:!0,presenceAffectsLayout:o,mode:s},p)}),x.exports.createElement(x.exports.Fragment,null,f.size?d:d.map(p=>x.exports.cloneElement(p)))},HS=x.exports.createContext(null),WS=P.div`
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  position: relative;
`,GS=P.div`
  position: absolute;
  top: 65%;
  left: 1.5%;
  color: #fff;
  font-size: .6rem;
  font-weight: 600;
  text-shadow: 0 0 2px #000;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 9999;
`,KS=({children:e})=>{const{t}=$n(),[n,r]=x.exports.useState(!1),[i,o]=x.exports.useState([]),[s,a]=x.exports.useState("worldpvp"),[l,u]=x.exports.useState(""),d=y=>{r(!0),o(y.dataRanking),a(y.typeRanking),y.countdown&&u(y.countdown),y.timeout||setTimeout(()=>{r(!1)},6e4)},f=y=>{r(!0),o(y.dataRanking),a(y.typeRanking),y.countdown&&u(y.countdown)};Ce("displayRank",y=>{r(y)}),Ce("displayRankUpdate",f),Ce("displayFacRank",d);const h=[{title:t("factions_ranking"),tag:"ON",dotted:!0,subtitle:t("type_to_hide")},{title:t("time_played_ranking"),tag:t("hours"),dotted:!1},{title:t("money_ranking"),showWarning:!0,dotted:!1,format:"money",tag:""},{title:t("countdown_ranking"),tag:t("alive"),dotted:!1},{title:t("domination_ranking"),tag:t("alive"),dotted:!1},{title:t("floor_arena_ranking"),tag:t("kills"),dotted:!1}],v=s==="teams"?h[0]:s==="timePlayed"?h[1]:s==="money"?h[2]:s==="countdown"?h[3]:s==="worldpvp"?h[5]:h[4];return x.exports.useEffect(()=>{en()&&f({typeRanking:"",kills:0,dataRanking:[{name:t("faction_01"),score:645654,warn:!0},{name:t("faction_02"),score:90}],timeout:!0,countdown:"00:00:00"})},[]),k(HS.Provider,{value:{teamsScoreList:i},children:[c(US,{children:n&&k(IS.div,{initial:{opacity:0},animate:{opacity:n?1:0},exit:{opacity:0},transition:{duration:.3},style:{position:"fixed",top:0,right:0,width:"100vw",height:"100vh"},children:[s=="worldpvp"&&c(GS,{children:k("h1",{children:[t("use_command")," ",k("span",{style:{color:"#ff0000"},children:[" ",t("exit_pista")," "]})," ",t("to_exit")]})}),c(WS,{children:c(o5,{showWarning:v.showWarning,title:v.title,subtitle:v.subtitle,fullRank:!0,countdown:l,dotted:v.dotted,tag:v.tag,teams:i,format:v.format,style:{transform:"translateY(-50%) scale(0.75)"}})})]})}),e]})};_l.createRoot(document.getElementById("root")).render(c(re.StrictMode,{children:c(nv,{children:c(ev,{children:c(KS,{children:c(cv,{children:k(iy,{children:[c(p6,{children:c(E9,{})}),c(dv,{})]})})})})})}));
