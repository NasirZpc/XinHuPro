<template>
    <section class="MineWrap">
        <div class="MineTop rel">
            <nuxt-link to="/" class="fa fa-cog abs" aria-hidden="true"></nuxt-link>
            <img src="">
        </div>
        <Footer/>
    </section>
</template>
<script>
export default{
    middleware: 'auth',
    scrollToTop:true,
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
    }
}
</style>
