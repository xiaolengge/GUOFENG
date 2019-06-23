<template>
  <div class="hello">
		<el-menu :default-active="activeIndex"  class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="5"><img src="../assets/chifan.png" alt="" class="w-a"></el-menu-item>
				<el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
				<el-menu-item index="2"><router-link to="/dingdan">我的订单</router-link></el-menu-item>
				<el-menu-item index="3" ><router-link to="/jiameng">加盟合作</router-link></el-menu-item>
				<el-menu-item index="4">我的客服</el-menu-item>
				<el-menu-item index="6" class="w-a1" >登录</el-menu-item>
				<el-menu-item index="7" >注册</el-menu-item>
		</el-menu>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
			color: #000;
			border-bottom: 2px solid #10402a;
	}
	.el-menu--horizontal>.el-menu-item {
		color: #41454e;
	}
	.hello{
	
	}
	.el-menu-demo{
		width: 100%;
			display: flex;
		justify-content:center;
	}
	.w-a{
		width: 50px;
		height: 44px;
	}
	.el-menu-item{
		font-size: 19px;
	
	}
	.w-a1{
		margin-left: 150px;
	}
</style>
