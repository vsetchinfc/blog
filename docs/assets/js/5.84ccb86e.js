(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{340:function(t,n,e){"use strict";var o=e(0),c=e(341);o({target:"String",proto:!0,forced:e(342)("link")},{link:function(t){return c(this,"a","href",t)}})},341:function(t,n,e){var o=e(21),c=/"/g;t.exports=function(t,n,e,r){var i=String(o(t)),a="<"+n;return""!==e&&(a+=" "+e+'="'+String(r).replace(c,"&quot;")+'"'),a+">"+i+"</"+n+">"}},342:function(t,n,e){var o=e(2);t.exports=function(t){return o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},350:function(t,n,e){},369:function(t,n,e){"use strict";var o=e(350);e.n(o).a},386:function(t,n,e){"use strict";e.r(n);e(20),e(26),e(340);var o=e(343),c={components:{GithubIcon:o.d,FacebookIcon:o.c,TwitterIcon:o.i,InstagramIcon:o.e,LinkedinIcon:o.f,RssIcon:o.h},methods:{getIconComponentName:function(t){switch(t){case"github":return"GithubIcon";case"facebook":return"FacebookIcon";case"twitter":return"TwitterIcon";case"instagram":return"InstagramIcon";case"linkedin":return"LinkedinIcon";case"feed":return"RssIcon";default:return""}}},computed:{contact:function(){var t=this;return(this.$themeConfig.footer&&this.$themeConfig.footer.contact||[]).map((function(n){var e=n.type,o=n.link;return{iconComponent:t.getIconComponentName(e),link:o}})).filter((function(t){return t.iconComponent}))}}},r=(e(369),e(10)),i=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("img",{staticClass:"border rounded rounded-circle",attrs:{src:t.$themeConfig.personalPhoto,alt:t.$themeConfig.fullName}}),t._v(" "),e("h4",{staticClass:"card-title"},[t._v(t._s(t.$themeConfig.fullName))]),t._v(" "),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("Full Stack Software Engineer")]),t._v(" "),t.contact?e("ul",{staticClass:"contact card-text"},t._l(t.contact,(function(n){return e("li",{staticClass:"contact-item"},[e("a",{attrs:{href:n.link}},[e(n.iconComponent,{tag:"component"}),t._v("\n          "+t._s(n.text)+"\n        ")],1)])})),0):t._e()])])}),[],!1,null,"7326f42c",null);n.default=i.exports}}]);