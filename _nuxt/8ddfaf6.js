(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{304:function(e,t,r){"use strict";r.r(t);r(49),r(21),r(48),r(65),r(34),r(66);var o=r(36);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={layout:"page",name:"App",components:{},data:function(){return{}},computed:{loginStatus:function(){return this.$store.state.app.loginStatus},server:function(){return this.$store.state.app.server},seekForwards:{get:function(){return this.$store.state.app.groupDetails.seekForwards},set:function(e){var t=l(l({},this.$store.state.app.groupDetails),{},{seekForwards:e});this.$store.commit("app/groupDetails",t)}},seekBackwards:{get:function(){return this.$store.state.app.groupDetails.seekBackwards},set:function(e){var t=l(l({},this.$store.state.app.groupDetails),{},{seekBackwards:e});this.$store.commit("app/groupDetails",t)}},playback_speed:{get:function(){return this.$store.state.app.groupDetails.playback_speed},set:function(e){var t=l(l({},this.$store.state.app.groupDetails),{},{playback_speed:e});this.$store.commit("app/groupDetails",t)}}},watch:{},mounted:function(){this.$store.dispatch("app/initialiseApp"),this.$store.commit("app/activepage","settings")},methods:{}},d=r(9),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-3 px-6 lg:px-12 w-screen lg:w-full content-area overflow-auto lg:border-l border-gray-100"},[r("h2",{staticClass:"my-6 text-xl font-semibold text-gray-600"},[e._v("Player Settings")]),e._v(" "),r("div",{staticClass:"bg-gray-50 rounded-lg border border-gray-300 text-sm"},[r("div",{staticClass:"p-4 flex flex-col lg:flex-row justify-between items-center border-b"},[e._m(0),e._v(" "),r("div",{staticClass:"w-full max-w-xs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.seekForwards,expression:"seekForwards"}],staticClass:"w-full p-3 bg-gray-100 border border-gray-300 shadow-inner leading-normal rounded-xl",domProps:{value:e.seekForwards},on:{input:function(t){t.target.composing||(e.seekForwards=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"p-4 flex flex-col lg:flex-row justify-between items-center border-b"},[e._m(1),e._v(" "),r("div",{staticClass:"w-full max-w-xs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.seekBackwards,expression:"seekBackwards"}],staticClass:"w-full p-3 bg-gray-100 border border-gray-300 shadow-inner leading-normal rounded-xl",domProps:{value:e.seekBackwards},on:{input:function(t){t.target.composing||(e.seekBackwards=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"p-4 flex flex-col lg:flex-row justify-between items-center border-b"},[e._m(2),e._v(" "),r("div",{staticClass:"w-full max-w-xs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.playback_speed,expression:"playback_speed"}],staticClass:"w-full p-3 bg-gray-100 border border-gray-300 shadow-inner leading-normal rounded-xl",domProps:{value:e.playback_speed},on:{input:function(t){t.target.composing||(e.playback_speed=t.target.value)}}})])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col mb-4 lg:mb-0"},[r("span",{staticClass:"font-semibold mb-1"},[e._v("Skip forwards amount (seconds)")]),e._v(" "),r("span",{},[e._v("This controls how many seconds to skip the book forward when clicking on the button in the player.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col mb-4 lg:mb-0"},[r("span",{staticClass:"font-semibold mb-1"},[e._v("Skip backwards amount (seconds)")]),e._v(" "),r("span",{},[e._v("This controls how many seconds to skip the book forward when clicking on the button in the player.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col mb-4 lg:mb-0"},[r("span",{staticClass:"font-semibold mb-1"},[e._v("Playback speed")]),e._v(" "),r("span",{},[e._v("Playback speed allows you to increase (or decrease) the amount of time it takes to listen to a book, without changing the pitch.")])])}],!1,null,null,null);t.default=component.exports}}]);