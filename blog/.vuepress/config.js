const { viteBundler } = require("@vuepress/bundler-vite");
const { gungnirTheme } = require("vuepress-theme-gungnir");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  title: "前端技术分析",
  description: "cenmcc personal blog",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: `/img/logo/logo.svg`, //icon
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/logo.svg`,
      },
    ],
    ["meta", { name: "application-name", content: "前端技术分析" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "前端技术分析" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: `/img/logo/logo.svg` }],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
  ],
  //
  locales: {
    "/": {
      lang: "zh-CN",
      title: "前端技术分析",
      description: "",
    },
  },
  bundler: viteBundler(),

  theme: gungnirTheme({
    // repo: "Renovamen/blog.zxh.io",
    docsDir: "blog",
    docsBranch: "master",

    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "cenmc",
      avatar:
        "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/avatar.jpeg",
      description: "个人描述",
      sns: {
        github: "cenmc",
        email: "15565555045@163.com",
      },
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/bg-image/6.jpg",
        mask: "rgba(40, 57, 101, .4)",
      },
      {
        path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/bg-image/11.jpg",
        mask: "rgba(196, 176, 131, .1)",
      },
      {
        path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/bg-image/13.jpg",
        mask: "rgba(68, 74, 83, .1)",
      },
      {
        path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/bg-image/9.jpg",
        mask: "rgba(19, 75, 50, .2)",
      },
      {
        path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/bg-image/10.jpg",
        mask: "rgba(19, 75, 50, .2)",
      },
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)",
        },
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)",
        },
      },
    },
    themePlugins: {
      mdPlus: {
        all: true,
      },
      rss: {
        siteURL: "https://cenmcc.cn",
      },
    },
    searchText: "搜索",
    navbar: [
      {
        text: "主页",
        link: "/",
        icon: "fa-fort-awesome",
      },
      {
        text: "文档",
        link: "/docs/vue/vueprinciple",
        icon: "fa-book",
      },
      {
        text: "标签",
        link: "/tags/",
        icon: "fa-tag",
      },
      {
        text: "链接",
        link: "/links/",
        icon: "fa-satellite-dish",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "HTML",
          collapsible: true,
          children: [
            {
              text: "HTML MATE",
              link: "/docs/html/meta",
              sidebarDepth: 1,
            },
            {
              text: "HTML 标签与语意化",
              link: "/docs/html/label",
              sidebarDepth: 1,
            },
          ],
        },
        {
          text: "CSS",
          collapsible: true,
          children: [
            {
              text: "CSS基础布局",
              link: "/docs/css/layout",
              sidebarDepth: 1,
            },
            {
              text: "CSS公共样式",
              link: "/docs/css/base",
              sidebarDepth: 1,
            },
            {
              text: "CSS Flex布局",
              link: "/docs/css/flex",
              sidebarDepth: 1,
            },
            {
              text: "CSS Scss基础",
              link: "/docs/css/scss",
              sidebarDepth: 1,
            },
            {
              text: "CSS 样式权重与优先级",
              link: "/docs/css/weight",
              sidebarDepth: 1,
            },
            "/docs/css/bfc",
            "/docs/css/cssskill",
            {
              text: "CSS 属性及描述",
              collapsible: true,
              children: [
                "/docs/css/animation",
                "/docs/css/background",
                "/docs/css/border",
                "/docs/css/boxcontent",
                "/docs/css/image",
                "/docs/css/layoutlabel",
                "/docs/css/list",
                "/docs/css/selector",
                "/docs/css/textstyle",
                "/docs/css/transfrom",
                "/docs/css/transition",
              ],
            },
          ],
        },
        {
          text: "JavaScript",
          collapsible: true,
          children: [
            "/docs/javascript/array",
            "/docs/javascript/dom",
            "/docs/javascript/domprops",
            "/docs/javascript/es6",
            "/docs/javascript/event",
          ],
        },
        {
          text: "Vue",
          collapsible: true,
          children: [
            {
              text: "Vue 原理",
              link: "/docs/vue/vueprinciple",
              sidebarDepth: 1,
            },
            {
              text: "Vue computed计算属性",
              link: "/docs/vue/computed",
              sidebarDepth: 1,
            },
            {
              text: "Vue 特殊用法",
              link: "/docs/vue/rareuser",
              sidebarDepth: 1,
            },
            {
              text: "Vue 高级用法",
              link: "/docs/vue/usage",
              sidebarDepth: 1,
            },
            {
              text: "Vue 异步组件",
              link: "/docs/vue/asyncComponent",
              sidebarDepth: 1,
            },

            {
              text: "Vue 动态组件",
              link: "/docs/vue/component",
              sidebarDepth: 1,
            },
            {
              text: "Vue 缓存组件",
              link: "/docs/vue/keepalive",
              sidebarDepth: 1,
            },
            {
              text: "Vue mixin混合",
              link: "/docs/vue/mixin",
              sidebarDepth: 1,
            },
            {
              text: "Vue 自定义v-model",
              link: "/docs/vue/vmodel",
              sidebarDepth: 1,
            },
            {
              text: "Vue 插槽",
              link: "/docs/vue/vslot",
              sidebarDepth: 1,
            },

            {
              text: "Vuex 辅助函数",
              link: "/docs/vue/vuex",
              sidebarDepth: 1,
            },
            {
              text: "Vue Router",
              link: "/docs/vue/vuerouter",
              sidebarDepth: 1,
            },
          ],
        },
        {
          text: "React",
          collapsible: true,
          children: [
            {
              text: "React Router",
              link: "/docs/react/router",
              sidebarDepth: 1,
            },
          ],
        },
        {
          text: "其他",
          collapsible: true,
          children: ["/docs/other/vscodeplugins"],
        },
        {
          text: "GitHub",
          collapsible: true,
          children: [
            "/docs/github/gituse",
            {
              text: "github基本操作",
              link: "/docs/github/githubuse",
              sidebarDepth: 1,
            },
          ],
        },
        {
          text: "计算机网络技术",
          collapsible: true,
          children: [
            {
              text: "第一章 计算机网络技术概论",
              link: "/docs/computer/1",
              sidebarDepth: 1,
            },
            {
              text: "第二章 数据通信基础",
              link: "/docs/computer/2",
              sidebarDepth: 1,
            },
            {
              text: "第三章 网络协议和体系结构",
              link: "/docs/computer/3",
              sidebarDepth: 1,
            },
            {
              text: "第四章 局域网技术",
              link: "/docs/computer/4",
              sidebarDepth: 1,
            },
            {
              text: "第五章 网络互联技术",
              link: "/docs/computer/5",
              sidebarDepth: 1,
            },
            {
              text: "第六章 网络应用技术",
              link: "/docs/computer/6",
              sidebarDepth: 1,
            },
            {
              text: "第七章 网络管理技术",
              link: "/docs/computer/7",
              sidebarDepth: 1,
            },
            {
              text: "第八章 网络操作系统",
              link: "/docs/computer/8",
              sidebarDepth: 1,
            },
            {
              text: "第九章 计算机网络安全",
              link: "/docs/computer/9",
              sidebarDepth: 1,
            },
          ],
        },
        {
          text: "软件开发环境与工具教程",
          collapsible: true,
          children: [
            {
              text: "第一章 软件开发环境与工具概述",
              link: "/docs/dev/1",
              sidebarDepth: 1,
            },
            {
              text: "第二章 软件开发工具",
              link: "/docs/dev/2",
              sidebarDepth: 1,
            },
            {
              text: "第三章 软件开发管理工具",
              link: "/docs/dev/3",
              sidebarDepth: 1,
            },
            {
              text: "第四章 软件开发基础环境",
              link: "/docs/dev/4",
              sidebarDepth: 1,
            },
            {
              text: "第五章 学科前沿",
              link: "/docs/dev/5",
              sidebarDepth: 1,
            },
            {
              text: "第六章 CASE环境与工具的开发与选用",
              link: "/docs/dev/6",
              sidebarDepth: 1,
            },
            {
              text: "第七章 典型软件开发工具与环境介绍",
              link: "/docs/dev/7",
              sidebarDepth: 1,
            },
          ],
        },
      ],
    },
    footer: `
      &copy; <a href="https://beian.miit.gov.cn/" target="_blank">ICP备案号: 豫ICP备2024079085号-1</a>
    `,
  }),

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5],
    },
    code: {
      lineNumbers: false,
    },
  },
};
