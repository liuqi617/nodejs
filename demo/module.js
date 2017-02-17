//第一个模块
/*var name;
// 公布出去
exports.setName = function(theName){
	name = theName;
}
exports.sayName = function(){
	console.log("my name is",name);
}*/

//第二个模块
function person(name){
	this.name = name;
	this.sayName = function(){
		console.log("我叫",name);
	}
}
exports.person = person;//公布出去