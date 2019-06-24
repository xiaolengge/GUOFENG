<template>
	<div>
		<mt-tabbar fixed v-model="selected">
			<mt-tab-item id="tab1">
				<img slot="icon" src="../assets/img/fangzi.png" />
				首页
			</mt-tab-item>
			<mt-tab-item id="tab2">
				<img slot="icon" src="../assets/img/huangguan.png" />
				商城
			</mt-tab-item>
			<mt-tab-item id="tab3">
				<img slot="icon" src="../assets/img/dd.png" />
				更多精品
			</mt-tab-item>
			<mt-tab-item id="tab4">
				<img slot="icon" src="../assets/img/gengduo.png" />
				关于我们
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
</script>

<style>
</style>
