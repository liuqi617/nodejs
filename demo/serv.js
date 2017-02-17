var http = require('http');
http.createServer(function (require,response){
	//发送头部
	//http状态值：200  ok
	//内容类型：text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	//发送相应数据"hello world！"
	response.end("hello world!");
}).listen(8888);

//终端打印如下信息：
console.log('Server running at http://127.0.0.1:8888/');