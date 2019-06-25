<template>
	<div class="w-hy">
		<div class="w-yd-tbu">
			<div class="w-yd-tbu-b"><img src="../assets/img/chifan.png" alt="" class="w-yd-tbu-a"></div>
			<div><span>会员</span></div>
			<div class="w-yd-tbu-c"><img src="../assets/img/chilun.png" alt="" class="w-yd-tbu-d"></div>
		</div>
		<div class="w-hyuan">
			<div class="w-hyuan-a">
				<img src="../assets/img/w-5.jpg" alt="">
			</div>
		</div>
		<div class="w-hyuan-b">
			<div class="w-hyuan-c">
				<div class="w-hyuan-e">
					<div><mt-button type="danger" id="w-hyuan-d">特权 1</mt-button></div>
					<div class="w-hyuan-f"><span>免费的会员红包</span></div>
				</div>
				<div class="w-hyuan-g">
					<img src="../assets/img/w-6.jpg" alt="">
				</div>
			</div>
		</div>
		
		<div class="w-hyuan-b">
			<div class="w-hyuan-c">
				<div class="w-hyuan-e">
					<div><mt-button type="danger" id="w-hyuan-d">特权 2</mt-button></div>
					<div class="w-hyuan-f"><span>限时抢购加量包</span></div>
				</div>
				<div class="w-hyuan-h">
					<img src="../assets/img/w-7.jpg" alt="">
					<img src="../assets/img/w-8.jpg" alt="">
				</div>
			</div>
		</div>
		<div class="w-hyuan-i">
			<mt-button type="primary" id="w-hyuan-j">立即开通</mt-button>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#w-hyuan-j{
		width: 100%;
		height: 50px;
		background: #322d29;
		font-size: 25px;
		color: #e1c5b0;
	}
	.w-hyuan-i{
		width: 372px;
		margin: 0 auto;
	}
	.w-hy{
		margin-bottom: 60px;
	}
	.w-hyuan-g{
		height: 130px;
		width: 100%;
		margin-top: 10px;
	}
	.w-hyuan-g img{
		height: 130px;
		width: 372px;
		border-radius: 10px;
	}
	.w-hyuan-h{
		height: 130px;
		width: 100%;
		margin-top: 10px;
		display: flex;
		justify-content: space-around;
	}
	.w-hyuan-h img{
		height: 130px;
		width: 160px;
		border-radius: 10px;
	}
	.w-hyuan-f{
		margin-left: 10px;
		font-size: 29px;
		color: #393937;
		font-weight: 700;
	}
	.w-hyuan-e{
		display: flex;
		align-items: center;
	}
	#w-hyuan-d {
    color: #ba9f98;
    background-color: #1a2835;
	height: 30px;
	border-radius: 7px;
}
	.w-hyuan-c{
		width: 372px;
		height: 200px;
	}
	.w-hyuan-b{
		width: 100%;
		height: 230px;
		border-radius: 20px;
		margin-top: -30px;
		z-index: 20;
		background: #fff;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.w-hyuan-a{
		height: 170px;
		width: 90%;
		
	}
	.w-hyuan-a img{
		width: 100%;
		height: 100%;
		border-radius: 20px;
		
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
	.w-hyuan{
		height: 190px;
		background-color: #22D783;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
</style>
