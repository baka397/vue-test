<template>
    <div>
        <p v-if="login.msg">{{login.msg}}</p>
        <p>登录页面,当前登录状态{{login.status}}</p>
        <login :on-submit="submit"></login>
    </div>
</template>
<script>
    import store from '../store';
    //加载action
    import {authLoginStatus} from '../actions/auth';
    import {loginPost} from '../actions/login';

    //加载组件
    import Login from '../components/login.vue';
    
    export default {
        components:{
            Login
        },
        data() {
            return {
                login:this.$select('login')
            }
        },
        methods:{
            submit(username,password){
                store.dispatch(loginPost({
                    name:username,
                    password:password
                }));
            }
        },
        created(){
            store.dispatch(authLoginStatus(this.login.status,false));
        }
    }
</script>