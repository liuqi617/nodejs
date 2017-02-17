//fs是nodejs对文件操作的一个模块
var fs = require("fs");//引包
var road = "../cache/demo01.json";
//读取文件内容
//异步读取:读出来的是文本  字符串   保持原有的格式
fs.readFile(road,function (err,data){//回调函数
		if(err){
			return console.error(err);
		}
		console.info("异步读取:",data.toString());

});
//同步读取: 读取的是对象 
var people = fs.readFileSync(road);
console.log("同步读取:",JSON.parse(people));

console.log("程序结束！");