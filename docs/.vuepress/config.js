/*
 * Author  rhys.zhao
 * Date  2023-03-02 14:02:43
 * LastEditors  rhys.zhao
 * LastEditTime  2023-07-21 11:15:30
 * Description vuepress配置文件
 */

module.exports = {
  base: '/my-vuepress/',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/imgs/favicon.ico' }]],
  title: '这里是标题',
  description: '这里是标题描述',

  port: '8888',
  open: true,

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    // todo: 在这里修改你书写内容的logo
    logo: '/imgs/webpack-logo.svg',
    repo: 'RhysZhao/webpack-learn',
    repoLabel: '点亮⭐收藏',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '为该章节纠错',
    lastUpdated: '上次更新',
    search: true,
    navbar: [
      {
        text: '😶‍🌫️ 基础篇',
        link: '/base/'
      },
      {
        text: '😶‍🌫️ 进阶篇',
        link: '/senior/'
      },
      {
        text: '🤔 原理篇',
        link: '/origin/'
      }
    ],
    sidebar: {
      '/base/': [
        {
          text: '基础篇',
          children: [
            '/base/README.md'
            // todo: 在这里添加你基础篇的文章
          ]
        }
      ],
      '/senior/': [
        {
          text: '进阶篇',
          children: [
            '/senior/README.md'
            // todo: 在这里添加你进阶篇的文章
          ]
        }
      ],
      '/origin/': [
        {
          text: '原理篇',
          children: [
            '/origin/README.md'
            // todo: 在这里添加你原理篇的文章
          ]
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search'
          },
          '/zh/': {
            placeholder: '搜索'
          }
        }
      }
    ]
  ]
};
