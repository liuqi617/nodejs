var fs = require("fs");

var mpath =	"../cache/demo02.json";
var obj = {
	name:"nodejs",
	desc: "它是一个io读写特别强的服务器语言！"
};
//JSON.stringify进行转换
fs.writeFile(mpath,JSON.stringify(obj),
	function (err){
		if(err){
			return console.error(err);
		}
		console.log("写入内容成功！");
		//读取写入的内容
		fs.readFile(mpath,function (err,data){
			console.log("异步读取写入的内容：",data.toString());
		//此处如果不写toString()读出的内容将会是buffer后的
		})
	})