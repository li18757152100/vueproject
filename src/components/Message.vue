<!--  -->
<template>
  <div class='MessageBox'>
        <Header></Header>
        <div class='NeiContent'>
             <ul class="message-list clearfix">
                  <li class="item" v-for="(item,index) in MessageLst" :key="item.id">
                    <div @click="handleClick(index)" class="tap">
                      <img :src="item.imgurl" class="avatar">
                      <div class="content">
                        <div class="hd">
                          <span class="name">{{item.title}}</span>
                          <span class="date">{{item.time}}</span>
                        </div>
                        <p class="text">{{item.desc}}</p>
                      </div>
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
import router from "../router";
export default {
  name:'MessageBox'  ,
  data () {
    return {
        MessageLst : [
                {
                  imgurl: require('../assets/images/icon/xiaoxi-fwtz.png'), 
                  titme:'2018年06月11 17:16',
                  title:'服务通知',
                  desc:'您的任务****已通过审核，请尽快完成任务并上传具体信息吧！',
                  id:1
                  },
                {
                  imgurl: require('../assets/images/icon/xiaoxi-xtxx.png'), 
                  titme:'2018年06月11 17:16',
                  title:'系统消息',
                  desc:'您的任务****已通过审核，请尽快完成任务并上传具体信息吧！',
                  id:2
                  },
                {
                 imgurl: require('../assets/images/icon/xiaoxi-ptgg.png'), 
                 titme:'2018年06月11 17:16',
                 title:'平台公告',
                 desc:'您的任务****已通过审核，请尽快完成任务并上传具体信息吧！',
                 id:3
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
           router.push(`/mshow/${index}`);
         }
  }
}

</script>
<style scoped>
@import '../assets/stylesheets/css.css';
</style>