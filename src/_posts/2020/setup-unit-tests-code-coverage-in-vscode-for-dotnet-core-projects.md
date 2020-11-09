---
date: "2020-10-25"
published: true
slug: setup-unit-tests-code-coverage-in-vscode-for-dotnet-core-projects
tags:
  - coding
  - C#
  - .net core
  - unit tests
time_to_read: 5
title: Setup unit tests code coverage in VS Code for .Net Core projects
description: When working on the project, does not matter how big or small, having written unit tests, integration tests, it is like having safety net under you before walking the thin line of changing functionality. Code coverage reporting after running tests helps track how much of the production code is covered by tests.
---

<img src="/images/dotnet-core-coverage-gutters.jpg" alt=".Net Core Coverage Gutters"
	title=".Net Core Coverage Gutters" style="width: 100%" />

When working on the project, does not matter how big or small, having written unit tests, integration tests, it is like having safety net under you before walking the thin line of changing functionality. Code coverage reporting after running tests helps track how much of the production code is covered by tests. It is impossible to reach 100% of code coverage and some companies set the code coverage bar as high as %94 - %97.

For Visual Studio I used [NCrunch](https://www.ncrunch.net/) tool, which automatically runs unit tests and displays graph, statistics and coverage. There is a way to achieve similar functionality in Visual Studio Code with .Net Core using extensions and 'dotnet watch test' command.

For this you need to install [.NET Core Test Explorer](https://marketplace.visualstudio.com/items?itemName=formulahendry.dotnet-test-explorer) and [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters). .Net Core test project need to reference _coverlet.msbuild_ package. It is a code coverage library for .NET, with support for line, branch and method coverage. Now we are going to configure extensions.

#### Configure .Net Test Explorer

---

Edit Visual Studio Code Settings for .Net Core Test Explorer and set Test Arguments and Test Project Path.

```
Test Arguments:
/p:CollectCoverage=true /p:CoverletOutputFormat=cobertura /p:CoverletOutput=cov.xml

Test Project Path:
**\*.tests.csproj

Tree Mode:
Full
```

Coverage gutters extension looks for cov.xml coverage report file to display line coverage. If you are running Visual Studio Code under Linux or iOS set Path as _`'**/*.tests.csproj'`_. _`'*.tests.csproj'`_ is the suffix I use for my test projects in a solution. And I like to see full project / namespace tree in Test Explorer so I set Tree Mode to Full.

#### Configure Coverage Gutters

---

Edit Coverage Gutters settings and enable following settings:

- 'Show Gutter Coverage'
- 'Show Line Coverage'
- 'Show Ruler Coverage'

#### Running Unit Tests automatically with code coverage

---

Now we are ready to run our unit tests and observe coverage. Open your favorite terminal or use Visual Studio Code built in terminal and navigate to the test project directory. Run the following command.

```
dotnet watch test /p:CollectCoverage=true /p:CoverletOutputFormat=cobertura /p:CoverletOutput=cov.xml
```

This will automatically compile unit tests project and run it recreating coverage report. To enable coverage gutters to automatically refresh line coverage click on 'Watch' (Watch and Remove Helper) on the status bar of Visual Studio Code.

![Code Coverage Sample](/images/Code-Coverage-Sample.PNG)

In the screenshot covered with unit tests code displayed with green background. Not covered with red. You can try to follow described steps to enable coverage using project [avsc.database](https://github.com/vsetchinfc/avsc.database) on github I made screenshot from.

### References

- [Automatic Unit Testing in .NET Core plus Code Coverage in Visual Studio Code](https://tinyurl.com/y2gyhbyo)
- [Tests code coverage in Visual Studio Code with C# and .Net Core](https://tinyurl.com/y6dsvpej)
- [Use code coverage for unit testing](https://tinyurl.com/yys9wuy3)
