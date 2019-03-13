<!--  -->
<template>
  <div class='UserNewBox'>
      <Header></Header>
        <div class='NeiContent'>
           <ul class="myCollection myNews">

				<li class="item" v-for="(item,index) in MyNewLst" :key="item.id">
					<div class="tap"  @click="handleClick(index)">
						<div class="imgbox">
							<img class="lazy" v-lazy="item.imgurl">
						</div>
						<div class="content">
							<h2 class="name">{{item.title}}</h2>
							<p class="info">
								<span>{{item.time}}</span>
								<span class="del"></span>
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
  name:'UserNewBox',  
  data () {
    return {
      MyNewLst:[
                {
                   imgurl: require('../../assets/images/example/n1.jpg'),              
                    title:'20岁后女性最易贫血 冬季补血必吃3种食物',
                     time:'2018.05.30 16:28',									
                       id:1
                },
                {
                   imgurl: require('../../assets/images/example/n2.jpg'),              
                    title:'20岁后女性最易贫血 冬季补血必吃3种食物',
                     time:'2018.05.30 16:28',									
                       id:2
                }
                ,
                {
                   imgurl: require('../../assets/images/example/n3.jpg'),              
                    title:'20岁后女性最易贫血 冬季补血必吃3种食物',
                     time:'2018.05.30 16:28',									
                       id:3
                },
                {
                   imgurl: require('../../assets/images/example/n4.jpg'),              
                    title:'20岁后女性最易贫血 冬季补血必吃3种食物',
                     time:'2018.05.30 16:28',									
                       id:4
                },
                {
                   imgurl: require('../../assets/images/example/n5.jpg'),              
                    title:'20岁后女性最易贫血 冬季补血必吃3种食物',
                     time:'2018.05.30 16:28',									
                       id:5
                },
                {
                   imgurl: require('../../assets/images/example/n6.jpg'),              
                    title:'20岁后女性最易贫血 冬季补血必吃3种食物',
                     time:'2018.05.30 16:28',									
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
           router.push(`/nshow/${index}`);
         }
  }
}

</script>
<style scoped>
   @import '../../assets/stylesheets/m-css.css';  
   @import '../../assets/stylesheets/public.css';
</style>