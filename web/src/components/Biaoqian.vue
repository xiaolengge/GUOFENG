<template>
	<div class="w-biaoqian">
		<div>
			<span>商家分类:</span>
		</div>
		<div>
			<el-tag>美食</el-tag>
			<el-tag>快餐</el-tag>
			<el-tag>甜品</el-tag>
			<el-tag>果蔬</el-tag>
			<el-tag>早餐</el-tag>
			<el-tag>午餐</el-tag>
			<el-tag>晚餐</el-tag>
			<el-tag>宵夜</el-tag>
		</div>
		<div>
			<el-input
			placeholder="搜索商家,美食..."
			prefix-icon="el-icon-search"
			id='w-sousuo'
			v-model="input2">
			</el-input>
		</div>
		<form action="http://localhost:3000/" method="POST">
			<h2>sr</h2>
			<input type="text" name="myinput">
			<input type="submit" value="sub">
		</form>
	</div>
</template>

<script>
	export default {
		data() {
		    return {
				input2: ''
			}
		}
  };
</script>

<style>
	.w-biaoqian{
		width: 790px;
		margin: 20px auto;
		display: flex;
		justify-content: space-between;
	}
	.el-tag{
		margin-left: 10px;
		height: 25px;
		line-height: 25px;
		border-color: #b3b7bc;
		background: #fff;
		color: #3e444b;
	}
	#w-sousuo{
		width: 180px;
		height: 28px;
		line-height: 28px;
	}
	.el-input__icon{
		line-height: 30px;
	}
</style>
