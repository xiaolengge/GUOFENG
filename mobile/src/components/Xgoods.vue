<template>
  <div>
    <div class="head"> 
    </div>
    <div class="content">
      <div class="shop">商品</div>
      <div class="comment">评论</div>
	  <div class="shang">商家</div>
      <div class="daohang">
        <div class="detail">
			<div class="list-group">
				<ul class="list-group">
				  <li class="list-group-item" v-for="item in list" :key="item.id">
					{{item.name}}
				  </li>
				</ul>
			</div>
			
			
			
			
			<!-- <div  class="shopdetail"></div> -->
			<router-link to="/tijiaoddan" class="w-dibu-a">
			<div class="list-group1">
				<div class="">
					<ul class="">
					  <li class="list-group-item" v-for="item in list" :key="item.id">
						{{item.name}}
						<br>
						<br>
						<div v-for="(val,index) in goodlist" :key="index" class="shopdetail">
						  <img :src="val.img">
						  <span class="name">
						    {{val.title}}
						    <br>
						    <span class="num">月销量：{{val.num}}</span>
						  </span>
						  <div v-show="val.discount>0" class="originprice">
						    <div class="discount">{{val.discount?val.discount+"折":""}}</div>
						    {{val.discount?"限一次优惠":""}}
						  </div>
						  <div class="price">
						    ￥{{val.price}}
						    <span class="orprice">{{val.originPrice?"￥"+val.originPrice:""}}</span>
						  </div>
						  <div class="addorjian">
						    <div class="add" @click="add(val)">+</div>
						    <div class="addnum">{{val.buynum}}</div>
						    <div class="jian" @click="jian(val.kind,val.id)">-</div>
						  </div>
						  <br>
						</div>
					  </li>
					</ul>
				</div>
				 
			</div>
			</router-link>
         
        </div>
        <div v-for="(val,key) in a" :key="key" @click="getGood(val.kind)">
          <div class="left">
            {{val.name}}
            <div class="goodnum" v-show="val.num>0">{{val.num?val.num:""}}</div>
          </div>
          <span>{{val.originPrice?"￥"+val.originPrice:""}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex, { mapState, mapActions } from "vuex";
import img1 from "../assets/img/ping.jpg";
import img2 from "../assets/img/ning.jpg";
import img3 from "../assets/img/sha.jpg";
import img4 from "../assets/img/xiang.jpg";
import img5 from "../assets/img/mi.jpg";
export default {
  data() {
    return {
		buynum:0,
		list:[
		{name:'果拼果汁'},
		{name:'精选热菜'},
		{name:'爽口凉菜'},
		{name:'精选套餐'},
		{name:'小吃主食'},
		{name:'特色粥品'},
		],
      goodlist: [
		
		{
		  id:0,
		  img: img1,
		  title:"烟台苹果",
		  price:0.1,
		  num:69,
		  kind:0,
		  discount:0.2,
		  originPrice:5,
		  buynum:0
		
		
		},
		{
		  id:1,
		  img: img2,
		  title:"柠檬",
		  price:1,
		  num:27,
		  kind:0,
		  discount:1,
		  originPrice:10,
		  buynum:0
		},
		{
		  id:2,
		  img: img3,
		  title:"沙糖桔",
		  price:4.99,
		  num:63,
		  kind:1,
		  buynum:0
		},
		{id:3,
		  img: img4,
		  title:"香梨",
		  price:2.5,
		  num:56,
		  kind:1,
		  buynum:0
		},
		{
		  id:4,
		  img: img5,
		  title:"猕猴桃",
		  price:1.88,
		  num:89,
		  kind:1,
		  buynum:0
		}
	  ],
      value: "",
      sumnum: 0,
      sumprice: 0
    };
  },
};
</script>
<style lang="less">

* {
  padding: 0;
  margin: 0;
}
.detail div::nth-of-type(1){
	margin-left:0;
}
.sumprice {
  position: absolute;
  top: 10px;
  left: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.getorder {
  position: absolute;
  left: 314px;
  background-color: green;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 20px;
  color: white;
  font-weight: bolder;
  line-height: 75px;

  /* overflow:hidden */
}
.content {
  width: 100%;
  /* margin-bottom: 20px; */
}
.sumnum {
  position: absolute;
  margin-left: 42px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: red;
  text-align: center;
  z-index: 1;
  color: white;
  font-weight: bold;
  vertical-align: middle;
}
.addnum {
  width: 20px;
  height: 20px;
  float: right;
  color: black;
  text-align: center;
  vertical-align: middle;
  margin-top: -17px;
  margin-left: 8px;
}
.addorjian {
  margin-right: 30px;
}
.goodnum {
  color: white;
  font-weight: bold;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: red;
  text-align: center;
  line-height: 20px;
}
.shopname {
  margin-left: 20px;
  margin-top: 10px;
  font-size: 15px;
  color: white;
  display: block;
}
.search {
  margin-top: 20px;
  margin-left: 10px;
}
.orprice {
  text-decoration: line-through;
  color: gray;
  margin-left: 5px;
}
.add {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  float: right;
  background-color: cornflowerblue;
  color: white;
  text-align: center;
  vertical-align: middle;
  /* display: inline-block; */
  margin-top: -17px;
  margin-left: 8px;
  font-weight: bold;
}
.jian {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  float: right;
  background-color: cornflowerblue;
  color: white;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  margin-top: -17px;
  font-weight: bold;
}
.originprice {
  display: inline-block;
  color: red;
  width: auto;
  height: 16px;
  border: 1px red solid;
  border-radius: 3px;
  margin-left: 0px;
  text-align: center;
  vertical-align: middle;
  padding-right: 2px;
  margin-top: -10px;
}

.discount {
  display: inline-block;
  margin-right: 5px;
  color: white;
  background-color: red;
}
.head {
  width: 100%;
  height: 100px;
  background:url(../assets/img/di.jpg);
}
.shop {
  width: 33%;
  height: 30px;
  display: inline-block;
  line-height: 30px;
  font-weight: bolder;
  border-bottom: 1px solid olivedrab;
}
.shop:hover {
  color: olivedrab;
}
.comment {
  width: 33%;
  height: 30px;
  display: inline-block;
  line-height: 30px;
  font-weight: bolder;
  border-bottom: 1px solid olivedrab;
}
.comment:hover {
  color: olivedrab;
}
.shang{
	width: 34%;
	height: 30px;
	display: inline-block;
	line-height: 30px;
	font-weight: bolder;
	border-bottom: 1px solid olivedrab;
}
.shang:hover {
  color: olivedrab;
}
.left {
  width: 20%;
  height: 30px;
  border-top: 0px;
  line-height: 30px;
  text-align: center;
  color: gray;
  background-color: #f8f8f8;
}
.daohang {
  width: 100%;
}
.detail{
	position: relative;
	top: 0;
}
.list-group1 {
  width: 70%;
  height:34.375rem;
  // margin-top: 20px;
  position: absolute;
  left:30%;
  top: 0;
  overflow: hidden;
}
.list-group ul li{
	width:15%;
	background:rgb(34 215 130);
	padding:10px;
	text-align:center;
	
}

.content li{
	list-style:none;
}

.shopdetail img {
  width: 70px;
  height: 60px;
}
.name {
  position: absolute;
  line-height: 20px;
  font-weight: bold;
}
.price {
  color: red;
  margin-left: 70px;
  /* float: left; */
  /* display: inline-block; */
}

.num {
  font-weight: normal;
  color: gray;
}
.foot img {
  width: 90px;
  height: 70px;
  position: fixed;
  bottom: 10px;
  left: 10px;
}
.foot {
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-color: olivedrab;
  border-radius: 50px;
  /* position:relative; */
  overflow: hidden;
}
.foot{
	margin-bottom:3.75rem;
}
</style>