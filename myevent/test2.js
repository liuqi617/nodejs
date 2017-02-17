var myutil = require("mill-n-utils");//引包

var obj = {
	name: "my name is baby",
	setName: function(name){
		this.name = "my name is"+name;
		this.emit("set-over",name);  //可以接收一个参数
	},
	sayName: function(){
		myutil.mfs.write("baby.txt","我是baby");
		console.log(myutil.doName.tf(this.name));
	}
}
myutil.eventBind(obj);
module.exports = obj;//事件发布