<!--  -->
<template>
  <div class='MyCollectBox'>
      <header class="header header-blue">
      <h1 class="mui-title">{{$route.meta.title}}</h1>
			 <a class="iconfont icon-back fl LeftArrow"  @click="goBack"></a>
    </header>
        <div class='NeiContentm'>
            <article class="fundsHd">
				<p class="bts">账户余额（元）</p>
				<p class="value">1137.68</p>
				<router-link to="/withdraw">
				<div  class="btn">申请提现</div>
				</router-link>
			</article>

			<ul class="account-count bbline pr">
				<li>
					<p>可提现佣金</p>
					<p class="num red">0.00</p>
				</li>
				<li>
					<p>已提现佣金</p>
					<p class="num red">0.00</p>
				</li>
			</ul>

			<ul class="set-nav bbline btline mt10">
				<li class="item">
					<router-link to="/mycoupon">
					<div class="tap  mui-table-view-cell">
						<span class="name">我的优惠券</span>
						<span class="dsp">12张优惠券</span>
						<i class="iconfont icon-a12r"></i>
					</div>
					</router-link>
				</li>

				<li class="item">
					<router-link to="/myredenvelope">
					<div class="tap mui-table-view-cell">
						<span class="name">我的红包</span>
						<span class="dsp">暂无红包</span>
						<i class="iconfont icon-a12r"></i>
					</div>
					</router-link>
				</li>

			</ul>
			
			<ul class="set-nav bbline btline mt10">
				<li class="item">
					<router-link to="/commission">
					<div class="tap  mui-table-view-cell">
						<span class="name">支出记录</span>
						<span class="dsp">查看</span>
						<i class="iconfont icon-a12r"></i>
					</div>
					</router-link>
				</li>

				<li class="item">
					<router-link to="/commission">
					<div class="tap mui-table-view-cell">
						<span class="name">收入记录</span>
						<span class="dsp">查看</span>
						<i class="iconfont icon-a12r"></i>
					</div>
					</router-link>
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
  name:'MyCollectBox',  
  data () {
    return {
    }
  },
  components: {
    Header,  
    Footer
   },
   methods:{
        goBack:function () {
          window.history.go(-1)
        }
    }
}

</script>
<style scoped>
   @import '../../assets/stylesheets/m-css.css';  
   @import '../../assets/stylesheets/public.css';
</style>