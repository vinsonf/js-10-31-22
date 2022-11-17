// boolean (true/false)
// string ("", '', ``)
// number (1, .5, 1.5, 1e5, x, ) bigInt (1n, 1.5n)

myName = "John";
myName = 'John';
myName = `John`; // super power

// Organize your code
// array
// object

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, ''];
const pet = {
    name: "Milo",
    age: 2,
    color: "black",
    isGoodBoy: true,
};

let selectedCharacter = null;

let falsey = [null, undefined, false, 0, '', NaN];
let truthy = [1.2, -2, -3.1, 4, 5, true, 'hello', {}, [], function() {}];
// examples of how to get NaN
// 1. 0 / 0
// 2. 1 * 'a'

// * bigInt is something new in JS
// * bigInt is a new data type that can represent integers with arbitrary precision
// * bigInt is created by appending n to the end of an integer or by calling the BigInt function 
// * is rare to use bigInt

console.log('2782u72882772' === '2782u72882772') // true

const myUniqueValue = Symbol('myUniqueValue');
const myUniqueValueClone = Symbol('myUniqueValue');

console.log(myUniqueValue === myUniqueValueClone); // false

const myUniqueObject = {
    [myUniqueValue]: 'secret',
    [myUniqueValueClone]: 'secret2',
}

console.log(myUniqueObject[myUniqueValueClone]); // secret

// * 

// theory of 20/80
// 20% of the code you will USE 80% of the time

// pop up methods
// tell the user something
// alert('hello');
// let myAlert = alert('the answer is 42'); // UNCOMMENT THIS LINE TO SEE THE RESULT
// ask the user something (yes/no)
// confirm('are you sure?');
// let myYesNo = confirm('are you sure?'); // UNCOMMENT THIS LINE TO SEE THE RESULT
// ask the user something (input)
// prompt('what is your name?');
// let myTextAnswer = prompt('what is your name?'); // UNCOMMENT THIS LINE TO SEE THE RESULT

// console.log(myAlert, myYesNo, myTextAnswer); // UNCOMMENT THIS LINE TO SEE THE RESULT


function askQuestion(){
    let color = prompt('what color?');
    // console.log(color);
    document.querySelector('body').style.backgroundColor = color;
}

// collect the user input
// prompts/confirm/alert
// mouse events
// keyboard events
// form events
// window events(load, resize, scroll, unload)
// document events(DOMContentLoaded)

window.addEventListener('mousemove', function(event){
    // console.log(event);
    document.querySelector('body').style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, 100)`;
})

window.onbeforeunload = confirmExit;
function confirmExit() {
    return "You have attempted to leave this page. Are you sure?";
}

const colors = ['red', 'blue', 'green', 'yellow']
const index = Math.ceil(Math.random() * colors.length);
console.log(colors[index]);

// ====================================================
const testNum = (a) => {
    let result;
    if (a > 0) {
        result = 'postive';
    } else {
        result = 'not postive';
    }
    return result;
}

console.log(testNum(-5));