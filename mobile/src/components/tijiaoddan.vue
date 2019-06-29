<template>
	<div class="w-tijiao-zuiwai">
	<div class="w-tijioa-c">
		<div class="w-yd-tbu">
			<div class="w-yd-tbu-b"><router-link to="/goods" class="w-dibu-a"><</router-link></div>
			<div><span>提交订单</span></div>
			<div class="w-yd-tbu-c"></div>
		</div>
		<div class="w-tijiao">
			<div  class="w-tijiao-b">
			<mt-button id="w-tijiao-a" type="primary" @click="flag=!flag">新增地址</mt-button>
		 　	<mt-picker v-show="flag" :slots="myAddressSlots" @change="onMyAddressChange" ></mt-picker>
　　			<p>收货地址：{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</p>
	 	</div>
		</div>
		
		<div>
			<div class="w-dd-d" v-for="item in spjs" :key="item.id" >
				<div  class="w-dd-e" >
					<div class="w-dd-f">{{item.name}}</div>
					<div class="w-dd-g">待支付</div>
				</div>
				<div class="w-dd-h">
					<div><img :src="item.img" alt=""></div>
					<div class="w-dd-i">
						<span>{{item.name}}</span><br>
						<span>价钱:￥{{item.jiage}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="w-tijiao-d">
			<div>包装费</div>
			<div>￥{{baozf}}</div>
		</div>
		<div class="w-tijiao-d">
			<div>配送费</div>
			<div>￥{{peisong}}</div>
		</div>
		<div class="w-tijiao-c">
			<router-link to='/zhifu'><mt-button type="primary" id="w-tijiao-d">提交订单</mt-button></router-link>
			<router-view></router-view>
		</div>
	</div>
	</div>
</template>

 <script>
	import { Picker } from 'mint-ui';
　　import myaddress from '../plugins/chengshi.json'
　　export default {
　　　　name: '',
		
　　　　components: {
　　　　'mt-picker': Picker
　　},
　　props: {},
　　data () {
　　　　return {
		namea:'三明治',
	nameb:'麻辣小龙虾',
	jq:'100', 
	baozf:'3',
	peisong:'4',
	spjs:[],
	flag:false,
　　　　　　isShowAddress:false,
			
　　　　　　myAddressSlots: [
　　　　　　　　{
　　　　　　　　　　flex: 1,
　　　　　　　　　　defaultIndex: 1,
　　　　　　　　　　values: Object.keys(myaddress), //省份数组
　　　　　　　　　　className: 'slot1',
　　　　　　　　　　textAlign: 'center'
　　　　　　　　}, {
　　　　　　　　　　divider: true,
　　　　　　　　　　content: '-',
　　　　　　　　　　className: 'slot2'
　　　　　　　　}, {
　　　　　　　　　　flex: 1,
　　　　　　　　　　values: [],
　　　　　　　　　　className: 'slot3',
　　　　　　　　　　textAlign: 'center'
　　　　　　　　},{
　　　　　　　　　　divider: true,
　　　　　　　　　　content: '-',
　　　　　　　　　　className: 'slot4'
　　　　　　　　},{
　　　　　　　　　　flex: 1,
　　　　　　　　　　values: [],
　　　　　　　　　　className: 'slot5',
　　　　　　　　　　textAlign: 'center'
　　　　　　　　}
　　　　　　],
　　　　　　myAddressProvince:'',
　　　　　　myAddressCity:'',
　　　　　　myAddresscounty:'',
　　　　}
　　},
　　created(){
		  axios.get('/api/gouhuo').then((response) =>{
		  	console.log(response)
		  	response.data.forEach((val,key) => {
		  			this.spjs.push(response.data[key]);
		  	})
		  })
	  },
　　methods: {
　　　　goBack (){
　　　　　　this.$router.go(-1)
　　　　},
　　　　closeShowAddress (e){
　　　　　　if(e.target == this.$refs.selectAddress){
　　　　　　　　this.isShowAddress = !this.isShowAddress;
　　　　　　}
　　　　},
　　　　onMyAddressChange(picker, values) {
　　　　　　if(myaddress[values[0]]){ //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
　　　　　　　　picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
　　　　　　　　picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
　　　　　　　　this.myAddressProvince = values[0];
　　　　　　　　this.myAddressCity = values[1];
　　　　　　　　this.myAddresscounty = values[2];
　　　　　　}
　　　　},
　　　},
　　mounted(){
　　　　this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
　　　　　　this.myAddressSlots[0].defaultIndex = 0
　　　　　　// 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
　　　　　　//因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
　　　　});
　　}
}
</script>
	
<style>
	.w-tijiao-d{
		width: 400px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		font-size: 20px;
		margin-top: 10px;
		background: #fff;
		border-radius: 10px;
	}
	#w-tijiao-a{
		background: #2e7856bd;
		color: #000;
	}
		#w-tijiao-d{
		background: #22D783;
		color: #000;
	}
	.w-tijiao-c{
	position: fixed;
	top: 630px;
	left: 38%;
	}
	.w-tijiao{
		height: 100%;
		background: #22D783;
	}
	.w-tijiao-b{
		width: 400px;
		margin: 0 auto;
	}
	.w-tijiao-zuiwai{
		background: #dcdddf80;
		height: 680px;
	}
</style>
