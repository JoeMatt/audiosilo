(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{128:function(n,t,e){"use strict";e.r(t),t.default=function(){return{loginStatus:!1,loginsecret:null,server:null,group:null,groupDetails:{playback_speed:1,active_books:[],finished_books:[]},book:{name:null,author:null,description:null,cover:null},folderDescription:"",secret:null,player:!1,transcode:"0",rightbar:!1}}},129:function(n,t,e){"use strict";function o(n){}e.r(t),e.d(t,"getStatus",(function(){return o}))},130:function(n,t,e){"use strict";e.r(t),e.d(t,"loginsecret",(function(){return o})),e.d(t,"rightbar",(function(){return r})),e.d(t,"player",(function(){return l})),e.d(t,"groupDetails",(function(){return c})),e.d(t,"playbackSpeed",(function(){return f})),e.d(t,"book",(function(){return d})),e.d(t,"description",(function(){return m})),e.d(t,"cover",(function(){return h})),e.d(t,"folderDescription",(function(){return w})),e.d(t,"loginStatus",(function(){return y})),e.d(t,"initialiseApp",(function(){return v}));e(22),e(30);function o(n,data){n.loginsecret=data}function r(n,data){n.rightbar=data}function l(n,data){n.player=data}function c(n,data){n.groupDetails=data}function f(n,data){n.groupDetails.playback_speed=data}function d(n,data){n.book=data}function m(n,data){n.book.description=data}function h(n,data){n.book.cover=data}function w(n,data){n.folderDescription=data}function y(n,data){n.loginStatus=data}function v(n){var t=localStorage.getItem("server"),e=localStorage.getItem("group"),o=localStorage.getItem("loginsecret"),r=localStorage.getItem("loginStatus");t&&(n.server=t),e&&(n.group=e),o&&(n.loginsecret=o),r&&(n.loginStatus=r)}},131:function(n,t,e){"use strict";e.r(t),function(n){e.d(t,"firelogin",(function(){return O})),e.d(t,"setDetails",(function(){return z})),e.d(t,"login",(function(){return j})),e.d(t,"getFolderDescription",(function(){return D})),e.d(t,"getBookDetails",(function(){return I})),e.d(t,"getDescription",(function(){return P}));e(47),e(46),e(60),e(33),e(61),e(35),e(32),e(39),e(20),e(40),e(23);var o=e(25),r=e(7),l=(e(44),e(236),e(12),e(238),e(244),e(246),e(247),e(248),e(251),e(252),e(253),e(254),e(255),e(256),e(257),e(258),e(260),e(261),e(262),e(263),e(264),e(265),e(266),e(267),e(272),e(273),e(274),e(22),e(30),e(48),e(104),e(42)),c=e.n(l),f=e(185),d=e.n(f),m=e(137),h=e(135),w=e.n(h);function y(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return v(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return v(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var i=0,o=function(){};return{s:o,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return l=n.done,n},e:function(n){c=!0,r=n},f:function(){try{l||null==e.return||e.return()}finally{if(c)throw r}}}}function v(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=n[i];return e}function x(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}function S(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(o.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}function O(n,t){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(regeneratorRuntime.mark((function t(e,data){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post(n.env.BACKEND_LOCATION+"login",data);case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(n,data){localStorage.setItem("server",data.server),localStorage.setItem("group",data.group),localStorage.setItem("loginsecret",data.secret),localStorage.setItem("loginStatus",data.loginStatus)}function j(n,data){var t=!1,e=null;if(data.secret){var o=new TextEncoder("utf-8").encode(data.secret),r=new Uint8Array(32);window.crypto.getRandomValues(r);var l=new Uint8Array(o.length+r.length);return l.set(o),l.set(r,o.length),(window.crypto.subtle?window.crypto.subtle.digest("SHA-256",l):Promise.resolve(m.sha256.arrayBuffer(l))).then((function(s){var n="secret="+(w.a.fromByteArray(r)+"|"+w.a.fromByteArray(new Uint8Array(s)));c.a.$post(data.corsproxy+data.server+"authenticate",n,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(n){e=n}))}))}t=!0,e="noauth",n.commit("loginsecret",e),n.commit("loginStatus",t),z(0,S(S({},data),{},{loginsecret:e,loginStatus:t}))}function D(n,t){return A.apply(this,arguments)}function A(){return(A=Object(r.a)(regeneratorRuntime.mark((function n(t,path){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(t,path);case 2:e=n.sent,t.commit("folderDescription",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function I(n,t){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function n(t,e){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(t,e.description);case 2:o=n.sent,t.commit("description",o),t.commit("cover",e.cover);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function P(n,t){return _.apply(this,arguments)}function _(){return(_=Object(r.a)(regeneratorRuntime.mark((function n(t,path){var e,o,r,output,l,f,m,h,line;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.state.server+"desc/"+path,n.next=3,c.a.get(e);case 3:if(o=n.sent,console.log(o),console.log(o.headers["content-type"]),r=o.headers["content-type"],output="",l="","text/html"===r)output=o.data;else if("text/x-markdown"===r||"text/markdown"===r)output=d()(o.data);else if("text/plain"===r){f=o.data.split(/\r?\n/),m=y(f);try{for(m.s();!(h=m.n()).done;)line=h.value,l+="<p>"+line+"</p>"}catch(n){m.e(n)}finally{m.f()}output=l}else output=o.data;return n.abrupt("return",output);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}.call(this,e(97))},191:function(n,t,e){e(192),n.exports=e(193)},233:function(n,t,e){var content=e(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(79).default)("581dbee3",content,!0,{sourceMap:!1})},234:function(n,t,e){var o=e(78)((function(i){return i[1]}));o.push([n.i,'/*purgecss start ignore*/\n\n*,body{\n  font-family:"Roboto",sans-serif;\n  font-weight:300\n}\n\n.content-area{\n  height:calc(100vh - 6rem)\n}\n\n.mobilesearch{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  padding:15px;\n  background:#fff\n}\n\n.mobilesearch input{\n  padding:.75rem 1.25rem\n}\n\n.label-floating input:not(:-moz-placeholder-shown),.label-floating select:not(:-moz-placeholder-shown){\n  padding-top:1.6rem;\n  padding-bottom:.25rem\n}\n\n.label-floating input:not(:-ms-input-placeholder),.label-floating select:not(:-ms-input-placeholder){\n  padding-top:1.6rem;\n  padding-bottom:.25rem\n}\n\n.label-floating input:not(:-moz-placeholder-shown), .label-floating select:not(:-moz-placeholder-shown){\n  padding-top:1.6rem;\n  padding-bottom:.25rem\n}\n\n.label-floating input:not(:-ms-input-placeholder), .label-floating select:not(:-ms-input-placeholder){\n  padding-top:1.6rem;\n  padding-bottom:.25rem\n}\n\n.label-floating input:not(:placeholder-shown),.label-floating select:not(:placeholder-shown){\n  padding-top:1.6rem;\n  padding-bottom:.25rem\n}\n\n.label-floating input:not(:-moz-placeholder-shown)~label, .label-floating select:not(:-moz-placeholder-shown)~label{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(139, 92, 246, var(--tw-text-opacity))\n}\n\n.label-floating input:not(:-moz-placeholder-shown)~label,.label-floating select:not(:-moz-placeholder-shown)~label{\n  font-size:.8rem;\n  -moz-transition:all .2s ease-in-out;\n  transition:all .2s ease-in-out\n}\n\n.label-floating input:not(:-ms-input-placeholder)~label, .label-floating select:not(:-ms-input-placeholder)~label{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(139, 92, 246, var(--tw-text-opacity))\n}\n\n.label-floating input:not(:-ms-input-placeholder)~label,.label-floating select:not(:-ms-input-placeholder)~label{\n  font-size:.8rem;\n  -ms-transition:all .2s ease-in-out;\n  transition:all .2s ease-in-out\n}\n\n.label-floating input:not(:-moz-placeholder-shown)~label, .label-floating select:not(:-moz-placeholder-shown)~label{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(139, 92, 246, var(--tw-text-opacity))\n}\n\n.label-floating input:not(:-ms-input-placeholder)~label, .label-floating select:not(:-ms-input-placeholder)~label{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(139, 92, 246, var(--tw-text-opacity))\n}\n\n.label-floating input:not(:placeholder-shown)~label, .label-floating select:not(:placeholder-shown)~label{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(139, 92, 246, var(--tw-text-opacity))\n}\n\n.label-floating input:not(:-moz-placeholder-shown)~label, .label-floating select:not(:-moz-placeholder-shown)~label{\n  font-size:.8rem;\n  -moz-transition:all .2s ease-in-out;\n  transition:all .2s ease-in-out\n}\n\n.label-floating input:not(:-ms-input-placeholder)~label, .label-floating select:not(:-ms-input-placeholder)~label{\n  font-size:.8rem;\n  -ms-transition:all .2s ease-in-out;\n  transition:all .2s ease-in-out\n}\n\n.label-floating input:not(:placeholder-shown)~label,.label-floating select:not(:placeholder-shown)~label{\n  font-size:.8rem;\n  transition:all .2s ease-in-out\n}\n\n.breadcrumbs{\n  margin-bottom:1rem\n}\n\n.breadcrumbs span{\n  margin-right:0.5rem;\n  cursor:pointer;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity));\n  text-decoration:underline\n}\n\n.breadcrumbs span.active{\n  font-weight:400;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity));\n  --tw-text-opacity:1;\n  color:rgba(167, 139, 250, var(--tw-text-opacity));\n  text-decoration:none\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},235:function(n,t,e){"use strict";e.r(t);var o=e(128),r=e(129),l=e(130),c=e(131);t.default={namespaced:!0,state:o.default,getters:r,mutations:l,actions:c}}},[[191,8,2,9]]]);