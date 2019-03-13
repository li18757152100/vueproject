<!--  -->
<template>
  <div class='SetBox'>
      <Header></Header>
      <div class='NeiContent'>
          <ul class="set-nav bbline">
				<li class="item">
					<div class="avatar tap mui-table-view-cell" @click="actionSheet">
						<span class="name">头像</span>
						<img src="../../assets/images/icon/avatar.gif" class="lazy"  />
						<i class="iconfont icon-a12r"></i>
					</div>
				</li>

				<li class="item">
					<router-link to="/set_jbzl">
					<div class="tap mui-table-view-cell">
						<span class="name">基本资料</span>
						<span class="dsp">设置</span>
						<i class="iconfont icon-a12r"></i>
					</div>
					</router-link>
				</li>
				
				<li class="item">
					<a href="" class="tap mui-table-view-cell">
						<span class="name">实名认证</span>
						<span class="dsp green">已认证</span>
						<i class="iconfont icon-a12r"></i>
					</a>
				</li>

				<li class="item">
					<a href="" class="tap mui-table-view-cell">
						<span class="name">手机绑定</span>
						<span class="dsp">187****2100</span>
						<i class="iconfont icon-a12r"></i>
					</a>
				</li>

				<li class="item">
                    <router-link to="/set_xgmm">
					<div class="tap mui-table-view-cell">
						<span class="name">修改密码</span>
						<span class="dsp">修改</span>
						<i class="iconfont icon-a12r"></i>
					</div>
                    </router-link>
				</li>
			</ul>

			<ul class="set-nav bbline btline mt10">
				<li class="item">
					<a href="javascript:void(0)" class="tap mui-table-view-cell">
						<span class="name">清除应用缓存</span>
						<span class="dsp">10.2MB</span>
						<i class="iconfont icon-a12r"></i>
					</a>
				</li>
				<li class="item">
					<div class="tap mui-table-view-cell">
						<span class="name">消息推送</span>
						
                            <mt-switch v-model="value" @change="turn"></mt-switch>
						
					</div>
				</li>
			</ul>

			<ul class="set-nav bbline btline mt10">
				<li class="item">
                    <router-link to="/about">
					<div class="tap mui-table-view-cell">
						<span class="name">关于我们</span>
						<i class="iconfont icon-a12r"></i>
					</div>
                    </router-link>
				</li>

				<li class="item">
                    <router-link to="/help">
					<div class="tap mui-table-view-cell">
						<span class="name">帮助中心</span>
						<i class="iconfont icon-a12r"></i>
					</div>
                    </router-link>
				</li>

				<li class="item">
					<a href="javascript:void(0)" class="tap mui-table-view-cell">
						<span class="name">当前版本</span>
						<span class="dsp">V1.0</span>
						<i class="iconfont icon-a12r"></i>
					</a>
				</li>
			</ul>
         
			<div class="exit-opn">
				<router-link to="/login">
				<div class="btn">退出</div>
				</router-link>
			</div>
      </div>
      <mt-actionsheet
        :actions= "data" v-model="sheetVisible">
    </mt-actionsheet>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public/Header";
import Footer from "../public/Footer";
export default {
  name:'SetBox',  
  data () {
    return {
				value: true,
				// action sheet 选项内容
      data: [{
        name: '拍照',
        method : this.getCamera	// 调用methods中的函数
      }, {
        name: '从相册中选择', 
        method : this.getLibrary	// 调用methods中的函数
      }],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false
    }
  },
  components: {
    Header,  
    Footer
   },
   methods:{
  	turn: function(){
  		console.log(this.value)
		},
		actionSheet: function(){
    	// 打开action sheet
      this.sheetVisible = true;
    },
    getCamera: function(){
      console.log("打开照相机")
    },
    getLibrary: function(){
      console.log("打开相册")
    }
  }

}

</script>
<style scoped>
   @import '../../assets/stylesheets/m-css.css';  
   @import '../../assets/stylesheets/public.css';
</style>