---
# 这是文章的标题
title: 算法笔记-基础
# 你可以自定义封面图片
cover: /assets/images/algorithm/AlgorithmHero.png
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Xmerge
# 设置写作时间
date: 2023-09-11
# 一个页面可以有多个分类
category:
  - algorithm
# 一个页面可以有多个标签
tag:
  - algorithm
  - 算法
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true

---

这是一篇算法刷题笔记，主要轨迹按照[`labuladong的算法小抄`](https://labuladong.github.io/algo/)和[`代码随想录`](https://programmercarl.com/)进行学习。
> 上述两位大佬的算法讲解已经十分完善，故本笔记只记录一些**重难点**或笔者认为**精妙**的部分，如需系统学习，请移步上述网址。

<!-- more -->

## 一刷-labuladong的算法小抄

::: info 写在前面
实习前正式准备的一刷(`20230911`)，旨在尽可能全面地记录和记忆，本章可能稍显繁琐:grin:。
> 算法工程师研究的算法为「**数学算法**」，刷题面试的算法为「**计算机算法**」。本笔记主要聚焦的是「**计算机算法**」
:::

### CHAP0- 核心框架汇总

#### 1. 数据结构的存储方式

数据结构的存储方式只有两种：数组（顺序存储）和链表（链式存储）
数组和链表才是「结构基础」。其他多样化的数据结构，究其源头，都是在链表或者数组上的特殊操作。

- 「队列」、「栈」这两种数据结构既可以使用链表也可以使用数组实现
- 「图」的两种表示方法，邻接表就是链表，邻接矩阵就是二维数组
- 「散列表」就是通过散列函数把键映射到一个大数组里
- 「树」，用数组实现就是「堆」，「堆」是一个完全二叉树；用链表实现就是很常见的那种「树」，因为不一定是完全二叉树，所以不适合用数组存储

#### 2. 数据结构的基本操作

::: tip 数据结构的遍历
各种数据结构的遍历 + 访问无非两种形式：**线性**的和**非线性**的。
线性就是 `for/while` 迭代为代表，非线性就是**递归**为代表。
:::

- 数组遍历框架，典型的线性迭代结构：
::: code-tabs

@tab java

```java
void traverse(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        // 迭代访问
    }
}
```

@tab cpp

```cpp
void traverse(vector<int>& arr) {
    for (int i = 0; i < arr.size(); i++) {
        // 迭代访问
    }
}
```

:::

- 链表遍历框架，兼具迭代和递归结构：
::: code-tabs

@tab java

```java
class ListNode {
    int val;
    ListNode next;
}
/** 迭代访问 */
void traverse(ListNode head) {
    for (ListNode p = head; p != null; p = p.next) {
        // 迭代访问p.val
    }
}
/** 递归访问 */
void traverse(ListNode head) {
    // 递归访问 head.val
    traverse(head.next)
}
```

@tab cpp

```cpp
class ListNode {
    public:
        int val;
        ListNode* next;
};

void traverse(ListNode* head) {
    for (ListNode* p = head; p != nullptr; p = p->next) {
        // 迭代访问 p->val
    }
}

void traverse(ListNode* head) {
    // 递归访问 head->val
    traverse(head->next);
}
```

:::

- 二叉树遍历框架，典型的非线性递归遍历结构：
::: code-tabs
@tab java

```java
class TreeNode {
    int val;
    TreeNode left, right;
}
void traverse(TreeNode root) {
    traverse(root.left);
    traverse(root.right);
}
```

@tab cpp

```cpp
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
};

void traverse(TreeNode* root) {
    traverse(root->left);
    traverse(root->right);
}
```

:::

:::  tip 递归问题总结
只要涉及递归的问题，都是树的问题。
很多动态规划问题就是在遍历一棵树。
回溯算法就是个 N 叉树的前后序遍历问题。
:::

#### 3. labuladong的刷题心得

working on it...

### CHAP1- 双指针与链表

1. 合并两个有序链表([leetcode](https://leetcode.cn/problems/merge-two-sorted-lists/))

    [**题解**](https://labuladong.github.io/algo/di-ling-zh-bfe1b/shuang-zhi-0f7cc/#%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8)

    链表使用`dummy`节点： 降低代码复杂性，避免空指针。
    > Q: 什么时候使用`dummy`节点？
    A: 当需要创造一条新链表的时候，可以使用虚拟头结点简化边界情况的处理。

2. 分隔链表([leetcode](https://leetcode.cn/problems/partition-list/))

    [**题解**](https://labuladong.github.io/algo/di-ling-zh-bfe1b/shuang-zhi-0f7cc/#%E5%8D%95%E9%93%BE%E8%A1%A8%E7%9A%84%E5%88%86%E8%A7%A3)

    ::: danger 易错
    如果不断开原链表中的每个节点的 next 指针会出错，结果链表中会包含**一个环**。
    :::
    > 如果需要把原链表的节点接到新链表上，而不是 new 新节点来组成新链表的话，那么**断开节点和原链表之间的链接**可能是必要的。

    与第1题对比，本题可能出现环的原因在于，将原链表非最后一个元素放到了新的链表上，所以可能会出现环。而第1题总是会将原链表最后一个元素直接放入新的链表中，所以不会出现环。

3. 合并K个升序链表([leetcode](https://leetcode.cn/problems/merge-k-sorted-lists/))

    [**题解**](https://labuladong.github.io/algo/di-ling-zh-bfe1b/shuang-zhi-0f7cc/#%E5%90%88%E5%B9%B6-k-%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8)

    > [优先级队列(二叉堆)](https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-daeca/er-cha-dui-1a386/)  总是将最小的数放到堆顶。

    时间复杂度：working on it...

4. 删除链表的倒数第 N 个结点([leetcode](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/))

    [**题解**](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/solutions/450350/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-b-61/)

    ::: warning 注意
    删除倒数第N个节点，需要找到倒数第N+1个节点，所以用双指针时可以将second指针初始置为dummy节点，而first指针初始置为head节点。
    如果不这样做，需要多做很多判断。
    :::

5. 环形链表 II([leetcode](https://leetcode.cn/problems/linked-list-cycle-ii/))

    ::: danger 重做
    :::

6. 相交链表([leetcode](https://leetcode.cn/problems/intersection-of-two-linked-lists/))

    若相交，长短指针各走一次，第二次必在相交处相遇。

### CHAP2- 双指针与数组

> 在数组中并没有真正意义上的指针，但我们可以把索引当做数组中的指针，这样也可以在数组中施展双指针技巧。

1. 删除有序数组中的重复项([leetcode](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/))

    数组已排序，用快慢指针，因为不用管长度k之外的元素，所以只管前k个元素的赋值即可

    > 删除链表元素中的重复项([leetcode](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/))
    注意head为空的判断，以及最后断掉末尾的重复元素

2. 移除元素([leetcode](https://leetcode.cn/problems/remove-element/))

    ::: danger 与上一题目区别
    上一题要求删除重复元素，所以需要先slow++再赋值，否则一旦出现重复项，该项所有元素都会被删除。
    而此题需要删除值为val的元素，所以直接赋值后再slow++
    :::
    > 思考：为什么先slow++会有溢出错误，而上一题没有

3. 移除零([leetcode](https://leetcode.cn/problems/move-zeroes/submissions/))

    需要遍历两次数组（最后赋0）

4. 两数之和2([leetcode](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/))

    注意索引开始位置

5. 反转数组([leetcode](https://leetcode.cn/problems/reverse-string/))

6. 最长回文川([leetcode](https://leetcode.cn/problems/longest-palindromic-substring/))

    > 一般题目的左右指针都是从**两端向中间**相向而行，而回文子串问题则是让左右指针从**中心向两端**扩展。这种情况一般只在回文串中遇到。

    本题用到扩散双指针技巧：

    ```java
    // 在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
    String palindrome(String s, int l, int r) {
        // 防止索引越界
        while (l >= 0 && r < s.length()
                && s.charAt(l) == s.charAt(r)) {
            // 双指针，向两边展开
            l--; r++;
        }
        // 返回以 s[l] 和 s[r] 为中心的最长回文串
        // 范围[l+1, r]是因为终止条件是最长回文串的下一步循环
        return s.substring(l + 1, r);
    }
    ```

    > 本题还可以用动态规划求解。

至此，基础的链表与数组刷题技巧已大致了解，下面将进入算法笔记-基础进阶篇。
