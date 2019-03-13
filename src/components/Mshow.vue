<!--  -->
<template>
  <div class='MshowBox'>
        <Header></Header>
            <div class='NeiContent'>
              <ul class="message">
				<li class="item">
					<p class="time">{{$route.params.mid}}--2018年06月11 17:16</p>
					<div class="content"><b class="black">消息：</b>实体店没这个尺码了就想来官网看看的，没想到正好年货节价格很棒！老公很满意！幸好没在实体店调货，要不然亏一百多块钱呢哈哈</div>
				</li>

				<li class="item">
					<p class="time">2018年06月11 17:16</p>
					<div class="content"><b class="black">消息：</b>实体店没这个尺码了就想来官网看看的，没想到正好年货节价格很棒！老公很满意！幸好没在实体店调货，要不然亏一百多块钱呢哈哈</div>
				</li>

			</ul>
		
            </div>
        <Footer></Footer>
  </div>      
</template>

<script>
import Header from "./public/Header";
import Footer from "./public/Footer";
export default {
  name: "MshowBox",
  components: {
    Header,
    Footer
   }
};

</script>
<style scoped>
@import '../assets/stylesheets/css.css';
</style>