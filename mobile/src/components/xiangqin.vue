<template>
	<div>
		<div class="w-lb-b">
			<mt-search v-model="value" placeholder="搜索商品和美食" id="w-lb-c"></mt-search>
		</div>
		<div class="w-lb-e">
			<div class="w-lb-f">
				<img src="../assets/img/meishi.png" alt="" class="w-lb-g"><br>
				<span>美食</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/yinpin.png" alt="" class="w-lb-g"><br>
				<span>饮品</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/chaoshi.png" alt="" class="w-lb-g"><br>
				<span>超市</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/shuiguo.png" alt="" class="w-lb-g"><br>
				<span>水果</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/shouye.png" alt="" class="w-lb-g"><br>
				<span>鲜花</span>
			</div>
		
		</div>
		<div class="w-lb-d">
			<mt-swipe :auto="4000" class='w-lb'>
			  <mt-swipe-item><img src="../assets/img/w-1.jpg" alt="" class="w-lb-a"></mt-swipe-item>
			 <mt-swipe-item><img src="../assets/img/w-2.jpg" alt="" class="w-lb-a"></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/img/w-3.jpg" alt="" class="w-lb-a"></mt-swipe-item>
			</mt-swipe>
		</div>
		
	</div>
</template>

<script>
	 export default {
	data() {
	  return {
		
	  };
	},
	}
</script>

<style>
	.w-lb-g{
		width: 50px;
		height: 40px;
		
	}
	.w-lb-f{
		text-align: center;
		
	}
	.w-lb-e{
		display: flex;
		justify-content: space-around;
	}
	.mint-swipe {
	overflow: hidden;
	position: relative;
	height: 207px;
	margin: 5px;
	text-align: center;
}
.w-lb-d{
	height: 207px;
}
#w-lb-c{
		height: 52px;
		overflow: hidden;
	}
	.w-lb-a{
		width: 400px;
		height: 207px;
	}

	.mint-searchbar-inner{
		border-radius: 10px;
		
	}
	.mint-searchbar{
		color: #41454e;
		background: #f0efef;
	}
	.mint-searchbar-cancel{
		color: #41454e;
		
	}
	
</style>
