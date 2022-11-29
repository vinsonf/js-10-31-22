function createNewElement(type, text) {
    const newElement = document.createElement(type);
    newElement.innerHTML = text;
    newElement.className = 'newElement';
    document.body.appendChild(newElement);
}

createNewElement('li', 'welcome to js 1'); // call the function (execute the code)

// this is a method
const elementMaker = {
    createNewElement: createNewElement,
}

elementMaker.createNewElement('li', 'welcome to js 2'); // call the method (execute the code)