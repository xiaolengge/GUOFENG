 <template>
	 <div class="xlogin">
		<div class="backlogin">
		  <div class="login_box">
		    <div class="title">
					  <span>登</span>
					  <span>录</span>
				  </div>
		    <div class="xlogin1">
				 <label>用户名：</label> 
		        <input class="myinput" type="text" placeholder="手机号/用户名" v-model="username" />
		      </div>
		    <div class="xlogin1">
				<label> 密&nbsp; &nbsp; &nbsp; 码：</label>
		      <input  class="myinput" type="password" placeholder="密码" v-model="password"/>
		    </div>
		    <div class="login_other xlogin1">
			  <span>
				<input type="checkbox" id="remenberme" />
				<label for="remenberme">记住我</label>  
			  </span>
		      <a href="javascript:;">找回密码</a>
		    </div>
		    <div :disabled="disablebtn" class="login" @click="login"><router-link to="">{{loginText}}</router-link></div>
			<br>
			<div :disabled="disablebtn" class="login" @click="backRegister"><router-link to="/register">{{registerText}}</router-link></div>
		  </div>
		</div>
	 </div>
    </template>
    <script>
  import {
    Toast
  } from 'mint-ui';
  export default {
    name: 'backlogin',
    data() {
      return {
        username: "admin",
        password: "123456",
        disablebtn: false,
        loginText: "登录",
				registerText: "注册"
      }
    },

    methods: {
			backLogin() {
        // this.$router.replace('/register')
      },
      login() {
						this.axios.get('/api/dlu').then((response) => {
							// console.log(response)
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
											// this.reload()
																	 
											this.$router.push("/index");
											window.location.reload()
										}else{
											alert('登录失败')
										}
									})			
						})
				}
      },
			
    }
</script>
<style scope>
	.title span{
		font-size:20px;
		padding:1.875rem;
	}
    .xlogin{
	  height:100%;
		width:100%;
		text-align:center;
		background:url(../assets/img/login.jpg);
		repeat: no-repeat;
		background-attachment:fixed;
		background-position: center;
		background-size:150% 100%;
		position: absolute;
		left:0;
		bottom:0;
   } 
    .xlogin1{
	   padding:0.625rem;
   }
    .backlogin{
	  position:relative;
		top:20%;
		/* width:20rem; */
		margin:0 auto;	
   }
    .myinput{
		height:1.875rem;
		width:70%;
   }
    .login_other{
		font-size:14px;
	}
	.login_other span{
		float:left;
		padding-left:5rem;
	}
	.login_other a{
		text-decoration:none;
		color: #000;
	}
	.login{
		
		font-size:18px;
		border-radius:0.3125rem;
		height:2.25rem;
		width:70%;
		margin:0.25rem 0 0 4.25rem;
		background-color:rgb(73,210,67);
		border-color:rgb(73,210,67);
	}
	.login a{
		color: #000;
		text-decoration:none;
	}
</style>
