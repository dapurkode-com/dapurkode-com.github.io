(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{283:function(e,r,t){"use strict";t.r(r);t(78);var o={props:["prevPage","nextPage","pageNo","urlPrefix"],computed:{prevLink:function(){return 2===this.pageNo?this.urlPrefix:"".concat(this.urlPrefix,"/page/").concat(this.pageNo-1)}}},n=t(47),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"flex justify-center mt-4 space-x-2",attrs:{id:"prev-next"}},[e.prevPage?t("nuxt-link",{staticClass:"py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-dapurkode-logo-orange border",attrs:{to:e.prevLink}},[e._v("Sebelumnya")]):e._e(),e._v(" "),e.nextPage?t("nuxt-link",{staticClass:"py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-dapurkode-logo-orange border",attrs:{to:e.urlPrefix+"/page/"+(e.pageNo+1)}},[e._v("Selanjutnya ")]):e._e()],1)}),[],!1,null,"c1421438",null);r.default=component.exports}}]);