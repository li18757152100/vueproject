<!--  -->
<template>
  <div class='CarBox'>
      <Header></Header>
      <div class='NeiContent'>
          <div class="cars">
				<ul class="carList">
					<li class="item">
						<div class="tap mui-table-view-cell">
							
							<div class="carGoods mui-slider-handle">
								<input type="checkbox" class="rcheck checkGoods" name="checkGoods">
								<a href="show.html" class="imgbox">
									<img class="lazy" src="../assets/images/example/p1.jpg" >
								</a>
								<div class="content">
									<div class="hd">
										<div class="amount">
											<span class="Reduce"></span>
											<input type="number" value="1" />
											<span class="Increase"></span>
										</div>
										<h2 class="name">
											<a href="show.html">LUSH 露诗小紅帽新生防脱生发洗发皂 55克 </a>
										</h2>
									</div>
									<p class="attr">规格: 550mg/片*100片</p>
									<p class="pay">
										<span class="price">¥ <em class="unit">6630.00</em></span>
										<span class="num">x<em class="cnum">1</em></span>
									</p>
								</div>
								<div class="del">
									<span>删除</span>
								</div>
							</div>
						</div>
					</li>
					<li class="item">
						<div class="tap mui-table-view-cell">
							
							<div class="carGoods mui-slider-handle">
								<input type="checkbox" class="rcheck checkGoods" name="checkGoods">
								<a href="show.html" class="imgbox">
									<img class="lazy" src="../assets/images/example/p5.jpg" >
								</a>
								<div class="content">
									<div class="hd">
										<div class="amount">
											<span class="Reduce"></span>
											<input type="number" value="1" />
											<span class="Increase"></span>
										</div>
										<h2 class="name">
											<a href="show.html">LUSH 露诗小紅帽新生防脱生发洗发皂 55克 </a>
										</h2>
									</div>
									<p class="attr">规格: 550mg/片*100片</p>
									<p class="pay">
										<span class="price">¥ <em class="unit">6630.00</em></span>
										<span class="num">x<em class="cnum">1</em></span>
									</p>
								</div>
								<div class="del">
									<span>删除</span>
								</div>
							</div>
						</div>
					</li>

					<li class="item">
						<div class="tap mui-table-view-cell">
						
							<div class="carGoods mui-slider-handle">
								<input type="checkbox" class="rcheck checkGoods" name="checkGoods">
								<a href="show.html" class="imgbox">
									<img class="lazy" src="../assets/images/example/p9.jpg" >
								</a>
								<div class="content">
									<div class="hd">
										<div class="amount">
											<span class="Reduce"></span>
											<input type="number" value="1" />
											<span class="Increase"></span>
										</div>
										<h2 class="name">
											<a href="show.html">LUSH 露诗小紅帽新生防脱生发洗发皂 55克 </a>
										</h2>
									</div>
									<p class="attr">规格: 550mg/片*100片</p>
									<p class="pay">
										<span class="price">¥ <em class="unit">296.00</em></span>
										<span class="num">x<em class="cnum">1</em></span>
									</p>
								</div>
								<div class="del">
									<span>删除</span>
								</div>
							</div>
						</div>
					</li>
					<li class="item">
						<div class="tap mui-table-view-cell">

							<div class="carGoods mui-slider-handle">
								<input type="checkbox" class="rcheck checkGoods" name="checkGoods">
								<a href="show.html" class="imgbox">
									<img class="lazy" src="../assets/images/example/p12.jpg" >
								</a>
								<div class="content">
									<div class="hd">
										<div class="amount">
											<span class="Reduce"></span>
											<input type="number" value="1" />
											<span class="Increase"></span>
										</div>
										<h2 class="name">
											<a href="show.html">LUSH 露诗小紅帽新生防脱生发洗发皂 55克 </a>
										</h2>
									</div>
									<p class="attr">规格: 550mg/片*100片</p>
									<p class="pay">
										<span class="price">¥ <em class="unit">296.00</em></span>
										<span class="num">x<em class="cnum">1</em></span>
									</p>
								</div>
								<div class="del">
									<span>删除</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<div class="car-none">
				<img src="../assets/images/icon/car-none.png" class="imgbox">
				<div class="dsp">亲，购物车空空的耶~赶紧挑宝贝吧！</div>
				<div class="opn">
					<a href="list.html" class="btns">去逛逛</a>
				</div>
			</div>

			<!--购物金额统计开始-->
			<div class="total-box fixed">
				<div class="T-count check">
					<input type="checkbox" class="rcheck checkCar" name="checkCar"> 全选
					<span id="tnumber" class="red">0</span>件，总额：<span class="red">¥<em id="tmoney">0.00</em></span></div>
				<router-link to="/order">
				<a href="javacript:;" class="gobuy">去结算</a>
				</router-link>
			</div>
			<div class="kh-49"></div>
			<!--购物金额统计结束-->
     </div>
      <Footer></Footer>
  </div>
</template>

<script>
import router from "../router";
import Header from "./public/Header";
import Footer from "./public/Footer";
export default {
    name:'CarBox',
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer
   },
	methods:{
     handleClick(index){
           router.push(`/show/${index}`);
         }
  }
}

</script>
<style scoped>
@import '../assets/stylesheets/css.css';
</style>