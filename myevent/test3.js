var m = require("./test2.js");

m.on("set-over",function (a){
	console.log(a,"事件处理结束");
});

m.setName("小猫");
m.sayName();