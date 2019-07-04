<template>
	<section class="login-bg">
		<form action="">
    <div class="login-box">
        <div class="login-logo">
			<div></div>
		</div>
        <div class="ul-login">
            <div class="item-login" ><input v-model="username"  class="input-login" type="text" placeholder="请输入用户名" /></div>
            <div class="item-login"><input v-model="password"  class="input-login" type="password" placeholder="请输入登录密码" @keyup.enter="login" /></div>
        </div>
				<div class="login1">忘记密码？</div>
        <div class="btn-box" @click="login" >
            <div class="btn btn-login" >{{stateWord}}</div>
        </div>
				<div class="login2">
					<div>第三方登录</div>
					<div>
						<span><img src="../assets/weixin.jpg" alt=""></span>
						<span><img src="../assets/QQ.jpg" alt=""></span>
						<span><img src="../assets/weibo.jpg" alt=""></span>
					</div>
					<div><router-link to="/register">立即注册</router-link></div>
				</div>
    </div>
	</form>
</section>
</template>

<script>
export default {
    data() {
        return {
			//登录的用户名及密码
			username:'',
			password: '',
			stateWord:'登录'  //登录时的状态
        }
    },
    ready() {
    },
    components: {
    },
    watch: {
    },
	methods:{
        login(){
           this.axios.get('/api/dlu').then((response) => {
           			response.data.forEach((val,key) =>{
           				if((response.data[key].username==this.username)&(response.data[key].password==this.password)){
           				  //设置Vuex登录标志为true，默认userLogin为false
						  this.$store.dispatch("userLogin", true);
						  //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
						  //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
						  localStorage.setItem("Flag", "isLogin");
						  //iViewUi的友好提示
						  // this.$Message.success(data.data.message);
						  //登录成功后跳转到指定页面
						  this.$router.push("/index");
           				}else{
           					alert('用户名或密码错误')	
           				}
           			})			
           })
            .catch(function (error) {
              console.log(error);
            });
        }
    },
};    
</script>

<style>
.login-bg{
	width:100%;
	text-align:center;
	background: url(../assets/login.jpg);
	repeat: no-repeat;
	background-attachment:fixed;
    background-position: center;
	background-size:100% 100%;
	position: absolute;
	left:0px;
	height:100%

}
.login-logo div{
	width:4.125rem;
	height:4.125rem;
	line-height:4.125rem;
	background:url(../assets/chifan.png);
	background-size:100% 100%;
	position:relative;
	margin:0 auto;
}

form{
	width:25rem;
	background:#fff;
	position:relative;
	margin:0 auto;
	top:10%;
}
.ul-login .item-login{
	padding:10px 0 10px 0;
	}
.item-login input{
	width:18.75rem;
	height:2.1875rem;
	/* box-shadow:#909399 2px 4px 12px 0px; */
}
.btn-login{
	font-size:18px;
	color:#055;
	width:9.75rem;
	height:2.1875rem;
	margin: 0 auto;
	/* border-radius:2.1875rem; */
	background-color:rgb(73,210,67);
	
	
}
.login1{
	padding:5px 0 10px 230px;
	font-size:12px;
	color:#606266;
}
.login2{
	padding:3.125rem 0 2.5rem 0;
	font-size:12px;
	color:#606266;
}
.login2 span img{
	padding:1.875rem 0.3125rem 1.875rem 0.3125rem;
	width:2.5rem;
	height:2.125rem;
}	
</style>
