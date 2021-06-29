// String

// 배열처럼 접근이 가능하다.
console.log("1)");
var str1 = "Hello World";
for(var i = 0; i < str1.length; i++){
    console.log(str1[i]);
}

// 문자열 합치기
console.log("2)");
var str2 = "Hello";
var str3 = "World";
var str4 = str2 + " " + str3;
console.log(str4);

// 캐스팅
console.log("3)");
var str5 = 5 + "5";
console.log(str5);

var str6 = "boolean: " + true;
console.log(str6);

// 메서드
console.log("4)");
var str7 = "strgin1 string2 string3";
console.log(str7.length);

console.log("5)");
var index = str7.indexOf("string2");
console.log(index);

console.log("6)");
var index = str7.indexOf("string4");
console.log(index); // 찾지 못하면 -1

console.log("7)");
var str8 = str7.substr(10) // 10th ~ end
console.log(str8);

console.log("8)");
var str9 = str7.substr(10, 3 /*count*/);
console.log(str9);

console.log("9)");
var str10 = str7.substring(10, 13 /*last index - 1*/);
console.log(str10);

console.log("10)");
var a = str7.split(" ");
console.log(a);

console.log("11)");
var str11 = 'abcdef';
var a = str11.split(":");
console.log(a);