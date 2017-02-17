var eventEmiter = require("events").EventEmitter;//事件源
var event = new eventEmiter();
//绑定事件  事件处理程序
event.on("myhoo",function(){
	console.log("我是事件处理程序，我会在2秒后被执行");
})
//事件触发  事件本身
setTimeout(function(){
	event.emit("myhoo");
},2000);
event.on("myhoo",function(){
	console.log("我是另一个程序！");
});

console.log("我会第一个被打印出来的");