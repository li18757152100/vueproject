<!--  -->
<template>
  <div class='NoticeBox'>
        <Header></Header>
        <div class='NeiContent'>
             <ul class="noticeList">
				<li class="item" v-for="item in NoticeLst" :key="item.id">
					<div class="tap">
						<p>{{item.title}}</p>
						<i class="iconfont icon-a12r"></i>
					</div>
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
  name:'NoticeBox'  ,
  data () {
    return {
        NoticeLst : [
                {
                  
                  title:'大量金融界人士弃华尔街而加入数字货币浪潮',
                  id:1
                  },
                {
                  
                  title:'央行一锤定音，国家法定数字货币就这么搞？',
                  id:2
                  },
                {
                 
                  title:'欧洲央行：比特币不是无现金社会解决方',
                  id:3
                },
                {
                  
                  title:'从法律角度理解比特币属性',
                  id:4
                  },
                  {
                  
                  title:'高晓松首谈虚拟货币：人类开始货币就是虚拟的',
                  id:5
                  },
                  {
                  
                  title:'规范民间借贷行为 维护经济金融秩序',
                  id:6
                  },
                  {
                  
                  title:'人工智能——中国宁波2018金融科技峰会',
                  id:7
                  },
                  {
                  
                  title:'主要金融市場指數',
                  id:8
                  },
                  {
                  
                  title:'发展普惠金融是一项可以大有作为的事业',
                  id:9
                  },
                  {
                  
                  title:'专家聚首北京研讨艺术品金融市场发展',
                  id:10
                  },
                  {
                  
                  title:'证金公司在金融板块玩起“大腾挪”',
                  id:11
                  },
                  {
                  
                  title:'消费金融竞争进入“白热化”,逐渐回归场景本源',
                  id:12
                  }

           
                    ]
    }
  },
  components: {
    Header,
    Footer
   }
}

</script>
<style scoped>
@import '../assets/stylesheets/css.css';
</style>