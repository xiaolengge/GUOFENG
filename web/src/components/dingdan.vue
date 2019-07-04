<template>
	<div class="w-ddan">	
		<div class="w-ddan-a">
			  <el-tabs :tab-position="tabPosition" >
				<el-tab-pane label="个人中心" >
					<div class="w-ddan-b">
						<div class="w-ddan-c" v-for="item in user" :key="item.id" >
							<el-image :src="src" class='w-ddan-e'></el-image>
							<div>
								<span class="w-ddan-f">早上好，{{item.name}} 	<br>
									订餐了吗？提前订餐送的快！</span>
							</div>
						</div>
						<div class="w-ddan-c">
							<span>我的金币</span>
							<span class="w-ddan-g">{{jbi}} {{ge}}</span>
						</div>
						<div class="w-ddan-d">
							<span>我的余额</span>
							<span class="w-ddan-h">{{yue}} {{yuan}}</span>
						</div>
					</div>
					<div class="w-ddan-i">
						<div class="w-ddan-j"><span>最近订单</span></div>
						
						<div class="w-ddan-k">
							<table class="w-biaoge">
								<tr>
									<td class="w-biaoge-a" v-for="item in items">{{item.name}}</td>
									
								</tr>
								<tr  v-for="(item,aa) in one" :key="item.id">
									<td class="w-biaoge-a" >{{item.name}}</td>
									<td class="w-biaoge-b"><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></td>
									<td class="w-biaoge-c">{{item.jiage}}元</td>
									<td class="w-biaoge-c">{{item.xiaoji}}元</td>
								</tr>
								
							</table>
							
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="我的订单">
					<div class="w-ddan-l">
						<div class="w-ddan-j"><span>最近订单</span></div>
						
						<div class="w-ddan-k">
							<table class="w-biaoge">
								<tr>
									<td class="w-biaoge-a" v-for="item in items">{{item.name}}</td>
									
								</tr>
								<tr  v-for="(item,aa) in one" :key="item.id">
									<td class="w-biaoge-a" >{{item.name}}</td>
									<td class="w-biaoge-b"><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></td>
									<td class="w-biaoge-c">{{item.jiage}}元</td>
									<td class="w-biaoge-c">{{item.xiaoji}}元</td>
								</tr>
							</table>	
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="我的资产">
					<div class="w-ddan-m">
						<div class="w-ddan-c">
							<span>我的红包</span>
							<span class="w-ddan-h">{{jbi}} {{ge}}</span>
						</div>
						<div class="w-ddan-c">
							<span>我的金币</span>
							<span class="w-ddan-g">{{jbi}} {{ge}}</span>
						</div>
						<div class="w-ddan-d">
							<span>我的余额</span>
							<span class="w-ddan-h">{{yue}} {{yuan}}</span>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="收货地址">
					<div class="w-ddan-n">
						<div class="w-ddan-j"><span>收货地址</span></div>
						<div class="w-ddan-k">
							<div class="linkage">
							<el-select v-model="sheng" @change="choseProvince" placeholder="省级地区">
							  <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id">
							  </el-option>
							</el-select>
							<el-select v-model="shi" @change="choseCity" placeholder="市级地区">
							  <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id">
							  </el-option>
							</el-select>
							<el-select v-model="qu" @change="choseBlock" placeholder="区级地区" >
							  <el-option v-for="item in qu1" :key="item.id" :label="item.value" :value="item.id">
							  </el-option>
							</el-select>
						  </div>
				
						</div>
						<div class="w-ddan-j"><span>详细地址</span></div>
						
						<div>
							<el-input v-model="input" placeholder="请输入详细地址"></el-input>
						</div>
						<div class="w-ddan-j"><span>收取人</span></div>
						
						<div>
							<el-input v-model="input" placeholder="请输入收件者"></el-input>
						</div>
						<button class="sub">提交</button>
					</div>
				</el-tab-pane>
			  </el-tabs>
		</div>
	</div>
</template>

