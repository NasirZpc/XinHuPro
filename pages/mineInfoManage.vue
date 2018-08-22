<template>
    <section class="mineInfoManageWrap">
        <!-- 头部 -->
        <div class="headerWrap fix">
            <a href="javascript:" @click="go()" class="backBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
            <p class="fs34 orange">个人信息修改</p>
        </div>
        <ul class="pad-Header fs28 C6">
            <li class="clearfix">
                <label class="fl">头像</label>
                <div class="imgUploadWrap fr">
                    <img :src="mineData.avatar">
                    <i class="fa fa-angle-right rel ml025" aria-hidden="true"></i>
                </div>
            </li>
            <li class="clearfix">
                <label class="fl">昵称</label>
                <input class="fr tr fs28 C3 nicename" v-model="mineData.user_nicename">
            </li>
            <li class="clearfix">
                <label class="fl">性别</label>
                <div class="modifySex fr" @click="modifySexFunc">
                    <input class="sex fs28 C3 tc inline_b" v-model="mineData.sex | filterSex" readonly>
                    <i class="fa fa-angle-right rel  ml025" aria-hidden="true"></i>
                </div>
            </li>
        </ul>
        <!-- 性别 -->
        <mt-popup v-model="popupVisibleSex" position="bottom">
            <mt-picker :slots="slotsSex" :visible-item-count="3" ref="pickerSex" :show-toolbar="true" value-key="cName">
                <mt-button @click="handleConfirmSex" class="handleConfirmSex">确认</mt-button>
                <mt-button @click="popupVisibleSex=false" class="cancel">取消</mt-button>
            </mt-picker>
        </mt-popup>
    </section>
</template>
<script>
import {baseurl} from '~/plugins/url.js'
export default{
    middleware: 'auth',
    scrollToTop:true,
    async asyncData({app}) {
        let mineData;
        await app.$axios.post(`${baseurl}/index.php/Api/User/getuser`,{token:app.store.getters.userinfo.token}).then(res=>{
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
    data(){
        return{
            popupVisibleSex:false,
            slotsSex:[
                {
                  flex: 1,
                  values: ['男', '女'],
                  className: 'slot1',
                  textAlign: 'center'
                }
            ],
        }
    },
    filters:{
        filterSex(sex){
            if(sex == 1){
                return "男"
            }else if(sex==2){
                return "女"
            }else{
                return "保密"
            }
        }
    },
    methods:{
        go(){
            this.$router.go(-1)
        },
        //修改性别
        modifySexFunc(){
            this.popupVisibleSex = true
        },
        handleConfirmSex(){
            console.log(this.$refs.pickerSex.getValues()[0])
            this.mineData.sex = this.$refs.pickerSex.getValues()[0]
            this.popupVisibleSex = false
        },
    }
}
</script>
<style lang="scss" scoped>
.mint-popup{
    width:100%;
}
//按钮
.picker-toolbar{
    button{
        font-size: 0.32rem;
        width:1.4rem;
        height:0.8rem;
        position: absolute;
        top:0.1rem;
        &.cancel{
            left:0.1rem;
        }
        &.handleConfirmSex{
            border:1px solid #ff5c00;
            color:#ff5c00;
            right:0.1rem;
        }
    }
}
.mineInfoManageWrap{
    >ul{
        li{
            background:#fff;
            border-bottom: 1px solid #eee;
            padding:0.25rem;
            line-height: 0.8rem;
            height:0.8rem;
            .imgUploadWrap{
                img{
                    width:0.8rem;
                    height:0.8rem;
                    border-radius: 50%;
                }
            }
            .fa-angle-right{
                font-size:0.5rem;
                color:#666;
                top:0.04rem;
            }
            .nicename{
                height:100%;
                width:4rem;
            }
            .modifySex{
                .sex{
                    height: 0.8rem;
                    width:0.8rem;
                }
            }
        }
    }
}
</style>
