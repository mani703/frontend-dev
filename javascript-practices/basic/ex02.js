/*
변수와 데이터 타입

[기본타입(primitive type)]
1. number
2. boolean
3. string
4. undefined

[객체1] - object type
1. new 생성자함수() 사용해서 생성, 
    Number()    -> Object type 객체 생성
    Boolean()   -> Object type 객체 생성
    String()    -> Object type 객체 생성
    Object()    -> Object type 객체 생성
    Array()     -> Object type 객체 생성
2. null
3. [](배열 리터럴) 
4. {}(객체 리터럴 - JSON)

[객체2] - function type
1. new 생성자함수() 사용해서 생성,
    Function() -> function type 객체가 생성
2. function(....) { ..... } (함수 리터럴)

*/

/*
* 자바 스크립트의 객체를 구분하는 또 다른 방법 *
1. 내장(Built-In, Native) 객체
   자바스크립트 엔진 안에 미리 내장되어 있는 객체
   Number, Boolean, Date, RegExp ... 생성자 함수 객체
   parseInt, setTimeout, setInterval 와 같은 일반 함수 객체
   window 객체(브라우저에서만....전역객체)
2. 호스트 객체
   자바스크립트 엔진이 임베디드된 호스트의 객체(자바스크립트 접근 가능)
   브라우저만 해당(document, location, XmlHttpRequest, ....)
3. 사용자 객체
   자바스크립트 코드가 엔진에서 실행되면서 생성되는 객체들....
*/

console.log("=============== 원시 타입 ===============")
var u= undefined; // var u; 와 동일 자바스크립트 선언과 정의의 구분이 없다.
var i = 10;
var b = true;
var s = "Hello Wolrd";

console.log("1)");
console.log("u :" + typeof(u));

console.log("2)");
console.log("i :" + typeof(i));

console.log("3)");
console.log("b :" + typeof(b));

console.log("4)");
console.log("s :" + typeof(s));

console.log("============= [객체1]: object type =============")
var i2 = new Number(10);
var b2 = new Boolean(true);
var s2 = new String("Hello World");
var o = new Object(true);
var a = new Array();

var n = null;
var a2 = [];
var o2 = {};

console.log("5)");
console.log("i2 :" + typeof(i2));

console.log("6)");
console.log("b2 :" + typeof(b2));

console.log("7)");
console.log("s2 :" + typeof(s2));

console.log("8)");
console.log("o :" + typeof(o));

console.log("9)");
console.log("a :" + typeof(a));

console.log("10)");
console.log("n :" + typeof(n));

console.log("11)");
console.log("a2 :" + typeof(a2));

console.log("12)");
console.log("o2 :" + typeof(o2));

console.log("============= [객체2]: function type =============")
var f = new Function("a", "b", "return a + b;");
var f2 = function(a, b) { return a + b; };

console.log("13)");
console.log("f :" + typeof(f));

console.log("14)");
console.log("f2 :" + typeof(f2));

console.log("========== 원시타입과 원시타입 Wrapper 객체는 구분없이 사용가능. ==========")
console.log("15)");
console.log(i + i2);

console.log("16)");
console.log(s + s2);

// 원시 타입에 메서드 호출될 때,
// 임시 Wrapper객체가 만들어 져서 메서드 호출이 일어난 뒤 사라진다.
console.log("========== 원시타입도 메소드 호출이 가능하다. ==========")
console.log("17)");
console.log(b.valueOf());

console.log("18)");
console.log(b2.valueOf());