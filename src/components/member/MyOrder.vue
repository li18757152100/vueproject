<!--  -->
<template>
  <div class='MyOrderBox'>
      <Header></Header>
      <!-- menu-bar start -->
		<ul class="menu-bar active">
			<li class="active">
				<a href="javascript:;">全部</a>
			</li>
			<li>
				<a href="javascript:;">待付款</a>
			</li>
			<li>
				<a href="javascript:;">待发货</a>
			</li>
			<li>
				<a href="javascript:;">待收货</a>
			</li>
			<li>
				<a href="javascript:;">待评价</a>
			</li>
		</ul>
		<!-- menu-bar end -->
        <div class='NeiContentNav'>
            <ul class="MyOrder clearfix">
				<li class="item">
					<div class="stores">
						<span class="bts">Apple Store 官方旗舰店</span>
						<span class="status red">已发货</span>
					</div>
					<div class="goodsBox">
						<div class="goodsItem">
							<a href="../show.html" class="tap">
								<div class="imgbox"><img class="lazy" src="../../assets/images/example/p2.jpg" ></div>
								<div class="content">
									<h2 class="name">LUSH 露诗小紅帽新生防脱生发洗发皂 55克 </h2>
									<p class="attr">颜色：亮黑色 容量：64GB</p>
									<p class="pay">
										<span class="price">¥ <em class="unit">8319.00</em></span>
										<span class="num">x<em class="cnum">1</em></span>
									</p>
								</div>
							</a>
						</div>
						<div class="goodsItem">
							<a href="../show.html" class="tap">
								<div class="imgbox"><img class="lazy" src="../../assets/images/example/p1.jpg" ></div>
								<div class="content">
									<h2 class="name">Apple/苹果 金色铝金属表壳搭配粉砂色运动型表带</h2>
									<p class="attr">颜色：亮黑色 容量：64GB</p>
									<p class="pay">
										<span class="price">¥ <em class="unit">2565.00</em></span>
										<span class="num">x<em class="cnum">1</em></span>
									</p>
								</div>
							</a>
						</div>
					</div>
					<div class="counts">
						<span>共2件商品 合计：¥ 489.00</span>
					</div>
					<div class="opn">
						<a href="myOrder-evaluation.html" class="btn bbgf">订单评价</a>
						<a href="myOrder-logistics.html" class="btn bbgf">查看物流</a>
						<a href="myOrder-details.html" class="btn bbgf">订单详情</a>
					</div>
				</li>
			</ul>
        </div>   
      <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public/Header";
import Footer from "../public/Footer";
export default {
  name:'MyOrderBox',  
  data () {
    return {
    }
  },
  components: {
    Header,  
    Footer
   }
}

</script>
<style scoped>
   @import '../../assets/stylesheets/m-css.css';  
   @import '../../assets/stylesheets/public.css';
</style>