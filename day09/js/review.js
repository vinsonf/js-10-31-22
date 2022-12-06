// function function1(callback) {
//     // do something
//     const list = [];
//     list.push(Math.random());
//     list.push(Math.random());
//     list.push(Math.random());
//     list.push(Math.random());
//     callback(list);
// }

// function function2(list) {
//     // do something
//     list.forEach(item => {
//         const li = document.createElement('li');
//         li.innerText = item;
//         document.body.append(li);
//     });
// }


// function function3(list) {
//     // do something
//     list.forEach(item => {
//         const h2 = document.createElement('h2');
//         h2.innerText = item;
//         document.body.append(h2);
//     });
// }

// function1(function3);





function myFetcher(url) {
    return fetch(url)
        .then(response => response.json())
}

myFetcher('https://swapi.dev/api/');
myFetcher('https://swapi.dev/api/people/')
    .then(listPersonsName);
myFetcher('https://pokeapi.co/api/v2/pokemon/')
    .then(listPersonsName);
myFetcher('https://pokeapi.co/api/v2/pokemon/pikachu/');

function listPersonsName(people) {
    // people.results.forEach(person => {
    //     const li = document.createElement('li');
    //     li.innerText = person.name;
    //     document.body.append(li);
    // });

    // const length = people.results.length;
    // for (let i = 0; i < length; i++){
    //     const li = document.createElement('li');
    //         li.innerText = people.results[i].name;
    //         document.body.append(li);
    // }

    // for(let person of people.results) {
    //     const li = document.createElement('li');
    //     li.innerText = person.name;
    //     document.body.append(li);
    // }
}

// for(let i = 1; i < 1000; i++ ){
//     const li = document.createElement('li');
//     if (i % 3 === 0 && i % 5 === 0) {
//         li.innerText = 'fizzbuzz';
//     } else if (i % 3 === 0) {
//         li.innerText = 'fizz';
//     } else if (i % 5 === 0) {
//         li.innerText = 'buzz';
//     } else {
//         li.innerText = i;
//     }
//     document.body.append(li);
// }
   
// const object = {
//     name: 'John',
//     age: 30,
//     isPresent: true,
//     greet: function() {
//         console.log('hi', 'my name is', this.name);

//     }
// }

// object.greet();
// object.name = 'Vinson';
// object.greet();


// const object2 = {
//     name: 'John',
//     age: 30,
//     isPresent: true,
//     greet: function() {
//         console.log('hello', 'my name is', this.name);
//     }
// }

// object2.greet();
// object2.name = 'Vinson';
// object2.greet();


class Person {
    constructor(name) {
        this.name = name;
        console.log(name);
    }
    greet() {
        console.log('hello', 'my name is', this.name);
    }
}

const person1 = new Person('John');
const person2 = new Person('Vinson');

person1.greet();
person2.greet();

console.log(person1, person2);

if (person1 instanceof Person) {
    console.log('person1 is a person');
}

function personFactory(name) {
    return {
        name: name,
        greet: function() {
            console.log('hello', 'my name is', this.name);
        }
    }
}

const person3 = personFactory('John');
person3.greet()

if (person3 instanceof Person) {
    console.log('person3 is a person');
}
console.log(person3);