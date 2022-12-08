console.log('forms-http.js loaded');

const loginForm = document.createElement('form');
const registerForm = document.createElement('form');

const loginUsernameInput = document.createElement('input');

const loginPasswordInput = document.createElement('input');
const loginSubmitButton = document.createElement('button');


const registerUsernameInput = document.createElement('input');

const registerPasswordInput = document.createElement('input');
const registerSubmitButton = document.createElement('button');


loginForm.appendChild(loginUsernameInput);
loginForm.appendChild(loginPasswordInput);
loginForm.appendChild(loginSubmitButton);
document.body.appendChild(loginForm);

registerForm.appendChild(registerUsernameInput);
registerForm.appendChild(registerPasswordInput);
registerForm.appendChild(registerSubmitButton);



document.body.appendChild(registerForm);


loginSubmitButton.innerText = 'Login';
registerSubmitButton.innerText = 'Register';

loginUsernameInput.placeholder = 'Username';
loginPasswordInput.placeholder = 'Password';
registerUsernameInput.placeholder = 'Username';
registerPasswordInput.placeholder = 'Password';

loginForm.style.display = 'flex';
loginForm.style.flexDirection = 'column';
loginForm.style.width = '200px';
loginForm.style.margin = '20px auto';
loginForm.style.padding = '20px';
loginForm.style.border = '1px solid black';

registerForm.classList.add('flex-column');
registerForm.classList.add('width-200');
registerForm.classList.add('margin-auto');
registerForm.classList.add('padding-20');
registerForm.classList.add('border-1-black');

console.log(document.forms[1]);
document.forms[0].addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('http://pokeapi.co/api/v2/pokemon/' + loginUsernameInput.value).then((response) => {
        return response.json();
    }).then(data => {
        displayName(data);
    });
});
document.forms[1].addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('http://swapi.dev/api/people/' + registerUsernameInput.value + '/').then((response) => {
        return response.json();
    }).then(data => {
        displayName(data);
    })
});

function displayName(data) {
   const h1 = document.createElement('h1');
    h1.innerText = data.name;
    document.body.appendChild(h1);
}