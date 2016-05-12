/**
 * app
 */

//加载依赖
import VueRouter from 'vue-router';

//组件列表
import Login from './pages/login.vue';
import Dashboard from './pages/dashboard.vue';
import NotFound from './pages/not_found.vue';

//生成路由
var router = new VueRouter({
    history:true
});

router.map({
    '/':{
      component: Login
    },
    '/dashboard/':{
        component: Dashboard
    },
    '/*any':{
        component: NotFound
    }
});
export default router;