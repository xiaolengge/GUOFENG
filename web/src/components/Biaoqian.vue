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
			<button @click="tianjia">1111</button>
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
				var _data =	{id:3,name:'锅火',peiliao:'火',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561650936822&di=702e404198a6ff03b6917ee40ff5e999&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F10%2F20180610231206_bkdfd.jpg'};
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
