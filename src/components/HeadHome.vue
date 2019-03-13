<!--  -->
<template>
    <div class='HeaderBox'>
        <header class="header header-bule" id="header">
                    <h1 class="mui-title">商城跨境</h1>
                  <router-link to="/search">
                      <div class="h-srh iconfont icon-mycm-sousuo" id="sousuo"></div>
                  </router-link>          
                   <router-link to="/message">
				              	<div class="h-msg iconfont icon-mycm-xiaoxi"><span class="num">1</span></div>
                    </router-link>
        </header>
    </div>    
</template>

<script>
export default {
  name:'HeadHome',  
  data () {
    return {
    };
  }
}

</script>
<style scoped>
@import '../assets/stylesheets/index.css';
</style>