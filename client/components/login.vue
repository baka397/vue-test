<template>
    <div>
        <form @submit.prevent="submit">
            <p>用户名:<input type="text" v-el:username /></p>
            <p>密码:<input type="password" v-el:password /></p>
            <button type="submit">提交</button>
        </form>
    </div>
</template>

<script>
    export default {
        methods:{
            submit(){
                this.onSubmit(this.$els.username.value,this.$els.password.value);
            }
        },
        props: {
            onSubmit:{
              type: Function,
              required: true
            }
        }
    }
</script>