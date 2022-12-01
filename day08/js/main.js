console.log({
    test: 1
})
console.dir(document.body);
console.dir(document.querySelector('h1'));

// dom (document object model)
const basicDomObject = {
    innerText: "Hello World",
    innerHTML: "<h1>Hello World</h1>",
    style: {
        color: "red",
    },
    classList: {
        add: function(className) {
            // add class
        }
    },
    appendChild: function(child) {
        // add child
        this.children.push(child);
    },
    children: [
        {
            innerText: "Hello World",
            innerHTML: "<h1>Hello World</h1>",
            style: {
                color: "red",
            },
            classList: {
                add: function(className) {
                    // add class
                }
            },
            appendChild: function(child) {
                // add child
            },
        }]


};

// const span = document.createElement('vinson');
// span.innerText = "Hello World";
// span.style.color = "red";


// const span2 = document.createElement('span');
// span2.innerText = "Hello World";
// span2.style.color = "green";

// const h1 = document.querySelector('h1');
// h1.appendChild(span);
// h1.appendChild(span2);

// console.dir(h1);

const nav = document.createElement('nav');
const logoElement = document.createElement('div');
const ul = document.createElement('ul');
const hero = document.createElement('div');
const h1 = document.createElement('h1');
const li1 = document.createElement('li');
const li2 = document.createElement('li');


logoElement.innerText = "Logo";
h1.innerText = "Hero";
li1.innerText = "Home";
li2.innerText = "About";

logoElement.classList.add('logo');
hero.classList.add('hero');

document.body.append(nav);
document.body.append(hero);
nav.append(logoElement);
nav.append(ul);
hero.append(h1);
// ul.append(li1);
// ul.append(li2);


const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "black",
    "grey",
    "brown",
    "cyan",
];



colors.forEach(function(color, index){
    const li = document.createElement('li');
    li.innerText = 'change color to ' + color;
    li.style.color = color;
    ul.append(li);
    li.addEventListener('click', function() {
        hero.style.color = color;
        hero.style.color = colors[index + 1];
        if (things[index + 1] === undefined) {
            hero.style.color = colors[0];
        }
    })
})

// organization structure
// 1. array
// 2. object


function addColorElement(color, index){
    const li = document.createElement('li');
    li.innerText = 'change color to ' + color;
    li.style.color = color;
    ul.append(li);
    li.addEventListener('click', function() {
        hero.style.color = color;
        hero.style.color = colors[index + 1];
        if (things[index + 1] === undefined) {
            hero.style.color = colors[0];
        }
    })
}

addColorElement('red');
addColorElement('green');


class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    greet(){
        const h2 = document.createElement('h2');

        h2.innerText = `
        Hello, my name is ${this.name}
        I am ${this.age} years old
        My email is ${this.email}
        `;
        document.body.append(h2);
    }
}

class Manager extends User {
    canOpenDoor = true;
}

class EMPLOYEE extends User {
    canOpenDoor = false;
    canOpenRegister = true;
}

const user1 = new Manager('Vinson', 30, 'v@v.com');
const user2 = new EMPLOYEE('Joe', 31, 'j@j.com');

user1.greet();
user2.greet();

const user3 = {
    name: 'Vinson',
    age: 30,
    email: 'v@v.com',   
}
console.log(user3);
console.log(user1);
console.log(user2);
console.dir(document.createElement('h3'));

