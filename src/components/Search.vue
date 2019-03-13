<!--  -->
<template>
  <div class='SearchBox'>
      <!-- header start -->
		<header class="mui-bar header" >
			<div class="search active" >
				<div class="input-box">
					<i class="iconfont icon-cl-sousuo"></i>
					<i class="sclear"></i>
					<input type="search" class="txt" placeholder="凉鞋">
				</div>
                
				<span class="cancel">
                    <router-link to="/">
                    取消
                    </router-link>
                </span>
               
			</div>
		</header>
		<!-- header end -->
     <!-- search start -->
		<div class="searchLayer active">
			<div class="modalScrollBox">
				<div class="mui-scroll">
					<div class="s-hot clearfix">
						<div class="s-hot-title">最近搜索</div>
						<ul class="s-hot-list clearfix">
							<li>
								<a href="list.html">夹克</a>
							</li>
							<li>
								<a href="list.html">卫衣</a>
							</li>
							<li>
								<a href="list.html">休闲裤</a>
							</li>
							<li>
								<a href="list.html">休闲/运动</a>
							</li>
							<li>
								<a href="list.html">T恤</a>
							</li>
							<li>
								<a href="list.html">ROCOCO洛可可</a>
							</li>
							<li>
								<a href="list.html">HIPANDA</a>
							</li>
						</ul>
					</div>

					<div class="s-hot clearfix">
						<div class="s-hot-title">猜你想找</div>
						<ul class="s-hot-list clearfix">
							<li>
								<a href="list.html">手机壳</a>
							</li>
							<li>
								<a href="list.html">帽子</a>
							</li>
							<li>
								<a href="list.html">卫衣 男</a>
							</li>
							<li>
								<a href="list.html">双肩包</a>
							</li>
							<li>
								<a href="list.html">衬衫</a>
							</li>
							<li>
								<a href="list.html">休闲/运动鞋</a>
							</li>
							<li>
								<a href="list.html">adidas Originals</a>
							</li>
							<li>
								<a href="list.html">小脚裤男</a>
							</li>
							<li>
								<a href="list.html">BOY LONDON</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- search end -->
  </div>
</template>

<script>
export default {
    name:'SearchBox',
  data () {
    return {
    }
  }
}

</script>
<style scoped>
</style>