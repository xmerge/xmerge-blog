---
# 这是文章的标题
title: 算法笔记-基础进阶
# 你可以自定义封面图片
cover: /assets/images/algorithm/AlgorithmHero.png
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 2
# 设置作者
author: Xmerge
# 设置写作时间
date: 2023-11-07
# 一个页面可以有多个分类
category:
  - algorithm
# 一个页面可以有多个标签
tag:
  - algorithm
  - 算法
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: true

---

这是一篇算法刷题笔记，主要轨迹按照[`labuladong的算法小抄`](https://labuladong.github.io/algo/)和[`代码随想录`](https://programmercarl.com/)进行学习。
> 上述两位大佬的算法讲解已经十分完善，故本笔记只记录一些**重难点**或笔者认为**精妙**的部分，如需系统学习，请移步上述网址。
这篇笔记主要记录二叉树、动态规划、回溯和BFS、DFS等基础进阶内容。

<!-- more -->

## 一刷-labuladong的算法小抄

::: info 写在前面
:::

### CHAP0- 二叉树纲领

提取二叉树共性，对二叉树中蕴含的思维进行升华，可以应用到动态规划，回溯算法，分治算法，图论算法等等中去。

例如：
> 快速排序就是个二叉树的前序遍历，归并排序就是个二叉树的后序遍历。
快速排序：先构造分界点，然后去左右子数组构造分界点。
归并排序：先对左右子数组排序，然后合并。

二叉树遍历框架：

```java
void traverse(TreeNode root) {
    if (root == null) {
        return;
    }
    // 前序位置
    traverse(root.left);
    // 中序位置
    traverse(root.right);
    // 后序位置
}
```

不管前中后序遍历是什么顺序，只需将具体操作嵌上述遍历框架中，再改变顺序，就是二叉树遍历的大部分情况。

> **只要是递归形式的遍历，都可以有前序位置和后序位置，分别在递归之前和递归之后。**

二叉树题目的递归解法可以分两类思路，第一类是**遍历**一遍二叉树得出答案，第二类是通过**分解**问题计算出答案，这两类思路分别对应着**回溯算法**核心框架和**动态规划**核心框架。

### CHAP1- 前中后序遍历

1. 题目([leetcode](https://leetcode.cn/problems/maximum-depth-of-binary-tree/))

    解法1: 分解为求左右子树的最大深度，再加上自己。
    解法2: 遍历二叉树，注意深度更新位置与res更新时机。