<script>
	 export default {
		data() {
		   return {
			items:[
				{name:'商品'},
				{name:'份数'},
				{name:'单价'},
				{name:'小计'}
			],
			one:[
				{id:8,name:'蛋炒饭',danjia:20,jine:20}
			],
			yue:'111',
			yuan:'222',
			ge:'33',
			jbi:'444',
			handleChange:'',
			tabPosition: 'left',
			src: 'https://shadow.elemecdn.com/faas/desktop/media/img/default-avatar.38e40d.png?imageMogr2/format/webp/quality/85',
			num:1,
			nup:1,
			input:'',
			mapJson:'/chengshi.json',
			province:'',
			sheng: '',
			shi: '',
			shi1: [],
			qu: '',
			qu1: [],
			city:'',
			block:'',
			kongshuzu:[],
			user:[],
			xiaoji:''
      };
    },
	 methods:{	
    // 加载china地点数据，三级
      getCityData:function(){
        var that = this
        axios.get(that.mapJson).then(function(response){
          if (response.status==200) {
            var data = response.data
            that.province = []
            that.city = []
            that.block = []
            // 省市区数据分类
            for (var item in data) {
              if (item.match(/0000$/)) {//省
                that.province.push({id: item, value: data[item], children: []})
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: []})
              } else {//区
                that.block.push({id: item, value: data[item]})
              }
            }
            // 分类市级
            for (var index in that.province) {
              for (var index1 in that.city) {
                if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                  that.province[index].children.push(that.city[index1])
                }
              }
            }
            // 分类区级
            for(var item1 in that.city) {
              for(var item2 in that.block) {
                if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                  that.city[item1].children.push(that.block[item2])
                }
              }
            }
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
      // 选省
      choseProvince:function(e) {
        for (var index2 in this.province) {
          if (e === this.province[index2].id) {
             console.log(this.province[index2].id)//你选择的省级编码
            console.log(this.province[index2].value)//省级编码 对应的汉字 
            this.shi1 = this.province[index2].children
            this.shi = this.province[index2].children[0].value
            this.qu1 =this.province[index2].children[0].children
            this.qu = this.province[index2].children[0].children[0].value
            this.E = this.qu1[0].id
          }
        }
      },
      // 选市
      choseCity:function(e) {
        for (var index3 in this.city) {
          if (e === this.city[index3].id) {
            this.qu1 = this.city[index3].children
            this.qu = this.city[index3].children[0].value
            this.E = this.qu1[0].id
            console.log(this)
          }
        }
      },
      // 选区
      choseBlock:function(e) {
        this.E=e;
        console.log(this.E)
      },
	  
    },
    created(){
      this.getCityData()
	  
	  this.$parent.$children.forEach((val,key) =>{
		  // console.log(this.$parent.$children[0])
		  if(this.$parent.$children[key]._uid ==4){
			  this.user.push(this.$parent.$children[key].isdl[0])
		  }
	  })
	  axios.get('/api/gouhuo').then((response) =>{
	  	console.log(response)
	  	response.data.forEach((val,key) => {
	  		if(response.data[key].fenshu !==null || undefined){
	  			this.one.push(response.data[key]);
	  		}				
	  	})
	  })
   },
  

	
  };
</script>

<style>
	.w-biaoge{
    width: 100%;
   
	}
	.el-select{
		width: 219px;
	}
	.w-biaoge-a{
		border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
		width: 20%;
		text-align: center;
	}
	.w-biaoge-b{
		border-bottom: 1px solid #dcdfe6;
	  padding: 15px;
	  max-width: 250px;
		width: 30%;
		text-align: center;
	}
	.w-biaoge-c{
		border-bottom: 1px solid #dcdfe6;
	  padding: 15px;
	  max-width: 250px;
		width: 30%;
		text-align: center;
	}
	.w-ddan-a{
		width: 790px;
		margin: 20px auto;
		
	}
	.w-ddan-i{
		margin-top: 20px;
		width: 660px;
		background: #fff;
		margin-bottom: 100px;
	}
	.w-ddan-n{
		width: 660px;
		background: #fff;
		margin-bottom: 300px;
	}
	.w-ddan-l{

		width: 660px;
		background: #fff;
		margin-bottom: 300px;
	}
	.w-ddan-j{
		font-size: 15px;
		width: 660px;
		line-height: 40px;
		height: 40px;
		border-bottom: 1px solid #eee;
	}
	.w-ddan-k{
		width: 660px;
	
		display: flex;
		
		
	}
		
	.w-ddan-h{
		color: #fc463f;
	}
	.w-ddan-g{
		color: #ff9c00;;
	}
	.w-ddan-f{
		font-size: 12px;
		color: #999;
	}
	.w-ddan-e{
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.w-ddan-b{
		width: 660px;
		height: 170px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items:center;
	}
	.w-ddan-m{
		width: 660px;
		height: 170px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items:center;
		margin-bottom: 300px;
	}
	.w-ddan-c{
		width: 215px;
		height: 150px;
		border-right: 1px solid #eee;
		display: flex;
		justify-content: center;
		align-items:center;
	}
	.w-ddan-d{
		width: 215px;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items:center;
	}
	.sub{
		margin-top: 30px;
		margin-bottom: 30px;
		/* background-color: rgb(); */
	}
</style>
