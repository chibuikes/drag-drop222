/*! For license information please see 933.9616e7ff.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkstage2_hng=self.webpackChunkstage2_hng||[]).push([[933],{6933:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(4165),o=r(5861),i=r(9439),a=r(2791),c={div:"Login_div__0knBF",a:"Login_a__kY-t9",nav:"Login_nav__5U366",nav1:"Login_nav1__Pk9MJ",form:"Login_form__zXuVW",input:"Login_input__TnFD0",p:"Login_p__bfCcD",btn:"Login_btn__5UZoN"};var s=r.p+"static/media/logo.66a576108be35c08eb2ca3e40c17d151.svg",u=r(7689),l=r(1087),h=r(184),f=function(){var t,e,r=(0,u.s0)(),f=(0,a.useRef)(),p=(0,a.useRef)(),d=(0,a.useState)(""),v=(0,i.Z)(d,2),y=v[0],m=v[1],g=(0,a.useState)(""),w=(0,i.Z)(g,2),x=w[0],b=w[1];(0,a.useEffect)((function(){!function(){(t=t||(0,o.Z)((0,n.Z)().mark((function t(){var e,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3XcDFDI03Ei7fzOA0F8xm0kX_4LhENGo",{method:"POST",body:JSON.stringify({email:"user@example.com",password:"1Password",returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,console.log(r.ok);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}()}),[]);return(0,h.jsx)("div",{className:c.div,children:(0,h.jsxs)("header",{children:[(0,h.jsxs)("nav",{className:c.nav1,children:[(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("img",{src:s,alt:"logo",className:c.img11})]}),(0,h.jsxs)("div",{className:c.nav,children:[(0,h.jsxs)(l.rU,{to:"",className:c.a,style:{display:"block"},children:[" ","Login"]}),(0,h.jsx)(l.rU,{to:"",className:c.a,children:"Home"})]})]}),(0,h.jsxs)("form",{className:c.form,onSubmit:function(t){return(e=e||(0,o.Z)((0,n.Z)().mark((function t(e){var o,i,a,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),o=f.current.value,i=p.current.value,m(""===o?"this field cannot be empty":"user@example.com"!==o?"Email address not found":""),b(""===i?"this field cannot be empty":"1Password"!==i?"Incorrect password!":""),t.prev=5,t.next=8,fetch("".concat("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3XcDFDI03Ei7fzOA0F8xm0kX_4LhENGo"),{method:"POST",body:JSON.stringify({email:o,password:i,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 8:if((a=t.sent).ok){t.next=11;break}throw new Error("Something went wrong!");case 11:return t.next=13,a.json();case 13:c=t.sent,console.log(c),r("/readbook",{replace:!0,state:{}}),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(5),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[5,18]])})))).apply(this,arguments)},children:[(0,h.jsx)("img",{src:s,alt:"logp",className:c.img}),(0,h.jsxs)("div",{className:c.div,children:[(0,h.jsx)("p",{className:c.p,children:"Email address"}),(0,h.jsx)("input",{className:c.input,type:"email",placeholder:"Enter your email address",ref:f}),y?(0,h.jsx)("p",{className:"error",children:y}):""]}),(0,h.jsxs)("div",{className:c.div,children:[(0,h.jsx)("p",{className:c.p,children:"Password"}),(0,h.jsx)("input",{className:c.input,type:"password",placeholder:"Password",ref:p}),x?(0,h.jsx)("p",{className:"error",children:x}):""]}),(0,h.jsx)("button",{type:"submit",className:c.btn,children:"Login"})]})]})})}},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new Z(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function x(){}function b(){}var _={};h(_,s,(function(){return this}));var L=Object.getPrototypeOf,j=L&&L(L(F([])));j&&j!==r&&i.call(j,s)&&(_=j);var E=b.prototype=w.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,a,c,s){var u=p(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function O(e,r,n){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=S(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?m:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError((0,n.Z)(e)+" is not iterable")}return x.prototype=b,a(E,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:x,configurable:!0}),x.displayName=h(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(N.prototype),h(N.prototype,u,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new N(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),h(E,l,"Generator"),h(E,s,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,Z.prototype={constructor:Z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}}}]);
//# sourceMappingURL=933.9616e7ff.chunk.js.map