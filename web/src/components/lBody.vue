<template>
		<div class="bigbox" id='lbody'>
			<div class="topmsg">
				<div class="tmb"></div>
				<div class="ldp_img"><img :src="home_url" alt=""></div>
				<div class="sp_name">
					<p class="sp_tit">{{sp_name}}</p>
					<div class="xx"><star :size="36" :score="4.5"></star><span>4.5分</span></div>
					<span class="diz">地址：{{ diz }}</span>
					<span class="pj">评价：{{ pj }}</span>
				</div>
			</div>
			<div class="l_con">
				<div class="l_nav">
					<snav></snav>
					<router-view></router-view>
				</div>
				<div class="r_nav">
					<div class="yiuhui">
						<div class="header">
							<span>优惠卷</span>
							<span>
								<i>更多</i>
								<i class="el-icon-d-arrow-right"></i>
							</span>
						</div>
						<ul class="yh_con">
							<li v-for="(item,index) in yh" :key="item.id">
								<div class="yhp">
									<span class="je">
										<div class="top">¥{{item.je}}</div>
										<div class="bm">{{item.tiaoj}}</div>
									</span>
									<span class="towq">
										<div class="tq"></div>
										<div class="bq"></div>
									</span>
									<span class="lqu">领取</span>
								</div>
							</li>
						</ul>
					</div>
					<div class="tuijian">
						<div class="header">
							<span>本店推荐</span>
							<span>
								<i>更多</i>
								<i class="el-icon-d-arrow-right"></i>
							</span>
						</div>
						<ul class="tuiji">
							<li v-for="(item,index) in tj" :key="item.id">
								<div class="l_img"><img :src="item.img" alt=""></div>
								<div class="caim">
									<div class="name">{{item.name}}</div>
									<div class="lpl">{{item.peiliao}}</div>
								</div>
								<el-button type="success" size="mini" round class="mmm">下单</el-button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<shop></shop>
		</div>
</template>

<script>
	import dpimg from '../assets/logo.png'
	 import star from "./star.vue";
	 import snav from "./spdh.vue";
	 // import tbj from '../assets/t_bj.jpg'
export default {
		name: 'lbody',
		components:{
			star,
			snav
		},
		data(){
			return{
				home_url:dpimg,
				sp_name:'肯德基',
				diz:'龙马潭区xx街道xx号',
				pj:'xxx条',
				
				yh:[
				],
				tj:[

				]
			}
		},
		mounted: function () {
		  this.sp_name = this.$route.query.name
		  this.home_url = this.$route.query.img
		  console.log(this.$route.query)
		},
		methods:{
			// getParams () {
			// // 取到路由带过来的参数 
			// 	var cimg = this.$route.query.img
			// 	var cname = this.$route.query.name
			// 	console.log(this.$route)
			// 	console.log(cname)
			// 	// 将数据放在当前组件的数据内
			// 	this.sp_name = cname;
			// 	this.home_url = cimg;
			//   }
		},
		created(){		
			// this.getParams()
			 this.axios.post('/api/huoqu').then((response) => {
			    console.log(response.data);
				response.data.forEach((val,key) => {
					this.yh.push(response.data[key]);
				})
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
			  this.axios.post('/api/huoqu2').then((response) => {
			     console.log(response.data);
			  				response.data.forEach((val,key) => {
			  					this.tj.push(response.data[key]);
			  				})
			   })
			   .catch(function (error) {
			     console.log(error);
			   });
		},
		// watch: {
		// // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
		//   '$route': 'getParams'
		// }
		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	@zt:'Songti';
	@bzh:24px;
	@h1:100%;
	@coo1:#ccc;
	@bj:'../assets/t_bj.jpg';
	@mb1:3;
	@fff:#fff;
.bigbox{
	font-family: @zt;
	.topmsg{	
		display: flex;
		height: 160px;
		justify-content: flex-start;
		align-content: center;
		background: url("@{bj}");
		.tmb{
			background: rgba(0, 0, 0, .5);
			width: @h1;
			height: 160px;
			position: absolute;
			z-index: 0;
			left: 0;
		};
		padding-left: 60px;
		.ldp_img{
			width: 10%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			z-index: @mb1;
			img{
				width: @h1;
				height: 80%;
			}
		};
		.sp_name{
			margin-left: 20px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			position: relative;
			z-index: @mb1;
			.sp_tit{
				font-size: @bzh;
				margin: 0;
			};
			.xx{
				display: flex;
				justify-content: start;
				align-content: center;
				font-size: @bzh - 12px;
				span{
					margin-left: 5px;
					color: @coo1;
				}
			}
			.diz,.pj{
				color: @coo1;
				font-size: @bzh - 10px;
			}
		}
	}
	.l_con{
		display: flex;
		justify-content: center;
		margin-top: 20px;
		.l_nav{
			width: @h1 - 30%;
			background: @fff;
			.el-menu-demo{
				display: flex;
				justify-content: center;
				border-color: #22d783;
			}
		}
		.r_nav{
			width: @h1 - 75%;
			margin-left: 10px;
			.yiuhui{
				.header{
					font-size: 14px;
					display: flex;
					justify-content: space-between;
					background: #22d783;
					color: @fff;
					i{
						font-style: normal;
					}
					.el-icon-d-arrow-right{
						margin-right: 5px;
					}
					span{
						margin-left: 5px;
					}
				}
				.yh_con{
					list-style: none;
					margin: 0;
					padding: 0;
					background: @fff;
					li{
						height: 80px;
						border-bottom: 1px solid #ccc;
						display: flex;
						justify-content: center;
						align-items: center;
						.yhp{
							background: #22d783;
							width: 90%;
							height: 85%;
							border-radius: 4%;
							display: flex;
							justify-content: flex-start;
							overflow: hidden;
							.je{
								width: 65%;
								display: flex;
								flex-direction: column;
								justify-content: center;
								padding-left: 20px;
								.top{
									color: #fff;
									font-size: 30px;
								}
								.bm{
									font-size: 12px;
									color: #eee;
								}
							}
							.towq{
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								div{
									width: 20px;
									height: 20px;
									background: #fff;
									border-radius: 100%;
									position: relative;
								}
								.tq{
									top: -10px;
									right: -11px;
								}
								.bq{
									bottom: -10px;
									right: -11px;
								}
							}
							.lqu{
								border-left: 3px dashed #fff;
								display: flex;
								align-items: center;
								color: #fff;
								justify-content: center;
								width: 25%;
							}
						}
					}
				}
			}
			.tuijian{
				.header{
					font-size: 14px;
					display: flex;
					justify-content: space-between;
					background: #22d783;
					color: @fff;
					i{
						font-style: normal;
					}
					.el-icon-d-arrow-right{
						margin-right: 5px;
					}
					span{
						margin-left: 5px;
					}
				}
				.tuiji{
					list-style: none;
					margin: 0;
					padding: 0;
					background: @fff;
					li{
						display: flex;
						justify-content: flex-start;
						height: 80px;
						align-items: center;
						.l_img{
							width: 25%;
							margin-left: 20px;
							img{
								width: 100%;
								border-radius: 100%;
							}
						}
						.caim{
							margin-left: 10px;
							.name{
								font-weight: 700;
							}
							.lpl{
								font-size: 12px;
								color: #aaa;
							}
						}
						.mmm{
							margin: auto;
							background-color: #22d783;
							border-color: #22d783;
							margin-right: 20px;
							font-size: 12px;
						}
					}
				}
			}
		}
	}
}
</style>
