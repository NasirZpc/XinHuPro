<template>
    <section class="goodsStoreWrap">
        <!-- 头部搜索 -->
        <div class="headerWrap fix">
            <a href="javascript:" @click="go()" class="backBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
            <div class="rel">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input placeholder="请输入搜索内容" v-model="searchVal" disabled>
            </div>
        </div>
        <div class="goodsStoreContent pad-Header">
            <!-- tab -->
            <ul class="clearfix tab fix">
                <li class="fl fs32 C3 tc" :class="{active:isActive}" @click="tabFunc">商品</li>
                <li class="fl fs32 C3 tc" :class="{active:!isActive}" @click="tabFunc">店铺</li>
            </ul>
            <ul class="sort clearfix fix" v-show="isActive">
                <li class="fs28 C6 fl tc" :class="{active:curSort==1}" @click="sortFunc('1')">综合排序</li>
                <li class="fs28 C6 fl tc" :class="{active:curSort==2}" @click="sortFunc('2','2')">
                    <span>销量</span>
                    <span class="rel">
                        <i class="asc abs fa fa-sort-asc" aria-hidden="true" :class="{active:sort==1}"></i>
                        <i class="desc abs fa fa-sort-desc" aria-hidden="true" :class="{active:sort==2}"></i>
                    </span>
                </li>
                <li class="fs28 C6 fl tc" :class="{active:curSort==3}" @click="sortFunc('3','4')">
                    <span>评价</span>
                    <span class="rel">
                        <i class="asc abs fa fa-sort-asc" aria-hidden="true" :class="{active:sort==3}"></i>
                        <i class="desc abs fa fa-sort-desc" aria-hidden="true" :class="{active:sort==4}"></i>
                    </span>
                </li>
                <li class="fs28 C6 fl tc" :class="{active:curSort==4}" @click="sortFunc('4','6')">
                    <span>价格</span>
                    <span class="rel">
                        <i class="asc abs fa fa-sort-asc" aria-hidden="true" :class="{active:sort==5}"></i>
                        <i class="desc abs fa fa-sort-desc" aria-hidden="true" :class="{active:sort==6}"></i>
                    </span>
                </li>
            </ul>
            <ul class="clearfix goodsLists"
                v-infinite-scroll="loadMoreGoods"
                infinite-scroll-disabled="loadingMoreGoods"
                infinite-scroll-distance="10"
                v-show="isActive">
                <li v-for="(item,index) in goodsListsData" :key="index">
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
                <li class="more_loading" v-show="loadingMoreGoods">
                    <!-- <mt-spinner type="snake" color="#ff5c00" :size="18" v-show="!allLoadedGoods"></mt-spinner> -->
                    <img src="../assets/images/loading.gif" v-show="!allLoadedGoods"/>
                    <span v-show="allLoadedGoods" style="width:2rem;">已全部加载</span>
                </li>
            </ul>
            <ul class="clearfix storeLists"
                v-infinite-scroll="loadMoreStores"
                infinite-scroll-disabled="loadingMoreStores"
                infinite-scroll-distance="10"
                v-show="!isActive"
            >
                <li class="clearfix" v-for="(item,index) in storeListsData" :key="index">
                    <nuxt-link to="/" class="block clearfix rel">
                        <img v-lazy="item.shoppic" class="fl">
                        <h4 class="fl">{{item.shopname}}</h4>
                        <span class="block abs">进店</span>
                    </nuxt-link>
                </li>
                <li class="more_loading" v-show="loadingMoreStores">
                    <!-- <mt-spinner type="snake" color="#ff5c00" :size="18" v-show="!allLoadedGoods"></mt-spinner> -->
                    <img src="../assets/images/loading.gif" v-show="!allLoadedStores"/>
                    <span v-show="allLoadedStores" style="width:2rem;">已全部加载</span>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
