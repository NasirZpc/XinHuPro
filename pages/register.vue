<template>
    <section class="registerWrap">
        <!-- 头部 -->
        <div class="headerWrap fix">
            <a href="javascript:" @click="go()" class="backBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
            <p class="fs34 orange">注册</p>
        </div>
    </section>
</template>
<script>
export default{
    head () {
        return {
            title: '注册',
            meta: [
                { hid: 'description', name: 'description', content: '请注册' }
            ]
        }
    },
    data(){
        return {

        }
    },
    methods:{
        go(){
            this.$router.go(-1)
        },
    }
}
</script>
<style lang="scss" scoped>
.registerWrap{

}
</style>
