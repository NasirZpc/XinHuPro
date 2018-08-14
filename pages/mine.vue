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
        <!-- 我的资产 -->
        <div class="minTit">
            <h4 class="C6 fs28">我的资产</h4>
        </div>
        <ul class="myProperty clearfix">
            <li class="fl">
                <nuxt-link to="/" class="block clearfix">
                    <i class="icon i_property_1 fl"></i>
                    <div class="fl">
                        <h4 class="fs32 C3 tc">优惠券</h4>
                        <p class="fs24 tc">{{mineData.couponcount}}张可用</p>
                    </div>
                </nuxt-link>
            </li>
            <li class="fl">
                <nuxt-link to="/" class="block clearfix">
                    <i class="icon i_property_2 fl"></i>
                    <div class="fl">
                        <h4 class="fs32 C3 tc">奖励金</h4>
                        <p class="fs24 tc">¥{{mineData.rewardgold}}</p>
                    </div>
                </nuxt-link>
            </li>
        </ul>
        <!-- 我的订单 -->
        <div class="minTit clearfix">
            <h4 class="C6 fs28 fl">商品</h4>
            <nuxt-link to="/" class="fr block C9 fs28">
                所有订单
                <i class="fa fa-angle-right rel" aria-hidden="true"></i>
            </nuxt-link>
        </div>
        <ul class="clearfix mineOrder">
            <li class="fl rel">
                <nuxt-link to="/" class="block tc">
                    <i class="icon i_order1"></i>
                    <p class="tc fs26 C6">待付款</p>
                </nuxt-link>
            </li>
            <li class="fl rel">
                <nuxt-link to="/" class="block tc">
                    <i class="icon i_order2"></i>
                    <p class="tc fs26 C6">待发货</p>
                </nuxt-link>
            </li>
            <li class="fl rel">
                <nuxt-link to="/" class="block tc">
                    <i class="icon i_order3"></i>
                    <p class="tc fs26 C6">待收货</p>
                </nuxt-link>
            </li>
            <li class="fl rel">
                <nuxt-link to="/" class="block tc">
                    <i class="icon i_order4"></i>
                    <p class="tc fs26 C6">待评价</p>
                </nuxt-link>
            </li>
            <li class="fl rel">
                <nuxt-link to="/" class="block tc">
                    <i class="icon i_order5"></i>
                    <p class="tc fs26 C6">退货/退款</p>
                </nuxt-link>
            </li>
        </ul>
        <ul class="mineToolNav">
            <li>
                <nuxt-link to="/" class="block clearfix">
                    <i class="icon mineInfo rel fl"></i>
                    <h4 class="C6 fs28 fl">个人信息修改</h4>
                    <i class="fa fa-angle-right rel fr C9" aria-hidden="true"></i>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/" class="block clearfix">
                    <i class="icon sysMsg rel fl"></i>
                    <h4 class="C6 fs28 fl">系统消息</h4>
                    <i class="fa fa-angle-right rel fr C9" aria-hidden="true"></i>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/" class="block clearfix">
                    <i class="icon addrManage rel fl"></i>
                    <h4 class="C6 fs28 fl">收货地址管理</h4>
                    <i class="fa fa-angle-right rel fr C9" aria-hidden="true"></i>
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
        let mineData;
        await app.$axios.post(`${baseurl}/index.php/Api/User/usercount`,{token:app.store.getters.userinfo.token}).then(res=>{
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
        margin-bottom:0.26rem;
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
    .minTit{
        border-bottom:1px solid #f4f4f4;
        padding:0.25rem;
        background:#fff;
        a>i{
            &.fa-angle-right{
                top:0.05rem;
                font-size:0.55rem;
                margin-left: 0.06rem;
            }
        }
    }
    ul.myProperty{
        background:#fff;
        margin-bottom:0.26rem;
        li{
            width:50%;
            a{
                padding:0.3rem;
                i{
                    margin-left:0.8rem;
                    background-size: 4.5rem auto;
                    width: 1.2rem;
                    height: 1.2rem;
                    &.i_property_1{
                        background-position: 0rem -18.99rem;
                    }
                    &.i_property_2{
                        background-position: -1.88rem -18.99rem;
                    }
                }
                >div{
                    width:2.4rem;
                    >p{
                        color: #f8a022;
                        margin-top: 0.1rem;
                    }
                }
            }
        }
    }
    ul.mineOrder{
        background:#fff;
        margin-bottom:0.26rem;
        li{
            width:20%;
            a{
                padding: 0.2rem 0;
                i{
                    background-size: 4rem auto;
                    width: 0.85rem;
                    height: 0.85rem;
                    &.i_order1{
                        background-position: 0.15rem -9.1rem;
                    }
                    &.i_order2{
                        background-position: -0.9rem -9.1rem;
                    }
                    &.i_order3{
                        background-position: -2.1rem -9.1rem;
                    }
                    &.i_order4{
                        background-position: -3.21rem -9.1rem;
                    }
                    &.i_order5{
                        background-position: 0.12rem -10.1rem;
                    }
                }
                p{
                    padding-top:0.13rem;
                }
            }
        }
    }
    ul.mineToolNav{
        li{
            background:#fff;
            border-bottom:1px solid #f4f4f4;
            &:last-child{
                border-bottom:none;
            }
            a{
                padding:0.35rem;
                >h4{
                    line-height:0.68rem;
                }
                i.icon{
                    margin-right: 0.24rem;
                    width: 0.68rem;
                    height: 0.69rem;
                    background-size: 4rem auto;
                    top:-0.01rem;
                    &.mineInfo{
                        background-position: -3.275rem -6.285rem;
                    }
                    &.sysMsg{
                        background-position: -1.03rem -10.22rem;
                    }
                    &.addrManage{
                        background-position: -2.18rem -10.22rem;
                    }

                }
                i.fa-angle-right{
                    font-size:0.6rem;
                    top:0.05rem;
                }
            }
        }
    }
}
</style>
