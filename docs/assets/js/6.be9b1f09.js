(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{340:function(t,s,i){"use strict";var a=i(0),e=i(341);a({target:"String",proto:!0,forced:i(342)("link")},{link:function(t){return e(this,"a","href",t)}})},341:function(t,s,i){var a=i(21),e=/"/g;t.exports=function(t,s,i,n){var r=String(a(t)),c="<"+s;return""!==i&&(c+=" "+i+'="'+String(n).replace(e,"&quot;")+'"'),c+">"+r+"</"+s+">"}},342:function(t,s,i){var a=i(2);t.exports=function(t){return a((function(){var s=""[t]('"');return s!==s.toLowerCase()||s.split('"').length>3}))}},344:function(t,s,i){},356:function(t,s,i){"use strict";var a=i(344);i.n(a).a},376:function(t,s,i){"use strict";i.r(s);i(20),i(26),i(340);var a=i(343),e={components:{GithubIcon:a.d,FacebookIcon:a.c,TwitterIcon:a.i,InstagramIcon:a.e,LinkedinIcon:a.f,RssIcon:a.h},methods:{getIconComponentName:function(t){switch(t){case"github":return"GithubIcon";case"facebook":return"FacebookIcon";case"twitter":return"TwitterIcon";case"instagram":return"InstagramIcon";case"linkedin":return"LinkedinIcon";case"feed":return"RssIcon";default:return""}}},computed:{contact:function(){var t=this;return(this.$themeConfig.footer&&this.$themeConfig.footer.contact||[]).map((function(s){var i=s.type,a=s.link;return{iconComponent:t.getIconComponentName(i),link:a}})).filter((function(t){return t.iconComponent}))}}},n=(i(356),i(10)),r=Object(n.a)(e,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("Head",{attrs:{title:"ABOUT ME"}})],1)]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("content",[i("div",{staticClass:"card-deck"},[t._m(0),t._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("img",{staticClass:"border rounded rounded-circle d-sm-none d-lg-block mx-auto",attrs:{src:t.$themeConfig.personalPhoto,alt:t.$themeConfig.fullName}}),t._v(" "),i("h4",{staticClass:"card-title"},[t._v(t._s(t.$themeConfig.fullName))]),t._v(" "),i("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("Full Stack Software Engineer")]),t._v(" "),t.contact?i("ul",{staticClass:"contact card-text"},t._l(t.contact,(function(s){return i("li",{staticClass:"contact-item"},[i("a",{attrs:{href:s.link}},[i(s.iconComponent,{tag:"component"}),t._v("\n                    "+t._s(s.text)+"\n                  ")],1)])})),0):t._e()])]),t._v(" "),t._m(1)])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("Footer")],1)])])}),[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[t._v("\n              Front End\n            ")]),t._v(" "),i("div",{staticClass:"card-body"},[i("ul",{staticClass:"list-group list-group-flush"},[i("li",{staticClass:"list-group-item"},[t._v("Angular")]),t._v(" "),i("li",{staticClass:"list-group-item"},[t._v("Vue JS")]),t._v(" "),i("li",{staticClass:"list-group-item"},[t._v("NgRx")]),t._v(" "),i("li",{staticClass:"list-group-item"},[t._v("Bootstrap")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[t._v("\n              Back End\n            ")]),t._v(" "),i("div",{staticClass:"card-body"},[i("ul",{staticClass:"list-group list-group-flush"},[i("li",{staticClass:"list-group-item"},[t._v("Asp.Net WebApi")]),t._v(" "),i("li",{staticClass:"list-group-item"},[t._v("Asp.Net WebApi Core")]),t._v(" "),i("li",{staticClass:"list-group-item"},[t._v("CQRS Pattern")]),t._v(" "),i("li",{staticClass:"list-group-item"},[t._v("Dupper")]),t._v(" "),i("li",{staticClass:"list-group-item"},[t._v("Entity Framework")]),t._v(" "),i("li",{staticClass:"list-group-item"},[t._v("Entity Framework Core")])])])])}],!1,null,"3ae72302",null);s.default=r.exports}}]);