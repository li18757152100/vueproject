<!--  -->
<template>
  <div class='JbzlBox'>
      <Header></Header>
      <div class='NeiContent'>
         <ul class="form-list f-list-mt10 bbline">

				<li class="item f-list-pl4">
					<span class="name">昵<em class="space2"></em>称</span>
					<input type="text" class="txt" placeholder="请填写昵称">
				</li>

				<li class="item f-list-pl4 arrow" id="gender">
					<span class="name">性<em class="space2"></em>别</span>
					<input type="text" class="txt"  placeholder="请选择性别">
					<i class="iconfont icon-a12b"></i>
				</li>

				<li class="item f-list-pl4 arrow">
					<span class="name">出生年月</span>
					<input type="text" class="txt"  placeholder="请选择日期">
					<i class="iconfont icon-a12b"></i>
				</li>

				<li class="item f-list-pl4 arrow">
					<span class="name">居住地址</span>
					<input type="text" class="txt" id="home" placeholder="请选择地址">
					<i class="iconfont icon-a12b"></i>
				</li>

				<li class="item f-list-pl4">
					<span class="name">联系邮箱</span>
					<input type="text" class="txt" placeholder="请填写邮箱地址">
				</li>

				<li class="item f-list-pl4">
					<span class="name">联系 QQ</span>
					<input type="text" class="txt" placeholder="请填写联系QQ">
				</li>
			</ul>

			<div class="exit-opn">
				<button class="btn" @click="handleButtonClick">保存</button>
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
  name:'JbzlBox',  
  data () {
    return {
    }
  },
  components: {
    Header,  
    Footer
   },
   methods: {
    handleButtonClick: function () {
      MessageBox('提示','修改成功！')
    }
    }
}

</script>
<style scoped>
   @import '../../assets/stylesheets/m-css.css';  
   @import '../../assets/stylesheets/public.css';
</style>