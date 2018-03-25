//&&与||

//基本理解与应用
//&&：两真为真   ||：两假为假

//深层次理解
/*1.将左操作数转化为布尔类型
  2.对于&&，左为真，直接返回原始右操作数，左为假，直接返回左操作数原型
        ||，左为真，直接返回原始左操作数，为假，则返回原始左操作数*/
console.log(2&&4);//4
console.log(0&&4);//0
console.log({x:2}&&{name:"Jack"});//{name:"Jack"}
console.log(null&&"hello");//null
console.log({}&&"world");//world

console.log(2||4);//2
console.log(0||4);//4
console.log({x:2}||{name:"Jack"});//{x:2}
console.log(null||"hello");//hello
console.log({}||"world");//{}

console.log((new Boolean(false))&&234);//234
console.log((new Boolean(false))||234);//Boolean(false)

//实际应用：将if else 简便写法 与 默认参数

var score =76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else(score<60){
    console.log("不及格");
}

console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");


var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));//注意

//改良
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));