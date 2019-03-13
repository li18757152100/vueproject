<!--  -->
<template>
  <div class='ProBox'>
      <Header></Header>
      <div class="filter-bar bbline active" id="filter-bar">
			<ul class="fb-nav" id="fb-nav">
				<li class="tab active" id="sort">
					<a class="tap arrow" href="javascript:void(0)"><span>综合</span></a>
				</li>
				<li class="tab">
					<a class="tap" href="javascript:void(0)"><span>销量</span></a>
				</li>
				<li class="tab" id="oPrice">
					<a class="tap" href="javascript:void(0)"><span>价格</span><i class="arrows"></i></a>
				</li>
				<li class="tab" id="oFilter">
					<a class="tap" href="javascript:void(0)"><span>筛选</span></a>
				</li>
			</ul>
		</div>
      <div class='NeiContent'>
        <div class="kh-44"></div>
      <ul class="plist">
				<li class="item" v-for="(item,index) in ProLst" :key="item.id">
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
      <Footer></Footer>
  </div>
</template>

<script>
import router from "../router";
import Header from "./public/Header";
import Footer from "./public/Footer";
export default {
    name:'ProBox',
  data () {
    return {
      ProLst:[
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
                },
                {
                  imgurl: require('../assets/images/example/p1.jpg'),              
									title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
									nPrice:399.00,
									oPrice:599.00,
									volume:'月销1092笔',
                  id:5
                },
                {
                  imgurl: require('../assets/images/example/p2.jpg'),              
									title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
									nPrice:399.00,
									oPrice:599.00,
									volume:'月销1092笔',
                  id:6
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
@import '../assets/stylesheets/css.css';
</style>