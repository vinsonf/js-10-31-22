// global
const a = 1;
function foo() {
  // function scope
//   const a = 2;
//   console.log(a); // 2

    function bar() {
        // block scope
        const a = 3;
        console.log(a); // 3
    }
    bar();
}

foo();
// bar();


// parents share
// children are stingy with their variables

const user1 = {
    name: "John",
}

const user2 = {
}

console.log(user2.name);