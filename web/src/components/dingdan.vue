<template>
	<div class="w-ddan">	
		<div class="w-ddan-a">
			<template>
	
			  <el-tabs :tab-position="tabPosition" >
				<el-tab-pane label="个人中心" >
					<div class="w-ddan-b">
						<div class="w-ddan-c">
							<el-image :src="src" class='w-ddan-e'></el-image>
							<div>
								<span class="w-ddan-f">早上好，63717000420 	<br>
									订餐了吗？提前订餐送的快！</span>
							</div>
						</div>
						<div class="w-ddan-c">
							<span>我的金币</span>
							<span class="w-ddan-g">{{jbi}} {{ge}}</span>
						</div>
						<div class="w-ddan-d">
							<span>我的余额</span>
							<span class="w-ddan-h">{{yue}} {{yuan}}</span>
						</div>
					</div>
					<div class="w-ddan-i">
						<div class="w-ddan-j"><span>最近订单</span></div>
						
						<div class="w-ddan-k">
							<table class="w-biaoge">
								<tr>
									<td class="w-biaoge-a">商品</td>
									<td class="w-biaoge-b">份数</td>
									<td class="w-biaoge-c">小计</td>
								</tr>
									<tr>
									<td class="w-biaoge-a">蛋炒饭</td>
									<td class="w-biaoge-b"><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></td>
									<td class="w-biaoge-c">20元</td>
								</tr>
									<tr>
									<td class="w-biaoge-a">煎鸡蛋</td>
									<td class="w-biaoge-b"><el-input-number v-model="nup" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></td>
									<td class="w-biaoge-c">3元</td>
								</tr>
								
							</table>
							
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="我的订单">
					<div class="w-ddan-l">
						<div class="w-ddan-j"><span>最近订单</span></div>
						
						<div class="w-ddan-k">
							<table class="w-biaoge">
								<tr>
									<td class="w-biaoge-a">商品</td>
									<td class="w-biaoge-b">份数</td>
									<td class="w-biaoge-c">小计</td>
								</tr>
									<tr>
									<td class="w-biaoge-a">{{spingb}}</td>
									<td class="w-biaoge-b"><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></td>
									<td class="w-biaoge-c">{{jine}} {{yuan}}</td>
								</tr>
									<tr>
									<td class="w-biaoge-a">{{spinga}}</td>
									<td class="w-biaoge-b"><el-input-number v-model="nup" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></td>
									<td class="w-biaoge-c">{{jine}} {{yuan}}</td>
								</tr>
								
							</table>
							
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="我的资产">
					<div class="w-ddan-m">
						<div class="w-ddan-c">
							<span>我的红包</span>
							<span class="w-ddan-h">{{jbi}} {{ge}}</span>
						</div>
						<div class="w-ddan-c">
							<span>我的金币</span>
							<span class="w-ddan-g">{{jbi}} {{ge}}</span>
						</div>
						<div class="w-ddan-d">
							<span>我的余额</span>
							<span class="w-ddan-h">{{yue}} {{yuan}}</span>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="收货地址">
					<div class="w-ddan-n">
						<div class="w-ddan-j"><span>收货地址</span></div>
						<div class="w-ddan-k"></div>
					</div>
				</el-tab-pane>
			  </el-tabs>
			</template>
		</div>
	</div>
	
</template>

<script>
	 export default {
    data() {
      return {
        tabPosition: 'left',
				src: 'https://shadow.elemecdn.com/faas/desktop/media/img/default-avatar.38e40d.png?imageMogr2/format/webp/quality/85',
				num: 1,
				nup: 1,
			jbi:0,
			ge:' 个',
			yue:0,
			yuan:'元',
			spingb:'蛋炒饭',
			spinga:'煎鸡蛋',
			jine:'30'
		
      };
    },
	
  };
</script>

<style>
	.w-biaoge{
    width: 100%;
   
	}
	.w-biaoge-a{
		border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
		width: 20%;
		text-align: center;
	}
	.w-biaoge-b{
		border-bottom: 1px solid #dcdfe6;
	  padding: 15px;
	  max-width: 250px;
		width: 50%;
		text-align: center;
	}
	.w-biaoge-c{
		border-bottom: 1px solid #dcdfe6;
	  padding: 15px;
	  max-width: 250px;
		width: 30%;
		text-align: center;
	}
	.w-ddan-a{
		width: 790px;
		margin: 20px auto;
		
	}
	.w-ddan-i{
		margin-top: 20px;
		width: 660px;
		background: #fff;
		margin-bottom: 100px;
	}
	.w-ddan-n{
		width: 660px;
		height: 200px;
		background: #fff;
		margin-bottom: 300px;
	}
	.w-ddan-l{

		width: 660px;
		background: #fff;
		margin-bottom: 300px;
	}
	.w-ddan-j{
		font-size: 15px;
		width: 660px;
		line-height: 40px;
		height: 40px;
		border-bottom: 1px solid #eee;
	}
	.w-ddan-k{
		width: 660px;
	
		display: flex;
		
		
	}
		
	.w-ddan-h{
		color: #fc463f;
	}
	.w-ddan-g{
		color: #ff9c00;;
	}
	.w-ddan-f{
		font-size: 12px;
		color: #999;
	}
	.w-ddan-e{
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.w-ddan-b{
		width: 660px;
		height: 170px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items:center;
	}
	.w-ddan-m{
		width: 660px;
		height: 170px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items:center;
		margin-bottom: 300px;
	}
	.w-ddan-c{
		width: 215px;
		height: 150px;
		border-right: 1px solid #eee;
		display: flex;
		justify-content: center;
		align-items:center;
	}
	.w-ddan-d{
		width: 215px;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items:center;
	}

</style>
