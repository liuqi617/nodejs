var fs = require("fs");

fs.readdir("../cache/temp",
	function (err,files){
	if(err){
		return console.log(err);
	}
	files.forEach(function (item,index,arr){//三个参数可以用file代替
		//item表示当前的文件或者文件夹
		console.log(item);
	})

})