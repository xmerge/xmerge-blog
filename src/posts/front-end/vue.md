---
# 这是文章的标题
title: Vue.js
# 你可以自定义封面图片
cover: /assets/images/background.jpg
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 1
# 设置作者
author: XYin
# 设置写作时间
date: 2023-08-01
# 一个页面可以有多个分类
category:
  - front-end
# 一个页面可以有多个标签
tag:
  - vue3
  - notes
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true

---

这是一篇关于[`vue.js`](https://vuejs.org/)的学习笔记。
> 这篇文章将全部使用Vue3，并按照Vue官方推荐的组合式API和setup语法糖🍬进行coding

<!-- more -->

## 1. vue.js简介

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。由于Vue2将于2023年末停止维护，本文章只介绍Vue3。

::: tip Vue与React

- 虽然主流的中国互联网大厂（BAT等）更多使用[React](https://react.dev/)，但Vue等学习曲线更低，更适合中小规模的前端开发，也更适合中国开发者学习和使用。
- 美团、去哪儿等产品矩阵使用了Vue进行开发。
:::

使用Vue3等框架之前，需要对HTML, CSS, JavaScript和Node.js有一定基础。在项目的实际开发中，还建议使用Typescript，实现更好的代码规范和代码提示。
开发和部署时，还可能会用到WebPack和Vite等打包构建工具。

## 2. 响应式入门

关于Vue.js的响应式与双向数据绑定等功能，官网文档已经有详细的解释，我们进行简单的回顾（详情请移步[官网文档](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#ref)）。

> 响应式(Reactive)是一个编程概念,它允许我们以声明式的方式来更新应用的状态和视图。

::: tip 响应式编程的基本思想

- 应用状态存储在响应式变量中。
- 通过修改这些变量触发视图的自动更新。
- 响应式编程不需要开发者手动操作DOM,开发者只需要关注状态变化,视图会自发更新。
:::

在Vue.js中,响应式具体工作原理是:

1. 使用defineProperty或Proxy将数据对象转换成响应式的。
2. 视图通过数据绑定连接到这些响应式变量上。
3. 当变量变化时,触发`setter`更新视图。

### 声明响应式状态

Vue提供了两种声明响应式状态的方法：`ref`和`reactive`。简单来说，`ref`一般来创建基本类型数据的响应，而`reactive`用来创建对象（复杂数据类型）的响应。
> ref和ractive都可以实现深层对象的响应。

ref内部使用了Object.defineProperty的getter/setter，而reactive是通过Proxy实现响应式的。
当尝试使用ref定义复杂对象类型时，ref内部也会利用响应式Proxy代理。

### 使用ref()

```typescript
import { ref } from 'vue'
const count = ref<number>(0)
```

- #### ref的工作原理

模板中使用了一个 ref，然后改变了这个 ref 的值时，Vue 会自动检测到这个变化，并且相应地更新 DOM。这是通过一个基于依赖追踪的响应式系统实现的。
在标准的 JavaScript 中，检测普通变量的访问或修改是行不通的。然而，我们可以通过 getter 和 setter 方法来拦截对象属性的 get 和 set 操作。
ref的实现可以以如下代码类比：

```typescript
// 伪代码，不是真正的实现
const myRef = {
  _value: 0,
  get value() {
    track()
    return this._value
  },
  set value(newValue) {
    this._value = newValue
    trigger() // 在更改值的时候trigger
  }
}
```

### ref进阶Tips

::: info ref进阶Tips

:::

1. 使用[shallowRef](https://cn.vuejs.org/api/reactivity-advanced.html#shallowref)来放弃深层响应性
2. DOM更新时机：修改了响应式状态时，DOM会自动被更新，但DOM的更新是异步的。Vue会在`next Tick`周期更新状态，以确保不管进行了多少次状态修改，每个组件都只会被更新一次。如果要等待DOM更新完成才执行额外代码，可以使用[nextTick()](https://cn.vuejs.org/api/general.html#nexttick)全局API：

    ```typescript
    import { nextTick } from 'vue'
    async function increment() {
      count.value++
      await nextTick()
      // 现在 DOM 已经更新了
    }
    ```

3. working on it...

### 使用reactive()

`reactive()` 将深层地转换对象：当访问嵌套对象时，它们也会被 `reactive()` 包装。当 ref 的值是一个对象时，`ref()` 也会在内部调用它。与浅层 ref 类似，也有一个 `shallowReactive()` API 可以选择退出深层响应性。

```typescript
import { reactive } from 'vue'
const state = reactive({ count: 0 })
```

由于`reactive()`存在某些局限性，<u>**Vue官方建议使用 `ref()` 作为声明响应式状态的主要 API**</u>：

::: warning  reactive() 的局限性

1. 有限的值类型。
2. 不能替换整个对象（响应性链接丢失）
3. 对解构操作不友好。

:::

### 补充

1. 额外的ref解包细节（详情见[官网文档](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#ref-unwrapping-as-reactive-object-property)）
2. working on it...

## 3. 组件与组件间通信