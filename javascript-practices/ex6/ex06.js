/*
6. Destructuring(구조분해)
*/

// ex1 - basic
console.log("1)");
const user = {
    firstName: "둘",
    lastName: "리",
    email: "dooly@gamil.com"
};

({firstName, lastName} = user);
console.log(firstName, lastName);

// ex2 - Default Value
console.log("2)");
const goods = {
    name: "TV",
    price: 10000,
    stockCount: 30
}

let {name, price, soldCount = 0, stockCount = 0} = goods;
console.log(name, price, soldCount, stockCount);


// ex3 - Diffirent Variable Names
console.log("3)");
const person = {
    name: "유명만",
    country: "korea"
}

let {name: fullName, country: place} = person;
console.log(fullName, place);