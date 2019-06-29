<template>
	<div class="w-shizhi-a">
		<div class="w-yd-tbu">
			<div class="w-yd-tbu-b"><router-link to="/wode" class="w-dibu-a"> < </router-link> </div>
			<div><span>设置</span></div>
			<div></div>
		</div>
		<div class="w-shezhi">
			<router-link to="/gerenxxi" class="w-dibu-a"><mt-cell title="个人信息" is-link></mt-cell></router-link>
			<mt-cell title="绑定手机" value="189****1236 " is-link></mt-cell>
			<mt-cell title="设置密码" is-link value="修改 "></mt-cell>
			<mt-cell title="支付设置" is-link></mt-cell>
		</div>
		
		<div class="w-shezhi">
			<mt-cell title="安全中心" is-link></mt-cell>
			<mt-cell title="通用" is-link></mt-cell>
		</div>
		<div class="w-shezhi">
			<mt-cell title="关于美团" is-link></mt-cell>
		</div>
		
		<div class="w-shizhi-c">
			<mt-button type="primary" id="w-shizhi-b">退出账户</mt-button>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.w-shezhi{
		width: 400px;
		margin: 0 auto;
		margin-top: 10px;
	}
	.w-shizhi-a{
		background: #9e9e9e38;
		height: 680px;
	}
	#w-shizhi-b{
		width: 350px;
	background: #22D783;
	color: #000000;
	}
	.w-shizhi-c{
		width: 350px;
		margin: 0 auto;
		margin-top: 20px;
	}

</style>
