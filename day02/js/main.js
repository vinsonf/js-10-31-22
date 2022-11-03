no = false; // boolean
yes = true;

numbers = 1; // number
strings = "Hello World"; // string

// Array / List / Group / Order / Collection
[];
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
[10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
[20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
["Hello", "World", "How", "Are", "You", "?"];
[1, 2, 3, "Hello", "World", "How", "Are", "You", "?"];


// Object / Group / Collection / Dictionary / Non Order
{};
person = { name: "John", age: 30, city: "New York" };
['John', 30, 'New York'];

person.name // John
person.age // 30
person.city // New York

// variable = nicknames for data values
var city = "New York"; // var don't use anymore

const personName = "John";
let age = 30;

personName;

age = 27;
// personName = "Jane"; // error because const is constant

person.name = "Jane";
person.age = 27;
person.city = "London";

console.log(person.name);
console.log(person.age);
console.log(person.city);

const h1 = document.querySelector("h1");
h1.style.color = "red";

h1.classList.add('big')

const big = document.querySelector(".big");
big.innerHTML = "changed";

const h1InSection1 = document.querySelector("#section1 h1");

var name = "John";
console.log(name);

// let table = 'lobby table';
{
    let table = 'hotel room table';
}
function printTable() {
    console.log(table);
}

console.log(table);





