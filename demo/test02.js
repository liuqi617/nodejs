/*
var m = require("./module");
//引入文件
m.setName("liuqi");

var m2 = require("./module");
m2.setName("songjiwei");

//这是一个单例模块  songjiwei
m.sayName();//调方法
console.log(m===m2);  //true    */

/*var m = require("./module");
var p1 = new m.person("liuqi");
var p2 = new m.person("songjiwei");
//此时就是不同的对象了  就不会被覆盖了
p1.sayName(); //liuqi
p2.sayName();  //songjiwei*/

var m = require("../model");
m.sayName();