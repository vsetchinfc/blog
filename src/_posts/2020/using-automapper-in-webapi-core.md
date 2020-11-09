---
date: "2020-10-16"
published: true
slug: using-automapper-in-webapi-core
tags:
  - coding
  - C#
  - .net core
time_to_read: 5
title: Using AutoMapper & Heroic AutoMapper in .Net Core WebApi
description: AutoMapper is a library that helps to write clean code by removing need to explicitly map one object to another by hand. In this post I am going to discuss how to add AutoMapper to WebApi .Net Core project and use Heroic.AutoMapper to write cleaner mapping interfaces between objects.
---

<img src="/images/asp-net-core.jpg" alt="AspNet Core"
	title="AspNet Core" style="width: 100%" />

AutoMapper is a library that helps to write clean code by removing need to explicitly map one object to another by hand. In this post I am going to discuss how to add AutoMapper to WebApi .Net Core project and use Heroic.AutoMapper to write cleaner mapping interfaces between objects.

The good news is that now both libraries AutoMapper and Heroic.AutoMapper support .Net Core 3.x, but it is really important to fetch the correct version of them. I managed to get it working with AutoMapper version 7.0.1 and Heroic.AutoMapper version 5.0.0. To install run the following commands in WebApi project.

```
dotnet add package AutoMapper --version 7.0.1
dotnet add package Heroic.AutoMapper --version 5.0.0
```

To enable Heroic.AutoMapper configuration in .Net Core WebApi project add the following line to Startup.cs file at the end of ConfigureServices function.

```csharp
public void ConfigureServices(IServiceCollection services)
{
  ...
  HeroicAutoMapperConfigurator.LoadMapsFromCallerAndReferencedAssemblies();
}
```

Now I will show how to setup AutoMapper configuration and use it in simple ProductController CreateProduct POST endpoint. CreateProduct POST endpoint receives CreateProductRequest, which is mapped to CreateProductCommand (CQRS model of REST WebApi).

```csharp
public class CreateProductCommand : IRequest
{
    public Guid Id { get; set; }
    public string Name { get; set; }
}

public class CreateProductRequest : IMapTo<CreateProductCommand>, IHaveCustomMappings
{
    public Guid Id { get; set; }
    public string Description { get; set; }

    public void CreateMappings(IMapperConfigurationExpression configuration)
    {
        configuration.CreateMap<CreateProductRequest, CreateProductCommand>()
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Description));
    }
}
```

Then in ProductController we have the following.

```csharp
[HttpPost]
public async Task<IActionResult> CreateProduct
(
    [FromBody] CreateProductRequest request
)
{
    var command = Mapper.Map<CreateProductCommand>(request);

    return Ok(await Mediator.Send(command));
}
```

As you can see mapping of the objects is very simple and does not require explicit coding to map each of their property. IHaveCustomMappings interface in CreateMappings(IMapperConfigurationExpression configuration) function allows creation of more complex mappings and transformations.

### References

---

- [Heroic.AutoMapper for .NET Core Released!](https://tinyurl.com/yxomlyaq)
- [AutoMapper in ASP.NET Core 3.1 – Getting Started](https://tinyurl.com/y2x4y2q5)
- [Heroic.AutoMapper](https://tinyurl.com/y4lhzacm)
- [Using AutoMapper in Domain Objects with DotNet Core](https://tinyurl.com/y4bepchl)
