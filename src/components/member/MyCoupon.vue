<!--  -->
<template>
  <div class='MyCouponBox'>
      <Header></Header>
          <!-- menu-bar start -->
          <ul class="menu-bar menu-bar-col3 active">
          <li class="active">
            <a href="javascript:;">未使用</a>
          </li>
          <li>
            <a href="javascript:;">已使用</a>
          </li>
          <li>
            <a href="javascript:;">已过期</a>
          </li>
        </ul>
        <!-- menu-bar end -->
        <div class='NeiContentNav'>
            <ul class="myCoupon">
				<li class="item">
					<img src="../../assets/images/icon/icon-coupon.png" class="img-icon" />
					<div class="content">
						<p class="bt">Apple Store 官方旗舰店</p>
						<p class="time">2018.03.18 15:58 - 2018.03.25</p>
					</div>
					<div class="value">
						<p class="money">¥<span class="unit">5</span></p>
						<p class="limit">满130使用</p>
					</div>
				</li>
				
				<li class="item fail">
					<img src="../../assets/images/icon/icon-coupon.png" class="img-icon" />
					<div class="content">
						<p class="bt">Apple Store 官方旗舰店</p>
						<p class="time">2018.03.18 15:58 - 2018.03.25</p>
					</div>
					<div class="value">
						<img src="../../assets/images/icon/over-Expired.png" class="status">
						<p class="money">¥<span class="unit">5</span></p>
						<p class="limit">满130使用</p>
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
  name:'MyCouponBox',  
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