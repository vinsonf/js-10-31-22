const form = document.querySelector('form');
console.log(form.querySelector('input'));

const form1 = document.forms[0];
console.log(form1);
console.log(form1[0])

const form2 = document.forms['login'];
console.log(form2);

const loginForm = document.forms.login;
console.log(loginForm.username);

loginForm.addEventListener('submit', function(event) {
    console.log('submitted');
    event.preventDefault();
    validateUsername();
    validatePassword();
    fetch('https://b034-2600-1700-6a80-b010-bd50-93e5-a5fe-ac6d.ngrok.io', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: loginForm.username.value,
        })
    })
        .then(response => response.json())
        .then(data => console.log(data));
});

loginForm.username.addEventListener('input', function(event) {
    validateUsername();
});
loginForm.password.addEventListener('input', function(event) {
    validatePassword();
});

function validateUsername() {
    if (loginForm.username.value.length < 6) {
        document.querySelector('.welcome').textContent = 'Please enter a username with at least 6 characters';
        document.querySelector('.welcome').style.color = 'red';
        loginForm.username.setCustomValidity('Please enter a username with at least 6 characters');
        loginForm.username.style.outline = '3px solid red';
    } else {
        document.querySelector('.welcome').textContent = `Welcome, ${loginForm.username.value}`;
        document.querySelector('.welcome').style.color = 'green';
        loginForm.username.setCustomValidity('');
        loginForm.username.style.outline = '1px solid blue';
    }
}
function validatePassword() {
    if (loginForm.password.value.length < 6 || loginForm.password.value.length > 20) {
        document.querySelector('.welcome').textContent = 'Please enter a password with at least 6 characters';
        document.querySelector('.welcome').style.color = 'red';
        loginForm.password.setCustomValidity('Please enter a password with at least 6 characters');
        loginForm.password.style.outline = '3px solid red';
    } else {
        document.querySelector('.welcome').textContent = `Welcome, ${loginForm.username.value}`;
        document.querySelector('.welcome').style.color = 'green';
        loginForm.password.setCustomValidity('');
        loginForm.password.style.outline = '1px solid blue';
    }
}

