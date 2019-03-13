<template>
<div class='banner'>
  <div class="swipe-wrapper">
        <mt-swipe :auto="3000" class='mint-swipe'>
            <mt-swipe-item class="item " v-for="item in BannerLst" :key="item.id">
              <img :src="item.imgurl" alt='item.title'>
            </mt-swipe-item>
        </mt-swipe>
    </div>

    
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
                  title:'图片一',
                  id:1
                  },
                {
                  imgurl:require('../assets/images/example/focus2.jpg'),
                  title:'图片二',
                  id:2
                  },
                {
                  imgurl:require('../assets/images/example/focus3.jpg'),
                  title:'图片三',
                  id:3
                }
               
                    ]
  }
  }
}
</script>
<style>
.swipe-wrapper{
      width: 100%;
   
  }
.mint-swipe {
      height: 141px;
      color: #fff;
      font-size: 30px;
      text-align: center;
      background: #000
    } 
.mt-swipe-item {
  height:141px
}     
.item{
    text-align: center;
    font-size: 40px;
    color: white;
}
.item img{
  width:100%;
  height:auto;
  display: block;
}
 .banner .mint-swipe-indicator {
    width: 10px;
    height: 3px;
    background: #fff;
    opacity: .75;
    border-radius: 0;
    transform: skewX(45deg);
  }

  .banner .mint-swipe-indicator.is-active {
    width: 15px;
    background: #48b3e2;
    opacity: .75;}  
  @media all and (min-width:320px) {
     .mint-swipe{
       height: 120px;
       }
  }  
</style>
