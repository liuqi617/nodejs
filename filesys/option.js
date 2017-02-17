var fs = require("fs");

var buf = new Buffer(1024);
var road = "../cache/content.txt";//路径

console.log("准备打开文件");
//r+代表以读写模式打开文件夹 如果文件不存在则抛出异常
fs.open(road,"r+",function (err,fd){
		if(err){
			return console.error(err);
		}
		console.log("文件打开成功");
//ftruncate是改变文件大小
		fs.ftruncate(fd,10,function (err){
			if(err){
				console.error(err);
			}
			console.log("文件截取成功！");
		});
		//异步模式下读取文件
		console.log("开始读取文件：")
		
		fs.read(fd,buf,0,buf.length,0,
			function (err,bytes){
				if(err){
					return console.error(err);
				}
				console.log(bytes + "字节被读取");
				if(bytes > 0){
					console.log(buf.slice(0,bytes).toString());
				}
		});
		//关闭文件
		fs.close(fd,function (err){
			if(err)return console.error(err);
			console.log("关闭成功");
		});

	})