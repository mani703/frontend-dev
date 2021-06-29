// URL 문자열 다루기

var url = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape : URL를 전부 encoding, (X), deprecated
console.log("1)");
var url2 = escape(url);
console.log(url2);

// 2. encodeURI : parameter 부분만 encoding, (o)
console.log("2)");
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent : 값만 엔코딩 해야 하는 경우 (o)
console.log("3)");
var url4 = encodeURIComponent(url); // 안좋은 사용 예
console.log(url4);

// 만들어야 할 URL
// http://mysite.com/user?no=10&name=유명만&email=mani703@naver.com
var toQueryString = function(o){
    var qs = [];
    for(prop in o){
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    console.log(qs);
    return qs.join("&");
}

var url = "http://mysite.com/user";
var param = {
    no: 10,
    name: '유명만',
    email: 'mani703@naver.com'
}

console.log("4)");
var url5 = url + "?" + toQueryString(param);
console.log(url5);