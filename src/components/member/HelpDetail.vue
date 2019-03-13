<!--  -->
<template>
  <div class='DetailBox'>
     <Header></Header>
        <div class='NeiContent'>
            <div class="helpShow">
				<div class="helpShowHd">
					<h1 class="title">{{$route.params.helpid}}--如何更改绑定的银行卡？</h1>
					<p class="info">
						<span>2018-05-03 17:37</span>
						<span class="space">阅读：21万+</span>
					</p>
				</div>
				<div class="helpContent">
					<p>用户可以在 我的银行卡中自行解绑；但是您如果遇到在投资金的银行卡注销等异常情况时需按以下步骤操作解绑：</p>
					<p class="mt10">a.对所持有的所有资产发起转出操作。 </p>
					<p class="mt10">b.提供所持有资产对应的基金/保险公司线下赎回所需要的资料，由小米客服收集完成以后，转发给相对应基金/保险公司，审核通过后，基金/保险公司向用户新银行卡中打款。</p>
					<p class="mt10">c.完成打款后，您在小米金融APP中理财财产清零，此时您可以在APP中进行无份额换卡，将原先绑定的卡换成需要的新银行卡。</p>
				</div>
			</div>
        </div>
    <Footer></Footer>   
  </div>
</template>

<script>
import Header from "../public/Header";
import Footer from "../public/Footer";
export default {
    name:'DetailBox',
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
</style>