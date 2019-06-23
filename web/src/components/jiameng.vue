<template>
	<div class="w-jm-a">
		 <div>
			 <img src="../assets/img/w-4.jpg" alt="" class="w-jm-b">
		 </div>
		 
		 <div>
			 <div class="demo-image__placeholder" >
				  <div class="block">
					<el-image :src="src" class="w-jm-c"></el-image>
					<div class="w-jm-e">
						<div class="w-jm-f"><span>外卖平台入驻</span></div>
						<div class="w-jm-g"><span>平台优势，成交量有保障</span></div>
					</div>
				  </div>
				  <div class="block">
					<el-image :src="sra"  class="w-jm-d"></el-image>
					<div class="w-jm-h">
						<div class="w-jm-f"><span>零售商家入驻</span></div>
						<div class="w-jm-g"><span>超市便利店 、生鲜蔬果、药品鲜花招商</span></div>
					</div>
				  </div>
				</div>
		 </div>
		 <div class="w-jm-j">
			 <el-image :src="srb" class="w-jm-i"></el-image>
			 <div class="w-jm-k">
			 	<div class="w-jm-f"><span>吃饭饭市场服务</span></div>
			 	<div class="w-jm-g"><span>为百万商家提供全品类优质服务，让生意更简单</span></div>
			 </div>
		 </div>
	</div>
</template>

<script>
	export default {
    data() {
      return {
       src:'//s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-b-00a69ad1bf.png',
	   sra:'//s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-s-8085075ad8.png',
	   srb:'//s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-service-53b6ea859a.png'
      }
    }
  }
</script>

<style>
	.w-jm-j{
		margin: 0 auto;
		width: 1100px;
		margin-top: 20px;
	}
	.w-jm-i{
		width: 1100px;
		height: 300px;
	}
	.w-jm-g{
		    font-size: 18px;
			color: #888;
			font-family: PingFangSC-Light,Microsoft Yahei,Arial,Helvetica,sans-serif;
			line-height: 26px;
			text-align: center;
	}
	.w-jm-f{
		font-size: 36px;
		color: #000;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		text-align: center;
		
	}
	.w-jm-e{
		width: 500px;
		height: 100px;
		background: #fff;
	}
	.w-jm-h{
		width: 500px;
		height: 100px;
		background: #fff;
		margin-left: 100px;
	}
	.w-jm-k{
		width: 1100px;
		height: 100px;
		background: #fff;
		
	}
	.w-jm-b{
		width: 1730px;
		height: 300px;
	}
	.demo-image__placeholder{
		display: flex;
		justify-content: center;
	}
	.w-jm-c{
		width: 500px;
		height: 400px;
	}
	.w-jm-d{
		width: 500px;
		height: 400px;
		margin-left: 100px;
	}
</style>
