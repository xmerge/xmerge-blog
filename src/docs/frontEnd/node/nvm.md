---
# 这是文章的标题
title: nvm- node版本管理利器
# 你可以自定义封面图片
cover: assets/images/front-end/NvmHero.png
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Xmerge
# 设置写作时间
date: 2023-09-14
# 一个页面可以有多个分类
category:
  - front-end
# 一个页面可以有多个标签
tag:
  - front-end
  - node
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
footer: nvm-node版本管理利器(by Xmerge)
# 你可以自定义版权信息
copyright: Xmerge
---

npm为前端开发者带来了极为便利的包管理，但不同项目可能会支持某些特定版本的node，特别是一些长年未维护的项目，需要回退到更旧的node版本。
nvm提供了极为便利的node版本管理和切换，可以通过一个命令切换node版本。

<!-- more -->

## Node.js

Node.js 是一个开源的跨平台 JavaScript 运行时环境，侧重于服务器端和网络应用。

JavaScript 诞生于 1995 年，几乎是和互联网同时出现；Node.js 诞生于 2009 年，比 JavaScript 晚了 15 年左右。

Node.js 允许开发人员使用易于理解的代码构建快速、可扩展的网络应用。它在 Windows OS、Mac OSX、Linux、Unix 和其他操作系统上运行。它支持 ARM 处理器，例如 Raspberry Pi 或 Beaglebone Black。

在 Node.js 之前，JavaScript 只能运行在浏览器中，作为网页脚本使用，为网页添加一些特效，或者和服务器进行通信。有了 Node.js 以后，JavaScript 就可以脱离浏览器，像其它编程语言一样直接在计算机上使用，想干什么就干什么，再也不受浏览器的限制了。

## nvm: node版本管理利器

话不多说，直接介绍nvm安装和使用。

### nvm的安装

- Windows安装nvm：[Github Release](https://github.com/coreybutler/nvm-windows/releases)
- 其他平台：[Github Release](https://github.com/nvm-sh/nvm/releases)

下载后按照提示安装即可。在安装后默认会自动添加环境变量。

### nvm基本命令

如果要安装node，执行命令时建议使用管理员身份运行cmd。

查看可安装的node版本：
```cmd
nvm list available
```
查看已安装的node版本：
```cmd
nvm list
```
安装指定版本的node，将\<version\>改为版本号
```cmd
nvm install <version>
```
使用指定版本的node，将\<version\>改为版本号
```cmd
nvm use <version>
```

::: tip 注意
在安装后，不会自动切换node版本，要使用`use`命令指定使用的node版本
:::