<!--  -->
<template>
  <div class="box mt10">
				<div class="idx-title bbline">
					<span class="name fs2 fwb">热门资讯</span>
					<router-link to="/news">
					<div class="views">
						<span>更多</span>
						<i class="iconfont icon-a12r"></i>
					</div>
					 </router-link>
				</div>
				<ul class="newsList">
					
					<li class="item" v-for="(item,index) in NewLst" :key="item.id" >
						<div @click="handleClick(index)" class="tap">
							<h4 class="name">{{item.title}}</h4>
							<div class="thumb">
								<div class="imgbox">
									<img v-lazy="item.imgurl" />
								</div>
							</div>
							<p class="info">
								<span>{{item.time}}</span>
								<span class="space">阅读：{{item.read}}</span>
							</p>
						</div>
					</li>
					
					
				</ul>
			</div>
</template>

<script>
import router from "../router";
export default {
  name:'hotnews',  
  data () {
    return {
        NewLst:[
                {
                  imgurl: require('../assets/images/example/n1.jpg'),              
                   title:'20岁后女性最易贫血 冬季补血必吃3种食物',
                    read:'21万+',
                    time:'2018-05-03 17:37',
                      id:1
                },
                {
                  imgurl: require('../assets/images/example/n1.jpg'),              
                   title:'不容忽视！“万人迷”精油有这些使用禁忌',
                    read:'21万+',
                    time:'2018-05-03 17:37',
                      id:2
                },
                {
                  imgurl: require('../assets/images/example/n1.jpg'),              
                   title:'吃海鲜需警惕！研究称海鲜中含塑料微粒',
                    read:'21万+',
                    time:'2018-05-03 17:37',
                      id:3
                }
        ]
    }
	},
	methods:{
     handleClick(index){
           router.push(`/nshow/${index}`);
         }
  }
}

</script>
<style scoped>
@import '../assets/stylesheets/index.css';
</style>