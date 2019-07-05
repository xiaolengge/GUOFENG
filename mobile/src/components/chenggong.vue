<template>
	<div>
		<div class="w-yd-tbu">
			<div class="w-yd-tbu-b"><router-link to="/index" class="w-dibu-a"><</router-link></div>
			<div><span>支付成功</span></div>
			<div class="w-yd-tbu-c"></div>
		</div>
		
		<div class="w-cgong">
			<div><img src="../assets/img/ok.png" alt=""  class="w-cgong-a" ></div>
			<div><span  class="w-cgong-b">支付成功！制作配送中</span></div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.w-cgong{
		height: 140px;
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.w-cgong-a{
		height: 100px;
		width: 100px;
	}
	.w-cgong-b{
		font-size: 22px;
	}
</style>
