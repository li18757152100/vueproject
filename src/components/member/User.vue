<!--  -->
<template>
  <div class='UserBox'>
    <header class="header header-blue">
			 <router-link to="/set">
        <div class="h-set iconfont icon-m-set"></div>
			 </router-link>
			 <router-link to="/message">
        <div class="h-xiaoxi iconfont icon-m-xiaoxi"><span class="num">1</span></div>
			 </router-link>
    </header>
  <div class="NeiContentm">
			<div class="userHd">
				<div class="info">
					<img src="../../assets/images/icon/avatar.gif" class="avatar"  />
					<div class="content">
						<p class="name">商城跨境</p>
						<p class="value"><span>普通会员</span></p>
					</div>
					<router-link to="/set">
					<div class="goset">设置<i class="iconfont icon-a12r"></i></div>
					</router-link>
				</div>
			</div>

			<user-order></user-order>
			<user-collect></user-collect>
			<user-nav></user-nav>
			
      
		</div> 
  <Footer></Footer>
  </div>
</template>

<script>
import UserOrder from "./UserOrder";
import UserCollect from "./UserCollect";
import UserNav from "./UserNav";
import Footer from "../public/Footer";
export default {
   name:'UserBox', 
  data () {
    return {
    }
  },
  components: {
	UserOrder,
	UserCollect,
	UserNav,
    Footer
   }
}

</script>
<style scoped>
   @import '../../assets/stylesheets/m-css.css';  
   @import '../../assets/stylesheets/public.css';  
</style>