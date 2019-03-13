<!--  -->
<template>
  <div class='ShowBox'>
        <Header></Header>
            <div class='NeiContent'>
               <div class="newsShow clearfix">

				<div class="newsShowHd">
					<h1 class="title">{{$route.params.newid}}--如何健康地快走？不可不知的快走运动要领</h1>
					<p class="info">
						<span>2018-05-03 17:37</span>
						<span class="space">阅读：21万+</span>
					</p>
				</div>
				<div class="newsContent">
					<p>冬季不少女性都容易出现手脚冰凉的情况，手脚冰凉的主要原因是冬季人体新陈代谢速度下降，同时低温会令血管收缩，血液的回流能力下降，使得手脚等部位的血液循环不畅而引起的。调理手脚冰凉除了用暖手宝以外，也可以通过饮食调理，促进血液循环，令手脚自然暖起来。</p>
					<p class="tac mt10"><img src="../assets/images/example/nshow1.jpg"></p>
					<p class="mt10">格林斯潘在接受彭博社(Bloomberg)采访时谈到了围绕比特币市场及其面临的一些问题，以及比特币作为支付手段等相关的主题。他站在机构的角度谈到了一些见解，提到“注入的流动性越多，加密货币市场就越好”，他指出华尔街正跃跃欲试，准备“参与进来”。</p>
					<p class="mt10">“正如我们所谈到的，他们正在搭建通往比特币的桥梁。我们不知道他们是否会全力做多还是做空。但最重要的是，他们已经准备好接受比特币并向这个市场注入新的流动性，至少应该能稳定市场和价格。”</p>
				</div>
				
				<div class="nshowOpn">
					<section class="item">
						<a href="javascript:void(0)" class="btn bbgf" id="zan">
							<i class="iconfont icon-p-zan"></i>
							<span>237</span>
						</a>
					</section>

					<section class="item">
						<a href="javascript:void(0)" class="btn bbgf" id="nolike">
							<i class="iconfont icon-yswh-del"></i>
							<span>不喜欢</span>
						</a>
					</section>
				</div>

			</div>
            </div>
        <Footer></Footer>
  </div>      
</template>

<script>
import Header from "./public/Header";
import Footer from "./public/Footer";
export default {
  name: "ShowBox",
  components: {
    Header,
    Footer
   }
};

</script>
<style scoped>
@import '../assets/stylesheets/css.css';
</style>