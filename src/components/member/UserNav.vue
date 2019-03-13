<!--  -->
<template>
  <div class="usernav">
				<ul class="user-nav">
				<li class="item">
					<router-link to="/message">
					<div class="tap">
						<span class="num">10</span>
						<span class="name">我的消息</span>
					</div>
					</router-link>
				</li>
				<li class="item">
					<router-link to="/mycollect">
					<div class="tap">
						<span class="num">19</span>
						<span class="name">商品收藏</span>
					</div>
					</router-link>
				</li>
				<li class="item">
					<router-link to="/mynews">
					<div class="tap">
						<span class="num">2</span>
						<span class="name">关注资讯</span>
					</div>
					</router-link>
				</li>
				<li class="item">
					<router-link to="/myview">
					<div class="tap">
						<span class="num">26</span>
						<span class="name">浏览记录</span>
					</div>
					</router-link>
				</li>
				
				<li class="item">
					<router-link to="/myaddress">
					<div class="tap">
						<img src="../../assets/images/icon/user-nav-1.png">
						<span class="name">收货地址</span>
					</div>
					</router-link>
				</li>
				<li class="item">
					<router-link to="/funds">
					<div class="tap">
						<img src="../../assets/images/icon/user-nav-2.png">
						<span class="name">我的钱包</span>
					</div>
					</router-link>
				</li>
				<li class="item">
					<router-link to="/help">
					<div class="tap">
						<img src="../../assets/images/icon/user-nav-3.png">
						<span class="name">帮助中心</span>
					</div>
					</router-link>
				</li>
				<li class="item">
					<router-link to="/feedback">
					<div class="tap">
						<img src="../../assets/images/icon/user-nav-4.png">
						<span class="name">意见反馈</span>
					</div>
					</router-link>
				</li>
			</ul>
			<div class='clear'></div>
			</div>

</template>

<script>
export default {
name:'userNav',
  data () {
    return {
    }
  }
}

</script>
<style scoped>
@import '../../assets/stylesheets/m-css.css'; 
</style>