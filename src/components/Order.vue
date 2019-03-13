<!--  -->
<template>
  <div class='DingDanBox'>
      <Header></Header>
      <div class='NeiContent'>
      <div class="order-addr bbline" id="select-address">
				<i class="icon-p-shdz iconfont"></i>
				<div class="hd">
					<span class="name">光头强</span>
					<span class="phone">18757152100</span>
				</div>
				<div class="info">
					收货地址：浙江省杭州市江干区下沙经济开发区新加坡科技园2幢7楼故乡人网络
					<i class="iconfont icon-a12r"></i>
				</div>
			</div>

			<div class="OrderListTit mt10">订单信息</div>
			<ul class="OrderList">
				<li class="item clearfix">
					<a href="show.html" class="tap mui-table-view-cell">
						<div class="imgbox">
							<img class="lazy" src="../assets/images/example/p1.jpg" >
						</div>
						<div class="content">
							<h2 class="name">LUSH 露诗小紅帽新生防脱生发洗发皂 55克 </h2>
							<p class="attr">机身颜色：颜色；存储容量：256GB</p>
							<div class="price">
								<span class="unit red">¥8319.00</span>
								<span class="num">×1</span>
							</div>
						</div>
					</a>
				</li>
			</ul>

			<ul class="list-tab" id="payment">
				<li class="item">
					<div class="tap">
						<span class="name">运费</span>
						<span class="dsp">快递 免邮</span>
					</div>
				</li>

				<li class="item">
					<div class="tap arrow" id="coupon">
						<span class="name">优惠券</span>
						<span class="btn couponUsed">5张可用</span>
						<i class="iconfont icon-a12r"></i>
					</div>
				</li>

				<li class="item">
					<div class="tap">
						<span class="name">店铺优惠</span>
						<span class="dsp">省100元：组合优惠</span>
					</div>
				</li>

			</ul>

			<div class="order-count mt10">
				<p class="item">商品金额：<span class="money">¥8319.00</span></p>
				<p class="item">运费：（总重：0.1KG）<span class="money">¥6.00</span></p>
				<p class="item">优惠券<span class="money">-¥20.00</span></p>
			</div>
      </div>
      <!-- footer start -->
		<footer class="mui-bar footer">
			<div class="total-box">
				<div class="T-count">
					<span>实际付款：</span>
					<span class="red">¥</span>
					<span class="red unit">8319.00</span>
				</div>
                <router-link to="/orderpay">
				<a href="javascript:;" class="gobuy">提交订单</a>
                </router-link>
			</div>
		</footer>
		<!-- footer end -->
  </div>
</template>

<script>
import Header from "./public/Header";
export default {
    name:'DingDanBox',
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