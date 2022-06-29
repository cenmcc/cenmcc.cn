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
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png` //icon
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
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
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
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
      avatar: "/img/avatar.jpeg",
      description: "个人描述",
      sns: {
        github: "cenmc",
        email: "15565555045@163.com",
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(196, 176, 131, .1)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/5.jpg"
      }
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },
    // locales: {
    //   "/": {
    //     navbar: navbar.en,
    //     sidebar: sidebar.en
    //   },
    // },
    themePlugins: {
      // only enable git plugin in production mode
      // git: isProd,
      mdPlus: {
        all: true
      },
      // ga: "G-HCQSX53XFG",
      // ba: "75381d210789d3eaf855fa16246860cc",
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
        text: "标签",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "文档",
        link: "/docs/",
        icon: "fa-book"
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
          text: 'CSS',
          children: [
            '/docs/css/layout',
            '/docs/css/overflow',
            '/docs/css/scss',
          ]
        },
        {
          text: 'JavaScript',
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
          children: [
            '/docs/vue/computed',
            '/docs/vue/rareuser',
            '/docs/vue/usage',
          ]
        },
        {
          text: '其他',
          children: [
            '/docs/other/vscodeplugins',
          ]
        }
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
