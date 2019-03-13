<!--  -->
<template>
  <div class='OrderOkBox'>
    <Header></Header>
      <div class='NeiContent'>
          <div class="success">
				<p><img src="../assets/images/icon/pay-ok.png" class="pay-ok"></p>
				<div class="text">
					<p class="tit">恭喜您！您已支付成功！</p>
					<p class="dsp">共支付：<em class="red">¥8319.00</em></p>
				</div>
				<div class="opn">
					<router-link to="/products">
					<span class="tab"><a href="javascript:;" class="btn btn-outlined">再逛逛吧</a></span>
					</router-link>
					<router-link to="/">
					<span class="tab"><a href="javascript:;" class="btn">返回首页</a></span>
					</router-link>
				</div>
			</div>
      </div>
    
  </div>
</template>

<script>
import Header from "./public/Header";
export default {
    name:'OrderOkBox',
  data () {
    return {
    }
  },
  components: {
    Header
   }
}

</script>
<style scoped>
@import '../assets/stylesheets/public.css';
@import '../assets/stylesheets/css.css';
</style>