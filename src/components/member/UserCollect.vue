<!--  -->
<template>
  <div class="userCollect bbline mt10">
    <router-link to="/mycollect">
				<div class="tap userTit">
					<span class="name">我的收藏<em class="c2">89</em></span>
					<span class="view">查看全部 <i class="iconfont icon-a12r"></i></span>
				</div>
    </router-link>
				<ul class="userCollectList clearfix">

					<li class="item" v-for="(item,index) in CollectLst" :key="item.id">
						<div @click="handleClick(index)"  class="tap">
							<img v-lazy="item.imgurl" class="thumb" />
							<p class="price c5">¥{{item.price}}</p>
						</div>
					</li>
					
					
				</ul>
			</div>


</template>

<script>
import router from "../../router";
export default {
name:'UserCollect',
  data () {
    return {
		CollectLst:[
                {
                   imgurl: require('../../assets/images/example/p12.jpg'),              
                    price:2565.00,     
                       id:1
				},
				{
                   imgurl: require('../../assets/images/example/p10.jpg'),              
                    price:2565.00,     
                       id:2
				},
				{
                   imgurl: require('../../assets/images/example/p8.jpg'),              
                    price:2565.00,     
                       id:3
				},
				{
                   imgurl: require('../../assets/images/example/p6.jpg'),              
                    price:2565.00,     
                       id:4
                }
        ]
    }
  },
  methods:{
     handleClick(index){
           router.push(`/show/${index}`);
         }
  }
}

</script>
<style scoped>
@import '../../assets/stylesheets/m-css.css'; 
</style>