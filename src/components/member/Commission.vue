<!--  -->
<template>
  <div class='CommissionBox'>
      <Header></Header>
        <div class='NeiContent'>
            <div class="commissionTime">
				<p class="date">2018年1月</p>
				<p class="info">提现 491.82 收入 698.44</p>
				<i class="time iconfont icon-jlls-shijian" data-options='{"type":"month","beginYear":1900,"endYear":2100}'></i>
			</div>
			<ul class="commission btline bbline">
				<li class="item">
					<div class="flag">
						<img src="../../assets/images/icon/zjmx-tixian.png" class="lazy"  />
					</div>
					<div class="content">
						<p class="hd">
							<span class="name">提现-到支付宝(9808)</span>
							<span class="value">-400.00</span>
						</p>
						<p class="time">1月22日 11:30</p>
					</div>
				</li>

				<li class="item">
					<div class="flag">
						<img src="../../assets/images/icon/zjmx-yongjin.png" class="lazy" />
					</div>
					<div class="content">
						<p class="hd">
							<span class="name">	获得佣金-分享好友(为**爱)</span>
							<span class="value red">+20.00</span>
						</p>
						<p class="time">1月22日 11:30</p>
					</div>
				</li>

				<li class="item">
					<div class="flag">
						<img src="../../assets/images/icon/zjmx-gmfw.png" class="lazy"  />
					</div>
					<div class="content">
						<p class="hd">
							<span class="name">购买商品</span>
							<span class="value">-200.00</span>
						</p>
						<p class="time">1月22日 11:30</p>
					</div>
				</li>
			</ul>

			<div class="commissionTime">
				<p class="date">2018年1月</p>
				<p class="info">提现 491.82 收入 698.44</p>
				<i class="time iconfont icon-jlls-shijian" data-options='{"type":"month","beginYear":1900,"endYear":2100}'></i>
			</div>
			<ul class="commission btline bbline">
				<li class="item">
					<div class="flag">
						<img src="../../assets/images/icon/zjmx-tixian.png" class="lazy" />
					</div>
					<div class="content">
						<p class="hd">
							<span class="name">提现-到支付宝(9808)</span>
							<span class="value">-400.00</span>
						</p>
						<p class="time">1月22日 11:30</p>
					</div>
				</li>

				<li class="item">
					<div class="flag">
						<img src="../../assets/images/icon/zjmx-yongjin.png" class="lazy"  />
					</div>
					<div class="content">
						<p class="hd">
							<span class="name">	获得佣金-分享好友(为**爱)</span>
							<span class="value red">+20.00</span>
						</p>
						<p class="time">1月22日 11:30</p>
					</div>
				</li>

				<li class="item">
					<div class="flag">
						<img src="../../assets/images/icon/zjmx-gmfw.png" class="lazy" />
					</div>
					<div class="content">
						<p class="hd">
							<span class="name">购买商品</span>
							<span class="value">-200.00</span>
						</p>
						<p class="time">1月22日 11:30</p>
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
  name:'CommissionBox',  
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