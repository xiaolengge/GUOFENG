<template>
	<div>
		<div class="w-yd-tbu">
			<div class="w-yd-tbu-b"><router-link to="/shezhi" class="w-dibu-a"><</router-link></div>
			<div><span>个人信息</span></div>
			<div class="w-yd-tbu-c"></div>
		</div>
		
		<div>
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
	</div></div>
</template>

<script>
</script>

<style>
</style>
