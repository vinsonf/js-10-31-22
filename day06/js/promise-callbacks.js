// callback
// 1. function that is passed in as an argument to another function

// function callMeOnMyPhone(time) {
//     console.log('calling you on my phone', time);
// }
// function deliverPizza(time) {
//     console.log('pizza is being delivered', time);
// }

// function whenPizzaIsReady(callback) {
//     console.log('pizza is ready');
//     const randomTime = Math.floor(Math.random() * 60);
//     callback(randomTime);
// }

// whenPizzaIsReady(deliverPizza); // pizza is ready
// // pizza is being delivered
// whenPizzaIsReady(callMeOnMyPhone); // pizza is ready


// function orderPizza(type, callback, deliveryOption){
//     console.log('order pizza', type, deliveryOption);
//     const pizza = makePizza(type, deliveryOption);
//     return type;
// }

// function makePizza(type, deliveryOption){
//     console.log('make pizza', type, deliveryOption);
//     const pizza = bakePizza(type, deliveryOption);
//     return type;
// }

// function bakePizza(type, deliveryOption){
//     console.log('bake pizza', type);
//     console.log('delivery option', deliveryOption, type);
//     const pizza = deliverPizza(type, deliveryOption);
//     return type;
// }

// function deliverPizza(type){
//     console.log('deliver pizza', type);
//     return type;
// }

// function eatPizza(type){
//     console.log('eat pizza', type);
//     return type;
// }


// orderPizza('pepperoni', makePizza, 'delivery');


// function orderPizza(type){
//     console.log('order pizza', type);
//     return type;
// }

// function makePizza(type){
//     console.log('make pizza', type);
//     return type;
// }

// function bakePizza(type){
//     console.log('bake pizza', type);
//     return type;
// }

// function deliverPizza(type){
//     console.log('deliver pizza', type);
//     return type;
// }

// function eatPizza(type){
//     console.log('eat pizza', type);
//     return type;
// }

// const pizzaPromise = new Promise(function(resolve, reject){
//     const pizza = orderPizza('pepperoni');
//     if(pizza){
//         resolve(pizza);
//     } else {
//         reject('no pizza');
//     }
// });

// pizzaPromise
//     .then(makePizza)
//     .then(bakePizza)
//     .then(deliverPizza)


function orderPizza(type, deliveryOption){
    console.log('order pizza', type, deliveryOption);
    return new Promise(function(resolve, reject){
        reject('no more pizza'); /* Running this prevents
            stops the string of promises
        */
        setTimeout(() => { // delay before continuing,
            resolve([type, deliveryOption, true]);
        }, 2000); // Resolve can pass callbacks or end promises
    });
}

function makePizza(pizzaOptions){
    console.log('make pizza', pizzaOptions);
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(pizzaOptions);
        }, 2000);
    });
}

function bakePizza(pizzaOptions){
    console.log('bake pizza', pizzaOptions);
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(pizzaOptions);
        }, 3000);
    });
}

function deliverPizza(pizzaOptions){
    console.log('deliver pizza', pizzaOptions);
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                resolve(pizzaOptions);
            }, 4000);
        });
    }

// Arguements being passed = param1:type param2:deliveryOption
orderPizza('pepperoni', 'delivery')
    .then(makePizza) // Returns a promise with 2 arguments
    .then(bakePizza)
    .then(deliverPizza)
    .catch(function(error){ // catch() deals with reject promises
        console.log('error', error);
    })