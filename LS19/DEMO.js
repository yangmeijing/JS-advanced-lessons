var date1 = new Date(2017,9,18,12,34,1);//注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);

var date2 = new Date(17,9,18,12,34,1);//若years为2位的话自动加1900
console.log(date2);

var date3 = new Date("2017-08-09");//注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式
console.log(date3);

//var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);//逆运算是date4.getTime();

var date5 = new Date();//new Date(Date.now());
console.log(date5);

//补充：无效日期
var date6 = new Date(NaN);
console.log(date6);//Invalid Date

//有无new的区别
var d1 = new Date();//对象类型
var d2 = Date();//字符串
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string


//Date原型方法 getter和setter相关
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());


//正则对象的创建方式一 通过字面量直接创建
var reg1 = /[bcf]at/gi;

//正则对象的创建方式二 通过RegExp构造函数来实例化正则对象
var reg2 = new RegExp(/[bcf]at/,"gi");//常见形式
var reg3 = new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg2));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg3));//["fAt", "bat", "faT", "cat"]
