Vue-test
=

## 介绍

这是一个迁移自[react-test](https://github.com/baka397/react-test)的vue示例项目  
该demo展示了异步登录,页面检测登录自动跳转,不同页面渲染等相关操作.  
redux+revue作为状态管理,vue-router作为路由,使用vue-loader编译`*.vue`组件  
须安装[webpack](https://github.com/webpack/webpack),[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)

## 目录结构
```
webpack.config.js //webpack配置文件
app.js                   //express应用程序
-views                  //express模板
-public                 //静态文件夹
-client                  //客户端项目文件夹
--app.js                //入口文件
--config.js            //配置文件
--router.js            //路由文件
--store.js              //状态管理文件
---actions            //redux action列表
---reducers          //redux reducer列表
---components    //vue组件
---pages              //页面组件
```

##如何运行
```
npm install
webpack
npm start
```