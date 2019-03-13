<!--  -->
<template>
  <div class='ResetBox'>
      <header class="mui-bar header" >
        <router-link to="/">
			<div class="fl LeftArrow iconfont icon-modal-close c1"></div>
        </router-link>
		</header>
     <div class='kh-44'></div>
      <ul class="login-form clearfix">
				<li class="tits">重置密码</li>
				<li class="item">
					<div class="input-box">
						<input type="password" class="l-txt" placeholder="请输入密码">
						<i class="iconfont icon-tmy-clear"></i>
					</div>
				</li>

				<li class="item yzm">
					<div class="input-box">
						<input type="password" class="l-txt" placeholder="确认密码">
						<i class="iconfont icon-tmy-clear"></i>
					</div>
				</li>

				<li class="item">
					<router-link to="/user">
					<div type="text" class="btn l-btn">提交</div>
					</router-link>
				</li>
			</ul>

  </div>
</template>

<script>
export default {
  name:'ResetBox',
  data () {
    return {
    }
  }
}

</script>
<style scoped>
    @import '../../assets/stylesheets/public.css';
    @import '../../assets/stylesheets/login.css';  
</style>