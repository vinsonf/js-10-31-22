var a = true; // assigned
a = 'false'; // reassigned
var a = false; // redeclared

let b = true;
b = 'false';
// let b = false; // error - already declared

const c = true;
// c = 'false'; // error - cannot be reassigned
// const c = false; // error - already declared

let score = 0; // number

const player1 = 'Mario'; // string
const player2 = 'Luigi';
const player3 = 'Peach';

let isPaused = false; // boolean

const players = [player1, player2]; // array

const game = {
    level: 1, // property - key: value - prefered for objects
    score: 0, // property is a variable that is a part of an object
    player: player1,
    isPaused: false,
    players: players,
};
// bracket notation
console.log(game['level']);
// dot notation can be used only on objects (key has to be a string)
console.log(game.player);

// bracket Notation can be used on objects and arrays
console.log(players[0]);

// Organize your code
const myArray = {
    0: player1,
    1: player2,
    2: player3,
}

console.log(myArray[0]);

// Operators
// + - * / % **
// > < >= <= == === != !==
// && || !


// strings
const keyword = 'world';
const myString = 'hello world' || "hello world" || `hello ${keyword + '!'}`;
const concatanation = 'hello' + ' ' + 'world';
const templateLiteral = `hello ${keyword + '!'}`;

keyword.slice(2,4); // 'rl'
keyword.toUpperCase(); // 'WORLD'
keyword.length; // 5 // getter

// let result = alert('hello world');
// console.log(result); // undefined
// result = confirm('hello world');
// console.log(result); // true or false
// result = prompt('hello world');
// console.log(result); // string or null

// Math Object
Math.floor(1.2); // 1
Math.ceil(1.2); // 2

// 

// Date Object
const date = new Date(); // create instance of Date object
const date2 = new Date(2020, 0, 1); // create instance of Date object

date > date2; // true

const myTime = Date.now(); // 1582020000000

const myTime2 = new Date();// 1582020000000
myTime2.setTime(myTime); // 2020-02-15T00:00:00.000Z

myTime2.getTime(); // some different number


players[0] // 'Mario'
players[1] // 'Luigi'
players[2] // 'Peach'

const randomDecimalBetween0and1 = Math.random(); // 0.123456789
const randomDecimalBetween0and3ButNever3 = Math.random() * 3; // 0.123456789
const randomIntegerBetween0and3ButNever3 = Math.floor(Math.random() * 3); // 0, 1, 2

// Control Flow (conditional statements)
if (randomDecimalBetween0and1 > 0.5) {
    // do something
    console.log('this only runs if the condition is true');
}
const usersAnswer = prompt('what is your answer?');
// if ( usersAnswer === 'yes') {
//     // do something
//     console.log('if the user reponds "yes"');
// } else if(usersAnswer === 'no') {
//     console.log('if the user reponds with "no"');
// } else {
//     console.log('if the user reponds with anything else');
// }

switch(usersAnswer) {
    case 'yes':
        console.log('if the user reponds "yes"');
        break;
    case 'no':
        console.log('if the user reponds with "no"');
        break;
    default:
        console.log('if the user reponds with anything else');
}