<!--  -->
<template>
  <div class='PshowBox'>
     
      <!-- header start -->
		<header class="header" >
			<div class="h-nav">
				<a href="" class="tab active">商品</a>
				<a href="" class="tab">评论</a>
			</div>
			<a class="iconfont icon-back fl LeftArrow"  @click="goBack"></a>
			<a href="javascript:;" class="carts iconfont icon-p-car" >
				<router-link to="/car">
				<span class="carnum" >1</span>
				</router-link>
			</a>
		</header>
		<!-- header end -->
		<div class='NeiContent'>
			 <!--shoppic start-->
			 <div class="swiper-container" id="shop">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in ShopLst" :key="item.id">
              <img :src="item.imgurl">
              
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" id="pags"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

        
    </div>
			 <!--shoppic end-->
			 <!--产品基本信息开始-->
			<div class="show-info">
				<div class="hd">
					<h2 class="name">LUSH 露诗小紅帽新生防脱生发洗发皂 55克 </h2>
					<a href="javascript:void(0)" class="share iconfont icon-p-share" @click="showVuePopup(true)"></a>
				</div>
				<div class="price">
					<span class="unit red">¥</span>
					<span class="nPrice red">8319.00</span>
					<span class="oPrice">¥9605.00</span>
					<span class="num">销量：1092</span>
				</div>
			</div>
			<!--产品基本信息结束-->
			<!--产品促销信息开始-->
			<div class="promotions active mt10">
				<div class='tit'>
					<span class='name'>促销</span>
					<span class='name-dsp'>可享受以下促销</span>
					<span class="iconfont icon-a12b"></span>
				</div>
				<ul>
					<li class='item'>
						<span class='label'>满送</span>
						<span class='name'>满19元即赠送热销商品，赠完为止</span>
					</li>
					<li class='item'>
						<span class='label'>满减</span>
						<span class='name'>单笔订单满200元，送10元现金券</span>
					</li>
				</ul>
			</div>
			<!--产品促销信息结束-->
      <!--产品参数开始-->
			<ul class="list-tab mt10">
				<li class="item" @click="cshowVuePopup(true)">
					<div class="tap" >
						<span class='name'>产品参数</span>
						<i class="icon-a12r"></i>
					</div>
				</li>
				<li class="item" @click="ashowVuePopup(true)">
					<div class="tap" >
						<span class="name">选择 颜色分类 尺码</span>
						<i class="icon-a12r"></i>
					</div>
				</li>
			</ul>
			<!--产产品参数结束-->
			<!--图文详情开始-->
			<div class="details box mt10 clearfix">
				<div class="idx-tit bbline">
					<span class="name">图文详情</span>
				</div>
				<div class="content">
					<p class="fwb">价格说明：</p>
					<p>1、划线价、参考价：商品展示的划线价或参考价可能是品牌专柜价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在考拉上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
					<p>2、促销价：如无特殊说明，促销价是销售商在参考价基础上给予的优惠价格。如有疑问，您可以在购买前与客服联系。</p>
					<p>3、考拉价：考拉非会员用户购买的商品详情页显示的售价，是非会员用户最终决定是否购买该商品的依据。</p>
					<p>4、黑卡价：在考拉价的基础上给予黑卡会员用户的优惠价格，仅黑卡会员用户可以黑卡价购买该商品。</p>
					<p>5、价格异常：因可能存在系统缓存、页面更新延迟等不确定性情况，导致价格显示异常，商品具体售价请以订单结算页价格为准。如您发现异常情况出现，请立即联系我们补正，以便您能顺利购物。</p>
					<p><img src="../assets/images/example/d1.jpg"></p>
					<p><img src="../assets/images/example/d2.jpg"></p>
					<p><img src="../assets/images/example/d3.jpg"></p>
					<p><img src="../assets/images/example/d4.jpg"></p>
					<p><img src="../assets/images/example/d5.jpg"></p>
				</div>
			</div>
			<!--图文详情结束-->
			<!-----尺寸开始---------->
			<div class="vue-popup">
            <div class="mask" v-show="show1" @click="ashowVuePopup(false)"></div>
            <transition name="slide">
                <div class="popup-content CanNum" v-show="show1">
									<!---c--->
									<div class="orderBox">
			<div class="orderBoxBg">
				<div class="orderSend">
					<router-link to="/order">
					<a href="javascript:;" class="btn buy" >确定</a>
					</router-link>
				</div>

				<div class="hd">
					<a href="javascript:void(0)" class="close" @click="ashowVuePopup(false)"></a>
					<div class="imgbox">
						<img src="../assets/images/example/p1.jpg">
					</div>
					<div class="content">
						<p class="price red">¥8319.00</p>
						<p class="text">库存：99</p>
						<p class="text">
							<span>已选择：</span>
							<span id="selected"></span>
						</p>
					</div>
				</div>

				<div id="orderScroll" class="modalScrollBox">
					<div class="mui-scroll">
						<div class="orderWrap">

							<div class="orderItem">
								<div class="orderItemTit">颜色分类</div>
								<ul class="orderAttrlist clearfix">
									<li class="active">
										<a href="javascript:void(0)" class="tap">红色</a>
									</li>
									<li>
										<a href="javascript:void(0)" class="tap">亮黑色</a>
									</li>
									<li>
										<a href="javascript:void(0)" class="tap">金色</a>
									</li>
									<li>
										<a href="javascript:void(0)" class="tap">银色</a>
									</li>
									<li>
										<a href="javascript:void(0)" class="tap">深空灰色</a>
									</li>
								</ul>
							</div>

							<div class="orderItem">
								<div class="orderItemTit">存储容量</div>
								<ul class="orderAttrlist clearfix">
									<li class="active">
										<a href="javascript:void(0)" class="tap">64GB</a>
									</li>
									<li>
										<a href="javascript:void(0)" class="tap">256GB</a>
									</li>
								</ul>
							</div>

							<div class="buyamount">
								<div class="bts">购买数量</div>
								<div class="amount">
									<span class="Reduce"></span>
									<input type="number" value="1" />
									<span class="Increase"></span>
								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
		</div>
									<!---c---->
									</div>
            </transition>
        </div>
			<!-----尺寸结束---------->
			<!-----参数开始---------->
			<div class="vue-popup">
            <div class="mask" v-show="show" @click="cshowVuePopup(false)"></div>
            <transition name="slide">
                <div class="popup-content CanNum" v-show="show">
									<!---c--->
									<div class="parameter">
											<div class="container">
											<h3 class="tit">产品参数</h3>
											<table>   
											<tbody>
											<tr>
											<th>CPU品牌</th>
											<td>Apple/苹果 </td>
											</tr>    
											<tr>
											<th>CPU型号</th>
											<td>A11 </td>
											</tr>    
											<tr>
											<th>上市时间</th>
											<td data-spm-anchor-id="a222m.7628550.0.i3">2017-11 </td>
											</tr>    
											<tr>
											<th>屏幕尺寸</th>
											<td>5.8英寸 </td>
											</tr>    
											<tr>
											<th>机身厚度</th>
											<td>7.7mm </td>
											</tr>    
											<tr>
											<th>生产企业</th>
											<td>苹果 </td>
											</tr>    
											<tr>
											<th>电池容量</th>
											<td>1960mAh </td>
											</tr>    
											<tr>
											<th>品牌</th>
											<td>Apple/苹果 </td>
											</tr>    
											<tr>
											<th>Apple型号</th>
											<td>iPhone X </td>
											</tr>    
											<tr>
											<th>网络类型</th>
											<td>无需合约版 </td>
											</tr>    
											<tr>
											<th>款式</th>
											<td>直板 </td>
											</tr>    
											<tr>
											<th>机身颜色</th>
											<td>深空灰色 银色 </td>
											</tr>    
											<tr>
											<th>套餐类型</th>
											<td>官方标配 套餐一 套餐二 套餐三 套餐四 套餐五 套餐六 套餐七 套餐八 </td>
											</tr>    
											<tr>
											<th>后置摄像头</th>
											<td>1200万 </td>
											</tr>    
											<tr>
											<th>操作系统</th>
											<td>iOS </td>
											</tr>    
											<tr>
											<th>附加功能</th>
											<td>不详 </td></tr>    
											<tr>
											<th>售后服务</th>
											<td>全国联保 </td>
											</tr>    
											<tr>
											<th>触摸屏类型</th>
											<td>OLED 全面屏 Multi-Touch 显示 </td>
											</tr>   
											<tr>
											<th>运行内存RAM</th>
											<td>不详 </td>
											</tr>    
											<tr>
											<th>存储容量</th>
											<td>64GB 256GB </td>
											</tr>    
											<tr>
											<th>键盘类型</th>
											<td>虚拟触屏键盘 </td>
											</tr>    
											<tr>
											<th>分辨率</th>
											<td>2436 x 1125 像素分辨率 </td>
											</tr>    
											<tr>
											<th>手机类型</th>
											<td>4G手机 </td>
											</tr>    
											<tr>
											<th>电池类型</th>
											<td>不可拆卸式电池 </td>
											</tr>    
											<tr>
											<th>摄像头类型</th>
											<td>三摄像头（后双） </td>
											</tr>    
											<tr>
											<th>视频显示格式</th>
											<td>不详 </td>
											</tr>    
											<tr>
											<th>网络模式</th>
											<td>无需合约版 </td>
											</tr>    
											<tr>
											<th>核心数</th>
											<td>不详 </td>
											</tr>    
											<tr>
											<th>版本类型</th>
											<td>中国大陆 </td>
											</tr>   
											</tbody>
											</table>
											</div>
											<a href="javascript:void(0)" class="btn f-full-btn close-btn" @click="cshowVuePopup(false)">确定</a>
									</div>
									<!---c---->
									</div>
            </transition>
        </div>
			<!-----参数结束---------->
			<!-----分享开始---------->
			<div class="vue-popup">
            <div class="mask" v-show="show2" @click="showVuePopup(false)"></div>
            <transition name="slide">
                <div class="popup-content" v-show="show2">
									<!---c--->
                  <ul class="share-list clearfix">
										<li id="weixin">
												<a href="#" class="area">
													<span class="imgbox">
												<img src="../assets/images/icon/share-weixin.png">
												</span>
												<p>微信</p></a>
											</li>
											<li id="pyq"><a href="#" class="area">
													<span class="imgbox">
													<img src="../assets/images/icon/share-pyq.png">
													</span><p>朋友圈</p></a></li>
												<li><a href="#" class="area">
														<span class="imgbox">
														<img src="../assets/images/icon/share-xlwb.png">
														</span><p>新浪微博</p></a></li>
													<li><a href="#" class="area">
															<span class="imgbox">
															<img src="../assets/images/icon/share-qq.png">
															</span><p>QQ</p></a>
													</li>
										</ul>
									<a href="javascript:void(0)" class="share-cancel" @click="showVuePopup(false)">取消</a>
									<!---c--->
                </div>
            </transition>
        </div>
			<!------分享结束--------->
		</div>
        <!-- footer start -->
		<footer class="footer">
			<div class="order-bar">
				<a href="chat.html" class="obtn">
					<i class="iconfont icon-p-kefu"></i>
					<p>客服</p>
				</a>
				<a href="javascript:void(0);" class="obtn" id="fav">
					<i class="iconfont icon-p-fav"></i>
					<p>收藏</p>
				</a>
				<a href="javascript:void(0);" class="btn addCarBtn" @click="ashowVuePopup(true)">加入购物车</a>
				<a href="javascript:void(0);" class="btn" @click="ashowVuePopup(true)">立即购买</a>
			</div>
		</footer>
		<!-- footer end -->
  </div>
