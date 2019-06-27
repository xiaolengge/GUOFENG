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
let  yh  = mongoose.Schema({
	id: Number,
	je:String,
	tiaoj:String
})
let  tuijie  = mongoose.Schema({
	id: Number,
	name:String,
	peiliao:String,
	img:String,
})
const YH = mongoose.model('YH',yh);
const TJ = mongoose.model('TJ',tuijie);
/* GET users listing. */
router.post('/', function(req, res, next) {
	
		var new_tj = new TJ({id:req.body.id,name:req.body.name,peiliao:req.body.peiliao,img:req.body.img});
		new_tj.save(function(err,succ){
			if(err){
				console.log('保存失败')
			}else{
				console.log('保存成功')
				console.log(succ)
			}
		});
		// res.send(new_cat)
});
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

module.exports = router;
