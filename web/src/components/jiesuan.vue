<template>
	<div class="ldd">
		<div class="ddhead">
			<div class="img"><img src="../assets/chifan.png" alt=""></div>
			<div>订单结算</div>
		</div>
		<div class="ddfoot">
			<div class="dz">
				<span class="name">地址</span>
				<div class="xq" v-for="itm in fk" :key='itm.id'>
					<div>{{itm.name}}</div>
					<div class="ddz">{{itm.diz}}</div>
				</div>
			</div>
			<div class="ddan">
				<div class="name">订单</div>
				<div class="ddxq">
					<ul>
						<li>
							<div>商品名</div>
							<div>单价</div>
							<div>数量</div>
							<div>小计</div>
						</li>
						<li v-for="itm in spxq" :key='itm.id'>
							<div>{{itm.spname}}</div>
							<div>¥{{itm.danjia}}</div>
							<div>{{itm.num}}份</div>
							<div>¥{{itm.xj}}</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="fzfs">
				<div class="name">支付方式</div>
				<ul>
					<li @click='show=!show' :class="{active:show}"><img src="../assets/zfb.png" alt=""><span>支付宝</span></li>
					<li @click='show=!show' :class="{active:!show}"><img src="../assets/wex.png" alt=""><span>微信支付</span></li>
				</ul>
			</div>
			<div class="geiqian">
				<div class="zongji">¥<span>{{ zzzj }}</span></div>
				<el-row>
					<el-button type="danger">支付</el-button>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:true,
				zzzj:0,
				fk:[
					{id:1,name:'陈一只',diz:'青羊区'},
				],
				spxq:[
					{id:1,spname:"炸鸡",danjia:'12',num:'1',xj:'1'},
				]
			}	
		},
		methods: {
			
	},
	created:function(){
		console.log(this.spxq)
		this.spxq.forEach((key,val) => {
			this.zzzj+=parseInt(this.spxq[val].xj);
			
		})
	},
	}
</script>

<style lang="less">
	.ldd{
		display: flex;
		// flex-direction: column;
		// align-items: ;
		justify-content: center;
		flex-wrap: wrap;
		.ddhead{
			height: 70px;
			width: 100%;
			background: #22d783;
			color: #fff;
			font-size: 30px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left: 40px;
			.img{
				height: 100%;
				margin-right: 30px;
				img{
					height: 100%;
				}
			}
		}
		.ddfoot{
			width: 80%;
			margin-top: 20px;
			background: #fff;
			display: flex;
			justify-content: center
			;
			flex-wrap: wrap;

			align-items: center;
			.dz{
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border: 1px solid #eee;
				height: 80px;
				.name{
					font-size: 26px;
					color: #333;
					border-right: 1px dashed #ccc;
					padding-right: 20px;
					height: 100%;
					line-height: 80px;
					margin-right: 30px;
					text-align: center;
					padding-left: 20px;
				}
				.xq{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					// margin: auto;
					border: 3px #22d783 solid;
					padding: 0 10px;
					div{
						width: 80%;
						color: #999;
						text-align: center;
						min-width: 50px;
					}
					.ddz{
						font-size: 14px;
					}
				}
			}
			.ddan{
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				flex-wrap: wrap;
				border: 1px solid #eee;
				min-height: 80px;
				.name{
					font-size: 20px;
					color: #333;
					border-bottom: 1px solid #ccc;
					padding: 10px 15px;
					width: 100%;
				}
				.ddxq{
					width: 80%;
					display: flex;
					justify-content: center;
					margin: 0 auto;
					ul{
						list-style: none;
						border: 3px #22d783 solid;
						padding: 0;
						width: 100%;
						padding:10px 20px;
						li{
							box-sizing: border-box;
							width: 100%;
							margin: 7px auto;
							display: flex;
							justify-content: space-between;	
						}
					}
				}
			}
			.fzfs{
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				flex-wrap: wrap;
				border: 1px solid #eee;
				min-height: 80px;
				.name{
					font-size: 20px;
					color: #333;
					border-bottom: 1px solid #ccc;
					padding: 10px 15px;
					width: 100%;
				}
				ul{
					list-style: none;
					display: flex;
					justify-content: flex-start;
					li{
						height: 30px;
						min-width: 60px;
						border: #22d783 3px solid;
						margin-right: 20px;
						text-align: center;
						line-height: 30px;
						display: flex;
						align-items: center;
						img{
							height: 80%;
						}
					}
					.active{
						border-color:#1296db;
					}
				}
			}
			.geiqian{
				display: flex;
				justify-content: flex-end;
				width: 100%;
				align-items: center;
				font-size: 16px;
				.zongji{
					margin-right: 20px;
					font-size: 24px;
					span{
						color: red;
					}
				}
				.el-row{
					color: #fff;
					margin-right: 10px;
				}
			}
		}
	}
</style>
