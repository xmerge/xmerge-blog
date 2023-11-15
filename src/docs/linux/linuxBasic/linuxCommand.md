---
# 这是文章的标题
title: 常用的Linux命令
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 2
# 设置作者
author: Xmerge
# 设置写作时间
date: 2023-09-26
# 一个页面可以有多个分类
category:
  - Linux
# 一个页面可以有多个标签
tag:
  - Linux
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
footer: 初始Linux(by Xmerge)
# 你可以自定义版权信息
copyright: Xmerge
---

记录常用的Linux命令，命令对应的常用参数将用红色标注。

<!-- more -->

## 关于Linux
working on it...

## 1. 文件目录操作

1. **`ls` 命令**

    `ls <选项> <目录名>`
    查看文件列表、文件信息和文件权限等

    常用参数：
    > `-l` ：列出长数据串，包含文件的属性与权限数据等
    `-a` ：列出全部的文件，连同隐藏文件（开头为.的文件）一起列出来（常用）
    `-d` ：仅列出目录本身，而不是列出目录的文件数据
    `-h` ：将文件容量以较易读的方式（GB，kB等）列出来
    `-R` ：连同子目录的内容一起列出（递归列出），等于该目录下的所有文件都会显示出来

    示例：
    ```bash
    # 列出/home目录下所有文件和目录的详细资料
    ls -al /home
    # 列出当前目录下所有以"x"开头的文件目录详情
    ls -l x*
    ```

    上面示例中使用的`ls -l x*`指令，如果匹配到文件夹，则会默认列出匹配文件夹下的所有文件

2. **`cd` 命令**

    `cd <目录名>`
    进入/切换目录

    示例：
    ```bash
    # 进入根目录
    cd /
    # 进入上一级目录
    cd ..
    ```

3. **`pwd` 命令**

    `pwd <选项>`
    查看"当前工作目录"的完整路径

    常用参数：
    > `-P` :显示实际物理路径，而非使用连接（link）路径
      `-L` :当目录为连接路径时，显示连接路径

    示例：
    ```bash
    # 列出当前路径，示例输出：/home/root/codes/
    pwd
    ```

4. **`mkdir` 命令**

    `mkdir <选项> <目录名称>`
    创建指定的名称的目录

    :::warning 注意
    1. 要求用户在当前路径具有写权限
    2. 不能重复创建目录
    :::

    常用参数：
    > `-m`or`--mode` 设置新创建目录的权限模式，使用八进制表示法(如755)
      `-p`or`--parents` 递归地创建目录结构，如果上级目录不存在也会一并创建
      `-v`or`--verbose` 每次创建新目录都显示信息
      `--help` 显示此帮助信息并退出
      `--version` 输出版本信息并退出

    示例：
    ```bash
    # 创建一个空目录
    mkdir test
    # 递归创建多个目录
    mkdir -p test/test1
    # 创建权限为777的目录
    mkdir -m 777 test2
    ```

5. **`rm` 命令**

    `rm <选项> <目录名称>`
    删除一个目录中的一个或多个文件或目录

    常用参数：
    > `-f`or`--force` 强制删除，无需确认
      `-i`or`--interactive` 进行交互式删除，输入'y'和'yes'代表确认
      `-r`or`-R`or`--recursive` 递归删除，删除子目录所有内容
      `-v`or`--verbose` 详细显示进行的步骤
      `--help` 显示此帮助信息并退出
      `--version` 输出版本信息并退出


    示例：
    ```bash
    # 删除文件test.txt
    rm test.txt
    # 强制删除某个目录并递归删除其目录下所有内容
    rm -rf test
    ```

6. **`rmdir` 命令**

    :::tip 建议
    大多数场景下直接使用`rm -r `可以实现与`rmdir`同样的功能，并且比`rmdir`更自由、功能更强大。
    :::

    `rmdir <选项> <目录名称>`
    删除目录

    常用参数：
    > `-p` 递归删除
      `-v` 显示执行过程

7. **`mv` 命令**

    `mv <选项> <源文件or目录> <目标文件or目录>`
    移动或将文件夹改名

    :::tip notes
    当第二个参数是文件时，改名；当第二个参数是文件夹时，将源文件移动至目标目录
    :::

    常用参数：
    > `-b` 若需覆盖文件，则覆盖前先行备份
      `-f` force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖
      `-i` 若目标文件 (destination) 已经存在时，就会询问是否覆盖
      `-u` 若目标文件已经存在，且 source 比较新，才会更新(update)
      `-t` --target-directory=DIRECTORY move all SOURCE arguments into DIRECTORY，即指定mv的目标目录，该选项适用于移动多个源文件到一个目录的情况，此时目标目录在前，源文件在后

    示例：
    ```bash
    # 将 test1.txt 重命名为 test2.txt
    mv test1.txt test2.txt
    # 移动文件 test1.txt 到目录 testdir
    mv test1.txt testdir
    # 移动多个文件
    # mv test1.txt test2.txt testdir
    ```

8. **`cp` 命令**

    `cp <选项> <源文件or目录> <目标文件or目录>`
    复制命令

    常用参数：
    > `-b` 若需覆盖文件，则覆盖前先行备份
      `-f` force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖
      `-i` 若目标文件 (destination) 已经存在时，就会询问是否覆盖
      `-u` 若目标文件已经存在，且 source 比较新，才会更新(update)
      `-t` --target-directory=DIRECTORY move all SOURCE arguments into DIRECTORY，即指定mv的目标目录，该选项适用于移动多个源文件到一个目录的情况，此时目标目录在前，源文件在后

    示例：
    ```bash
    # 复制test1.txt到testdir
    cp test1.txt testdir
    # 复制test1目录到testdir目录
    cp -a test1 testdir
    ```

9. **`touch` 命令**

    `touch <选项> <文件>`
    更改文档或目录到日期时间，或创建新文件

    常用参数：
    > `-a`or`--time=atime`or`--time=access`or`--time=use`  只更改存取时间
      `-c`or`--no-create`  不建立任何文档
      `-d` 使用指定的日期时间，而非现在的时间
      `-f` 此参数将忽略不予处理，仅负责解决BSD版本touch指令的兼容性问题
      `-m`or`--time=mtime`or`--time=modify`  只更改变动时间
      `-r` 把指定文档或目录的日期时间，统统设成和参考文档或目录的日期时间相同 -t  使用指定的日期时间，而非现在的时间

    示例：
    ```bash
    # 创建test.txt
    touch test.txt
    # 将test.txt的时间更新为和test1.txt相同
    touch -r test.txt test1.txt
    ```

10. **`cat` 命令**

    `cat <选项> <文件>`
    显示文件内容，或将多个文件连接起来显示

    常用参数：
    > `-n`or`--number` 对输出的所有行编号,由1开始对所有输出的行数编号

    示例：
    ```bash
    # 将test.log文件的内容加上行号后放进test1.log文件中
    cat -n test.log test1.log
    # 将test.log文件的内容反向显示
    tac test.log
    ```
