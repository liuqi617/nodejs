var fs = require("fs");
var mpath = "./xieru.txt";

var content = "我是被写入的内容！还想多写点呀……";
fs.writeFile(mpath,content,function (err){
	if(err){
		console.log(err);
	}
	console.log("写入完成！");
	//读出写入的内容
	fs.readFile(mpath,function(err,data){
		console.log("异步读取:",data.toString());
	})
})