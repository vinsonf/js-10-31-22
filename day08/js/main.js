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
document.body.append(nav);
const logoElement = document.createElement('div');


