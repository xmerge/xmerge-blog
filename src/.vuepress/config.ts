import { defineUserConfig } from "vuepress";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Xmerge",
  description: "Xmerge's blog",
  // plugins: [
  //   autoCatalogPlugin({
  //     //插件选项
  //   }),
  // ],
  head: [
    [
      'link', { rel: 'icon', href: '/XmergeLogo.png'}
    ]
  ],
  theme

  // Enable it with pwa
  // shouldPrefetch: false,
});
