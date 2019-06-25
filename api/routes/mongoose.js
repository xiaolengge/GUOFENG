const mongoose =  require('mongoose');

var url = "mongodb://localhost:27017/chifanfan"; // 本地数据库地址
mongoose.connect(url)

// connect() 返回一个状态待定（pending）的连接，可以用来判断连接成功或失败
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Successful connection to "+url)
});
// mongoose.connect('mongodb://localhost/chifanfan',{useNewUrlParser:true},function(err){
// 	if(err){
// 		console.log('连接失败');
// 	}else{
// 		console.log('连接成功')
// 	}
// })
// 
let shiyan   = mongoose.Schema({
	color: String,
})
// 
const sy = mongoose.model('sy',shiyan); 
// 
// var newsj = new sy({color:"blue"});
// 
// newsj.save(function(err,succ){
// 	if(err){
// 		console.log('保存失败')
// 	}else{
// 		console.log('保存成功')
// 		console.log(succ)
// 	}
// });

module.exports = {mongoose,sy}