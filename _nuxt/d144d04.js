(window.webpackJsonp=window.webpackJsonp||[]).push([[17,6,8,10,13],{259:function(t,e,r){t.exports=r.p+"img/logo.ecb1e5c.png"},260:function(t,e,r){"use strict";r.r(e);var n={name:"Footer",props:{articles:{type:Array,required:!0}},data:function(){return{currentYear:(new Date).getFullYear()}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"block"},[n("div",{staticClass:"w-auto bg-gray-100 text-gray-700 min-h-full"},[n("div",{staticClass:"py-16 max-w-7xl mx-auto px-8"},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-5"},[n("div",{staticClass:"md:mx-8"},[n("img",{staticClass:"h-14 w-auto",attrs:{alt:"Workflow",src:r(259)}}),t._v(" "),t._m(0),t._v(" "),n("span",{staticClass:"block my-2"},[n("font-awesome-icon",{staticClass:"inline w-5 h-5 mr-2",attrs:{icon:"map-marker-alt"}}),t._v("Jalan Toya Anakan III No. 45, LC 8 "),n("br"),t._v("Singaraja - Bali")],1),t._v(" "),n("span",{staticClass:"block my-2"},[n("font-awesome-icon",{staticClass:"inline w-5 h-5 mr-2",attrs:{icon:"envelope"}}),n("a",{attrs:{href:"mailto:dapurkode.idn@gmail.com"}},[t._v("dapurkode.idn@gmail.com")])],1)]),t._v(" "),n("div",{staticClass:"md:mx-8"},[n("h3",{staticClass:"font-bold text-xl my-2 uppercase"},[t._v("Artikel")]),t._v(" "),n("div",{staticClass:"rounded bg-gray-50 shadow w-full"},[n("ul",{staticClass:"divide-y-2 divide-gray-200 list-disc  list-inside"},t._l(t.articles,(function(article,e){return t.articles?n("li",{key:e,staticClass:"p-2 hover:bg-dapurkode-orange-500 hover:text-white duration-500"},[n("nuxt-link",{attrs:{to:"/articles/"+article.slug}},[t._v(t._s(article.title))])],1):t._e()})),0)])])])])])]),t._v(" "),n("div",{staticClass:"w-auto bg-white text-gray-500 min-h-full"},[n("div",{staticClass:"pt-6 pb-6 max-w-7xl mx-auto px-8"},[n("div",{staticClass:"flex flex-col md:flex-row md:justify-center md:justify-between gap-2"},[n("div",{staticClass:"text-center md:text-left md:mx-8"},[n("a",{staticClass:"hover:text-dapurkode-orange-500 duration-500",attrs:{title:"Facebook Dapur Kode",href:"https://www.facebook.com/dapurkode.idn"}},[n("font-awesome-icon",{staticClass:"w-5 h-5 inline mr-2",attrs:{icon:["fab","facebook-square"]}})],1),t._v(" "),n("a",{staticClass:"hover:text-dapurkode-orange-500 duration-500",attrs:{title:"Instagram Dapur Kode",href:"https://instagram.com/dapurkode.idn"}},[n("font-awesome-icon",{staticClass:"w-5 h-5 inline mr-2",attrs:{icon:["fab","instagram"]}})],1)]),t._v(" "),n("div",{staticClass:"text-center md:text-left md:mx-8"},[n("p",{staticClass:" text-sm"},[t._v("\n            Copyright © "+t._s(t.currentYear)+" DapurKode.com\n          ")])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-4"},[r("p",{staticClass:"text-justify"},[t._v("\n              Dapurkode adalah sebuah agensi freelancer dari Bali, yang bergerak di bidang pengembangan perangkat\n              lunak. Terdiri dari para pengembang profesional, kami siap memberikan solusi digital terbaik untuk Anda.\n            ")])])}],!1,null,"6add3fb6",null);e.default=component.exports;installComponents(component,{Footer:r(260).default})},261:function(t,e,r){"use strict";r(29),r(48);var n="https://dapurkode.com",title="Dapur Kode",o="Dapurkode adalah sebuah agensi freelancer dari Bali, yang bergerak di bidang pengembangan perangkat lunak. Terdiri dari para pengembang profesional, kami siap memberikan solusi digital terbaik untuk Anda.",l="/site-images/dapurkode-1.jpg";e.a=function(meta){return[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"format-detection",content:"telephone=no"},{hid:"description",name:"description",content:meta&&meta.description||o},{hid:"og:type",property:"og:type",content:meta&&meta.type||"website"},{hid:"og:url",property:"og:url",content:meta&&meta.url||n},{hid:"og:title",property:"og:title",content:meta&&meta.title||title},{hid:"og:description",property:"og:description",content:meta&&meta.description||o},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||l},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||n},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||title},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||o},{hid:"twitter:image",name:"twitter:image",content:meta&&meta.mainImage||l}]}},263:function(t,e,r){"use strict";r.r(e);var n={name:"Header",data:function(){return{isHide:!0,navLinks:[{text:"Home",goTo:"/"},{text:"Portofolio",goTo:"/portfolios"},{text:"Blog",goTo:"/articles"}]}},methods:{tapNav:function(){this.isHide=!this.isHide}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("client-only",[n("nav",{ref:"navBar",staticClass:"fixed inset-x-0 top-0 z-10 justify-between w-full duration-500 px-3 bg-white shadow-md"},[n("div",{staticClass:"max-w-7xl mx-auto px-4"},[n("div",{staticClass:"flex items-center justify-between h-16 md:h-20"},[n("NuxtLink",{attrs:{to:"/"}},[n("a",{staticClass:"flex-shrink-0"},[n("img",{staticClass:"h-10 md:h-14 w-auto",attrs:{alt:"Workflow",src:r(259)}})])]),t._v(" "),n("div",{staticClass:"hidden md:block"},[n("div",{staticClass:"ml-10 flex items-baseline space-x-10"},[t._l(t.navLinks,(function(e,r){return n("NuxtLink",{key:r,staticClass:" hover:text-dapurkode-logo-orange text-gray-900 text-lg font-bold duration-500 cursor-pointer border-b-2 border-double border-transparent hover:border-current",attrs:{to:e.goTo}},[t._v("\n                "+t._s(e.text)+"\n              ")])})),t._v(" "),n("NuxtLink",{staticClass:"bg-dapurkode-logo-red text-white px-7 py-3 font-bold hover:shadow-lg",attrs:{to:"/kontak-kami"}},[t._v("\n                Hubungi Kami\n              ")])],2)]),t._v(" "),n("div",{staticClass:"flex md:hidden flex-1 justify-end",on:{click:t.tapNav}},[t.isHide?n("font-awesome-icon",{staticClass:"w-8 h-8",attrs:{icon:"bars"}}):t._e(),t._v(" "),t.isHide?t._e():n("font-awesome-icon",{staticClass:"w-8 h-8",attrs:{icon:"times"}})],1)],1)]),t._v(" "),n("div",{staticClass:"md:hidden",class:{hidden:t.isHide}},[n("div",{staticClass:"px-2 pt-2 pb-3 divide-y divide-gray-500 sm:px-3 border-t border-black",on:{click:function(e){t.isHide=!0}}},[t._l(t.navLinks,(function(e,r){return n("NuxtLink",{key:r,staticClass:"text-gray-900 block px-3 py-2 text-base font-medium hover:text-dapurkode-logo-orange",attrs:{to:e.goTo}},[n("font-awesome-icon",{staticClass:"inline mr-2",attrs:{icon:"angle-right"}}),t._v("\n            "+t._s(e.text)+"\n          ")],1)})),t._v(" "),n("NuxtLink",{staticClass:"text-gray-900 block px-3 py-2 text-base font-medium hover:text-dapurkode-logo-orange",attrs:{to:"/kontak-kami"}},[n("font-awesome-icon",{staticClass:"inline mr-2",attrs:{icon:"angle-right"}}),t._v("\n            Hubungi Kami\n          ")],1)],2)])])])],1)}),[],!1,null,"1ee2a1d8",null);e.default=component.exports},293:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full flex pt-6 gap-10"},[t.prev?t._e():r("div",{staticClass:"w-1/2 hidden md:inline"}),t._v(" "),t.prev?r("NuxtLink",{staticClass:"block w-full md:w-1/2 bg-white shadow hover:shadow-md text-left p-6 rounded",attrs:{to:t.prev.slug}},[r("p",{staticClass:"text-lg text-dapurkode-logo-orange font-bold flex items-center"},[r("font-awesome-icon",{staticClass:"w-5 h-5 inline mr-2",attrs:{icon:"arrow-left"}}),t._v(" Sebelumnya\n    ")],1),t._v(" "),r("p",{staticClass:"pt-2"},[t._v(t._s(t.prev.title))])]):t._e(),t._v(" "),t.next?r("NuxtLink",{staticClass:"block w-full md:w-1/2 bg-white shadow hover:shadow-md text-right p-6 rounded",attrs:{to:t.next.slug}},[r("p",{staticClass:"text-lg text-dapurkode-logo-orange font-bold flex items-center justify-end"},[t._v("Selanjutnya "),r("font-awesome-icon",{staticClass:"w-5 h-5 inline ml-2",attrs:{icon:"arrow-right"}})],1),t._v(" "),r("p",{staticClass:"pt-2"},[t._v(t._s(t.next.title))])]):t._e(),t._v(" "),t.prev?t._e():r("div",{staticClass:"w-1/2 hidden md:inline"})],1)}),[],!1,null,"4c0a45e7",null);e.default=component.exports},294:function(t,e,r){"use strict";r.r(e);var n={props:{author:{type:Object,default:function(){return null}}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white rounded-md mt-10 mb-10 p-6"},[r("div",{staticClass:"w-full md:w-1/5 flex justify-center md:justify-start pb-4"},[r("img",{staticClass:"rounded-full shadow h-32 w-32",attrs:{src:t.author.image}})]),t._v(" "),r("div",{staticClass:"flex-1 flex flex-col justify-center md:justify-start"},[r("p",{staticClass:"text-lg text-dapurkode-logo-orange uppercase mb-3"},[t._v("Penulis Artikel")]),t._v(" "),r("p",{staticClass:"font-semibold text-2xl"},[t._v(t._s(t.author.name))]),t._v(" "),r("p",{staticClass:"pt-2"},[t._v(t._s(t.author.bio))]),t._v(" "),r("div",{staticClass:"flex items-center justify-center md:justify-start text-2xl no-underline text-dapurkode-orange-700 pt-4 gap-x-4"},[t.author.facebook?r("a",{attrs:{href:t.author.facebook}},[r("font-awesome-icon",{staticClass:"w-5 h-5 inline mr-2",attrs:{icon:["fab","facebook"]}})],1):t._e(),t._v(" "),t.author.instagram?r("a",{attrs:{href:t.author.instagram}},[r("font-awesome-icon",{staticClass:"w-5 h-5 inline mr-2",attrs:{icon:["fab","instagram"]}})],1):t._e(),t._v(" "),t.author.twitter?r("a",{attrs:{href:t.author.twitter}},[r("font-awesome-icon",{staticClass:"w-5 h-5 inline mr-2",attrs:{icon:["fab","twitter"]}})],1):t._e()])])])}),[],!1,null,"30b053e8",null);e.default=component.exports},318:function(t,e,r){"use strict";r.r(e);var n=r(79),o=r(22),l=r(8),c=(r(78),r(29),r(48),r(42),r(261)),d={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,article,l,c,d,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.next=6,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(n.slug).fetch();case 6:return l=e.sent,c=Object(o.a)(l,2),d=c[0],m=c[1],e.next=12,r("articles").only(["title","slug"]).sortBy("createdAt","desc").limit(4).fetch();case 12:return f=e.sent,e.abrupt("return",{article:article,prev:d,next:m,articles:f});case 14:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("id",{year:"numeric",month:"long",day:"numeric"})}},computed:{meta:function(){var t={type:"article",title:"".concat(this.article.title," | Dapur Kode"),url:"".concat(this.$config.baseUrl,"/articles/").concat(this.article.slug),description:this.article.description,mainImage:this.article.image};return Object(c.a)(t)}},head:function(){return{title:" ".concat(this.article.title," | Dapur Kode"),meta:Object(n.a)(this.meta),link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{hid:"canonical",rel:"canonical",href:"".concat(this.$config.baseUrl,"/articles/").concat(this.article.slug)}]}}},m=r(47),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("HeaderV2"),t._v(" "),r("div",{staticClass:"h-full w-auto bg-gray-200"},[r("div",{staticClass:"container w-full md:w-2/3 mx-auto flex flex-wrap pt-28 md:pt-32 pb-16 px-2 md:px-0"},[t.article?r("section",{staticClass:"w-full flex flex-col items-center px-3"},[r("article",{staticClass:"w-full flex flex-col shadow rounded bg-white"},[r("img",{staticClass:"w-full",attrs:{src:t.article.image,height:"509"}}),t._v(" "),r("div",{staticClass:"bg-white flex flex-col justify-start p-5 md:p-10"},[t.article.tags?r("ul",{staticClass:"flex space-x-3 text-dapurkode-logo-red text-sm font-bold uppercase pb-4"},t._l(t.article.tags,(function(e){return r("li",{key:e},[t._v("\n                "+t._s(e)+"\n              ")])})),0):t._e(),t._v(" "),r("h1",{staticClass:"text-3xl md:text-4xl font-bold font-black font-Didact py-5"},[t._v(t._s(t.article.title))]),t._v(" "),r("p",{staticClass:"text-sm pb-8"},[t._v("\n              Oleh "),r("span",{staticClass:"font-semibold hover:text-gray-800"},[t._v(t._s(t.article.author.name))]),t._v(",\n              Di publikasi pada "+t._s(t.formatDate(t.article.createdAt))+" ")]),t._v(" "),r("div",{staticClass:"relative overflow-hidden mb-8"},[r("div",{staticClass:"rounded bg-gray-200 px-3 md:px-10 py-5 w-max"},[r("span",{staticClass:"font-bold font-black uppercase"},[t._v("Daftar Isi")]),t._v(" "),r("ul",{staticClass:"list-disc list-inside"},t._l(t.article.toc,(function(link){return r("li",{key:link.id},[r("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])]),t._v(" "),r("nuxt-content",{staticClass:"prose max-w-none text-justify",attrs:{document:t.article}})],1)]),t._v(" "),r("PartPrevNext2",{attrs:{prev:t.prev,next:t.next}}),t._v(" "),r("PartAuthor",{attrs:{author:t.article.author}})],1):t._e()])]),t._v(" "),r("Footer",{attrs:{articles:t.articles}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderV2:r(263).default,PartPrevNext2:r(293).default,PartAuthor:r(294).default,Footer:r(260).default})}}]);