---
# 这是文章的标题
title: Spring Boot CRUD环境搭建
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 5
# 设置作者
author: Xmerge
# 设置写作时间
date: 2023-11-28
# 一个页面可以有多个分类
category:
  - 后端
  - Spring Boot
# 一个页面可以有多个标签
tag:
  - 后端
  - Spring Boot
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
---

这是一篇利用[`Springboot`]作为后端进行CRUD（增删查改）的基本框架搭建笔记。主要技术框架为Springboot、Mybatis、Mybatis-Plus、Druid、Swagger-UI(Spring fox)、Lombok等。
本笔记针对`Springboot`版本为`2.7.17`进行编写。

<!-- more -->

## 技术选型

- Spring Boot: 版本`2.7.17`
- JDK: 版本`17`
- Mybatis: 版本`3.5.7`
- Mybatis-Plus: 版本`3.4.3`
- Druid: 版本`1.2.7`
- Swagger-UI: 版本`3.52.5`
- Lombok: 版本`1.18.20`

## 项目结构

```bash
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.example

<!-- more -->
```
