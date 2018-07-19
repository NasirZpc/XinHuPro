<template>
    <footer class="fix">
        <ul>
            <li>
                <nuxt-link to="/">
                    <i class="icon i_index"></i>
                    <p>首页</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/xinFind">
                    <i class="icon i_find"></i>
                    <p>信发现</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/serverMsg">
                    <i class="icon i_serverMsg"></i>
                    <p>客服消息</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/shoppingCar">
                    <i class="icon i_shoppingCar"></i>
                    <p>购物车</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/mine">
                    <i class="icon i_mine"></i>
                    <p>我的</p>
                </nuxt-link>
            </li>
        </ul>
    </footer>
</template>
<script>
export default{

}
</script>
<style lang="scss" scoped>
    footer{
        width:100%;
        height:1.306rem;
        left:0;
        bottom:0;
        box-shadow: 0px 5px 20px #666;
        background:#fff;
        z-index: 11;
        ul{
            li{
                width:20%;
                float:left;
                a{
                    display: block;
                    text-align: center;
                    height:1.306rem;
                    color:#666;
                    font-size:0.32rem;
                    i{
                        margin-top:0.1rem;
                    }
                    &.nuxt-link-exact-active{
                        color:#ff5c00;
                    }
                }
            }
        }
    }
</style>
