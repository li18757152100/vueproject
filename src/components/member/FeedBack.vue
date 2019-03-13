<!--  -->
<template>
  <div class='FeedBackBox'>
      <Header></Header>
        <div class='NeiContent'>
            <div class="feedback-form clearfix">
				<div class="title">问题留言</div>
				<div class="input-box">
					<textarea class="input-txt" placeholder="请输入留言信息"></textarea>
				</div>
				<div class="title">联系方式</div>
				<div class="input-box">
					<input name="" type="text" class="input-txt" placeholder="请输入手机或QQ的联系方式">
				</div>

				<div class="exit-opn">
					<button class="btn" @click="handleButtonClick">提交留言</button>
				</div>

			</div>

			<div class="box mt10 clearfix">
				<div class="feedbackTit">我的反馈</div>
				<ul class="feedbackList ">

					<li class="item" v-for="item in FeedBackLst" :key="item.id">
						<div class="bt"><span class="c5">Q：</span>{{item.question}}</div>
						<div class="content">
							<span class="red">平台回复：</span>{{item.reply}}
						</div>
					</li>
					
				</ul>
			</div>
        </div>   
      <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public/Header";
import Footer from "../public/Footer";
import { MessageBox } from 'mint-ui';
export default {
  name:'FeedBackBox',  
  data () {
    return {
      FeedBackLst:[
                {           
                    question:'如何使用货到付款（POS机刷卡）支付？',
                       reply:'您好，您可以登录您的账户，如订单使用现金或货到付款（POS机刷卡）均可合并，状态为待审核，可以直接在“我的交易”—“订单管理”中点击“合并”，然后系统会提示您最终选择货到付款支付方式，成功合并后，将一起发出商品，只收取一单运费，且单笔订单金额满288元可免运费。',									
                       id:1
                },
                {           
                    question:'如何更改绑定的银行卡？',
                       reply:'用户可以在 我的银行卡中自行解绑',									
                       id:2
                },
                {           
                    question:'购买后看不到收益怎么办？',
                       reply:'买入到产生收益共有三个环节：买入---确认份额（确认后计算收益）---收益发放',									
                       id:3
                }
      ]
    }
  },
  components: {
    Header,  
    Footer
   },
   methods: {
    handleButtonClick: function () {
      MessageBox('提示','提交成功')
    }
    }
}

</script>
<style scoped>
   @import '../../assets/stylesheets/m-css.css';  
   @import '../../assets/stylesheets/public.css';
</style>