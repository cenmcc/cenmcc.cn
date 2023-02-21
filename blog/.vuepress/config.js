const { viteBundler } = require("@vuepress/bundler-vite");
const { gungnirTheme } = require("vuepress-theme-gungnir");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  title: "cenmc",
  description: "cenmcc personal blog",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: `/img/logo/logo.svg` //icon
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/logo.svg`
      }
    ],
    ["meta", { name: "application-name", content: "cenmc" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "cenmc" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/logo.svg` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],
  // 
  locales: {
    "/": {
      lang: "zh-CN",
      title: "cenmc",
      description: "VuePress 博客主题"
    }
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
      avatar: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/avatar.jpeg",
      description: "个人描述",
      sns: {
        github: "cenmc",
        email: "15565555045@163.com",
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/bg-image/6.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/bg-image/11.jpg",
        mask: "rgba(196, 176, 131, .1)"
      },
      {
        path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/bg-image/13.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/bg-image/9.jpg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/bg-image/10.jpg",
        mask: "rgba(19, 75, 50, .2)"
      }
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },
    themePlugins: {
      mdPlus: {
        all: true
      },
      rss: {
        siteURL: "https://cenmcc.cn",
      }
    },
    searchText: "搜索",
    navbar: [
      {
        text: "主页",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "文档",
        link: "/docs/vue/vueprinciple",
        icon: "fa-book"
      },
      {
        text: "标签",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "链接",
        link: "/links/",
        icon: "fa-satellite-dish"
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'HTML',
          collapsible: true,
          children: [
            {
              text:'HTML MATE',
              link: '/docs/html/meta',
              sidebarDepth: 1,
            },
            {
              text:'HTML 标签与语意化',
              link: '/docs/html/label',
              sidebarDepth: 1,
            },
          ]
        },
        {
          text: 'CSS',
          collapsible: true,
          children: [
            {
              text:'CSS基础布局',
              link: '/docs/css/layout',
              sidebarDepth: 1,
            },
            {
              text:'CSS公共样式',
              link: '/docs/css/base',
              sidebarDepth: 1,
            },
            {
              text:'CSS Flex布局',
              link: '/docs/css/flex',
              sidebarDepth: 1,
            },
            {
              text:'CSS Scss基础',
              link: '/docs/css/scss',
              sidebarDepth: 1,
            },
            {
              text:'CSS 样式权重与优先级',
              link: '/docs/css/weight',
              sidebarDepth: 1,
            },
            '/docs/css/bfc',
            '/docs/css/cssskill',
            {
              text: 'CSS 属性及描述',
              collapsible: true,
              children: [
                '/docs/css/animation',
                '/docs/css/background',
                '/docs/css/border',
                '/docs/css/boxcontent',
                '/docs/css/image',
                '/docs/css/layoutlabel',
                '/docs/css/list',
                '/docs/css/selector',
                '/docs/css/textstyle',
                '/docs/css/transfrom',
                '/docs/css/transition',
              ]
            }
          ]
        },
        {
          text: 'JavaScript',
          collapsible: true,
          children: [
            '/docs/javascript/array',
            '/docs/javascript/dom',
            '/docs/javascript/domprops',
            '/docs/javascript/es6',
            '/docs/javascript/event',
          ]
        },
        {
          text: 'Vue',
          collapsible: true,
          children: [
            {
              text: 'Vue 原理',
              link: '/docs/vue/vueprinciple',
              sidebarDepth: 1,
            },
            {
              text: 'Vue computed计算属性',
              link: '/docs/vue/computed',
              sidebarDepth: 1,
            },
            {
              text: 'Vue 特殊用法',
              link: '/docs/vue/rareuser',
              sidebarDepth: 1,
            },
            {
              text: 'Vue 高级用法',
              link: '/docs/vue/usage',
              sidebarDepth: 1,
            },
            {
              text: 'Vue 异步组件',
              link: '/docs/vue/asyncComponent',
              sidebarDepth: 1,
            },

            {
              text: 'Vue 动态组件',
              link: '/docs/vue/component',
              sidebarDepth: 1,
            },
            {
              text: 'Vue 缓存组件',
              link: '/docs/vue/keepalive',
              sidebarDepth: 1,
            },
            {
              text: 'Vue mixin混合',
              link: '/docs/vue/mixin',
              sidebarDepth: 1,
            },
            {
              text: 'Vue 自定义v-model',
              link: '/docs/vue/vmodel',
              sidebarDepth: 1,
            },
            {
              text: 'Vue 插槽',
              link: '/docs/vue/vslot',
              sidebarDepth: 1,
            },

            {
              text: 'Vuex 辅助函数',
              link: '/docs/vue/vuex',
              sidebarDepth: 1,
            },
            {
              text: 'Vue Router',
              link: '/docs/vue/vuerouter',
              sidebarDepth: 1,
            },
          ]
        },
        {
          text: '其他',
          collapsible: true,
          children: [
            '/docs/other/vscodeplugins',
            '/docs/study/1'
          ]
        },
        {
          text: 'GitHub',
          collapsible: true,
          children: [
            '/docs/github/gituse',
            {
              text: 'github基本操作',
              link: '/docs/github/githubuse',
              sidebarDepth: 1,
            },
          ]
        },
      ]
    },
    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }),

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
};
