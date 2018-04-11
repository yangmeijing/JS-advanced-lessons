//立即执行表达式 常见形式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);

//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function() {
    console.log("111");
})();//没有分号的话会报错
(function () {
    console.log("222");
})()


// 其他形式的IIFE 与运算符结合的写法
var i = function(){
    return 10;
}(); //i为10


true && function(a,b){
    return a>b?a:b;
}(5,9);//9


!function(x,y){
    return x==y?true:false; // === 返回什么
}("5",5);//true

//如何避免文件之间的全局污染，使用IIFE函数立即执行表达式 查看JS文件demo07_2中的代码
//(function () {  // IIFE开始
var x = 10;
document.onclick = function () {
    // console.log("x = ",x);
    alert("x = "+x);
};
//})();           // IIFE结束

//如何避免全局污染，使用IIFE函数立即执行表达式 JS文件2中的代码
(function () {  // IIFE开始
    var x = 20;
 })();           // IIFE结束



 //局部变量的案例
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;//如果return i;的话输出几？
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//tmp[0]()...tmp[9]()都为几，,3？9？10？
//9

//通过IIFE解决变量共享问题
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}

// Wed Apr 11 2018 18:47:21 GMT+0800 (中国标准时间) 0
// VM36:4 Wed Apr 11 2018 18:47:22 GMT+0800 (中国标准时间) 1
// VM36:4 Wed Apr 11 2018 18:47:23 GMT+0800 (中国标准时间) 2
// VM36:4 Wed Apr 11 2018 18:47:24 GMT+0800 (中国标准时间) 3
// VM36:4 Wed Apr 11 2018 18:47:25 GMT+0800 (中国标准时间) 4