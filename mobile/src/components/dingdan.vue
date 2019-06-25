<template>
	<div class="w-dingdan">
		<div>
			<div class="w-yd-tbu">
				<div class="w-yd-tbu-b"><img src="../assets/img/chifan.png" alt="" class="w-yd-tbu-a"></div>
				<div><span>我的订单</span></div>
				<div class="w-yd-tbu-c"><img src="../assets/img/chilun.png" alt="" class="w-yd-tbu-d"></div>
			</div>
		</div>
		<div>
			<mt-navbar v-model="selected" class="w-dd-c">
			  <mt-tab-item id="1" ><span class="w-dd-a">全部</span></mt-tab-item>
			  <mt-tab-item id="2"><span class="w-dd-b">代付款</span></mt-tab-item>
			  <mt-tab-item id="3"><sapn class="w-dd-b">待使用</sapn></mt-tab-item>
			    <mt-tab-item id="4"><sapn class="w-dd-b">退款/售后</sapn></mt-tab-item>
			</mt-navbar>
		</div>
		<div>
			<mt-tab-container v-model="selected" class="w-dd-j">
			  <mt-tab-container-item id="1" style="display: block;">
				<div class="w-dd-d" >
					<div  class="w-dd-e" >
						<div class="w-dd-f">麻辣小龙虾</div>
						<div class="w-dd-g">支付成功</div>
					</div>
					<div class="w-dd-h">
						<div><img src="../assets/img/xiaolongxia.png" alt=""></div>
						<div class="w-dd-i">
							<span>{{name}}</span><br>
							<span>价钱:￥{{jq}}</span>
						</div>
					</div>
				</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
				<div>bbb</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
				<div>ccc</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="4">
			  				<div>ccc</div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
		

	</div>
</template>
<script>
	export default {
	  data() {
	    return {
	    selected:'',
		name:'麻辣小龙虾',
		jq:'100'
		
	    }
	  }
	}
</script>

<style>
	.w-dd-j{
		height: 200px;
	}
	.w-dd-d{
		background: #fff;
		border-radius: 20px;
		margin-top: 10px;
	}
	.w-dingdan{
		background: #dcddde;
	}
	
	.w-dd-h{
		width: 90%;
		height: 70px;
		display: flex;
		align-items: center;
		margin:  0 auto;
	}
	.w-dd-h img{
		width: 60px;
		height: 60px;
	}
	.w-dd-f{
		margin-left: 10px;
		font-size: 18px;
		font-weight: 700;
	}
	.w-dd-g{
		margin-right: 10px;
		font-size: 18px;
		font-weight: 700;
	}
	.w-dd-e{
		width:90%;
		height: 60px;
		border-bottom: 1px solid #dcddde;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
	}
	.w-dd-a{
		font-size: 20px;
		font-weight: 700;
		color: #41454e;
		
	}
		.w-dd-b{
		font-size:18px;
		color: #41454e;
		
	}
	


	.mint-tab-container-wrap{
		height: 100px;
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
</style>
