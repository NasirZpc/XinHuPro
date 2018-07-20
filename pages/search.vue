<template>
    <section class="serchWrap">
        <!-- 头部搜索 -->
        <div class="headerWrap fix">
            <a href="javascript:" @click="go()" class="backBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
            <div class="rel">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input placeholder="请输入搜索内容" v-model="searchVal">
                <i class="fa fa-times-circle" aria-hidden="true" @click="clearFunc"></i>
            </div>
            <button class="abs fs34" @click="searchFunc">搜索</button>
        </div>
        <!-- 搜索内容 -->
        <div class="searchContent pad-Header">
            <ul class="searchTab clearfix">
                <li class="fl fs32 C3 tc" :class="{active:isActive}" @click="tabFunc">商品</li>
                <li class="fl fs32 C3 tc" :class="{active:!isActive}" @click="tabFunc">店铺</li>
            </ul>
            <div class="histroyLists">
                <li v-for="(item,index) in histroyData">{{item.searchVal}}</li>
            </div>
        </div>
    </section>
</template>
<script>
// import { Toast } from 'mint-ui';
export default{
    head () {
        return {
            title: '信户-搜索',
            meta: [
                { hid: 'description', name: 'description', content: '搜索你喜欢的商品和店铺' }
            ]
        }
    },
    data(){
        return {
            isActive:true,
            searchVal: "",
            type:0,
            histroyData:[],
        }
    },
    methods:{
        go(){
            sessionStorage.removeItem('searchVal')
            sessionStorage.removeItem('searchType')
            this.$router.go(-1);
        },
        tabFunc(){
            this.isActive = !this.isActive
        },
        searchFunc(){
            if(this.searchVal == ''){
                this.$toast({
                    message: '请输入搜索内容',
                    position: 'bottom',
                    duration: 2000
                });
                return false
            }
            if(this.isActive){//搜索商品
                this.type=0
            }else{//搜索店铺
                this.type=1
            }
            // this.histroyData.push({searchVal:this.searchVal,searchType:this.type})
            const _histroyData = []
            if(this.histroyData.length){
                const obj = {}
                for(var i=0;i<this.histroyData.length;i++){
                    if(!obj[this.histroyData[i]]){
                        _histroyData.push(this.histroyData[i])
                        obj[this.histroyData[i]] = true
                    }
                }
            }
            sessionStorage.setItem('searchVal',this.searchVal)
            sessionStorage.setItem('searchType',this.type)
            sessionStorage.setItem('histroyData',JSON.stringify(_histroyData))
            this.$router.push({
                path: '/goodsStore',
                query: {
                    searchVal: this.searchVal,
                    type:this.type,
                }
            })
        },
        clearFunc(){
            this.searchVal = ''
            sessionStorage.removeItem('searchVal')
            sessionStorage.removeItem('searchType')
        }
    },
    mounted(){
        this.histroyData = JSON.parse(sessionStorage.getItem('histroyData')) || []
        this.searchVal = sessionStorage.getItem('searchVal')
        if(sessionStorage.getItem('searchType') && sessionStorage.getItem('searchType')==1){
            this.isActive = false
        }else{
            this.isActive = true
        }
    },
}
</script>
<style lang="scss" scoped>
::-webkit-input-placeholder { color:#fff; }
.serchWrap{
    .headerWrap{
        >div{
            width:75%;
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
                &.fa-times-circle{
                    position:absolute;
                    font-size:0.5rem;
                    right:0.25rem;
                    top:0.2rem;
                    color:#ff5c00;
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
    .searchContent{
        ul.searchTab{
            background:#fff;
            // background: #f4f4f4;
            li{
                width:50%;
                height:1rem;
                line-height: 1rem;
                border-bottom:2px solid #fff;
                &.active{
                    color:#ff5c00;
                    border-color:#ff5c00;
                }
            }
        }
    }
}
</style>
