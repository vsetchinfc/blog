const autometa_options = {
  site: {
    name: "Vlad Setchin",
    twitter: "vladsetchin",
  },
  canonical_base: "https://vladsetchin.me",
};

module.exports = {
  title: "VLADSETCHIN.ME",
  description: "HOME - Vlad Setchin personal site and blog | VLADSETCHIN.ME",
  theme: "@vuepress/theme-blog",
  dest: "docs",
  head: [["link", { rel: "shortcut icon", href: "/favicon.ico" }]],
  markdown: {
    //lineNumbers: true,
  },
  themeConfig: {
    fullName: "Vlad Setchin",
    personalPhoto: "/images/vlad_profile2.jpg",
    nav: [
      { text: "Home", link: "/", exact: true },
      { text: "Blog", link: "/blog", exact: true },
      { text: "Projects", link: "/projects" },
      { text: "About", link: "/about", exact: true },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/vsetchinfc",
        },
        {
          type: "twitter",
          link: "https://twitter.com/vladsetchin",
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/vladsetchin",
        },
      ],
      copyright: [
        {
          text: `Copyright © ${new Date().getFullYear()} Vlad Setchin.`,
          link: "",
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/blog/",
            layout: "Blog",
            //itemLayout: 'Blog',
            pagination: {
              lengthPerPage: 20,
            },
          },
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: "tag",
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ["tag", "tags"],
            // Path of the `entry page` (or `list page`)
            path: "/tag/",
            frontmatter: { title: "Tag" },
            // Layout of the `entry page`
            layout: "Tag",
            pagination: {
              lengthPerPage: 5,
            },
          },
        ],
        sitemap: {
          hostname: "https://vladsetchin.me",
        },
      },
    ],
    [
      "social-share",
      {
        networks: ["twitter", "facebook", "reddit", "telegram"],
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-154920711-1", // UA-00000000-0
      },
    ],
    [
      "vuepress-plugin-google-adsense",
      {
        google_ad_client: "ca-pub-4860584003271351", // ca-pub-0000000000000000
        enable_page_level_ads: true,
      },
    ],
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
    [
      "disqus",
      {
        shortname: "vladsetchin-me",
      },
    ],
    [
      "vuepress-plugin-table-of-contents",
      {
        includeLevel: [2, 4],
      },
    ],
    ["autometa", autometa_options],
  ],
};
