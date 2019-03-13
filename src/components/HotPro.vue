<!--  -->
<template>
  <div class="mt10">
				<div class="idx-tit">
					<span class="name">新品推荐</span>
				</div>

				<ul class="plist">

					<li class="item" v-for="(item,index) in HotLst" :key="item.id">
						<div @click="handleClick(index)" class="tap">
							<img v-lazy="item.imgurl" class="thumb" />
							<div class="content">
								<h3 class="name">{{item.title}}</h3>
								<p class="price">
									<span class="nPrice red">¥{{item.nPrice}}</span>
									<span class="oPrice">¥{{item.oPrice}}</span>
								</p>
								<p class="volume">{{item.volume}}</p>
							</div>
						</div>
					</li>


				</ul>

			</div>
</template>

<script>
import router from "../router";
export default {
  name:'hotproducts',  
  data () {
    return {
        HotLst:[
                {
                  imgurl: require('../assets/images/example/p6.jpg'),              
									title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
									nPrice:399.00,
									oPrice:599.00,
									volume:'月销1092笔',
                  id:1
                },
                {
                  imgurl: require('../assets/images/example/p5.jpg'),              
									title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
									nPrice:399.00,
									oPrice:599.00,
									volume:'月销1092笔',
                  id:2
                },
                {
                  imgurl: require('../assets/images/example/p4.jpg'),              
									title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
									nPrice:399.00,
									oPrice:599.00,
									volume:'月销1092笔',
                  id:3
                },
                {
                  imgurl: require('../assets/images/example/p3.jpg'),              
									title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
									nPrice:399.00,
									oPrice:599.00,
									volume:'月销1092笔',
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
@import '../assets/stylesheets/index.css';
</style>