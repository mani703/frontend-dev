// Array 확장: List 메서드 추가(prototype 확장)

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // for(var i = 0; i < value.length; i++){
        //     this.splice(index++, 0, value[i]);
        // }
        var _this = this;
        value.forEach(function(e){
            _this.splice(index++, 0, e);
        })
    } else {
        this.splice(index, 0, value);
    }
}

Array.prototype.remove = function(index){
    this.splice(index, 1);
}

// 리스트로 사용하기
console.log("1)");
var a = [1, 2, 4];

console.log(a);
a.insert(2, 3);
console.log(a);

console.log("2)");
var a = [1, 2, 3 ,4];

console.log(a);
a.remove(3);
console.log(a);

console.log("3)");
a.insert(2, ['a', 'b', 'c']); 
console.log(a);

var f = function(param){
    console.log(this + " : " + param);
}
// f();

o = { name: "me!" };
f.call(o, "mani703@naver.com");
f.apply(o);