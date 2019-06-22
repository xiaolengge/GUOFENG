<template>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
	  <el-menu-item index="1"><router-link to="/lsp">商品</router-link></el-menu-item>
	  <el-menu-item index="4"><router-link to="/l_sp">评论</router-link></el-menu-item>
	</el-menu>
</template>

<script>
	  export default {
		data() {
		  return {
			activeIndex: '1',
			activeIndex2: '1'
		  };
		},
		methods: {
		  handleSelect(key, keyPath) {
			console.log(key, keyPath);
		  }
		}
	  }
</script>

<style>
</style>
