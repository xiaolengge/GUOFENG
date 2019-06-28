var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/chifanfan',{useNewUrlParser:true},function(err){
	if(err){
		console.log('连接失败');
	}else{
		console.log('连接成功')
	}
})
//优惠卷骨架
let  yh  = mongoose.Schema({
	id: Number,
	je:String,
	tiaoj:String
})
//推荐骨架
let  tuijie  = mongoose.Schema({
	id: Number,
	name:String,
	peiliao:String,
	img:String,
})
//商品骨架
let  sunzi  = mongoose.Schema({
	id: Number,
	name:String,
	peifang:String,
	img:String,
	jiage:Number,
	fenshu:String,
})
//评论骨架
let  pin  = mongoose.Schema({
	id: Number,
	name:String,
	content:String,
	zan:String,
	cai:String,
	head:String,
})
//首页店铺骨架
let  index_dp  = mongoose.Schema({
	id: Number,
	value:String,
	dmian:String,
	dmin:String,
	fyong:String,
})
//定义一个首页店铺表
const Idp = mongoose.model('Idp',index_dp);
// 定义一个优惠表
const YH = mongoose.model('YH',yh);
//定义一个推荐表
const TJ = mongoose.model('TJ',tuijie);
//定义一个 商品 表
const Sunz = mongoose.model('Sunz',sunzi);
//定义一个评论表
const Pin = mongoose.model('Pin',pin);
/* GET users listing. */
router.post('/', function(req, res, next) {
	
		var idp = new Idp({id:req.body.id,value:req.body.value,dmian:req.body.dmian,dmin:req.body.dmin,fyong:req.body.fyong});
		idp.save(function(err,succ){
			if(err){
				console.log('保存失败')
			}else{
				console.log('保存成功')
				console.log(succ)
			}
		});
		// res.send(new_cat)
});
//查询优惠卷表
router.post('/huoqu', function(req, res, next) {
		const obj ={};
		YH.find(obj,(err,docs) =>{
			if(err){
				console.log('查询失败')
			}else{
				res.send(docs);
			}
		})
});
//查询推荐表
router.post('/huoqu2', function(req, res, next) {
		const obj ={};
		TJ.find(obj,(err,docs) =>{
			if(err){
				console.log('查询失败')
			}else{
				res.send(docs);
			}
		})
});
//查询商品表
router.post('/huoqu3', function(req, res, next) {
		const obj ={};
		Sunz.find(obj,(err,docs) =>{
			if(err){
				console.log('查询失败')
			}else{
				res.send(docs);
			}
		})
});
//查询评论表
router.post('/pinlun', function(req, res, next) {
		const obj ={};
		Pin.find(obj,(err,docs) =>{
			if(err){
				console.log('查询失败')
			}else{
				res.send(docs);
			}
		})
});
//查询首页表
router.get('/inx', function(req, res, next) {
		const obj ={};
		Idp.find(obj,(err,docs) =>{
			if(err){
				console.log('查询失败')
			}else{
				res.send(docs);
			}
		})
});
module.exports = router;
