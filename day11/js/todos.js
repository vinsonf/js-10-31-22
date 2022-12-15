
import {reformatPhoneNumber} from './phoneNumbers.js';

// console.log(reformatPhoneNumber('5555551231'));


const todosPromise = fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json());

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users/').then(res => res.json());


Promise.all([usersPromise, todosPromise]).then(data => {
    const [users, todos] = data;
  

    const userTodos = users.map(user => {
        let myTodos = todos.filter(todo => todo.userId === user.id);
       
        
        myTodos = myTodos.map(todo => {
            return {
                ...todo,
                user: user
            }
        });

        user.myTodos = myTodos;
        return user;
    });
    console.log(userTodos, 'userTodos');
    
    const randomUser = getRandomItemFromArray(userTodos)
    const randomTodo = getRandomItemFromArray(randomUser.myTodos);
    console.log(randomUser, randomTodo);
});

function getRandomItemFromArray(arr){
    const randomDecimal = Math.random(); // 0 - 1 (0.5277743)
    const randomNumber = randomDecimal * arr.length; // 0 - arr.length
    // 5.277743
    const randomIndex = Math.floor(randomNumber); // 5 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return arr[ Math.floor(Math.random() * arr.length) ];
}

