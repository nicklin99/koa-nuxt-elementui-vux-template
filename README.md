# Nuxt.js 和 Koa 和 Element-ui 和 vux

> [KoaJS](http://koajs.com/) + [Nuxt.js](https://nuxtjs.org) = :zap:

基于 [nuxt-community/koa-template](https://github.com/nuxt-community/koa-template)组装的一个移动端h5和后台管理项目开始模板.

主要包

- vue
- element-ui
- vux
- koa
- node

特点

- 后台使用element-ui库
- h5使用vux ui库
- koa web开发框架
- 服务端渲染nuxt
- 开箱即可

## 安装

1.通过[vue-cli](https://github.com/vuejs/vue-cli) 安装

```bash
vue init nicklin99/koa-nuxt-elementui-vux-template <project-name>
cd <project-name> # 切换到项目目录
npm install
```

2.github安装

git clone仓库，没有git的先安装 git

```bash
git clone https://github.com/nicklin99/koa-nuxt-elementui-vux-template.git
npm install
```

> 确保 vue-cli >= 2.1 (vue -V).

## 快速开发

```bash
npm run link
```

符号连接项目node_modules到admin和h5,可以共享项目node_modules
使用的是 `ln -s`命令，windows 可能要更换成对应的命令

开发模式

h5 and admin

```bash
npm run dev
```

仅h5

```bash
npm run dev:h5
```

仅admin

```bash
npm run dev:admin
```

生产模式打包

- npm run build
- npm run build:h5
- npm run build:admin

生产模式部署

- npm run start
- npm run start:h5
- npm run start:admin

退出命令行终端

`ctrl+c`

## 命令

| 命令          | 说明                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| npm run dev   | 开发热加载koa服务器. h5 http://localhost:3001 admin http://localhost:3000 |
| npm run build | 生产环境打包编译生成，代码压缩生成js文件                                  |
| npm start     | 生产环境启动 koa 服务器                                                   |

构建包 backpack-core，零配置webpack打包带热刷新加载

## 文档

- [KoaJS](http://koajs.com/)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)

## 许可

- [KoaJS license](https://github.com/koajs/koa/blob/master/LICENSE)
- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)
