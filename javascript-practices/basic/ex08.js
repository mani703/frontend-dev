/*
자바스크립트 객체 3
*/

var o = {
    name: "둘리",
    age: 10,
    ifFemale: false
}
console.log("1)");
console.log(o);

var f = function(){
    console.log("Hello World");
}
console.log("2)");
f();

console.log("==================== 객체의 확장 ====================")
o.another = {
    name: "마이콜",
    age: 30
};
console.log("3)");
console.log(o);

f.another = {
    name: "마이콜",
    age: 30,
    info: function(){
        console.log(this.name + " : " + this.age);
    }
};
console.log("4)");
console.log(f.another);

console.log("5)");
f.another.info();

console.log("6)");
console.log(f);

console.log("==================== 기본 타입은 확장 X ====================")
console.log("7)");
var i2 = new Number(10);
i2.another = {};
console.log(i2);

console.log("8)");
var i1 = 10;
i1.another = {};
console.log(i1.another);