---
# 这是文章的标题
title: Spring技术名词汇总
# 你可以自定义封面图片
cover: /assets/images/back-end/SpringBootHero.png
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 2
# 设置作者
author: Xmerge
# 设置写作时间
date: 2023-11-08
# 一个页面可以有多个分类
category:
  - backEnd
# 一个页面可以有多个标签
tag:
  - backEnd
  - Spring
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
footer: Springboot
# 你可以自定义版权信息
copyright: Xmerge
---

这是一篇关于`Spring`中常用的技术名词汇总，帮助初学者快速厘清Java后端生态中众多且繁杂的技术名词、框架和工具名称等，也可作为导航资料进行查阅。
加~~删除线~~的部分代表现在基本已经不再使用，了解即可。

<!-- more -->

## Web 基础

### 1. Servlet

Servlet是Java的一个规范，用于开发基于Java的Web应用程序。它提供了一种在服务器端处理HTTP请求和响应的方式。Servlet通过扩展javax.servlet.Servlet接口来实现，并通过Java编程语言编写。

### 2. Tomcat

Tomcat是Apache软件基金会开发和维护的一个开源的Java Servlet容器。它提供了一个运行Java Web应用程序的环境，支持Servlet和JavaServer Pages (JSP) 技术。Tomcat是一个轻量级的容器，可以独立运行，也可以与其他服务器（如Apache HTTP服务器）进行集成。

### 3. ~~**JSP**(JavaServer Pages)~~

JSP（JavaServer Pages）是一种用于开发动态Web页面的Java技术。它允许将Java代码嵌入到HTML页面中，以实现动态内容的生成和展示。JSP是基于Servlet技术的扩展，它使用了类似于HTML的标记语法，同时可以在其中嵌入Java代码片段。
但随着前后端开发的兴起，JSP一般不再使用。

### 4. **AOP**(Aspect-Oriented Programming)

AOP（面向切面编程，Aspect-Oriented Programming）是一种编程范式，旨在通过将横切关注点（cross-cutting concerns）与核心业务逻辑分离，提供一种模块化的方式来处理横切关注点的重复性问题。横切关注点是指在一个应用程序中多个不同模块或组件中存在的共同功能或关注点，例如日志记录、安全性、事务管理等。

## **Spring** 基础

### 1. **Spring**

Spring是一个开源的Java应用程序开发框架，用于构建企业级Java应用程序。它提供了一组丰富的库和组件，用于简化Java应用程序的开发，并提供了依赖注入（Dependency Injection, **DI**）、面向切面编程（Aspect-Oriented Programming, **AOP**）、事务管理等功能。

### 2. **Spring Boot**

Spring Boot是Spring团队提供的一种用于快速构建应用程序的框架。它简化了Spring应用程序的配置和部署过程，通过自动配置和约定优于配置的原则，使得开发者能够更专注于业务逻辑的实现。Spring Boot提供了一种快速启动和开箱即用的方式，使得构建独立的、可执行的、生产级别的Spring应用程序变得更加容易。

### 3. **Spring MVC**(Spring Model-View-Controller)

Spring MVC是Spring框架的一个模块，用于构建基于MVC模式的Web应用程序。它提供了一组功能强大的类和注解，用于处理HTTP请求、管理请求的生命周期、处理用户输入、渲染视图等。Spring MVC通过将应用程序的不同层（模型、视图、控制器）解耦，使得开发者能够更好地组织和管理Web应用程序的代码。

### 4. **Spring Cloud**

Spring Cloud是一个用于构建分布式系统的开源框架，它基于Spring Boot框架，提供了一套丰富的工具和库，用于开发和管理分布式应用程序。Spring Cloud简化了分布式系统的开发和部署，提供了各种功能和模块，帮助开发者解决了分布式系统中常见的问题。

与Spring Boot对比而言：Spring Boot是一个用于简化Spring应用程序开发的框架，而Spring Cloud是基于Spring Boot的框架，专注于构建分布式系统。Spring Boot可以作为Spring Cloud的基础，提供快速、简单的开发环境，而Spring Cloud则进一步扩展了分布式系统所需的功能和能力。

## 数据访问

### 1. **JDBC**(Java Database Connectivity)

JDBC（Java Database Connectivity）是Java语言中用于与关系型数据库进行交互的API（应用程序编程接口）。它提供了一组类和接口，使得Java应用程序能够连接、执行SQL语句，并处理数据库操作。

### 2. **HikariCP**

[HikariCP](https://github.com/brettwooldridge/HikariCP)HikariCP是一个高性能的数据库连接池，它被广泛应用于Java应用程序中，特别是在与关系型数据库进行交互时。HikariCP以其快速、高效和可靠的特性而闻名，并被许多开发者和企业所采用。

HikariCP号称性能最好的数据库连接池。

### 3. **druid**

[Druid](https://github.com/alibaba/druid)是由阿里巴巴开源的高性能数据库连接池，它在Java应用程序中被广泛使用，用于管理数据库连接的创建、分配和释放。Druid由阿里巴巴集团开发并开源，以其出色的性能、丰富的功能和可靠的稳定性而受到广泛关注和采用。

Druid是“为监控而生的数据库连接池”。

::: tip 上述三者的关系
JDBC是一个规范（Specification），定义了一组接口和类，用于在Java应用程序中操作关系型数据库。
HikariCP和Druid是两个关于JDBC连接池的**具体实现**，它们是在JDBC规范之上构建的库，提供了更高效、更可靠的数据库连接池功能。
:::

### 4. **JPA**(Java Persistence API)

JPA（Java Persistence API）是一种Java持久化技术，它为开发人员提供了一种简化数据库访问和操作的方式。JPA定义了一组API和规范，用于将Java对象映射到关系型数据库，实现对象与数据库之间的数据持久化。

