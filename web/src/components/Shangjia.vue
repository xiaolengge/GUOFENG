<template>
	<div class="w-sdian-a">	
		<router-link to="/lsp" v-for="item in list" :key="item.id">
			<div class="w-sdian" @click="updates(item.dmian,item.dmin)">
					<div class="ttimg"><img :src="item.dmian" alt=""></div>
					<div class="w-sdian-b">
						<span class="w-sdian-c">{{item.dmin}}</span>
							<el-rate
							  :v-model="item.value"
							  disabled
							  show-score
							  text-color="#ff9900"
							  :score-template="item.value">
							</el-rate>
							<span class="w-sdian-d">配送费￥{{item.fyong}}</span>
					</div>
			</div>	
		</router-link>
	</div>
</template>

<script>
	import sjimg from '../assets/img/w-1.jpg'
export default {
    data() {
      return {
		  value:1.1,
		list:[
		]
      }
    },
	methods:{
		updates(img,name){
				this.$router.push({
				path:'/lsp',
				name:'lsp',
				query:{
				 img : img,
				 name : name,
				}
			})
		}
	},
	created(){
		 this.axios.get('/api/inx').then((response) => {
		    // console.log(this.list);
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
	a{
		text-decoration: none;
	}
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
	.ttimg{
		width: 46%;
		display: flex;
		align-items: center;
	}
	.ttimg img{
		width: 100%;
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
