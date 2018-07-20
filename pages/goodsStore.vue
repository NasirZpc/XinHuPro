<template>
    <section class="goodsStoreLists">
        <!-- 头部搜索 -->
        <div class="headerWrap fix">
            <a href="javascript:" @click="go()" class="backBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
            <div class="rel">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input placeholder="请输入搜索内容" v-model="searchVal" disabled>
            </div>
        </div>
    </section>
</template>
<script>
export default{
    head () {
        return {
            title: '信户-商品&店铺列表',
            meta: [
                { hid: 'description', name: 'description', content: '搜索你喜欢的商品和店铺' }
            ]
        }
    },
    // async asyncData({app}) {
    //     console.log(app)
    // },
    data(){
        return {
            searchVal:'',
            type:'',//0商品  1店铺
        }
    },
    scrollToTop:true,
    methods:{
        go(){
            this.$router.go(-1);
        },
        clearFunc(){
            this.searchVal = ''
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
.goodsStoreLists{
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
}
</style>
