<template>
    <section class="loginWrap">
        <!-- 头部 -->
        <div class="headerWrap fix">
            <a href="javascript:" @click="go()" class="backBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
            <p class="fs34 orange">登录</p>
            <nuxt-link class="rightBtn" to="/register">注册</nuxt-link>
        </div>
        <div class="loginContent pad-Header">
            <img src="../assets/images/logo.png" class="block">
            <div class="inputWrap">
                <div class="inputItem">
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                    <input v-model="tel" type="tel" maxlength="11" placeholder="请输入手机号">
                </div>
                <div class="inputItem">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    <input v-model="password" :type="passwordType" maxlength="16" placeholder="请输入密码">
                    <i class="fa isShowPassword" aria-hidden="true" :class="showPassword" @click="showPasswordFunc"></i>
                </div>
                <div class="clearfix">
                    <nuxt-link class="fr forgetPassWord orange fs28" to="/forgetPassWord">忘记密码?</nuxt-link>
                </div>
            </div>
            <button type="button" class="loginBtn Cf fs32" @click="loginFunc">登录</button>
        </div>
        <!-- 第三方登录 -->
        <div class="otherLoginTit tc">
            <h4 class="C6 fs32">第三方登录</h4>
            <span class="block"></span>
        </div>
        <div class="otherLoginEnter tc">
            <a href="javascript:;"><i class="fa fa-weixin orange" aria-hidden="true"></i></a>
        </div>
    </section>
</template>
<script>
import {baseurl} from '~/plugins/url.js'
export default{
    head () {
        return {
            title: '登录',
            meta: [
                { hid: 'description', name: 'description', content: '请登录' }
            ]
        }
    },
    data(){
        return {
            phone:"",
            password:"",
            passwordType:'password',
            showPassword:'fa-eye-slash',
            //login data
            tel:'',
            password:'',
        }
    },
    middleware: 'auth',
    methods:{
        go(){
            this.$router.go(-1)
        },
        showPasswordFunc(){
            if(this.showPassword == 'fa-eye-slash'){
                this.showPassword = 'fa-eye'
                this.passwordType = 'text'
            }else{
                this.showPassword = 'fa-eye-slash'
                this.passwordType = 'password'
            }
        },
        //登录
        async loginFunc() {
            //登录校验
            let regPhoneNum = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if(this.tel == ''){
                this.$toast({
                    message: '请输入手机号',
                    position: 'bottom',
                    duration: 2000
                });
                return false
            }
            if(!regPhoneNum.test(this.tel)){
                this.$toast({
                    message: '请输入正确的手机号',
                    position: 'bottom',
                    duration: 2000
                });
                return false
            }
            if(this.password == ''){
                this.$toast({
                    message: '请输入密码',
                    position: 'bottom',
                    duration: 2000
                });
                return false
            }
            //登录方法
            try {
                await this.$store.dispatch('login', {
                  mobile: this.tel,
                  password: this.password,
                })
                this.tel = ''
                this.password = ''
                this.$router.go(-1)
            } catch (e) {
                console.log(e)
                const _msg = e.message
                this.$toast({
                    message: _msg,
                    position: 'bottom',
                    duration: 2000
                });
            }
        },
    }
}
</script>
<style scoped lang="scss">
.loginWrap{
    .loginContent{
        >img{
            margin:0 auto;
            width:2.4rem;
            height:2.4rem;
            padding: 1.33rem 0 1.6rem;
        }
        >.inputWrap{
            width:9.33rem;
            margin:0 auto;
            .inputItem{
                border:1px solid #eee;
                background: #fff;
                border-radius: 5px;
                margin-bottom:0.4rem;
                height:1.2rem;
                line-height:1.2rem;
                position: relative;
                &:last-child{
                    margin-bottom:0;
                }
                >i{
                    &.fa{
                        color:#ff5c00;
                        position:relative;
                    }
                    &.fa-mobile{
                        font-size: 0.9rem;
                        margin:0 0.3rem;
                        top:0.12rem;
                    }
                    &.fa-lock{
                        font-size: 0.7rem;
                        margin:0 0.28rem;
                        top:0.12rem;
                    }
                    &.isShowPassword{
                        position: absolute;
                        right:0.25rem;
                        font-size:0.6rem;
                        right:0.25rem;
                        top:0.33rem;
                    }

                }
                >input{
                    font-size:0.4rem;
                    color:#666;
                    width:7.8rem;
                    padding-left: 0.3rem;
                    border-left: 1px solid #eee;
                }
            }
        }
        .loginBtn{
            margin:0.8rem auto 0;
            display: block;
            width: 8.67rem;
            height: 1.2rem;
            border-radius: 1.2rem;
            background: url(../assets/images/header_bg.png);
            background-size: cover;
        }
    }
    /*第三方登录*/
    .otherLoginTit{
        position: relative;
        margin-top:0.8rem;
        >h4{
            width: 2.4rem;
            z-index: 1;
            background: #f4f4f4;
            margin:0 auto;
        }
        >span{
            height: 1px;
            position: absolute;
            width:9rem;
            background: #ddd;
            top: 0.25rem;
            left: 0.5rem;
            z-index: -1;
        }
    }
    .otherLoginEnter{
        margin-top:0.8rem;
        a{
            i{
                &.fa-weixin{
                    font-size:1.1rem;
                }
            }
        }
    }
}
</style>
