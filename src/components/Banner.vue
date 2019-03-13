<template>
    <div class="swiper-container" id="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in BannerLst" :key="item.id">
              <img :src="item.imgurl">
              
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" id="pag1"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

        
    </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      BannerLst : [
                {
                  imgurl:require('../assets/images/example/focus1.jpg'),
                  id:1
                  },
                {
                  imgurl:require('../assets/images/example/focus2.jpg'),
                  id:2
                  },
                {
                  imgurl:require('../assets/images/example/focus3.jpg'),
                  id:3
                }
               
                    ]
    }
  },
   mounted(){
        var mySwiper = new Swiper('#banner', {
          autoplay: 4000,//可选选项，自动滑动 
          //分页器 
          pagination : '#pag1', 
          paginationClickable :true, 
          autoplayDisableOnInteraction : false,
          observer: true,
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',



        })
      }
}
</script>
<style>
@import '../assets/stylesheets/index.css';

</style>
