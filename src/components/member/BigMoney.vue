<!--  -->
<template>
  <div class="BigMoneyBox">
		<div class="rechargeAmount box mt10">
				<div class="bts">大额提现 <span class="c2 fs1">[人工审核，工作日24小时内到账]</span></div>
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
name:'BigMoneyBox',
  data () {
    return {
		 MoneyLst: [
			    {
            
					value:'500元', 
					gifts:'475元兑换',    
           id:1
				},
				{
            
					value:'1000元', 
					gifts:'950元兑换',    
          id:2
				},
				{
            
					value:'2000元', 
					gifts:'1900元兑换',    
           id:3
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