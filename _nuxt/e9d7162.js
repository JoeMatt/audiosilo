(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{297:function(e,t,r){var content=r(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("51cd7b17",content,!0,{sourceMap:!1})},300:function(e,t,r){"use strict";r(297)},301:function(e,t,r){var n=r(78)((function(i){return i[1]}));n.push([e.i,"/*purgecss start ignore*/\n.description-text p{\n  margin:15px 0\n}\n.readmore{\n  height:95px;\n  overflow:hidden\n}\n.readmore.active{\n  height:auto;\n  overflow:visible\n}\n\n/*purgecss end ignore*/",""]),n.locals={},e.exports=n},311:function(e,t,r){"use strict";r.r(t);var n=r(7),o=(r(44),r(22),r(30),r(12),r(23),r(17),r(53),r(137)),c={name:"BookDetails",props:["details","name","fake","server"],data:function(){return{readmore:!1,percent:30,remaining:"13h27m remaining",cached:!1,downloading:!1}},computed:{moretext:function(){return this.readmore?"Less..":"More.."},image:function(){return this.$store.state.app.book.cover},description:function(){return this.$store.state.app.book.description},transcode:function(){return this.$store.state.app.transcode},hash:function(){return Object(o.sha256)(this.$route.fullPath)}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,path,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("app/rightbar",!0),t.next=3,caches.keys();case 3:r=t.sent,console.log("keys"),console.log(r),path=e.details&&e.details.description?e.details.description.path:null,n=e.details&&e.details.cover?e.server+"cover/"+e.details.cover.path:null,e.$store.dispatch("app/getBookDetails",{description:path,cover:n});case 9:case"end":return t.stop()}}),t)})))()},methods:{listen:function(){this.$store.commit("app/player",!0)},download:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("download"),e.downloading=!0,t.next=4,navigator.storage.persist();case 4:return r=t.sent,console.log("Persisted storage granted: ".concat(r)),n="audioserv-".concat(e.hash),t.next=9,caches.delete(n);case 9:return t.next=11,caches.open(n);case 11:return o=t.sent,t.next=14,Promise.all(e.details.files.map((function(t){return o.add(e.server+"download/"+t.path)})));case 14:e.downloading=!1,e.cached=!0,console.log("files cached "+n);case 17:case"end":return t.stop()}}),t)})))()}}},l=(r(300),r(52)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col overflow-auto pb-8"},[r("div",{staticClass:"text p-8 pb-5 flex justify-center"},[r("img",{staticClass:"block shadow rounded-md",attrs:{src:e.image}})]),e._v(" "),r("div",{staticClass:"text-xl flex justify-center px-8 font-bold"},[e._v(e._s(e.name))]),e._v(" "),r("button",{staticClass:"text-white bg-purple-400 font-normal rounded-lg mx-8 my-4 p-3",on:{click:e.listen}},[r("i",{staticClass:"fa-light fa-circle-play"}),e._v(" Listen")]),e._v(" "),e.description?[r("div",{staticClass:"text px-8 description-text text-sm readmore",class:{active:e.readmore},domProps:{innerHTML:e._s(e.description)}}),e._v(" "),r("div",{staticClass:"px-8 text-purple-400 font-normal text-sm cursor-pointer",on:{click:function(t){e.readmore=!e.readmore}}},[e._v(e._s(e.moretext))])]:e._e(),e._v(" "),r("div",{staticClass:"px-8 mt-3 font-normal text-sm"},[e._v("Progress")]),e._v(" "),r("div",{staticClass:"flex px-8 pt-1 items-center"},[r("div",{staticClass:"relative flex-grow mr-2"},[r("div",{staticClass:"overflow-hidden h-2 text-xs flex rounded bg-purple-200"},[r("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-400",style:{width:e.percent+"%"}})])]),e._v(" "),r("div",{staticClass:"text-sm"},[e._v(e._s(e.percent)+"%")])]),e._v(" "),r("div",{staticClass:"px-8 text-xs"},[e._v(e._s(e.remaining))]),e._v(" "),r("div",{staticClass:"px-8 pt-8"},[r("div",{staticClass:"cursor-pointer relative"},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.cached&&!e.downloading,expression:"!cached && !downloading"}],staticClass:"fa-layers fa-fw fa-2x",on:{click:e.download}},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-light fa-arrow-down-to-line",attrs:{"data-fa-transform":"shrink-8"}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.downloading,expression:"downloading"}],staticClass:"fa-layers fa-fw fa-2x"},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-thin fa-down-to-line fa-beat",attrs:{"data-fa-transform":"shrink-8"}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.cached,expression:"cached"}],staticClass:"fa-layers fa-fw fa-2x"},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-thin fa-trash-can",attrs:{"data-fa-transform":"shrink-8"}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.downloading,expression:"downloading"}],staticClass:"fa-layers fa-fw fa-2x absolute inset-0 opacity-70"},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-light fa-spinner-third fa-spin",attrs:{"data-fa-transform":"shrink-2"}})])])])],2)}),[],!1,null,null,null);t.default=component.exports}}]);