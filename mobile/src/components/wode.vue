<template>
	<div>
		<div class="w-yd-tbu">
			<div class="w-yd-tbu-b"><img src="../assets/img/chifan.png" alt="" class="w-yd-tbu-a"></div>
			<div><span>{{name}}</span></div>
			<div class="w-yd-tbu-c"><router-link to="/shezhi" class="w-dibu-a"><img src="../assets/img/chilun.png" alt="" class="w-yd-tbu-d"></router-link></div>
		</div>
		<div class="w-wd-a">
			<div class="w-lb-f">
				<img src="../assets/img/shoucang111.png" alt="" class="w-lb-g-a"><br>
				<span>收藏
				</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/pingjia.png" alt="" class="w-lb-g-a"><br>
				<span>评价</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/hongbao.png" alt="" class="w-lb-g-a"><br>
				<span>红包</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/xiaoxi.png" alt="" class="w-lb-g-a"><br>
				<span>消息</span>
			</div>
		</div>
		
		<div class="w-hyuan-b-a">
			<div class="w-hyuan-c-a">
				<div class="w-hyuan-e-a">
					<div class="w-hyuan-f-a"><span>我的钱包</span></div>
				</div>
				<div class="w-hyuan-g-a">
					<div class="w-wd-b">
						<span class="w-wd-b-a">10万</span><br>
						<span class="w-wd-b-b">借钱</span><br>
						<span class="w-wd-b-c">最高额度(元)</span>
					</div>
					<div class="w-wd-b">
						<span class="w-wd-b-a">13.49</span><br>
						<span class="w-wd-b-b">资产</span><br>
						<span class="w-wd-b-c">持有金额(元)</span>
					</div>
					<div class="w-wd-b">
						<span class="w-wd-b-a">127元</span><br>
						<span class="w-wd-b-b">美食享优惠</span><br>
						<span class="w-wd-b-c">最高随机减</span>
					</div>
				</div>
			</div>
		</div>
		
		<div class="w-lb-d-a">
			<mt-swipe :auto="4000" class='w-lb'>
			  <mt-swipe-item><img src="../assets/img/w-1.jpg" alt="" class="w-lb-a-a"></mt-swipe-item>
			<mt-swipe-item><img src="../assets/img/w-2.jpg" alt="" class="w-lb-a-a"></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/img/w-3.jpg" alt="" class="w-lb-a-a"></mt-swipe-item>
			</mt-swipe>
		</div>
		
		<div class="w-wd-c">
			<div class="w-hyuan-f-a"><span>推荐工具</span></div>
		</div>
		
		<div class="w-wd-d">
			<div class="w-lb-f">
				<img src="../assets/img/lihe.png" alt="" class="w-lb-g-a"><br>
				<span>邀请有礼</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/tubiao-.png" alt="" class="w-lb-g-a"><br>
				<span>手机充值</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/huochecopy.png" alt="" class="w-lb-g-a"><br>
				<span>火车票</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/shui.png" alt="" class="w-lb-g-a"><br>
				<span>个税计算</span>
			</div>
			
			
		</div>
		<div class="w-wd-d-a">
			<div class="w-lb-f">
				<img src="../assets/img/VIP.png" alt="" class="w-lb-g-a"><br>
				<span>会员中心</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/weibiaoti--.png" alt="" class="w-lb-g-a"><br>
				<span>吃饭饭公益</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/xinyongshoujiqia.png" alt="" class="w-lb-g-a"><br>
				<span>免流量</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/chi.png" alt="" class="w-lb-g-a"><br>
				<span>关于吃饭饭</span>
			</div>
			
		</div>
		
		
	</div>
</template>

<script>
	 export default {
	data() {
	  return {
		name:'vn001',
		
	  };
	},
	}
</script>

<style>
	.w-wd-d{
		width: 90%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 0 auto;
	}
	.w-wd-d-a{
		width: 90%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 0 auto;
		margin-top: 10px;
	}
	.w-wd-c{
		width: 90%;
		margin: 0 auto;
	}
	.w-lb-a-a{
		width: 100%;
		height: 100%;
		border-radius: 13px;
	}
	.w-lb-d-a{
		height: 120px;
	}
	.w-wd-b-a{
		font-size: 24px;
		font-weight: 700;
	}
	.w-wd-b-b{
		font-size: 20px;
	}
	.w-wd-b-c{
		font-size: 16px;
		color: #CCCCCC;
	}
	.w-wd-b{
		width: 100px;
		height: 100%;
		text-align: center;
	}
	.w-hyuan-g-a{
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #CCCCCC;
		height: 85px;
		margin-top: 10px;
	}
	.w-hyuan-f-a{
			margin-left: 10px;
			font-size: 25px;
			color: #393937;
			font-weight: 700;
			margin-top: 10px;
		}
		.w-hyuan-e{
			display: flex;
			align-items: center;
		}
		#w-hyuan-d{
	    color: #ba9f98;
	    background-color: #1a2835;
		height: 30px;
		border-radius: 7px;
	}
		.w-hyuan-c-a{
			width: 90%;
			height: 140px;
		}
		.w-hyuan-b-a{
			width: 100%;
			height: 150px;
			border-radius: 20px;
			margin-top: -14px;
			z-index: 20;
			background: #fff;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	.w-lb-g-a{
		width: 32px;
		height: 32px;
		
	}
	..w-lb-f{
		text-align: center;
	}
	.w-wd-a{
		height: 100px;
		width: 100%;
		background: #22D783;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.w-yd-tbu{
		height: 50px;
		background-color: #22d783;
		color: #41454e;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 19px;
		font-weight: 700;
	}
	.w-yd-tbu-a{
		width: 40px;
		height: 40px;
	}
		.mint-button--default{
			background: #22d783;
			border: none;
		}
	.w-yd-tbu-b{
		margin-left: 10px;
		display: flex;
		align-items: center;
	}
	.w-yd-tbu-c{
		margin-right: 10px;
		display: flex;
		align-items: center;
	}
	.w-yd-tbu-d{
		width: 35px;
		height: 35px;
	}
</style>
