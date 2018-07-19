<template>
	<!-- 封装返回顶部组件 -->
    <div>
        <div class="back">
        	<div class="back_top" @click="top">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
            	<span>TOP</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	mounted() {
		this.init();
	},
	methods:{
		init() {
			if(process.browser) {	//判断为浏览器
                window.onscroll = function () {
					let top = document.documentElement.scrollTop;
					let backTop = document.querySelector('.back');
					top >= 500 ? backTop.style.display = 'block' : backTop.style.display = 'none';
				}
			}
		},
		top() {
			if (process.browser) {	//判断为浏览器
				let timer = null;
				timer = setInterval(()=>{
					let top = document.documentElement.scrollTop;
					top -=12;
					if (top>0) {
						window.scrollTo(0,top);
					}else {
						window.scrollTo(0,0);
						clearInterval(timer);
					}
				});
			}
		}
	}
}
</script>
<style scoped lang="scss">
    .back{
        position:fixed;
        z-index:10;
        right:0.3rem;
        bottom:1.5rem;
        width:0.8rem;
        height:0.8rem;
        border:1px solid #ff5c00;
        border-radius:50%;
        background: #fff;
        display: none;
        .back_top{
            text-align: center;
            color:#ff5c00;
            i{
                font-size:0.6rem;
                position: relative;
                top:-0.05rem;
            }
            span{
                position: relative;
                display: block;
                top:-0.2rem;
                font-size:0.24rem;
            }
        }
    }
</style>
