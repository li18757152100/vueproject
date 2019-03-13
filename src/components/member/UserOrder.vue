<!--  -->
<template>
  <div class="userOrder bbline">
    <router-link to="/myorder">
				<div class="tap userTit">
					<span class="name">我的订单</span>
					<span class="view">查看全部 <i class="iconfont icon-a12r"></i></span>
				</div>
    </router-link>   
				<ul class="userOrderNav clearfix">

					<li class="item" v-for="item in UserOrderLst" :key="item.id" @click="handleClick(item.path)">
						<div  class="tap"><img :src="item.imgurl">
							<p>{{item.typename}}</p>
						</div>
					</li>
				
				</ul>
			</div>

</template>

<script>
import router from "../../router";
export default {
name:'userOrder',
  data () {
    return {
        UserOrderLst:[
                {
                   imgurl: require('../../assets/images/icon/dfk.png'),              
                    typename:'待付款', 
                    path:'/help',    
                       id:1
				},
				{
                   imgurl: require('../../assets/images/icon/dfh.png'),              
                   typename:'待发货', 
                   path:'/help',     
                       id:2
				},
				{
                   imgurl: require('../../assets/images/icon/dsh.png'),              
                    typename:'待收货', 
                    path:'/help',      
                       id:3
				},
				{
                   imgurl: require('../../assets/images/icon/dpj.png'),              
                   typename:'待评价',
                   path:'/help',      
                       id:4
                },
				{
                   imgurl: require('../../assets/images/icon/thgl.png'),              
                   typename:'退款售后',
                   path:'/help',    
                       id:5
                }
        ]
    }
  },
methods:{
     handleClick(path){
           router.push(path);
         }
  }
}

</script>
<style scoped>
@import '../../assets/stylesheets/m-css.css'; 
</style>