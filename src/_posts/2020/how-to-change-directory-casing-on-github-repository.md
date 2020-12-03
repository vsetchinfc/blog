---
date: "2020-08-08"
published: true
slug: how-to-change-directory-casing-on-github-repository
tags:
  - coding
  - updated
  - github
time_to_read: 1
title: How to change directory casing on github repository
description: In the time of information overload and rapid technology advancement it is really hard to follow and try out all the interesting projects, articles and samples.
---

I been working on my blog based on vuepress and noticed how important to have consistency in casing when specifying route and directory names. I have page called 'About' and in config.js file nav section of themeConfig page link specified as "/about", but folder is named as 'About' with upper case 'A'. It is still works and about page opens, but you briefly get 404 error page after which browser auto-redirects  to correct about page. To fix this I had to rename all my folders to start with lowercase letter. Here is a catch. Changing folder casing in local git repository does nothing to folders on remote github repo. I used the following steps to change folder casing on remote github repository.

1. Login to github and navigate to the folder you need to rename
2. You need to edit each file in that folder and change it's path with the folder casing needed.
3. After edit of path for file commit the changes. Do this for each file in the folder. Then

Lucky I had only one or two files in a folder. If you have lots of file consider creating a brand new github repository with correct folder casing.

<br>

#### References

---

- [Moving and Renaming Files on GitHub](https://github.blog/2013-03-15-moving-and-renaming-files-on-github/)
