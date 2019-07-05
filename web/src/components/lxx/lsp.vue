<template>
	<div class="sp_nav">
		<ul class="sp_list">
			<li v-for="(item,index) in list" :key="item.id" class="w-yangshi" @click="addg(item.id)">
				
				<div class="sp_img"><img :src="item.img" alt=""></div>
				<div class="sp_name">
					<span class="name">{{item.name}}</span>
					<span  class="pf">{{item.peifang}}</span>
					<el-rate v-model="value" disabled show-score text-color="#ff9900" :score-template="item.fenshu"></el-rate>
				</div>
				<div class="jiage">¥{{ item.jiage }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import star from "../star.vue";
	export default {
		components:{
			star,
		},
			data(){
				return{
					img:'',
					name:'',
					id:'',
					value:3.5,
					list:[
						// {id:1,img:'http://img5.imgtn.bdimg.com/it/u=1226649064,244935913&fm=26&gp=0.jpg',name:'吮指原味鸡',peifang:'炸鸡一块',jiage:'99',fenshu:'4.5'},
					]
				}
			},
			methods:{
				addg(id){
					console.log(this.list[id])
					axios.post('/api/gouadd',this.list[id]).then((response) =>{
						console.log(response)
					})
					
				},

			},
			created(){
				 this.axios.post('/api/huoqu3').then((response) => {
					response.data.forEach((val,key) => {
						// alert(response.data[key].fenshu)
						if(response.data[key].fenshu !==null || undefined){
							this.list.push(response.data[key]);
						}				
					})
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
				// this.getParams()
			},

	
		}
		
</script>

<style lang="less">
	.w-yangshi:hover{
		border: 2px solid #22d783;
	}
	.sp_list{
		display: flex;
		list-style:none;
		flex-wrap: wrap;
		li{
			width: 49%;
			box-sizing: border-box;
			height: 100px;
			border: 1px solid #eee;
			display: flex;
			justify-content: flex-start;
			padding-left: 20px;
			.sp_img{
				width: 25%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				img{
					width: 100%;
					height: 80%;
				}
			}
			.sp_name{
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-left: 5px;
				.name{
					font-size: 18px;
				}
				.pf{
					font-size: 14px;
					color: #aaa;
				}
				.ppf{
					font-size: 14px;
					color: #aaa;
				}
			}
			.jiage{
				display: flex;
				align-items: center;
				margin: auto;
				margin-right: 15px;
				color: red;
				font-weight: 700;
			}
		}
	}
</style>
