<!--  -->
<template>
  <div class='AboutBox'>
      <Header></Header>
      <div class='NeiContent'>
         <div class="about box clearfix">
				<div class="aboutCnt">
					<p>隶属于上海法和信息科技有限公司，是国内领先的法律服务平台，致力于为用户提供优质法律服务。</p>
					<p>wosale首创的“律师竞标”模式，竭力破除法律行业的强专业壁垒和信息不对称，帮助用户选择律师，最大化自己的合法权益。赢了网成立至今以其诚信、透明、公平、高效、创新的特征赢得了用户口碑。</p>
					<p>&nbsp;</p>
					<p>1、提供真正有价值的法律咨询服务，为用户排忧解惑</p>
					<p>2、帮助用户找到最合适的律师，从而最大化用户的合法权益</p>
					<p>3、破除法律行业的强专业壁垒和信息不对称，让用户明白法律，看懂律师</p>
					<p>4、打造一站式法律服务平台，帮助用户高效、便捷的解决问题</p>
					<p>5、打造人人“信得过”的法律服务平台，竭力保障服务质量，真正做到用户第一</p>
					<p>6、实现人人“请得起”律师，“用得起”法律服务</p>
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
  name:'AboutBox',  
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