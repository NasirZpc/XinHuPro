<template>
    <section class="indexWrap">
        <!-- 首页搜索 -->
        <div class="headerWrap fix">
            <nuxt-link to="/search">
                <i class="fa fa-search" aria-hidden="true"></i>
                <span class="Cf fs36">请输入关键字</span>
            </nuxt-link>
        </div>
        <div class="contentWrap pad-Header">
            <!-- 首页轮播 -->
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="banner in banners">
                        <img :src="banner.slide_pic">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <!-- 一级分类 -->
            <ul class="clearfix firstAssort">
                <li v-for="(item,index) in assortData" :key="index">
                    <nuxt-link to="" :id="item.id" :activityid="item.activityid" :type="item.type">
                        <img v-lazy="item.pic">
                        <p class="ellips C6 tc">{{item.name}}</p>
                    </nuxt-link>
                </li>
            </ul>
            <!-- 专题 -->
            <ul class="clearfix specialLists">
                <li v-for="(item,index) in specialData" :key="index" >
                    <nuxt-link to="/" :id="item.id" :cid="item.cid" >
                        <img v-lazy="item.img">
                        <p class="ellips C6 tc">{{item.title}}</p>
                    </nuxt-link>
                </li>
            </ul>
            <!-- 大家都在买 -->
            <div class="index_tit tc rel">
            	<h4 class="fs30 abs">
                    <i class="icon i_hot"></i>
                    大家都在买
                </h4>
            	<span class="abs"></span>
            </div>
            <ul class="clearfix evboybuyLists">
                <li v-for="(item,index) in evboybuyData" :key="index">
                    <nuxt-link to="/" >
                        <img v-lazy="item.pic">
                        <div>
                            <h4 class="C6 fs30">{{item.productname | textNumFilter}}</h4>
                            <p class="tr">{{item.placedelivery}}</p>
                            <div class="clearfix">
                                <p>¥{{item.currentprice}}</p>
                                <span>{{item.sale}}件已售</span>
                            </div>
                        </div>
                    </nuxt-link>
                </li>
            </ul>
            <!-- 店铺推荐 -->
            <div class="index_tit_sec clearfix">
    			<h4 class="fs30 C3 fl">店铺推荐<i class="icon i_shop"></i></h4>
    			<nuxt-link class="fr C6 fs22" to="/">更多&gt;</nuxt-link>
    		</div>
            <ul class="storeLists clearfix">
                <li v-for="(item,index) in shoplisData" :key="index" class="clearfix">
                    <img v-lazy="item.headimg">
                    <div>
                        <h4 class="fs26 C6 ellips">{{item.shopname}}</h4>
                        <p class="fs22 C9">{{item.goods}}件商品</p>
                        <p class="fs22 C9">{{item.sales}}件已售</p>
                    </div>
                </li>
            </ul>
            <!-- 猜你喜欢 -->
            <div class="index_tit tc rel guessLike_tit">
            	<h4 class="fs30 abs">
                    <i class="icon i_like"></i>
                    猜你喜欢
                </h4>
            	<span class="abs"></span>
            </div>
            <ul class="clearfix guessLikeLists"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loadingMore"
                infinite-scroll-distance="10">
                <li v-for="(item,index) in guesslikeData" :key="index">
                    <nuxt-link to="/" >
                        <img v-lazy="item.pic">
                        <div>
                            <h4 class="C6 fs30">{{item.productname | textNumFilter}}</h4>
                            <p class="tr">{{item.placedelivery}}</p>
                            <div class="clearfix">
                                <p>¥{{item.currentprice}}</p>
                                <span>{{item.sale}}件已售</span>
                            </div>
                        </div>
                    </nuxt-link>
                </li>
                <li class="more_loading" v-show="loadingMore">
                    <!-- <mt-spinner type="snake" color="#ff5c00" :size="18" v-show="!allLoaded"></mt-spinner> -->
                    <img src="../assets/images/loading.gif" v-show="!allLoaded"/>
                    <span v-show="allLoaded">已全部加载</span>
                </li>
            </ul>
        </div>
        <Footer/>
    </section>
