<template>
    <section class="MineWrap">
        <div class="MineTop rel">
            <nuxt-link to="/" class="fa fa-cog abs" aria-hidden="true"></nuxt-link>
            <div class="headerImg rel">
                <img class="rel block" v-lazy="userinfo.avatar">
            </div>
            <h4 class="nickName fs30 rel Cf tc">{{userinfo.user_nicename}}</h4>
            <nuxt-link to="/" class="block signBtn fs24 abs Cf">签到有礼<i class="fa fa-angle-right rel" aria-hidden="true"></i></nuxt-link>
        </div>
        <ul class="clearfix mineNav">
            <li class="fl rel">
                <nuxt-link to="/" class="block">
                    <p class="tc C3 fs30">{{mineData.collpro}}</p>
                    <h4 class="fs24 C6 tc">商品收藏</h4>
                </nuxt-link>
            </li>
            <li class="fl rel">
                <nuxt-link to="/" class="block">
                    <p class="tc C3 fs30">{{mineData.collshop}}</p>
                    <h4 class="fs24 C6 tc">关注店铺</h4>
                </nuxt-link>
            </li>
            <li class="fl rel">
                <nuxt-link to="/" class="block">
                    <p class="tc C3 fs30">{{mineData.look}}</p>
                    <h4 class="fs24 C6 tc">浏览记录</h4>
                </nuxt-link>
            </li>
        </ul>
        <Footer/>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
import {baseurl} from '~/plugins/url.js'
export default{
    middleware: 'auth',
    scrollToTop:true,
    async asyncData({app}) {
        console.log(app.store.getters.userinfo)
        let mineData;
        await app.$axios.post(`${baseurl}/index.php/Api/User/usercount`,{token:app.store.getters.userinfo.token}).then(res=>{
            console.log(res.data)
            if(res.data.status == 1){
                mineData = res.data.data
            }else{
                this.$toast({
                    message: res.data.msg,
                    position: 'bottom',
                    duration: 2000
                });
            }
        }).catch(error=>{
            this.$toast({
                message: error,
                position: 'bottom',
                duration: 2000
            });
        })
        return {mineData}
    },
    computed:{
        ...mapGetters(['userinfo']),
    },
}
</script>
<style lang="scss" scoped>
.MineWrap{
    .MineTop{
        background: url('../assets/images/mineTop_bg.png') no-repeat;
        height:5.2rem;
        background-size: 100% 100%;
        a{
            &.fa-cog{
                color:#fff;
                font-size:0.6rem;
                top:0.25rem;
                right:0.25rem;
            }
        }
        .headerImg{
            width: 2.827rem;
            height: 2.827rem;
            background: #f8a146;
            border-radius: 50%;
            top: 1.2rem;
            margin:0 auto;
            >img{
                border-radius:50%;
                width: 2.6rem;
                height: 2.6rem;
                top: 0.1135rem;
                margin:0 auto;
            }
        }
        h4.nickName{
            top:1.4rem;
        }
        .signBtn{
            right: 0;
            top: 50%;
            height: 0.7rem;
            line-height: 0.7rem;
            margin-top: -0.35rem;
            width: 1.6rem;
            padding: 0 0.2rem 0 0.6rem;
            border-radius: 0.7rem 0 0 0.7rem;
            overflow: hidden;
            background:rgba(0, 0, 0, 0.4);
            i{
                top:0.05rem;
                margin-left:0.12rem;
                font-size:0.5rem;
            }
        }
    }
    ul.mineNav{
        background: #fff;
        li{
            width:33.33%;
            padding: 0.45rem 0;
            p{
                margin-bottom: 0.13rem;
            }
            &:after{
                content: "";
                width: 1px;
                height: 65%;
                display: block;
                background: #e3e3e2;
                top: 17.5%;
                right: 0;
                position: absolute
            }
            &:last-child:after{
                display: none;
            }
        }
    }
}
</style>
