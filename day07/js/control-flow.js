let username = "james";
function ifUserIsNotLoggedIn() {
 console.log("You are not logged in");
}



function ifUserIsLoggedIn() {
 console.log("You are logged in");
}


if (username !== undefined) {
    ifUserIsLoggedIn();
}
else {
    ifUserIsNotLoggedIn();
}



if (username !== undefined) {
    ifUserIsLoggedIn();
}

if (username === undefined) {
    ifUserIsNotLoggedIn();
}


const user = {
    type: "admin" || "user" || "guest",
}

const permissions = [];

const p_delete = 'delete';
const p_create = 'create';
const p_update = 'update';
const p_read = 'read';
switch (user.type) {
    case "admin":
        console.log("You are a admin you get full access");
        // break;
        permissions.push(p_delete);
    case "user":
        console.log("You are a user you get access to create and delete");
        permissions.push(p_create);
        // break;
    case "guest":
        console.log("You are a guest you get access to read and vote");
        permissions.push(p_read);
        // break;
    default:
        console.log("You are not logged in");
}


if (permissions.includes("delete")) {
    console.log("You can delete");
}

console.log(permissions);