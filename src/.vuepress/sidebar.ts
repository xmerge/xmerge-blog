import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "云票高并发抢票系统",
      icon: "book",
      prefix: "docs/yunpiao/",
      children: "structure",
    },
    {
      text: "后端学习笔记",
      icon: "book",
      prefix: "docs/backEnd",
      children: "structure",
    },
    {
      text: "前端学习笔记",
      icon: "book",
      prefix: "docs/frontEnd",
      children: "structure",
    },
    {
      text: "Linux学习笔记",
      icon: "book",
      prefix: "docs/linux",
      children: "structure",
    },
    {
      text: "Docker学习笔记",
      icon: "book",
      prefix: "docs/docker",
      children: "structure",
    },
    {
      text: "算法学习笔记",
      icon: "book",
      prefix: "docs/algorithm",
      children: "structure",
    },
    "intro",
    // "slides",
  ],
});
