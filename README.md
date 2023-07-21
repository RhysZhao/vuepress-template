<!--
 * Author  rhys.zhao
 * Date  2023-03-02 19:47:11
 * LastEditors  rhys.zhao
 * LastEditTime  2023-07-21 11:10:39
 * Description
-->

# vuepress 模板

使用 vuepress 配置的一个 markdown 码字模板。

内置了 github 工作流，推送即打包，并把打包内容放到 `deploy-page` 分支。

在 github pages 里添加分支 `deploy-page` 即可部署上线。

## 使用

可以直接克隆项目使用。

也可以使用个人的脚手架工具 [happy-react-cli](https://www.npmjs.com/package/happy-react-cli) 命令生成。

```shell
npx happy-react-cli init my-vuepress
```

然后选择 `vuepress` 模板即可。

## 项目目录

```js
vuepress-template
├─ docs               // 文档目录，这里内置了三个文件夹，分别是基础篇base, 进阶篇senior, 原理篇 origin
    .vuepress
    ├─ public         // public目录，里面的内容会直接打包到根目录
    │  └─ imgs
    │     ├─ favicon.ico
    │     └─ webpack-logo.svg
    └─ config.js      // vuepress配置文件
│  ├─ base
│  │  └─ README.md
│  ├─ images
│  ├─ origin
│  │  └─ README.md
│  ├─ senior
│  │  └─ README.md
│  └─ README.md
├─ LICENSE
├─ README.md
├─ package-lock.json
└─ package.json
```
