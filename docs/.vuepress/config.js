module.exports = {
    title: 'Fly in Code',
    description: 'FlyFly, in code!',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
      locales: {
        '/': {
          logo: '/assets/img/logo.png',
          // 多语言下拉菜单的标题
          selectText: '选择语言',
          // 该语言在下拉菜单中的标签
          label: '简体中文',
          // 编辑链接文字
          editLinkText: '在 GitHub 上编辑此页',
          // Service Worker 的配置
          serviceWorker: {
            updatePopup: {
              message: "发现新内容可用.",
              buttonText: "刷新"
            }
          },
          // 当前 locale 的 algolia docsearch 选项
          algolia: {},
          nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '嵌套', link: '/nested/' },
            { text: 'External', link: 'https://www.baidu.com', target:'_blank', rel:'' },
          ],
          sidebar: [
            {
                title: 'Guide',
                collapsable: false,
                children: ['/guide/']
            },
            {
              title: '样例',
              collapsable: false,
              children: ['/sample/']
          }
          ],
          sidebarDepth: 2,
        },
        '/en/': {
          selectText: 'Languages',
          label: 'English',
          ariaLabel: 'Languages',
          editLinkText: 'Edit this page on GitHub',
          serviceWorker: {
            updatePopup: {
              message: "New content is available.",
              buttonText: "Refresh"
            }
          },
          algolia: {},
          nav: [
            { text: 'Home', link: '/en/' },
            { text: 'Guide', link: '/en/guide/' },
            { text: 'Nested', link: '/en/nested/', ariaLabel: 'Nested' },
            //{ text: 'External', link: 'https://www.baidu.com', target:'_self', rel:'' },
            { text: 'External', link: 'https://www.baidu.com', target:'_blank', rel:'' },
          ],
          sidebar: [
            {
                title: 'Guide',
                collapsable: false,
                children: ['/en/guide/']
            }
          ],
          sidebarDepth: 2,
          displayAllHeaders: true, // 默认值：false
        }
      }
    },
    // themeConfig: {
    //     nav: [
    //       { text: 'Home', link: '/' },
    //       { text: 'Guide', link: '/guide/' },
    //       {
    //         text: 'Languages1',
    //         items: [
    //           { text: 'Chinese', link: '/language/chinese' },
    //           { text: 'English', link: '/language/english' }
    //         ]
    //       },
    //       { text: 'External', link: 'https://www.baidu.com' },
    //     ],
    //     sidebarDepth: 2,
    //     sidebar: [
    //     {
    //         title: 'Guide',
    //         collapsable: false,
    //         children: ['/guide/']
    //     }         
    //     ]
    // },
    base: '/press-retail/',
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        title: '零售技术',
        description: '零售领域用到的技术'
      },
      '/en/': {
        lang: 'en-US',
        title: 'Retail Press',
        description: 'Retail related technical press'
      }
    },
}