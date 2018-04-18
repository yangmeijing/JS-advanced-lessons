//对象的分类
//1.内置对象：由ECMAScript规范定义的对象或构造器对象。
//2.宿主对象：由JS解析器所嵌入的宿主环境定义的，如window,document
//3.自定义对象

//原生对象：Undefined,Null,Boolean,String,Number,Object,Function,Array,Data,RegExp,Error,Math,JSON,全局对象，arguments
//标准内置对象：Boolean,String,Number,Object,Function,Array,Data,RegExp,Error,Math,JOSN,全局对象
//构造器：Boolean,String,,Number,Object,Function,Array,Data,RegExp,Error
//对象：Math,JOSN,全局对象，argument
//标准类型：Undefined,Null,Boolean,String,Number

//typeof 构造器 =Function
//typeof 对象 =Object 

//对象的属性
//数据属性:字符串的键到值的映射，包括基本类型数据、对象、函数
//访问器属性:访问属性的方法，访问和设置时不加括号 
//内置属性：存在ECMAScript规范中，不能直接访问。


var o={
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);//1
o.x=2;//调用set属性
console.log(o.x,o._x);//2 2
//o.hasOwnProperty("x");//访问器属性
//o.hasOwnProperty("_x");//数据属性


//访问器属性 实例二 只读
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;//没有属性可以调用
console.log(o.x,o._x);//1 1

//创建对象的方法
//1.通过字面量的方式创建
var obj={
    num:10,
    str:'Hi',
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__ === Object.prototype);//true

//2.通过Object工厂方法创建JS对象，注：JS对象是通过原型链的方式实现的
var newObj=Object.create(obj);
newObj.age=23;
//newObj的原型是obj

//3.构造函数

var P1=new Person(20,'Jame');

//属性的相关操作

var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);