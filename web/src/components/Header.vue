<template>
  <div class="hello">
		<el-menu :default-active="activeIndex"  class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="5"><img src="../assets/chifan.png" alt="" class="w-a"></el-menu-item>
				<el-menu-item index="1"><router-link to="/index" class="w-chongzhi">首页</router-link></el-menu-item>
				<el-menu-item index="2"><router-link to="/dingdan"  class="w-chongzhi">我的订单</router-link></el-menu-item>
				<el-menu-item index="3" ><router-link to="/jiameng"  class="w-chongzhi">加盟合作</router-link></el-menu-item>
				<el-menu-item index="4"><router-link to="/person">我的客服</router-link></el-menu-item>
				<el-menu-item index="6" class="w-a1" :class="bbc"><router-link to="/login">登录</router-link></el-menu-item>
				<el-menu-item index="7" :class="bbc"><router-link to="register">注册</router-link></el-menu-item>
				<el-menu-item index="8" :class="bba"  v-for='item in isdl' :key="item.id" class="spadl" @click="singd">
					<div class="tthead"><img :src="item.head" alt=""></div>
					<span>{{item.name}}</span>
				</el-menu-item>
		</el-menu>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
     return {
       activeIndex: '1',
	   bba:{
	   	"tta":true,
	   },
	   bbc:{
	   	"tta":false,
	   },
	   isdl:[
	   ]
     };
   },
   created() {
		// console.log(this.$store.getters.isLogin)
		if(this.$store.getters.isLogin == true){
			this.bba.tta = false;
			this.bbc.tta = true;
			this.axios.get('/api/cfkq').then((response) => {
			   console.log(this);
				response.data.forEach((val,key) => {
				this.isdl.push(response.data[key]);
								})
				console.log(this.isdl)
			 })
		}else{
			this.bba.tta = true;
			this.bbc.tta = false;
			console.log('222')
		}
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
  			
  			
     },
	 singd(){
		 localStorage.removeItem("Flag")
		 this.$router.push('/login')
		 window.location.reload()
	 }
   }
}
</script>


<style scoped lang="less">
	@header-color:#22d783;
	.hello a{
		text-decoration:none;
	}
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
	.w-chongzhi{
		text-decoration: none;
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
	.tta{
		display: none;
	}
	.spadl{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 16px;
		.tthead{
			height: 100%;
			img{
				height: 80%;
				border-radius: 100%;
			}
		}
	}
	
</style>
