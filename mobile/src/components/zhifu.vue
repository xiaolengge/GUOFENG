<template>
	<div>
		<div class="w-yd-tbu">
			<div class="w-yd-tbu-b"><router-link to="/tijiaoddan" class="w-dibu-a"><</router-link></div>
			<div><span>支付订单</span></div>
			<div class="w-yd-tbu-c"></div>
		</div>
		
		<div>
			<mt-radio
			  title="支付方式"
			  v-model="value"
			  :options="['美团支付', '微信支付', '支付宝支付']">
			</mt-radio>
		</div>
		<div class="w-qrzhifu-a">
			<mt-button type="primary" id="w-qrzhifu" @click="popupVisible=!popupVisible">确认支付</mt-button>
		</div>
		<div>
			<mt-popup
			  v-model="popupVisible"
			 popup-transition="popup-fade">
				<div class="w-zhifu-b">
					<img src="../assets/img/zhifu.jpg" alt="" class="w-zhifu-c"><br>
						<router-link to="/chenggong" class="w-dibu-a"><mt-button type="primary" id="w-qrzhifu-d">支付成功</mt-button></router-link>
				</div>
			</mt-popup>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	    popupVisible:false
		
	    }
	  }
	}
</script>

<style>
	.w-zhifu-c{
		width: 200px;
		height: 200px;
	}
	.w-zhifu-b{
		text-align: center;
		background: #808080;
		
	}
		#w-qrzhifu{
		background: #22D783;
		color: #000;
		margin-top: 20px;
	}
		#w-qrzhifu-d{
		background: #22D783;
		color: #000;
		margin-top: 5px;
	}
	.w-qrzhifu-a{
		margin: 0 auto;
		width: 100px;
	}
</style>
