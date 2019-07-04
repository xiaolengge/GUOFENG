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
	xiaoji:String,
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
//定义注册登录表骨架
let  zc  = mongoose.Schema({
	username:String,
	password:String,
})
let  cfk  = mongoose.Schema({
	name:String,
	dizhi:String,
	head:String,
})
//购物车骨架
let  gwc  = mongoose.Schema({
	id: Number,
	name:String,
	peifang:String,
	img:String,
	jiage:Number,
	fenshu:String,
	__v:Number,
	_id:String
})
const CK = mongoose.model('CK',cfk);
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
//定义注册登录表
const DL = mongoose.model('DL',zc);
//定义购物车列表
const GOU = mongoose.model('GOU',gwc);
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
//购物车列表
router.post('/gouadd', function(req, res, next) {
		var igwc = new GOU({id:req.body.id,fenshu:req.body.fenshu,img:req.body.img,jiage:req.body.jiage,name:req.body.name,peifang:req.body.peifang,__v:req.body.__v,_id:req.body._id,});
		igwc.save(function(err,succ){
			if(err){
				console.log('保存失败')
			}else{
				console.log('保存成功')
				console.log(succ)
			}
		});
		// res.send(new_cat)
});
//存储注册信息
router.post('/zhuche', function(req, res, next) {
		var username = req.body.username;
		var password = req.body.password;
		//用户名不能空
		if(username == ''){
			// resData.code = 1;
			res.send = ('用户名不能为空'); 
			return;
		}
		if(password == ''){
			// resData.code = 2;
			res.send = ('密码不能为空'); 
			return;
		}
		DL.find({username:req.body.username}).then(function(userInfo){
		console.log(userInfo); //若控制台返回空表示没有查到数据
		if(userInfo == []){
			//若数据库有该记录
			var new_zhanghao = new DL({username:req.body.username,password:req.body.password})
			new_zhanghao.save(function(err,succ){
				if(err){
					console.log('保存失败')
			}else{
					res.send = (userInfo); 
					console.log(userInfo)
					console.log(succ)
				}
			});
			return;
		}
		// 用户名没有被注册则将用户保存在数据库中
		res.send('用户以注册');
	});
});
//登录
router.get('/dlu', function(req, res, next) {
		const obj ={};
		DL.find(obj,(err,docs) =>{
			if(err){
				console.log('查询失败')
			}else{
				res.send(docs);
			}
		})
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
router.post('/cfk', function(req, res, next) {
		var new_ren =new CK({name:req.body.name,dizhi:req.body.dizhi});
		new_ren.save(function(err,succ){
				if(err){
					console.log('保存失败')
			}else{
					console.log('保存成功')
					console.log(succ)
				}
			});
});
router.get('/cfkq', function(req, res, next) {
		const obj ={};
		CK.find(obj,(err,docs) =>{
			if(err){
				console.log('查询失败')
			}else{
				res.send(docs);
			}
		})
});
//查询购物车
router.get('/gouhuo', function(req, res, next) {
		const obj ={};
		GOU.find(obj,(err,docs) =>{
			if(err){
				console.log('查询失败')
			}else{
				res.send(docs);
			}
		})
});
module.exports = router;