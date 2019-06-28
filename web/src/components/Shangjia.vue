<template>
	<div class="w-sdian-a">
				<div class="w-sdian" v-for="item in list" :key="item.id">
					<!-- <router-link to="/lsp"></router-link> -->
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
		
	</div>
</template>

<script>
	import sjimg from '../assets/img/w-1.jpg'
export default {
    data() {
      return {
		  value:1.1,
		list:[
			// {id:1,value:'3.7',dmian:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=630679254,2299163390&fm=26&gp=0.jpg',dmin:'重庆鸡公煲',fyong:1,}
		]
      }
    },
	created(){
		 this.axios.get('/api/inx').then((response) => {
		    console.log(this.list);
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
