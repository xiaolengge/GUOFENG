<template>
	<div class="Shop" v-bind:class="{ active: show }">
		<div class="tit" @click='huo'>
			<div class="gwc">
				<span class="">购物车</span>
				<span class="rm" @click="rm">[清空]</span>
			</div>
		</div>
		<div class="con">
			<ul class="jscon">
				<li v-for="(item,index) in spjs" :key="item.id" >
					<!-- <div class="img"><img :src="item.img" alt=""></div> -->
					<div class="naem">{{item.name}}</div>
					<div class="danjia">¥{{item.jiage}}</div>
					<el-input-number size="mini" :value="item.num" @change="sss" :min='0'></el-input-number>
					<div class="zongjia">¥{{item.zj}}</div>
					<div class="del">移除</div>
				</li>
			</ul>
		</div>
		<div class="foot">
			<div class="js">总价：¥{{zzzj}}</div>
			<router-link to='/jiesuan'><el-button type="primary">去结算</el-button></router-link>
		</div>
	</div>
</template>

<script>
	export default {
    data() {
      return {
		zzzj:0,
		show:false,
		zc:0,
		spjs:[
			// {id:1,img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4179754330,2304355023&fm=15&gp=0.jpg",name:'炸鸡',danjia:'1',num:1,zj:''},
		],
      } 
    },
	methods: {
		sss() {
			this.zzzj=0,
			this.spjs.forEach((key,val) => {
				this.spjs[val].zj=this.spjs[val].danjia*this.spjs[val].num;
				this.zzzj+=parseInt(this.spjs[val].zj);
			})
		},
		huo(){
			axios.get('/api/gouhuo').then((response) =>{
				console.log(response)
				response.data.forEach((val,key) => {
					// alert(response.data[key].fenshu)
					if(response.data[key].fenshu !==null || undefined){
						this.spjs.push(response.data[key]);
					}				
				})
			})
			this.show=!this.show
		},
		rm(){
			axios.get('/api/re').then((response) =>{
				console.log(response)
			})
		}
	},
	created(){
		this.spjs.forEach((key,val) => {
			this.spjs[val].zj=this.spjs[val].jiage*this.spjs[val].num;
			this.zzzj+=parseInt(this.spjs[val].zj);
		})
	}
  };
</script>

<style lang="less">
	.Shop{
		width: 25%;
		height: 300px;
		position: fixed;
		bottom: -260px;
		right: 0;
		display: flex;
		flex-direction: column;
		animation: chux 1s forwards;
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
			background: #fffff1;
			.jscon{
				margin: 0;
				padding: 0;
				list-style: none;
				li{
					height: 50px;
					width: 100%;
					background: #fff;
					border-top: 1px solid #eee;
					border-bottom: 1px solid #eee;
					display: flex;
					justify-content: space-around;
					align-items: center;
					font-size: 12px;
					
					.img{
						width: 20%;
						img{
							width: 100%;
						}
					}
				}
			}
		}
		.foot{
			height: 40px;
			background: #22d783;
			flex-grow: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			a{
				text-decoration: none;
				color: #fff;
			}
			.js{
				color: #fff;
				font-size: 18px;
				padding-left: 20px;
			}
		}
	}
	.active{
		animation: show 1s ease alternate forwards;
	}
	@keyframes show{
		0%{
			bottom:-260px;
		}
		100%{
			bottom: 0px;
		}
	}
	@keyframes chux{
		0%{
			bottom:0px;
		}
		100%{
			bottom: -260px;
		}
	}
</style>
