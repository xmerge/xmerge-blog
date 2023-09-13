import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Xmerge",
  description: "vuepress-theme-hope 的博客演示",
  head: [
    [
      'link', { rel: 'icon', href: '/XmergeLogo.png'}
    ]
  ],
  theme

  // Enable it with pwa
  // shouldPrefetch: false,
});
