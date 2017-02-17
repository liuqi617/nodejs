var fs = require("fs");
console.log(__dirname);//dirname代表被执行文件的绝对路径
console.log(__filename);

console.log(process.cwd());//执行所在的绝对路径


fs.readFile(__dirname+"/dir.js",
	function(err,data){
		if(err)return console.log(err);
		console.log("读取成功！",data.toString());
	});
console.log("读取结束！");