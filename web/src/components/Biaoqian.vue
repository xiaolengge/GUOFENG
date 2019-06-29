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
			<!-- <button @click="tianjia">1111</button> -->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
		    return {
				input2: ''
			}
		},
		methods: {
			tianjia() {
				var _data =	{id:1,value:'3.7',dmian:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=630679254,2299163390&fm=26&gp=0.jpg',dmin:'重庆鸡公煲',fyong:1,};
				this.axios.post('/api',_data,function(re){})
			}
		},
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
