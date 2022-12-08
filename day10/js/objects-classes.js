const user = {
    username: 'batman',
    isVip: true,
    points: 1000,
    password: 'secret',
};

const user2 = {
    username: 'robin',
    isVip: false,
    points: 500,
};

console.log(user.username);
console.log(user2.username);

const users = [user, user2];
console.log(user['username']);
console.log(users[0]);

export const {username, ...rest} = user;
const [player1, player2] = users;

console.log(username, 'username');
console.log(player1, player2);

const {password, points, ...otherInfo} = user;
console.log(otherInfo, 'otherInfo');

function checkIfSameUser(user1, user2) {
    return user1.username === user2.username;
}

console.log(checkIfSameUser(...users));

class User {
    constructor(username){
        this._username = username;
        console.log('constructor');
    }
    greet() {
        console.log('hello my name is', this.username);
    }

    set username(username) {

        if (typeof username !== 'string'){
            console.log('username must be a string');
            return;
        }
        this._username = username;
    }
    get username() {
        return this._username + '!';
    }
}
class VipUser extends User{
    constructor(username){
        super(username);
        console.log('vip constructor');
        this.vip = true;
    }

    greet() {
        console.log('hello my name is', this.username, 'and I am a VIP');
    }

}

// console.log(new User('robin'), new VipUser('batman'));


const user3 = new User('robin');
const user4 = new VipUser('batman');
user3.greet();
user4.greet();

user4.username = 'Mr. Freeze';

user4.greet();

(username === 'batman') ? console.log('welcome') : console.log('go away');


function getFunction() {
    return function() {
        console.log('hello');
    }
}

getFunction()();