<template>
	<div class="w-sdian-a">
		
				<div class="w-sdian">
					<div><img :src="dmian" alt=""></div>
					<div class="w-sdian-b">
						<span class="w-sdian-c">{{dmin}}</span>
							<el-rate
							  v-model="value"
							  disabled
							  show-score
							  text-color="#ff9900"
							  score-template="{value}">
							</el-rate>
							<span class="w-sdian-d">{{psong}} {{fyong}}</span>
					</div>
				</div>	
		
	</div>
</template>

<script>
	import sjimg from '../assets/img/w-1.jpg'
export default {
    data() {
      return {
        value:3.7,
		dmian:sjimg,
		dmin:'重庆鸡公煲',
		psong:'配送费￥',
		fyong:1
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
