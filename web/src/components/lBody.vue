<template>
		<div class="bigbox" id='lbody'>
			<div class="topmsg">
				<div class="tmb"></div>
				<div class="ldp_img"><img :src="home_url" alt=""></div>
				<div class="sp_name">
					<p class="sp_tit">{{sp_name}}</p>
					<div class="xx"><star :size="36" :score="4.5"></star><span>4.5分</span></div>
					<span class="diz">地址：{{ diz }}</span>
					<span class="pj">评价：{{ pj }}</span>
				</div>
			</div>
			<div class="l_con">
				<div class="l_nav">
					<snav></snav>
					<router-view></router-view>
				</div>
				<div class="r_nav"></div>
			</div>
		</div>
</template>

<script>
	import dpimg from '../assets/logo.png'
	 import star from "./star.vue";
	 import snav from "./spdh.vue";
	 // import tbj from '../assets/t_bj.jpg'
export default {
		name: 'lbody',
		components:{
			star,
			snav
		},
		data(){
			return{
				home_url:dpimg,
				sp_name:'肯德基',
				diz:'龙马潭区xx街道xx号',
				pj:'xxx条'
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	@zt:'Songti';
	@bzh:24px;
	@h1:100%;
	@coo1:#ccc;
	@bj:'../assets/t_bj.jpg';
	@mb1:3;
.bigbox{
	font-family: @zt;
	.topmsg{	
		display: flex;
		height: 160px;
		justify-content: flex-start;
		align-content: center;
		background: url("@{bj}");
		.tmb{
			background: rgba(0, 0, 0, .5);
			width: @h1;
			height: 160px;
			position: absolute;
			z-index: 0;
			left: 0;
		};
		padding-left: 60px;
		.ldp_img{
			width: 10%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			z-index: @mb1;
			img{
				width: @h1;
				height: 80%;
			}
		};
		.sp_name{
			margin-left: 20px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			position: relative;
			z-index: @mb1;
			.sp_tit{
				font-size: @bzh;
				margin: 0;
			};
			.xx{
				display: flex;
				justify-content: start;
				align-content: center;
				font-size: @bzh - 12px;
				span{
					margin-left: 5px;
					color: @coo1;
				}
			}
			.diz,.pj{
				color: @coo1;
				font-size: @bzh - 10px;
			}
		}
	}
	.l_con{
		display: flex;
		justify-content: start;
		.l_nav{
			width: @h1 - 30%;
			.el-menu-demo{
				display: flex;
				justify-content: center;
				border-color: #22d783;
			}
		}
	}
}
</style>
