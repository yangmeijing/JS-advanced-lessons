//修改obj属性的特性
var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
//JS对象属性
var obj1 = {X:1};
var obj2 = Object.create(obj1);
obj2.y = 2;


var Obj3 = function(){this.z = 3};
var obj3 = new Obj3();

console.log(obj1,obj2,obj3);

/*属性的值value，对应属性的值
可写特性writable，确定属性是否可写性
可配置特性configurable，确定属性是否能删除和其他特性是否可配置
可枚举特性enumerable，属性是否可枚举*/


//设置属性的特性，defineProperty方法设置enumerable（可枚举性
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
//输出 y 2

//设置属性特性实例（writable与configurable）
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike
//将writable属性改为true会如何 第二个输出Lucy
//将configurable属性改为true会如何 第三个输出undefined
//一旦这两个属性改为false，不能删除也不能修改了！

//1.直接添加的属性，其所有特性默认都是true
var obj = {
    x:1,
    y:2
};
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}//输出 x 1   y 2   z 3

//2.通过defineProperty方法添加（属性特性默认为false
var obj = {
    x:1,
    y:2
};
obj.z = 3;
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
console.log(obj.w);// 遍历不到w


/*JS对象访问器属性的特征*/
/*可配置特性configurable，确定属性是否能删除和其他特性是否可配置
可枚举特性enumerable，属性是否可枚举
读取属性特性get，在读取属性时调用的函数，默认是undefined
写入属性特性Set，在写入属性时调用的函数，默认是undefined*/

//添加访问器
var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name);//"Lucy"
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//"Lucy"

//改变访问器属性特性
var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);//Lucy_hihi
obj2.name="jack";
console.log(obj2.name);//jack_haha_hihi

/*属性特性描述符：用来查看对象属性的特性的对象
包含4个属性，对应4个特性，通过getOwnPropertyDescriptor方法获得*/
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");
//Object {value: 5, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(obj,"y");
//Object {value: 6, writable: false, enumerable: true, configurable: false}
Object.getOwnPropertyDescriptor(obj,"z");
//Object {value: 7, writable: false, enumerable: false, configurable: false}

//给多个属性设置特性的方法（Object.defineProperties）
var obj = {_x:1};
Object.defineProperties(obj,{
    y:{value:2,writable:true,configurable:true,enumerable:true},
    z:{value:2,writable:true,configurable:true,enumerable:true},
    x:{
        get:function(){return this._x;},
        set:function (val) {
            this._x = val;
        }
    }
});

//来看一个实例
//批量添加属性并设置属性特性 book实例
var book={};
//调用Object.defineProperties(对象名，要添加的属性)方法，为对象一次定义多个属性(1.数据属性)(2.访问器属性)
Object.defineProperties(book,{
//添加的两个数据属性(_year,edition)
    _year:{//(_year)前面的下划线表示只能通过对象方法访问的属性
        value:2004,
        writable:true //如果没写这一行会怎样？答：writable: false, enumerable: false, configurable: false
    },
    edition:{
        value:1,
        writable:true
    },
//添加了访问器属性(year)
    year:{
//调用get方法读取属性
        get:function(){
            return this._year;
        },
//调用set方法写入属性
        set:function(newValue){
            if (newValue>2004) {
                this._year=newValue;
                this.edition+=newValue-2004;
            }
        }
    }
});
//测试
book.year=2006;	

//属性继承
var o1 = {};
Object.defineProperty(o1,"x",{
    value:12,
    //writable:true
});//思考configurable和writable是true还是false
o1.x = 34;
console.log(o1.x);
var o2 = Object.create(o1);
o2.x = 56;//是在o2上添加了新属性x，还是修改了o1的x属性，还是前两者都不是？
console.log(o2.x);
/*若此时o1的x的writable不确定属性，则writable，configurable，enumerable都为false，且两个console都输出12；若此时o1的x的writable为true，则如下
o1的x{value: 34, writable: true, enumerable: false, configurable: false}
o2的x{value: 56, writable: true, enumerable: true, configurable: true}
*/

//手动修改可写性
Object.defineProperty(obj,"w",{writable:true});
console.log(obj.w);

//Object与属性和属性特性相关的方法
Object.keys();//返回所有自有（非继承）可枚举属性的键
Object.getOwnPropertyNames();//返回所有自身可枚举和不可枚举的值
Object.prototype.hasOwnProperty(...)//判断自身是否有该属性，包括不可枚举的属性
Object.prototype.propertyIsEnumerable()//判断自身是否有该属性并检测该属性是否可枚举
in//检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
for...in//遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
//使用方式类似以下
var o3 = {};
o3.y = "yyy";
Object.defineProperty(o3,"x",
    {configurable:true,enumerable:false,writable:true,value:"xxx"}
);
console.log(Object.keys(o3));


//JS 对象之扩展、密封及冻结（级别逐渐升高
Extensible Object.isExtensible( )、Object.preventExtensions( )//限制添加新属性

seal Object.isSealed( )、Object.seal( )//在extend的限制基础上，增加限制可配置属性特性

freeze Object.isFrozen( )、Object.freeze( )//在seal的限制基础上，增加限制可写属性特性
