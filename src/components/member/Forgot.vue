<!--  -->
<template>
  <div class='ForgotBox'>
      <header class="mui-bar header" >
        <router-link to="/">
			<div class="fl LeftArrow iconfont icon-modal-close c1"></div>
        </router-link>
		</header>
     <div class='kh-44'></div>
      
			<ul class="login-form clearfix">
				<li class="tits">找回密码</li>
				<li class="item">
					<div class="input-box">
						<input type="text" class="l-txt" placeholder="手机号码">
						<i class="iconfont icon-tmy-clear"></i>
					</div>
				</li>

				<li class="item yzm">
					<div class="input-box">
						<input type="text" class="l-txt" placeholder="验证码">

					<span v-show="sendAuthCode" class="getyzm"  @click="getAuthCode">获取验证码</span>
          <span v-show="!sendAuthCode" class="getyzm fail"> {{auth_time}} 秒后重试</span>

					</div>
				</li>

				<li class="item">
					<router-link to="/reset">
					<div class="btn l-btn">下一步</div>
					</router-link>
				</li>
			</ul>
			

  </div>
</template>

<script>
export default {
  name:'ForgotBox',
  data () {
		return{
        sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
				auth_time: 0 /*倒计时 计数器*/
				}
	},
	methods: {
        getAuthCode:function () {
            this.sendAuthCode = false;
            this.auth_time = 6;
            var auth_timetimer =  setInterval(()=>{
                this.auth_time--;
                if(this.auth_time<=0){
                    this.sendAuthCode = true;
                    clearInterval(auth_timetimer);
                }
            }, 1000);
        }
    }
}

</script>
<style scoped>
    @import '../../assets/stylesheets/public.css';
    @import '../../assets/stylesheets/login.css';  
</style>