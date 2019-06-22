<template>
	<div class="w-sdian-a">
		
				<div class="w-sdian">
					<div><img src="../assets/img/w-1.jpg" alt=""></div>
					<div class="w-sdian-b">
						<span class="w-sdian-c">重庆鸡公煲</span>
							<el-rate
							  v-model="value"
							  disabled
							  show-score
							  text-color="#ff9900"
							  score-template="{value}">
							</el-rate>
							<span class="w-sdian-d">配送费￥1</span>
					</div>
				</div>	
		
	</div>
</template>

<script>
export default {
    data() {
      return {
        value:3.7
      }
    }
  }
</script>

<style>
	.w-sdian-d{
		color: #999;
		font-size: 13px;
	}
	.w-sdian{
		width: 200px;
		height: 71px;
		display: flex;
		margin: 20px;
	}
	.w-sdian-a{
		background: #fff;
		width: 790px;
		border: 1px solid #e6e6e6;
		margin: 0 auto;
		display: flex;
		flex-wrap:wrap;
	}
	.w-sdian-b{
		margin-left:15px;
		width: 120px;
	}
	.w-sdian-c{
		font-size: 16px;
		margin-bottom: 6px;
		font-weight: 600;
		color: #333;
	}
	.el-rate__item{
		width: 17px;
		height: 18px;
		
	}
</style>
