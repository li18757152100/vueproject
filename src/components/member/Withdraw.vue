<!--  -->
<template>
  <div class='WithdrawBox'>
      <Header></Header>
        <div class='NeiContent'>
            <div class="title-bt">提现的帐号</div>
			<ul class="list-tab bbline btline mt10" id="payment">
				<li class="item">
					<div class="tap pl-24 check">
						<div class="icon-24"><img src="../../assets/images/icon/zfb.png"></div>
						<span class="name">支付宝支付</span>
						<input name="payment" type="radio" class="rcheck">
					</div>
				</li>

				<li class="item mui-table-view-cell">
					<div class="tap pl-24 check">
						<div class="icon-24"><img src="../../assets/images/icon/weixin.png"></div>
						<span class="name">微信支付</span>
						<input name="payment" type="radio" class="rcheck">
					</div>
				</li>
			</ul>
			
			<ul class="form-list f-list-mt10">
				<li class="item f-list-pl4">
					<span class="name">提现金额</span>
					<input type="text" class="txt tar" value="" placeholder="请输入提现金额">
				</li>
			</ul>
			
			<div class="title-bt">或通过下面方式提现</div>

				<small-money></small-money>
        <big-money></big-money>
			<div class="exit-opn"><button class="btn Large" @click="handleButtonClick">提交</button></div>
        </div>   
      <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public/Header";
import SmallMoney from "./SmallMoney";
import BigMoney from "./BigMoney";
import Footer from "../public/Footer";
import { MessageBox } from 'mint-ui';
export default {
  name:'WithdrawBox',  
  data () {
    return {
      
    }
  },
  components: {
    Header,
    SmallMoney,
    BigMoney,  
    Footer
   },
   methods: {
    handleButtonClick: function () {
      MessageBox('提示','提交成功！')
    }
    }
}

</script>
<style scoped>
   @import '../../assets/stylesheets/m-css.css';  
   @import '../../assets/stylesheets/public.css';
</style>