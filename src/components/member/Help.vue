<!--  -->
<template>
  <div class='HelpBox'>
      <Header></Header>
        <div class='NeiContent'>
            <ul class="helpList">
				<li class="item" v-for="(item, index) in HelpLst" :key="item.id" @click="handleClick(index)">
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
import Header from "../public/Header";
import Footer from "../public/Footer";
import router from "../../router";
export default {
  name:'HelpBox',
  data () {
    return {
     HelpLst : [
                {
                  
                  title:'什么是活期宝?',
                  id:1
                  },
                {
                  
                  title:'什么是定期宝？',
                  id:2
                  },
                {
                 
                  title:'犹豫期是指什么?',
                  id:3
                },
                {
                  
                  title:'如何更改绑定的银行卡?',
                  id:4
                  },
                  {
                  
                  title:'购买后看不到收益怎么办?',
                  id:5
                  },
                  {
                  
                  title:'赎回基金/转出保险显示赎回成功，未收到钱怎么办?',
                  id:6
                  },
                  {
                  
                  title:'购买定期宝后是否可以提前赎回?',
                  id:7
                  },
                  {
                  
                  title:'在哪里查看交易明细?',
                  id:8
                  },
                  {
                  
                  title:'锁定期内如何退保?',
                  id:9
                  },
                  {
                  
                  title:'提示开户信息不完整怎么办?',
                  id:10
                  },
                  {
                  
                  title:'如果不转出如何计算收益?',
                  id:11
                  },
                  {
                  
                  title:'固定期限类产品到期后如何转出?',
                  id:12
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
           router.push(`/helpdeatil/${index}`);
         }
  }
}

</script>
<style scoped>
 @import '../../assets/stylesheets/m-css.css'; 
</style>