module.exports = {
    title: 'Vladislav Setchin',
    dest: 'docs',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'About',
            link: '/about/'
          },
          {
            text: 'CV',
            link: '/cv/'
          },
          {
            text: 'Blog',
            link: '/articles/'
          }
        ],
        footer: {
            contact: [
                {
                type: 'github',
                link: 'https://github.com/vuejs/vuepress',
                },
                {
                type: 'twitter',
                link: 'https://github.com/vuejs/vuepress',
                }
            ],
        }
      }
}