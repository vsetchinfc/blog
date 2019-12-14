module.exports = {
    title: "Vladislav Setchin",
    description: "Vladislav Setchin personal site and blog",
    //theme: "@vuepress/theme-blog",
    dest: "docs",
    //base: "/blog/",
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
          { text: "Home",  link: "/" },
          { text: "Blog", link: "/articles/" },
          //{ text: "Projects", link: "/projects/" },
          { text: "About", link: "/about/" }
        ],
        footer: {
            contact: [
                {
                type: "github",
                link: "https://github.com/vuejs/vuepress",
                },
                {
                type: "twitter",
                link: "https://https://twitter.com/vladsetchin",
                }
            ],
            copyright: [
                {
                  text: `Content Copyright © 2018-${new Date().getFullYear()} Vladislav Setchin.`,
                  link: ""
                }
              ]
        }
      }
}