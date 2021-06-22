---
date: "2020-09-02"
published: true
slug: selenium-options
tags:
  - coding
  - selenium
  - C#
time_to_read: 1
title: How can I disable Chrome experimental option same-site-by-default-cookies in C#  Selenium?
description: C# code snippet to add same-site-by-default-cookies option to Selenium ChromeOptions
---

Latest version of Chrome browser introduced new security options related to same site cookies. When you run your solution in development with both front-end and backend running from the same site there may be need to disable same site cookies options in Chrome when it runs under Selenium. Code snippet below shows example how to add these settings to Chrome options.

```csharp
var chromeOptions = new ChromeOptions();
var experimentalFlags = new List<string>();
experimentalFlags.Add("same-site-by-default-cookies@2");
experimentalFlags.Add("cookies-without-same-site-must-be-secure@2");
chromeOptions.AddLocalStatePreference("browser.enabled_labs_experiments",
    experimentalFlags);
```

<br>

### References

---

- This code snippet was originally posted on [Stackoverflow](https://stackoverflow.com/a/63697020/6142236)
