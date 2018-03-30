函数对象

/*一、JS中的函数也是对象
1、JS中每个函数都是作为对象来维护和运行的，即函数对象。（既有属性也有方法）
2、可以将函数赋值给一个变量，或将函数作为参数进行传递。
3、函数对象对应的类型是Function，类似于数组对象对应的是Data。
4、如果变量时函数，typeof此变量，返回function，而不是object。
5、内置的函数对象（Array，Function，Data等），内置的非函数对象（Math，JSON）
*/

console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Error);//function
console.log(typeof Math);//object
console.log(typeof JSON);//object

function foo(){}

console.log(foo);//f foo(){}
//foo 打印整个函数；foo（）打印返回值

console.log(foo instanceof Object);//true
console.log(foo instanceof Function);//true
console.log(foo===window.foo);//true


typeof new Function();//function
typeof new new Function();//object
typeof new new new Function();//报错
typeof new Array();//Object
typeof new Data();//Object

//二、函数对象的属性及方法

//属性：
 //length：形参个数
 //argument:盛放实参
 //arguments.length:实参个数

 var foo = function (a,b){
    console.log(arguments);//类似数组的一个对象
    console.log(arguments === test.arguments);//false

    console.log(arguments.length);
    var args = Array.prototype.splice.call(arguments,0);//将实参转化为数组
    console.log(args);// (4) [1, 2, 3, 4]
};
foo(1,2,3,4);

//caller:追踪上层调用函数  函数名.caller==null

function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
console.log(test.caller);//null

test();//test is called from ,call from the top level

function testOuter() {
    test();
}
testOuter();//test is called from the function:
            //function testOuter() {
            //test();
            //}

//callee:递归调用，匿名函数  arguments.callee()

(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));

//prototype

//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承。



//方法：

//1.call(),apply()
//2.bind() 绑定

var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();//var fee = foo.bind(this); fee();
		foo();
    }
};
obj.test();
//A.23  45


//高阶函数

//1.函数作为参数被传递

//练习使用高阶函数实现下述公式，要求函数复用
//z = 2*(x+1)-3*y*y;
//c = 2*a*a-3*(b-1);
//k = 2*(i+1)-3(j-1);

function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);//1
foo(1,1,f3,f2);//2
foo(1,1,f1,f2);//4


 //2.函数作为返回值输出

 var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());// ƒ fun2() {return this.x;}
console.log("输出：",obj.fun3()());//12
console.log("输出：",obj.fun4());//34







