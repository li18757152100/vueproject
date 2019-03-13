<!--  -->
<template>
    <div class='NewsBox'>
        <Header></Header>
        <div class='NeiContent'>
        <ul class="newsList">

				<li class="item" v-for="(content,index) in contents" :key="content.id">
					<div  class="tap" @click="handleClick(index)">
						<h4 class="name">{{content.title}}</h4>
						<div class="thumb">
							<div class="imgbox" v-for="label in content.labels" :key="label.id">
								<img :src="label.imgurl" />
							</div>
							
						</div>
						<p class="info">
							<span>{{content.time}}</span>
							<span class="space">阅读：{{content.read}}</span>
						</p>
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
	name: "NewsBox",
	data(){
		return{
      contents: [
          {
						id:1,
						time:'2018-05-03 17:37',
						read:'21万+',
            title: '20岁后女性最易贫血 冬季补血必吃3种食物',
            labels: [
                { imgurl:require("../assets/images/example/n1.jpg") },
								{ imgurl:require("../assets/images/example/n4.jpg") },
								{ imgurl:require("../assets/images/example/n3.jpg") }
            ]
          },
          { 
            id:2,
						time:'2018-05-03 17:37',
						read:'21万+',
            title: '不容忽视！“万人迷”精油有这些使用禁忌',
            labels: [
                { imgurl:require("../assets/images/example/n2.jpg") }
            ]
					},
					{
           id:3,
						time:'2018-05-03 17:37',
						read:'21万+',
            title: '吃海鲜需警惕！研究称海鲜中含塑料微粒',
            labels: [
                { imgurl:require("../assets/images/example/n5.jpg") },
								{ imgurl:require("../assets/images/example/n6.jpg") },
								{ imgurl:require("../assets/images/example/n7.jpg") }
            ]
          },
          { 
           id:4,
						time:'2018-05-03 17:37',
						read:'21万+',
            title: '如何健康地快走？不可不知的快走运动要领',
            labels: [
                { imgurl:require("../assets/images/example/n8.jpg") }
            ]
					},
					{
         id:5,
						time:'2018-05-03 17:37',
						read:'21万+',
            title: '7种健康果蔬汁大放送 排毒清淤还滋补身体',
            labels: [
                { imgurl:require("../assets/images/example/n9.jpg") },
								{ imgurl:require("../assets/images/example/n10.jpg") }

            ]
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
};

</script>
<style scoped>
@import '../assets/stylesheets/css.css';
</style>