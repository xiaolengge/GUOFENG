var express = require('express');
var { mongoose,sy } = require('./mongoose')
var router = express.Router();
/* GET home page. */
router.post('/', function(req, resp,next) {
	//存储传过来的数据
	 let data = {
		 color:req.query.myinput
	 }
	console.log(req.body)
	 console.log(data)
	 resp.send(req.data)
	 // var addUser = new sy(data)
	 // addUser.save()
	 // resp.send(JSON.stringify(data))
});
 
module.exports = router;