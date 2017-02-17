//引包
var fs = require("fs");
var path = require("path");
console.log(process.cwd());

//不管对错  所有参数都会走一遍  
var resolver = path.resolve("../","../cache","temp/aa","../data.txt");//获取一个绝对路径
console.log(resolver);

/*var joiner = path.join(__dirname,"../","../cache","temp/aa","../data.txt");
fs.readFile(joiner,function (err,data){
	if(err)return console.log(err);
	console.log(data.toString());

});*/


//路径的格式化  /  \
var mypath = path.normalize(resolver);
console.log(mypath);

var path1 = "E:\\develop\\mynode\\nodejs\\cache";//此处进行了转义
var path2 = "E:/develop/mynode/nodejs/cache/temp/aa";
//相对路径
var relat = path.relative(path1,path2);
console.log("相对路径:",relat);

console.log("文件名:",path.basename(mypath));
console.log("文件的后缀名:",path.extname(mypath));
console.log("去文件的后缀名:",path.basename(mypath,".txt"));
console.log("目录名:",path.dirname(mypath));
