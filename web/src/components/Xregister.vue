<template>
	<div class="register">
		<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
			<form action="">
				<div class="register-logo"></div>
				<el-form-item label="用户名" for="username"><el-input v-model="username" id="username"></el-input></el-form-item>
				<el-form-item label="密码" for="pwd"><el-input type="password" v-model="pwd" id="pwd"></el-input></el-form-item>
				<el-form-item label="密码"><el-input type="password" v-model="again" id="again" @blur="verify" ></el-input></el-form-item>
				<div class="register-btn">
					<button @click.prevent="register">注册</button>
					<div>{{ msg }}</div>
				</div>
			</form>
		</el-form>
	</div>
	
</template>
<style>
	.register{
		height:100%;
		width:100%;
		text-align:center;
		background: url(../assets/login.jpg);
		repeat: no-repeat;
		background-attachment:fixed;
	    background-position: center;
		background-size:100% 100%;
		position: absolute;
		left:0px;
		/* top:0; */
	}
	.el-form{
		width:30rem;
		background:#fff;
		position:relative;
		margin:0 auto;
		top:15%;
		padding-top:50px;
	}
	
	.el-input{
		width:21.875rem;
	}
	.register-logo{
		
		width:4.125rem;
		height:4.125rem;
		line-height:4.125rem;
		background:url(../assets/chifan.png);
		background-size:100% 100%;
		position:relative;
		margin:0 auto;
	}
	.register-btn{
		padding-bottom:3.125rem;
	}
	.register-btn button{
		font-size:18px;
		color:#055;
		width:9.375rem;
		height:2.1875rem;
		border-radius:2.1875rem;
		background-color:rgb(73,210,67);
		border-color:rgb(73,210,67);
			
	}
</style>
<script>
export default {
	data() {
		return {
			labelPosition: 'right',
			username: '',
			pwd: '',
			again: '',
			msg: '' //接收数据
		};
	},
	methods: {
		verify() {
			if (this.pwd !== this.again) {
				this.msg = '两次密码不一致';
				return;
			}
		},
		register() {
			this.axios.post('/api/zhuche',{ username: this.username, password: this.pwd }).then((response) => {
					console.log(response);
					this.$router.push('/login')
			 })
			 .catch(function (error) {
			   console.log(error);
			 });
		}
	}
};
</script>
