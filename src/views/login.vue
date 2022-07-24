<template>
<div class="login">
    <div class="top"></div>
    <!-- <div class="little"></div> -->
    <div class="loginView">
        <div class="name">网易云音乐</div>
        <div class="phone">
            <label for="number">手机号:</label>
        <input type="number" name="" id="number" v-model="phone">
        </div>
        <div class="pwd">
            <label for="password">密码:</label>
        <input type="password" name="" id="password" v-model="password">
        </div>
        <button class="btn" @click="Login">一键登录</button>
    </div>
    <div class="bottom" ></div>
</div>
</template>

<script>
import {getUser} from '@/request/api/home.js'

export default {
    data(){
        return{
            phone:'',
            password:'',
        }
    },
    methods:{
        Login:async function(){
           let res = await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
           console.log(res);
           if(res.data.code === 200) {//返回的状态码为200 登录成功 跳转到个人页面
           this.$store.commit('updateIsLogin',true)//改变登录状态，当200时登录为真

           this.$store.commit('updateToken',res.data.token)//更改token值

           let result = await getUser(res.data.account.id)
           this.$store.commit('updateUser',result)
           console.log(result);//用户信息 
           this.$router.push('/')
           }else{
            alert("手机号或密码错误！")
            this.password = ''
           }
        }
    },
}
</script>

<style lang="less">
.login{
    position: relative;
    background-color: rgba(225, 224, 224, 0.371);
    .top{
    height: 1.2rem;
    background-color: rgb(177, 7, 7);
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
}
.little{
    position: absolute;
    height: .6rem;
    width: .8rem;
    background-color: rgb(236, 230, 197);
    border-radius: 50%;
    top: .9rem;
    left: 3.3rem;
}
.loginView{
    margin: 1rem 1.5rem 0;
    .name{
        font-size: .6rem;
        font-weight: 700;
        color: rgb(177, 7, 7);
        display: flex;
        justify-content: center;
    }
    .phone, .pwd {
        margin: .8rem 0;
        font-weight: 600;
        // font-size: .32rem;
        #number, #password {
            margin-top: .2rem;
            height: .4rem;
        }
    }
    .btn{
        margin-top: .8rem;
        width: 4rem;
        border-radius: .4rem;
        padding: .12rem;
        background-color: rgb(177, 7, 7);
        color: #fff;
        font-weight: 600;
        letter-spacing: .2rem;
        border: none;
    }
}
.bottom{
    background-color: rgb(177, 7, 7);
    margin-top: 1rem;
    height: 4rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}
}
</style>