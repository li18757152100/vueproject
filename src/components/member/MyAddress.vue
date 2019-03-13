<!--  -->
<template>
  <div class='MyAddressBox'>
      <Header></Header>
        <div class='NeiContent'>
            <ul class="address-list clearfix" >
						
				<li class="item" v-for="(item,index) in AddLst" :key="index" >
					<p class="hd">
						<span class="name">{{item.name}}</span>
						<span class="phone">{{item.tel}}</span>
					</p>
					<p class="info">{{item.address}}</p>
					<div class="opn">
						<div class="setdefault">
							<input name="addr" type="radio" class="rcheck">
							<span>设为默认地址</span>
						</div>
						<div class="btn-box">
              <router-link to="/addaddress">
							<a href="javascript:void(0)" class="btn bbgf">编辑</a>
              </router-link>
							<a href="javascript:void(0)" class="btn bbgf">删除</a>
						</div>
					</div>
				</li>

			</ul>
        </div>   
     <footer class="mui-bar mui-bar-tab footer">
       <router-link to="/addaddress">
			<button class="btn f-full-btn">新增地址</button>
       </router-link>
		</footer>
  </div>
</template>

<script>
import Header from "../public/Header";
export default {
  name:'MyAddressBox',  
  data () {
    return {
       AddLst : [
                {
                  
                  tel:'18757152100',
                  name:'光头强',
                  address:'浙江省杭州市江干区下沙新加坡科技园2幢6层',
                  id:1
                  },
                  {
                  
                  tel:'18757152100',
                  name:'光头强',
                  address:'浙江省杭州市江干区下沙新加坡科技园2幢6层',
                  id:2
                  },
                  {
                  
                  tel:'18757152100',
                  name:'光头强',
                  address:'浙江省杭州市江干区下沙新加坡科技园2幢6层',
                  id:3
                  },
                  {
                  
                  tel:'18757152100',
                  name:'光头强',
                  address:'浙江省杭州市江干区下沙新加坡科技园2幢6层',
                  id:4
                  },
                  {
                  
                  tel:'18757152100',
                  name:'光头强',
                  address:'浙江省杭州市江干区下沙新加坡科技园2幢6层',
                  id:4
                  },
                  {
                  
                  tel:'18757152100',
                  name:'光头强',
                  address:'浙江省杭州市江干区下沙新加坡科技园2幢6层',
                  id:5
                  }
       ]
    }
  },
  components: {
    Header
   }
}

</script>
<style scoped>
   @import '../../assets/stylesheets/m-css.css';  
   @import '../../assets/stylesheets/public.css';
</style>