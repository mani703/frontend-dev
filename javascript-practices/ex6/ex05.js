/*
5. Arrow Function
*/

const power = function(x){
    return x * x;
}

console.log("1)");
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number){
    process.stdout.write(`${number}: ${power(number)}\t`);
});

// ex1
console.log("");
console.log("2)");
const power2 = x => x * x;
numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number){
    // let result = (function(x){
    //     return x*x;
    // })(number);

    // let result = (x => {
    //     return x*x;
    // })(number);

    // let result = (x => x*x)(number);
    // process.stdout.write(`${number}: ${result}\t`);

    // process.stdout.write(`${number}: ${(x => x*x)(number)}\t`);
    process.stdout.write(`${number}: ${power2(number)}\t`);
});

// ex2
console.log("");
console.log("3)");
numbers.forEach(number => process.stdout.write(`${number}: ${(power2(number))}\t`));

// ex3
console.log("");
console.log("4)");
[5, 3, 15, 1045 ,42, 92].forEach(e=> {
    if(e % 5 == 0){
        process.stdout.write(`${e}\t`);
    }
});

// ex4: this를 어휘적으로 바인딩(Lexical Binding)
console.log("");
console.log("5)");
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '길동', '희동이'],
    printFriends: function(){
        this.friends.forEach(friends => console.log(`${this.name}의 친구 ${friends}`));
    }
}
dooly.printFriends();