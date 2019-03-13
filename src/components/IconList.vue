<template>
    <div class="IconBox box">
            <ul class="idxNav clearfix">
                  <li v-for ="(item,index) in IconLst" :key="index" class="item" @click="routerLink(index, item.path)"> 
                      <div  class="tap"> 
                        <img :src="item.imgurl" class="img-icon">
                        <div class="name">{{item.typename}}</div>
                      </div> 
                  </li>
                  
            </ul>
    
    </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      IconLst:[
                {
                  imgurl: require('../assets/images/icon/idxNav-1.png'),              
                  typename:'热销产品',
                  path: '/products'
                },
                {
                  imgurl: require('../assets/images/icon/idxNav-2.png'),              
                  typename:'热门资讯',
                  path: '/news'
                },
                {
                  imgurl: require('../assets/images/icon/idxNav-3.png'),              
                  typename:'帮助中心',
                  path: '/help'
                },
                {
                  imgurl: require('../assets/images/icon/idxNav-4.png'),              
                  typename:'产品分类',
                  path: '/products'
                }
        ]
    }
  },
  methods:{
    routerLink(index, path) {
    // 点击哪个路由就赋值给自定义的下下标
    this.navIndex = index;
    // 路由跳转
    this.$router.push(path)
    }

  }
}
</script>
<style scoped>
.IconBg{
  background:#faf8f5;
}
.idxNav .item {
	width: 25%;
	float: left;
}

.idxNav .img-icon {
	width: .9rem;
	height: .9rem;
	margin: 0 auto;
	border-radius: .9rem;
}

.idxNav .tap {
	padding: .3rem;
	color: #65686a;
}

.idxNav .name {
	line-height: 1;
	font-size: .24rem;
	text-align: center;
	margin-top: .3rem;
}
</style>
