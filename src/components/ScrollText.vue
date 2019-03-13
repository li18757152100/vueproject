<!--  -->
<template>
  <div class='ScrollTextBox '>
           <div class="TextScrollBox clearfix">
				<i class="iconfont icon-mycm-gonggao"></i>
				<div class="TextScroll" id="TextScroll">
					<ul class="clearfix" id="con1" ref="con1" :class="{anim:animate==true}" >
						<li v-for='(item,index) in ScrollTextLst' :key="index">
							<div class='ItemKey' @click="handleClick(index)">{{item.title}}</div>
							<span class="date">{{item.data}}</span>
						</li>
						
					</ul>
				</div>
			</div>
</div>


</template>

<script>
import router from "../router";
export default {
    name:'ScrollTextBox',
  data () {
    return {
        animate:false,
ScrollTextLst:[  //消息列表对应的数组
     {title:"20岁后女性最易贫血 冬季补血必吃3种食物",data:'03-11'},
     {title:"不容忽视！“万人迷”精油有这些使用禁忌",data:'03-11'},
     {title:"吃海鲜需警惕！研究称海鲜中含塑料微粒",data:'03-11'}
   ]

    }
  },
  created(){
  setInterval(this.scroll,1500) // 在钩子函数中调用我在method 里面写的scroll()方法，注意此处不要忘记加this,我在这个位置掉了好几次坑，都是因为忘记写this。
},
methods: {
  scroll(){
       this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
       setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
               this.ScrollTextLst.push(this.ScrollTextLst[0]);  // 将数组的第一个元素添加到数组的
               this.ScrollTextLst.shift();               //删除数组的第一个元素
               this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
       },500)
    },
  handleClick(index){
           router.push(`/nshow/${index}`);
         }
}


 
}

</script>
<style scoped>
.anim{
    transition: all 0.5s;
    margin-top: -30px;
}
</style>