<!--  -->
<template>
  <div class='FootBox'>
      <footer class="footer">
			<li  @click="switchTo('/index')" class="tab" :class="{active: '/index' === $route.path}">
				<i class="icon-1"></i>
				<p>首页</p>
			</li>
			<li @click="switchTo('/products')" class="tab" :class="{active: '/products' === $route.path}">
				<i class="icon-2"></i>
				<p>产品</p>
			</li>
			<li  @click="switchTo('/car')" class="tab" :class="{active: '/car' === $route.path}">
				<i class="icon-3"></i>
				<p>购物车</p>
			</li>
			<li @click="switchTo('/user')" class="tab" :class="{active: '/user' === $route.path}">
				<i class="icon-4"></i>
				<p>我的</p>
			</li>
		</footer>

  </div>
</template>

<script>
export default {
  name:'Footers',  
  data () {
    return {
    }
	},
	methods:{
    switchTo(path){
      // console.log(this.$router)
      this.$router.replace(path)
    }
  }
}

</script>
<style scoped>
@import '../../assets/stylesheets/public.css';
</style>