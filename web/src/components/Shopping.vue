<template>
	<div class="Shop">
		<div class="tit">
			<div class="gwc">
				<span class="">购物车</span>
				<span class="rm">[清空]</span>
			</div>
		</div>
		<div class="con"></div>
		<div class="foot">
			<div class="js"></div>
			<el-button type="primary">去结算</el-button>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.Shop{
		width: 25%;
		height: 300px;
		position: fixed;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		.tit{
			flex-grow: 0;
			.gwc{
				height: 40px;
				background: #fff;
				border-top: 2px solid #22d783;
				border-bottom:1px solid #22d783;
				width: 100%;
				line-height: 40px;
				font-size: 14px;
				display: flex;
				align-items: center;
				padding-left: 20px;
				.rm{
					font-size: 12px;
					color: #22d783;
					margin-left: 4px;
				}
			}
		}
		.con{
			flex-grow: 2;
		}
		.foot{
			height: 40px;
			background: #22d783;
			flex-grow: 0;
		}
	}
</style>
