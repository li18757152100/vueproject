<!--  -->
<template>
  <div class='LoginBox'>
      <header class="mui-bar header" >
        <router-link to="/">
			<div class="fl LeftArrow iconfont icon-modal-close c1"></div>
        </router-link>
		</header>
     <div class='kh-44'></div>
      <ul class="login-form clearfix">
				<li class="tits">用户登录</li>
				<li class="item">
					<div class="input-box">
						<input type="text" class="l-txt" placeholder="输入手机号">
						<i class="iconfont icon-tmy-clear"></i>
					</div>
				</li>
				<li class="item">
					<div class="input-box">
						<input type="password" class="l-txt" placeholder="请输入密码">
					</div>
				</li>
				<li class="item opn">
					<router-link to="/user">
					<div type="text" class="btn l-btn">登录</div>
					</router-link>
				</li>
				<li class="text">
					<a href="reg.html" class="c2">免费注册</a>
					<router-link to="/forgot">
					<div class="c2">忘记密码?</div>
					</router-link>
				</li>
			</ul>
			<div class="login-or">
				<div class="title">
					<span class="name">其他方式登录</span>
				</div>
				<div class="link">
					<a href="#">
						<img src="../../assets/images/icon/share-qq.png">
					</a>
					<a href="#">
						<img src="../../assets/images/icon/share-xlwb.png">
					</a>
					<a href="#">
						<img src="../../assets/images/icon/share-weixin.png">
					</a>
				</div>
			</div>
  </div>
</template>

<script>
export default {
  name:'LoginBox',
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