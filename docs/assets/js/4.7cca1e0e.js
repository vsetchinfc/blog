(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{315:function(t,a,e){},323:function(t,a,e){"use strict";var s=e(315);e.n(s).a},331:function(t,a,e){},332:function(t,a,e){"use strict";var s=e(319),i={components:{NavigationIcon:s.g,ClockIcon:s.b,CalendarIcon:s.a},props:["date","timeToRead","location","tags"]},n=(e(323),e(12)),o=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-data"},[e("div",{staticClass:"badge"},[e("CalendarIcon"),t._v(" "+t._s(t.date))],1),t._v(" "),t.timeToRead?e("div",[e("ClockIcon"),t._v(" "+t._s(t.timeToRead)+" min read")],1):t._e(),t._v(" "),t.location?e("div",[e("NavigationIcon"),t._v(" "+t._s(t.location))],1):t._e(),t._v(" "),t.tags?e("div",{staticClass:"display-flex"},t._l(t.tags,(function(a,s){return e("router-link",{key:s,staticClass:"badge badge-pill badge-primary",attrs:{to:"/tag/"+a}},[t._v("#"+t._s(a))])})),1):t._e()])}),[],!1,null,"665aa06b",null);a.a=o.exports},351:function(t,a,e){"use strict";var s=e(331);e.n(s).a},368:function(t,a,e){"use strict";e.r(a);var s={components:{PostData:e(332).a},props:["page"]},i=(e(351),e(12)),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-9"},[e("h4",[e("a",{attrs:{href:t.page.path}},[t._v(t._s(t.page.title))])]),t._v(" "),e("PostData",{attrs:{date:t.page.frontmatter.date,timeToRead:t.page.frontmatter.time_to_read,location:t.page.frontmatter.location,tags:t.page.frontmatter.tags.slice(0,3)}}),t._v(" "),e("h6",{staticClass:"card-subtitle m-3 text-muted pt-3 pb-3"},[t._v("\n            "+t._s(t.page.frontmatter.description)+"\n            "),e("a",{staticClass:"badge badge-pill badge-light",attrs:{href:t.page.path}},[t._v("Continue reading...")])])],1),t._v(" "),e("div",{staticClass:"col-lg-3"},[t.page.frontmatter.image?e("img",{staticClass:"w-100",attrs:{src:t.page.frontmatter.image,alt:"Blog Image"}}):t._e()])])])])])}),[],!1,null,"6a02e475",null);a.default=n.exports}}]);