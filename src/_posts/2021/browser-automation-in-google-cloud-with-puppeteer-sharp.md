---
date: "2021-05-25"
published: true
slug: browser-automation-in-google-cloud-with-puppeteer-sharp
tags:
  - coding
  - new
time_to_read: 2
title: Browser Automation in Google Cloud with Puppeteer Sharp
description: Recently I worked on creating a web browser automation tool that needed to be hosted on Google Cloud Compute Engine. Currently, it is a .Net Core console app that uses the Puppeteer Sharp library to run a chrome headless browser. Compute Engine is a VM with Debian Linux OS with no graphical interface.
image: "/images/learn-algorithms-data-structures/algorithms.jpg"
---

<img src="/images/google-cloud.png" alt="Google Cloud"
	title="Google Cloud" class="w-100" />

Recently I worked on creating a web browser automation tool that needed to be hosted on Google Cloud Compute Engine. Currently, it is a .Net Core console app that uses the Puppeteer Sharp library to run a chrome headless browser. Compute Engine is a VM with Debian Linux OS with no graphical interface.

After deploying the .Net console app to Debian OS and running it I got the error 'libX11-xcb.so.1: cannot open shared object file: No such file or directory'. To fix it install the following packages.

```
sudo apt install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

#### References

---

- [Moving and Renaming Files on GitHub](https://github.blog/2013-03-15-moving-and-renaming-files-on-github/)
