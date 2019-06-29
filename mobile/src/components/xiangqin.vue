<template>
	<div class="w-yd">
		<div class="w-lb-b">
			<mt-search v-model="value" placeholder="搜索商品和美食" id="w-lb-c"></mt-search>
		</div>
		<div class="w-lb-e">
			<div class="w-lb-f">
				<img src="../assets/img/meishi.png" alt="" class="w-lb-g"><br>
				<span>美食</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/yinpin.png" alt="" class="w-lb-g"><br>
				<span>饮品</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/chaoshi.png" alt="" class="w-lb-g"><br>
				<span>超市</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/shuiguo.png" alt="" class="w-lb-g"><br>
				<span>水果</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/shouye.png" alt="" class="w-lb-g"><br>
				<span>鲜花</span>
			</div>
		</div>
		
		<div class="w-lb-e">
			<div class="w-lb-f">
				<img src="../assets/img/boshimao.png" alt="" class="w-lb-g"><br>
				<span>校园</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/wancan.png" alt="" class="w-lb-g"><br>
				<span>晚餐</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/meishi.png" alt="" class="w-lb-g"><br>
				<span>家常菜</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/xiaolongxia.png" alt="" class="w-lb-g"><br>
				<span>龙虾</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/FastFood-.png" alt="" class="w-lb-g"><br>
				<span>快餐</span>
			</div>
		</div>
		<div class="w-lb-e">
			<div class="w-lb-f">
				<img src="../assets/img/ICON_chuancai-.png" alt="" class="w-lb-g"><br>
				<span>川菜</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/mianbao.png" alt="" class="w-lb-g"><br>
				<span>面包</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/huoche.png" alt="" class="w-lb-g"><br>
				<span>减配送</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/chaoshi.png" alt="" class="w-lb-g"><br>
				<span>到店自取</span>
			</div>
			<div class="w-lb-f">
				<img src="../assets/img/icon.png" alt="" class="w-lb-g"><br>
				<span>更多</span>
			</div>
		</div>
		
		<div class="w-lb-d">
			<mt-swipe :auto="4000" class='w-lb'>
			  <mt-swipe-item><img src="../assets/img/w-1.jpg" alt="" class="w-lb-a"></mt-swipe-item>
			<mt-swipe-item><img src="../assets/img/w-2.jpg" alt="" class="w-lb-a"></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/img/w-3.jpg" alt="" class="w-lb-a"></mt-swipe-item>
			</mt-swipe>
		</div>
		
		<div>
			<div class="w-lb-h">附近商家</div>
			<div class="w-lb-i" v-for="item in list" :key='item.id' >
				<div><img :src="item.dmian" alt="" class="w-lb-j" ></div>
				<div class="w-lb-n">
					<span class="w-lb-k">{{item.dmin}}</span> <br>
					<span class="w-lb-l">☆{{item.value}}</span>
					<span class="w-lb-m"> 月售{{item.yue}}</span><br>
					<div class="w-lb-p">
						<span class="w-lb-m">配送￥{{item.fyong}}</span>
						<span class="w-lb-o">吃饭饭专送</span>
					</div>
					
				</div>	
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import sjimg from '../assets/img/w-4.jpg'
	 export default {
	data() {
	  return {
		// dmian:sjimg,
		// name:'煎饼侠',
		// yueshou:'1000',
		// xing:'4.4',
		// peisong:'2.5',
		value:'',
		list:[]
	  };
	},
	created(){
		 this.axios.get('/api/inx').then((response) => {
		    console.log(this.list);
			response.data.forEach((val,key) => {
				this.list.push(response.data[key]);	
				// this.value = response.data[key].value
			})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	}
</script>

<style>
	.w-yd{
		margin-bottom: 50px;
	}
	.w-lb-o{
		font-size: 13px;
		background: #22D783;
	}
	.w-lb-p{
		display: flex;
		justify-content: space-between;
		width: 300px;
	}
	.w-lb-n{
		margin-left: 5px;
	}
	.w-lb-l{
		font-size: 13px;
		color: #f3d90f;
	}
	.w-lb-m{
		font-size: 13px;
		
	}
	.w-lb-k{
		font-size: 19px;
		margin-bottom: 6px;
		font-weight: 600;
		color: #333;
	}
	.w-lb-g{
		width: 50px;
		height: 40px;
		
	}
	.w-lb-j{
		width: 70px;
		height: 70px;
	}
	.w-lb-i{
		margin: 5px;
		display: flex;
	}
	.w-lb-h{
		font-size: 25px;
		color: #000;
		font-weight: 700;
		margin: 5px;
	}
	.w-lb-f{
		text-align: center;
	}
	.w-lb-e{
		display: flex;
		justify-content: space-around;
		margin-top: 10px;
	}
	.mint-swipe {
	overflow: hidden;
	position: relative;
	height: 120px;
	margin: 5px;
	text-align: center;
}
.w-lb-d{
	height: 120px;
}
#w-lb-c{
		height: 52px;
		overflow: hidden;
	}
	.w-lb-a{
		width:100%;
		height: 100%;
	}

	.mint-searchbar-inner{
		border-radius: 10px;
		
	}
	.mint-searchbar{
		color: #41454e;
		background: #f0efef;
	}
	.mint-searchbar-cancel{
		color: #41454e;
		
	}
	
</style>
