<template>
<div class="xregister">
	<div class="xregister1">
		<div class="title">
			<span>注</span>
			<span>册</span>
		</div>
		<div class="input_group">
		  <label>用户名：</label>
		  <input class="myinput" type="text" placeholder="请输入用户名" v-model="username" />
		</div>
		<div class="input_group">
		  <label> 密&nbsp&nbsp&nbsp码：</label>
		  <input class="myinput" type="password" placeholder="请输入密码" v-model="pwd" />
		</div>
		<div class="input_group">
		  <label> 密&nbsp&nbsp&nbsp码：</label>
		  <input class="myinput" type="password" placeholder="再次输入密码" v-model="again" />
		</div>
		<button type="default" class="ok_btn" @click="register" size="small">注册</button>
		<button class="cancel_btn" @click="backLogin">{{backText}}</button>
		
	</div>
</div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        backText: '返回',
        username: '',
        pwd: '',
		again:''
      }
    },
    methods: {
      backLogin() {
        this.$router.replace('/login')
      },
      register() {
      	this.axios.post('/api/zhuche',{ username: this.username, password: this.pwd }).then((response) => {
      			console.log(response)			
      	 })
      	 .catch(function (error) {
      	   console.log(error);
      	 });
      }
    }
  }
</script>
<style type="Less">
	.title span{
		font-size:20px;
		padding:1.875rem;
	}
	.xregister{
		height:100%;
		width:100%;
		text-align:center;
		background:url(../assets/img/login.jpg);
		repeat: no-repeat;
		background-attachment:fixed;
		background-position: center;
		background-size:150% 100%;
		position: absolute;
		left:0px;
	}
	.xregister1{
		position:relative;
		top:20%;
		width:20rem;
		margin:0 auto;	
	}
	.input_group{
		padding:0.625rem;
		
	}
	.input_group input{
		height:1.875rem;
		width:12.5rem;
	}
	.ok_btn{
		height:1.875rem;
		margin:1.25rem 1.875rem;
		background-color:rgb(73,210,67);
		border-color:rgb(73,210,67);
	}
	.cancel_btn{
		height:1.875rem;
		margin-left:0.625rem;
		background-color:rgb(73,210,67);
		border-color:rgb(73,210,67);
	}
</style>