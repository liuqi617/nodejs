//删除目录
var fs = require("fs");

fs.rmdir("../cache/test",
	function (err){
	if(err){
		return console.log(err);
	}
	console.log("删除文件夹成功！");
})