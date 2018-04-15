function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
//观察f1中的x变量
console.log(f3);//1
console.log(f3);//1

function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
//观察f1中的x变量
console.log(f3());//1
console.log(f3());//2

//闭包：闭包是由函数和与其相关的引用环境组合而成的实体
//        闭包是词法作用域中的函数和其相关变量的包裹体

function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
var inc2 = createInc(5);
console.log(inc(1));//9
console.log(inc2(1));//6

function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1
//a,b是不同的闭包

//闭包的常见形式（以函数对象形式返回）
var tmp = 100;//注意：词法作用域,形成的闭包是否包含此行的变量tmp？
function foo(x) {
    var tmp = 3;//注意：词法作用域，思考：若屏蔽此行，会输出什么？foo之外的tmp是否为闭包的一部分？
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);16
fee(10);17
fee(10);18

//闭包的常见形式（作为对象的方法返回）
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());
//1 1 0 1 2

//闭包的作用
//可通过闭包来访问隐藏在函数作用域内的局部变量
//使函数中的变量被保存在内存中不被释放（单例模式）

function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//1000
f();//1001

//实例

// 比如说我现在的需求是这样的，在网页中有时候会需要遮罩层，调用的时候我就创建一个，
// 但是你不可能每次调用创建，所以如果存在就用以前的，如果不存在就创建新的
function fn() {
    var a;
    return function() {
        return a || (a = document.body.appendChild(document.createElement('div')));
    }
};
var f = fn();
f();

//////////定时与节点 闭包应用案例 2秒后执行，由于闭包所以objID此时还存在
//虽然有时没有直接用，但闭包无时无刻不存在
function closureExample(objID, text, timedelay) {
    setTimeout(function() {
        //document.getElementById(objID).innerHTML = text;
        console.log(objID,text);
    }, timedelay);
}
closureExample("myDiv","Closure is Create", 2000);

//注意事项：
//由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包
//使用闭包时要注意不经意的变量共享问题，可以通过立即执行表达式来解决