import {baseurl} from '~/plugins/url.js'
export default{
    head () {
        return {
            title: '商品&店铺列表',
            meta: [
                { hid: 'description', name: 'description', content: '搜索你喜欢的商品和店铺' }
            ]
        }
    },
    async asyncData({app}) {
        let isActive
        if(app.context.query.type == 0){

            //商品
            isActive =true
            let goodsListsData
            // await app.$axios.post(`${baseurl}/index.php/Api/Product/getlist`,{productname:app.context.query.searchVal,pagesize:6,p:1}).then(res=>{
            //     goodsListsData = res.data.data.prolist
            // }).catch(error=>{
            //     this.$toast({
            //         message: error,
            //         position: 'bottom',
            //         duration: 2000
            //     });
            // })
            return {isActive}
        }else{
            //店铺
            isActive =false
            let storeListsData
            // await app.$axios.post(`${baseurl}/index.php/Api/Shop/searchshop`,{shopname:app.context.query.searchVal,pagesize:10,p:1}).then(res=>{
            //     storeListsData = res.data.data
            // }).catch(error=>{
            //     this.$toast({
            //         message: error,
            //         position: 'bottom',
            //         duration: 2000
            //     });
            // })
            return {isActive}
        }
    },
    data(){
        return {
            searchVal:'',
            type:'',//0商品  1店铺
            curSort:1,
            sort:'',//排序
            //商品列表
            allLoadedGoods:false,
            allLoadedStores:false,
            goodsPagesize:6,
            goodsPage:1,
            goodsListsData:[],
            storePagesize:10,
            storePage:1,
            storeListsData:[],
            //加载更多
            loadingMoreGoods:false,
            loadingMoreStores:false,
        }
    },
    scrollToTop:true,
    filters:{
        textNumFilter(val){
            if(val.length >=20){
                return val.slice(0,19) + "..."
            }else{
                return val
            }
        }
    },
    methods:{
        go(){
            this.$router.go(-1);
        },
        clearFunc(){
            this.searchVal = ''
        },
        tabFunc(){
            this.isActive = !this.isActive
            if(this.isActive && this.goodsListsData.length == 0){
                this.goodsPage = 1
                this.loadMoreGoods()
            }else if(!this.isActive && this.storeListsData.length == 0){
                this.storePage = 1
                this.loadMoreStores()
            }
        },
        //排序
        sortFunc(val,sort){
            this.curSort = val
            if(val == 2){
                if(this.sort ==sort){
                    this.sort =1
                }else{
                    this.sort =2
                }
            }else if(val == 3){
                if(this.sort ==sort){
                    this.sort =3
                }else{
                    this.sort =4
                }

            }else if(val == 4){
                if(this.sort ==sort){
                    this.sort =5
                }else{
                    this.sort =6
                }

            }else if(val == 1){
                this.sort = ''
            }
            this.allLoadedGoods = false
            this.goodsListsData = []
            this.goodsPage = 1
            this.loadMoreGoods()
        },
        //上拉加载更多
        //加载更多商品
        loadMoreGoods() {
            if(this.isActive){
                this.loadingMoreGoods = true
                setTimeout(()=>{
                    this.$axios.post(`${baseurl}/index.php/Api/Product/getlist`,{productname:this.searchVal,pagesize:this.goodsPagesize,p:this.goodsPage,token:this.$store.getters.token,sort:this.sort}).then(res=>{
                        if(res.data.data.prolist && res.data.data.prolist.length){
                            for(var i=0;i<res.data.data.prolist.length;i++){
                                this.goodsListsData.push(res.data.data.prolist[i])
                            }
                            this.loadingMoreGoods = false
                            this.goodsPage++
                            if(res.data.data.prolist.length<this.goodsPagesize){
                                this.loadingMoreGoods = true
                                this.allLoadedGoods = true
                            }
                        }else{
                            this.loadingMoreGoods = true
                            this.allLoadedGoods = true
                        }
                    }).catch(error=>{
                        this.$toast({
                            message: error,
                            position: 'bottom',
                            duration: 2000
                        });
                    })

                },800)
            }
        },
        //上拉加载店铺
        loadMoreStores() {
            if(!this.isActive){
                this.loadingMoreStores = true
                setTimeout(()=>{
                    this.$axios.post(`${baseurl}/index.php/Api/Shop/searchshop`,{shopname:this.searchVal,pagesize:this.storePagesize,p:this.storePage}).then(res=>{
                        if(res.data.data && res.data.data.length){
                            for(var i=0;i<res.data.data.length;i++){
                                this.storeListsData.push(res.data.data[i])
                            }
                            this.loadingMoreStores = false
                            this.storePage++
                            if(res.data.data.length<this.storePagesize){
                                this.loadingMoreStores = true
                                this.allLoadedStores = true
                            }
                        }else{
                            this.loadingMoreStores = true
                            this.allLoadedStores = true
                        }
                    }).catch(error=>{
                        this.$toast({
                            message: error,
                            position: 'bottom',
                            duration: 2000
                        });
                    })
                },800)
            }
        }
    },
    created(){
        this.searchVal = this.$route.query.searchVal
        this.type = this.$route.query.type
    }
}
</script>
<style lang="scss" scoped>
::-webkit-input-placeholder { color:#fff; }
.goodsStoreWrap{
    .headerWrap{
        >div{
            width:80%;
            height:0.853rem;
            margin-top:0.1535rem;
            left:1rem;
            background: #ff8f45;
            border-radius: 0.853rem;
            line-height: 0.853rem;
            >i{
                &.fa-search{
                    color:#fff;
                    font-size:0.5rem;
                    position:relative;
                    top:0rem;
                    left:0.22rem;
                }
            }
            >input{
                color:#fff;
                margin-left:0.3rem;
                height:100%;
                width:6.7rem;
            }
        }
        >button{
            background:none;
            color:#fff;
            right:0.25rem;
            top:0.27rem;
        }
    }
    .goodsStoreContent{
        ul.tab{
            background: #fff;
            width:100%;
            top:1.15rem;
            left:0;
            z-index:1;
            box-shadow: 0px 5px 10px #999;
            li{
                width: 50%;
                height: 16px;
                height: 1rem;
                line-height: 16px;
                line-height: 1rem;
                border-bottom: 2px solid #fff;
                &.active{
                    color: #ff5c00;
                    border-color: #ff5c00;
                }
            }
        }
        ul.sort{
            background: #fff;
            width:100%;
            top:2.2rem;
            left:0;
            z-index:1;
            box-shadow: 0px 5px 10px #999;
            li{
                width:25%;
                height:1rem;
                line-height: 1rem;
                position:relative;
                &:after{
                    content:"";
                    width:1px;
                    height:0.6rem;
                    background: #ddd;
                    display: block;
                    top:0.2rem;
                    right:0;
                    position:absolute;
                }
                &:last-child:after{
                    display: none;
                }
                span{
                    display: inline-block;

                    i{
                        color:#999;
                    }
                    &:nth-of-type(2n){
                        top:-0.28rem;
                        right:-0.25rem;
                    }
                }
                &.active{
                    color: #ff5c00;
                    span{
                        i{
                            &.active.desc{
                                color:#ff5c00;
                            }
                            &.active.asc{
                                color:#ff5c00;
                            }
                        }
                    }
                }
            }
        }
        ul.goodsLists{
            background: #f4f4f4;
            top:2.1rem;
            left:0;
            position: relative;
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
                &:last-child{
                    background: none;
                    width:100%;
                    text-align: center;
                    margin-left:0;
                    margin-bottom:0;
                    span{
                        text-align: center;
                        display: block;
                        width:28px;
                        margin:0 auto;
                        height:1rem;
                        line-height: 1rem;
                    }
                    >img{
                        width:40px;
                    }
                }
            }
        }
        ul.storeLists{
            position:relative;
            top:1.35rem;
            left:0;
            width:100%;
            li{
                a{
                    padding:0.25rem;
                    background: #fff;
                    >img{
                        width:1.4rem;
                        height:1.4rem;
                        border-radius: 3px;
                    }
                    >h4{
                        font-size:0.427rem;
                        color:#666;
                        margin-left:0.25rem;
                    }
                    >span{
                        width:1.4rem;
                        height:0.7rem;
                        line-height: 0.7rem;
                        text-align: center;
                        border:1px solid #ff5c00;
                        color:#ff5c00;
                        border-radius:0.8rem;
                        top:0.25rem;
                        right:0.25rem;
                    }
                }
                &:last-child{
                    background: none;
                    width:100%;
                    text-align: center;
                    margin-left:0;
                    margin-bottom:0;
                    span{
                        text-align: center;
                        display: block;
                        width:28px;
                        margin:0 auto;
                        height:1rem;
                        line-height: 1rem;
                    }
                    >img{
                        width:40px;
                    }
                }
            }
        }
    }
}
</style>
