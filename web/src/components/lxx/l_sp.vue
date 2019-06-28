<template>
	<div class="l_pl">
		<ul class="dapl">
			<li v-for="(item,index) in list" :key="item.id">
				<div class="head_img"><img :src="item.head" alt=""></div>
				<div class="pl_con">
					<p class="name">{{item.name}}</p>
					<p class="con">{{item.content}}</p>
					<div class="hui">
						<span class="zan">赞:{{item.zan}}</span>
						<span class="cai">踩:{{item.cai}}</span>
							<el-collapse v-model="activeNames" @change="handleChange">
								<el-collapse-item title="回复" :name="item.id">
								<el-form ref="form" :model="form" label-width="80px">
								  <el-form-item label="">
									<el-input type="textarea" v-model="form.desc"></el-input>
								  </el-form-item>
								  <el-form-item>
									<el-button type="primary" @click="onSubmit">回复</el-button>
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
				// {id:1,name:'qq',content:'hhhhhhhhh',zan:'123',cai:'32',head:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561214514058&di=1c04244564b81e6deff057bee6bc173f&imgtype=0&src=http%3A%2F%2Fi5.hexunimg.cn%2F2015-06-02%2F176393877.jpg'},
			]
		  };
		},
		methods: {
		  handleChange(val) {
		  },
		  onSubmit() {
			console.log('submit!');
		  }
		},
		created(){
			 this.axios.post('/api/pinlun').then((response) => {
			    console.log(response.data);
				response.data.forEach((val,key) => {
					this.list.push(response.data[key]);				
				})
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
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
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				.head_img{
					height: 50px;
					width: 50px;
					border-radius: 50%;
					img{
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.pl_con{
					font-size: 16px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.name{
						font-weight: 700;
						margin: 0;
					}
					.con{
						font-size: 14px;
						margin: 0;
					}
					.hui{
						font-size: 12px;
						display: flex;
						justify-content: flex-start;
						.zan{
							margin-right: 5px;
						}
						.cai{
							margin-right: 5px;
						}
						.el-collapse-item__header{
							background: none;
							align-items: flex-start;
							line-height: 14px;
							height: auto;
							.el-icon-arrow-right:before{
								content: '';
							}
						}
						.el-collapse-item__wrap{
							background: none;
							border: 0;
							overflow: visible;
							width: 185%;
							.el-form{
								display: flex;
								justify-content: flex-start;
								position: relative;
								left: -20%;
								.el-textarea__inner{
									width: 140%;
								}
							}
							.el-form-item{
								margin: 0;
								.el-form-item__content{
									margin-left: -80px;
								}
							}
							.el-collapse-item__content{
								padding: 0;
								.el-textarea{
									    position: relative;
										display: inline-block;
										vertical-align: bottom;
										font-size: 14px;
										// width: 185%;
								}
							}
							.el-button{
								font-size: 10px;
								margin-top: 15px;
							}
						}
					}
				}
			}
		}
	}
</style>
