<!--  -->
<template>
  <div class='OrderPayBox'>
    <Header></Header>
      <div class='NeiContent'>
          <section class="pay-text box">
				<p class="time"><span class="c2">请在</span><b class="c5">0</b>天<b class="c5">01</b>小时<b class="c5">59</b>分<b class="c5">56</b>秒<span class="c2">内完成支付</span></p>
				<p class="opn"><span class="btn">订单金额</span></p>
				<p class="value red"><em class="unit">¥</em>8319.00</p>
			</section>
			<ul class="list-tab btline bbline" >
				<li class="item">
					<div class="tap pl-24 check">
						<div class="icon-24"><img src="../assets/images/icon/zfb.png"></div>
						<span class="name">支付宝支付</span>
						<input name="payment" type="radio" class="rcheck">
					</div>
				</li>

				<li class="item">
					<div class="tap pl-24 check">
						<div class="icon-24"><img src="../assets/images/icon/weixin.png"></div>
						<span class="name">微信支付</span>
						<input name="payment" type="radio" class="rcheck">
					</div>
				</li>

				<li class="item">
					<div class="tap pl-24 check">
						<div class="icon-24"><img src="../assets/images/icon/ylzf.png"></div>
						<span class="name">银联支付</span>
						<input name="payment" type="radio" class="rcheck">
					</div>
				</li>
			</ul>
      </div>
      <!-- footer start -->
		<nav class="mui-bar mui-bar-tab footer">
			<router-link to="/orderok">
			<a href="javascript:;" class="btn f-full-btn">立即支付</a>
			</router-link>
		</nav>
		<!-- footer end -->
  </div>
</template>

<script>
import Header from "./public/Header";
export default {
    name:'OrderPayBox',
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