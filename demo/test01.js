//打开http服务
//引nodejs对http封装的模块
var http = require('http');

var serv = http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type':"text/html;charset=utf-8"});
	//http状态200：ok
	//内容类型:text/html
	res.write("<p>这是哪里？？</p>");
	res.end("<h1>第一个nodejs</h1>");

});

serv.listen(3001);