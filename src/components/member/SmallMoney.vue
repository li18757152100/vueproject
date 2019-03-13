<!--  -->
<template>
  <div class="SmallMoneyBox">
		<div class="rechargeAmount box mt10">
				<div class="bts">小额提现 <span class="c2 fs1">[秒到账]</span></div>
				<dl>
					<dd v-for="(item,index) in MoneyLst" :key="index"  @click="selected(item)" :class="{active: activeName == item}">
						<a href="javascript:;">
							<p class="value">{{item.value}}</p>
							<p class="gifts">{{item.gifts}}</p>
						</a>
					</dd>
					
				</dl>
			</div>		
</div>

</template>

<script>
export default {
name:'SmallMoneyBox',
  data () {
    return {
		 MoneyLst: [
			    {
            
					value:'2元', 
					gifts:'2元兑换(限首次)',    
                       id:1
				},
				{
            
					value:'10元', 
					gifts:'10元兑换(限首次)',    
                       id:2
				},
				{
            
					value:'20元', 
					gifts:'20元兑换(限首次)',    
                       id:3
				},
				{
            
					value:'50元', 
					gifts:'49元兑换(限首次)',    
                       id:4
				},
				{
            
					value:'100元', 
					gifts:'97元兑换(限首次)',    
                       id:5
				},
				{
            
					value:'200元', 
					gifts:'193元兑换(限首次)',    
                       id:6
				}
    ],
    activeName: ''
    }
  },
  methods: {
    selected: function(item) {
      this.activeName = item
    }
  }
}

</script>
<style scoped>
@import '../../assets/stylesheets/m-css.css'; 
</style>