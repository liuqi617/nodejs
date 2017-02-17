//对象
/*module.exports = {
	name: "xiaokeai",
	sayName: function(){
		console.log("my name is",this.name);
	}
}*/

//使用自己的包进行测试
var myutil = require("mill-n-utils");
module.exports = {
	name:"love you,my mother",
	sayName: function(){
		//myutil.mfs.write("happy.txt","这是我引用自己的包写入的东西");
		//console.log("my name is",this.name);
		console.log(myutil.doName.tf(this.name));
		console.log(myutil.doName.xhx(this.name));
	}
}