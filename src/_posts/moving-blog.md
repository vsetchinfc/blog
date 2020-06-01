---
date: '2019-12-18'
published: false
slug: moving-blog
tags:
- vuepress
- blog
- new
time_to_read: 2
title: Moving Blog? Why vuepress?
description: Why I decided to create my own blog. No, not completely from scratch...
---

## Moving Blog?

Yes. I decided to move away from blogger. No, I do not want to say that blogger is bad. Blogger platform is excellent if you want just quickly setup with chosen theme, defined layout and features and start creating posts. I have been using blogger for quite a long time. See [Vladislav Setchin @ blogspot](https://software-development-toolbox.blogspot.com/). There are several points that made me to create new blog site and it took me some time to come to this decision:

#### 1. Version control for your site

Advantages of having your posts under version control is that you get a change history. I tend to update my posts with additional or changed content, like development tools I use or extensions for editors and browsers. Some times I want to see in the history of what was changed and find information I may have removed a while ago.

#### 2. Statically generated pages.

One of main advantages of having static pages is better SEO (Search Engine Optimisation), faster speed, when there is no server-side processing pages rendered much faster.

#### 3. Separation between development and production.

Currently site is under constant development and I am considering using two github repositories, one for development work with src files and deployment, the other repository only for hosting built static pages and hosted with github pages as a production deployment. Of course, I could get away with having one repository, the main consideration is the domain link. 

***vsetchinfc.github.io*** - production deployment   
***vsetchinfc.guthub.io/blog*** - development and test 

If I choose to use custom domain like ***[vladsetchin.me](http://vladsetchin.me)*** then one repository will be enough. For a sake of not duplicating Internet content, which may affect site's SEO rating, option of having one repository looks better.

#### 4. Flexibility of what and where you put on your site.

With blogger I always had a struggle to make things to look and position themself in a way I wanted. Of course, you may argue, I could go down the path of creating my own theme template for blogger. I decided to review static site generators similar to Jekyll and came across vuepress. I was using Vue JS for my projects and investing my time to learn vuepress looks more beneficial to me than going with any other platform.

## Vuepress. Why vuepress?

Here several points that made me to choose vuepress.

1. Uses Vue JS framework
2. Static site generator
3. Flexible and extensible using plugins
4. Easy to create your own template and make it look and work a way you like it.

## Site requirements

To start with vuepress using project bolerplate or handcraft the project starter by hand is very easy. I will not go in details in this post and am thinking to make it as separate  publication. In the over hand, there are plenty resources that already cover the basics. I decided to use vuepress blog theme and vuepress blog extension as a base for my blog site. 

Below is a list of requirements the site should implement:

1. Responsive site layout with multiple pages and list of blog posts
2. Bootstrap framework for styling
3. Implement comments using vuepress-plugin-comment comment plugin in vuepress, such as Gitalk based on Github Issue and Preact

## References

- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [Paletton](http://paletton.com) - The Color Scheme Designer
- [GITALK](https://gitalk.github.io/) - A modern comment component based on Github Issue and Preact
- [vuepress-plugin-comment](https://github.com/dongyuanxin/vuepress-plugin-comment) Comment plugin in vuepress, such as Gitalk, Valine...

