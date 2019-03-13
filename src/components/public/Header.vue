<!--  -->
<template>
  <header class="mui-bar header">
			<h1 class="mui-title">{{$route.meta.title}}</h1>
			<a class="iconfont icon-back fl LeftArrow"  @click="goBack"></a>
		</header>

</template>

<script>
export default {
  name :"headerbox",
  data () {
    return {
    }
  },
   methods:{
        goBack:function () {
          window.history.go(-1)
        }
    }
}

</script>
<style scoped>
@import '../../assets/stylesheets/public.css';
</style>