<template>
  <div class="hello">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    		<el-menu-item index="1">首页</el-menu-item>
    		<el-menu-item index="2">我的订单</el-menu-item>
    		<el-menu-item index="3" >加盟合作</el-menu-item>
    		<el-menu-item index="4">我的客服</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Header',
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


<style scoped lang="less">
	@header-color:#22d783;
	@text-color:#000;
	.el-menu.el-menu--horizontal{
		background-color:@header-color;
	}
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,{
		background-color:#1aa062fa;
	}
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,{
		background-color: #1aa062fa;
	}
	.el-menu--horizontal>.el-menu-item.is-active{
			color: 000;
			border-bottom: 2px solid #10402a;
	}
	.el-menu--horizontal>.el-menu-item {
		color: #41454e;
	}
	.hello{
		display: flex;
		
	}
</style>
