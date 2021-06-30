console.log("======================= global =======================");
console.log("1)");
global.name = "둘리"; 
console.log(name, global.name);
var email = "dooly@gmail.com";
console.log(email, global.email);

console.log("================== function 객체 메서드 apply ==================");
console.log("2)");
var f1 = function(){
    console.log(this);
}
f1();

// this 바꾸기
var o = {
    name: "마이콜",
}
f1.apply(o);

console.log("================== function 객체 메서드 call ==================");
console.log("3)");
var f2 = function(s){
    console.log(s + " " + this.name);
}
f2.call(o, "hi");