</template>

<script>
export default {
  name:'PshowBox',
  data () {
    return {
			show: false,
			show1: false,
			show2: false,
			ShopLst : [
                {
                  imgurl:require('../assets/images/example/show1.jpg'),
                  id:1
                  },
                {
                  imgurl:require('../assets/images/example/show2.jpg'),
                  id:2
                  },
                {
                  imgurl:require('../assets/images/example/show3.jpg'),
                  id:3
                },
                {
                  imgurl:require('../assets/images/example/show4.jpg'),
                  id:4
                },
                {
                  imgurl:require('../assets/images/example/show5.jpg'),
                  id:5
                }
               
                    ]
    }
  },
  methods:{
	  	 cshowVuePopup(flag) {
            this.show = flag
				},
			 ashowVuePopup(flag) {
            this.show1 = flag
        },
		   showVuePopup(flag) {
            this.show2 = flag
        },
        goBack:function () {
          window.history.go(-1)
        }
		},
	mounted(){
			var mySwiper = new Swiper('#shop', {
				autoplay: 4000,//可选选项，自动滑动 
				//分页器 
				pagination : '#pags', 
				paginationClickable :true, 
				autoplayDisableOnInteraction : false,
				observer: true,
				loop: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',



			})
		}
}

</script>
<style scoped>
@import '../assets/stylesheets/public.css';
@import '../assets/stylesheets/css.css';
</style>