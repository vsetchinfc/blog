(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{361:function(t,a,s){},368:function(t,a,s){"use strict";var i=s(361);s.n(i).a},377:function(t,a,s){"use strict";var i=s(365),e={components:{NavigationIcon:i.g,ClockIcon:i.b,CalendarIcon:i.a},props:["date","timeToRead","location","tags"]},n=(s(368),s(13)),o=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"post-data"},[s("div",{staticClass:"badge"},[s("CalendarIcon"),t._v(" "+t._s(t.date))],1),t._v(" "),t.timeToRead?s("div",[s("ClockIcon"),t._v(" "+t._s(t.timeToRead)+" min read")],1):t._e(),t._v(" "),t.location?s("div",[s("NavigationIcon"),t._v(" "+t._s(t.location))],1):t._e(),t._v(" "),t.tags?s("div",{staticClass:"display-flex"},t._l(t.tags,(function(a,i){return s("router-link",{key:i,staticClass:"badge badge-pill badge-primary",attrs:{to:"/tag/"+a}},[t._v("#"+t._s(a))])})),1):t._e()])}),[],!1,null,"665aa06b",null);a.a=o.exports},404:function(t,a,s){"use strict";s.r(a);var i={components:{PostData:s(377).a},computed:{pages:function(){return this.$pagination.pages}}},e=s(13),n=Object(e.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("Head",{attrs:{title:t.$frontmatter.title}})],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-9 col-sm-12"},[s("content",[t.$pagination?s("div",t._l(t.pages,(function(t){return s("div",{key:t.key,staticClass:"ui-post"},[s("BlogPostCard",{attrs:{page:t}})],1)})),0):s("div",[s("Content",{staticClass:"mt-4 mb-4"}),t._v(" "),s("Vssue",{attrs:{title:t.$title}})],1)])]),t._v(" "),s("div",{staticClass:"col-lg-3 d-none d-lg-block"},[s("RightSidebar")],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("Footer")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);