/**
 * app
 */

//加载依赖
import Router from './router';
import store from './store';

//组件列表
import Layout from './pages/layout.vue';
import Login from './pages/login.vue';

//设置根元素
var App = Layout;

Router.start(App, '#page');