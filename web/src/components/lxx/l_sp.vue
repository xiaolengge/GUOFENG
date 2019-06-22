<template>
	<div class="l_pl">
		<ul class="dapl">
			<li v-for="(item,index) in list" :key="item.id">
				<div class="head_img"><img :src="item.head" alt=""></div>
				<div class="pl_con">
					<p class="name">{{item.name}}</p>
					<p class="con">{{item.content}}</p>
					<div class="hui">
						<span class="zan">{{item.zan}}</span>
						<span class="cai">{{item.cai}}</span>
							<el-collapse v-model="activeNames" @change="handleChange">
								<el-collapse-item title="回复" name="1">
								<el-form ref="form" :model="form" label-width="80px">
								  <el-form-item label="活动形式">
									<el-input type="textarea" v-model="form.desc"></el-input>
								  </el-form-item>
								  <el-form-item>
									<el-button type="primary" @click="onSubmit">立即创建</el-button>
								  </el-form-item>
								</el-form>
						
								</el-collapse-item>
							</el-collapse>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	 export default {
		data() {
		  return {
			activeNames: ['1'],
			form: {
			  name: '',
			  region: '',
			  date1: '',
			  date2: '',
			  delivery: false,
			  type: [],
			  resource: '',
			  desc: ''
			},
			list:[
				{id:1,name:'qq',content:'hhhhhhhhh',zan:'123',cai:'32',head:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561214514058&di=1c04244564b81e6deff057bee6bc173f&imgtype=0&src=http%3A%2F%2Fi5.hexunimg.cn%2F2015-06-02%2F176393877.jpg'},
				{id:2,name:'qq',content:'hhhhhhhhh',zan:'123',cai:'32',head:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561214514058&di=1c04244564b81e6deff057bee6bc173f&imgtype=0&src=http%3A%2F%2Fi5.hexunimg.cn%2F2015-06-02%2F176393877.jpg'}
			]
		  };
		},
		methods: {
		  handleChange(val) {
		  },
		  onSubmit() {
			console.log('submit!');
		  }
		}
	  }
</script>

<style lang="less">
	.l_pl{
		.dapl{
			list-style: none;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			li{
				width: 100%;
				min-height: 80px;
				border-bottom: 1px solid #ccc;
				.head_img{
					height: 30px;
					width: 30px;
					img{
						width: 100%;
					}
				}
			}
		}
	}
</style>