</template>
<script>
import {baseurl} from '~/plugins/url.js'
import { mapGetters } from 'vuex'
import errorImg from '../assets/images/error.png'
import loadingImg from '../assets/images/loading.gif'
export default {
    data () {
        return {
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            //猜你喜欢加载更多
            loadingMore:false,
            allLoaded:false,
            pagesize:6,
            page:2,
            token:''
        }

    },
    async asyncData({app}) {
        let [bannerRes, assortRes,specialRes,evboybuyRes,shoplisRes,guesslikeRes] = await Promise.all([
            app.$axios.get(`${baseurl}/index.php/Api/Product/getbanner`),//轮播图
            app.$axios.get(`${baseurl}/index.php/Api/Product/gethomeactivity`),//商品一级分类
            app.$axios.get(`${baseurl}/index.php/Product/getspecial`),//获取专题列表
            app.$axios.get(`${baseurl}/index.php/Product/evboybuy`),//大家都在买
            app.$axios.post(`${baseurl}/index.php/Api/Shop/shoplist`,{isindex:1,pagesize:4,p:1}),//店铺推荐
            app.$axios.post(`${baseurl}/index.php/User/guesslike`,{pagesize:6,p:1,token:''}),//猜你喜欢
        ])
        let banners = bannerRes.data.data.banner
        let assortData = assortRes.data.data
        let specialData = specialRes.data.data.special
        let evboybuyData = evboybuyRes.data.data
        let shoplisData = shoplisRes.data.data
        let guesslikeData = guesslikeRes.data.data.guesslist
        return {banners,assortData,specialData,evboybuyData,shoplisData,guesslikeData}
    },
    filters:{
        textNumFilter(val){
            if(val.length >=20){
                return val.slice(0,19) + "..."
            }else{
                return val
            }
        }
    },
    scrollToTop:true,//判定渲染页面前是否需要将当前页面滚动至顶部
    methods:{
        //上拉加载更多
        loadMore() {
            this.loadingMore = true
            setTimeout(()=>{
                this.$axios.post(`${baseurl}/index.php/User/guesslike`,{pagesize:this.pagesize,p:this.page}).then(res=>{
                    if(res.data.data.guesslist && res.data.data.guesslist.length){
                        for(var i=0;i<res.data.data.guesslist.length;i++){
                            this.guesslikeData.push(res.data.data.guesslist[i])
                        }
                        this.loadingMore = false
                        this.page++
                    }else{
                        this.loadingMore = true
                        this.allLoaded = true
                    }

                })
            },800)
        }
    },
    mounted() {
        this.mySwiper.slideTo(3, 1000, false)
    }
}
</script>
<style scoped lang="scss">
    .indexWrap{
        background: #fff;
        /*首页头部*/
        .headerWrap{
            a{
                text-align: center;
                display:block;
                width:90%;
                height:0.853rem;
                margin:0 auto;
                line-height: 0.853rem;
                margin-top:0.1535rem;
                border-radius:0.853rem;
                background:#ff8f45;
                i.fa-search{
                    font-size:0.5rem;
                    color:#fff;
                    margin-right:0.2rem;
                }
            }
        }
        /*首页内容*/
        .contentWrap{
            //首页轮播
            .swiper-container{
                img{
                    width:100%;
                    height:100%;
                }
            }
            //一级分类
            ul.firstAssort{
                padding-top:0.25rem;
                li{
                    float: left;
                    width:20%;
                    padding:0 0 0.25rem;
                    a{
                        display: block;
                        padding:0 15%;
                        img{
                            width:100%;
                            height:1.4rem;
                        }
                        P{
                            padding-top:0.2rem;
                            font-size: 0.34rem;
                        }
                    }
                }
            }
            //专题
            ul.specialLists{
                padding-top:0.3rem;
                li{
                    float: left;
                    width:25%;
                    >a{
                        display: block;
                        padding:0 8%;
                        img{
                            width:100%;
                            height:2.1rem;
                        }
                        p{
                            padding-top:0.2rem;
                            font-size: 0.34rem;
                        }
                    }
                }
            }
            //大家都在买
            .index_tit{
                margin-top:0.5rem;
                padding:0.3rem 0;
                height:0.8rem;
                h4{
                    margin:0 auto;
                    width: 3rem;
                    color: #ff5c00;
                    background: #fff;
                    z-index: 2;
                    top:0.36rem;
                    left:3.5rem;
                    i{
                        position: relative;
                        top:-0.05rem;
                    }
                }
                span{
                    width: 4rem;
                    height: 1px;
                    background: #ff5c00;
                    top: 45%;
                    left: 50%;
                    margin-left: -2rem;
                    z-index:1;
                }
                &.guessLike_tit{
                    margin-top:0.1rem;
                    i{
                        top:-0.04rem;
                    }
                }
            }
            ul.evboybuyLists,ul.guessLikeLists{
                background: #f4f4f4;
                padding-top: 0.2rem;
                li{
                    float: left;
                    width:49.5%;
                    margin-bottom:0.2rem;
                    // box-shadow:0px 5px 10px #eee;
                    background: #fff;
                    a{
                        display: block;
                        img{
                            width:100%;
                            height:4.9rem;
                        }
                        >div{
                            border:1px solid #f3f1f1;
                            border-top:none;
                            padding:0.2rem 0.226rem;
                            >p{
                                margin-top:0.1rem;
                                font-size:0.3rem;
                                color:#999;
                            }
                            >div{
                                margin-top:0.1rem;
                                p{
                                    float: left;
                                    font-size:0.4rem;
                                    color:#ff5c00;
                                }
                                span{
                                    float: right;
                                    color:#666;
                                    font-size:0.34rem;
                                }
                            }
                        }
                    }
                    &:nth-of-type(2n){
                        margin-left:1%;
                    }
                }
            }
            //店铺推荐
            .index_tit_sec{
                padding:0.5rem 0.25rem 0.1rem;
                h4{
                    i{
                        position: relative;
                        top:-0.05rem;
                    }
                }
                a{
                    position: relative;
                    top:0.08rem;
                }
            }
            ul.storeLists{
                padding:0 0.25rem 0.25rem;
                li{
                    float: left;
                    margin-top:0.2rem;
                    img{
                        width:1.7rem;
                        height:1.7rem;
                        float: left;
                        margin-right:0.2rem;
                    }
                    >div{
                        float: left;
                        width:2.8rem;
                        h4{
                            width:100%;
                            margin-bottom:0.1rem;
                            margin-top:0.08rem;
                        }
                        p{
                            &:nth-of-type(1){
                                margin-bottom:0.1rem;
                            }
                        }
                    }
                }
            }
            //猜你喜欢
            ul.guessLikeLists{
                //上拉加载动画
                li:last-child{
                    background: none;
                    width:100%;
                    text-align: center;
                    span{
                        text-align: center;
                        display: block;
                        width:28px;
                        margin:0 auto;
                    }
                    >img{
                        width:40px;
                    }
                }
            }

        }
    }
</style>
