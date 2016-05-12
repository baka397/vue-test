<template>
    <div>
        <p>登录页面,当前登录状态{{login.status}},登录人{{login.info.name}},登录角色{{login.info.role}}</p>
        <button type="button" @click.prevent="logout">退出</button>
    </div>
</template>
<script>
    import store from '../store';
    //加载action
    import {authLoginStatus} from '../actions/auth';
    import {logoutPost} from '../actions/login';
    
    export default {
        data() {
            return {
                login:this.$select('login')
            }
        },
        methods:{
            logout(){
                store.dispatch(logoutPost());
            }
        },
        created(){
            store.dispatch(authLoginStatus(this.login.status,true));
        }
    }
</script>