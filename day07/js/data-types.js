// basic 
let string = "Hello World",
    number = 42,
    boolean = true;


console.log(string, number, boolean);
console.log(
    typeof string,
    typeof number,
    typeof boolean
    );
 // organizing data

let array = [1, 2, 3, 4, 5];
console.log(array);
let object = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
}
console.log(typeof array);

console.log(array[2]);
console.log(object[2]);

console.log(array.length);
const user = {
    name: "John",
    age: 42,
}

// empty values (falsey)
undefined
null
NaN

// each primitive has its own empty value
const emptyString = "";
const emptyNumber = 0;
const emptyBoolean = false;

// data types are dynamic

// some data types too consider later
// Symbol
// BigInt
