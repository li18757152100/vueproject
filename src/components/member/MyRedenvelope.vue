<!--  -->
<template>
  <div class='MyRedenvelopeBox'>
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
            <ul class="myRedenvelope">
				<li class="item">
					<img src="../../assets/images/icon/icon-Redenvelope.png" class="img-icon" />
					<div class="content">
						<p class="bt">
							<span>Apple Store 官方旗舰店</span>
							<span class="money red">¥<em class="unit">5</em></span>
						</p>
						<p class="time">仅限11.11当天在本平台使用</p>
						<p class="time">2018.03.18 15:58 - 2018.03.25 23:59:59</p>
					</div>
				</li>
				<li class="item fail">
					<img src="../../assets/images/icon/icon-Redenvelope.png" class="img-icon" />
					<div class="content">
						<p class="bt">
							<span>Apple Store 官方旗舰店</span>
							<span class="money red">¥<em class="unit">5</em></span>
						</p>
						<p class="time">仅限11.11当天在本平台使用</p>
						<p class="time">2018.03.18 15:58 - 2018.03.25 23:59:59</p>
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
  name:'MyRedenvelopeBox',  
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