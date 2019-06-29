<template>
	<div>
		<mt-tabbar fixed v-model="selected" id="w-yd-db">
			<mt-tab-item id="tab1">
				<img slot="icon" src="../assets/img/fangzi.png" />
				<router-link to="/index" class="w-dibu-a">首页</router-link>
			</mt-tab-item>
			<mt-tab-item id="tab2">
				<img slot="icon" src="../assets/img/huangguan.png" />
				<router-link to="/huiyuan" class="w-dibu-a">会员</router-link>
			</mt-tab-item>
			<mt-tab-item id="tab3">
				<img slot="icon" src="../assets/img/dd.png" />
				<router-link to="/dingdan" class="w-dibu-a">订单</router-link>
			</mt-tab-item>
			<mt-tab-item id="tab4">
				<img slot="icon" src="../assets/img/gengduo.png" />
				<router-link to="/login" class="w-dibu-a">我的</router-link>
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
</script>

<style>
	#w-yd-db{
		background-color: #22d783;
	}
	.w-dibu-a{
		color: #000;
		text-decoration: none;
	}
</style>
