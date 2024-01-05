---
# 这是文章的标题
title: Spring Boot 基础环境搭建
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 4
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

这是一篇`Springboot`基础环境搭建的文章。本文不涉及数据库操作，仅作为`Springboot`基础环境搭建的记录。
本文将包含日志管理、文档自动生成、数据校验等内容。

<!-- more -->

## 技术框架

- Spring Boot: 版本 `2.7.17`
- JDK: 版本 `17`
- SpringFox(Swagger): 版本 `3.0.0`
- Lombok: 版本 `1.18.30`
- spring-boot-starter-validation: 版本 `2.7.17`
- Junit: 版本 `4.13.2`

## 依赖 `pom.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.17</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>demo</name>
    <description>demo</description>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.yaml</groupId>
                    <artifactId>snakeyaml</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-boot-starter</artifactId>
            <version>3.0.0</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <scope>test</scope>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <image>
                        <builder>paketobuildpacks/builder-jammy-base:latest</builder>
                    </image>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>

```

## 项目结构

```bash
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.example

```
