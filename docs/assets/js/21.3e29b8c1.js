(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{392:function(e,t,o){"use strict";o.r(t);var r=o(10),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h4",{attrs:{id:"content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[e._v("#")]),e._v(" Content")]),e._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#moving-blog"}},[e._v("Moving Blog?")])]),o("li",[o("a",{attrs:{href:"#vuepress-why-vuepress"}},[e._v("Vuepress. Why vuepress?")])]),o("li",[o("a",{attrs:{href:"#site-requirements"}},[e._v("Site requirements")])]),o("li",[o("a",{attrs:{href:"#references"}},[e._v("References")])])])]),o("p"),e._v(" "),o("h2",{attrs:{id:"moving-blog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#moving-blog"}},[e._v("#")]),e._v(" Moving Blog?")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("Yes. I decided to move away from blogger. No, I do not want to say that blogger is bad. Blogger platform is excellent if you want just quickly setup with chosen theme, defined layout and features and start creating posts. I have been using blogger for quite a long time. See "),o("a",{attrs:{href:"https://software-development-toolbox.blogspot.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vladislav Setchin @ blogspot"),o("OutboundLink")],1),e._v(". There are several points that made me to create new blog site and it took me some time to come to this decision:\n"),o("br")]),e._v(" "),o("h4",{attrs:{id:"_1-version-control-for-your-site"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-version-control-for-your-site"}},[e._v("#")]),e._v(" 1. Version control for your site")]),e._v(" "),o("p",[e._v("Advantages of having your posts under version control is that you get a change history. I tend to update my posts with additional or changed content, like development tools I use or extensions for editors and browsers. Some times I want to see in the history of what was changed and find information I may have removed a while ago.\n"),o("br"),e._v(" "),o("br")]),e._v(" "),o("h4",{attrs:{id:"_2-statically-generated-pages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-statically-generated-pages"}},[e._v("#")]),e._v(" 2. Statically generated pages.")]),e._v(" "),o("p",[e._v("One of main advantages of having static pages is better SEO (Search Engine Optimisation), faster speed, when there is no server-side processing pages rendered much faster.\n"),o("br"),e._v(" "),o("br")]),e._v(" "),o("h4",{attrs:{id:"_3-separation-between-development-and-production"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-separation-between-development-and-production"}},[e._v("#")]),e._v(" 3. Separation between development and production.")]),e._v(" "),o("p",[e._v("Currently site is under constant development and I am considering using two github repositories, one for development work with src files and deployment, the other repository only for hosting built static pages and hosted with github pages as a production deployment. Of course, I could get away with having one repository, the main consideration is the domain link.")]),e._v(" "),o("p",[o("em",[o("strong",[e._v("vsetchinfc.github.io")])]),e._v(" - production deployment"),o("br"),e._v(" "),o("em",[o("strong",[e._v("vsetchinfc.guthub.io/blog")])]),e._v(" - development and test")]),e._v(" "),o("p",[e._v("If I choose to use custom domain like "),o("em",[o("strong",[o("a",{attrs:{href:"http://vladsetchin.me",target:"_blank",rel:"noopener noreferrer"}},[e._v("vladsetchin.me"),o("OutboundLink")],1)])]),e._v(" then one repository will be enough. For a sake of not duplicating Internet content, which may affect site's SEO rating, option of having one repository looks better.\n"),o("br"),e._v(" "),o("br")]),e._v(" "),o("h4",{attrs:{id:"_4-flexibility-of-what-and-where-you-put-on-your-site"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-flexibility-of-what-and-where-you-put-on-your-site"}},[e._v("#")]),e._v(" 4. Flexibility of what and where you put on your site.")]),e._v(" "),o("p",[e._v("With blogger I always had a struggle to make things to look and position themself in a way I wanted. Of course, you may argue, I could go down the path of creating my own theme template for blogger. I decided to review static site generators similar to Jekyll and came across vuepress. I was using Vue JS for my projects and investing my time to learn vuepress looks more beneficial to me than going with any other platform.\n"),o("br"),e._v(" "),o("br")]),e._v(" "),o("h2",{attrs:{id:"vuepress-why-vuepress"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-why-vuepress"}},[e._v("#")]),e._v(" Vuepress. Why vuepress?")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("Here several points that made me to choose vuepress:")]),e._v(" "),o("ol",[o("li",[e._v("Uses Vue JS framework")]),e._v(" "),o("li",[e._v("Static site generator")]),e._v(" "),o("li",[e._v("Flexible and extensible using plugins")]),e._v(" "),o("li",[e._v("Easy to create your own template and make it look and work a way you like it.\n"),o("br"),e._v(" "),o("br")])]),e._v(" "),o("h2",{attrs:{id:"site-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#site-requirements"}},[e._v("#")]),e._v(" Site requirements")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("To start with vuepress using project bolerplate or handcraft the project starter by hand is very easy. I will not go in details in this post and am thinking to make it as separate  publication. In the over hand, there are plenty resources that already cover the basics. I decided to use vuepress blog theme and vuepress blog extension as a base for my blog site.")]),e._v(" "),o("p",[e._v("Below is a list of requirements the site should implement:")]),e._v(" "),o("ol",[o("li",[e._v("Responsive site layout with multiple pages and list of blog posts")]),e._v(" "),o("li",[e._v("Bootstrap framework for styling")]),e._v(" "),o("li",[e._v("Comments based on Github Issue and Preact\n"),o("br"),e._v(" "),o("br")])]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("hr"),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bootstrap"),o("OutboundLink")],1),e._v(" - CSS Framework")]),e._v(" "),o("li",[o("a",{attrs:{href:"http://paletton.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paletton"),o("OutboundLink")],1),e._v(" - The Color Scheme Designer")]),e._v(" "),o("li",[e._v("Comments based on Github Issue and Preact")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.markdownguide.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown Guide"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);