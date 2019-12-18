---
date: '2019-12-18'
published: false
slug: moving-blog
tags:
- vuepress
- blog
time_to_read: 2
title: Moving Blog? Why vuepress?
---

Moving Blog?
============

Yes. I decided to move away from blogger. No, I do not want to say that blogger is bad. Blogger platform is excellent if you want just quickly setup with chosen theme, defined layout and features and start creating posts and I have been using blogger for quite a long time. See link. There are several points that made me to create new blog site and it took me some time to come to decision:

1. Version control for your site

Advantages of having your posts under version control is that you get a change history. I tend to update my posts with editional or changed content, like development tools I use or extensions for editors or browser. Some times I want to see in the history what was changed and find info I may have removed a while ago.

2. Statically generated pages.

One of main advantages of having static pages is better SEO (Search Enginge Optimisation). ....the other....

3. Separation between development and production.

Currently site is under development and I am considering using two github repositories, one for development work with src files and deployment, the other repository only for hosting built static pages and hosted with github pages as a production deployment. if course, I could get away with having one repository, the main cosideration is the domain link. 

vsetchinfc.github.io - production deployment
vsetchinfc.guthub.io/blog - development and test 

If I choose to use custom domain like vladsetchin.info than one repository will be enough. For a sake of not duplicating internet content, which may affect site's SEO rating, this option looks better.

4. Flexibility of what and where you put on your site.

With blogger I always had a struggle to make things to look and position themself a way I wanted. Of course, you may argue, I could go down the path of creating my own theme template for blogger. Setting up a new site...

5. Vuepress. Why vuepress?