(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Yf={exports:{}},To={};var o0;function eS(){if(o0)return To;o0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return To.Fragment=e,To.jsx=i,To.jsxs=i,To}var l0;function nS(){return l0||(l0=1,Yf.exports=eS()),Yf.exports}var St=nS(),jf={exports:{}},ce={};var c0;function iS(){if(c0)return ce;c0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function y(U,Z,xt){this.props=U,this.context=Z,this.refs=C,this.updater=xt||E}y.prototype.isReactComponent={},y.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function I(U,Z,xt){this.props=U,this.context=Z,this.refs=C,this.updater=xt||E}var F=I.prototype=new v;F.constructor=I,T(F,y.prototype),F.isPureReactComponent=!0;var N=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function H(U,Z,xt,mt,Nt,qt){return xt=qt.ref,{$$typeof:o,type:U,key:Z,ref:xt!==void 0?xt:null,props:qt}}function tt(U,Z){return H(U.type,Z,void 0,void 0,void 0,U.props)}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function D(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xt){return Z[xt]})}var k=/\/+/g;function rt(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?D(""+U.key):Z.toString(36)}function ct(){}function ht(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(ct,ct):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ft(U,Z,xt,mt,Nt){var qt=typeof U;(qt==="undefined"||qt==="boolean")&&(U=null);var J=!1;if(U===null)J=!0;else switch(qt){case"bigint":case"string":case"number":J=!0;break;case"object":switch(U.$$typeof){case o:case e:J=!0;break;case _:return J=U._init,ft(J(U._payload),Z,xt,mt,Nt)}}if(J)return Nt=Nt(U),J=mt===""?"."+rt(U,0):mt,N(Nt)?(xt="",J!=null&&(xt=J.replace(k,"$&/")+"/"),ft(Nt,Z,xt,"",function(Qt){return Qt})):Nt!=null&&(R(Nt)&&(Nt=tt(Nt,xt+(Nt.key==null||U&&U.key===Nt.key?"":(""+Nt.key).replace(k,"$&/")+"/")+J)),Z.push(Nt)),1;J=0;var gt=mt===""?".":mt+":";if(N(U))for(var Et=0;Et<U.length;Et++)mt=U[Et],qt=gt+rt(mt,Et),J+=ft(mt,Z,xt,qt,Nt);else if(Et=M(U),typeof Et=="function")for(U=Et.call(U),Et=0;!(mt=U.next()).done;)mt=mt.value,qt=gt+rt(mt,Et++),J+=ft(mt,Z,xt,qt,Nt);else if(qt==="object"){if(typeof U.then=="function")return ft(ht(U),Z,xt,mt,Nt);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return J}function L(U,Z,xt){if(U==null)return U;var mt=[],Nt=0;return ft(U,mt,"","",function(qt){return Z.call(xt,qt,Nt++)}),mt}function V(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(xt){(U._status===0||U._status===-1)&&(U._status=1,U._result=xt)},function(xt){(U._status===0||U._status===-1)&&(U._status=2,U._result=xt)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var et=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Mt(){}return ce.Children={map:L,forEach:function(U,Z,xt){L(U,function(){Z.apply(this,arguments)},xt)},count:function(U){var Z=0;return L(U,function(){Z++}),Z},toArray:function(U){return L(U,function(Z){return Z})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ce.Component=y,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=I,ce.StrictMode=r,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ce.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},ce.cache=function(U){return function(){return U.apply(null,arguments)}},ce.cloneElement=function(U,Z,xt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var mt=T({},U.props),Nt=U.key,qt=void 0;if(Z!=null)for(J in Z.ref!==void 0&&(qt=void 0),Z.key!==void 0&&(Nt=""+Z.key),Z)!z.call(Z,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&Z.ref===void 0||(mt[J]=Z[J]);var J=arguments.length-2;if(J===1)mt.children=xt;else if(1<J){for(var gt=Array(J),Et=0;Et<J;Et++)gt[Et]=arguments[Et+2];mt.children=gt}return H(U.type,Nt,void 0,void 0,qt,mt)},ce.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ce.createElement=function(U,Z,xt){var mt,Nt={},qt=null;if(Z!=null)for(mt in Z.key!==void 0&&(qt=""+Z.key),Z)z.call(Z,mt)&&mt!=="key"&&mt!=="__self"&&mt!=="__source"&&(Nt[mt]=Z[mt]);var J=arguments.length-2;if(J===1)Nt.children=xt;else if(1<J){for(var gt=Array(J),Et=0;Et<J;Et++)gt[Et]=arguments[Et+2];Nt.children=gt}if(U&&U.defaultProps)for(mt in J=U.defaultProps,J)Nt[mt]===void 0&&(Nt[mt]=J[mt]);return H(U,qt,void 0,void 0,null,Nt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(U){return{$$typeof:d,render:U}},ce.isValidElement=R,ce.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:V}},ce.memo=function(U,Z){return{$$typeof:p,type:U,compare:Z===void 0?null:Z}},ce.startTransition=function(U){var Z=O.T,xt={};O.T=xt;try{var mt=U(),Nt=O.S;Nt!==null&&Nt(xt,mt),typeof mt=="object"&&mt!==null&&typeof mt.then=="function"&&mt.then(Mt,et)}catch(qt){et(qt)}finally{O.T=Z}},ce.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ce.use=function(U){return O.H.use(U)},ce.useActionState=function(U,Z,xt){return O.H.useActionState(U,Z,xt)},ce.useCallback=function(U,Z){return O.H.useCallback(U,Z)},ce.useContext=function(U){return O.H.useContext(U)},ce.useDebugValue=function(){},ce.useDeferredValue=function(U,Z){return O.H.useDeferredValue(U,Z)},ce.useEffect=function(U,Z,xt){var mt=O.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return mt.useEffect(U,Z)},ce.useId=function(){return O.H.useId()},ce.useImperativeHandle=function(U,Z,xt){return O.H.useImperativeHandle(U,Z,xt)},ce.useInsertionEffect=function(U,Z){return O.H.useInsertionEffect(U,Z)},ce.useLayoutEffect=function(U,Z){return O.H.useLayoutEffect(U,Z)},ce.useMemo=function(U,Z){return O.H.useMemo(U,Z)},ce.useOptimistic=function(U,Z){return O.H.useOptimistic(U,Z)},ce.useReducer=function(U,Z,xt){return O.H.useReducer(U,Z,xt)},ce.useRef=function(U){return O.H.useRef(U)},ce.useState=function(U){return O.H.useState(U)},ce.useSyncExternalStore=function(U,Z,xt){return O.H.useSyncExternalStore(U,Z,xt)},ce.useTransition=function(){return O.H.useTransition()},ce.version="19.1.0",ce}var u0;function Ad(){return u0||(u0=1,jf.exports=iS()),jf.exports}var Pn=Ad(),Zf={exports:{}},Ao={},Kf={exports:{}},Qf={};var f0;function aS(){return f0||(f0=1,(function(o){function e(L,V){var et=L.length;L.push(V);t:for(;0<et;){var Mt=et-1>>>1,U=L[Mt];if(0<l(U,V))L[Mt]=V,L[et]=U,et=Mt;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var V=L[0],et=L.pop();if(et!==V){L[0]=et;t:for(var Mt=0,U=L.length,Z=U>>>1;Mt<Z;){var xt=2*(Mt+1)-1,mt=L[xt],Nt=xt+1,qt=L[Nt];if(0>l(mt,et))Nt<U&&0>l(qt,mt)?(L[Mt]=qt,L[Nt]=et,Mt=Nt):(L[Mt]=mt,L[xt]=et,Mt=xt);else if(Nt<U&&0>l(qt,et))L[Mt]=qt,L[Nt]=et,Mt=Nt;else break t}}return V}function l(L,V){var et=L.sortIndex-V.sortIndex;return et!==0?et:L.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,M=3,E=!1,T=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var V=i(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=L)r(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function O(L){if(C=!1,N(L),!T)if(i(m)!==null)T=!0,z||(z=!0,rt());else{var V=i(p);V!==null&&ft(O,V.startTime-L)}}var z=!1,H=-1,tt=5,R=-1;function D(){return y?!0:!(o.unstable_now()-R<tt)}function k(){if(y=!1,z){var L=o.unstable_now();R=L;var V=!0;try{t:{T=!1,C&&(C=!1,I(H),H=-1),E=!0;var et=M;try{e:{for(N(L),x=i(m);x!==null&&!(x.expirationTime>L&&D());){var Mt=x.callback;if(typeof Mt=="function"){x.callback=null,M=x.priorityLevel;var U=Mt(x.expirationTime<=L);if(L=o.unstable_now(),typeof U=="function"){x.callback=U,N(L),V=!0;break e}x===i(m)&&r(m),N(L)}else r(m);x=i(m)}if(x!==null)V=!0;else{var Z=i(p);Z!==null&&ft(O,Z.startTime-L),V=!1}}break t}finally{x=null,M=et,E=!1}V=void 0}}finally{V?rt():z=!1}}}var rt;if(typeof F=="function")rt=function(){F(k)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ht=ct.port2;ct.port1.onmessage=k,rt=function(){ht.postMessage(null)}}else rt=function(){v(k,0)};function ft(L,V){H=v(function(){L(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_next=function(L){switch(M){case 1:case 2:case 3:var V=3;break;default:V=M}var et=M;M=V;try{return L()}finally{M=et}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var et=M;M=L;try{return V()}finally{M=et}},o.unstable_scheduleCallback=function(L,V,et){var Mt=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?Mt+et:Mt):et=Mt,L){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=et+U,L={id:_++,callback:V,priorityLevel:L,startTime:et,expirationTime:U,sortIndex:-1},et>Mt?(L.sortIndex=et,e(p,L),i(m)===null&&L===i(p)&&(C?(I(H),H=-1):C=!0,ft(O,et-Mt))):(L.sortIndex=U,e(m,L),T||E||(T=!0,z||(z=!0,rt()))),L},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(L){var V=M;return function(){var et=M;M=V;try{return L.apply(this,arguments)}finally{M=et}}}})(Qf)),Qf}var h0;function rS(){return h0||(h0=1,Kf.exports=aS()),Kf.exports}var Jf={exports:{}},Dn={};var d0;function sS(){if(d0)return Dn;d0=1;var o=Ad();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Dn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),M=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:M,fetchPriority:E}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:M,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.1.0",Dn}var p0;function oS(){if(p0)return Jf.exports;p0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=sS(),Jf.exports}var m0;function lS(){if(m0)return Ao;m0=1;var o=rS(),e=Ad(),i=oS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,b=c.child;b;){if(b===a){S=!0,a=c,s=f;break}if(b===s){S=!0,s=c,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,s=c;break}if(b===s){S=!0,s=f,a=c;break}b=b.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),F=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ct?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case O:return"Suspense";case z:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case F:return(t.displayName||"Context")+".Provider";case I:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case tt:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var ft=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},Mt=[],U=-1;function Z(t){return{current:t}}function xt(t){0>U||(t.current=Mt[U],Mt[U]=null,U--)}function mt(t,n){U++,Mt[U]=t.current,t.current=n}var Nt=Z(null),qt=Z(null),J=Z(null),gt=Z(null);function Et(t,n){switch(mt(J,n),mt(qt,t),mt(Nt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Pg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Pg(n),t=Fg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xt(Nt),mt(Nt,t)}function Qt(){xt(Nt),xt(qt),xt(J)}function Gt(t){t.memoizedState!==null&&mt(gt,t);var n=Nt.current,a=Fg(n,t.type);n!==a&&(mt(qt,t),mt(Nt,a))}function he(t){qt.current===t&&(xt(Nt),xt(qt)),gt.current===t&&(xt(gt),So._currentValue=et)}var Ye=Object.prototype.hasOwnProperty,de=o.unstable_scheduleCallback,xe=o.unstable_cancelCallback,De=o.unstable_shouldYield,ae=o.unstable_requestPaint,be=o.unstable_now,G=o.unstable_getCurrentPriorityLevel,Xe=o.unstable_ImmediatePriority,Me=o.unstable_UserBlockingPriority,ye=o.unstable_NormalPriority,kt=o.unstable_LowPriority,w=o.unstable_IdlePriority,g=o.log,P=o.unstable_setDisableYieldValue,j=null,ot=null;function nt(t){if(typeof g=="function"&&P(t),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(j,t)}catch{}}var At=Math.clz32?Math.clz32:Kt,Rt=Math.log,zt=Math.LN2;function Kt(t){return t>>>=0,t===0?32:31-(Rt(t)/zt|0)|0}var yt=256,wt=4194304;function Bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Xt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=Bt(s):(S&=b,S!==0?c=Bt(S):a||(a=b&~t,a!==0&&(c=Bt(a))))):(b=s&~f,b!==0?c=Bt(b):S!==0?c=Bt(S):a||(a=s&~t,a!==0&&(c=Bt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function oe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),t}function Ot(){var t=wt;return wt<<=1,(wt&62914560)===0&&(wt=4194304),t}function Tt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ft(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bt(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-At(a),_t=1<<dt;b[dt]=0,B[dt]=-1;var at=$[dt];if(at!==null)for($[dt]=null,dt=0;dt<at.length;dt++){var lt=at[dt];lt!==null&&(lt.lane&=-536870913)}a&=~_t}s!==0&&vt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function vt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-At(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Dt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-At(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ee(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Le(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ae(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:e0(t.type))}function ei(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var mn=Math.random().toString(36).slice(2),gn="__reactFiber$"+mn,yn="__reactProps$"+mn,wi="__reactContainer$"+mn,Ds="__reactEvents$"+mn,jo="__reactListeners$"+mn,Zo="__reactHandles$"+mn,Di="__reactResources$"+mn,Wi="__reactMarker$"+mn;function wr(t){delete t[gn],delete t[yn],delete t[Ds],delete t[jo],delete t[Zo]}function qi(t){var n=t[gn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[wi]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Hg(t);t!==null;){if(a=t[gn])return a;t=Hg(t)}return n}t=a,a=t.parentNode}return null}function pi(t){if(t=t[gn]||t[wi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function xa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function mi(t){var n=t[Di];return n||(n=t[Di]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $e(t){t[Wi]=!0}var Us=new Set,Ko={};function Yi(t,n){Sa(t,n),Sa(t+"Capture",n)}function Sa(t,n){for(Ko[t]=n,t=0;t<n.length;t++)Us.add(n[t])}var Wc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qo={},Jo={};function A(t){return Ye.call(Jo,t)?!0:Ye.call(Qo,t)?!1:Wc.test(t)?Jo[t]=!0:(Qo[t]=!0,!1)}function q(t,n,a){if(A(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ut(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function it(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var K,Ut;function It(t){if(K===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);K=n&&n[1]||"",Ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+K+t+Ut}var Lt=!1;function Ht(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var at=lt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(lt){at=lt}t.call(_t.prototype)}}else{try{throw Error()}catch(lt){at=lt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var B=S.split(`
`),$=b.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===$.length)for(s=B.length-1,c=$.length-1;1<=s&&0<=c&&B[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==$[c]){var dt=`
`+B[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=c);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?It(a):""}function Yt(t){switch(t.tag){case 26:case 27:case 5:return It(t.type);case 16:return It("Lazy");case 13:return It("Suspense");case 19:return It("SuspenseList");case 0:case 15:return Ht(t.type,!1);case 11:return Ht(t.type.render,!1);case 1:return Ht(t.type,!0);case 31:return It("Activity");default:return""}}function Jt(t){try{var n="";do n+=Yt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function le(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Oe(t){var n=le(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ve(t){t._valueTracker||(t._valueTracker=Oe(t))}function qe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=le(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Re(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Zt=/[\n"\\]/g;function se(t){return t.replace(Zt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ve(t,n,a,s,c,f,S,b){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Vt(n)):t.value!==""+Vt(n)&&(t.value=""+Vt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Ui(t,S,Vt(n)):a!=null?Ui(t,S,Vt(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Vt(b):t.removeAttribute("name")}function Cn(t,n,a,s,c,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function Ui(t,n,a){n==="number"&&Re(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function rn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ma(t,n,a){if(n!=null&&(n=""+Vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Vt(a):""}function Pe(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Vt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function tn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var In=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _n(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||In.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function En(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&_n(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&_n(t,f,n[f])}function $a(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(t){return tv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var qc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dr=null,Ur=null;function Id(t){var n=pi(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;t:switch(t=n.stateNode,n.type){case"input":if(ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[yn]||null;if(!c)throw Error(r(90));ve(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&qe(s)}break t;case"textarea":Ma(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(t,!!a.multiple,n,!1)}}}var jc=!1;function Bd(t,n,a){if(jc)return t(n,a);jc=!0;try{var s=t(n);return s}finally{if(jc=!1,(Dr!==null||Ur!==null)&&(Bl(),Dr&&(n=Dr,t=Ur,Ur=Dr=null,Id(n),t)))for(n=0;n<t.length;n++)Id(t[n])}}function Ns(t,n){var a=t.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Zi)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Zc=!1}var ya=null,Kc=null,tl=null;function zd(){if(tl)return tl;var t,n=Kc,a=n.length,s,c="value"in ya?ya.value:ya.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return tl=c.slice(t,1<s?1-s:void 0)}function el(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function Hd(){return!1}function Bn(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:Hd,this.isPropagationStopped=Hd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Bn(tr),Os=_({},tr,{view:0,detail:0}),ev=Bn(Os),Qc,Jc,Ps,al=_({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(Qc=t.screenX-Ps.screenX,Jc=t.screenY-Ps.screenY):Jc=Qc=0,Ps=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),Gd=Bn(al),nv=_({},al,{dataTransfer:0}),iv=Bn(nv),av=_({},Os,{relatedTarget:0}),$c=Bn(av),rv=_({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=Bn(rv),ov=_({},tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lv=Bn(ov),cv=_({},tr,{data:0}),Vd=Bn(cv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=hv[t])?!!n[t]:!1}function tu(){return dv}var pv=_({},Os,{key:function(t){if(t.key){var n=uv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mv=Bn(pv),gv=_({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=Bn(gv),_v=_({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),vv=Bn(_v),xv=_({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=Bn(xv),Mv=_({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yv=Bn(Mv),Ev=_({},tr,{newState:0,oldState:0}),bv=Bn(Ev),Tv=[9,13,27,32],eu=Zi&&"CompositionEvent"in window,Fs=null;Zi&&"documentMode"in document&&(Fs=document.documentMode);var Av=Zi&&"TextEvent"in window&&!Fs,Xd=Zi&&(!eu||Fs&&8<Fs&&11>=Fs),Wd=" ",qd=!1;function Yd(t,n){switch(t){case"keyup":return Tv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function Rv(t,n){switch(t){case"compositionend":return jd(n);case"keypress":return n.which!==32?null:(qd=!0,Wd);case"textInput":return t=n.data,t===Wd&&qd?null:t;default:return null}}function Cv(t,n){if(Nr)return t==="compositionend"||!eu&&Yd(t,n)?(t=zd(),tl=Kc=ya=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xd&&n.locale!=="ko"?null:n.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!wv[t.type]:n==="textarea"}function Kd(t,n,a,s){Dr?Ur?Ur.push(s):Ur=[s]:Dr=s,n=Xl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Is=null,Bs=null;function Dv(t){Dg(t,0)}function rl(t){var n=xa(t);if(qe(n))return t}function Qd(t,n){if(t==="change")return n}var Jd=!1;if(Zi){var nu;if(Zi){var iu="oninput"in document;if(!iu){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),iu=typeof $d.oninput=="function"}nu=iu}else nu=!1;Jd=nu&&(!document.documentMode||9<document.documentMode)}function tp(){Is&&(Is.detachEvent("onpropertychange",ep),Bs=Is=null)}function ep(t){if(t.propertyName==="value"&&rl(Bs)){var n=[];Kd(n,Bs,t,Yc(t)),Bd(Dv,n)}}function Uv(t,n,a){t==="focusin"?(tp(),Is=n,Bs=a,Is.attachEvent("onpropertychange",ep)):t==="focusout"&&tp()}function Nv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(Bs)}function Lv(t,n){if(t==="click")return rl(n)}function Ov(t,n){if(t==="input"||t==="change")return rl(n)}function Pv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Pv;function zs(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ye.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,n){var a=np(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=np(a)}}function ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Re(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Re(t.document)}return n}function au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Fv=Zi&&"documentMode"in document&&11>=document.documentMode,Lr=null,ru=null,Hs=null,su=!1;function sp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Lr==null||Lr!==Re(s)||(s=Lr,"selectionStart"in s&&au(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Hs&&zs(Hs,s)||(Hs=s,s=Xl(ru,"onSelect"),0<s.length&&(n=new il("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Lr)))}function er(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Or={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},ou={},op={};Zi&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function nr(t){if(ou[t])return ou[t];if(!Or[t])return t;var n=Or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return ou[t]=n[a];return t}var lp=nr("animationend"),cp=nr("animationiteration"),up=nr("animationstart"),Iv=nr("transitionrun"),Bv=nr("transitionstart"),zv=nr("transitioncancel"),fp=nr("transitionend"),hp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function gi(t,n){hp.set(t,n),Yi(n,[t])}var dp=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=dp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Jt(n)},dp.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var ii=[],Pr=0,cu=0;function sl(){for(var t=Pr,n=cu=Pr=0;n<t;){var a=ii[n];ii[n++]=null;var s=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&pp(a,c,f)}}function ol(t,n,a,s){ii[Pr++]=t,ii[Pr++]=n,ii[Pr++]=a,ii[Pr++]=s,cu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function uu(t,n,a,s){return ol(t,n,a,s),ll(t)}function Fr(t,n){return ol(t,null,null,n),ll(t)}function pp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-At(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ll(t){if(50<fo)throw fo=0,_f=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ir={};function Hv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new Hv(t,n,a,s)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function mp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cl(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")fu(t)&&(S=1);else if(typeof t=="string")S=Vx(t,a,Nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=qn(31,a,n,c),t.elementType=R,t.lanes=f,t;case T:return ir(a.children,c,f,n);case C:S=8,c|=24;break;case y:return t=qn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case O:return t=qn(13,a,n,c),t.elementType=O,t.lanes=f,t;case z:return t=qn(19,a,n,c),t.elementType=z,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case F:S=10;break t;case I:S=9;break t;case N:S=11;break t;case H:S=14;break t;case tt:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ir(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function hu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function du(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Br=[],zr=0,ul=null,fl=0,ai=[],ri=0,ar=null,Qi=1,Ji="";function rr(t,n){Br[zr++]=fl,Br[zr++]=ul,ul=t,fl=n}function gp(t,n,a){ai[ri++]=Qi,ai[ri++]=Ji,ai[ri++]=ar,ar=t;var s=Qi;t=Ji;var c=32-At(s)-1;s&=~(1<<c),a+=1;var f=32-At(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Qi=1<<32-At(n)+c|a<<c|s,Ji=f+t}else Qi=1<<f|a<<c|s,Ji=t}function pu(t){t.return!==null&&(rr(t,1),gp(t,1,0))}function mu(t){for(;t===ul;)ul=Br[--zr],Br[zr]=null,fl=Br[--zr],Br[zr]=null;for(;t===ar;)ar=ai[--ri],ai[ri]=null,Ji=ai[--ri],ai[ri]=null,Qi=ai[--ri],ai[ri]=null}var Ln=null,Ke=null,Ue=!1,sr=null,Ni=!1,gu=Error(r(519));function or(t){var n=Error(r(418,""));throw ks(ni(n,t)),gu}function _p(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[gn]=t,n[yn]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)_e(po[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Cn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ve(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Pe(n,s.value,s.defaultValue,s.children),Ve(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Og(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=Wl),n=!0):n=!1,n||or(t)}function vp(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Ln=Ln.return}}function Gs(t){if(t!==Ln)return!1;if(!Ue)return vp(t),Ue=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lf(t.type,t.memoizedProps)),a=!a),a&&Ke&&or(t),vp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ke=vi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ke=null}}else n===27?(n=Ke,Ba(t.type)?(t=If,If=null,Ke=t):Ke=n):Ke=Ln?vi(t.stateNode.nextSibling):null;return!0}function Vs(){Ke=Ln=null,Ue=!1}function xp(){var t=sr;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),sr=null),t}function ks(t){sr===null?sr=[t]:sr.push(t)}var _u=Z(null),lr=null,$i=null;function Ea(t,n,a){mt(_u,n._currentValue),n._currentValue=a}function ta(t){t._currentValue=_u.current,xt(_u)}function vu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function xu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),vu(f.return,a,t),s||(S=null);break t}f=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),vu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Xs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var b=c.type;Wn(c.pendingProps.value,S.value)||(t!==null?t.push(b):t=[b])}}else if(c===gt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}c=c.return}t!==null&&xu(n,t,a,s),n.flags|=262144}function hl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){lr=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Sp(lr,t)}function dl(t,n){return lr===null&&cr(t),Sp(t,n)}function Sp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(r(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var Gv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Vv=o.unstable_scheduleCallback,kv=o.unstable_NormalPriority,un={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new Gv,data:new Map,refCount:0}}function Ws(t){t.refCount--,t.refCount===0&&Vv(kv,function(){t.controller.abort()})}var qs=null,Mu=0,Hr=0,Gr=null;function Xv(t,n){if(qs===null){var a=qs=[];Mu=0,Hr=bf(),Gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Mu++,n.then(Mp,Mp),n}function Mp(){if(--Mu===0&&qs!==null){Gr!==null&&(Gr.status="fulfilled");var t=qs;qs=null,Hr=0,Gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Wv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var yp=L.S;L.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xv(t,n),yp!==null&&yp(t,n)};var ur=Z(null);function yu(){var t=ur.current;return t!==null?t:We.pooledCache}function pl(t,n){n===null?mt(ur,ur.current):mt(ur,n.pool)}function Ep(){var t=yu();return t===null?null:{parent:un._currentValue,pool:t}}var Ys=Error(r(460)),bp=Error(r(474)),ml=Error(r(542)),Eu={then:function(){}};function Tp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gl(){}function Ap(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(gl,gl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t;default:if(typeof n.status=="string")n.then(gl,gl);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t}throw js=n,Ys}}var js=null;function Rp(){if(js===null)throw Error(r(459));var t=js;return js=null,t}function Cp(t){if(t===Ys||t===ml)throw Error(r(483))}var ba=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ta(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Aa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Fe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ll(t),pp(t,null,a),n}return ol(t,s,n,a),ll(t)}function Zs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Dt(t,a)}}function Au(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ru=!1;function Ks(){if(Ru){var t=Gr;if(t!==null)throw t}}function Qs(t,n,a,s){Ru=!1;var c=t.updateQueue;ba=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,$=B.next;B.next=null,S===null?f=$:S.next=$,S=B;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==S&&(b===null?dt.firstBaseUpdate=$:b.next=$,dt.lastBaseUpdate=B))}if(f!==null){var _t=c.baseState;S=0,dt=$=B=null,b=f;do{var at=b.lane&-536870913,lt=at!==b.lane;if(lt?(Ee&at)===at:(s&at)===at){at!==0&&at===Hr&&(Ru=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ne=t,$t=b;at=n;var Ge=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){_t=ne.call(Ge,_t,at);break t}_t=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,at=typeof ne=="function"?ne.call(Ge,_t,at):ne,at==null)break t;_t=_({},_t,at);break t;case 2:ba=!0}}at=b.callback,at!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?($=dt=lt,B=_t):dt=dt.next=lt,S|=at;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);dt===null&&(B=_t),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),Oa|=S,t.lanes=S,t.memoizedState=_t}}function wp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Dp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wp(a[t],n)}var Vr=Z(null),_l=Z(0);function Up(t,n){t=oa,mt(_l,t),mt(Vr,n),oa=t|n.baseLanes}function Cu(){mt(_l,oa),mt(Vr,Vr.current)}function wu(){oa=_l.current,xt(Vr),xt(_l)}var Ra=0,pe=null,ze=null,sn=null,vl=!1,kr=!1,fr=!1,xl=0,Js=0,Xr=null,qv=0;function en(){throw Error(r(321))}function Du(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Uu(t,n,a,s,c,f){return Ra=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?pm:mm,fr=!1,f=a(s,c),fr=!1,kr&&(f=Lp(n,a,s,c)),Np(t),f}function Np(t){L.H=Tl;var n=ze!==null&&ze.next!==null;if(Ra=0,sn=ze=pe=null,vl=!1,Js=0,Xr=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&hl(t)&&(vn=!0))}function Lp(t,n,a,s){pe=t;var c=0;do{if(kr&&(Xr=null),Js=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,sn=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=$v,f=n(a,s)}while(kr);return f}function Yv(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?$s(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(pe.flags|=1024),n}function Nu(){var t=xl!==0;return xl=0,t}function Lu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ou(t){if(vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vl=!1}Ra=0,sn=ze=pe=null,kr=!1,Js=xl=0,Xr=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?pe.memoizedState=sn=t:sn=sn.next=t,sn}function on(){if(ze===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=sn===null?pe.memoizedState:sn.next;if(n!==null)sn=n,ze=t;else{if(t===null)throw pe.alternate===null?Error(r(467)):Error(r(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},sn===null?pe.memoizedState=sn=t:sn=sn.next=t}return sn}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(t){var n=Js;return Js+=1,Xr===null&&(Xr=[]),t=Ap(Xr,t,n),n=pe,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?pm:mm),t}function Sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $s(t);if(t.$$typeof===F)return wn(t)}throw Error(r(438,String(t)))}function Fu(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=pe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pu(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=D;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Ml(t){var n=on();return Iu(n,ze,t)}function Iu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=S=null,B=null,$=n,dt=!1;do{var _t=$.lane&-536870913;if(_t!==$.lane?(Ee&_t)===_t:(Ra&_t)===_t){var at=$.revertLane;if(at===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_t===Hr&&(dt=!0);else if((Ra&at)===at){$=$.next,at===Hr&&(dt=!0);continue}else _t={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=_t,S=f):B=B.next=_t,pe.lanes|=at,Oa|=at;_t=$.action,fr&&a(f,_t),f=$.hasEagerState?$.eagerState:a(f,_t)}else at={lane:_t,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=at,S=f):B=B.next=at,pe.lanes|=_t,Oa|=_t;$=$.next}while($!==null&&$!==n);if(B===null?S=f:B.next=b,!Wn(f,t.memoizedState)&&(vn=!0,dt&&(a=Gr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Bu(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Wn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Op(t,n,a){var s=pe,c=on(),f=Ue;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Wn((ze||c).memoizedState,a);S&&(c.memoizedState=a,vn=!0),c=c.queue;var b=Ip.bind(null,s,c,t);if(to(2048,8,b,[t]),c.getSnapshot!==n||S||sn!==null&&sn.memoizedState.tag&1){if(s.flags|=2048,Wr(9,yl(),Fp.bind(null,s,c,a,n),null),We===null)throw Error(r(349));f||(Ra&124)!==0||Pp(s,n,a)}return a}function Pp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Pu(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fp(t,n,a,s){n.value=a,n.getSnapshot=s,Bp(n)&&zp(t)}function Ip(t,n,a){return a(function(){Bp(n)&&zp(t)})}function Bp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function zp(t){var n=Fr(t,2);n!==null&&Qn(n,t,2)}function zu(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),fr){nt(!0);try{a()}finally{nt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function Hp(t,n,a,s){return t.baseState=a,Iu(t,ze,typeof s=="function"?s:ea)}function jv(t,n,a,s,c){if(bl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Gp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=L.T,S={};L.T=S;try{var b=a(c,s),B=L.S;B!==null&&B(S,b),Vp(t,n,b)}catch($){Hu(t,n,$)}finally{L.T=f}}else try{f=a(c,s),Vp(t,n,f)}catch($){Hu(t,n,$)}}function Vp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){kp(t,n,s)},function(s){return Hu(t,n,s)}):kp(t,n,a)}function kp(t,n,a){n.status="fulfilled",n.value=a,Xp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Gp(t,a)))}function Hu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Xp(n),n=n.next;while(n!==s)}t.action=null}function Xp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Wp(t,n){return n}function qp(t,n){if(Ue){var a=We.formState;if(a!==null){t:{var s=pe;if(Ue){if(Ke){e:{for(var c=Ke,f=Ni;c.nodeType!==8;){if(!f){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ke=vi(c.nextSibling),s=c.data==="F!";break t}}or(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wp,lastRenderedState:n},a.queue=s,a=fm.bind(null,pe,s),s.dispatch=a,s=zu(!1),f=Wu.bind(null,pe,!1,s.queue),s=zn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=jv.bind(null,pe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Yp(t){var n=on();return jp(n,ze,t)}function jp(t,n,a){if(n=Iu(t,n,Wp)[0],t=Ml(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$s(n)}catch(S){throw S===Ys?ml:S}else s=n;n=on();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,Wr(9,yl(),Zv.bind(null,c,a),null)),[s,f,t]}function Zv(t,n){t.action=n}function Zp(t){var n=on(),a=ze;if(a!==null)return jp(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Wr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Pu(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function yl(){return{destroy:void 0,resource:void 0}}function Kp(){return on().memoizedState}function El(t,n,a,s){var c=zn();s=s===void 0?null:s,pe.flags|=t,c.memoizedState=Wr(1|n,yl(),a,s)}function to(t,n,a,s){var c=on();s=s===void 0?null:s;var f=c.memoizedState.inst;ze!==null&&s!==null&&Du(s,ze.memoizedState.deps)?c.memoizedState=Wr(n,f,a,s):(pe.flags|=t,c.memoizedState=Wr(1|n,f,a,s))}function Qp(t,n){El(8390656,8,t,n)}function Jp(t,n){to(2048,8,t,n)}function $p(t,n){return to(4,2,t,n)}function tm(t,n){return to(4,4,t,n)}function em(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function nm(t,n,a){a=a!=null?a.concat([t]):null,to(4,4,em.bind(null,n,t),a)}function Gu(){}function im(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Du(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function am(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Du(n,s[1]))return s[0];if(s=t(),fr){nt(!0);try{t()}finally{nt(!1)}}return a.memoizedState=[s,n],s}function Vu(t,n,a){return a===void 0||(Ra&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=og(),pe.lanes|=t,Oa|=t,a)}function rm(t,n,a,s){return Wn(a,n)?a:Vr.current!==null?(t=Vu(t,a,s),Wn(t,n)||(vn=!0),t):(Ra&42)===0?(vn=!0,t.memoizedState=a):(t=og(),pe.lanes|=t,Oa|=t,n)}function sm(t,n,a,s,c){var f=V.p;V.p=f!==0&&8>f?f:8;var S=L.T,b={};L.T=b,Wu(t,!1,n,a);try{var B=c(),$=L.S;if($!==null&&$(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=Wv(B,s);eo(t,n,dt,Kn(t))}else eo(t,n,s,Kn(t))}catch(_t){eo(t,n,{then:function(){},status:"rejected",reason:_t},Kn())}finally{V.p=f,L.T=S}}function Kv(){}function ku(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=om(t).queue;sm(t,c,n,et,a===null?Kv:function(){return lm(t),a(s)})}function om(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function lm(t){var n=om(t).next.queue;eo(t,n,{},Kn())}function Xu(){return wn(So)}function cm(){return on().memoizedState}function um(){return on().memoizedState}function Qv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=Ta(a);var s=Aa(n,t,a);s!==null&&(Qn(s,n,a),Zs(s,n,a)),n={cache:Su()},t.payload=n;return}n=n.return}}function Jv(t,n,a){var s=Kn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},bl(t)?hm(n,a):(a=uu(t,n,a,s),a!==null&&(Qn(a,t,s),dm(a,n,s)))}function fm(t,n,a){var s=Kn();eo(t,n,a,s)}function eo(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(t))hm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,S))return ol(t,n,c,0),We===null&&sl(),!1}catch{}if(a=uu(t,n,c,s),a!==null)return Qn(a,t,s),dm(a,n,s),!0}return!1}function Wu(t,n,a,s){if(s={lane:2,revertLane:bf(),action:s,hasEagerState:!1,eagerState:null,next:null},bl(t)){if(n)throw Error(r(479))}else n=uu(t,a,s,2),n!==null&&Qn(n,t,2)}function bl(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function hm(t,n){kr=vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function dm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Dt(t,a)}}var Tl={readContext:wn,use:Sl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},pm={readContext:wn,use:Sl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Qp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,El(4194308,4,em.bind(null,n,t),a)},useLayoutEffect:function(t,n){return El(4194308,4,t,n)},useInsertionEffect:function(t,n){El(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var s=t();if(fr){nt(!0);try{t()}finally{nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=zn();if(a!==void 0){var c=a(n);if(fr){nt(!0);try{a(n)}finally{nt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Jv.bind(null,pe,t),[s.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=zu(t);var n=t.queue,a=fm.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Gu,useDeferredValue:function(t,n){var a=zn();return Vu(a,t,n)},useTransition:function(){var t=zu(!1);return t=sm.bind(null,pe,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=pe,c=zn();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Ee&124)!==0||Pp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Qp(Ip.bind(null,s,f,t),[t]),s.flags|=2048,Wr(9,yl(),Fp.bind(null,s,f,a,n),null),a},useId:function(){var t=zn(),n=We.identifierPrefix;if(Ue){var a=Ji,s=Qi;a=(s&~(1<<32-At(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=qv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Xu,useFormState:qp,useActionState:qp,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wu.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Fu,useCacheRefresh:function(){return zn().memoizedState=Qv.bind(null,pe)}},mm={readContext:wn,use:Sl,useCallback:im,useContext:wn,useEffect:Jp,useImperativeHandle:nm,useInsertionEffect:$p,useLayoutEffect:tm,useMemo:am,useReducer:Ml,useRef:Kp,useState:function(){return Ml(ea)},useDebugValue:Gu,useDeferredValue:function(t,n){var a=on();return rm(a,ze.memoizedState,t,n)},useTransition:function(){var t=Ml(ea)[0],n=on().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Op,useId:cm,useHostTransitionStatus:Xu,useFormState:Yp,useActionState:Yp,useOptimistic:function(t,n){var a=on();return Hp(a,ze,t,n)},useMemoCache:Fu,useCacheRefresh:um},$v={readContext:wn,use:Sl,useCallback:im,useContext:wn,useEffect:Jp,useImperativeHandle:nm,useInsertionEffect:$p,useLayoutEffect:tm,useMemo:am,useReducer:Bu,useRef:Kp,useState:function(){return Bu(ea)},useDebugValue:Gu,useDeferredValue:function(t,n){var a=on();return ze===null?Vu(a,t,n):rm(a,ze.memoizedState,t,n)},useTransition:function(){var t=Bu(ea)[0],n=on().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Op,useId:cm,useHostTransitionStatus:Xu,useFormState:Zp,useActionState:Zp,useOptimistic:function(t,n){var a=on();return ze!==null?Hp(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:um},qr=null,no=0;function Al(t){var n=no;return no+=1,qr===null&&(qr=[]),Ap(qr,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Rl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function gm(t){var n=t._init;return n(t._payload)}function _m(t){function n(Y,X){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[X],Y.flags|=16):Q.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function s(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function c(Y,X){return Y=Ki(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<X?(Y.flags|=67108866,X):Q):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function S(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,X,Q,pt){return X===null||X.tag!==6?(X=hu(Q,Y.mode,pt),X.return=Y,X):(X=c(X,Q),X.return=Y,X)}function B(Y,X,Q,pt){var Wt=Q.type;return Wt===T?dt(Y,X,Q.props.children,pt,Q.key):X!==null&&(X.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===tt&&gm(Wt)===X.type)?(X=c(X,Q.props),io(X,Q),X.return=Y,X):(X=cl(Q.type,Q.key,Q.props,null,Y.mode,pt),io(X,Q),X.return=Y,X)}function $(Y,X,Q,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=du(Q,Y.mode,pt),X.return=Y,X):(X=c(X,Q.children||[]),X.return=Y,X)}function dt(Y,X,Q,pt,Wt){return X===null||X.tag!==7?(X=ir(Q,Y.mode,pt,Wt),X.return=Y,X):(X=c(X,Q),X.return=Y,X)}function _t(Y,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=hu(""+X,Y.mode,Q),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return Q=cl(X.type,X.key,X.props,null,Y.mode,Q),io(Q,X),Q.return=Y,Q;case E:return X=du(X,Y.mode,Q),X.return=Y,X;case tt:var pt=X._init;return X=pt(X._payload),_t(Y,X,Q)}if(ft(X)||rt(X))return X=ir(X,Y.mode,Q,null),X.return=Y,X;if(typeof X.then=="function")return _t(Y,Al(X),Q);if(X.$$typeof===F)return _t(Y,dl(Y,X),Q);Rl(Y,X)}return null}function at(Y,X,Q,pt){var Wt=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Wt!==null?null:b(Y,X,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Wt?B(Y,X,Q,pt):null;case E:return Q.key===Wt?$(Y,X,Q,pt):null;case tt:return Wt=Q._init,Q=Wt(Q._payload),at(Y,X,Q,pt)}if(ft(Q)||rt(Q))return Wt!==null?null:dt(Y,X,Q,pt,null);if(typeof Q.then=="function")return at(Y,X,Al(Q),pt);if(Q.$$typeof===F)return at(Y,X,dl(Y,Q),pt);Rl(Y,Q)}return null}function lt(Y,X,Q,pt,Wt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(Q)||null,b(X,Y,""+pt,Wt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return Y=Y.get(pt.key===null?Q:pt.key)||null,B(X,Y,pt,Wt);case E:return Y=Y.get(pt.key===null?Q:pt.key)||null,$(X,Y,pt,Wt);case tt:var me=pt._init;return pt=me(pt._payload),lt(Y,X,Q,pt,Wt)}if(ft(pt)||rt(pt))return Y=Y.get(Q)||null,dt(X,Y,pt,Wt,null);if(typeof pt.then=="function")return lt(Y,X,Q,Al(pt),Wt);if(pt.$$typeof===F)return lt(Y,X,Q,dl(X,pt),Wt);Rl(X,pt)}return null}function ne(Y,X,Q,pt){for(var Wt=null,me=null,jt=X,te=X=0,Sn=null;jt!==null&&te<Q.length;te++){jt.index>te?(Sn=jt,jt=null):Sn=jt.sibling;var Ce=at(Y,jt,Q[te],pt);if(Ce===null){jt===null&&(jt=Sn);break}t&&jt&&Ce.alternate===null&&n(Y,jt),X=f(Ce,X,te),me===null?Wt=Ce:me.sibling=Ce,me=Ce,jt=Sn}if(te===Q.length)return a(Y,jt),Ue&&rr(Y,te),Wt;if(jt===null){for(;te<Q.length;te++)jt=_t(Y,Q[te],pt),jt!==null&&(X=f(jt,X,te),me===null?Wt=jt:me.sibling=jt,me=jt);return Ue&&rr(Y,te),Wt}for(jt=s(jt);te<Q.length;te++)Sn=lt(jt,Y,te,Q[te],pt),Sn!==null&&(t&&Sn.alternate!==null&&jt.delete(Sn.key===null?te:Sn.key),X=f(Sn,X,te),me===null?Wt=Sn:me.sibling=Sn,me=Sn);return t&&jt.forEach(function(ka){return n(Y,ka)}),Ue&&rr(Y,te),Wt}function $t(Y,X,Q,pt){if(Q==null)throw Error(r(151));for(var Wt=null,me=null,jt=X,te=X=0,Sn=null,Ce=Q.next();jt!==null&&!Ce.done;te++,Ce=Q.next()){jt.index>te?(Sn=jt,jt=null):Sn=jt.sibling;var ka=at(Y,jt,Ce.value,pt);if(ka===null){jt===null&&(jt=Sn);break}t&&jt&&ka.alternate===null&&n(Y,jt),X=f(ka,X,te),me===null?Wt=ka:me.sibling=ka,me=ka,jt=Sn}if(Ce.done)return a(Y,jt),Ue&&rr(Y,te),Wt;if(jt===null){for(;!Ce.done;te++,Ce=Q.next())Ce=_t(Y,Ce.value,pt),Ce!==null&&(X=f(Ce,X,te),me===null?Wt=Ce:me.sibling=Ce,me=Ce);return Ue&&rr(Y,te),Wt}for(jt=s(jt);!Ce.done;te++,Ce=Q.next())Ce=lt(jt,Y,te,Ce.value,pt),Ce!==null&&(t&&Ce.alternate!==null&&jt.delete(Ce.key===null?te:Ce.key),X=f(Ce,X,te),me===null?Wt=Ce:me.sibling=Ce,me=Ce);return t&&jt.forEach(function(tS){return n(Y,tS)}),Ue&&rr(Y,te),Wt}function Ge(Y,X,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var Wt=Q.key;X!==null;){if(X.key===Wt){if(Wt=Q.type,Wt===T){if(X.tag===7){a(Y,X.sibling),pt=c(X,Q.props.children),pt.return=Y,Y=pt;break t}}else if(X.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===tt&&gm(Wt)===X.type){a(Y,X.sibling),pt=c(X,Q.props),io(pt,Q),pt.return=Y,Y=pt;break t}a(Y,X);break}else n(Y,X);X=X.sibling}Q.type===T?(pt=ir(Q.props.children,Y.mode,pt,Q.key),pt.return=Y,Y=pt):(pt=cl(Q.type,Q.key,Q.props,null,Y.mode,pt),io(pt,Q),pt.return=Y,Y=pt)}return S(Y);case E:t:{for(Wt=Q.key;X!==null;){if(X.key===Wt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Y,X.sibling),pt=c(X,Q.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,X);break}else n(Y,X);X=X.sibling}pt=du(Q,Y.mode,pt),pt.return=Y,Y=pt}return S(Y);case tt:return Wt=Q._init,Q=Wt(Q._payload),Ge(Y,X,Q,pt)}if(ft(Q))return ne(Y,X,Q,pt);if(rt(Q)){if(Wt=rt(Q),typeof Wt!="function")throw Error(r(150));return Q=Wt.call(Q),$t(Y,X,Q,pt)}if(typeof Q.then=="function")return Ge(Y,X,Al(Q),pt);if(Q.$$typeof===F)return Ge(Y,X,dl(Y,Q),pt);Rl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Y,X.sibling),pt=c(X,Q),pt.return=Y,Y=pt):(a(Y,X),pt=hu(Q,Y.mode,pt),pt.return=Y,Y=pt),S(Y)):a(Y,X)}return function(Y,X,Q,pt){try{no=0;var Wt=Ge(Y,X,Q,pt);return qr=null,Wt}catch(jt){if(jt===Ys||jt===ml)throw jt;var me=qn(29,jt,null,Y.mode);return me.lanes=pt,me.return=Y,me}}}var Yr=_m(!0),vm=_m(!1),si=Z(null),Li=null;function Ca(t){var n=t.alternate;mt(fn,fn.current&1),mt(si,t),Li===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(Li=t)}function xm(t){if(t.tag===22){if(mt(fn,fn.current),mt(si,t),Li===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Li=t)}}else wa()}function wa(){mt(fn,fn.current),mt(si,si.current)}function na(t){xt(si),Li===t&&(Li=null),xt(fn)}var fn=Z(0);function Cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ff(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function qu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Yu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=Ta(s);c.payload=n,a!=null&&(c.callback=a),n=Aa(t,c,s),n!==null&&(Qn(n,t,s),Zs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=Ta(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Aa(t,c,s),n!==null&&(Qn(n,t,s),Zs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),s=Ta(a);s.tag=2,n!=null&&(s.callback=n),n=Aa(t,s,a),n!==null&&(Qn(n,t,a),Zs(n,t,a))}};function Sm(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!zs(a,s)||!zs(c,f):!0}function Mm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Yu.enqueueReplaceState(n,n.state,null)}function hr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ym(t){wl(t)}function Em(t){console.error(t)}function bm(t){wl(t)}function Dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ju(t,n,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(t,n)},a}function Am(t){return t=Ta(t),t.tag=3,t}function Rm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Tm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Tm(n,a,s),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function tx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Xs(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Li===null?xf():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Eu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Mf(t,s,c)),!1;case 22:return a.flags|=65536,s===Eu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Mf(t,s,c)),!1}throw Error(r(435,a.tag))}return Mf(t,s,c),xf(),!1}if(Ue)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==gu&&(t=Error(r(422),{cause:s}),ks(ni(t,a)))):(s!==gu&&(n=Error(r(423),{cause:s}),ks(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ni(s,a),c=ju(t.stateNode,s,c),Au(t,c),Qe!==4&&(Qe=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),uo===null?uo=[f]:uo.push(f),Qe!==4&&(Qe=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ju(a.stateNode,s,t),Au(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Am(c),Rm(c,t,a,s),Au(a,c),!1}a=a.return}while(a!==null);return!1}var Cm=Error(r(461)),vn=!1;function bn(t,n,a,s){n.child=t===null?vm(n,null,a,s):Yr(n,t.child,a,s)}function wm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var b in s)b!=="ref"&&(S[b]=s[b])}else S=s;return cr(n),s=Uu(t,n,a,S,f,c),b=Nu(),t!==null&&!vn?(Lu(t,n,c),ia(t,n,c)):(Ue&&b&&pu(n),n.flags|=1,bn(t,n,s,c),n.child)}function Dm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Um(t,n,f,s,c)):(t=cl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!nf(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:zs,a(S,s)&&t.ref===n.ref)return ia(t,n,c)}return n.flags|=1,t=Ki(f,s),t.ref=n.ref,t.return=n,n.child=t}function Um(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(zs(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,nf(t,c))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,ia(t,n,c)}return Zu(t,n,a,s,c)}function Nm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Lm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pl(n,f!==null?f.cachePool:null),f!==null?Up(n,f):Cu(),xm(n);else return n.lanes=n.childLanes=536870912,Lm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(pl(n,f.cachePool),Up(n,f),wa(),n.memoizedState=null):(t!==null&&pl(n,null),Cu(),wa());return bn(t,n,c,a),n.child}function Lm(t,n,a,s){var c=yu();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&pl(n,null),Cu(),xm(n),t!==null&&Xs(t,n,s,!0),null}function Ul(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zu(t,n,a,s,c){return cr(n),a=Uu(t,n,a,s,void 0,c),s=Nu(),t!==null&&!vn?(Lu(t,n,c),ia(t,n,c)):(Ue&&s&&pu(n),n.flags|=1,bn(t,n,a,c),n.child)}function Om(t,n,a,s,c,f){return cr(n),n.updateQueue=null,a=Lp(n,s,a,c),Np(t),s=Nu(),t!==null&&!vn?(Lu(t,n,f),ia(t,n,f)):(Ue&&s&&pu(n),n.flags|=1,bn(t,n,a,f),n.child)}function Pm(t,n,a,s,c){if(cr(n),n.stateNode===null){var f=Ir,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},bu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Ir,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(qu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Yu.enqueueReplaceState(f,f.state,null),Qs(n,s,f,c),Ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=hr(a,b);f.props=B;var $=f.context,dt=a.contextType;S=Ir,typeof dt=="object"&&dt!==null&&(S=wn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==S)&&Mm(n,f,s,S),ba=!1;var at=n.memoizedState;f.state=at,Qs(n,s,f,c),Ks(),$=n.memoizedState,b||at!==$||ba?(typeof _t=="function"&&(qu(n,a,_t,s),$=n.memoizedState),(B=ba||Sm(n,a,B,s,at,$,S))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=S,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Tu(t,n),S=n.memoizedProps,dt=hr(a,S),f.props=dt,_t=n.pendingProps,at=f.context,$=a.contextType,B=Ir,typeof $=="object"&&$!==null&&(B=wn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||at!==B)&&Mm(n,f,s,B),ba=!1,at=n.memoizedState,f.state=at,Qs(n,s,f,c),Ks();var lt=n.memoizedState;S!==_t||at!==lt||ba||t!==null&&t.dependencies!==null&&hl(t.dependencies)?(typeof b=="function"&&(qu(n,a,b,s),lt=n.memoizedState),(dt=ba||Sm(n,a,dt,s,at,lt,B)||t!==null&&t.dependencies!==null&&hl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=B,s=dt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ul(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Yr(n,t.child,null,c),n.child=Yr(n,null,a,c)):bn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ia(t,n,c),t}function Fm(t,n,a,s){return Vs(),n.flags|=256,bn(t,n,a,s),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(t){return{baseLanes:t,cachePool:Ep()}}function Ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function Im(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ue){if(c?Ca(n):wa(),Ue){var b=Ke,B;if(B=b){t:{for(B=b,b=Ni;B.nodeType!==8;){if(!b){b=null;break t}if(B=vi(B.nextSibling),B===null){b=null;break t}}b=B}b!==null?(n.memoizedState={dehydrated:b,treeContext:ar!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},B=qn(18,null,null,0),B.stateNode=b,B.return=n,n.child=B,Ln=n,Ke=null,B=!0):B=!1}B||or(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Ff(b)?n.lanes=32:n.lanes=536870912,null;na(n)}return b=s.children,s=s.fallback,c?(wa(),c=n.mode,b=Nl({mode:"hidden",children:b},c),s=ir(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,c=n.child,c.memoizedState=Qu(a),c.childLanes=Ju(t,S,a),n.memoizedState=Ku,s):(Ca(n),$u(n,b))}if(B=t.memoizedState,B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(Ca(n),n.flags&=-257,n=tf(t,n,a)):n.memoizedState!==null?(wa(),n.child=t.child,n.flags|=128,n=null):(wa(),c=s.fallback,b=n.mode,s=Nl({mode:"visible",children:s.children},b),c=ir(c,b,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Yr(n,t.child,null,a),s=n.child,s.memoizedState=Qu(a),s.childLanes=Ju(t,S,a),n.memoizedState=Ku,n=c);else if(Ca(n),Ff(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var $=S.dgst;S=$,s=Error(r(419)),s.stack="",s.digest=S,ks({value:s,source:null,stack:null}),n=tf(t,n,a)}else if(vn||Xs(t,n,a,!1),S=(a&t.childLanes)!==0,vn||S){if(S=We,S!==null&&(s=a&-a,s=(s&42)!==0?1:ee(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==B.retryLane))throw B.retryLane=s,Fr(t,s),Qn(S,t,s),Cm;b.data==="$?"||xf(),n=tf(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ke=vi(b.nextSibling),Ln=n,Ue=!0,sr=null,Ni=!1,t!==null&&(ai[ri++]=Qi,ai[ri++]=Ji,ai[ri++]=ar,Qi=t.id,Ji=t.overflow,ar=n),n=$u(n,s.children),n.flags|=4096);return n}return c?(wa(),c=s.fallback,b=n.mode,B=t.child,$=B.sibling,s=Ki(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,$!==null?c=Ki($,c):(c=ir(c,b,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,b=t.child.memoizedState,b===null?b=Qu(a):(B=b.cachePool,B!==null?($=un._currentValue,B=B.parent!==$?{parent:$,pool:$}:B):B=Ep(),b={baseLanes:b.baseLanes|a,cachePool:B}),c.memoizedState=b,c.childLanes=Ju(t,S,a),n.memoizedState=Ku,s):(Ca(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function $u(t,n){return n=Nl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Nl(t,n){return t=qn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function tf(t,n,a){return Yr(n,t.child,null,a),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Bm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),vu(t.return,n,a)}function ef(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function zm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(bn(t,n,s.children,a),s=fn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bm(t,a,n);else if(t.tag===19)Bm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(mt(fn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Cl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Cl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ef(n,!0,a,null,f);break;case"together":ef(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Xs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&hl(t)))}function ex(t,n,a){switch(n.tag){case 3:Et(n,n.stateNode.containerInfo),Ea(n,un,t.memoizedState.cache),Vs();break;case 27:case 5:Gt(n);break;case 4:Et(n,n.stateNode.containerInfo);break;case 10:Ea(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Im(t,n,a):(Ca(n),t=ia(t,n,a),t!==null?t.sibling:null);Ca(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Xs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return zm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),mt(fn,fn.current),s)break;return null;case 22:case 23:return n.lanes=0,Nm(t,n,a);case 24:Ea(n,un,t.memoizedState.cache)}return ia(t,n,a)}function Hm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!nf(t,a)&&(n.flags&128)===0)return vn=!1,ex(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,Ue&&(n.flags&1048576)!==0&&gp(n,fl,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")fu(s)?(t=hr(s,t),n.tag=1,n=Pm(null,n,s,t,a)):(n.tag=0,n=Zu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===N){n.tag=11,n=wm(null,n,s,t,a);break t}else if(c===H){n.tag=14,n=Dm(null,n,s,t,a);break t}}throw n=ht(s)||s,Error(r(306,n,""))}}return n;case 0:return Zu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=hr(s,n.pendingProps),Pm(t,n,s,c,a);case 3:t:{if(Et(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Tu(t,n),Qs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,Ea(n,un,s),s!==f.cache&&xu(n,[un],a,!0),Ks(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Fm(t,n,s,a);break t}else if(s!==c){c=ni(Error(r(424)),n),ks(c),n=Fm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=vi(t.firstChild),Ln=n,Ue=!0,sr=null,Ni=!0,a=vm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),s===c){n=ia(t,n,a);break t}bn(t,n,s,a)}n=n.child}return n;case 26:return Ul(t,n),t===null?(a=Xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,t=n.pendingProps,s=ql(J.current).createElement(a),s[gn]=n,s[yn]=t,An(s,a,t),$e(s),n.stateNode=s):n.memoizedState=Xg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Gt(n),t===null&&Ue&&(s=n.stateNode=Gg(n.type,n.pendingProps,J.current),Ln=n,Ni=!0,c=Ke,Ba(n.type)?(If=c,Ke=vi(s.firstChild)):Ke=c),bn(t,n,n.pendingProps.children,a),Ul(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ue&&((c=s=Ke)&&(s=wx(s,n.type,n.pendingProps,Ni),s!==null?(n.stateNode=s,Ln=n,Ke=vi(s.firstChild),Ni=!1,c=!0):c=!1),c||or(n)),Gt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,Lf(c,f)?s=null:S!==null&&Lf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Uu(t,n,Yv,null,null,a),So._currentValue=c),Ul(t,n),bn(t,n,s,a),n.child;case 6:return t===null&&Ue&&((t=a=Ke)&&(a=Dx(a,n.pendingProps,Ni),a!==null?(n.stateNode=a,Ln=n,Ke=null,t=!0):t=!1),t||or(n)),null;case 13:return Im(t,n,a);case 4:return Et(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Yr(n,null,s,a):bn(t,n,s,a),n.child;case 11:return wm(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ea(n,n.type,s.value),bn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,cr(n),c=wn(c),s=s(c),n.flags|=1,bn(t,n,s,a),n.child;case 14:return Dm(t,n,n.type,n.pendingProps,a);case 15:return Um(t,n,n.type,n.pendingProps,a);case 19:return zm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=Nl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ki(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Nm(t,n,a);case 24:return cr(n),s=wn(un),t===null?(c=yu(),c===null&&(c=We,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},bu(n),Ea(n,un,c)):((t.lanes&a)!==0&&(Tu(t,n),Qs(n,null,null,a),Ks()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ea(n,un,s)):(s=f.cache,Ea(n,un,s),s!==c.cache&&xu(n,[un],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function aa(t){t.flags|=4}function Gm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Zg(n)){if(n=si.current,n!==null&&((Ee&4194048)===Ee?Li!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||n!==Li))throw js=Eu,bp;t.flags|=8192}}function Ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ot():536870912,t.lanes|=n,Qr|=n)}function ao(t,n){if(!Ue)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function nx(t,n,a){var s=n.pendingProps;switch(mu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ta(un),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Gs(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xp())),Ze(n),null;case 26:return a=n.memoizedState,t===null?(aa(n),a!==null?(Ze(n),Gm(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==t.memoizedState?(aa(n),Ze(n),Gm(n,a)):(Ze(n),n.flags&=-16777217):(t.memoizedProps!==s&&aa(n),Ze(n),n.flags&=-16777217),null;case 27:he(n),a=J.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&aa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}t=Nt.current,Gs(n)?_p(n):(t=Gg(c,s,a),n.stateNode=t,aa(n))}return Ze(n),null;case 5:if(he(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&aa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(t=Nt.current,Gs(n))_p(n);else{switch(c=ql(J.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[gn]=n,t[yn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(An(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&aa(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&aa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=J.current,Gs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[gn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Og(t.nodeValue,a)),t||or(n)}else t=ql(t).createTextNode(s),t[gn]=n,n.stateNode=t}return Ze(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Gs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[gn]=n}else Vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=xp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(na(n),n):(na(n),null)}if(na(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),Ze(n),null;case 4:return Qt(),t===null&&Cf(n.stateNode.containerInfo),Ze(n),null;case 10:return ta(n.type),Ze(n),null;case 19:if(xt(fn),c=n.memoizedState,c===null)return Ze(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ao(c,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Cl(t),f!==null){for(n.flags|=128,ao(c,!1),t=f.updateQueue,n.updateQueue=t,Ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)mp(a,t),a=a.sibling;return mt(fn,fn.current&1|2),n.child}t=t.sibling}c.tail!==null&&be()>Fl&&(n.flags|=128,s=!0,ao(c,!1),n.lanes=4194304)}else{if(!s)if(t=Cl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Ll(n,t),ao(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ue)return Ze(n),null}else 2*be()-c.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,s=!0,ao(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=be(),n.sibling=null,t=fn.current,mt(fn,s?t&1|2:t&1),n):(Ze(n),null);case 22:case 23:return na(n),wu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&xt(ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ix(t,n){switch(mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ta(un),Qt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 13:if(na(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xt(fn),null;case 4:return Qt(),null;case 10:return ta(n.type),null;case 22:case 23:return na(n),wu(),t!==null&&xt(ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ta(un),null;case 25:return null;default:return null}}function Vm(t,n){switch(mu(n),n.tag){case 3:ta(un),Qt();break;case 26:case 27:case 5:he(n);break;case 4:Qt();break;case 13:na(n);break;case 19:xt(fn);break;case 10:ta(n.type);break;case 22:case 23:na(n),wu(),t!==null&&xt(ur);break;case 24:ta(un)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(b){ke(n,n.return,b)}}function Da(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=n;var B=a,$=b;try{$()}catch(dt){ke(c,B,dt)}}}s=s.next}while(s!==f)}}catch(dt){ke(n,n.return,dt)}}function km(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Dp(n,a)}catch(s){ke(t,t.return,s)}}}function Xm(t,n,a){a.props=hr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ke(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){ke(t,n,c)}}function Oi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){ke(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ke(t,n,c)}else a.current=null}function Wm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){ke(t,t.return,c)}}function af(t,n,a){try{var s=t.stateNode;bx(s,t.type,a,n),s[yn]=n}catch(c){ke(t,t.return,c)}}function qm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ba(t.type)||t.tag===4}function rf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wl));else if(s!==4&&(s===27&&Ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(sf(t,n,a),t=t.sibling;t!==null;)sf(t,n,a),t=t.sibling}function Ol(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ol(t,n,a),t=t.sibling;t!==null;)Ol(t,n,a),t=t.sibling}function Ym(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,s,a),n[gn]=t,n[yn]=a}catch(f){ke(t,t.return,f)}}var ra=!1,nn=!1,of=!1,jm=typeof WeakSet=="function"?WeakSet:Set,xn=null;function ax(t,n){if(t=t.containerInfo,Uf=Jl,t=rp(t),au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,B=-1,$=0,dt=0,_t=t,at=null;e:for(;;){for(var lt;_t!==a||c!==0&&_t.nodeType!==3||(b=S+c),_t!==f||s!==0&&_t.nodeType!==3||(B=S+s),_t.nodeType===3&&(S+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)at=_t,_t=lt;for(;;){if(_t===t)break e;if(at===a&&++$===c&&(b=S),at===f&&++dt===s&&(B=S),(lt=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=lt}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:t,selectionRange:a},Jl=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ne=hr(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ne,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){ke(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function Zm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ua(t,a),s&4&&ro(5,a);break;case 1:if(Ua(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){ke(a,a.return,S)}else{var c=hr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){ke(a,a.return,S)}}s&64&&km(a),s&512&&so(a,a.return);break;case 3:if(Ua(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dp(t,n)}catch(S){ke(a,a.return,S)}}break;case 27:n===null&&s&4&&Ym(a);case 26:case 5:Ua(t,a),n===null&&s&4&&Wm(a),s&512&&so(a,a.return);break;case 12:Ua(t,a);break;case 13:Ua(t,a),s&4&&Jm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dx.bind(null,a),Ux(t,a))));break;case 22:if(s=a.memoizedState!==null||ra,!s){n=n!==null&&n.memoizedState!==null||nn,c=ra;var f=nn;ra=s,(nn=n)&&!f?Na(t,a,(a.subtreeFlags&8772)!==0):Ua(t,a),ra=c,nn=f}break;case 30:break;default:Ua(t,a)}}function Km(t){var n=t.alternate;n!==null&&(t.alternate=null,Km(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&wr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Hn=!1;function sa(t,n,a){for(a=a.child;a!==null;)Qm(t,n,a),a=a.sibling}function Qm(t,n,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(j,a)}catch{}switch(a.tag){case 26:nn||Oi(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Oi(a,n);var s=je,c=Hn;Ba(a.type)&&(je=a.stateNode,Hn=!1),sa(t,n,a),go(a.stateNode),je=s,Hn=c;break;case 5:nn||Oi(a,n);case 6:if(s=je,c=Hn,je=null,sa(t,n,a),je=s,Hn=c,je!==null)if(Hn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){ke(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){ke(a,n,f)}break;case 18:je!==null&&(Hn?(t=je,zg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bo(t)):zg(je,a.stateNode));break;case 4:s=je,c=Hn,je=a.stateNode.containerInfo,Hn=!0,sa(t,n,a),je=s,Hn=c;break;case 0:case 11:case 14:case 15:nn||Da(2,a,n),nn||Da(4,a,n),sa(t,n,a);break;case 1:nn||(Oi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Xm(a,n,s)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:nn=(s=nn)||a.memoizedState!==null,sa(t,n,a),nn=s;break;default:sa(t,n,a)}}function Jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bo(t)}catch(a){ke(n,n.return,a)}}function rx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new jm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new jm),n;default:throw Error(r(435,t.tag))}}function lf(t,n){var a=rx(t);n.forEach(function(s){var c=px.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Ba(b.type)){je=b.stateNode,Hn=!1;break t}break;case 5:je=b.stateNode,Hn=!1;break t;case 3:case 4:je=b.stateNode.containerInfo,Hn=!0;break t}b=b.return}if(je===null)throw Error(r(160));Qm(f,S,c),je=null,Hn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)$m(n,t),n=n.sibling}var _i=null;function $m(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),jn(t),s&4&&(Da(3,t,t.return),ro(3,t),Da(5,t,t.return));break;case 1:Yn(n,t),jn(t),s&512&&(nn||a===null||Oi(a,a.return)),s&64&&ra&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(Yn(n,t),jn(t),s&512&&(nn||a===null||Oi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Wi]||f[gn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,s,a),f[gn]=t,$e(f),s=f;break t;case"link":var S=Yg("link","href",c).get(s+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Yg("meta","content",c).get(s+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[gn]=t,$e(f),s=f}t.stateNode=s}else jg(c,t.type,t.stateNode);else t.stateNode=qg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?jg(c,t.type,t.stateNode):qg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&af(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),jn(t),s&512&&(nn||a===null||Oi(a,a.return)),a!==null&&s&4&&af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),jn(t),s&512&&(nn||a===null||Oi(a,a.return)),t.flags&32){c=t.stateNode;try{tn(c,"")}catch(lt){ke(t,t.return,lt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,af(t,c,a!==null?a.memoizedProps:c)),s&1024&&(of=!0);break;case 6:if(Yn(n,t),jn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(lt){ke(t,t.return,lt)}}break;case 3:if(Zl=null,c=_i,_i=Yl(n.containerInfo),Yn(n,t),_i=c,jn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(n.containerInfo)}catch(lt){ke(t,t.return,lt)}of&&(of=!1,tg(t));break;case 4:s=_i,_i=Yl(t.stateNode.containerInfo),Yn(n,t),jn(t),_i=s;break;case 12:Yn(n,t),jn(t);break;case 13:Yn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pf=be()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,lf(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=ra,dt=nn;if(ra=$||c,nn=dt||B,Yn(n,t),nn=dt,ra=$,jn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ra||nn||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=B.stateNode;var _t=B.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(lt){ke(B,B.return,lt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(lt){ke(B,B.return,lt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,lf(t,a))));break;case 19:Yn(n,t),jn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,lf(t,s)));break;case 30:break;case 21:break;default:Yn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(qm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=rf(t);Ol(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(tn(S,""),a.flags&=-33);var b=rf(t);Ol(t,b,S);break;case 3:case 4:var B=a.stateNode.containerInfo,$=rf(t);sf(t,$,B);break;default:throw Error(r(161))}}catch(dt){ke(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function tg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;tg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ua(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zm(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Da(4,n,n.return),dr(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xm(n,n.return,a),dr(n);break;case 27:go(n.stateNode);case 26:case 5:Oi(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function Na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Na(c,f,a),ro(4,f);break;case 1:if(Na(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){ke(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)wp(B[c],b)}catch($){ke(s,s.return,$)}}a&&S&64&&km(f),so(f,f.return);break;case 27:Ym(f);case 26:case 5:Na(c,f,a),a&&s===null&&S&4&&Wm(f),so(f,f.return);break;case 12:Na(c,f,a);break;case 13:Na(c,f,a),a&&S&4&&Jm(c,f);break;case 22:f.memoizedState===null&&Na(c,f,a),so(f,f.return);break;case 30:break;default:Na(c,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ws(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t))}function Pi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)eg(t,n,a,s),n=n.sibling}function eg(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(t,n,a,s),c&2048&&ro(9,n);break;case 1:Pi(t,n,a,s);break;case 3:Pi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t)));break;case 12:if(c&2048){Pi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){ke(n,n.return,B)}}else Pi(t,n,a,s);break;case 13:Pi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Pi(t,n,a,s):oo(t,n):f._visibility&2?Pi(t,n,a,s):(f._visibility|=2,jr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&cf(S,n);break;case 24:Pi(t,n,a,s),c&2048&&uf(n.alternate,n);break;default:Pi(t,n,a,s)}}function jr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,b=a,B=s,$=S.flags;switch(S.tag){case 0:case 11:case 15:jr(f,S,b,B,c),ro(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?jr(f,S,b,B,c):oo(f,S):(dt._visibility|=2,jr(f,S,b,B,c)),c&&$&2048&&cf(S.alternate,S);break;case 24:jr(f,S,b,B,c),c&&$&2048&&uf(S.alternate,S);break;default:jr(f,S,b,B,c)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&cf(s.alternate,s);break;case 24:oo(a,s),c&2048&&uf(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Zr(t){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)ng(t),t=t.sibling}function ng(t){switch(t.tag){case 26:Zr(t),t.flags&lo&&t.memoizedState!==null&&Xx(_i,t.memoizedState,t.memoizedProps);break;case 5:Zr(t);break;case 3:case 4:var n=_i;_i=Yl(t.stateNode.containerInfo),Zr(t),_i=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=lo,lo=16777216,Zr(t),lo=n):Zr(t));break;default:Zr(t)}}function ig(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,rg(s,t)}ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ag(t),t=t.sibling}function ag(t){switch(t.tag){case 0:case 11:case 15:co(t),t.flags&2048&&Da(9,t,t.return);break;case 3:co(t);break;case 12:co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Pl(t)):co(t);break;default:co(t)}}function Pl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,rg(s,t)}ig(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Da(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}t=t.sibling}}function rg(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Da(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,xn=s;else t:for(a=t;xn!==null;){s=xn;var c=s.sibling,f=s.return;if(Km(s),s===a){xn=null;break t}if(c!==null){c.return=f,xn=c;break t}xn=f}}}var sx={getCacheForType:function(t){var n=wn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},ox=typeof WeakMap=="function"?WeakMap:Map,Fe=0,We=null,ge=null,Ee=0,Ie=0,Zn=null,La=!1,Kr=!1,ff=!1,oa=0,Qe=0,Oa=0,pr=0,hf=0,oi=0,Qr=0,uo=null,Gn=null,df=!1,pf=0,Fl=1/0,Il=null,Pa=null,Tn=0,Fa=null,Jr=null,$r=0,mf=0,gf=null,sg=null,fo=0,_f=null;function Kn(){if((Fe&2)!==0&&Ee!==0)return Ee&-Ee;if(L.T!==null){var t=Hr;return t!==0?t:bf()}return Ae()}function og(){oi===0&&(oi=(Ee&536870912)===0||Ue?W():536870912);var t=si.current;return t!==null&&(t.flags|=32),oi}function Qn(t,n,a){(t===We&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(ts(t,0),Ia(t,Ee,oi,!1)),Ft(t,a),((Fe&2)===0||t!==We)&&(t===We&&((Fe&2)===0&&(pr|=a),Qe===4&&Ia(t,Ee,oi,!1)),Fi(t))}function lg(t,n,a){if((Fe&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ct(t,n),c=s?ux(t,n):Sf(t,n,!0),f=s;do{if(c===0){Kr&&!s&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!lx(a)){c=Sf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=t;c=uo;var B=b.current.memoizedState.isDehydrated;if(B&&(ts(b,S).flags|=256),S=Sf(b,S,!1),S!==2){if(ff&&!B){b.errorRecoveryDisabledLanes|=f,pr|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){ts(t,0),Ia(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(s,n,oi,!La);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=pf+300-be(),10<c)){if(Ia(s,n,oi,!La),Xt(s,0,!0)!==0)break t;s.timeoutHandle=Ig(cg.bind(null,s,a,Gn,Il,df,n,oi,pr,Qr,La,f,2,-0,0),c);break t}cg(s,a,Gn,Il,df,n,oi,pr,Qr,La,f,0,-0,0)}}break}while(!0);Fi(t)}function cg(t,n,a,s,c,f,S,b,B,$,dt,_t,at,lt){if(t.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:kx},ng(n),_t=Wx(),_t!==null)){t.cancelPendingCommit=_t(gg.bind(null,t,n,f,a,s,c,S,b,B,dt,1,at,lt)),Ia(t,f,S,!$);return}gg(t,n,f,a,s,c,S,b,B)}function lx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,s){n&=~hf,n&=~pr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-At(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&vt(t,a,n)}function Bl(){return(Fe&6)===0?(ho(0),!1):!0}function vf(){if(ge!==null){if(Ie===0)var t=ge.return;else t=ge,$i=lr=null,Ou(t),qr=null,no=0,t=ge;for(;t!==null;)Vm(t.alternate,t),t=t.return;ge=null}}function ts(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ax(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),vf(),We=t,ge=a=Ki(t.current,null),Ee=n,Ie=0,Zn=null,La=!1,Kr=Ct(t,n),ff=!1,Qr=oi=hf=pr=Oa=Qe=0,Gn=uo=null,df=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-At(s),f=1<<c;n|=t[c],s&=~f}return oa=n,sl(),a}function ug(t,n){pe=null,L.H=Tl,n===Ys||n===ml?(n=Rp(),Ie=3):n===bp?(n=Rp(),Ie=4):Ie=n===Cm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,ge===null&&(Qe=1,Dl(t,ni(n,t.current)))}function fg(){var t=L.H;return L.H=Tl,t===null?Tl:t}function hg(){var t=L.A;return L.A=sx,t}function xf(){Qe=4,La||(Ee&4194048)!==Ee&&si.current!==null||(Kr=!0),(Oa&134217727)===0&&(pr&134217727)===0||We===null||Ia(We,Ee,oi,!1)}function Sf(t,n,a){var s=Fe;Fe|=2;var c=fg(),f=hg();(We!==t||Ee!==n)&&(Il=null,ts(t,n)),n=!1;var S=Qe;t:do try{if(Ie!==0&&ge!==null){var b=ge,B=Zn;switch(Ie){case 8:vf(),S=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var $=Ie;if(Ie=0,Zn=null,es(t,b,B,$),a&&Kr){S=0;break t}break;default:$=Ie,Ie=0,Zn=null,es(t,b,B,$)}}cx(),S=Qe;break}catch(dt){ug(t,dt)}while(!0);return n&&t.shellSuspendCounter++,$i=lr=null,Fe=s,L.H=c,L.A=f,ge===null&&(We=null,Ee=0,sl()),S}function cx(){for(;ge!==null;)dg(ge)}function ux(t,n){var a=Fe;Fe|=2;var s=fg(),c=hg();We!==t||Ee!==n?(Il=null,Fl=be()+500,ts(t,n)):Kr=Ct(t,n);t:do try{if(Ie!==0&&ge!==null){n=ge;var f=Zn;e:switch(Ie){case 1:Ie=0,Zn=null,es(t,n,f,1);break;case 2:case 9:if(Tp(f)){Ie=0,Zn=null,pg(n);break}n=function(){Ie!==2&&Ie!==9||We!==t||(Ie=7),Fi(t)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Tp(f)?(Ie=0,Zn=null,pg(n)):(Ie=0,Zn=null,es(t,n,f,7));break;case 5:var S=null;switch(ge.tag){case 26:S=ge.memoizedState;case 5:case 27:var b=ge;if(!S||Zg(S)){Ie=0,Zn=null;var B=b.sibling;if(B!==null)ge=B;else{var $=b.return;$!==null?(ge=$,zl($)):ge=null}break e}}Ie=0,Zn=null,es(t,n,f,5);break;case 6:Ie=0,Zn=null,es(t,n,f,6);break;case 8:vf(),Qe=6;break t;default:throw Error(r(462))}}fx();break}catch(dt){ug(t,dt)}while(!0);return $i=lr=null,L.H=s,L.A=c,Fe=a,ge!==null?0:(We=null,Ee=0,sl(),Qe)}function fx(){for(;ge!==null&&!De();)dg(ge)}function dg(t){var n=Hm(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?zl(t):ge=n}function pg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Om(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Om(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Ou(n);default:Vm(a,n),n=ge=mp(n,oa),n=Hm(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?zl(t):ge=n}function es(t,n,a,s){$i=lr=null,Ou(n),qr=null,no=0;var c=n.return;try{if(tx(t,c,n,a,Ee)){Qe=1,Dl(t,ni(a,t.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;Qe=1,Dl(t,ni(a,t.current)),ge=null;return}n.flags&32768?(Ue||s===1?t=!0:Kr||(Ee&536870912)!==0?t=!1:(La=t=!0,(s===2||s===9||s===3||s===6)&&(s=si.current,s!==null&&s.tag===13&&(s.flags|=16384))),mg(n,t)):zl(n)}function zl(t){var n=t;do{if((n.flags&32768)!==0){mg(n,La);return}t=n.return;var a=nx(n.alternate,n,oa);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);Qe===0&&(Qe=5)}function mg(t,n){do{var a=ix(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);Qe=6,ge=null}function gg(t,n,a,s,c,f,S,b,B){t.cancelPendingCommit=null;do Hl();while(Tn!==0);if((Fe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=cu,bt(t,a,f,S,b,B),t===We&&(ge=We=null,Ee=0),Jr=n,Fa=t,$r=a,mf=f,gf=c,sg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mx(ye,function(){return Mg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=V.p,V.p=2,S=Fe,Fe|=4;try{ax(t,n,a)}finally{Fe=S,V.p=c,L.T=s}}Tn=1,_g(),vg(),xg()}}function _g(){if(Tn===1){Tn=0;var t=Fa,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=V.p;V.p=2;var c=Fe;Fe|=4;try{$m(n,t);var f=Nf,S=rp(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&ap(b.ownerDocument.documentElement,b)){if(B!==null&&au(b)){var $=B.start,dt=B.end;if(dt===void 0&&(dt=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(dt,b.value.length);else{var _t=b.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var lt=at.getSelection(),ne=b.textContent.length,$t=Math.min(B.start,ne),Ge=B.end===void 0?$t:Math.min(B.end,ne);!lt.extend&&$t>Ge&&(S=Ge,Ge=$t,$t=S);var Y=ip(b,$t),X=ip(b,Ge);if(Y&&X&&(lt.rangeCount!==1||lt.anchorNode!==Y.node||lt.anchorOffset!==Y.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var Q=_t.createRange();Q.setStart(Y.node,Y.offset),lt.removeAllRanges(),$t>Ge?(lt.addRange(Q),lt.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),lt.addRange(Q))}}}}for(_t=[],lt=b;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var pt=_t[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Jl=!!Uf,Nf=Uf=null}finally{Fe=c,V.p=s,L.T=a}}t.current=n,Tn=2}}function vg(){if(Tn===2){Tn=0;var t=Fa,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=V.p;V.p=2;var c=Fe;Fe|=4;try{Zm(t,n.alternate,n)}finally{Fe=c,V.p=s,L.T=a}}Tn=3}}function xg(){if(Tn===4||Tn===3){Tn=0,ae();var t=Fa,n=Jr,a=$r,s=sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Jr=Fa=null,Sg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Pa=null),Le(a),n=n.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(j,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=V.p,V.p=2,L.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var b=s[S];f(b.value,{componentStack:b.stack})}}finally{L.T=n,V.p=c}}($r&3)!==0&&Hl(),Fi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===_f?fo++:(fo=0,_f=t):fo=0,ho(0)}}function Sg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ws(n)))}function Hl(t){return _g(),vg(),xg(),Mg()}function Mg(){if(Tn!==5)return!1;var t=Fa,n=mf;mf=0;var a=Le($r),s=L.T,c=V.p;try{V.p=32>a?32:a,L.T=null,a=gf,gf=null;var f=Fa,S=$r;if(Tn=0,Jr=Fa=null,$r=0,(Fe&6)!==0)throw Error(r(331));var b=Fe;if(Fe|=4,ag(f.current),eg(f,f.current,S,a),Fe=b,ho(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(j,f)}catch{}return!0}finally{V.p=c,L.T=s,Sg(t,n)}}function yg(t,n,a){n=ni(a,n),n=ju(t.stateNode,n,2),t=Aa(t,n,2),t!==null&&(Ft(t,2),Fi(t))}function ke(t,n,a){if(t.tag===3)yg(t,t,a);else for(;n!==null;){if(n.tag===3){yg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))){t=ni(a,t),a=Am(2),s=Aa(n,a,2),s!==null&&(Rm(a,s,n,t),Ft(s,2),Fi(s));break}}n=n.return}}function Mf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new ox;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ff=!0,c.add(a),t=hx.bind(null,t,n,a),n.then(t,t))}function hx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(Ee&a)===a&&(Qe===4||Qe===3&&(Ee&62914560)===Ee&&300>be()-pf?(Fe&2)===0&&ts(t,0):hf|=a,Qr===Ee&&(Qr=0)),Fi(t)}function Eg(t,n){n===0&&(n=Ot()),t=Fr(t,n),t!==null&&(Ft(t,n),Fi(t))}function dx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Eg(t,a)}function px(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Eg(t,a)}function mx(t,n){return de(t,n)}var Gl=null,ns=null,yf=!1,Vl=!1,Ef=!1,mr=0;function Fi(t){t!==ns&&t.next===null&&(ns===null?Gl=ns=t:ns=ns.next=t),Vl=!0,yf||(yf=!0,_x())}function ho(t,n){if(!Ef&&Vl){Ef=!0;do for(var a=!1,s=Gl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-At(42|t)+1)-1,f&=c&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Rg(s,f))}else f=Ee,f=Xt(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,Rg(s,f));s=s.next}while(a);Ef=!1}}function gx(){bg()}function bg(){Vl=yf=!1;var t=0;mr!==0&&(Tx()&&(t=mr),mr=0);for(var n=be(),a=null,s=Gl;s!==null;){var c=s.next,f=Tg(s,n);f===0?(s.next=null,a===null?Gl=c:a.next=c,c===null&&(ns=a)):(a=s,(t!==0||(f&3)!==0)&&(Vl=!0)),s=c}ho(t)}function Tg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-At(f),b=1<<S,B=c[S];B===-1?((b&a)===0||(b&s)!==0)&&(c[S]=oe(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=We,a=Ee,a=Xt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&xe(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ct(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&xe(s),Le(a)){case 2:case 8:a=Me;break;case 32:a=ye;break;case 268435456:a=w;break;default:a=ye}return s=Ag.bind(null,t),a=de(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&xe(s),t.callbackPriority=2,t.callbackNode=null,2}function Ag(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var s=Ee;return s=Xt(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(lg(t,s,n),Tg(t,be()),t.callbackNode!=null&&t.callbackNode===a?Ag.bind(null,t):null)}function Rg(t,n){if(Hl())return null;lg(t,n,!0)}function _x(){Rx(function(){(Fe&6)!==0?de(Xe,gx):bg()})}function bf(){return mr===0&&(mr=W()),mr}function Cg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$o(""+t)}function wg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function vx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Cg((c[yn]||null).action),S=s.submitter;S&&(n=(n=S[yn]||null)?Cg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new il("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(mr!==0){var B=S?wg(c,S):new FormData(c);ku(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=S?wg(c,S):new FormData(c),ku(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Tf=0;Tf<lu.length;Tf++){var Af=lu[Tf],xx=Af.toLowerCase(),Sx=Af[0].toUpperCase()+Af.slice(1);gi(xx,"on"+Sx)}gi(lp,"onAnimationEnd"),gi(cp,"onAnimationIteration"),gi(up,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(Iv,"onTransitionRun"),gi(Bv,"onTransitionStart"),gi(zv,"onTransitionCancel"),gi(fp,"onTransitionEnd"),Sa("onMouseEnter",["mouseout","mouseover"]),Sa("onMouseLeave",["mouseout","mouseover"]),Sa("onPointerEnter",["pointerout","pointerover"]),Sa("onPointerLeave",["pointerout","pointerover"]),Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Dg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var b=s[S],B=b.instance,$=b.currentTarget;if(b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(dt){wl(dt)}c.currentTarget=null,f=B}else for(S=0;S<s.length;S++){if(b=s[S],B=b.instance,$=b.currentTarget,b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(dt){wl(dt)}c.currentTarget=null,f=B}}}}function _e(t,n){var a=n[Ds];a===void 0&&(a=n[Ds]=new Set);var s=t+"__bubble";a.has(s)||(Ug(n,t,2,!1),a.add(s))}function Rf(t,n,a){var s=0;n&&(s|=4),Ug(a,t,s,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Cf(t){if(!t[kl]){t[kl]=!0,Us.forEach(function(a){a!=="selectionchange"&&(Mx.has(a)||Rf(a,!1,t),Rf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[kl]||(n[kl]=!0,Rf("selectionchange",!1,n))}}function Ug(t,n,a,s){switch(e0(n)){case 2:var c=jx;break;case 8:c=Zx;break;default:c=Vf}a=c.bind(null,n,a,t),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function wf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var b=s.stateNode.containerInfo;if(b===c)break;if(S===4)for(S=s.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;b!==null;){if(S=qi(b),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){s=f=S;continue t}b=b.parentNode}}s=s.return}Bd(function(){var $=f,dt=Yc(a),_t=[];t:{var at=hp.get(t);if(at!==void 0){var lt=il,ne=t;switch(t){case"keypress":if(el(a)===0)break t;case"keydown":case"keyup":lt=mv;break;case"focusin":ne="focus",lt=$c;break;case"focusout":ne="blur",lt=$c;break;case"beforeblur":case"afterblur":lt=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=vv;break;case lp:case cp:case up:lt=sv;break;case fp:lt=Sv;break;case"scroll":case"scrollend":lt=ev;break;case"wheel":lt=yv;break;case"copy":case"cut":case"paste":lt=lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=kd;break;case"toggle":case"beforetoggle":lt=bv}var $t=(n&4)!==0,Ge=!$t&&(t==="scroll"||t==="scrollend"),Y=$t?at!==null?at+"Capture":null:at;$t=[];for(var X=$,Q;X!==null;){var pt=X;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Y===null||(pt=Ns(X,Y),pt!=null&&$t.push(mo(X,pt,Q))),Ge)break;X=X.return}0<$t.length&&(at=new lt(at,ne,null,a,dt),_t.push({event:at,listeners:$t}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",at&&a!==qc&&(ne=a.relatedTarget||a.fromElement)&&(qi(ne)||ne[wi]))break t;if((lt||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(ne=a.relatedTarget||a.toElement,lt=$,ne=ne?qi(ne):null,ne!==null&&(Ge=u(ne),$t=ne.tag,ne!==Ge||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(lt=null,ne=$),lt!==ne)){if($t=Gd,pt="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&($t=kd,pt="onPointerLeave",Y="onPointerEnter",X="pointer"),Ge=lt==null?at:xa(lt),Q=ne==null?at:xa(ne),at=new $t(pt,X+"leave",lt,a,dt),at.target=Ge,at.relatedTarget=Q,pt=null,qi(dt)===$&&($t=new $t(Y,X+"enter",ne,a,dt),$t.target=Q,$t.relatedTarget=Ge,pt=$t),Ge=pt,lt&&ne)e:{for($t=lt,Y=ne,X=0,Q=$t;Q;Q=is(Q))X++;for(Q=0,pt=Y;pt;pt=is(pt))Q++;for(;0<X-Q;)$t=is($t),X--;for(;0<Q-X;)Y=is(Y),Q--;for(;X--;){if($t===Y||Y!==null&&$t===Y.alternate)break e;$t=is($t),Y=is(Y)}$t=null}else $t=null;lt!==null&&Ng(_t,at,lt,$t,!1),ne!==null&&Ge!==null&&Ng(_t,Ge,ne,$t,!0)}}t:{if(at=$?xa($):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var Wt=Qd;else if(Zd(at))if(Jd)Wt=Ov;else{Wt=Nv;var me=Uv}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&$a($.elementType)&&(Wt=Qd):Wt=Lv;if(Wt&&(Wt=Wt(t,$))){Kd(_t,Wt,a,dt);break t}me&&me(t,at,$),t==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&Ui(at,"number",at.value)}switch(me=$?xa($):window,t){case"focusin":(Zd(me)||me.contentEditable==="true")&&(Lr=me,ru=$,Hs=null);break;case"focusout":Hs=ru=Lr=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,sp(_t,a,dt);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":sp(_t,a,dt)}var jt;if(eu)t:{switch(t){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Nr?Yd(t,a)&&(te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Xd&&a.locale!=="ko"&&(Nr||te!=="onCompositionStart"?te==="onCompositionEnd"&&Nr&&(jt=zd()):(ya=dt,Kc="value"in ya?ya.value:ya.textContent,Nr=!0)),me=Xl($,te),0<me.length&&(te=new Vd(te,t,null,a,dt),_t.push({event:te,listeners:me}),jt?te.data=jt:(jt=jd(a),jt!==null&&(te.data=jt)))),(jt=Av?Rv(t,a):Cv(t,a))&&(te=Xl($,"onBeforeInput"),0<te.length&&(me=new Vd("onBeforeInput","beforeinput",null,a,dt),_t.push({event:me,listeners:te}),me.data=jt)),vx(_t,t,$,a,dt)}Dg(_t,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Xl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ns(t,a),c!=null&&s.unshift(mo(t,c,f)),c=Ns(t,n),c!=null&&s.push(mo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ng(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var b=a,B=b.alternate,$=b.stateNode;if(b=b.tag,B!==null&&B===s)break;b!==5&&b!==26&&b!==27||$===null||(B=$,c?($=Ns(a,f),$!=null&&S.unshift(mo(a,$,B))):c||($=Ns(a,f),$!=null&&S.push(mo(a,$,B)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var yx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function Lg(t){return(typeof t=="string"?t:""+t).replace(yx,`
`).replace(Ex,"")}function Og(t,n){return n=Lg(n),Lg(t)===n}function Wl(){}function He(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||tn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&tn(t,""+s);break;case"className":ut(t,"class",s);break;case"tabIndex":ut(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ut(t,a,s);break;case"style":En(t,s,f);break;case"data":if(n!=="object"){ut(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=$o(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=$o(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Wl);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=$o(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_e("beforetoggle",t),_e("toggle",t),q(t,"popover",s);break;case"xlinkActuate":it(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":it(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":it(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":it(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":it(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":it(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":it(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":it(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":it(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":q(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ji.get(a)||a,q(t,a,s))}}function Df(t,n,a,s,c,f){switch(a){case"style":En(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?tn(t,s):(typeof s=="number"||typeof s=="bigint")&&tn(t,""+s);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):q(t,a,s)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,f,S,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),s&&He(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var b=f=S=c=null,B=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":c=dt;break;case"type":S=dt;break;case"checked":B=dt;break;case"defaultChecked":$=dt;break;case"value":f=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:He(t,n,s,dt,a,null)}}Cn(t,f,b,B,$,S,c,!1),Ve(t);return;case"select":_e("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":s=b;default:He(t,n,c,b,a,null)}n=f,a=S,t.multiple=!!s,n!=null?rn(t,!!s,n,!1):a!=null&&rn(t,!!s,a,!0);return;case"textarea":_e("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:He(t,n,S,b,a,null)}Pe(t,s,c,f),Ve(t);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":He(t,n,B,s,a,null));return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)_e(po[s],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,$,s,a,null)}return;default:if($a(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Df(t,n,dt,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&He(t,n,b,s,a,null))}function bx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,b=null,B=null,$=null,dt=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=_t;default:s.hasOwnProperty(lt)||He(t,n,lt,null,s,_t)}}for(var at in s){var lt=s[at];if(_t=a[at],s.hasOwnProperty(at)&&(lt!=null||_t!=null))switch(at){case"type":f=lt;break;case"name":c=lt;break;case"checked":$=lt;break;case"defaultChecked":dt=lt;break;case"value":S=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==_t&&He(t,n,at,lt,s,_t)}}ve(t,S,b,B,$,dt,f,c);return;case"select":lt=S=b=at=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":lt=B;default:s.hasOwnProperty(f)||He(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":at=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==B&&He(t,n,c,f,s,B)}n=b,a=S,s=lt,at!=null?rn(t,!!a,at,!1):!!s!=!!a&&(n!=null?rn(t,!!a,n,!0):rn(t,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:He(t,n,b,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":at=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&He(t,n,S,c,s,f)}Ma(t,at,lt);return;case"option":for(var ne in a)at=a[ne],a.hasOwnProperty(ne)&&at!=null&&!s.hasOwnProperty(ne)&&(ne==="selected"?t.selected=!1:He(t,n,ne,null,s,at));for(B in s)at=s[B],lt=a[B],s.hasOwnProperty(B)&&at!==lt&&(at!=null||lt!=null)&&(B==="selected"?t.selected=at&&typeof at!="function"&&typeof at!="symbol":He(t,n,B,at,s,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)at=a[$t],a.hasOwnProperty($t)&&at!=null&&!s.hasOwnProperty($t)&&He(t,n,$t,null,s,at);for($ in s)if(at=s[$],lt=a[$],s.hasOwnProperty($)&&at!==lt&&(at!=null||lt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:He(t,n,$,at,s,lt)}return;default:if($a(n)){for(var Ge in a)at=a[Ge],a.hasOwnProperty(Ge)&&at!==void 0&&!s.hasOwnProperty(Ge)&&Df(t,n,Ge,void 0,s,at);for(dt in s)at=s[dt],lt=a[dt],!s.hasOwnProperty(dt)||at===lt||at===void 0&&lt===void 0||Df(t,n,dt,at,s,lt);return}}for(var Y in a)at=a[Y],a.hasOwnProperty(Y)&&at!=null&&!s.hasOwnProperty(Y)&&He(t,n,Y,null,s,at);for(_t in s)at=s[_t],lt=a[_t],!s.hasOwnProperty(_t)||at===lt||at==null&&lt==null||He(t,n,_t,at,s,lt)}var Uf=null,Nf=null;function ql(t){return t.nodeType===9?t:t.ownerDocument}function Pg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Lf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Of=null;function Tx(){var t=window.event;return t&&t.type==="popstate"?t===Of?!1:(Of=t,!0):(Of=null,!1)}var Ig=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,Rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(t){return Bg.resolve(null).then(t).catch(Cx)}:Ig;function Cx(t){setTimeout(function(){throw t})}function Ba(t){return t==="head"}function zg(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&go(S.documentElement),a&2&&go(S.body),a&4)for(a=S.head,go(a),S=a.firstChild;S;){var b=S.nextSibling,B=S.nodeName;S[Wi]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(c===0){t.removeChild(f),bo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);bo(n)}function Pf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function wx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Wi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Dx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ux(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var If=null;function Hg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Gg(t,n,a){switch(n=ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);wr(t)}var li=new Map,Vg=new Set;function Yl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=V.d;V.d={f:Nx,r:Lx,D:Ox,C:Px,L:Fx,m:Ix,X:zx,S:Bx,M:Hx};function Nx(){var t=la.f(),n=Bl();return t||n}function Lx(t){var n=pi(t);n!==null&&n.tag===5&&n.type==="form"?lm(n):la.r(t)}var as=typeof document>"u"?null:document;function kg(t,n,a){var s=as;if(s&&typeof n=="string"&&n){var c=se(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Vg.has(c)||(Vg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),An(n,"link",t),$e(n),s.head.appendChild(n)))}}function Ox(t){la.D(t),kg("dns-prefetch",t,null)}function Px(t,n){la.C(t,n),kg("preconnect",t,n)}function Fx(t,n,a){la.L(t,n,a);var s=as;if(s&&t&&n){var c='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+se(a.imageSizes)+'"]')):c+='[href="'+se(t)+'"]';var f=c;switch(n){case"style":f=rs(t);break;case"script":f=ss(t)}li.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),An(n,"link",t),$e(n),s.head.appendChild(n)))}}function Ix(t,n){la.m(t,n);var a=as;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+se(s)+'"][href="'+se(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ss(t)}if(!li.has(f)&&(t=_({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),An(s,"link",t),$e(s),a.head.appendChild(s)}}}function Bx(t,n,a){la.S(t,n,a);var s=as;if(s&&t){var c=mi(s).hoistableStyles,f=rs(t);n=n||"default";var S=c.get(f);if(!S){var b={loading:0,preload:null};if(S=s.querySelector(_o(f)))b.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&Bf(t,a);var B=S=s.createElement("link");$e(B),An(B,"link",t),B._p=new Promise(function($,dt){B.onload=$,B.onerror=dt}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,jl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(f,S)}}}function zx(t,n){la.X(t,n);var a=as;if(a&&t){var s=mi(a).hoistableScripts,c=ss(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=_({src:t,async:!0},n),(n=li.get(c))&&zf(t,n),f=a.createElement("script"),$e(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Hx(t,n){la.M(t,n);var a=as;if(a&&t){var s=mi(a).hoistableScripts,c=ss(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=li.get(c))&&zf(t,n),f=a.createElement("script"),$e(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Xg(t,n,a,s){var c=(c=J.current)?Yl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rs(a.href),a=mi(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=rs(a.href);var f=mi(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(_o(t)))&&!f._p&&(S.instance=f,S.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||Gx(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ss(a),a=mi(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function rs(t){return'href="'+se(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function Wg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Gx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),$e(n),t.head.appendChild(n))}function ss(t){return'[src="'+se(t)+'"]'}function vo(t){return"script[async]"+t}function qg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+se(a.href)+'"]');if(s)return n.instance=s,$e(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),$e(s),An(s,"style",c),jl(s,a.precedence,t),n.instance=s;case"stylesheet":c=rs(a.href);var f=t.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,$e(f),f;s=Wg(a),(c=li.get(c))&&Bf(s,c),f=(t.ownerDocument||t).createElement("link"),$e(f);var S=f;return S._p=new Promise(function(b,B){S.onload=b,S.onerror=B}),An(f,"link",s),n.state.loading|=4,jl(f,a.precedence,t),n.instance=f;case"script":return f=ss(a.src),(c=t.querySelector(vo(f)))?(n.instance=c,$e(c),c):(s=a,(c=li.get(f))&&(s=_({},a),zf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),$e(c),An(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,jl(s,a.precedence,t));return n.instance}function jl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var b=s[S];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Zl=null;function Yg(t,n,a){if(Zl===null){var s=new Map,c=Zl=new Map;c.set(a,s)}else c=Zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Wi]||f[gn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var b=s.get(S);b?b.push(f):s.set(S,[f])}}return s}function jg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Vx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Zg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var xo=null;function kx(){}function Xx(t,n,a){if(xo===null)throw Error(r(475));var s=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=rs(a.href),f=t.querySelector(_o(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Kl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,$e(f);return}f=t.ownerDocument||t,a=Wg(a),(c=li.get(c))&&Bf(a,c),f=f.createElement("link"),$e(f);var S=f;S._p=new Promise(function(b,B){S.onload=b,S.onerror=B}),An(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Kl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Wx(){if(xo===null)throw Error(r(475));var t=xo;return t.stylesheets&&t.count===0&&Hf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Hf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Kl(){if(this.count--,this.count===0){if(this.stylesheets)Hf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ql=null;function Hf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ql=new Map,n.forEach(qx,t),Ql=null,Kl.call(t))}function qx(t,n){if(!(n.state.loading&4)){var a=Ql.get(t);if(a)var s=a.get(null);else{a=new Map,Ql.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Kl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var So={$$typeof:F,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function Yx(t,n,a,s,c,f,S,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Kg(t,n,a,s,c,f,S,b,B,$,dt,_t){return t=new Yx(t,n,a,S,b,B,$,_t),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=Su(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},bu(f),t}function Qg(t){return t?(t=Ir,t):Ir}function Jg(t,n,a,s,c,f){c=Qg(c),s.context===null?s.context=c:s.pendingContext=c,s=Ta(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Aa(t,s,n),a!==null&&(Qn(a,t,n),Zs(a,t,n))}function $g(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Gf(t,n){$g(t,n),(t=t.alternate)&&$g(t,n)}function t0(t){if(t.tag===13){var n=Fr(t,67108864);n!==null&&Qn(n,t,67108864),Gf(t,67108864)}}var Jl=!0;function jx(t,n,a,s){var c=L.T;L.T=null;var f=V.p;try{V.p=2,Vf(t,n,a,s)}finally{V.p=f,L.T=c}}function Zx(t,n,a,s){var c=L.T;L.T=null;var f=V.p;try{V.p=8,Vf(t,n,a,s)}finally{V.p=f,L.T=c}}function Vf(t,n,a,s){if(Jl){var c=kf(s);if(c===null)wf(t,n,s,$l,a),n0(t,s);else if(Qx(c,t,n,a,s))s.stopPropagation();else if(n0(t,s),n&4&&-1<Kx.indexOf(t)){for(;c!==null;){var f=pi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Bt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var B=1<<31-At(S);b.entanglements[1]|=B,S&=~B}Fi(f),(Fe&6)===0&&(Fl=be()+500,ho(0))}}break;case 13:b=Fr(f,2),b!==null&&Qn(b,f,2),Bl(),Gf(f,2)}if(f=kf(s),f===null&&wf(t,n,s,$l,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else wf(t,n,s,null,a)}}function kf(t){return t=Yc(t),Xf(t)}var $l=null;function Xf(t){if($l=null,t=qi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $l=t,null}function e0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case Xe:return 2;case Me:return 8;case ye:case kt:return 32;case w:return 268435456;default:return 32}default:return 32}}var Wf=!1,za=null,Ha=null,Ga=null,Mo=new Map,yo=new Map,Va=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n0(t,n){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Eo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=pi(n),n!==null&&t0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Qx(t,n,a,s,c){switch(n){case"focusin":return za=Eo(za,t,n,a,s,c),!0;case"dragenter":return Ha=Eo(Ha,t,n,a,s,c),!0;case"mouseover":return Ga=Eo(Ga,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,Eo(Mo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,Eo(yo.get(f)||null,t,n,a,s,c)),!0}return!1}function i0(t){var n=qi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ei(t.priority,function(){if(a.tag===13){var s=Kn();s=ee(s);var c=Fr(a,s);c!==null&&Qn(c,a,s),Gf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=kf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);qc=s,a.target.dispatchEvent(s),qc=null}else return n=pi(a),n!==null&&t0(n),t.blockedOn=a,!1;n.shift()}return!0}function a0(t,n,a){tc(t)&&a.delete(n)}function Jx(){Wf=!1,za!==null&&tc(za)&&(za=null),Ha!==null&&tc(Ha)&&(Ha=null),Ga!==null&&tc(Ga)&&(Ga=null),Mo.forEach(a0),yo.forEach(a0)}function ec(t,n){t.blockedOn===n&&(t.blockedOn=null,Wf||(Wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Jx)))}var nc=null;function r0(t){nc!==t&&(nc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===t&&(nc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Xf(s||a)===null)continue;break}var f=pi(a);f!==null&&(t.splice(n,3),n-=3,ku(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function bo(t){function n(B){return ec(B,t)}za!==null&&ec(za,t),Ha!==null&&ec(Ha,t),Ga!==null&&ec(Ga,t),Mo.forEach(n),yo.forEach(n);for(var a=0;a<Va.length;a++){var s=Va[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)i0(a),a.blockedOn===null&&Va.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[yn]||null;if(typeof f=="function")S||r0(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[yn]||null)b=S.formAction;else if(Xf(c)!==null)continue}else b=S.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),r0(a)}}}function qf(t){this._internalRoot=t}ic.prototype.render=qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();Jg(a,s,t,n,null,null)},ic.prototype.unmount=qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Jg(t.current,2,null,t,null,null),Bl(),n[wi]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ae();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Va.length&&n!==0&&n<Va[a].priority;a++);Va.splice(a,0,t),a===0&&i0(t)}};var s0=e.version;if(s0!=="19.1.0")throw Error(r(527,s0,"19.1.0"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var $x={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{j=ac.inject($x),ot=ac}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=ym,f=Em,S=bm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Kg(t,1,!1,null,null,a,s,c,f,S,b,null),t[wi]=n.current,Cf(t),new qf(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=ym,S=Em,b=bm,B=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Kg(t,1,!0,n,a??null,s,c,f,S,b,B,$),n.context=Qg(null),a=n.current,s=Kn(),s=ee(s),c=Ta(s),c.callback=null,Aa(a,c,s),a=s,n.current.lanes=a,Ft(n,a),Fi(n),t[wi]=n.current,Cf(t),new ic(n)},Ao.version="19.1.0",Ao}var g0;function cS(){if(g0)return Zf.exports;g0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zf.exports=lS(),Zf.exports}var uS=cS();const fS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),_0=o=>{const e=hS(o);return e.charAt(0).toUpperCase()+e.slice(1)},__=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),dS=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var pS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const mS=Pn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>Pn.createElement("svg",{ref:m,...pS,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:__("lucide",l),...!u&&!dS(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>Pn.createElement(p,_)),...Array.isArray(u)?u:[u]]));const Xi=(o,e)=>{const i=Pn.forwardRef(({className:r,...l},u)=>Pn.createElement(mS,{ref:u,iconNode:e,className:__(`lucide-${fS(_0(o))}`,`lucide-${o}`,r),...l}));return i.displayName=_0(o),i};const gS=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],_S=Xi("award",gS);const vS=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],xS=Xi("code-xml",vS);const SS=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 18a3 3 0 1 0-6 0",key:"16awa0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],MS=Xi("file-user",SS);const yS=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],ES=Xi("github",yS);const bS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],TS=Xi("linkedin",bS);const AS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],RS=Xi("mail",AS);const CS=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],wS=Xi("newspaper",CS);const DS=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],US=Xi("phone",DS);const NS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],LS=Xi("user",NS);const OS=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],PS=Xi("wrench",OS),FS=()=>St.jsxs("div",{className:"flex flex-wrap md:flex-nowrap justify-between items-center gap-3 mb-4 backdrop-blur-md rounded-lg navbar border border-base-300 p-3 bg-base-100 shadow-sm",children:[St.jsx("div",{className:"flex flex-col gap-1 ml-1 md:ml-3 w-full md:w-auto",children:St.jsx("p",{className:"text-[24px] md:text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white ",children:"Full Stack Developer | Systems Engineer | Machine Learning Enthusiast"})}),St.jsxs("ul",{className:"flex gap-4 mr-3",children:[St.jsx("li",{className:"scale-120 hover:scale-115 transition-transform duration-300 ease-in-out btn btn-link btn-circle",children:St.jsx("a",{href:"https://www.linkedin.com/in/anshsharma-ln/",target:"_blank",rel:"noopener noreferrer",children:St.jsx(TS,{className:"text-info"})})}),St.jsx("li",{className:"scale-120 hover:scale-115 transition-transform duration-300 ease-in-out btn btn-link btn-circle",children:St.jsx("a",{href:"https://github.com/Ultimecia1463",target:"_blank",rel:"noopener noreferrer",children:St.jsx(ES,{className:"text-info"})})}),St.jsx("li",{className:"scale-120 hover:scale-115 transition-transform duration-300 ease-in-out btn btn-link btn-circle",children:St.jsx("a",{href:"mailto:anshsharma5565@gmail.com",children:St.jsx(RS,{className:"text-info"})})}),St.jsx("li",{className:"scale-120 hover:scale-115 transition-transform duration-300 ease-in-out btn btn-link btn-circle",children:St.jsx("a",{href:"tel:+917987376083",children:St.jsx(US,{className:"text-info"})})}),St.jsx("li",{className:"scale-120 hover:scale-115 transition-transform duration-300 ease-in-out btn btn-link btn-circle",children:St.jsx("a",{href:"https://drive.google.com/file/d/1rLW79oWxCsAhbJvfOK3xz7iSvbqCG0ly/view",children:St.jsx(MS,{className:"text-info"})})})]})]});function IS(){return St.jsxs("div",{className:"flex flex-col gap-2 mb-4 backdrop-blur-md rounded-lg border-1 border-base-300 p-2 bg-base-100 shadow-sm",children:[St.jsxs("h2",{className:"flex items-center gap-2 text-base ml-3 font-bold text-[24px] bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white",children:[St.jsx(LS,{}),"About Me"]}),St.jsx("p",{className:"ml-3 text-justify mr-3 text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white",children:"I'm Ansh Sharma, a third-year B.Tech student in Computer Science (Data Science) at LNCTE, Bhopal, passionate about building systems from the ground up — from a basic x86 operating systems and Java-based neural networks to full-stack web apps. I enjoy low-level programming, machine learning, and solving real-world problems through tech. I'm an open-source contributor, bug hunter, and co-author of a published IEEE paper on sign language recognition presented at ICOCIT 2024. Always eager to explore, I actively participate in hackathons, tech talks, and conferences."})]})}const hn=({text:o})=>St.jsx("div",{className:"badge badge-info rounded-lg mt-1 mb-1 mr-2 text-[18px] text-accent-content font-semibold transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] ",children:o}),BS=()=>St.jsxs("div",{className:"flex flex-col gap-2 mb-4 backdrop-blur-md rounded-lg border-1 border-base-300 p-2 bg-base-100 shadow-sm",children:[St.jsxs("h2",{className:"flex items-center gap-2 text-base ml-3 font-bold text-[24px] bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white",children:[St.jsx(PS,{}),"Skills"]}),St.jsxs("div",{className:"flex flex-wrap ml-1.5",children:[St.jsx(hn,{text:"JavaScript"}),St.jsx(hn,{text:"React"}),St.jsx(hn,{text:"Node.js"}),St.jsx(hn,{text:"Express.js"}),St.jsx(hn,{text:"MongoDB"}),St.jsx(hn,{text:"HTML"}),St.jsx(hn,{text:"CSS"}),St.jsx(hn,{text:"Tailwind CSS"}),St.jsx(hn,{text:"Git"}),St.jsx(hn,{text:"Java"}),St.jsx(hn,{text:"C++"}),St.jsx(hn,{text:"Python"}),St.jsx(hn,{text:"Linux"}),St.jsx(hn,{text:"Maven"}),St.jsx(hn,{text:"JUnit"}),St.jsx(hn,{text:"JSON"}),St.jsx(hn,{text:"Docker"}),St.jsx(hn,{text:"CMake"})]})]}),zS=({text:o})=>St.jsxs("div",{className:"flex items-start",children:[St.jsx("div",{className:"min-w-[8px] h-[8px] rounded-full bg-base-content/30 m-2 ml-3"}),St.jsx("p",{className:"text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white",children:o})]}),HS=()=>St.jsxs("div",{className:"flex flex-col gap-1 mb-2 backdrop-blur-md rounded-lg border-1 border-base-300 p-2 bg-base-100 shadow-sm",children:[St.jsxs("h2",{className:"flex items-center gap-2 text-base ml-3 font-bold text-[24px]  bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white",children:[St.jsx(wS,{}),"Publications"]}),St.jsx("div",{className:"flex flex-col",children:St.jsx(zS,{text:'Co-author of the research paper "Attention-Driven Modelling of Pose for Sign Language Recognition" — accepted and in process for publication at IEEE ICOCIT 2024.'})})]}),GS="/portfolio/assets/zenith-CXzojRnE.png",VS="/portfolio/assets/islreact-Q501vHwR.jpg",kS="/portfolio/assets/jhttp-CrpVLamv.png",XS="/portfolio/assets/jcnn-CDcqO7du.png",WS="/portfolio/assets/esp-CSWJY7_f.png",Ro=({title:o,description:e,text:i=[],github:r,projectl:l,img:u})=>St.jsxs("div",{className:`
      group relative
      rounded-xl
      border border-base-300/40
      bg-base-100/60
      backdrop-blur-md
      shadow-sm
      transition-all duration-300
      hover:bg-base-100/80
      hover:shadow-md
    `,children:[St.jsx("div",{className:"aspect-video overflow-hidden rounded-t-xl",children:St.jsx("img",{src:u,alt:o,className:"h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"})}),St.jsxs("div",{className:"p-4 space-y-3",children:[St.jsx("h3",{className:"text-lg text-white drop-shadow-sm text-[24px] bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white font-semibold",children:o}),St.jsx("p",{className:"text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white font-semibold",children:e}),St.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:i.map((h,d)=>St.jsx(hn,{text:h},d))}),St.jsxs("div",{className:"flex gap-3 pt-1",children:[St.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:`
              text-xs
              px-3 py-1
              rounded-full
              border border-base-300/50
            text-white/90
              transition-all
              hover:bg-secondary
              hover:text-secondary-content
              
            `,children:"GitHub"}),St.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:`
              text-xs
              px-3 py-1
              rounded-full
              border border-base-300/50
              text-white/90
              transition-all
              hover:bg-secondary
              hover:text-secondary-content
            `,children:"View Project"})]})]})]}),qS=()=>St.jsxs("div",{className:"flex flex-col gap-1 mb-4 ",children:[St.jsxs("h2",{className:"flex items-center gap-2 text-base ml-5 mb-2 mt-2 font-bold text-[24px]  bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white",children:[St.jsx(xS,{})," Projects"]}),St.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 justify-center",children:[St.jsx(Ro,{title:"Java Convolutional Neural Network",description:"A CNN built from scratch in Java without any external machine learning libraries. Implements convolution, pooling, and fully connected layers, trained and evaluated on MNIST data.",text:["Java","Custom CNN","Matrix Math","MNIST","OOP"],github:"https://github.com/Ultimecia1463/Java-cnn",projectl:"https://github.com/Ultimecia1463/Java-cnn/releases",img:XS}),St.jsx(Ro,{title:"ISL to Text Converter",description:"A real-time Indian Sign Language (ISL) recognition system using MediaPipe and TensorFlow.js integrated into a React frontend. It captures hand and pose gestures from webcam or video, translating them into text output dynamically.",text:["React","TensorFlow.js","MediaPipe","Node.js","Express"],github:"https://github.com/Ultimecia1463/islreact",projectl:"https://ultimecia1463.github.io/islreact/",img:VS}),St.jsx(Ro,{title:"Java HTTP Server",description:"A fully functional HTTP/1.1 server built from scratch in Java. Features include multi-threaded request handling, JSON-based configuration, custom request parsing, and structured exception handling.",text:["Java","HTTP/1.1","Multi-threading","Maven","JUnit"],github:"https://github.com/Ultimecia1463/Simple-httpserver",projectl:"https://github.com/Ultimecia1463/Simple-httpserver/releases/",img:kS}),St.jsx(Ro,{title:"Zenith OS",description:"A custom x86 operating system built from scratch using NASM and C. Bootable from a floppy image with FAT filesystem support, debugged and run via QEMU.",text:["x86","NASM","C","QEMU","FAT"],github:"https://github.com/Ultimecia1463/Zenith",projectl:"https://github.com/Ultimecia1463/zenith/releases",img:GS}),St.jsx(Ro,{title:"ESP Email Alert Security System",description:"An IoT-based motion detection system using ESP8266/ESP32 that sends instant email alerts when intrusion or movement is detected. Built with Arduino IDE and integrated over Wi-Fi using SMTP/IFTTT for real-time notifications.",text:["ESP8266","IoT","Arduino","SMTP","Security","C++"],github:"https://github.com/Ultimecia1463/ESP-email-alert-Security-System",projectl:"https://wokwi.com/projects/394723338612709377",img:WS})]})]}),rc=({text:o})=>St.jsxs("div",{className:"flex items-start",children:[St.jsx("div",{className:"min-w-[8px] h-[8px] rounded-full bg-base-content/30 m-2 ml-3"}),St.jsx("p",{className:"text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white",children:o})]}),YS=()=>St.jsxs("div",{className:"flex flex-col gap-1 mb-4 backdrop-blur-md rounded-lg border-1 border-base-300 p-2 bg-base-100 shadow-sm ",children:[St.jsxs("h2",{className:"flex items-center gap-2 text-base ml-3 font-bold text-[24px] bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white ",children:[St.jsx(_S,{className:"scale-110"}),"Achievement"]}),St.jsxs("div",{className:"flex flex-col ",children:[St.jsx(rc,{text:"HacktoberFest Contributer"}),St.jsx(rc,{text:"GsSoc Campus Ambassador 2025"}),St.jsx(rc,{text:"Open Source Contributor"}),St.jsx(rc,{text:"IEEE ICOCIT 2025 Research Paper Co-Author"})]})]});const Rd="182",jS=0,v0=1,ZS=2,wc=1,KS=2,Fo=3,Ja=0,kn=1,pa=2,ma=0,Ms=1,Uh=2,x0=3,S0=4,QS=5,Er=100,JS=101,$S=102,tM=103,eM=104,nM=200,iM=201,aM=202,rM=203,Nh=204,Lh=205,sM=206,oM=207,lM=208,cM=209,uM=210,fM=211,hM=212,dM=213,pM=214,Oh=0,Ph=1,Fh=2,Es=3,Ih=4,Bh=5,zh=6,Hh=7,v_=0,mM=1,gM=2,Hi=0,x_=1,S_=2,M_=3,y_=4,E_=5,b_=6,T_=7,A_=300,Cr=301,bs=302,Gh=303,Vh=304,Gc=306,kh=1e3,ti=1001,Xh=1002,Rn=1003,_M=1004,sc=1005,cn=1006,$f=1007,Tr=1008,fi=1009,R_=1010,C_=1011,zo=1012,Cd=1013,Gi=1014,bi=1015,Vi=1016,wd=1017,Dd=1018,Ho=1020,w_=35902,D_=35899,U_=1021,N_=1022,hi=1023,_a=1026,Ar=1027,L_=1028,Ud=1029,Ts=1030,Nd=1031,Ld=1033,Dc=33776,Uc=33777,Nc=33778,Lc=33779,Wh=35840,qh=35841,Yh=35842,jh=35843,Zh=36196,Kh=37492,Qh=37496,Jh=37488,$h=37489,td=37490,ed=37491,nd=37808,id=37809,ad=37810,rd=37811,sd=37812,od=37813,ld=37814,cd=37815,ud=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,gd=36492,_d=36494,vd=36495,xd=36283,Sd=36284,Md=36285,yd=36286,vM=3200,xM=0,SM=1,Ka="",ui="srgb",As="srgb-linear",Pc="linear",Be="srgb",os=7680,M0=519,MM=512,yM=513,EM=514,Od=515,bM=516,TM=517,Pd=518,AM=519,y0=35044,E0="300 es",zi=2e3,Fc=2001;function O_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ic(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function RM(){const o=Ic("canvas");return o.style.display="block",o}const b0={};function T0(...o){const e="THREE."+o.shift();console.log(e,...o)}function ie(...o){const e="THREE."+o.shift();console.warn(e,...o)}function we(...o){const e="THREE."+o.shift();console.error(e,...o)}function Go(...o){const e=o.join(" ");e in b0||(b0[e]=!0,ie(...o))}function CM(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Cs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=Math.PI/180,Ed=180/Math.PI;function ko(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function wM(o,e){return(o%e+e)%e}function eh(o,e,i){return(1-i)*o+i*e}function Co(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class re{constructor(e=0,i=0){re.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3],M=u[h+0],E=u[h+1],T=u[h+2],C=u[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x;return}if(d>=1){e[i+0]=M,e[i+1]=E,e[i+2]=T,e[i+3]=C;return}if(x!==C||m!==M||p!==E||_!==T){let y=m*M+p*E+_*T+x*C;y<0&&(M=-M,E=-E,T=-T,C=-C,y=-y);let v=1-d;if(y<.9995){const I=Math.acos(y),F=Math.sin(I);v=Math.sin(v*I)/F,d=Math.sin(d*I)/F,m=m*v+M*d,p=p*v+E*d,_=_*v+T*d,x=x*v+C*d}else{m=m*v+M*d,p=p*v+E*d,_=_*v+T*d,x=x*v+C*d;const I=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=I,p*=I,_*=I,x*=I}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=u[h],M=u[h+1],E=u[h+2],T=u[h+3];return e[i]=d*T+_*x+m*E-p*M,e[i+1]=m*T+_*M+p*x-d*E,e[i+2]=p*T+_*E+d*M-m*x,e[i+3]=_*T-d*x-m*M-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),x=d(u/2),M=m(r/2),E=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=M*_*x+p*E*T,this._y=p*E*x-M*_*T,this._z=p*_*T+M*E*x,this._w=p*_*x-M*E*T;break;case"YXZ":this._x=M*_*x+p*E*T,this._y=p*E*x-M*_*T,this._z=p*_*T-M*E*x,this._w=p*_*x+M*E*T;break;case"ZXY":this._x=M*_*x-p*E*T,this._y=p*E*x+M*_*T,this._z=p*_*T+M*E*x,this._w=p*_*x-M*E*T;break;case"ZYX":this._x=M*_*x-p*E*T,this._y=p*E*x+M*_*T,this._z=p*_*T-M*E*x,this._w=p*_*x+M*E*T;break;case"YZX":this._x=M*_*x+p*E*T,this._y=p*E*x+M*_*T,this._z=p*_*T-M*E*x,this._w=p*_*x-M*E*T;break;case"XZY":this._x=M*_*x-p*E*T,this._y=p*E*x-M*_*T,this._z=p*_*T+M*E*x,this._w=p*_*x+M*E*T;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],M=r+d+x;if(M>0){const E=.5/Math.sqrt(M+1);this._w=.25/E,this._x=(_-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(r>d&&r>x){const E=2*Math.sqrt(1+r-d-x);this._w=(_-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>x){const E=2*Math.sqrt(1+d-r-x);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+_)/E}else{const E=2*Math.sqrt(1+x-r-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(A0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(A0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*_,this.y=r+m*_+d*p-u*x,this.z=l+m*x+u*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new st,A0=new Xo;class ue{constructor(e,i,r,l,u,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],x=r[7],M=r[2],E=r[5],T=r[8],C=l[0],y=l[3],v=l[6],I=l[1],F=l[4],N=l[7],O=l[2],z=l[5],H=l[8];return u[0]=h*C+d*I+m*O,u[3]=h*y+d*F+m*z,u[6]=h*v+d*N+m*H,u[1]=p*C+_*I+x*O,u[4]=p*y+_*F+x*z,u[7]=p*v+_*N+x*H,u[2]=M*C+E*I+T*O,u[5]=M*y+E*F+T*z,u[8]=M*v+E*N+T*H,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],x=_*h-d*p,M=d*m-_*u,E=p*u-h*m,T=i*x+r*M+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(l*p-_*r)*C,e[2]=(d*r-l*h)*C,e[3]=M*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=E*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ih.makeScale(e,i)),this}rotate(e){return this.premultiply(ih.makeRotation(-e)),this}translate(e,i){return this.premultiply(ih.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ih=new ue,R0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DM(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=ys(l.r),l.g=ys(l.g),l.b=ys(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?Pc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:e,whitePoint:r,transfer:Pc,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Be,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),o}const Te=DM();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ys(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ls;class UM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ls===void 0&&(ls=Ic("canvas")),ls.width=e.width,ls.height=e.height;const l=ls.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ic("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ga(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:e.width,height:e.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NM=0;class Fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(ah(l[h].image)):u.push(ah(l[h]))}else u=ah(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function ah(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?UM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let LM=0;const rh=new st;class Fn extends Cs{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=ti,l=ti,u=cn,h=Tr,d=hi,m=fi,p=Fn.DEFAULT_ANISOTROPY,_=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=ko(),this.name="",this.source=new Fd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kh:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kh:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=A_;Fn.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],x=m[8],M=m[1],E=m[5],T=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(_-M)<.01&&Math.abs(x-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+M)<.1&&Math.abs(x+C)<.1&&Math.abs(T+y)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(p+1)/2,N=(E+1)/2,O=(v+1)/2,z=(_+M)/4,H=(x+C)/4,tt=(T+y)/4;return F>N&&F>O?F<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(F),l=z/r,u=H/r):N>O?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=z/l,u=tt/l):O<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(O),r=H/u,l=tt/u),this.set(r,l,u,i),this}let I=Math.sqrt((y-T)*(y-T)+(x-C)*(x-C)+(M-_)*(M-_));return Math.abs(I)<.001&&(I=1),this.x=(y-T)/I,this.y=(x-C)/I,this.z=(M-_)/I,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OM extends Cs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Je(0,0,e,i),this.scissorTest=!1,this.viewport=new Je(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Fn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Fd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends OM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class P_ extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PM extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,xi):xi.fromBufferAttribute(u,h),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),lc.subVectors(this.max,wo),cs.subVectors(e.a,wo),us.subVectors(e.b,wo),fs.subVectors(e.c,wo),Xa.subVectors(us,cs),Wa.subVectors(fs,us),gr.subVectors(cs,fs);let i=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-gr.z,gr.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,gr.z,0,-gr.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-gr.y,gr.x,0];return!sh(i,cs,us,fs,lc)||(i=[1,0,0,0,1,0,0,0,1],!sh(i,cs,us,fs,lc))?!1:(cc.crossVectors(Xa,Wa),i=[cc.x,cc.y,cc.z],sh(i,cs,us,fs,lc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ca=[new st,new st,new st,new st,new st,new st,new st,new st],xi=new st,oc=new Wo,cs=new st,us=new st,fs=new st,Xa=new st,Wa=new st,gr=new st,wo=new st,lc=new st,cc=new st,_r=new st;function sh(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){_r.fromArray(o,u);const d=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=e.dot(_r),p=i.dot(_r),_=r.dot(_r);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const FM=new Wo,Do=new st,oh=new st;class Vc{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):FM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Do,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(oh)),this.expandByPoint(Do.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ua=new st,lh=new st,uc=new st,qa=new st,ch=new st,fc=new st,uh=new st;class F_{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){lh.copy(e).add(i).multiplyScalar(.5),uc.copy(i).sub(e).normalize(),qa.copy(this.origin).sub(lh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(uc),d=qa.dot(this.direction),m=-qa.dot(uc),p=qa.lengthSq(),_=Math.abs(1-h*h);let x,M,E,T;if(_>0)if(x=h*m-d,M=h*d-m,T=u*_,x>=0)if(M>=-T)if(M<=T){const C=1/_;x*=C,M*=C,E=x*(x+h*M+2*d)+M*(h*x+M+2*m)+p}else M=u,x=Math.max(0,-(h*M+d)),E=-x*x+M*(M+2*m)+p;else M=-u,x=Math.max(0,-(h*M+d)),E=-x*x+M*(M+2*m)+p;else M<=-T?(x=Math.max(0,-(-h*u+d)),M=x>0?-u:Math.min(Math.max(-u,-m),u),E=-x*x+M*(M+2*m)+p):M<=T?(x=0,M=Math.min(Math.max(-u,-m),u),E=M*(M+2*m)+p):(x=Math.max(0,-(h*u+d)),M=x>0?u:Math.min(Math.max(-u,-m),u),E=-x*x+M*(M+2*m)+p);else M=h>0?-u:u,x=Math.max(0,-(h*M+d)),E=-x*x+M*(M+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(lh).addScaledVector(uc,M),E}intersectSphere(e,i){ua.subVectors(e.center,this.origin);const r=ua.dot(this.direction),l=ua.dot(ua)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,M=this.origin;return p>=0?(r=(e.min.x-M.x)*p,l=(e.max.x-M.x)*p):(r=(e.max.x-M.x)*p,l=(e.min.x-M.x)*p),_>=0?(u=(e.min.y-M.y)*_,h=(e.max.y-M.y)*_):(u=(e.max.y-M.y)*_,h=(e.min.y-M.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-M.z)*x,m=(e.max.z-M.z)*x):(d=(e.max.z-M.z)*x,m=(e.min.z-M.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ua)!==null}intersectTriangle(e,i,r,l,u){ch.subVectors(i,e),fc.subVectors(r,e),uh.crossVectors(ch,fc);let h=this.direction.dot(uh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;qa.subVectors(this.origin,e);const m=d*this.direction.dot(fc.crossVectors(qa,fc));if(m<0)return null;const p=d*this.direction.dot(ch.cross(qa));if(p<0||m+p>h)return null;const _=-d*qa.dot(uh);return _<0?null:this.at(_/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,r,l,u,h,d,m,p,_,x,M,E,T,C,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,_,x,M,E,T,C,y)}set(e,i,r,l,u,h,d,m,p,_,x,M,E,T,C,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=x,v[14]=M,v[3]=E,v[7]=T,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/hs.setFromMatrixColumn(e,0).length(),u=1/hs.setFromMatrixColumn(e,1).length(),h=1/hs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const M=h*_,E=h*x,T=d*_,C=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=E+T*p,i[5]=M-C*p,i[9]=-d*m,i[2]=C-M*p,i[6]=T+E*p,i[10]=h*m}else if(e.order==="YXZ"){const M=m*_,E=m*x,T=p*_,C=p*x;i[0]=M+C*d,i[4]=T*d-E,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=E*d-T,i[6]=C+M*d,i[10]=h*m}else if(e.order==="ZXY"){const M=m*_,E=m*x,T=p*_,C=p*x;i[0]=M-C*d,i[4]=-h*x,i[8]=T+E*d,i[1]=E+T*d,i[5]=h*_,i[9]=C-M*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const M=h*_,E=h*x,T=d*_,C=d*x;i[0]=m*_,i[4]=T*p-E,i[8]=M*p+C,i[1]=m*x,i[5]=C*p+M,i[9]=E*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const M=h*m,E=h*p,T=d*m,C=d*p;i[0]=m*_,i[4]=C-M*x,i[8]=T*x+E,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=E*x+T,i[10]=M-C*x}else if(e.order==="XZY"){const M=h*m,E=h*p,T=d*m,C=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=M*x+C,i[5]=h*_,i[9]=E*x-T,i[2]=T*x-E,i[6]=d*_,i[10]=C*x+M}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IM,e,BM)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ya.crossVectors(r,Jn),Ya.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ya.crossVectors(r,Jn)),Ya.normalize(),hc.crossVectors(Jn,Ya),l[0]=Ya.x,l[4]=hc.x,l[8]=Jn.x,l[1]=Ya.y,l[5]=hc.y,l[9]=Jn.y,l[2]=Ya.z,l[6]=hc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],x=r[5],M=r[9],E=r[13],T=r[2],C=r[6],y=r[10],v=r[14],I=r[3],F=r[7],N=r[11],O=r[15],z=l[0],H=l[4],tt=l[8],R=l[12],D=l[1],k=l[5],rt=l[9],ct=l[13],ht=l[2],ft=l[6],L=l[10],V=l[14],et=l[3],Mt=l[7],U=l[11],Z=l[15];return u[0]=h*z+d*D+m*ht+p*et,u[4]=h*H+d*k+m*ft+p*Mt,u[8]=h*tt+d*rt+m*L+p*U,u[12]=h*R+d*ct+m*V+p*Z,u[1]=_*z+x*D+M*ht+E*et,u[5]=_*H+x*k+M*ft+E*Mt,u[9]=_*tt+x*rt+M*L+E*U,u[13]=_*R+x*ct+M*V+E*Z,u[2]=T*z+C*D+y*ht+v*et,u[6]=T*H+C*k+y*ft+v*Mt,u[10]=T*tt+C*rt+y*L+v*U,u[14]=T*R+C*ct+y*V+v*Z,u[3]=I*z+F*D+N*ht+O*et,u[7]=I*H+F*k+N*ft+O*Mt,u[11]=I*tt+F*rt+N*L+O*U,u[15]=I*R+F*ct+N*V+O*Z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],x=e[6],M=e[10],E=e[14],T=e[3],C=e[7],y=e[11],v=e[15],I=m*E-p*M,F=d*E-p*x,N=d*M-m*x,O=h*E-p*_,z=h*M-m*_,H=h*x-d*_;return i*(C*I-y*F+v*N)-r*(T*I-y*O+v*z)+l*(T*F-C*O+v*H)-u*(T*N-C*z+y*H)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],x=e[9],M=e[10],E=e[11],T=e[12],C=e[13],y=e[14],v=e[15],I=x*y*p-C*M*p+C*m*E-d*y*E-x*m*v+d*M*v,F=T*M*p-_*y*p-T*m*E+h*y*E+_*m*v-h*M*v,N=_*C*p-T*x*p+T*d*E-h*C*E-_*d*v+h*x*v,O=T*x*m-_*C*m-T*d*M+h*C*M+_*d*y-h*x*y,z=i*I+r*F+l*N+u*O;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/z;return e[0]=I*H,e[1]=(C*M*u-x*y*u-C*l*E+r*y*E+x*l*v-r*M*v)*H,e[2]=(d*y*u-C*m*u+C*l*p-r*y*p-d*l*v+r*m*v)*H,e[3]=(x*m*u-d*M*u-x*l*p+r*M*p+d*l*E-r*m*E)*H,e[4]=F*H,e[5]=(_*y*u-T*M*u+T*l*E-i*y*E-_*l*v+i*M*v)*H,e[6]=(T*m*u-h*y*u-T*l*p+i*y*p+h*l*v-i*m*v)*H,e[7]=(h*M*u-_*m*u+_*l*p-i*M*p-h*l*E+i*m*E)*H,e[8]=N*H,e[9]=(T*x*u-_*C*u-T*r*E+i*C*E+_*r*v-i*x*v)*H,e[10]=(h*C*u-T*d*u+T*r*p-i*C*p-h*r*v+i*d*v)*H,e[11]=(_*d*u-h*x*u-_*r*p+i*x*p+h*r*E-i*d*E)*H,e[12]=O*H,e[13]=(_*C*l-T*x*l+T*r*M-i*C*M-_*r*y+i*x*y)*H,e[14]=(T*d*l-h*C*l-T*r*m+i*C*m+h*r*y-i*d*y)*H,e[15]=(h*x*l-_*d*l+_*r*m-i*x*m-h*r*M+i*d*M)*H,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,x=d+d,M=u*p,E=u*_,T=u*x,C=h*_,y=h*x,v=d*x,I=m*p,F=m*_,N=m*x,O=r.x,z=r.y,H=r.z;return l[0]=(1-(C+v))*O,l[1]=(E+N)*O,l[2]=(T-F)*O,l[3]=0,l[4]=(E-N)*z,l[5]=(1-(M+v))*z,l[6]=(y+I)*z,l[7]=0,l[8]=(T+F)*H,l[9]=(y-I)*H,l[10]=(1-(M+C))*H,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=hs.set(l[0],l[1],l[2]).length();const h=hs.set(l[4],l[5],l[6]).length(),d=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Si.copy(this);const p=1/u,_=1/h,x=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=_,Si.elements[5]*=_,Si.elements[6]*=_,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=zi,m=!1){const p=this.elements,_=2*u/(i-e),x=2*u/(r-l),M=(i+e)/(i-e),E=(r+l)/(r-l);let T,C;if(m)T=u/(h-u),C=h*u/(h-u);else if(d===zi)T=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Fc)T=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=M,p[12]=0,p[1]=0,p[5]=x,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=zi,m=!1){const p=this.elements,_=2/(i-e),x=2/(r-l),M=-(i+e)/(i-e),E=-(r+l)/(r-l);let T,C;if(m)T=1/(h-u),C=h/(h-u);else if(d===zi)T=-2/(h-u),C=-(h+u)/(h-u);else if(d===Fc)T=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=M,p[1]=0,p[5]=x,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const hs=new st,Si=new an,IM=new st(0,0,0),BM=new st(1,1,1),Ya=new st,hc=new st,Jn=new st,w0=new an,D0=new Xo;class va{constructor(e=0,i=0,r=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],M=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(M,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(M,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(M,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,E),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return w0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return D0.setFromEuler(this),this.setFromQuaternion(D0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zM=0;const U0=new st,ds=new Xo,fa=new an,dc=new st,Uo=new st,HM=new st,GM=new Xo,N0=new st(1,0,0),L0=new st(0,1,0),O0=new st(0,0,1),P0={type:"added"},VM={type:"removed"},ps={type:"childadded",child:null},fh={type:"childremoved",child:null};class Xn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new st,i=new va,r=new Xo,l=new st(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ue}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ds.setFromAxisAngle(e,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,i){return ds.setFromAxisAngle(e,i),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(N0,e)}rotateY(e){return this.rotateOnAxis(L0,e)}rotateZ(e){return this.rotateOnAxis(O0,e)}translateOnAxis(e,i){return U0.copy(e).applyQuaternion(this.quaternion),this.position.add(U0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(N0,e)}translateY(e){return this.translateOnAxis(L0,e)}translateZ(e){return this.translateOnAxis(O0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?dc.copy(e):dc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Uo,dc,this.up):fa.lookAt(dc,Uo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(fa),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(we("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(P0),ps.child=e,this.dispatchEvent(ps),ps.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(VM),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(P0),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,HM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,GM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),x=h(e.shapes),M=h(e.skeletons),E=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),M.length>0&&(r.skeletons=M),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new st(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new st,ha=new st,hh=new st,da=new st,ms=new st,gs=new st,F0=new st,dh=new st,ph=new st,mh=new st,gh=new Je,_h=new Je,vh=new Je;class Ei{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Mi.subVectors(l,i),ha.subVectors(r,i),hh.subVectors(e,i);const h=Mi.dot(Mi),d=Mi.dot(ha),m=Mi.dot(hh),p=ha.dot(ha),_=ha.dot(hh),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const M=1/x,E=(p*m-d*_)*M,T=(h*_-d*m)*M;return u.set(1-E-T,T,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,da.x),m.addScaledVector(h,da.y),m.addScaledVector(d,da.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return gh.setScalar(0),_h.setScalar(0),vh.setScalar(0),gh.fromBufferAttribute(e,i),_h.fromBufferAttribute(e,r),vh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(gh,u.x),h.addScaledVector(_h,u.y),h.addScaledVector(vh,u.z),h}static isFrontFacing(e,i,r,l){return Mi.subVectors(r,i),ha.subVectors(e,i),Mi.cross(ha).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Mi.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;ms.subVectors(l,r),gs.subVectors(u,r),dh.subVectors(e,r);const m=ms.dot(dh),p=gs.dot(dh);if(m<=0&&p<=0)return i.copy(r);ph.subVectors(e,l);const _=ms.dot(ph),x=gs.dot(ph);if(_>=0&&x<=_)return i.copy(l);const M=m*x-_*p;if(M<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(ms,h);mh.subVectors(e,u);const E=ms.dot(mh),T=gs.dot(mh);if(T>=0&&E<=T)return i.copy(u);const C=E*p-m*T;if(C<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(gs,d);const y=_*T-E*x;if(y<=0&&x-_>=0&&E-T>=0)return F0.subVectors(u,l),d=(x-_)/(x-_+(E-T)),i.copy(l).addScaledVector(F0,d);const v=1/(y+C+M);return h=C*v,d=M*v,i.copy(r).addScaledVector(ms,h).addScaledVector(gs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},pc={h:0,s:0,l:0};function xh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ne{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=wM(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=xh(h,u,e+1/3),this.g=xh(h,u,e),this.b=xh(h,u,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=ui){function r(u){u!==void 0&&parseFloat(u)<1&&ie("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ie("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ui){const r=B_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Te.workingToColorSpace(Nn.copy(this),e),Math.round(Se(Nn.r*255,0,255))*65536+Math.round(Se(Nn.g*255,0,255))*256+Math.round(Se(Nn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=ui){Te.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,l=Nn.b;return e!==ui?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(pc);const r=eh(ja.h,pc.h,i),l=eh(ja.s,pc.s,i),u=eh(ja.l,pc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ne;Ne.NAMES=B_;let kM=0;class qo extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Ms,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Lh,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==Ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nh&&(r.blendSrc=this.blendSrc),this.blendDst!==Lh&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class z_ extends qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=v_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new st,mc=new re;let XM=0;class Ai{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=y0,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(e),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==y0&&(e.usage=this.usage),e}}class H_ extends Ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class G_ extends Ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ri extends Ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}let WM=0;const ci=new an,Sh=new Xn,_s=new st,$n=new Wo,No=new Wo,Mn=new st;class Ci extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O_(e)?G_:H_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ri(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors($n.min,No.min),$n.expandByPoint(Mn),Mn.addVectors($n.max,No.max),$n.expandByPoint(Mn)):($n.expandByPoint(No.min),$n.expandByPoint(No.max))}$n.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)Mn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Mn.fromBufferAttribute(d,p),m&&(_s.fromBufferAttribute(e,p),Mn.add(_s)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let tt=0;tt<r.count;tt++)d[tt]=new st,m[tt]=new st;const p=new st,_=new st,x=new st,M=new re,E=new re,T=new re,C=new st,y=new st;function v(tt,R,D){p.fromBufferAttribute(r,tt),_.fromBufferAttribute(r,R),x.fromBufferAttribute(r,D),M.fromBufferAttribute(u,tt),E.fromBufferAttribute(u,R),T.fromBufferAttribute(u,D),_.sub(p),x.sub(p),E.sub(M),T.sub(M);const k=1/(E.x*T.y-T.x*E.y);isFinite(k)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(x,-E.y).multiplyScalar(k),y.copy(x).multiplyScalar(E.x).addScaledVector(_,-T.x).multiplyScalar(k),d[tt].add(C),d[R].add(C),d[D].add(C),m[tt].add(y),m[R].add(y),m[D].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let tt=0,R=I.length;tt<R;++tt){const D=I[tt],k=D.start,rt=D.count;for(let ct=k,ht=k+rt;ct<ht;ct+=3)v(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const F=new st,N=new st,O=new st,z=new st;function H(tt){O.fromBufferAttribute(l,tt),z.copy(O);const R=d[tt];F.copy(R),F.sub(O.multiplyScalar(O.dot(R))).normalize(),N.crossVectors(z,R);const k=N.dot(m[tt])<0?-1:1;h.setXYZW(tt,F.x,F.y,F.z,k)}for(let tt=0,R=I.length;tt<R;++tt){const D=I[tt],k=D.start,rt=D.count;for(let ct=k,ht=k+rt;ct<ht;ct+=3)H(e.getX(ct+0)),H(e.getX(ct+1)),H(e.getX(ct+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let M=0,E=r.count;M<E;M++)r.setXYZ(M,0,0,0);const l=new st,u=new st,h=new st,d=new st,m=new st,p=new st,_=new st,x=new st;if(e)for(let M=0,E=e.count;M<E;M+=3){const T=e.getX(M+0),C=e.getX(M+1),y=e.getX(M+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),_.subVectors(h,u),x.subVectors(l,u),_.cross(x),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let M=0,E=i.count;M<E;M+=3)l.fromBufferAttribute(i,M+0),u.fromBufferAttribute(i,M+1),h.fromBufferAttribute(i,M+2),_.subVectors(h,u),x.subVectors(l,u),_.cross(x),r.setXYZ(M+0,_.x,_.y,_.z),r.setXYZ(M+1,_.x,_.y,_.z),r.setXYZ(M+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,x=d.normalized,M=new p.constructor(m.length*_);let E=0,T=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*_;for(let v=0;v<_;v++)M[T++]=p[E++]}return new Ai(M,_,x)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,x=p.length;_<x;_++){const M=p[_],E=e(M,r);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,M=p.length;x<M;x++){const E=p[x];_.push(E.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],x=u[p];for(let M=0,E=x.length;M<E;M++)_.push(x[M].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I0=new an,vr=new F_,gc=new Vc,B0=new st,_c=new st,vc=new st,xc=new st,Mh=new st,Sc=new st,z0=new st,Mc=new st;class di extends Xn{constructor(e=new Ci,i=new z_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],x=u[m];_!==0&&(Mh.fromBufferAttribute(x,e),h?Sc.addScaledVector(Mh,_):Sc.addScaledVector(Mh.sub(i),_))}i.add(Sc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(u),vr.copy(e.ray).recast(e.near),!(gc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(gc,B0)===null||vr.origin.distanceToSquared(B0)>(e.far-e.near)**2))&&(I0.copy(u).invert(),vr.copy(e.ray).applyMatrix4(I0),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,vr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,M=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,C=M.length;T<C;T++){const y=M[T],v=h[y.materialIndex],I=Math.max(y.start,E.start),F=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let N=I,O=F;N<O;N+=3){const z=d.getX(N),H=d.getX(N+1),tt=d.getX(N+2);l=yc(this,v,e,r,p,_,x,z,H,tt),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let y=T,v=C;y<v;y+=3){const I=d.getX(y),F=d.getX(y+1),N=d.getX(y+2);l=yc(this,h,e,r,p,_,x,I,F,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,C=M.length;T<C;T++){const y=M[T],v=h[y.materialIndex],I=Math.max(y.start,E.start),F=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let N=I,O=F;N<O;N+=3){const z=N,H=N+1,tt=N+2;l=yc(this,v,e,r,p,_,x,z,H,tt),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=T,v=C;y<v;y+=3){const I=y,F=y+1,N=y+2;l=yc(this,h,e,r,p,_,x,I,F,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function qM(o,e,i,r,l,u,h,d){let m;if(e.side===kn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Ja,d),m===null)return null;Mc.copy(d),Mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Mc);return p<i.near||p>i.far?null:{distance:p,point:Mc.clone(),object:o}}function yc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,_c),o.getVertexPosition(m,vc),o.getVertexPosition(p,xc);const _=qM(o,e,i,r,_c,vc,xc,z0);if(_){const x=new st;Ei.getBarycoord(z0,_c,vc,xc,x),l&&(_.uv=Ei.getInterpolatedAttribute(l,d,m,p,x,new re)),u&&(_.uv1=Ei.getInterpolatedAttribute(u,d,m,p,x,new re)),h&&(_.normal=Ei.getInterpolatedAttribute(h,d,m,p,x,new st),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const M={a:d,b:m,c:p,normal:new st,materialIndex:0};Ei.getNormal(_c,vc,xc,M.normal),_.face=M,_.barycoord=x}return _}class Yo extends Ci{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],x=[];let M=0,E=0;T("z","y","x",-1,-1,r,i,e,h,u,0),T("z","y","x",1,-1,r,i,-e,h,u,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ri(p,3)),this.setAttribute("normal",new Ri(_,3)),this.setAttribute("uv",new Ri(x,2));function T(C,y,v,I,F,N,O,z,H,tt,R){const D=N/H,k=O/tt,rt=N/2,ct=O/2,ht=z/2,ft=H+1,L=tt+1;let V=0,et=0;const Mt=new st;for(let U=0;U<L;U++){const Z=U*k-ct;for(let xt=0;xt<ft;xt++){const mt=xt*D-rt;Mt[C]=mt*I,Mt[y]=Z*F,Mt[v]=ht,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[y]=0,Mt[v]=z>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),x.push(xt/H),x.push(1-U/tt),V+=1}}for(let U=0;U<tt;U++)for(let Z=0;Z<H;Z++){const xt=M+Z+ft*U,mt=M+Z+ft*(U+1),Nt=M+(Z+1)+ft*(U+1),qt=M+(Z+1)+ft*U;m.push(xt,mt,qt),m.push(mt,Nt,qt),et+=6}d.addGroup(E,et,R),E+=et,M+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)e[l]=r[l]}return e}function YM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function V_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const jM={clone:Rs,merge:On};var ZM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZM,this.fragmentShader=KM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=YM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Bc extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new st,H0=new re,G0=new re;class yi extends Bc{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Za.x,Za.y).multiplyScalar(-e/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Za.x,Za.y).multiplyScalar(-e/Za.z)}getViewSize(e,i){return this.getViewBounds(e,H0,G0),i.subVectors(G0,H0)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(th*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,xs=1;class QM extends Xn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(vs,xs,e,i);l.layers=this.layers,this.add(l);const u=new yi(vs,xs,e,i);u.layers=this.layers,this.add(u);const h=new yi(vs,xs,e,i);h.layers=this.layers,this.add(h);const d=new yi(vs,xs,e,i);d.layers=this.layers,this.add(d);const m=new yi(vs,xs,e,i);m.layers=this.layers,this.add(m);const p=new yi(vs,xs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,x=e.getRenderTarget(),M=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(x,M,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class k_ extends Fn{constructor(e=[],i=Cr,r,l,u,h,d,m,p,_){super(e,i,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class X_ extends Ti{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new k_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Yo(5,5,5),u=new ki({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ma});u.uniforms.tEquirect.value=i;const h=new di(l,u),d=i.minFilter;return i.minFilter===Tr&&(i.minFilter=cn),new QM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class Ec extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],M=_.position.distanceTo(x.position),E=.02,T=.005;p.inputState.pinching&&M>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&M<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ec;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class V0 extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class W_ extends Fn{constructor(e=null,i=1,r=1,l,u,h,d,m,p=Rn,_=Rn,x,M){super(null,h,d,m,p,_,l,u,x,M),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eh=new st,$M=new st,ty=new ue;class yr{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Eh.subVectors(r,i).cross($M.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Eh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||ty.getNormalMatrix(e),l=this.coplanarPoint(Eh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Vc,ey=new re(.5,.5),bc=new st;class q_{constructor(e=new yr,i=new yr,r=new yr,l=new yr,u=new yr,h=new yr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=zi,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],_=u[4],x=u[5],M=u[6],E=u[7],T=u[8],C=u[9],y=u[10],v=u[11],I=u[12],F=u[13],N=u[14],O=u[15];if(l[0].setComponents(p-h,E-_,v-T,O-I).normalize(),l[1].setComponents(p+h,E+_,v+T,O+I).normalize(),l[2].setComponents(p+d,E+x,v+C,O+F).normalize(),l[3].setComponents(p-d,E-x,v-C,O-F).normalize(),r)l[4].setComponents(m,M,y,N).normalize(),l[5].setComponents(p-m,E-M,v-y,O-N).normalize();else if(l[4].setComponents(p-m,E-M,v-y,O-N).normalize(),i===zi)l[5].setComponents(p+m,E+M,v+y,O+N).normalize();else if(i===Fc)l[5].setComponents(m,M,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const i=ey.distanceTo(e.center);return xr.radius=.7071067811865476+i,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(bc.x=l.normal.x>0?e.max.x:e.min.x,bc.y=l.normal.y>0?e.max.y:e.min.y,bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ny extends qo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new st,Hc=new st,k0=new an,Lo=new F_,Tc=new Vc,bh=new st,X0=new st;class iy extends Xn{constructor(e=new Ci,i=new ny){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)zc.fromBufferAttribute(i,l-1),Hc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=zc.distanceTo(Hc);e.setAttribute("lineDistance",new Ri(r,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=u,e.ray.intersectsSphere(Tc)===!1)return;k0.copy(l).invert(),Lo.copy(e.ray).applyMatrix4(k0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=r.index,M=r.attributes.position;if(_!==null){const E=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let C=E,y=T-1;C<y;C+=p){const v=_.getX(C),I=_.getX(C+1),F=Ac(this,e,Lo,m,v,I,C);F&&i.push(F)}if(this.isLineLoop){const C=_.getX(T-1),y=_.getX(E),v=Ac(this,e,Lo,m,C,y,T-1);v&&i.push(v)}}else{const E=Math.max(0,h.start),T=Math.min(M.count,h.start+h.count);for(let C=E,y=T-1;C<y;C+=p){const v=Ac(this,e,Lo,m,C,C+1,C);v&&i.push(v)}if(this.isLineLoop){const C=Ac(this,e,Lo,m,T-1,E,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Ac(o,e,i,r,l,u,h){const d=o.geometry.attributes.position;if(zc.fromBufferAttribute(d,l),Hc.fromBufferAttribute(d,u),i.distanceSqToSegment(zc,Hc,bh,X0)>r)return;bh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(bh);if(!(p<e.near||p>e.far))return{distance:p,point:X0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const W0=new st,q0=new st;class ay extends iy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)W0.fromBufferAttribute(i,l),q0.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+W0.distanceTo(q0);e.setAttribute("lineDistance",new Ri(r,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vo extends Fn{constructor(e,i,r=Gi,l,u,h,d=Rn,m=Rn,p,_=_a,x=1){if(_!==_a&&_!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const M={width:e,height:i,depth:x};super(M,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ry extends Vo{constructor(e,i=Gi,r=Cr,l,u,h=Rn,d=Rn,m,p=_a){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,i,r,l,u,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Y_ extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rr extends Ci{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,x=e/d,M=i/m,E=[],T=[],C=[],y=[];for(let v=0;v<_;v++){const I=v*M-h;for(let F=0;F<p;F++){const N=F*x-u;T.push(N,-I,0),C.push(0,0,1),y.push(F/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let I=0;I<d;I++){const F=I+p*v,N=I+p*(v+1),O=I+1+p*(v+1),z=I+1+p*v;E.push(F,N,z),E.push(N,O,z)}this.setIndex(E),this.setAttribute("position",new Ri(T,3)),this.setAttribute("normal",new Ri(C,3)),this.setAttribute("uv",new Ri(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Io extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sy extends qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oy extends qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class j_ extends Bc{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ly extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Y0(o,e,i,r){const l=uy(r);switch(i){case U_:return o*e;case L_:return o*e/l.components*l.byteLength;case Ud:return o*e/l.components*l.byteLength;case Ts:return o*e*2/l.components*l.byteLength;case Nd:return o*e*2/l.components*l.byteLength;case N_:return o*e*3/l.components*l.byteLength;case hi:return o*e*4/l.components*l.byteLength;case Ld:return o*e*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:case jh:return Math.max(o,16)*Math.max(e,8)/4;case Wh:case Yh:return Math.max(o,8)*Math.max(e,8)/2;case Zh:case Kh:case Jh:case $h:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Qh:case td:case ed:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case rd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case sd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case od:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case cd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ud:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case pd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case md:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case gd:case _d:case vd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case xd:case Sd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Md:case yd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function uy(o){switch(o){case fi:case R_:return{byteLength:1,components:1};case zo:case C_:case Vi:return{byteLength:2,components:1};case wd:case Dd:return{byteLength:2,components:4};case Gi:case Cd:case bi:return{byteLength:4,components:1};case w_:case D_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);function Z_(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function fy(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,M=o.createBuffer();o.bindBuffer(m,M),o.bufferData(m,p,_),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:M,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,_);else{x.sort((E,T)=>E.start-T.start);let M=0;for(let E=1;E<x.length;E++){const T=x[M],C=x[E];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++M,x[M]=C)}x.length=M+1;for(let E=0,T=x.length;E<T;E++){const C=x[E];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,my=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,My=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ty=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$y=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ME=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ab=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Db=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ob=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:hy,alphahash_pars_fragment:dy,alphamap_fragment:py,alphamap_pars_fragment:my,alphatest_fragment:gy,alphatest_pars_fragment:_y,aomap_fragment:vy,aomap_pars_fragment:xy,batching_pars_vertex:Sy,batching_vertex:My,begin_vertex:yy,beginnormal_vertex:Ey,bsdfs:by,iridescence_fragment:Ty,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Ry,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:wy,clipping_planes_vertex:Dy,color_fragment:Uy,color_pars_fragment:Ny,color_pars_vertex:Ly,color_vertex:Oy,common:Py,cube_uv_reflection_fragment:Fy,defaultnormal_vertex:Iy,displacementmap_pars_vertex:By,displacementmap_vertex:zy,emissivemap_fragment:Hy,emissivemap_pars_fragment:Gy,colorspace_fragment:Vy,colorspace_pars_fragment:ky,envmap_fragment:Xy,envmap_common_pars_fragment:Wy,envmap_pars_fragment:qy,envmap_pars_vertex:Yy,envmap_physical_pars_fragment:aE,envmap_vertex:jy,fog_vertex:Zy,fog_pars_vertex:Ky,fog_fragment:Qy,fog_pars_fragment:Jy,gradientmap_pars_fragment:$y,lightmap_pars_fragment:tE,lights_lambert_fragment:eE,lights_lambert_pars_fragment:nE,lights_pars_begin:iE,lights_toon_fragment:rE,lights_toon_pars_fragment:sE,lights_phong_fragment:oE,lights_phong_pars_fragment:lE,lights_physical_fragment:cE,lights_physical_pars_fragment:uE,lights_fragment_begin:fE,lights_fragment_maps:hE,lights_fragment_end:dE,logdepthbuf_fragment:pE,logdepthbuf_pars_fragment:mE,logdepthbuf_pars_vertex:gE,logdepthbuf_vertex:_E,map_fragment:vE,map_pars_fragment:xE,map_particle_fragment:SE,map_particle_pars_fragment:ME,metalnessmap_fragment:yE,metalnessmap_pars_fragment:EE,morphinstance_vertex:bE,morphcolor_vertex:TE,morphnormal_vertex:AE,morphtarget_pars_vertex:RE,morphtarget_vertex:CE,normal_fragment_begin:wE,normal_fragment_maps:DE,normal_pars_fragment:UE,normal_pars_vertex:NE,normal_vertex:LE,normalmap_pars_fragment:OE,clearcoat_normal_fragment_begin:PE,clearcoat_normal_fragment_maps:FE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:BE,opaque_fragment:zE,packing:HE,premultiplied_alpha_fragment:GE,project_vertex:VE,dithering_fragment:kE,dithering_pars_fragment:XE,roughnessmap_fragment:WE,roughnessmap_pars_fragment:qE,shadowmap_pars_fragment:YE,shadowmap_pars_vertex:jE,shadowmap_vertex:ZE,shadowmask_pars_fragment:KE,skinbase_vertex:QE,skinning_pars_vertex:JE,skinning_vertex:$E,skinnormal_vertex:tb,specularmap_fragment:eb,specularmap_pars_fragment:nb,tonemapping_fragment:ib,tonemapping_pars_fragment:ab,transmission_fragment:rb,transmission_pars_fragment:sb,uv_pars_fragment:ob,uv_pars_vertex:lb,uv_vertex:cb,worldpos_vertex:ub,background_vert:fb,background_frag:hb,backgroundCube_vert:db,backgroundCube_frag:pb,cube_vert:mb,cube_frag:gb,depth_vert:_b,depth_frag:vb,distance_vert:xb,distance_frag:Sb,equirect_vert:Mb,equirect_frag:yb,linedashed_vert:Eb,linedashed_frag:bb,meshbasic_vert:Tb,meshbasic_frag:Ab,meshlambert_vert:Rb,meshlambert_frag:Cb,meshmatcap_vert:wb,meshmatcap_frag:Db,meshnormal_vert:Ub,meshnormal_frag:Nb,meshphong_vert:Lb,meshphong_frag:Ob,meshphysical_vert:Pb,meshphysical_frag:Fb,meshtoon_vert:Ib,meshtoon_frag:Bb,points_vert:zb,points_frag:Hb,shadow_vert:Gb,shadow_frag:Vb,sprite_vert:kb,sprite_frag:Xb},Pt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Bi={basic:{uniforms:On([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:On([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:On([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:On([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:On([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:On([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:On([Pt.points,Pt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:On([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:On([Pt.common,Pt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:On([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:On([Pt.sprite,Pt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:On([Pt.common,Pt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:On([Pt.lights,Pt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Bi.physical={uniforms:On([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Rc={r:0,b:0,g:0},Sr=new va,Wb=new an;function qb(o,e,i,r,l,u,h){const d=new Ne(0);let m=u===!0?0:1,p,_,x=null,M=0,E=null;function T(F){let N=F.isScene===!0?F.background:null;return N&&N.isTexture&&(N=(F.backgroundBlurriness>0?i:e).get(N)),N}function C(F){let N=!1;const O=T(F);O===null?v(d,m):O&&O.isColor&&(v(O,1),N=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(F,N){const O=T(N);O&&(O.isCubeTexture||O.mapping===Gc)?(_===void 0&&(_=new di(new Yo(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Rs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,H,tt){this.matrixWorld.copyPosition(tt.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Sr.copy(N.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(Sr)),_.material.toneMapped=Te.getTransfer(O.colorSpace)!==Be,(x!==O||M!==O.version||E!==o.toneMapping)&&(_.material.needsUpdate=!0,x=O,M=O.version,E=o.toneMapping),_.layers.enableAll(),F.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new di(new Rr(2,2),new ki({name:"BackgroundMaterial",uniforms:Rs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Te.getTransfer(O.colorSpace)!==Be,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(x!==O||M!==O.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,x=O,M=O.version,E=o.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function v(F,N){F.getRGB(Rc,V_(o)),r.buffers.color.setClear(Rc.r,Rc.g,Rc.b,N,h)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(F,N=1){d.set(F),m=N,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(F){m=F,v(d,m)},render:C,addToRenderList:y,dispose:I}}function Yb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=M(null);let u=l,h=!1;function d(D,k,rt,ct,ht){let ft=!1;const L=x(ct,rt,k);u!==L&&(u=L,p(u.object)),ft=E(D,ct,rt,ht),ft&&T(D,ct,rt,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,N(D,k,rt,ct),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function _(D){return o.deleteVertexArray(D)}function x(D,k,rt){const ct=rt.wireframe===!0;let ht=r[D.id];ht===void 0&&(ht={},r[D.id]=ht);let ft=ht[k.id];ft===void 0&&(ft={},ht[k.id]=ft);let L=ft[ct];return L===void 0&&(L=M(m()),ft[ct]=L),L}function M(D){const k=[],rt=[],ct=[];for(let ht=0;ht<i;ht++)k[ht]=0,rt[ht]=0,ct[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:rt,attributeDivisors:ct,object:D,attributes:{},index:null}}function E(D,k,rt,ct){const ht=u.attributes,ft=k.attributes;let L=0;const V=rt.getAttributes();for(const et in V)if(V[et].location>=0){const U=ht[et];let Z=ft[et];if(Z===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;L++}return u.attributesNum!==L||u.index!==ct}function T(D,k,rt,ct){const ht={},ft=k.attributes;let L=0;const V=rt.getAttributes();for(const et in V)if(V[et].location>=0){let U=ft[et];U===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(U=D.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),ht[et]=Z,L++}u.attributes=ht,u.attributesNum=L,u.index=ct}function C(){const D=u.newAttributes;for(let k=0,rt=D.length;k<rt;k++)D[k]=0}function y(D){v(D,0)}function v(D,k){const rt=u.newAttributes,ct=u.enabledAttributes,ht=u.attributeDivisors;rt[D]=1,ct[D]===0&&(o.enableVertexAttribArray(D),ct[D]=1),ht[D]!==k&&(o.vertexAttribDivisor(D,k),ht[D]=k)}function I(){const D=u.newAttributes,k=u.enabledAttributes;for(let rt=0,ct=k.length;rt<ct;rt++)k[rt]!==D[rt]&&(o.disableVertexAttribArray(rt),k[rt]=0)}function F(D,k,rt,ct,ht,ft,L){L===!0?o.vertexAttribIPointer(D,k,rt,ht,ft):o.vertexAttribPointer(D,k,rt,ct,ht,ft)}function N(D,k,rt,ct){C();const ht=ct.attributes,ft=rt.getAttributes(),L=k.defaultAttributeValues;for(const V in ft){const et=ft[V];if(et.location>=0){let Mt=ht[V];if(Mt===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),Mt!==void 0){const U=Mt.normalized,Z=Mt.itemSize,xt=e.get(Mt);if(xt===void 0)continue;const mt=xt.buffer,Nt=xt.type,qt=xt.bytesPerElement,J=Nt===o.INT||Nt===o.UNSIGNED_INT||Mt.gpuType===Cd;if(Mt.isInterleavedBufferAttribute){const gt=Mt.data,Et=gt.stride,Qt=Mt.offset;if(gt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<et.locationSize;Gt++)v(et.location+Gt,gt.meshPerAttribute);D.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Gt=0;Gt<et.locationSize;Gt++)y(et.location+Gt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let Gt=0;Gt<et.locationSize;Gt++)F(et.location+Gt,Z/et.locationSize,Nt,U,Et*qt,(Qt+Z/et.locationSize*Gt)*qt,J)}else{if(Mt.isInstancedBufferAttribute){for(let gt=0;gt<et.locationSize;gt++)v(et.location+gt,Mt.meshPerAttribute);D.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let gt=0;gt<et.locationSize;gt++)y(et.location+gt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let gt=0;gt<et.locationSize;gt++)F(et.location+gt,Z/et.locationSize,Nt,U,Z*qt,Z/et.locationSize*gt*qt,J)}}else if(L!==void 0){const U=L[V];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(et.location,U);break;case 3:o.vertexAttrib3fv(et.location,U);break;case 4:o.vertexAttrib4fv(et.location,U);break;default:o.vertexAttrib1fv(et.location,U)}}}}I()}function O(){tt();for(const D in r){const k=r[D];for(const rt in k){const ct=k[rt];for(const ht in ct)_(ct[ht].object),delete ct[ht];delete k[rt]}delete r[D]}}function z(D){if(r[D.id]===void 0)return;const k=r[D.id];for(const rt in k){const ct=k[rt];for(const ht in ct)_(ct[ht].object),delete ct[ht];delete k[rt]}delete r[D.id]}function H(D){for(const k in r){const rt=r[k];if(rt[D.id]===void 0)continue;const ct=rt[D.id];for(const ht in ct)_(ct[ht].object),delete ct[ht];delete rt[D.id]}}function tt(){R(),h=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:tt,resetDefaultState:R,dispose:O,releaseStatesOfGeometry:z,releaseStatesOfProgram:H,initAttributes:C,enableAttribute:y,disableUnusedAttributes:I}}function jb(o,e,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,x){x!==0&&(o.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function d(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let E=0;for(let T=0;T<x;T++)E+=_[T];i.update(E,r,1)}function m(p,_,x,M){if(x===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<p.length;T++)h(p[T],_[T],M[T]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,_,0,M,0,x);let T=0;for(let C=0;C<x;C++)T+=_[C]*M[C];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Zb(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==hi&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const tt=H===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==fi&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==bi&&!tt)}function m(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ie("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,M=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=o.getParameter(o.MAX_SAMPLES),z=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:M,maxTextures:E,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:I,maxVaryings:F,maxFragmentUniforms:N,maxSamples:O,samples:z}}function Kb(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new yr,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,M){const E=x.length!==0||M||r!==0||l;return l=M,r=x.length,E},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,M){i=_(x,M,0)},this.setState=function(x,M,E){const T=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,v=o.get(x);if(!l||T===null||T.length===0||u&&!y)u?_(null):p();else{const I=u?0:r,F=I*4;let N=v.clippingState||null;m.value=N,N=_(T,M,F,E);for(let O=0;O!==F;++O)N[O]=i[O];v.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,M,E,T){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=m.value,T!==!0||y===null){const v=E+C*4,I=M.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<v)&&(y=new Float32Array(v));for(let F=0,N=E;F!==C;++F,N+=4)h.copy(x[F]).applyMatrix4(I,d),h.normal.toArray(y,N),y[N+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function Qb(o){let e=new WeakMap;function i(h,d){return d===Gh?h.mapping=Cr:d===Vh&&(h.mapping=bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Gh||d===Vh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new X_(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Qa=4,j0=[.125,.215,.35,.446,.526,.582],br=20,Jb=256,Oo=new j_,Z0=new Ne;let Th=null,Ah=0,Rh=0,Ch=!1;const $b=new st;class K0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=$b}=u;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Cr||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Vi,format:hi,colorSpace:As,depthBuffer:!1},l=Q0(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q0(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tT(u)),this._blurMaterial=nT(u,e,i),this._ggxMaterial=eT(u,e,i)}return l}_compileMaterial(e){const i=new di(new Ci,e);this._renderer.compile(i,Oo)}_sceneToCubeUV(e,i,r,l,u){const m=new yi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,M=x.autoClear,E=x.toneMapping;x.getClearColor(Z0),x.toneMapping=Hi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new Yo,new z_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,v=!0):(y.color.copy(Z0),v=!0);for(let F=0;F<6;F++){const N=F%3;N===0?(m.up.set(0,p[F],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[F],u.y,u.z)):N===1?(m.up.set(0,0,p[F]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[F],u.z)):(m.up.set(0,p[F],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[F]));const O=this._cubeSize;Ss(l,N*O,F>2?O:0,O,O),x.setRenderTarget(l),v&&x.render(C,m),x.render(e,m)}x.toneMapping=E,x.autoClear=M,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Cr||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Ss(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Oo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),M=0+p*1.25,E=x*M,{_lodMax:T}=this,C=this._sizeLods[r],y=3*C*(r>T-Qa?r-T+Qa:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Ss(u,y,v,3*C,2*C),l.setRenderTarget(u),l.render(d,Oo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,Ss(e,y,v,3*C,2*C),l.setRenderTarget(e),l.render(d,Oo)}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const M=p.uniforms,E=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*br-1),C=u/T,y=isFinite(u)?1+Math.floor(_*C):br;y>br&&ie(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${br}`);const v=[];let I=0;for(let H=0;H<br;++H){const tt=H/C,R=Math.exp(-tt*tt/2);v.push(R),H===0?I+=R:H<y&&(I+=2*R)}for(let H=0;H<v.length;H++)v[H]=v[H]/I;M.envMap.value=e.texture,M.samples.value=y,M.weights.value=v,M.latitudinal.value=h==="latitudinal",d&&(M.poleAxis.value=d);const{_lodMax:F}=this;M.dTheta.value=T,M.mipInt.value=F-r;const N=this._sizeLods[l],O=3*N*(l>F-Qa?l-F+Qa:0),z=4*(this._cubeSize-N);Ss(i,O,z,3*N,2*N),m.setRenderTarget(i),m.render(x,Oo)}}function tT(o){const e=[],i=[],r=[];let l=o;const u=o-Qa+1+j0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-Qa?m=j0[h-o+Qa-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,M=[_,_,x,_,x,x,_,_,x,x,_,x],E=6,T=6,C=3,y=2,v=1,I=new Float32Array(C*T*E),F=new Float32Array(y*T*E),N=new Float32Array(v*T*E);for(let z=0;z<E;z++){const H=z%3*2/3-1,tt=z>2?0:-1,R=[H,tt,0,H+2/3,tt,0,H+2/3,tt+1,0,H,tt,0,H+2/3,tt+1,0,H,tt+1,0];I.set(R,C*T*z),F.set(M,y*T*z);const D=[z,z,z,z,z,z];N.set(D,v*T*z)}const O=new Ci;O.setAttribute("position",new Ai(I,C)),O.setAttribute("uv",new Ai(F,y)),O.setAttribute("faceIndex",new Ai(N,v)),r.push(new di(O,null)),l>Qa&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Q0(o,e,i){const r=new Ti(o,e,i);return r.texture.mapping=Gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ss(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function eT(o,e,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function nT(o,e,i){const r=new Float32Array(br),l=new st(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function J0(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function $0(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Gh||m===Vh,_=m===Cr||m===bs;if(p||_){let x=e.get(d);const M=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==M)return i===null&&(i=new K0(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const E=d.image;return p&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new K0(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function aT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Go("WebGLRenderer: "+r+" extension not supported."),l}}}function rT(o,e,i,r){const l={},u=new WeakMap;function h(x){const M=x.target;M.index!==null&&e.remove(M.index);for(const T in M.attributes)e.remove(M.attributes[T]);M.removeEventListener("dispose",h),delete l[M.id];const E=u.get(M);E&&(e.remove(E),u.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,i.memory.geometries--}function d(x,M){return l[M.id]===!0||(M.addEventListener("dispose",h),l[M.id]=!0,i.memory.geometries++),M}function m(x){const M=x.attributes;for(const E in M)e.update(M[E],o.ARRAY_BUFFER)}function p(x){const M=[],E=x.index,T=x.attributes.position;let C=0;if(E!==null){const I=E.array;C=E.version;for(let F=0,N=I.length;F<N;F+=3){const O=I[F+0],z=I[F+1],H=I[F+2];M.push(O,z,z,H,H,O)}}else if(T!==void 0){const I=T.array;C=T.version;for(let F=0,N=I.length/3-1;F<N;F+=3){const O=F+0,z=F+1,H=F+2;M.push(O,z,z,H,H,O)}}else return;const y=new(O_(M)?G_:H_)(M,1);y.version=C;const v=u.get(x);v&&e.remove(v),u.set(x,y)}function _(x){const M=u.get(x);if(M){const E=x.index;E!==null&&M.version<E.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function sT(o,e,i){let r;function l(M){r=M}let u,h;function d(M){u=M.type,h=M.bytesPerElement}function m(M,E){o.drawElements(r,E,u,M*h),i.update(E,r,1)}function p(M,E,T){T!==0&&(o.drawElementsInstanced(r,E,u,M*h,T),i.update(E,r,T))}function _(M,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,M,0,T);let y=0;for(let v=0;v<T;v++)y+=E[v];i.update(y,r,1)}function x(M,E,T,C){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<M.length;v++)p(M[v]/h,E[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,u,M,0,C,0,T);let v=0;for(let I=0;I<T;I++)v+=E[I]*C[I];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function oT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:we("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function lT(o,e,i){const r=new WeakMap,l=new Je;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let M=r.get(d);if(M===void 0||M.count!==x){let D=function(){tt.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var E=D;M!==void 0&&M.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),y===!0&&(N=3);let O=d.attributes.position.count*N,z=1;O>e.maxTextureSize&&(z=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const H=new Float32Array(O*z*4*x),tt=new P_(H,O,z,x);tt.type=bi,tt.needsUpdate=!0;const R=N*4;for(let k=0;k<x;k++){const rt=v[k],ct=I[k],ht=F[k],ft=O*z*4*k;for(let L=0;L<rt.count;L++){const V=L*R;T===!0&&(l.fromBufferAttribute(rt,L),H[ft+V+0]=l.x,H[ft+V+1]=l.y,H[ft+V+2]=l.z,H[ft+V+3]=0),C===!0&&(l.fromBufferAttribute(ct,L),H[ft+V+4]=l.x,H[ft+V+5]=l.y,H[ft+V+6]=l.z,H[ft+V+7]=0),y===!0&&(l.fromBufferAttribute(ht,L),H[ft+V+8]=l.x,H[ft+V+9]=l.y,H[ft+V+10]=l.z,H[ft+V+11]=ht.itemSize===4?l.w:1)}}M={count:x,texture:tt,size:new re(O,z)},r.set(d,M),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const C=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",M.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",M.size)}return{update:u}}function cT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,x=e.get(m,_);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==p&&(M.update(),l.set(M,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const uT={[x_]:"LINEAR_TONE_MAPPING",[S_]:"REINHARD_TONE_MAPPING",[M_]:"CINEON_TONE_MAPPING",[y_]:"ACES_FILMIC_TONE_MAPPING",[b_]:"AGX_TONE_MAPPING",[T_]:"NEUTRAL_TONE_MAPPING",[E_]:"CUSTOM_TONE_MAPPING"};function fT(o,e,i,r,l){const u=new Ti(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Ti(e,i,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),d=new Ci;d.setAttribute("position",new Ri([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ri([0,2,0,0,2,0],2));const m=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new di(d,m),_=new j_(-1,1,1,-1,0,1);let x=null,M=null,E=!1,T,C=null,y=[],v=!1;this.setSize=function(I,F){u.setSize(I,F),h.setSize(I,F);for(let N=0;N<y.length;N++){const O=y[N];O.setSize&&O.setSize(I,F)}},this.setEffects=function(I){y=I,v=y.length>0&&y[0].isRenderPass===!0;const F=u.width,N=u.height;for(let O=0;O<y.length;O++){const z=y[O];z.setSize&&z.setSize(F,N)}},this.begin=function(I,F){if(E||I.toneMapping===Hi&&y.length===0)return!1;if(C=F,F!==null){const N=F.width,O=F.height;(u.width!==N||u.height!==O)&&this.setSize(N,O)}return v===!1&&I.setRenderTarget(u),T=I.toneMapping,I.toneMapping=Hi,!0},this.hasRenderPass=function(){return v},this.end=function(I,F){I.toneMapping=T,E=!0;let N=u,O=h;for(let z=0;z<y.length;z++){const H=y[z];if(H.enabled!==!1&&(H.render(I,O,N,F),H.needsSwap!==!1)){const tt=N;N=O,O=tt}}if(x!==I.outputColorSpace||M!==I.toneMapping){x=I.outputColorSpace,M=I.toneMapping,m.defines={},Te.getTransfer(x)===Be&&(m.defines.SRGB_TRANSFER="");const z=uT[M];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,I.setRenderTarget(C),I.render(p,_),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const K_=new Fn,bd=new Vo(1,1),Q_=new P_,J_=new PM,$_=new k_,t_=[],e_=[],n_=new Float32Array(16),i_=new Float32Array(9),a_=new Float32Array(4);function ws(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=t_[l];if(u===void 0&&(u=new Float32Array(l),t_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function dn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Xc(o,e){let i=e_[e];i===void 0&&(i=new Int32Array(e),e_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function hT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function gT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;a_.set(r),o.uniformMatrix2fv(this.addr,!1,a_),pn(i,r)}}function _T(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;i_.set(r),o.uniformMatrix3fv(this.addr,!1,i_),pn(i,r)}}function vT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;n_.set(r),o.uniformMatrix4fv(this.addr,!1,n_),pn(i,r)}}function xT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function ET(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function TT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function RT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(bd.compareFunction=i.isReversedDepthBuffer()?Pd:Od,u=bd):u=K_,i.setTexture2D(e||u,l)}function CT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||J_,l)}function wT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||$_,l)}function DT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Q_,l)}function UT(o){switch(o){case 5126:return hT;case 35664:return dT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return _T;case 35676:return vT;case 5124:case 35670:return xT;case 35667:case 35671:return ST;case 35668:case 35672:return MT;case 35669:case 35673:return yT;case 5125:return ET;case 36294:return bT;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return DT}}function NT(o,e){o.uniform1fv(this.addr,e)}function LT(o,e){const i=ws(e,this.size,2);o.uniform2fv(this.addr,i)}function OT(o,e){const i=ws(e,this.size,3);o.uniform3fv(this.addr,i)}function PT(o,e){const i=ws(e,this.size,4);o.uniform4fv(this.addr,i)}function FT(o,e){const i=ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function IT(o,e){const i=ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function BT(o,e){const i=ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function zT(o,e){o.uniform1iv(this.addr,e)}function HT(o,e){o.uniform2iv(this.addr,e)}function GT(o,e){o.uniform3iv(this.addr,e)}function VT(o,e){o.uniform4iv(this.addr,e)}function kT(o,e){o.uniform1uiv(this.addr,e)}function XT(o,e){o.uniform2uiv(this.addr,e)}function WT(o,e){o.uniform3uiv(this.addr,e)}function qT(o,e){o.uniform4uiv(this.addr,e)}function YT(o,e,i){const r=this.cache,l=e.length,u=Xc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=bd:h=K_;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,u[d])}function jT(o,e,i){const r=this.cache,l=e.length,u=Xc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||J_,u[h])}function ZT(o,e,i){const r=this.cache,l=e.length,u=Xc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||$_,u[h])}function KT(o,e,i){const r=this.cache,l=e.length,u=Xc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Q_,u[h])}function QT(o){switch(o){case 5126:return NT;case 35664:return LT;case 35665:return OT;case 35666:return PT;case 35674:return FT;case 35675:return IT;case 35676:return BT;case 5124:case 35670:return zT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return kT;case 36294:return XT;case 36295:return WT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return KT}}class JT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=UT(i.type)}}class $T{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=QT(i.type)}}class t1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function r_(o,e){o.seq.push(e),o.map[e.id]=e}function e1(o,e,i){const r=o.name,l=r.length;for(wh.lastIndex=0;;){const u=wh.exec(r),h=wh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){r_(i,p===void 0?new JT(d,o,e):new $T(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new t1(d),r_(i,x)),i=x}}}class Oc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);e1(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function s_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const n1=37297;let i1=0;function a1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const o_=new ue;function r1(o){Te._getMatrix(o_,Te.workingColorSpace,o);const e=`mat3( ${o_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Pc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function l_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+a1(o.getShaderSource(e),d)}else return u}function s1(o,e){const i=r1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const o1={[x_]:"Linear",[S_]:"Reinhard",[M_]:"Cineon",[y_]:"ACESFilmic",[b_]:"AgX",[T_]:"Neutral",[E_]:"Custom"};function l1(o,e){const i=o1[e];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new st;function c1(){Te.getLuminanceCoefficients(Cc);const o=Cc.x.toFixed(4),e=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function f1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function h1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Bo(o){return o!==""}function c_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(o){return o.replace(d1,m1)}const p1=new Map;function m1(o,e){let i=fe[e];if(i===void 0){const r=p1.get(e);if(r!==void 0)i=fe[r],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Td(i)}const g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f_(o){return o.replace(g1,_1)}function _1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function h_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const v1={[wc]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function x1(o){return v1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S1={[Cr]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function M1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":S1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const y1={[bs]:"ENVMAP_MODE_REFRACTION"};function E1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":y1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const b1={[v_]:"ENVMAP_BLENDING_MULTIPLY",[mM]:"ENVMAP_BLENDING_MIX",[gM]:"ENVMAP_BLENDING_ADD"};function T1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":b1[o.combine]||"ENVMAP_BLENDING_NONE"}function A1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function R1(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=x1(i),p=M1(i),_=E1(i),x=T1(i),M=A1(i),E=u1(i),T=f1(u),C=l.createProgram();let y,v,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Bo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Bo).join(`
`),v.length>0&&(v+=`
`)):(y=[h_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),v=[h_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Hi?l1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,s1("linearToOutputTexel",i.outputColorSpace),c1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=Td(h),h=c_(h,i),h=u_(h,i),d=Td(d),d=c_(d,i),d=u_(d,i),h=f_(h),d=f_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===E0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===E0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const F=I+y+h,N=I+v+d,O=s_(l,l.VERTEX_SHADER,F),z=s_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,O),l.attachShader(C,z),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function H(k){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(C)||"",ct=l.getShaderInfoLog(O)||"",ht=l.getShaderInfoLog(z)||"",ft=rt.trim(),L=ct.trim(),V=ht.trim();let et=!0,Mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(et=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,O,z);else{const U=l_(l,O,"vertex"),Z=l_(l,z,"fragment");we("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ft+`
`+U+`
`+Z)}else ft!==""?ie("WebGLProgram: Program Info Log:",ft):(L===""||V==="")&&(Mt=!1);Mt&&(k.diagnostics={runnable:et,programLog:ft,vertexShader:{log:L,prefix:y},fragmentShader:{log:V,prefix:v}})}l.deleteShader(O),l.deleteShader(z),tt=new Oc(l,C),R=h1(l,C)}let tt;this.getUniforms=function(){return tt===void 0&&H(this),tt};let R;this.getAttributes=function(){return R===void 0&&H(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,n1)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=i1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=z,this}let C1=0;class w1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new D1(e),i.set(e,r)),r}}class D1{constructor(e){this.id=C1++,this.code=e,this.usedTimes=0}}function U1(o,e,i,r,l,u,h){const d=new I_,m=new w1,p=new Set,_=[],x=new Map,M=l.logarithmicDepthBuffer;let E=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,D,k,rt,ct){const ht=rt.fog,ft=ct.geometry,L=R.isMeshStandardMaterial?rt.environment:null,V=(R.isMeshStandardMaterial?i:e).get(R.envMap||L),et=V&&V.mapping===Gc?V.image.height:null,Mt=T[R.type];R.precision!==null&&(E=l.getMaxPrecision(R.precision),E!==R.precision&&ie("WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const U=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Z=U!==void 0?U.length:0;let xt=0;ft.morphAttributes.position!==void 0&&(xt=1),ft.morphAttributes.normal!==void 0&&(xt=2),ft.morphAttributes.color!==void 0&&(xt=3);let mt,Nt,qt,J;if(Mt){const Ae=Bi[Mt];mt=Ae.vertexShader,Nt=Ae.fragmentShader}else mt=R.vertexShader,Nt=R.fragmentShader,m.update(R),qt=m.getVertexShaderID(R),J=m.getFragmentShaderID(R);const gt=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Qt=ct.isInstancedMesh===!0,Gt=ct.isBatchedMesh===!0,he=!!R.map,Ye=!!R.matcap,de=!!V,xe=!!R.aoMap,De=!!R.lightMap,ae=!!R.bumpMap,be=!!R.normalMap,G=!!R.displacementMap,Xe=!!R.emissiveMap,Me=!!R.metalnessMap,ye=!!R.roughnessMap,kt=R.anisotropy>0,w=R.clearcoat>0,g=R.dispersion>0,P=R.iridescence>0,j=R.sheen>0,ot=R.transmission>0,nt=kt&&!!R.anisotropyMap,At=w&&!!R.clearcoatMap,Rt=w&&!!R.clearcoatNormalMap,zt=w&&!!R.clearcoatRoughnessMap,Kt=P&&!!R.iridescenceMap,yt=P&&!!R.iridescenceThicknessMap,wt=j&&!!R.sheenColorMap,Bt=j&&!!R.sheenRoughnessMap,Xt=!!R.specularMap,Ct=!!R.specularColorMap,oe=!!R.specularIntensityMap,W=ot&&!!R.transmissionMap,Ot=ot&&!!R.thicknessMap,Tt=!!R.gradientMap,Ft=!!R.alphaMap,bt=R.alphaTest>0,vt=!!R.alphaHash,Dt=!!R.extensions;let ee=Hi;R.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ee=o.toneMapping);const Le={shaderID:Mt,shaderType:R.type,shaderName:R.name,vertexShader:mt,fragmentShader:Nt,defines:R.defines,customVertexShaderID:qt,customFragmentShaderID:J,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:Gt,batchingColor:Gt&&ct._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&ct.instanceColor!==null,instancingMorph:Qt&&ct.morphTexture!==null,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:As,alphaToCoverage:!!R.alphaToCoverage,map:he,matcap:Ye,envMap:de,envMapMode:de&&V.mapping,envMapCubeUVHeight:et,aoMap:xe,lightMap:De,bumpMap:ae,normalMap:be,displacementMap:G,emissiveMap:Xe,normalMapObjectSpace:be&&R.normalMapType===SM,normalMapTangentSpace:be&&R.normalMapType===xM,metalnessMap:Me,roughnessMap:ye,anisotropy:kt,anisotropyMap:nt,clearcoat:w,clearcoatMap:At,clearcoatNormalMap:Rt,clearcoatRoughnessMap:zt,dispersion:g,iridescence:P,iridescenceMap:Kt,iridescenceThicknessMap:yt,sheen:j,sheenColorMap:wt,sheenRoughnessMap:Bt,specularMap:Xt,specularColorMap:Ct,specularIntensityMap:oe,transmission:ot,transmissionMap:W,thicknessMap:Ot,gradientMap:Tt,opaque:R.transparent===!1&&R.blending===Ms&&R.alphaToCoverage===!1,alphaMap:Ft,alphaTest:bt,alphaHash:vt,combine:R.combine,mapUv:he&&C(R.map.channel),aoMapUv:xe&&C(R.aoMap.channel),lightMapUv:De&&C(R.lightMap.channel),bumpMapUv:ae&&C(R.bumpMap.channel),normalMapUv:be&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:Xe&&C(R.emissiveMap.channel),metalnessMapUv:Me&&C(R.metalnessMap.channel),roughnessMapUv:ye&&C(R.roughnessMap.channel),anisotropyMapUv:nt&&C(R.anisotropyMap.channel),clearcoatMapUv:At&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&C(R.sheenRoughnessMap.channel),specularMapUv:Xt&&C(R.specularMap.channel),specularColorMapUv:Ct&&C(R.specularColorMap.channel),specularIntensityMapUv:oe&&C(R.specularIntensityMap.channel),transmissionMapUv:W&&C(R.transmissionMap.channel),thicknessMapUv:Ot&&C(R.thicknessMap.channel),alphaMapUv:Ft&&C(R.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(be||kt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!ft.attributes.uv&&(he||Ft),fog:!!ht,useFog:R.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Et,skinning:ct.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:xt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,decodeVideoTexture:he&&R.map.isVideoTexture===!0&&Te.getTransfer(R.map.colorSpace)===Be,decodeVideoTextureEmissive:Xe&&R.emissiveMap.isVideoTexture===!0&&Te.getTransfer(R.emissiveMap.colorSpace)===Be,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===pa,flipSided:R.side===kn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Dt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&R.extensions.multiDraw===!0||Gt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function v(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)D.push(k),D.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(I(D,R),F(D,R),D.push(o.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function I(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function F(R,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),R.push(d.mask)}function N(R){const D=T[R.type];let k;if(D){const rt=Bi[D];k=jM.clone(rt.uniforms)}else k=R.uniforms;return k}function O(R,D){let k=x.get(D);return k!==void 0?++k.usedTimes:(k=new R1(o,D,R,u),_.push(k),x.set(D,k)),k}function z(R){if(--R.usedTimes===0){const D=_.indexOf(R);_[D]=_[_.length-1],_.pop(),x.delete(R.cacheKey),R.destroy()}}function H(R){m.remove(R)}function tt(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:N,acquireProgram:O,releaseProgram:z,releaseShaderCache:H,programs:_,dispose:tt}}function N1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function L1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function d_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function p_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(x,M,E,T,C,y){let v=o[e];return v===void 0?(v={id:x.id,object:x,geometry:M,material:E,groupOrder:T,renderOrder:x.renderOrder,z:C,group:y},o[e]=v):(v.id=x.id,v.object=x,v.geometry=M,v.material=E,v.groupOrder=T,v.renderOrder=x.renderOrder,v.z=C,v.group=y),e++,v}function d(x,M,E,T,C,y){const v=h(x,M,E,T,C,y);E.transmission>0?r.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(x,M,E,T,C,y){const v=h(x,M,E,T,C,y);E.transmission>0?r.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,M){i.length>1&&i.sort(x||L1),r.length>1&&r.sort(M||d_),l.length>1&&l.sort(M||d_)}function _(){for(let x=e,M=o.length;x<M;x++){const E=o[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function O1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new p_,o.set(r,[h])):l>=u.length?(h=new p_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function P1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new Ne};break;case"SpotLight":i={position:new st,direction:new st,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function F1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let I1=0;function B1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function z1(o){const e=new P1,i=F1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,u=new an,h=new an;function d(p){let _=0,x=0,M=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let E=0,T=0,C=0,y=0,v=0,I=0,F=0,N=0,O=0,z=0,H=0;p.sort(B1);for(let R=0,D=p.length;R<D;R++){const k=p[R],rt=k.color,ct=k.intensity,ht=k.distance;let ft=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ts?ft=k.shadow.map.texture:ft=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=rt.r*ct,x+=rt.g*ct,M+=rt.b*ct;else if(k.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(k.sh.coefficients[L],ct);H++}else if(k.isDirectionalLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,et=i.get(k);et.shadowIntensity=V.intensity,et.shadowBias=V.bias,et.shadowNormalBias=V.normalBias,et.shadowRadius=V.radius,et.shadowMapSize=V.mapSize,r.directionalShadow[E]=et,r.directionalShadowMap[E]=ft,r.directionalShadowMatrix[E]=k.shadow.matrix,I++}r.directional[E]=L,E++}else if(k.isSpotLight){const L=e.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(rt).multiplyScalar(ct),L.distance=ht,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,r.spot[C]=L;const V=k.shadow;if(k.map&&(r.spotLightMap[O]=k.map,O++,V.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[C]=V.matrix,k.castShadow){const et=i.get(k);et.shadowIntensity=V.intensity,et.shadowBias=V.bias,et.shadowNormalBias=V.normalBias,et.shadowRadius=V.radius,et.shadowMapSize=V.mapSize,r.spotShadow[C]=et,r.spotShadowMap[C]=ft,N++}C++}else if(k.isRectAreaLight){const L=e.get(k);L.color.copy(rt).multiplyScalar(ct),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=L,y++}else if(k.isPointLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),L.distance=k.distance,L.decay=k.decay,k.castShadow){const V=k.shadow,et=i.get(k);et.shadowIntensity=V.intensity,et.shadowBias=V.bias,et.shadowNormalBias=V.normalBias,et.shadowRadius=V.radius,et.shadowMapSize=V.mapSize,et.shadowCameraNear=V.camera.near,et.shadowCameraFar=V.camera.far,r.pointShadow[T]=et,r.pointShadowMap[T]=ft,r.pointShadowMatrix[T]=k.shadow.matrix,F++}r.point[T]=L,T++}else if(k.isHemisphereLight){const L=e.get(k);L.skyColor.copy(k.color).multiplyScalar(ct),L.groundColor.copy(k.groundColor).multiplyScalar(ct),r.hemi[v]=L,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=M;const tt=r.hash;(tt.directionalLength!==E||tt.pointLength!==T||tt.spotLength!==C||tt.rectAreaLength!==y||tt.hemiLength!==v||tt.numDirectionalShadows!==I||tt.numPointShadows!==F||tt.numSpotShadows!==N||tt.numSpotMaps!==O||tt.numLightProbes!==H)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=N+O-z,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=H,tt.directionalLength=E,tt.pointLength=T,tt.spotLength=C,tt.rectAreaLength=y,tt.hemiLength=v,tt.numDirectionalShadows=I,tt.numPointShadows=F,tt.numSpotShadows=N,tt.numSpotMaps=O,tt.numLightProbes=H,r.version=I1++)}function m(p,_){let x=0,M=0,E=0,T=0,C=0;const y=_.matrixWorldInverse;for(let v=0,I=p.length;v<I;v++){const F=p[v];if(F.isDirectionalLight){const N=r.directional[x];N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),x++}else if(F.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),E++}else if(F.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(y),h.identity(),u.copy(F.matrixWorld),u.premultiply(y),h.extractRotation(u),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),T++}else if(F.isPointLight){const N=r.point[M];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(y),M++}else if(F.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(F.matrixWorld),N.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function m_(o){const e=new z1(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function H1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new m_(o),e.set(l,[d])):u>=h.length?(d=new m_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const G1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,k1=[new st(1,0,0),new st(-1,0,0),new st(0,1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1)],X1=[new st(0,-1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1),new st(0,-1,0),new st(0,-1,0)],g_=new an,Po=new st,Dh=new st;function W1(o,e,i){let r=new q_;const l=new re,u=new re,h=new Je,d=new sy,m=new oy,p={},_=i.maxTextureSize,x={[Ja]:kn,[kn]:Ja,[pa]:pa},M=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:G1,fragmentShader:V1}),E=M.clone();E.defines.HORIZONTAL_PASS=1;const T=new Ci;T.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new di(T,M),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let v=this.type;this.render=function(z,H,tt){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;z.type===KS&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=wc);const R=o.getRenderTarget(),D=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(ma),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const ct=v!==this.type;ct&&H.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(ft=>ft.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,ft=z.length;ht<ft;ht++){const L=z[ht],V=L.shadow;if(V===void 0){ie("WebGLShadowMap:",L,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const et=V.getFrameExtents();if(l.multiply(et),u.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/et.x),l.x=u.x*et.x,V.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/et.y),l.y=u.y*et.y,V.mapSize.y=u.y)),V.map===null||ct===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Fo){if(L.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ti(l.x,l.y,{format:Ts,type:Vi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),V.map.texture.name=L.name+".shadowMap",V.map.depthTexture=new Vo(l.x,l.y,bi),V.map.depthTexture.name=L.name+".shadowMapDepth",V.map.depthTexture.format=_a,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rn,V.map.depthTexture.magFilter=Rn}else{L.isPointLight?(V.map=new X_(l.x),V.map.depthTexture=new ry(l.x,Gi)):(V.map=new Ti(l.x,l.y),V.map.depthTexture=new Vo(l.x,l.y,Gi)),V.map.depthTexture.name=L.name+".shadowMap",V.map.depthTexture.format=_a;const U=o.state.buffers.depth.getReversed();this.type===wc?(V.map.depthTexture.compareFunction=U?Pd:Od,V.map.depthTexture.minFilter=cn,V.map.depthTexture.magFilter=cn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rn,V.map.depthTexture.magFilter=Rn)}V.camera.updateProjectionMatrix()}const Mt=V.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Mt;U++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,U),o.clear();else{U===0&&(o.setRenderTarget(V.map),o.clear());const Z=V.getViewport(U);h.set(u.x*Z.x,u.y*Z.y,u.x*Z.z,u.y*Z.w),rt.viewport(h)}if(L.isPointLight){const Z=V.camera,xt=V.matrix,mt=L.distance||Z.far;mt!==Z.far&&(Z.far=mt,Z.updateProjectionMatrix()),Po.setFromMatrixPosition(L.matrixWorld),Z.position.copy(Po),Dh.copy(Z.position),Dh.add(k1[U]),Z.up.copy(X1[U]),Z.lookAt(Dh),Z.updateMatrixWorld(),xt.makeTranslation(-Po.x,-Po.y,-Po.z),g_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(g_,Z.coordinateSystem,Z.reversedDepth)}else V.updateMatrices(L);r=V.getFrustum(),N(H,tt,V.camera,L,this.type)}V.isPointLightShadow!==!0&&this.type===Fo&&I(V,tt),V.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(R,D,k)};function I(z,H){const tt=e.update(C);M.defines.VSM_SAMPLES!==z.blurSamples&&(M.defines.VSM_SAMPLES=z.blurSamples,E.defines.VSM_SAMPLES=z.blurSamples,M.needsUpdate=!0,E.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ti(l.x,l.y,{format:Ts,type:Vi})),M.uniforms.shadow_pass.value=z.map.depthTexture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(H,null,tt,M,C,null),E.uniforms.shadow_pass.value=z.mapPass.texture,E.uniforms.resolution.value=z.mapSize,E.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(H,null,tt,E,C,null)}function F(z,H,tt,R){let D=null;const k=tt.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)D=k;else if(D=tt.isPointLight===!0?m:d,o.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const rt=D.uuid,ct=H.uuid;let ht=p[rt];ht===void 0&&(ht={},p[rt]=ht);let ft=ht[ct];ft===void 0&&(ft=D.clone(),ht[ct]=ft,H.addEventListener("dispose",O)),D=ft}if(D.visible=H.visible,D.wireframe=H.wireframe,R===Fo?D.side=H.shadowSide!==null?H.shadowSide:H.side:D.side=H.shadowSide!==null?H.shadowSide:x[H.side],D.alphaMap=H.alphaMap,D.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,D.map=H.map,D.clipShadows=H.clipShadows,D.clippingPlanes=H.clippingPlanes,D.clipIntersection=H.clipIntersection,D.displacementMap=H.displacementMap,D.displacementScale=H.displacementScale,D.displacementBias=H.displacementBias,D.wireframeLinewidth=H.wireframeLinewidth,D.linewidth=H.linewidth,tt.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const rt=o.properties.get(D);rt.light=tt}return D}function N(z,H,tt,R,D){if(z.visible===!1)return;if(z.layers.test(H.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===Fo)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,z.matrixWorld);const ct=e.update(z),ht=z.material;if(Array.isArray(ht)){const ft=ct.groups;for(let L=0,V=ft.length;L<V;L++){const et=ft[L],Mt=ht[et.materialIndex];if(Mt&&Mt.visible){const U=F(z,Mt,R,D);z.onBeforeShadow(o,z,H,tt,ct,U,et),o.renderBufferDirect(tt,null,ct,U,z,et),z.onAfterShadow(o,z,H,tt,ct,U,et)}}}else if(ht.visible){const ft=F(z,ht,R,D);z.onBeforeShadow(o,z,H,tt,ct,ft,null),o.renderBufferDirect(tt,null,ct,ft,z,null),z.onAfterShadow(o,z,H,tt,ct,ft,null)}}const rt=z.children;for(let ct=0,ht=rt.length;ct<ht;ct++)N(rt[ct],H,tt,R,D)}function O(z){z.target.removeEventListener("dispose",O);for(const tt in p){const R=p[tt],D=z.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const q1={[Oh]:Ph,[Fh]:zh,[Ih]:Hh,[Es]:Bh,[Ph]:Oh,[zh]:Fh,[Hh]:Ih,[Bh]:Es};function Y1(o,e){function i(){let W=!1;const Ot=new Je;let Tt=null;const Ft=new Je(0,0,0,0);return{setMask:function(bt){Tt!==bt&&!W&&(o.colorMask(bt,bt,bt,bt),Tt=bt)},setLocked:function(bt){W=bt},setClear:function(bt,vt,Dt,ee,Le){Le===!0&&(bt*=ee,vt*=ee,Dt*=ee),Ot.set(bt,vt,Dt,ee),Ft.equals(Ot)===!1&&(o.clearColor(bt,vt,Dt,ee),Ft.copy(Ot))},reset:function(){W=!1,Tt=null,Ft.set(-1,0,0,0)}}}function r(){let W=!1,Ot=!1,Tt=null,Ft=null,bt=null;return{setReversed:function(vt){if(Ot!==vt){const Dt=e.get("EXT_clip_control");vt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Ot=vt;const ee=bt;bt=null,this.setClear(ee)}},getReversed:function(){return Ot},setTest:function(vt){vt?gt(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(vt){Tt!==vt&&!W&&(o.depthMask(vt),Tt=vt)},setFunc:function(vt){if(Ot&&(vt=q1[vt]),Ft!==vt){switch(vt){case Oh:o.depthFunc(o.NEVER);break;case Ph:o.depthFunc(o.ALWAYS);break;case Fh:o.depthFunc(o.LESS);break;case Es:o.depthFunc(o.LEQUAL);break;case Ih:o.depthFunc(o.EQUAL);break;case Bh:o.depthFunc(o.GEQUAL);break;case zh:o.depthFunc(o.GREATER);break;case Hh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=vt}},setLocked:function(vt){W=vt},setClear:function(vt){bt!==vt&&(Ot&&(vt=1-vt),o.clearDepth(vt),bt=vt)},reset:function(){W=!1,Tt=null,Ft=null,bt=null,Ot=!1}}}function l(){let W=!1,Ot=null,Tt=null,Ft=null,bt=null,vt=null,Dt=null,ee=null,Le=null;return{setTest:function(Ae){W||(Ae?gt(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(Ae){Ot!==Ae&&!W&&(o.stencilMask(Ae),Ot=Ae)},setFunc:function(Ae,ei,mn){(Tt!==Ae||Ft!==ei||bt!==mn)&&(o.stencilFunc(Ae,ei,mn),Tt=Ae,Ft=ei,bt=mn)},setOp:function(Ae,ei,mn){(vt!==Ae||Dt!==ei||ee!==mn)&&(o.stencilOp(Ae,ei,mn),vt=Ae,Dt=ei,ee=mn)},setLocked:function(Ae){W=Ae},setClear:function(Ae){Le!==Ae&&(o.clearStencil(Ae),Le=Ae)},reset:function(){W=!1,Ot=null,Tt=null,Ft=null,bt=null,vt=null,Dt=null,ee=null,Le=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},M=new WeakMap,E=[],T=null,C=!1,y=null,v=null,I=null,F=null,N=null,O=null,z=null,H=new Ne(0,0,0),tt=0,R=!1,D=null,k=null,rt=null,ct=null,ht=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,V=0;const et=o.getParameter(o.VERSION);et.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(et)[1]),L=V>=1):et.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),L=V>=2);let Mt=null,U={};const Z=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),mt=new Je().fromArray(Z),Nt=new Je().fromArray(xt);function qt(W,Ot,Tt,Ft){const bt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(W,vt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Dt=0;Dt<Tt;Dt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ot,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ot+Dt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return vt}const J={};J[o.TEXTURE_2D]=qt(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=qt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=qt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=qt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),gt(o.DEPTH_TEST),h.setFunc(Es),ae(!1),be(v0),gt(o.CULL_FACE),xe(ma);function gt(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function Et(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function Qt(W,Ot){return x[W]!==Ot?(o.bindFramebuffer(W,Ot),x[W]=Ot,W===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ot),W===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Gt(W,Ot){let Tt=E,Ft=!1;if(W){Tt=M.get(Ot),Tt===void 0&&(Tt=[],M.set(Ot,Tt));const bt=W.textures;if(Tt.length!==bt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Dt=bt.length;vt<Dt;vt++)Tt[vt]=o.COLOR_ATTACHMENT0+vt;Tt.length=bt.length,Ft=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(Tt)}function he(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const Ye={[Er]:o.FUNC_ADD,[JS]:o.FUNC_SUBTRACT,[$S]:o.FUNC_REVERSE_SUBTRACT};Ye[tM]=o.MIN,Ye[eM]=o.MAX;const de={[nM]:o.ZERO,[iM]:o.ONE,[aM]:o.SRC_COLOR,[Nh]:o.SRC_ALPHA,[uM]:o.SRC_ALPHA_SATURATE,[lM]:o.DST_COLOR,[sM]:o.DST_ALPHA,[rM]:o.ONE_MINUS_SRC_COLOR,[Lh]:o.ONE_MINUS_SRC_ALPHA,[cM]:o.ONE_MINUS_DST_COLOR,[oM]:o.ONE_MINUS_DST_ALPHA,[fM]:o.CONSTANT_COLOR,[hM]:o.ONE_MINUS_CONSTANT_COLOR,[dM]:o.CONSTANT_ALPHA,[pM]:o.ONE_MINUS_CONSTANT_ALPHA};function xe(W,Ot,Tt,Ft,bt,vt,Dt,ee,Le,Ae){if(W===ma){C===!0&&(Et(o.BLEND),C=!1);return}if(C===!1&&(gt(o.BLEND),C=!0),W!==QS){if(W!==y||Ae!==R){if((v!==Er||N!==Er)&&(o.blendEquation(o.FUNC_ADD),v=Er,N=Er),Ae)switch(W){case Ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Uh:o.blendFunc(o.ONE,o.ONE);break;case x0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case S0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:we("WebGLState: Invalid blending: ",W);break}else switch(W){case Ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Uh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case x0:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S0:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",W);break}I=null,F=null,O=null,z=null,H.set(0,0,0),tt=0,y=W,R=Ae}return}bt=bt||Ot,vt=vt||Tt,Dt=Dt||Ft,(Ot!==v||bt!==N)&&(o.blendEquationSeparate(Ye[Ot],Ye[bt]),v=Ot,N=bt),(Tt!==I||Ft!==F||vt!==O||Dt!==z)&&(o.blendFuncSeparate(de[Tt],de[Ft],de[vt],de[Dt]),I=Tt,F=Ft,O=vt,z=Dt),(ee.equals(H)===!1||Le!==tt)&&(o.blendColor(ee.r,ee.g,ee.b,Le),H.copy(ee),tt=Le),y=W,R=!1}function De(W,Ot){W.side===pa?Et(o.CULL_FACE):gt(o.CULL_FACE);let Tt=W.side===kn;Ot&&(Tt=!Tt),ae(Tt),W.blending===Ms&&W.transparent===!1?xe(ma):xe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const Ft=W.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Xe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?gt(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(W){D!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),D=W)}function be(W){W!==jS?(gt(o.CULL_FACE),W!==k&&(W===v0?o.cullFace(o.BACK):W===ZS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),k=W}function G(W){W!==rt&&(L&&o.lineWidth(W),rt=W)}function Xe(W,Ot,Tt){W?(gt(o.POLYGON_OFFSET_FILL),(ct!==Ot||ht!==Tt)&&(o.polygonOffset(Ot,Tt),ct=Ot,ht=Tt)):Et(o.POLYGON_OFFSET_FILL)}function Me(W){W?gt(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function ye(W){W===void 0&&(W=o.TEXTURE0+ft-1),Mt!==W&&(o.activeTexture(W),Mt=W)}function kt(W,Ot,Tt){Tt===void 0&&(Mt===null?Tt=o.TEXTURE0+ft-1:Tt=Mt);let Ft=U[Tt];Ft===void 0&&(Ft={type:void 0,texture:void 0},U[Tt]=Ft),(Ft.type!==W||Ft.texture!==Ot)&&(Mt!==Tt&&(o.activeTexture(Tt),Mt=Tt),o.bindTexture(W,Ot||J[W]),Ft.type=W,Ft.texture=Ot)}function w(){const W=U[Mt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function g(){try{o.compressedTexImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function P(){try{o.compressedTexImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function j(){try{o.texSubImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function ot(){try{o.texSubImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function nt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function At(){try{o.compressedTexSubImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function Rt(){try{o.texStorage2D(...arguments)}catch(W){we("WebGLState:",W)}}function zt(){try{o.texStorage3D(...arguments)}catch(W){we("WebGLState:",W)}}function Kt(){try{o.texImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function yt(){try{o.texImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function wt(W){mt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),mt.copy(W))}function Bt(W){Nt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Nt.copy(W))}function Xt(W,Ot){let Tt=p.get(Ot);Tt===void 0&&(Tt=new WeakMap,p.set(Ot,Tt));let Ft=Tt.get(W);Ft===void 0&&(Ft=o.getUniformBlockIndex(Ot,W.name),Tt.set(W,Ft))}function Ct(W,Ot){const Ft=p.get(Ot).get(W);m.get(Ot)!==Ft&&(o.uniformBlockBinding(Ot,Ft,W.__bindingPointIndex),m.set(Ot,Ft))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Mt=null,U={},x={},M=new WeakMap,E=[],T=null,C=!1,y=null,v=null,I=null,F=null,N=null,O=null,z=null,H=new Ne(0,0,0),tt=0,R=!1,D=null,k=null,rt=null,ct=null,ht=null,mt.set(0,0,o.canvas.width,o.canvas.height),Nt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:gt,disable:Et,bindFramebuffer:Qt,drawBuffers:Gt,useProgram:he,setBlending:xe,setMaterial:De,setFlipSided:ae,setCullFace:be,setLineWidth:G,setPolygonOffset:Xe,setScissorTest:Me,activeTexture:ye,bindTexture:kt,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:P,texImage2D:Kt,texImage3D:yt,updateUBOMapping:Xt,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:zt,texSubImage2D:j,texSubImage3D:ot,compressedTexSubImage2D:nt,compressedTexSubImage3D:At,scissor:wt,viewport:Bt,reset:oe}}function j1(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new re,_=new WeakMap;let x;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(w,g){return E?new OffscreenCanvas(w,g):Ic("canvas")}function C(w,g,P){let j=1;const ot=kt(w);if((ot.width>P||ot.height>P)&&(j=P/Math.max(ot.width,ot.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const nt=Math.floor(j*ot.width),At=Math.floor(j*ot.height);x===void 0&&(x=T(nt,At));const Rt=g?T(nt,At):x;return Rt.width=nt,Rt.height=At,Rt.getContext("2d").drawImage(w,0,0,nt,At),ie("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+nt+"x"+At+")."),Rt}else return"data"in w&&ie("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),w;return w}function y(w){return w.generateMipmaps}function v(w){o.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function F(w,g,P,j,ot=!1){if(w!==null){if(o[w]!==void 0)return o[w];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=g;if(g===o.RED&&(P===o.FLOAT&&(nt=o.R32F),P===o.HALF_FLOAT&&(nt=o.R16F),P===o.UNSIGNED_BYTE&&(nt=o.R8)),g===o.RED_INTEGER&&(P===o.UNSIGNED_BYTE&&(nt=o.R8UI),P===o.UNSIGNED_SHORT&&(nt=o.R16UI),P===o.UNSIGNED_INT&&(nt=o.R32UI),P===o.BYTE&&(nt=o.R8I),P===o.SHORT&&(nt=o.R16I),P===o.INT&&(nt=o.R32I)),g===o.RG&&(P===o.FLOAT&&(nt=o.RG32F),P===o.HALF_FLOAT&&(nt=o.RG16F),P===o.UNSIGNED_BYTE&&(nt=o.RG8)),g===o.RG_INTEGER&&(P===o.UNSIGNED_BYTE&&(nt=o.RG8UI),P===o.UNSIGNED_SHORT&&(nt=o.RG16UI),P===o.UNSIGNED_INT&&(nt=o.RG32UI),P===o.BYTE&&(nt=o.RG8I),P===o.SHORT&&(nt=o.RG16I),P===o.INT&&(nt=o.RG32I)),g===o.RGB_INTEGER&&(P===o.UNSIGNED_BYTE&&(nt=o.RGB8UI),P===o.UNSIGNED_SHORT&&(nt=o.RGB16UI),P===o.UNSIGNED_INT&&(nt=o.RGB32UI),P===o.BYTE&&(nt=o.RGB8I),P===o.SHORT&&(nt=o.RGB16I),P===o.INT&&(nt=o.RGB32I)),g===o.RGBA_INTEGER&&(P===o.UNSIGNED_BYTE&&(nt=o.RGBA8UI),P===o.UNSIGNED_SHORT&&(nt=o.RGBA16UI),P===o.UNSIGNED_INT&&(nt=o.RGBA32UI),P===o.BYTE&&(nt=o.RGBA8I),P===o.SHORT&&(nt=o.RGBA16I),P===o.INT&&(nt=o.RGBA32I)),g===o.RGB&&(P===o.UNSIGNED_INT_5_9_9_9_REV&&(nt=o.RGB9_E5),P===o.UNSIGNED_INT_10F_11F_11F_REV&&(nt=o.R11F_G11F_B10F)),g===o.RGBA){const At=ot?Pc:Te.getTransfer(j);P===o.FLOAT&&(nt=o.RGBA32F),P===o.HALF_FLOAT&&(nt=o.RGBA16F),P===o.UNSIGNED_BYTE&&(nt=At===Be?o.SRGB8_ALPHA8:o.RGBA8),P===o.UNSIGNED_SHORT_4_4_4_4&&(nt=o.RGBA4),P===o.UNSIGNED_SHORT_5_5_5_1&&(nt=o.RGB5_A1)}return(nt===o.R16F||nt===o.R32F||nt===o.RG16F||nt===o.RG32F||nt===o.RGBA16F||nt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),nt}function N(w,g){let P;return w?g===null||g===Gi||g===Ho?P=o.DEPTH24_STENCIL8:g===bi?P=o.DEPTH32F_STENCIL8:g===zo&&(P=o.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Gi||g===Ho?P=o.DEPTH_COMPONENT24:g===bi?P=o.DEPTH_COMPONENT32F:g===zo&&(P=o.DEPTH_COMPONENT16),P}function O(w,g){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rn&&w.minFilter!==cn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function z(w){const g=w.target;g.removeEventListener("dispose",z),tt(g),g.isVideoTexture&&_.delete(g)}function H(w){const g=w.target;g.removeEventListener("dispose",H),D(g)}function tt(w){const g=r.get(w);if(g.__webglInit===void 0)return;const P=w.source,j=M.get(P);if(j){const ot=j[g.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&R(w),Object.keys(j).length===0&&M.delete(P)}r.remove(w)}function R(w){const g=r.get(w);o.deleteTexture(g.__webglTexture);const P=w.source,j=M.get(P);delete j[g.__cacheKey],h.memory.textures--}function D(w){const g=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let ot=0;ot<g.__webglFramebuffer[j].length;ot++)o.deleteFramebuffer(g.__webglFramebuffer[j][ot]);else o.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&o.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)o.deleteFramebuffer(g.__webglFramebuffer[j]);else o.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&o.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&o.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&o.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&o.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=w.textures;for(let j=0,ot=P.length;j<ot;j++){const nt=r.get(P[j]);nt.__webglTexture&&(o.deleteTexture(nt.__webglTexture),h.memory.textures--),r.remove(P[j])}r.remove(w)}let k=0;function rt(){k=0}function ct(){const w=k;return w>=l.maxTextures&&ie("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),k+=1,w}function ht(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function ft(w,g){const P=r.get(w);if(w.isVideoTexture&&Me(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&P.__version!==w.version){const j=w.image;if(j===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{J(P,w,g);return}}else w.isExternalTexture&&(P.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,P.__webglTexture,o.TEXTURE0+g)}function L(w,g){const P=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){J(P,w,g);return}else w.isExternalTexture&&(P.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,P.__webglTexture,o.TEXTURE0+g)}function V(w,g){const P=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){J(P,w,g);return}i.bindTexture(o.TEXTURE_3D,P.__webglTexture,o.TEXTURE0+g)}function et(w,g){const P=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&P.__version!==w.version){gt(P,w,g);return}i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+g)}const Mt={[kh]:o.REPEAT,[ti]:o.CLAMP_TO_EDGE,[Xh]:o.MIRRORED_REPEAT},U={[Rn]:o.NEAREST,[_M]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[cn]:o.LINEAR,[$f]:o.LINEAR_MIPMAP_NEAREST,[Tr]:o.LINEAR_MIPMAP_LINEAR},Z={[MM]:o.NEVER,[AM]:o.ALWAYS,[yM]:o.LESS,[Od]:o.LEQUAL,[EM]:o.EQUAL,[Pd]:o.GEQUAL,[bM]:o.GREATER,[TM]:o.NOTEQUAL};function xt(w,g){if(g.type===bi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===cn||g.magFilter===$f||g.magFilter===sc||g.magFilter===Tr||g.minFilter===cn||g.minFilter===$f||g.minFilter===sc||g.minFilter===Tr)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,Mt[g.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,Mt[g.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,Mt[g.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,U[g.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,U[g.minFilter]),g.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,Z[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rn||g.minFilter!==sc&&g.minFilter!==Tr||g.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,l.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function mt(w,g){let P=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",z));const j=g.source;let ot=M.get(j);ot===void 0&&(ot={},M.set(j,ot));const nt=ht(g);if(nt!==w.__cacheKey){ot[nt]===void 0&&(ot[nt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,P=!0),ot[nt].usedTimes++;const At=ot[w.__cacheKey];At!==void 0&&(ot[w.__cacheKey].usedTimes--,At.usedTimes===0&&R(g)),w.__cacheKey=nt,w.__webglTexture=ot[nt].texture}return P}function Nt(w,g,P){return Math.floor(Math.floor(w/P)/g)}function qt(w,g,P,j){const nt=w.updateRanges;if(nt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,g.width,g.height,P,j,g.data);else{nt.sort((yt,wt)=>yt.start-wt.start);let At=0;for(let yt=1;yt<nt.length;yt++){const wt=nt[At],Bt=nt[yt],Xt=wt.start+wt.count,Ct=Nt(Bt.start,g.width,4),oe=Nt(wt.start,g.width,4);Bt.start<=Xt+1&&Ct===oe&&Nt(Bt.start+Bt.count-1,g.width,4)===Ct?wt.count=Math.max(wt.count,Bt.start+Bt.count-wt.start):(++At,nt[At]=Bt)}nt.length=At+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),zt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,g.width);for(let yt=0,wt=nt.length;yt<wt;yt++){const Bt=nt[yt],Xt=Math.floor(Bt.start/4),Ct=Math.ceil(Bt.count/4),oe=Xt%g.width,W=Math.floor(Xt/g.width),Ot=Ct,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,oe,W,Ot,Tt,P,j,g.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function J(w,g,P){let j=o.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=o.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=o.TEXTURE_3D);const ot=mt(w,g),nt=g.source;i.bindTexture(j,w.__webglTexture,o.TEXTURE0+P);const At=r.get(nt);if(nt.version!==At.__version||ot===!0){i.activeTexture(o.TEXTURE0+P);const Rt=Te.getPrimaries(Te.workingColorSpace),zt=g.colorSpace===Ka?null:Te.getPrimaries(g.colorSpace),Kt=g.colorSpace===Ka||Rt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,g.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,g.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let yt=C(g.image,!1,l.maxTextureSize);yt=ye(g,yt);const wt=u.convert(g.format,g.colorSpace),Bt=u.convert(g.type);let Xt=F(g.internalFormat,wt,Bt,g.colorSpace,g.isVideoTexture);xt(j,g);let Ct;const oe=g.mipmaps,W=g.isVideoTexture!==!0,Ot=At.__version===void 0||ot===!0,Tt=nt.dataReady,Ft=O(g,yt);if(g.isDepthTexture)Xt=N(g.format===Ar,g.type),Ot&&(W?i.texStorage2D(o.TEXTURE_2D,1,Xt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Xt,yt.width,yt.height,0,wt,Bt,null));else if(g.isDataTexture)if(oe.length>0){W&&Ot&&i.texStorage2D(o.TEXTURE_2D,Ft,Xt,oe[0].width,oe[0].height);for(let bt=0,vt=oe.length;bt<vt;bt++)Ct=oe[bt],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,wt,Bt,Ct.data):i.texImage2D(o.TEXTURE_2D,bt,Xt,Ct.width,Ct.height,0,wt,Bt,Ct.data);g.generateMipmaps=!1}else W?(Ot&&i.texStorage2D(o.TEXTURE_2D,Ft,Xt,yt.width,yt.height),Tt&&qt(g,yt,wt,Bt)):i.texImage2D(o.TEXTURE_2D,0,Xt,yt.width,yt.height,0,wt,Bt,yt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){W&&Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Xt,oe[0].width,oe[0].height,yt.depth);for(let bt=0,vt=oe.length;bt<vt;bt++)if(Ct=oe[bt],g.format!==hi)if(wt!==null)if(W){if(Tt)if(g.layerUpdates.size>0){const Dt=Y0(Ct.width,Ct.height,g.format,g.type);for(const ee of g.layerUpdates){const Le=Ct.data.subarray(ee*Dt/Ct.data.BYTES_PER_ELEMENT,(ee+1)*Dt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ee,Ct.width,Ct.height,1,wt,Le)}g.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,yt.depth,wt,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Xt,Ct.width,Ct.height,yt.depth,0,Ct.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,yt.depth,wt,Bt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Xt,Ct.width,Ct.height,yt.depth,0,wt,Bt,Ct.data)}else{W&&Ot&&i.texStorage2D(o.TEXTURE_2D,Ft,Xt,oe[0].width,oe[0].height);for(let bt=0,vt=oe.length;bt<vt;bt++)Ct=oe[bt],g.format!==hi?wt!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,wt,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Xt,Ct.width,Ct.height,0,Ct.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,wt,Bt,Ct.data):i.texImage2D(o.TEXTURE_2D,bt,Xt,Ct.width,Ct.height,0,wt,Bt,Ct.data)}else if(g.isDataArrayTexture)if(W){if(Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Xt,yt.width,yt.height,yt.depth),Tt)if(g.layerUpdates.size>0){const bt=Y0(yt.width,yt.height,g.format,g.type);for(const vt of g.layerUpdates){const Dt=yt.data.subarray(vt*bt/yt.data.BYTES_PER_ELEMENT,(vt+1)*bt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,yt.width,yt.height,1,wt,Bt,Dt)}g.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,wt,Bt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,yt.width,yt.height,yt.depth,0,wt,Bt,yt.data);else if(g.isData3DTexture)W?(Ot&&i.texStorage3D(o.TEXTURE_3D,Ft,Xt,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,wt,Bt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,yt.width,yt.height,yt.depth,0,wt,Bt,yt.data);else if(g.isFramebufferTexture){if(Ot)if(W)i.texStorage2D(o.TEXTURE_2D,Ft,Xt,yt.width,yt.height);else{let bt=yt.width,vt=yt.height;for(let Dt=0;Dt<Ft;Dt++)i.texImage2D(o.TEXTURE_2D,Dt,Xt,bt,vt,0,wt,Bt,null),bt>>=1,vt>>=1}}else if(oe.length>0){if(W&&Ot){const bt=kt(oe[0]);i.texStorage2D(o.TEXTURE_2D,Ft,Xt,bt.width,bt.height)}for(let bt=0,vt=oe.length;bt<vt;bt++)Ct=oe[bt],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,wt,Bt,Ct):i.texImage2D(o.TEXTURE_2D,bt,Xt,wt,Bt,Ct);g.generateMipmaps=!1}else if(W){if(Ot){const bt=kt(yt);i.texStorage2D(o.TEXTURE_2D,Ft,Xt,bt.width,bt.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,Bt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Xt,wt,Bt,yt);y(g)&&v(j),At.__version=nt.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function gt(w,g,P){if(g.image.length!==6)return;const j=mt(w,g),ot=g.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+P);const nt=r.get(ot);if(ot.version!==nt.__version||j===!0){i.activeTexture(o.TEXTURE0+P);const At=Te.getPrimaries(Te.workingColorSpace),Rt=g.colorSpace===Ka?null:Te.getPrimaries(g.colorSpace),zt=g.colorSpace===Ka||At===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,g.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,g.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const Kt=g.isCompressedTexture||g.image[0].isCompressedTexture,yt=g.image[0]&&g.image[0].isDataTexture,wt=[];for(let vt=0;vt<6;vt++)!Kt&&!yt?wt[vt]=C(g.image[vt],!0,l.maxCubemapSize):wt[vt]=yt?g.image[vt].image:g.image[vt],wt[vt]=ye(g,wt[vt]);const Bt=wt[0],Xt=u.convert(g.format,g.colorSpace),Ct=u.convert(g.type),oe=F(g.internalFormat,Xt,Ct,g.colorSpace),W=g.isVideoTexture!==!0,Ot=nt.__version===void 0||j===!0,Tt=ot.dataReady;let Ft=O(g,Bt);xt(o.TEXTURE_CUBE_MAP,g);let bt;if(Kt){W&&Ot&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,oe,Bt.width,Bt.height);for(let vt=0;vt<6;vt++){bt=wt[vt].mipmaps;for(let Dt=0;Dt<bt.length;Dt++){const ee=bt[Dt];g.format!==hi?Xt!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,ee.width,ee.height,Xt,ee.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,oe,ee.width,ee.height,0,ee.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,ee.width,ee.height,Xt,Ct,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,oe,ee.width,ee.height,0,Xt,Ct,ee.data)}}}else{if(bt=g.mipmaps,W&&Ot){bt.length>0&&Ft++;const vt=kt(wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(yt){W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,wt[vt].width,wt[vt].height,Xt,Ct,wt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,wt[vt].width,wt[vt].height,0,Xt,Ct,wt[vt].data);for(let Dt=0;Dt<bt.length;Dt++){const Le=bt[Dt].image[vt].image;W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,Le.width,Le.height,Xt,Ct,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,oe,Le.width,Le.height,0,Xt,Ct,Le.data)}}else{W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Xt,Ct,wt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Xt,Ct,wt[vt]);for(let Dt=0;Dt<bt.length;Dt++){const ee=bt[Dt];W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,Xt,Ct,ee.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,oe,Xt,Ct,ee.image[vt])}}}y(g)&&v(o.TEXTURE_CUBE_MAP),nt.__version=ot.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Et(w,g,P,j,ot,nt){const At=u.convert(P.format,P.colorSpace),Rt=u.convert(P.type),zt=F(P.internalFormat,At,Rt,P.colorSpace),Kt=r.get(g),yt=r.get(P);if(yt.__renderTarget=g,!Kt.__hasExternalTextures){const wt=Math.max(1,g.width>>nt),Bt=Math.max(1,g.height>>nt);ot===o.TEXTURE_3D||ot===o.TEXTURE_2D_ARRAY?i.texImage3D(ot,nt,zt,wt,Bt,g.depth,0,At,Rt,null):i.texImage2D(ot,nt,zt,wt,Bt,0,At,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),Xe(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,j,ot,yt.__webglTexture,0,G(g)):(ot===o.TEXTURE_2D||ot>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,j,ot,yt.__webglTexture,nt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qt(w,g,P){if(o.bindRenderbuffer(o.RENDERBUFFER,w),g.depthBuffer){const j=g.depthTexture,ot=j&&j.isDepthTexture?j.type:null,nt=N(g.stencilBuffer,ot),At=g.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Xe(g)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(g),nt,g.width,g.height):P?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(g),nt,g.width,g.height):o.renderbufferStorage(o.RENDERBUFFER,nt,g.width,g.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,w)}else{const j=g.textures;for(let ot=0;ot<j.length;ot++){const nt=j[ot],At=u.convert(nt.format,nt.colorSpace),Rt=u.convert(nt.type),zt=F(nt.internalFormat,At,Rt,nt.colorSpace);Xe(g)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(g),zt,g.width,g.height):P?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(g),zt,g.width,g.height):o.renderbufferStorage(o.RENDERBUFFER,zt,g.width,g.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Gt(w,g,P){const j=g.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=r.get(g.depthTexture);if(ot.__renderTarget=g,(!ot.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,g.depthTexture.addEventListener("dispose",z)),ot.__webglTexture===void 0){ot.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture),xt(o.TEXTURE_CUBE_MAP,g.depthTexture);const Kt=u.convert(g.depthTexture.format),yt=u.convert(g.depthTexture.type);let wt;g.depthTexture.format===_a?wt=o.DEPTH_COMPONENT24:g.depthTexture.format===Ar&&(wt=o.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,wt,g.width,g.height,0,Kt,yt,null)}}else ft(g.depthTexture,0);const nt=ot.__webglTexture,At=G(g),Rt=j?o.TEXTURE_CUBE_MAP_POSITIVE_X+P:o.TEXTURE_2D,zt=g.depthTexture.format===Ar?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(g.depthTexture.format===_a)Xe(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,zt,Rt,nt,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,zt,Rt,nt,0);else if(g.depthTexture.format===Ar)Xe(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,zt,Rt,nt,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,zt,Rt,nt,0);else throw new Error("Unknown depthTexture format")}function he(w){const g=r.get(w),P=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){const ot=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",ot)};j.addEventListener("dispose",ot),g.__depthDisposeCallback=ot}g.__boundDepthTexture=j}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(P)for(let j=0;j<6;j++)Gt(g.__webglFramebuffer[j],w,j);else{const j=w.texture.mipmaps;j&&j.length>0?Gt(g.__webglFramebuffer[0],w,0):Gt(g.__webglFramebuffer,w,0)}else if(P){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(i.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=o.createRenderbuffer(),Qt(g.__webglDepthbuffer[j],w,!1);else{const ot=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,nt=g.__webglDepthbuffer[j];o.bindRenderbuffer(o.RENDERBUFFER,nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,nt)}}else{const j=w.texture.mipmaps;if(j&&j.length>0?i.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=o.createRenderbuffer(),Qt(g.__webglDepthbuffer,w,!1);else{const ot=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,nt=g.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,nt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ye(w,g,P){const j=r.get(w);g!==void 0&&Et(j.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),P!==void 0&&he(w)}function de(w){const g=w.texture,P=r.get(w),j=r.get(g);w.addEventListener("dispose",H);const ot=w.textures,nt=w.isWebGLCubeRenderTarget===!0,At=ot.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=o.createTexture()),j.__version=g.version,h.memory.textures++),nt){P.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[Rt]=[];for(let zt=0;zt<g.mipmaps.length;zt++)P.__webglFramebuffer[Rt][zt]=o.createFramebuffer()}else P.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let Rt=0;Rt<g.mipmaps.length;Rt++)P.__webglFramebuffer[Rt]=o.createFramebuffer()}else P.__webglFramebuffer=o.createFramebuffer();if(At)for(let Rt=0,zt=ot.length;Rt<zt;Rt++){const Kt=r.get(ot[Rt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(w.samples>0&&Xe(w)===!1){P.__webglMultisampledFramebuffer=o.createFramebuffer(),P.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Rt=0;Rt<ot.length;Rt++){const zt=ot[Rt];P.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,P.__webglColorRenderbuffer[Rt]);const Kt=u.convert(zt.format,zt.colorSpace),yt=u.convert(zt.type),wt=F(zt.internalFormat,Kt,yt,zt.colorSpace,w.isXRRenderTarget===!0),Bt=G(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,wt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,P.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(P.__webglDepthRenderbuffer=o.createRenderbuffer(),Qt(P.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(nt){i.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture),xt(o.TEXTURE_CUBE_MAP,g);for(let Rt=0;Rt<6;Rt++)if(g.mipmaps&&g.mipmaps.length>0)for(let zt=0;zt<g.mipmaps.length;zt++)Et(P.__webglFramebuffer[Rt][zt],w,g,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt);else Et(P.__webglFramebuffer[Rt],w,g,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(g)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(At){for(let Rt=0,zt=ot.length;Rt<zt;Rt++){const Kt=ot[Rt],yt=r.get(Kt);let wt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(wt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,yt.__webglTexture),xt(wt,Kt),Et(P.__webglFramebuffer,w,Kt,o.COLOR_ATTACHMENT0+Rt,wt,0),y(Kt)&&v(wt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Rt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,j.__webglTexture),xt(Rt,g),g.mipmaps&&g.mipmaps.length>0)for(let zt=0;zt<g.mipmaps.length;zt++)Et(P.__webglFramebuffer[zt],w,g,o.COLOR_ATTACHMENT0,Rt,zt);else Et(P.__webglFramebuffer,w,g,o.COLOR_ATTACHMENT0,Rt,0);y(g)&&v(Rt),i.unbindTexture()}w.depthBuffer&&he(w)}function xe(w){const g=w.textures;for(let P=0,j=g.length;P<j;P++){const ot=g[P];if(y(ot)){const nt=I(w),At=r.get(ot).__webglTexture;i.bindTexture(nt,At),v(nt),i.unbindTexture()}}}const De=[],ae=[];function be(w){if(w.samples>0){if(Xe(w)===!1){const g=w.textures,P=w.width,j=w.height;let ot=o.COLOR_BUFFER_BIT;const nt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=r.get(w),Rt=g.length>1;if(Rt)for(let Kt=0;Kt<g.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const zt=w.texture.mipmaps;zt&&zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Kt=0;Kt<g.length;Kt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ot|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ot|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,At.__webglColorRenderbuffer[Kt]);const yt=r.get(g[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,P,j,0,0,P,j,ot,o.NEAREST),m===!0&&(De.length=0,ae.length=0,De.push(o.COLOR_ATTACHMENT0+Kt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(De.push(nt),ae.push(nt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ae)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,De))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Kt=0;Kt<g.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,At.__webglColorRenderbuffer[Kt]);const yt=r.get(g[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const g=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[g])}}}function G(w){return Math.min(l.maxSamples,w.samples)}function Xe(w){const g=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Me(w){const g=h.render.frame;_.get(w)!==g&&(_.set(w,g),w.update())}function ye(w,g){const P=w.colorSpace,j=w.format,ot=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||P!==As&&P!==Ka&&(Te.getTransfer(P)===Be?(j!==hi||ot!==fi)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",P)),g}function kt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=rt,this.setTexture2D=ft,this.setTexture2DArray=L,this.setTexture3D=V,this.setTextureCube=et,this.rebindTextures=Ye,this.setupRenderTarget=de,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Z1(o,e){function i(r,l=Ka){let u;const h=Te.getTransfer(l);if(r===fi)return o.UNSIGNED_BYTE;if(r===wd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Dd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===w_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===D_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===R_)return o.BYTE;if(r===C_)return o.SHORT;if(r===zo)return o.UNSIGNED_SHORT;if(r===Cd)return o.INT;if(r===Gi)return o.UNSIGNED_INT;if(r===bi)return o.FLOAT;if(r===Vi)return o.HALF_FLOAT;if(r===U_)return o.ALPHA;if(r===N_)return o.RGB;if(r===hi)return o.RGBA;if(r===_a)return o.DEPTH_COMPONENT;if(r===Ar)return o.DEPTH_STENCIL;if(r===L_)return o.RED;if(r===Ud)return o.RED_INTEGER;if(r===Ts)return o.RG;if(r===Nd)return o.RG_INTEGER;if(r===Ld)return o.RGBA_INTEGER;if(r===Dc||r===Uc||r===Nc||r===Lc)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wh||r===qh||r===Yh||r===jh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Wh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Zh||r===Kh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Jh)return u.COMPRESSED_R11_EAC;if(r===$h)return u.COMPRESSED_SIGNED_R11_EAC;if(r===td)return u.COMPRESSED_RG11_EAC;if(r===ed)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===nd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===id)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ad)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===od)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ld)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ud)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===md)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gd||r===_d||r===vd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===gd)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_d)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xd||r===Sd||r===Md||r===yd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===xd)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Sd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ho?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class J1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Y_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ki({vertexShader:K1,fragmentShader:Q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Rr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $1 extends Cs{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,M=null,E=null,T=null;const C=typeof XRWebGLBinding<"u",y=new J1,v={},I=i.getContextAttributes();let F=null,N=null;const O=[],z=[],H=new re;let tt=null;const R=new yi;R.viewport=new Je;const D=new yi;D.viewport=new Je;const k=[R,D],rt=new ly;let ct=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let gt=O[J];return gt===void 0&&(gt=new yh,O[J]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(J){let gt=O[J];return gt===void 0&&(gt=new yh,O[J]=gt),gt.getGripSpace()},this.getHand=function(J){let gt=O[J];return gt===void 0&&(gt=new yh,O[J]=gt),gt.getHandSpace()};function ft(J){const gt=z.indexOf(J.inputSource);if(gt===-1)return;const Et=O[gt];Et!==void 0&&(Et.update(J.inputSource,J.frame,p||h),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function L(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",V);for(let J=0;J<O.length;J++){const gt=z[J];gt!==null&&(z[J]=null,O[J].disconnect(gt))}ct=null,ht=null,y.reset();for(const J in v)delete v[J];e.setRenderTarget(F),E=null,M=null,x=null,l=null,N=null,qt.stop(),r.isPresenting=!1,e.setPixelRatio(tt),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return M!==null?M:E},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",L),l.addEventListener("inputsourceschange",V),I.xrCompatible!==!0&&await i.makeXRCompatible(),tt=e.getPixelRatio(),e.getSize(H),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Qt=null,Gt=null;I.depth&&(Gt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=I.stencil?Ar:_a,Qt=I.stencil?Ho:Gi);const he={colorFormat:i.RGBA8,depthFormat:Gt,scaleFactor:u};x=this.getBinding(),M=x.createProjectionLayer(he),l.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),N=new Ti(M.textureWidth,M.textureHeight,{format:hi,type:fi,depthTexture:new Vo(M.textureWidth,M.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}else{const Et={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Ti(E.framebufferWidth,E.framebufferHeight,{format:hi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),qt.setContext(l),qt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(J){for(let gt=0;gt<J.removed.length;gt++){const Et=J.removed[gt],Qt=z.indexOf(Et);Qt>=0&&(z[Qt]=null,O[Qt].disconnect(Et))}for(let gt=0;gt<J.added.length;gt++){const Et=J.added[gt];let Qt=z.indexOf(Et);if(Qt===-1){for(let he=0;he<O.length;he++)if(he>=z.length){z.push(Et),Qt=he;break}else if(z[he]===null){z[he]=Et,Qt=he;break}if(Qt===-1)break}const Gt=O[Qt];Gt&&Gt.connect(Et)}}const et=new st,Mt=new st;function U(J,gt,Et){et.setFromMatrixPosition(gt.matrixWorld),Mt.setFromMatrixPosition(Et.matrixWorld);const Qt=et.distanceTo(Mt),Gt=gt.projectionMatrix.elements,he=Et.projectionMatrix.elements,Ye=Gt[14]/(Gt[10]-1),de=Gt[14]/(Gt[10]+1),xe=(Gt[9]+1)/Gt[5],De=(Gt[9]-1)/Gt[5],ae=(Gt[8]-1)/Gt[0],be=(he[8]+1)/he[0],G=Ye*ae,Xe=Ye*be,Me=Qt/(-ae+be),ye=Me*-ae;if(gt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ye),J.translateZ(Me),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Gt[10]===-1)J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const kt=Ye+Me,w=de+Me,g=G-ye,P=Xe+(Qt-ye),j=xe*de/w*kt,ot=De*de/w*kt;J.projectionMatrix.makePerspective(g,P,j,ot,kt,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Z(J,gt){gt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(gt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let gt=J.near,Et=J.far;y.texture!==null&&(y.depthNear>0&&(gt=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),rt.near=D.near=R.near=gt,rt.far=D.far=R.far=Et,(ct!==rt.near||ht!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),ct=rt.near,ht=rt.far),rt.layers.mask=J.layers.mask|6,R.layers.mask=rt.layers.mask&3,D.layers.mask=rt.layers.mask&5;const Qt=J.parent,Gt=rt.cameras;Z(rt,Qt);for(let he=0;he<Gt.length;he++)Z(Gt[he],Qt);Gt.length===2?U(rt,R,D):rt.projectionMatrix.copy(R.projectionMatrix),xt(J,rt,Qt)};function xt(J,gt,Et){Et===null?J.matrix.copy(gt.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(gt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ed*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(M===null&&E===null))return m},this.setFoveation=function(J){m=J,M!==null&&(M.fixedFoveation=J),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(rt)},this.getCameraTexture=function(J){return v[J]};let mt=null;function Nt(J,gt){if(_=gt.getViewerPose(p||h),T=gt,_!==null){const Et=_.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let Qt=!1;Et.length!==rt.cameras.length&&(rt.cameras.length=0,Qt=!0);for(let de=0;de<Et.length;de++){const xe=Et[de];let De=null;if(E!==null)De=E.getViewport(xe);else{const be=x.getViewSubImage(M,xe);De=be.viewport,de===0&&(e.setRenderTargetTextures(N,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(N))}let ae=k[de];ae===void 0&&(ae=new yi,ae.layers.enable(de),ae.viewport=new Je,k[de]=ae),ae.matrix.fromArray(xe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(xe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(De.x,De.y,De.width,De.height),de===0&&(rt.matrix.copy(ae.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),Qt===!0&&rt.cameras.push(ae)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const de=x.getDepthInformation(Et[0]);de&&de.isValid&&de.texture&&y.init(de,l.renderState)}if(Gt&&Gt.includes("camera-access")&&C){e.state.unbindTexture(),x=r.getBinding();for(let de=0;de<Et.length;de++){const xe=Et[de].camera;if(xe){let De=v[xe];De||(De=new Y_,v[xe]=De);const ae=x.getCameraImage(xe);De.sourceTexture=ae}}}}for(let Et=0;Et<O.length;Et++){const Qt=z[Et],Gt=O[Et];Qt!==null&&Gt!==void 0&&Gt.update(Qt,gt,p||h)}mt&&mt(J,gt),gt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:gt}),T=null}const qt=new Z_;qt.setAnimationLoop(Nt),this.setAnimationLoop=function(J){mt=J},this.dispose=function(){}}}const Mr=new va,tA=new an;function eA(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,V_(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,I,F,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),x(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),M(y,v),v.isMeshPhysicalMaterial&&E(y,v,N)):v.isMeshMatcapMaterial?(u(y,v),T(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),C(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,I,F):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const I=e.get(v),F=I.envMap,N=I.envMapRotation;F&&(y.envMap.value=F,Mr.copy(N),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),y.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(Mr)),y.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,I,F){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*I,y.scale.value=F*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function M(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function E(y,v,I){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const I=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function nA(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,F){const N=F.program;r.uniformBlockBinding(I,N)}function p(I,F){let N=l[I.id];N===void 0&&(T(I),N=_(I),l[I.id]=N,I.addEventListener("dispose",y));const O=F.program;r.updateUBOMapping(I,O);const z=e.render.frame;u[I.id]!==z&&(M(I),u[I.id]=z)}function _(I){const F=x();I.__bindingPointIndex=F;const N=o.createBuffer(),O=I.__size,z=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,O,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,F,N),N}function x(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(I){const F=l[I.id],N=I.uniforms,O=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,F);for(let z=0,H=N.length;z<H;z++){const tt=Array.isArray(N[z])?N[z]:[N[z]];for(let R=0,D=tt.length;R<D;R++){const k=tt[R];if(E(k,z,R,O)===!0){const rt=k.__offset,ct=Array.isArray(k.value)?k.value:[k.value];let ht=0;for(let ft=0;ft<ct.length;ft++){const L=ct[ft],V=C(L);typeof L=="number"||typeof L=="boolean"?(k.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,rt+ht,k.__data)):L.isMatrix3?(k.__data[0]=L.elements[0],k.__data[1]=L.elements[1],k.__data[2]=L.elements[2],k.__data[3]=0,k.__data[4]=L.elements[3],k.__data[5]=L.elements[4],k.__data[6]=L.elements[5],k.__data[7]=0,k.__data[8]=L.elements[6],k.__data[9]=L.elements[7],k.__data[10]=L.elements[8],k.__data[11]=0):(L.toArray(k.__data,ht),ht+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(I,F,N,O){const z=I.value,H=F+"_"+N;if(O[H]===void 0)return typeof z=="number"||typeof z=="boolean"?O[H]=z:O[H]=z.clone(),!0;{const tt=O[H];if(typeof z=="number"||typeof z=="boolean"){if(tt!==z)return O[H]=z,!0}else if(tt.equals(z)===!1)return tt.copy(z),!0}return!1}function T(I){const F=I.uniforms;let N=0;const O=16;for(let H=0,tt=F.length;H<tt;H++){const R=Array.isArray(F[H])?F[H]:[F[H]];for(let D=0,k=R.length;D<k;D++){const rt=R[D],ct=Array.isArray(rt.value)?rt.value:[rt.value];for(let ht=0,ft=ct.length;ht<ft;ht++){const L=ct[ht],V=C(L),et=N%O,Mt=et%V.boundary,U=et+Mt;N+=Mt,U!==0&&O-U<V.storage&&(N+=O-U),rt.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=N,N+=V.storage}}}const z=N%O;return z>0&&(N+=O-z),I.__size=N,I.__cache={},this}function C(I){const F={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(F.boundary=4,F.storage=4):I.isVector2?(F.boundary=8,F.storage=8):I.isVector3||I.isColor?(F.boundary=16,F.storage=12):I.isVector4?(F.boundary=16,F.storage=16):I.isMatrix3?(F.boundary=48,F.storage=48):I.isMatrix4?(F.boundary=64,F.storage=64):I.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",I),F}function y(I){const F=I.target;F.removeEventListener("dispose",y);const N=h.indexOf(F.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[F.id]),delete l[F.id],delete u[F.id]}function v(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}const iA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function aA(){return Ii===null&&(Ii=new W_(iA,16,16,Ts,Vi),Ii.name="DFG_LUT",Ii.minFilter=cn,Ii.magFilter=cn,Ii.wrapS=ti,Ii.wrapT=ti,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class rA{constructor(e={}){const{canvas:i=RM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:M=!1,outputBufferType:E=fi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const C=E,y=new Set([Ld,Nd,Ud]),v=new Set([fi,Gi,zo,Ho,wd,Dd]),I=new Uint32Array(4),F=new Int32Array(4);let N=null,O=null;const z=[],H=[];let tt=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=ui;let k=0,rt=0,ct=null,ht=-1,ft=null;const L=new Je,V=new Je;let et=null;const Mt=new Ne(0);let U=0,Z=i.width,xt=i.height,mt=1,Nt=null,qt=null;const J=new Je(0,0,Z,xt),gt=new Je(0,0,Z,xt);let Et=!1;const Qt=new q_;let Gt=!1,he=!1;const Ye=new an,de=new st,xe=new Je,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function be(){return ct===null?mt:1}let G=r;function Xe(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rd}`),i.addEventListener("webglcontextlost",ee,!1),i.addEventListener("webglcontextrestored",Le,!1),i.addEventListener("webglcontextcreationerror",Ae,!1),G===null){const q="webgl2";if(G=Xe(q,A),G===null)throw Xe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw we("WebGLRenderer: "+A.message),A}let Me,ye,kt,w,g,P,j,ot,nt,At,Rt,zt,Kt,yt,wt,Bt,Xt,Ct,oe,W,Ot,Tt,Ft,bt;function vt(){Me=new aT(G),Me.init(),Tt=new Z1(G,Me),ye=new Zb(G,Me,e,Tt),kt=new Y1(G,Me),ye.reversedDepthBuffer&&M&&kt.buffers.depth.setReversed(!0),w=new oT(G),g=new N1,P=new j1(G,Me,kt,g,ye,Tt,w),j=new Qb(R),ot=new iT(R),nt=new fy(G),Ft=new Yb(G,nt),At=new rT(G,nt,w,Ft),Rt=new cT(G,At,nt,w),oe=new lT(G,ye,P),Bt=new Kb(g),zt=new U1(R,j,ot,Me,ye,Ft,Bt),Kt=new eA(R,g),yt=new O1,wt=new H1(Me),Ct=new qb(R,j,ot,kt,Rt,T,m),Xt=new W1(R,Rt,ye),bt=new nA(G,w,ye,kt),W=new jb(G,Me,w),Ot=new sT(G,Me,w),w.programs=zt.programs,R.capabilities=ye,R.extensions=Me,R.properties=g,R.renderLists=yt,R.shadowMap=Xt,R.state=kt,R.info=w}vt(),C!==fi&&(tt=new fT(C,i.width,i.height,l,u));const Dt=new $1(R,G);this.xr=Dt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(A){A!==void 0&&(mt=A,this.setSize(Z,xt,!1))},this.getSize=function(A){return A.set(Z,xt)},this.setSize=function(A,q,ut=!0){if(Dt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,xt=q,i.width=Math.floor(A*mt),i.height=Math.floor(q*mt),ut===!0&&(i.style.width=A+"px",i.style.height=q+"px"),tt!==null&&tt.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Z*mt,xt*mt).floor()},this.setDrawingBufferSize=function(A,q,ut){Z=A,xt=q,mt=ut,i.width=Math.floor(A*ut),i.height=Math.floor(q*ut),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}tt.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,q,ut,it){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,q,ut,it),kt.viewport(L.copy(J).multiplyScalar(mt).round())},this.getScissor=function(A){return A.copy(gt)},this.setScissor=function(A,q,ut,it){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,q,ut,it),kt.scissor(V.copy(gt).multiplyScalar(mt).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){kt.setScissorTest(Et=A)},this.setOpaqueSort=function(A){Nt=A},this.setTransparentSort=function(A){qt=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ut=!0){let it=0;if(A){let K=!1;if(ct!==null){const Ut=ct.texture.format;K=y.has(Ut)}if(K){const Ut=ct.texture.type,It=v.has(Ut),Lt=Ct.getClearColor(),Ht=Ct.getClearAlpha(),Yt=Lt.r,Jt=Lt.g,Vt=Lt.b;It?(I[0]=Yt,I[1]=Jt,I[2]=Vt,I[3]=Ht,G.clearBufferuiv(G.COLOR,0,I)):(F[0]=Yt,F[1]=Jt,F[2]=Vt,F[3]=Ht,G.clearBufferiv(G.COLOR,0,F))}else it|=G.COLOR_BUFFER_BIT}q&&(it|=G.DEPTH_BUFFER_BIT),ut&&(it|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ee,!1),i.removeEventListener("webglcontextrestored",Le,!1),i.removeEventListener("webglcontextcreationerror",Ae,!1),Ct.dispose(),yt.dispose(),wt.dispose(),g.dispose(),j.dispose(),ot.dispose(),Rt.dispose(),Ft.dispose(),bt.dispose(),zt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",jo),Dt.removeEventListener("sessionend",Zo),Di.stop()};function ee(A){A.preventDefault(),T0("WebGLRenderer: Context Lost."),D=!0}function Le(){T0("WebGLRenderer: Context Restored."),D=!1;const A=w.autoReset,q=Xt.enabled,ut=Xt.autoUpdate,it=Xt.needsUpdate,K=Xt.type;vt(),w.autoReset=A,Xt.enabled=q,Xt.autoUpdate=ut,Xt.needsUpdate=it,Xt.type=K}function Ae(A){we("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ei(A){const q=A.target;q.removeEventListener("dispose",ei),mn(q)}function mn(A){gn(A),g.remove(A)}function gn(A){const q=g.get(A).programs;q!==void 0&&(q.forEach(function(ut){zt.releaseProgram(ut)}),A.isShaderMaterial&&zt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ut,it,K,Ut){q===null&&(q=De);const It=K.isMesh&&K.matrixWorld.determinant()<0,Lt=Ko(A,q,ut,it,K);kt.setMaterial(it,It);let Ht=ut.index,Yt=1;if(it.wireframe===!0){if(Ht=At.getWireframeAttribute(ut),Ht===void 0)return;Yt=2}const Jt=ut.drawRange,Vt=ut.attributes.position;let le=Jt.start*Yt,Oe=(Jt.start+Jt.count)*Yt;Ut!==null&&(le=Math.max(le,Ut.start*Yt),Oe=Math.min(Oe,(Ut.start+Ut.count)*Yt)),Ht!==null?(le=Math.max(le,0),Oe=Math.min(Oe,Ht.count)):Vt!=null&&(le=Math.max(le,0),Oe=Math.min(Oe,Vt.count));const Ve=Oe-le;if(Ve<0||Ve===1/0)return;Ft.setup(K,it,Lt,ut,Ht);let qe,Re=W;if(Ht!==null&&(qe=nt.get(Ht),Re=Ot,Re.setIndex(qe)),K.isMesh)it.wireframe===!0?(kt.setLineWidth(it.wireframeLinewidth*be()),Re.setMode(G.LINES)):Re.setMode(G.TRIANGLES);else if(K.isLine){let Zt=it.linewidth;Zt===void 0&&(Zt=1),kt.setLineWidth(Zt*be()),K.isLineSegments?Re.setMode(G.LINES):K.isLineLoop?Re.setMode(G.LINE_LOOP):Re.setMode(G.LINE_STRIP)}else K.isPoints?Re.setMode(G.POINTS):K.isSprite&&Re.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Zt=K._multiDrawStarts,se=K._multiDrawCounts,ve=K._multiDrawCount,Cn=Ht?nt.get(Ht).bytesPerElement:1,Ui=g.get(it).currentProgram.getUniforms();for(let rn=0;rn<ve;rn++)Ui.setValue(G,"_gl_DrawID",rn),Re.render(Zt[rn]/Cn,se[rn])}else if(K.isInstancedMesh)Re.renderInstances(le,Ve,K.count);else if(ut.isInstancedBufferGeometry){const Zt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,se=Math.min(ut.instanceCount,Zt);Re.renderInstances(le,Ve,se)}else Re.render(le,Ve)};function yn(A,q,ut){A.transparent===!0&&A.side===pa&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,mi(A,q,ut),A.side=Ja,A.needsUpdate=!0,mi(A,q,ut),A.side=pa):mi(A,q,ut)}this.compile=function(A,q,ut=null){ut===null&&(ut=A),O=wt.get(ut),O.init(q),H.push(O),ut.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(O.pushLight(K),K.castShadow&&O.pushShadow(K))}),A!==ut&&A.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(O.pushLight(K),K.castShadow&&O.pushShadow(K))}),O.setupLights();const it=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ut=K.material;if(Ut)if(Array.isArray(Ut))for(let It=0;It<Ut.length;It++){const Lt=Ut[It];yn(Lt,ut,K),it.add(Lt)}else yn(Ut,ut,K),it.add(Ut)}),O=H.pop(),it},this.compileAsync=function(A,q,ut=null){const it=this.compile(A,q,ut);return new Promise(K=>{function Ut(){if(it.forEach(function(It){g.get(It).currentProgram.isReady()&&it.delete(It)}),it.size===0){K(A);return}setTimeout(Ut,10)}Me.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let wi=null;function Ds(A){wi&&wi(A)}function jo(){Di.stop()}function Zo(){Di.start()}const Di=new Z_;Di.setAnimationLoop(Ds),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(A){wi=A,Dt.setAnimationLoop(A),A===null?Di.stop():Di.start()},Dt.addEventListener("sessionstart",jo),Dt.addEventListener("sessionend",Zo),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ut=Dt.enabled===!0&&Dt.isPresenting===!0,it=tt!==null&&(ct===null||ut)&&tt.begin(R,ct);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(tt===null||tt.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(q),q=Dt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,ct),O=wt.get(A,H.length),O.init(q),H.push(O),Ye.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Qt.setFromProjectionMatrix(Ye,zi,q.reversedDepth),he=this.localClippingEnabled,Gt=Bt.init(this.clippingPlanes,he),N=yt.get(A,z.length),N.init(),z.push(N),Dt.enabled===!0&&Dt.isPresenting===!0){const It=R.xr.getDepthSensingMesh();It!==null&&Wi(It,q,-1/0,R.sortObjects)}Wi(A,q,0,R.sortObjects),N.finish(),R.sortObjects===!0&&N.sort(Nt,qt),ae=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,ae&&Ct.addToRenderList(N,A),this.info.render.frame++,Gt===!0&&Bt.beginShadows();const K=O.state.shadowsArray;if(Xt.render(K,A,q),Gt===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&tt.hasRenderPass())===!1){const It=N.opaque,Lt=N.transmissive;if(O.setupLights(),q.isArrayCamera){const Ht=q.cameras;if(Lt.length>0)for(let Yt=0,Jt=Ht.length;Yt<Jt;Yt++){const Vt=Ht[Yt];qi(It,Lt,A,Vt)}ae&&Ct.render(A);for(let Yt=0,Jt=Ht.length;Yt<Jt;Yt++){const Vt=Ht[Yt];wr(N,A,Vt,Vt.viewport)}}else Lt.length>0&&qi(It,Lt,A,q),ae&&Ct.render(A),wr(N,A,q)}ct!==null&&rt===0&&(P.updateMultisampleRenderTarget(ct),P.updateRenderTargetMipmap(ct)),it&&tt.end(R),A.isScene===!0&&A.onAfterRender(R,A,q),Ft.resetDefaultState(),ht=-1,ft=null,H.pop(),H.length>0?(O=H[H.length-1],Gt===!0&&Bt.setGlobalState(R.clippingPlanes,O.state.camera)):O=null,z.pop(),z.length>0?N=z[z.length-1]:N=null};function Wi(A,q,ut,it){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ut=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)O.pushLight(A),A.castShadow&&O.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qt.intersectsSprite(A)){it&&xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ye);const It=Rt.update(A),Lt=A.material;Lt.visible&&N.push(A,It,Lt,ut,xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qt.intersectsObject(A))){const It=Rt.update(A),Lt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xe.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),xe.copy(It.boundingSphere.center)),xe.applyMatrix4(A.matrixWorld).applyMatrix4(Ye)),Array.isArray(Lt)){const Ht=It.groups;for(let Yt=0,Jt=Ht.length;Yt<Jt;Yt++){const Vt=Ht[Yt],le=Lt[Vt.materialIndex];le&&le.visible&&N.push(A,It,le,ut,xe.z,Vt)}}else Lt.visible&&N.push(A,It,Lt,ut,xe.z,null)}}const Ut=A.children;for(let It=0,Lt=Ut.length;It<Lt;It++)Wi(Ut[It],q,ut,it)}function wr(A,q,ut,it){const{opaque:K,transmissive:Ut,transparent:It}=A;O.setupLightsView(ut),Gt===!0&&Bt.setGlobalState(R.clippingPlanes,ut),it&&kt.viewport(L.copy(it)),K.length>0&&pi(K,q,ut),Ut.length>0&&pi(Ut,q,ut),It.length>0&&pi(It,q,ut),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function qi(A,q,ut,it){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[it.id]===void 0){const le=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[it.id]=new Ti(1,1,{generateMipmaps:!0,type:le?Vi:fi,minFilter:Tr,samples:ye.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Ut=O.state.transmissionRenderTarget[it.id],It=it.viewport||L;Ut.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);const Lt=R.getRenderTarget(),Ht=R.getActiveCubeFace(),Yt=R.getActiveMipmapLevel();R.setRenderTarget(Ut),R.getClearColor(Mt),U=R.getClearAlpha(),U<1&&R.setClearColor(16777215,.5),R.clear(),ae&&Ct.render(ut);const Jt=R.toneMapping;R.toneMapping=Hi;const Vt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),O.setupLightsView(it),Gt===!0&&Bt.setGlobalState(R.clippingPlanes,it),pi(A,ut,it),P.updateMultisampleRenderTarget(Ut),P.updateRenderTargetMipmap(Ut),Me.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Oe=0,Ve=q.length;Oe<Ve;Oe++){const qe=q[Oe],{object:Re,geometry:Zt,material:se,group:ve}=qe;if(se.side===pa&&Re.layers.test(it.layers)){const Cn=se.side;se.side=kn,se.needsUpdate=!0,xa(Re,ut,it,Zt,se,ve),se.side=Cn,se.needsUpdate=!0,le=!0}}le===!0&&(P.updateMultisampleRenderTarget(Ut),P.updateRenderTargetMipmap(Ut))}R.setRenderTarget(Lt,Ht,Yt),R.setClearColor(Mt,U),Vt!==void 0&&(it.viewport=Vt),R.toneMapping=Jt}function pi(A,q,ut){const it=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Ut=A.length;K<Ut;K++){const It=A[K],{object:Lt,geometry:Ht,group:Yt}=It;let Jt=It.material;Jt.allowOverride===!0&&it!==null&&(Jt=it),Lt.layers.test(ut.layers)&&xa(Lt,q,ut,Ht,Jt,Yt)}}function xa(A,q,ut,it,K,Ut){A.onBeforeRender(R,q,ut,it,K,Ut),A.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(R,q,ut,it,A,Ut),K.transparent===!0&&K.side===pa&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,R.renderBufferDirect(ut,q,it,K,A,Ut),K.side=Ja,K.needsUpdate=!0,R.renderBufferDirect(ut,q,it,K,A,Ut),K.side=pa):R.renderBufferDirect(ut,q,it,K,A,Ut),A.onAfterRender(R,q,ut,it,K,Ut)}function mi(A,q,ut){q.isScene!==!0&&(q=De);const it=g.get(A),K=O.state.lights,Ut=O.state.shadowsArray,It=K.state.version,Lt=zt.getParameters(A,K.state,Ut,q,ut),Ht=zt.getProgramCacheKey(Lt);let Yt=it.programs;it.environment=A.isMeshStandardMaterial?q.environment:null,it.fog=q.fog,it.envMap=(A.isMeshStandardMaterial?ot:j).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Yt===void 0&&(A.addEventListener("dispose",ei),Yt=new Map,it.programs=Yt);let Jt=Yt.get(Ht);if(Jt!==void 0){if(it.currentProgram===Jt&&it.lightsStateVersion===It)return Us(A,Lt),Jt}else Lt.uniforms=zt.getUniforms(A),A.onBeforeCompile(Lt,R),Jt=zt.acquireProgram(Lt,Ht),Yt.set(Ht,Jt),it.uniforms=Lt.uniforms;const Vt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=Bt.uniform),Us(A,Lt),it.needsLights=Sa(A),it.lightsStateVersion=It,it.needsLights&&(Vt.ambientLightColor.value=K.state.ambient,Vt.lightProbe.value=K.state.probe,Vt.directionalLights.value=K.state.directional,Vt.directionalLightShadows.value=K.state.directionalShadow,Vt.spotLights.value=K.state.spot,Vt.spotLightShadows.value=K.state.spotShadow,Vt.rectAreaLights.value=K.state.rectArea,Vt.ltc_1.value=K.state.rectAreaLTC1,Vt.ltc_2.value=K.state.rectAreaLTC2,Vt.pointLights.value=K.state.point,Vt.pointLightShadows.value=K.state.pointShadow,Vt.hemisphereLights.value=K.state.hemi,Vt.directionalShadowMap.value=K.state.directionalShadowMap,Vt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Vt.spotShadowMap.value=K.state.spotShadowMap,Vt.spotLightMatrix.value=K.state.spotLightMatrix,Vt.spotLightMap.value=K.state.spotLightMap,Vt.pointShadowMap.value=K.state.pointShadowMap,Vt.pointShadowMatrix.value=K.state.pointShadowMatrix),it.currentProgram=Jt,it.uniformsList=null,Jt}function $e(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Oc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Us(A,q){const ut=g.get(A);ut.outputColorSpace=q.outputColorSpace,ut.batching=q.batching,ut.batchingColor=q.batchingColor,ut.instancing=q.instancing,ut.instancingColor=q.instancingColor,ut.instancingMorph=q.instancingMorph,ut.skinning=q.skinning,ut.morphTargets=q.morphTargets,ut.morphNormals=q.morphNormals,ut.morphColors=q.morphColors,ut.morphTargetsCount=q.morphTargetsCount,ut.numClippingPlanes=q.numClippingPlanes,ut.numIntersection=q.numClipIntersection,ut.vertexAlphas=q.vertexAlphas,ut.vertexTangents=q.vertexTangents,ut.toneMapping=q.toneMapping}function Ko(A,q,ut,it,K){q.isScene!==!0&&(q=De),P.resetTextureUnits();const Ut=q.fog,It=it.isMeshStandardMaterial?q.environment:null,Lt=ct===null?R.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:As,Ht=(it.isMeshStandardMaterial?ot:j).get(it.envMap||It),Yt=it.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,Jt=!!ut.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Vt=!!ut.morphAttributes.position,le=!!ut.morphAttributes.normal,Oe=!!ut.morphAttributes.color;let Ve=Hi;it.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ve=R.toneMapping);const qe=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Re=qe!==void 0?qe.length:0,Zt=g.get(it),se=O.state.lights;if(Gt===!0&&(he===!0||A!==ft)){const _n=A===ft&&it.id===ht;Bt.setState(it,A,_n)}let ve=!1;it.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==se.state.version||Zt.outputColorSpace!==Lt||K.isBatchedMesh&&Zt.batching===!1||!K.isBatchedMesh&&Zt.batching===!0||K.isBatchedMesh&&Zt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Zt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Zt.instancing===!1||!K.isInstancedMesh&&Zt.instancing===!0||K.isSkinnedMesh&&Zt.skinning===!1||!K.isSkinnedMesh&&Zt.skinning===!0||K.isInstancedMesh&&Zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Zt.instancingMorph===!1&&K.morphTexture!==null||Zt.envMap!==Ht||it.fog===!0&&Zt.fog!==Ut||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Bt.numPlanes||Zt.numIntersection!==Bt.numIntersection)||Zt.vertexAlphas!==Yt||Zt.vertexTangents!==Jt||Zt.morphTargets!==Vt||Zt.morphNormals!==le||Zt.morphColors!==Oe||Zt.toneMapping!==Ve||Zt.morphTargetsCount!==Re)&&(ve=!0):(ve=!0,Zt.__version=it.version);let Cn=Zt.currentProgram;ve===!0&&(Cn=mi(it,q,K));let Ui=!1,rn=!1,Ma=!1;const Pe=Cn.getUniforms(),tn=Zt.uniforms;if(kt.useProgram(Cn.program)&&(Ui=!0,rn=!0,Ma=!0),it.id!==ht&&(ht=it.id,rn=!0),Ui||ft!==A){kt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pe.setValue(G,"projectionMatrix",A.projectionMatrix),Pe.setValue(G,"viewMatrix",A.matrixWorldInverse);const En=Pe.map.cameraPosition;En!==void 0&&En.setValue(G,de.setFromMatrixPosition(A.matrixWorld)),ye.logarithmicDepthBuffer&&Pe.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Pe.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),ft!==A&&(ft=A,rn=!0,Ma=!0)}if(Zt.needsLights&&(se.state.directionalShadowMap.length>0&&Pe.setValue(G,"directionalShadowMap",se.state.directionalShadowMap,P),se.state.spotShadowMap.length>0&&Pe.setValue(G,"spotShadowMap",se.state.spotShadowMap,P),se.state.pointShadowMap.length>0&&Pe.setValue(G,"pointShadowMap",se.state.pointShadowMap,P)),K.isSkinnedMesh){Pe.setOptional(G,K,"bindMatrix"),Pe.setOptional(G,K,"bindMatrixInverse");const _n=K.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Pe.setValue(G,"boneTexture",_n.boneTexture,P))}K.isBatchedMesh&&(Pe.setOptional(G,K,"batchingTexture"),Pe.setValue(G,"batchingTexture",K._matricesTexture,P),Pe.setOptional(G,K,"batchingIdTexture"),Pe.setValue(G,"batchingIdTexture",K._indirectTexture,P),Pe.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Pe.setValue(G,"batchingColorTexture",K._colorsTexture,P));const In=ut.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&oe.update(K,ut,Cn),(rn||Zt.receiveShadow!==K.receiveShadow)&&(Zt.receiveShadow=K.receiveShadow,Pe.setValue(G,"receiveShadow",K.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(tn.envMap.value=Ht,tn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&q.environment!==null&&(tn.envMapIntensity.value=q.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=aA()),rn&&(Pe.setValue(G,"toneMappingExposure",R.toneMappingExposure),Zt.needsLights&&Yi(tn,Ma),Ut&&it.fog===!0&&Kt.refreshFogUniforms(tn,Ut),Kt.refreshMaterialUniforms(tn,it,mt,xt,O.state.transmissionRenderTarget[A.id]),Oc.upload(G,$e(Zt),tn,P)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Oc.upload(G,$e(Zt),tn,P),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Pe.setValue(G,"center",K.center),Pe.setValue(G,"modelViewMatrix",K.modelViewMatrix),Pe.setValue(G,"normalMatrix",K.normalMatrix),Pe.setValue(G,"modelMatrix",K.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const _n=it.uniformsGroups;for(let En=0,$a=_n.length;En<$a;En++){const ji=_n[En];bt.update(ji,Cn),bt.bind(ji,Cn)}}return Cn}function Yi(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Sa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(A,q,ut){const it=g.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),g.get(A.texture).__webglTexture=q,g.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ut,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ut=g.get(A);ut.__webglFramebuffer=q,ut.__useDefaultFramebuffer=q===void 0};const Wc=G.createFramebuffer();this.setRenderTarget=function(A,q=0,ut=0){ct=A,k=q,rt=ut;let it=null,K=!1,Ut=!1;if(A){const Lt=g.get(A);if(Lt.__useDefaultFramebuffer!==void 0){kt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),L.copy(A.viewport),V.copy(A.scissor),et=A.scissorTest,kt.viewport(L),kt.scissor(V),kt.setScissorTest(et),ht=-1;return}else if(Lt.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Lt.__hasExternalTextures)P.rebindTextures(A,g.get(A.texture).__webglTexture,g.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&g.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ut=!0);const Yt=g.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Yt[q])?it=Yt[q][ut]:it=Yt[q],K=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?it=g.get(A).__webglMultisampledFramebuffer:Array.isArray(Yt)?it=Yt[ut]:it=Yt,L.copy(A.viewport),V.copy(A.scissor),et=A.scissorTest}else L.copy(J).multiplyScalar(mt).floor(),V.copy(gt).multiplyScalar(mt).floor(),et=Et;if(ut!==0&&(it=Wc),kt.bindFramebuffer(G.FRAMEBUFFER,it)&&kt.drawBuffers(A,it),kt.viewport(L),kt.scissor(V),kt.setScissorTest(et),K){const Lt=g.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,ut)}else if(Ut){const Lt=q;for(let Ht=0;Ht<A.textures.length;Ht++){const Yt=g.get(A.textures[Ht]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ht,Yt.__webglTexture,ut,Lt)}}else if(A!==null&&ut!==0){const Lt=g.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,ut)}ht=-1},this.readRenderTargetPixels=function(A,q,ut,it,K,Ut,It,Lt=0){if(!(A&&A.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=g.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Ht=Ht[It]),Ht){kt.bindFramebuffer(G.FRAMEBUFFER,Ht);try{const Yt=A.textures[Lt],Jt=Yt.format,Vt=Yt.type;if(!ye.textureFormatReadable(Jt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Vt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-it&&ut>=0&&ut<=A.height-K&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,ut,it,K,Tt.convert(Jt),Tt.convert(Vt),Ut))}finally{const Yt=ct!==null?g.get(ct).__webglFramebuffer:null;kt.bindFramebuffer(G.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(A,q,ut,it,K,Ut,It,Lt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=g.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Ht=Ht[It]),Ht)if(q>=0&&q<=A.width-it&&ut>=0&&ut<=A.height-K){kt.bindFramebuffer(G.FRAMEBUFFER,Ht);const Yt=A.textures[Lt],Jt=Yt.format,Vt=Yt.type;if(!ye.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,le),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,ut,it,K,Tt.convert(Jt),Tt.convert(Vt),0);const Oe=ct!==null?g.get(ct).__webglFramebuffer:null;kt.bindFramebuffer(G.FRAMEBUFFER,Oe);const Ve=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await CM(G,Ve,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,le),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.deleteBuffer(le),G.deleteSync(Ve),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ut=0){const it=Math.pow(2,-ut),K=Math.floor(A.image.width*it),Ut=Math.floor(A.image.height*it),It=q!==null?q.x:0,Lt=q!==null?q.y:0;P.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,ut,0,0,It,Lt,K,Ut),kt.unbindTexture()};const Qo=G.createFramebuffer(),Jo=G.createFramebuffer();this.copyTextureToTexture=function(A,q,ut=null,it=null,K=0,Ut=null){Ut===null&&(K!==0?(Go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=K,K=0):Ut=0);let It,Lt,Ht,Yt,Jt,Vt,le,Oe,Ve;const qe=A.isCompressedTexture?A.mipmaps[Ut]:A.image;if(ut!==null)It=ut.max.x-ut.min.x,Lt=ut.max.y-ut.min.y,Ht=ut.isBox3?ut.max.z-ut.min.z:1,Yt=ut.min.x,Jt=ut.min.y,Vt=ut.isBox3?ut.min.z:0;else{const In=Math.pow(2,-K);It=Math.floor(qe.width*In),Lt=Math.floor(qe.height*In),A.isDataArrayTexture?Ht=qe.depth:A.isData3DTexture?Ht=Math.floor(qe.depth*In):Ht=1,Yt=0,Jt=0,Vt=0}it!==null?(le=it.x,Oe=it.y,Ve=it.z):(le=0,Oe=0,Ve=0);const Re=Tt.convert(q.format),Zt=Tt.convert(q.type);let se;q.isData3DTexture?(P.setTexture3D(q,0),se=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(P.setTexture2DArray(q,0),se=G.TEXTURE_2D_ARRAY):(P.setTexture2D(q,0),se=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ve=G.getParameter(G.UNPACK_ROW_LENGTH),Cn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ui=G.getParameter(G.UNPACK_SKIP_PIXELS),rn=G.getParameter(G.UNPACK_SKIP_ROWS),Ma=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,qe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Vt);const Pe=A.isDataArrayTexture||A.isData3DTexture,tn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const In=g.get(A),_n=g.get(q),En=g.get(In.__renderTarget),$a=g.get(_n.__renderTarget);kt.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,$a.__webglFramebuffer);for(let ji=0;ji<Ht;ji++)Pe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,g.get(A).__webglTexture,K,Vt+ji),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,g.get(q).__webglTexture,Ut,Ve+ji)),G.blitFramebuffer(Yt,Jt,It,Lt,le,Oe,It,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);kt.bindFramebuffer(G.READ_FRAMEBUFFER,null),kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||g.has(A)){const In=g.get(A),_n=g.get(q);kt.bindFramebuffer(G.READ_FRAMEBUFFER,Qo),kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Jo);for(let En=0;En<Ht;En++)Pe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,In.__webglTexture,K,Vt+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,In.__webglTexture,K),tn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,_n.__webglTexture,Ut,Ve+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_n.__webglTexture,Ut),K!==0?G.blitFramebuffer(Yt,Jt,It,Lt,le,Oe,It,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):tn?G.copyTexSubImage3D(se,Ut,le,Oe,Ve+En,Yt,Jt,It,Lt):G.copyTexSubImage2D(se,Ut,le,Oe,Yt,Jt,It,Lt);kt.bindFramebuffer(G.READ_FRAMEBUFFER,null),kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else tn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(se,Ut,le,Oe,Ve,It,Lt,Ht,Re,Zt,qe.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(se,Ut,le,Oe,Ve,It,Lt,Ht,Re,qe.data):G.texSubImage3D(se,Ut,le,Oe,Ve,It,Lt,Ht,Re,Zt,qe):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,le,Oe,It,Lt,Re,Zt,qe.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,le,Oe,qe.width,qe.height,Re,qe.data):G.texSubImage2D(G.TEXTURE_2D,Ut,le,Oe,It,Lt,Re,Zt,qe);G.pixelStorei(G.UNPACK_ROW_LENGTH,ve),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Cn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ui),G.pixelStorei(G.UNPACK_SKIP_ROWS,rn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ma),Ut===0&&q.generateMipmaps&&G.generateMipmap(se),kt.unbindTexture()},this.initRenderTarget=function(A){g.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){k=0,rt=0,ct=null,kt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}function sA({mouseForce:o=20,cursorSize:e=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:h=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:_=["#5227FF","#FF9FFC","#B19EEF"],style:x={},className:M="",autoDemo:E=!0,autoSpeed:T=.5,autoIntensity:C=2.2,takeoverDuration:y=.25,autoResumeDelay:v=1e3,autoRampDuration:I=.6}){const F=Pn.useRef(null),N=Pn.useRef(null),O=Pn.useRef(null),z=Pn.useRef(null),H=Pn.useRef(null),tt=Pn.useRef(!0),R=Pn.useRef(null);return Pn.useEffect(()=>{if(!F.current)return;function D(w){let g;Array.isArray(w)&&w.length>0?w.length===1?g=[w[0],w[0]]:g=w:g=["#ffffff","#ffffff"];const P=g.length,j=new Uint8Array(P*4);for(let nt=0;nt<P;nt++){const At=new Ne(g[nt]);j[nt*4+0]=Math.round(At.r*255),j[nt*4+1]=Math.round(At.g*255),j[nt*4+2]=Math.round(At.b*255),j[nt*4+3]=255}const ot=new W_(j,P,1,hi);return ot.magFilter=cn,ot.minFilter=cn,ot.wrapS=ti,ot.wrapT=ti,ot.generateMipmaps=!1,ot.needsUpdate=!0,ot}const k=D(_),rt=new Je(0,0,0,0);class ct{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new rA({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Ne(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new cy,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ht=new ct;class ft{constructor(){this.mouseMoved=!1,this.coords=new re,this.coords_old=new re,this.diff=new re,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new re,this.takeoverTo=new re,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(g){this.container=g,this.docTarget=g.ownerDocument||null;const P=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);P&&(this.listenerTarget=P,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(g,P){if(!this.container)return!1;const j=this.container.getBoundingClientRect();return j.width===0||j.height===0?!1:g>=j.left&&g<=j.right&&P>=j.top&&P<=j.bottom}updateHoverState(g,P){return this.isHoverInside=this.isPointInside(g,P),this.isHoverInside}setCoords(g,P){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const j=this.container.getBoundingClientRect();if(j.width===0||j.height===0)return;const ot=(g-j.left)/j.width,nt=(P-j.top)/j.height;this.coords.set(ot*2-1,-(nt*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,P){this.coords.set(g,P),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.updateHoverState(g.clientX,g.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const P=this.container.getBoundingClientRect();if(P.width===0||P.height===0)return;const j=(g.clientX-P.left)/P.width,ot=(g.clientY-P.top)/P.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(j*2-1,-(ot*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}}onDocumentTouchStart(g){if(g.touches.length!==1)return;const P=g.touches[0];this.updateHoverState(P.clientX,P.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(P.clientX,P.clientY),this.hasUserControl=!0)}onDocumentTouchMove(g){if(g.touches.length!==1)return;const P=g.touches[0];this.updateHoverState(P.clientX,P.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(P.clientX,P.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const P=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,P)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const L=new ft;class V{constructor(g,P,j){this.mouse=g,this.manager=P,this.enabled=j.enabled,this.speed=j.speed,this.resumeDelay=j.resumeDelay||3e3,this.rampDurationMs=(j.rampDuration||0)*1e3,this.active=!1,this.current=new re(0,0),this.target=new re,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new re,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let j=(g-this.lastTime)/1e3;this.lastTime=g,j>.2&&(j=.016);const ot=this._tmpDir.subVectors(this.target,this.current),nt=ot.length();if(nt<.01){this.pickNewTarget();return}ot.normalize();let At=1;if(this.rampDurationMs>0){const Kt=Math.min(1,(g-this.activationTime)/this.rampDurationMs);At=Kt*Kt*(3-2*Kt)}const Rt=this.speed*j*At,zt=Math.min(Rt,nt);this.current.addScaledVector(ot,zt),this.mouse.setNormalized(this.current.x,this.current.y)}}const et=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,Mt=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,U=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,Z=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,xt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,mt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Nt=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,qt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,J=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,gt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Et{constructor(g){this.props=g||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new V0,this.camera=new Bc,this.uniforms&&(this.material=new Io(this.props.material),this.geometry=new Rr(2,2),this.plane=new di(this.geometry,this.material),this.scene.add(this.plane))}update(){ht.renderer.setRenderTarget(this.props.output||null),ht.renderer.render(this.scene,this.camera),ht.renderer.setRenderTarget(null)}}class Qt extends Et{constructor(g){super({material:{vertexShader:et,fragmentShader:Z,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new Ci,P=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new Ai(P,3));const j=new Io({vertexShader:Mt,fragmentShader:Z,uniforms:this.uniforms});this.line=new ay(g,j),this.scene.add(this.line)}update({dt:g,isBounce:P,BFECC:j}){this.uniforms.dt.value=g,this.line.visible=P,this.uniforms.isBFECC.value=j,super.update()}}class Gt extends Et{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const P=new Rr(1,1),j=new Io({vertexShader:U,fragmentShader:Nt,blending:Uh,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new re(0,0)},center:{value:new re(0,0)},scale:{value:new re(g.cursor_size,g.cursor_size)}}});this.mouse=new di(P,j),this.scene.add(this.mouse)}update(g){const P=L.diff.x/2*g.mouse_force,j=L.diff.y/2*g.mouse_force,ot=g.cursor_size*g.cellScale.x,nt=g.cursor_size*g.cellScale.y,At=Math.min(Math.max(L.coords.x,-1+ot+g.cellScale.x*2),1-ot-g.cellScale.x*2),Rt=Math.min(Math.max(L.coords.y,-1+nt+g.cellScale.y*2),1-nt-g.cellScale.y*2),zt=this.mouse.material.uniforms;zt.force.value.set(P,j),zt.center.value.set(At,Rt),zt.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class he extends Et{constructor(g){super({material:{vertexShader:et,fragmentShader:gt,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:P,dt:j}){let ot,nt;this.uniforms.v.value=g;for(let At=0;At<P;At++)At%2===0?(ot=this.props.output0,nt=this.props.output1):(ot=this.props.output1,nt=this.props.output0),this.uniforms.velocity_new.value=ot.texture,this.props.output=nt,this.uniforms.dt.value=j,super.update();return nt}}class Ye extends Et{constructor(g){super({material:{vertexShader:et,fragmentShader:mt,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class de extends Et{constructor(g){super({material:{vertexShader:et,fragmentShader:qt,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let P,j;for(let ot=0;ot<g;ot++)ot%2===0?(P=this.props.output0,j=this.props.output1):(P=this.props.output1,j=this.props.output0),this.uniforms.pressure.value=P.texture,this.props.output=j,super.update();return j}}class xe extends Et{constructor(g){super({material:{vertexShader:et,fragmentShader:J,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:P}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=P.texture,super.update()}}class De{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new re,this.cellScale=new re,this.boundarySpace=new re,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Vi:bi}createAllFBO(){const P={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:cn,magFilter:cn,wrapS:ti,wrapT:ti};for(let j in this.fbos)this.fbos[j]=new Ti(this.fboSize.x,this.fboSize.y,P)}createShaderPass(){this.advection=new Qt({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Gt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new he({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Ye({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new de({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new xe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*ht.width)),P=Math.max(1,Math.round(this.options.resolution*ht.height)),j=1/g,ot=1/P;this.cellScale.set(j,ot),this.fboSize.set(g,P)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const P=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:P})}}class ae{constructor(){this.init()}init(){this.simulation=new De,this.scene=new V0,this.camera=new Bc,this.output=new di(new Rr(2,2),new Io({vertexShader:et,fragmentShader:xt,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new re},palette:{value:k},bgColor:{value:rt}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){ht.renderer.setRenderTarget(null),ht.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class be{constructor(g){this.props=g,ht.init(g.$wrapper),L.init(g.$wrapper),L.autoIntensity=g.autoIntensity,L.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),L.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new V(L,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():tt.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ht.renderer.domElement),this.output=new ae}resize(){ht.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),L.update(),ht.update(),this.output.update()}loop(){this.running&&(this.render(),z.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,z.current&&(cancelAnimationFrame(z.current),z.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),L.dispose(),ht.renderer){const g=ht.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),ht.renderer.dispose()}}catch{}}}const G=F.current;G.style.position=G.style.position||"relative",G.style.overflow=G.style.overflow||"hidden";const Xe=new be({$wrapper:G,autoDemo:E,autoSpeed:T,autoIntensity:C,takeoverDuration:y,autoResumeDelay:v,autoRampDuration:I});N.current=Xe,(()=>{if(!N.current)return;const w=N.current.output?.simulation;if(!w)return;const g=w.options.resolution;Object.assign(w.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),m!==g&&w.resize()})(),Xe.start();const ye=new IntersectionObserver(w=>{const g=w[0],P=g.isIntersecting&&g.intersectionRatio>0;tt.current=P,N.current&&(P&&!document.hidden?N.current.start():N.current.pause())},{threshold:[0,.01,.1]});ye.observe(G),H.current=ye;const kt=new ResizeObserver(()=>{N.current&&(R.current&&cancelAnimationFrame(R.current),R.current=requestAnimationFrame(()=>{N.current&&N.current.resize()}))});return kt.observe(G),O.current=kt,()=>{if(z.current&&cancelAnimationFrame(z.current),O.current)try{O.current.disconnect()}catch{}if(H.current)try{H.current.disconnect()}catch{}N.current&&N.current.dispose(),N.current=null}},[d,e,h,p,i,u,l,o,m,r,_,E,T,C,y,v,I]),Pn.useEffect(()=>{const D=N.current;if(!D)return;const k=D.output?.simulation;if(!k)return;const rt=k.options.resolution;Object.assign(k.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),D.autoDriver&&(D.autoDriver.enabled=E,D.autoDriver.speed=T,D.autoDriver.resumeDelay=v,D.autoDriver.rampDurationMs=I*1e3,D.autoDriver.mouse&&(D.autoDriver.mouse.autoIntensity=C,D.autoDriver.mouse.takeoverDuration=y)),m!==rt&&k.resize()},[o,e,i,r,l,u,h,d,m,p,E,T,C,y,v,I]),St.jsx("div",{ref:F,className:`w-full h-full relative overflow-hidden pointer-events-none touch-none ${M||""}`,style:x})}const oA=()=>St.jsxs("div",{className:"relative min-h-screen bg-black w-full overflow-hidden",children:[St.jsx("div",{className:"absolute inset-0 z-0",children:St.jsx(sA,{colors:["#ff5f1f","#8A9Cff","#a800a2"],mouseForce:40,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!0,autoDemo:!0,autoSpeed:.9,autoIntensity:2.2,takeoverDuration:.1,autoResumeDelay:5,autoRampDuration:.6,color0:"#0028ff",color1:"#ff5f1f",color2:"#a800a8"})}),St.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:St.jsx("h1",{className:`
        text-white
        text-[120px]
        md:text-[290px]
        tracking-wide
        select-none
        mix-blend-difference
        md:ml-24
        text-center
      `,style:{fontFamily:"AnshSignature"},children:"Ansh Sharma"})}),St.jsx("div",{className:"relative z-10 h-screen overflow-y-auto no-scrollbar lg:pl-[250px] lg:pr-[250px]",children:St.jsxs("div",{className:"container mx-auto px-4 py-8",children:[St.jsx("nav",{children:St.jsx(FS,{})}),St.jsx("div",{className:"h-210"}),St.jsx("section",{children:St.jsx(IS,{})}),St.jsx("section",{children:St.jsx(BS,{})}),St.jsx("section",{children:St.jsx(YS,{})}),St.jsx("section",{children:St.jsx(HS,{})}),St.jsx("section",{children:St.jsx(qS,{})})]})})]});uS.createRoot(document.getElementById("root")).render(St.jsx(Pn.StrictMode,{children:St.jsx(oA,{})}));
