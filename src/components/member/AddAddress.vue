<!--  -->
<template>
  <div class='AddAddressBox'>
     <header class="mui-bar header" >
			<h1 class="mui-title">{{$route.meta.title}}</h1>
       <router-link to="/myaddress">
			<div class="fl LeftArrow iconfont icon-modal-close c1" style="top:0px;"></div>
        </router-link>
		</header>
        <div class='NeiContent'>
           <div id="addAddrScroll" class="modalScrollBox">
				<div class="mui-scroll">
					<ul class="form-list bbline">

						<li class="item f-list-pl4">
							<span class="name">收货人</span>
							<input type="text" class="txt" value="" placeholder="请输入收货人姓名">
						</li>

						<li class="item f-list-pl4">
							<span class="name">省/市/区</span>
							<input type="text" class="txt" id="addr" value="" placeholder="请选择省/市/区">
							<i class="iconfont icon-a12b"></i>
						</li>

						<li class="item f-list-pl4">
							<span class="name">详细地址</span>
							<input type="text" class="txt" value="" placeholder="请输入街道门牌信息">
						</li>

						<li class="item f-list-pl4">
							<span class="name">联系电话</span>
							<input type="text" class="txt" value="" placeholder="请输入手机号或座机号码">
						</li>

						<li class="item">
							<div class="tap">
								<span class="name">设为默认地址</span>
								<div class="mui-switch mui-switch-mini" id="auto-renewal">
									 <mt-switch v-model="value" @change="turn" class='AddSwitch'></mt-switch>
								</div>
							</div>
						</li>
					</ul>

					<div class="exit-opn">
						<a href="javascript:void(0)" class="btn Large">提交</a>
					</div>

				</div>
			</div>
        </div>   
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../public/Footer";
export default {
  name:'AddAddressBox',  
  data () {
    return {
      	value: true
    }
  },
  components: {
    Footer
   },
   methods:{
  	turn: function(){
  		console.log(this.value)
    }
    }
}

</script>
<style scoped>
   @import '../../assets/stylesheets/m-css.css';  
   @import '../../assets/stylesheets/public.css';
</style>