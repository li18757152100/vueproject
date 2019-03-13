<!--  -->
<template>
  <div class='XgmmBox'>
      <Header></Header>
      <div class='NeiContent'>
         <ul class="form-list f-list-mt10">
				<li class="item f-list-pl4">
					<span class="name">旧<em class=" spacep"></em>密<em class=" spacep"></em>码</span>
					<input type="text" class="txt" value="" placeholder="输入旧密码">
				</li>
				<li class="item f-list-pl4">
					<span class="name">新<em class=" spacep"></em>密<em class=" spacep"></em>码</span>
					<input type="text" class="txt" value="" placeholder="输入新密码">
				</li>
				<li class="item f-list-pl4">
					<span class="name">确认密码</span>
					<input type="text" class="txt" value="" placeholder="输入新密码">
				</li>
			</ul>

			<div class="exit-opn"><button class="btn Large" @click="handleButtonClick">提交</button></div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public/Header";
import Footer from "../public/Footer";
import { MessageBox } from 'mint-ui';
export default {
  name:'XgmmBox',  
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