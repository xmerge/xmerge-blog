---
# 这是文章的标题
title: 通过Docker部署个人主页
# 你可以自定义封面图片
cover: assets/images/docker/DockerHero.png
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Xmerge
# 设置写作时间
date: 2023-10-04
# 一个页面可以有多个分类
category:
  - Docker
  - Website
# 一个页面可以有多个标签
tag:
  - Docker
  - -Website
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
footer:  通过Docker部署个人主页(by Xmerge)
# 你可以自定义版权信息
copyright: Xmerge
---

部署一个个人主页的Docker项目，在容器内部通过Nginx静态资源服务器实现资源访问。

<!-- more -->
## 前置条件

1. **Linux系统**，笔者使用阿里云轻量应用服务器(Ubuntu20.04)。
2. **Docker环境**，[国内用户安装教程](https://yeasy.gitbook.io/docker_practice/install/ubuntu)
3. **打包好的网页静态资源**，笔者使用一个通过`Vite`打包的[`Vue`项目](https://github.com/xmerge/docker_my-vue-app.git)。

## 1. 制作镜像

1. 运行以下脚本，克隆打包后的静态资源（`HelloWolrd`资源，供学习使用）

    ```bash
    ## 创建 my-docker-app 文件夹并进入
    sudo mkdir my-docker-app && cd my-docker-app
    ## 克隆git仓库并命名为dist
    git clone https://github.com/xmerge/docker_my-vue-app.git dist
    ```

2. 在`my-docker-app`文件夹下，创建一个`Dockerfile`文件和一个`nginx.conf`文件

    ```bash
    ## 创建Dockerfile
    sudo touch Dockerfile
    ## 创建nginx.conf
    sudo touch nginx.conf
    ## 编写Dockerfile
    sudo vim Dockerfile
    ```

    :::warning 文件目录
    `Dockerfile`文件, `nginx.conf`文件和`dist`文件夹都在`my-docker-app`目录下， 三者是平级关系。
    :::

3. 编写`Dockerfile`和`nginx.conf`

    Dockerfile编写如下：

    ```bash
    FROM nginx:alpine
    COPY dist/ /usr/share/nginx/html
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    EXPOSE 8888
    ```

    以上`Dockerfile`解释如下：
    - `FROM nginx:alpine`: 这个语句指定了使用哪个基础镜像。这里是使用名为nginx,标签为alpine的镜像作为基础镜像。这将使用一个轻量级的nginx镜像作为构建的基础。
    - `COPY dist/ /usr/share/nginx/html`: COPY语句将本地目录dist中的所有文件,复制到容器内部路径/usr/share/nginx/html下。这是nginx默认的网站根目录。
    - `COPY nginx.conf /etc/nginx/conf.d/default.conf`: COPY语句将本地的nginx.conf文件复制到容器内的/etc/nginx/conf.d/default.conf路径。这个路径包含nginx的配置文件。
    - `EXPOSE 8888`: EXPOSE语句将容器内的8888端口暴露出来，这允许外部访问容器的8888端口。**注意这个并不会自动在宿主机开放这个端口**,在docker run时还需用-p参数来发布端口。

    nginx.conf编写如下:

    ```bash
    server {
        listen 8888;
        server_name localhost;

        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
    ```

    以上`nginx.conf`解释如下：

4. 构建镜像

    在终端中运行以下命令:

    ```bash
    sudo docker build -t my-docker-app .
    ```

## 2. 尝试访问

在终端中运行以下命令:

```bash
sudo docker run -p -d 8888:8888 my-docker-app
```

访问`localhost:8888`，即可看到运行中的`my-docker-app`提供的页面：
![HelloWord页面](./img/dockerFun_1_HelloWorld.png)

恭喜你，已经完成配置！

## 3. 踩坑记录

1. nginx配置目录

2. 网站配置测试
