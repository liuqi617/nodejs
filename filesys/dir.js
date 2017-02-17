//引包
var fs = require("fs");

console.log("创建目录");
//先文件夹 后文件
fs.mkdir("../cache/temp/aa",
	function(err){
		if(err){
			console.error(err);
		}
		console.log("创建目录成功！");
	});