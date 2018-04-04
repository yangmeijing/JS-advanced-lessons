/*一、js作用域及其特点
1、什么是作用域：变量与函数的可访问的范围
2、变量与函数的可见性和生命周期
    覆盖式、链式：可以访问到外围变量
3、静态词法作用域，与在哪调用无关。
通过new Function创建的函数对象不一定遵循静态词法作用域。
*/

var a=10,b=20;
function fn(){
    var a=100,c=200;
    console,log(a,b,c,d);//100 20 200 baocuo
    function bar(){
        var a=500,d=600;
        console.log(a,b,c,d);//500 20 200 600
    }
    bar();
}
fn();
console.log(a,b,c,d);//10 20 baocuo baocuo
//静态词法作用域
var name ='jack';
function echo(){
    console.log(name);
}
function foo(){
    var name='bill';
    function fee(){
        var name='lucy';
        echo();
    }
    fee();
}
foo();//jack
//new Function实例化的对象，不一定遵循静态词法作用域
var scope='g';
function foo(){
    var scope ='1';
    return new Function("console.log(scope);")
}
foo()(); //g

//4.特点：大多数语言都有块级作用域。
//       JS（ES5）采用的是函数级作用域，没有块作用域。
// 无块级作用域会产生变量污染，变量共享等问题
//变量污染问题，尤其是异步执行情况下。如果是两个单独的文件的情况下，更容易造成变量污染。
var userId = 123;
document.onclick=function(){
    console.log("userId=",userId);
};
//一长串代码后，加入看不见上述代码了
var a=2,b=3;
if(a<b){
    var userId=234;
}

//利用立即执行函数IIFE解决上述问题
var userId=123;
document.onclick=function(){
    console.log("userId=",userId);
}
(function(){
    var a=2,b=3;
    if(a<b){
        var userId =234;
    }
}());

//三、作用域链与执行上下文
//1.代码执行时形成作用域链
//2.执行时，当前执行上下文，对应一个作用域链环境来管理和解析变量和函数（动态性）。
//3.变量查找按照由内到外的顺序（遵循词法作用域），直到完成查找，若未查到则报错。
//4.当函数执行结束，运行期上下文被销毁，此作用域链环境也随之被释放。



