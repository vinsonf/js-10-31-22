console.log("storage.js loaded");

// localStorage.setItem("username", "John");
// sessionStorage.setItem("username", "Joe");

// const usernameLocal = localStorage.getItem("username");
const usernameSession = sessionStorage.getItem("username");

// localStorage.removeItem("username");
// sessionStorage.removeItem("username");

// localStorage.clear();
// sessionStorage.clear();

// console.log(usernameLocal);
console.log(usernameSession);


const form = document.createElement("form");

const input = document.createElement("input");
input.setAttribute("type", "text");

const color = document.createElement("input");
color.setAttribute("type", "color");

const button = document.createElement("button");
button.textContent = "Submit";

form.append(input, button, color);
document.body.append(form);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = input.value;
    const colorValue = color.value;
    sessionStorage.setItem("username", username);
    console.log(username);
    localStorage.setItem("color", colorValue);
    document.body.style.backgroundColor = colorValue;
});

if (usernameSession) {
    form.remove();
    const h1 = document.createElement("h1");
    h1.textContent = `Welcome back, ${usernameSession}`;
    document.body.append(h1);
    const logout = document.createElement("button");
    logout.textContent = "Logout";
    document.body.append(logout);
    logout.addEventListener("click", () => {
        sessionStorage.removeItem("username");
        location.reload();
    });
}
console.log()
if (localStorage.getItem("color")) {
    document.body.style.backgroundColor = localStorage.getItem("color");
}
