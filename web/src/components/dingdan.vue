<template>
	<div>
		<div class="w-ddan">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>我的订单</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		
		<div>
			<template>
	
			  <el-tabs :tab-position="tabPosition" style="height: 200px;">
				<el-tab-pane label="用户管理">用理</el-tab-pane>
				<el-tab-pane label="配置管理">配置管理</el-tab-pane>
				<el-tab-pane label="角色管理">角色管理</el-tab-pane>
				<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
			  </el-tabs>
			</template>
		</div>
	</div>
	
</template>

<script>
	 export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>

<style>
	.w-ddan{
		width: 790px;
		margin: 0 auto;
	}
</style>
