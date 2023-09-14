import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "学习笔记",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
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
      text: "算法学习笔记",
      icon: "book",
      prefix: "docs/algorithm",
      children: "structure",
    },
    "intro",
    // "slides",
  ],
});
