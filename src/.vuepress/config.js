module.exports = {
  title: "Vlad Setchin",
  description: "Vlad Setchin personal site and blog",
  theme: "@vuepress/theme-blog",
  dest: "docs",
  markdown: {
      lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: "Home",  link: "/", exact: true },
      { text: "Blog", link: "/posts/", exact: true },
      //{ text: "Projects", link: "/projects/" },
      { text: "About", link: "/about/", exact: true }
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
          text: `Content Copyright © 2018-${new Date().getFullYear()} Vlad Setchin.`,
          link: ""
        }
      ]
    }
  },
  plugins: [
    [ '@vuepress/blog', {
        directories: [ {
            id: 'post',
            dirname: '_posts',
            path: '/'
        }]
    }],
    [ 'social-share', {
      networks: ['twitter', 'facebook', 'reddit', 'telegram'] 
    }],
    [ '@vuepress/google-analytics', {
        'ga': '' // UA-00000000-0
    }],
    [ 'vuepress-plugin-google-adsense', {
        'google_ad_client': '', // ca-pub-0000000000000000
        'enable_page_level_ads': true
    }]
  ]
}