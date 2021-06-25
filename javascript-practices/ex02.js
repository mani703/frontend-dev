/*
변수와 데이터 타입

[기본타입(primitive type)]
1. number
2. boolean
3. string
4. undefined
[객체]
*/

const { type } = require("os");

var u; // var u = undefined; 와 동일 자바스크립트 선언과 정의를 하는 키워드
var i = 10;
var b = true;
var s = "Hello Wolrd";

console.log("u :" + typeof(u));
console.log("i :" + typeof(i));
console.log("b :" + typeof(b));
console.log("s :" + typeof(s));

console.log(s.toUpperCase());