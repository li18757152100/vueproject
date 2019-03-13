<!--  -->
<template>
  <div class='MyCollectBox'>
      <Header></Header>
        <div class='NeiContent'>
            <ul class="myCollection">
				<li class="goodsItem" v-for="(item,index) in CollectLst" :key="item.id">
					<div class="tap" @click="handleClick(index)">
						<div class="imgbox">
							<img class="lazy" v-lazy="item.imgurl">
						</div>
						<div class="content">
							<h2 class="name">{{item.title}}</h2>
							<p class="price">
								<span class="c2">价格：</span>
								<span class="red">¥</span>
								<span class="unit red">{{item.nPrice}}</span>
							</p>
							<p class="info">
								<span>{{item.time}}</span>
								<button class="btn bbgf">取消收藏</button>
							</p>
						</div>
					</div>
				</li>
				
				
			</ul>
        </div>   
      <Footer></Footer>
  </div>
</template>

<script>
import router from "../../router";
import Header from "../public/Header";
import Footer from "../public/Footer";
export default {
  name:'MyCollectBox',  
  data () {
    return {
        CollectLst:[
                {
                   imgurl: require('../../assets/images/example/p1.jpg'),              
                    title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
                   nPrice:399.00,
                     time:'2018.05.30 16:28',									
                       id:1
                },
                {
                   imgurl: require('../../assets/images/example/p2.jpg'),              
                    title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
                   nPrice:399.00,
                     time:'2018.05.30 16:28',									
                       id:2
                },
                {
                   imgurl: require('../../assets/images/example/p3.jpg'),              
                    title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
                   nPrice:399.00,
                     time:'2018.05.30 16:28',									
                       id:3
                },
                {
                   imgurl: require('../../assets/images/example/p4.jpg'),              
                    title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
                   nPrice:399.00,
                     time:'2018.05.30 16:28',									
                       id:4
                },
                {
                   imgurl: require('../../assets/images/example/p5.jpg'),              
                    title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
                   nPrice:399.00,
                     time:'2018.05.30 16:28',									
                       id:5
                },
                {
                   imgurl: require('../../assets/images/example/p6.jpg'),              
                    title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
                   nPrice:399.00,
                     time:'2018.05.30 16:28',									
                       id:6
                },
                {
                   imgurl: require('../../assets/images/example/p7.jpg'),              
                    title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
                   nPrice:399.00,
                     time:'2018.05.30 16:28',									
                       id:7
                },
                {
                   imgurl: require('../../assets/images/example/p8.jpg'),              
                    title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
                   nPrice:399.00,
                     time:'2018.05.30 16:28',									
                       id:8
                }
        ]
    }
  },
  components: {
    Header,  
    Footer
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
   @import '../../assets/stylesheets/public.css';
</style>