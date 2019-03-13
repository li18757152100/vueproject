<!--  -->
<template>
  <div class='ScrollProBox'>
      <div class="box mt10">
				<div class="idx-title">
					<span class="name fs2 fwb">热卖推荐</span>
					<a href="list.html" class="views">
						<span>更多</span>
						<i class="iconfont icon-a12r"></i>
					</a>
				</div>

				<div class="plist idxNew">
					<div class="Pro-scroll">

						


<div class="swiper-container" id="scrollpro">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in ScrollLst" :key="item.id">
             <!------list-------------->
             <div class='item'>
                 <div class='m5'>
							<div @click="handleClick(index)" class="tap">
								<img :src="item.imgurl" class="thumb" />
								<div class="content">
									<h3 class="name">{{item.title}}</h3>
									<p class="price">
										<span class="nPrice red">¥{{item.nPrice}}</span>
										<span class="oPrice">¥{{item.oPrice}}</span>
									</p>
								</div>
							</div>
                 </div>           
             </div>              
             <!------list-------------->
              
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination" id="pag2"></div> -->
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

        
    </div>


						

					</div>
				</div>
			</div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name:'ScrollProBox',  
  data () {
    return {
        ScrollLst : [
                {
                  imgurl: require('../assets/images/example/p1.jpg'),              
									title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
									nPrice:399.00,
									oPrice:599.00,
									volume:'月销1092笔',
                  id:1
                },
                {
                  imgurl: require('../assets/images/example/p2.jpg'),              
									title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
									nPrice:399.00,
									oPrice:599.00,
									volume:'月销1092笔',
                  id:2
                },
                {
                  imgurl: require('../assets/images/example/p3.jpg'),              
									title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
									nPrice:399.00,
									oPrice:599.00,
									volume:'月销1092笔',
                  id:3
                },
                {
                  imgurl: require('../assets/images/example/p4.jpg'),              
									title:'LUSH 露诗小紅帽新生防脱生发洗发皂 55克',
									nPrice:399.00,
									oPrice:599.00,
									volume:'月销1092笔',
                  id:4
                }
               
                    ]
    
    }
  },
  mounted(){
        var mySwiper = new Swiper('#scrollpro', {
          autoplay: 4000,//可选选项，自动滑动 
          //分页器 
          pagination : '#pag2', 
          slidesPerView: 2,
          paginationClickable :true, 
          autoplayDisableOnInteraction : false,
          observer: true,
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',



        })
      },
      methods:{
     handleClick(index){
           router.push(`/show/${index}`);
         }
  }
}

</script>
<style scoped>
</style>