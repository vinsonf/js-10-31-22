function whatTodoNext(result) {
  console.log("What do I do next?", result);
}


function add(a, b, callback){
    const result = a + b;
    callback(result);
    return result;
}

add(1, 2, whatTodoNext);


fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(res) {
    console.log("I am done", res);
    return res.json();
}).then(function(res) {
    console.log("I am done again", res);
    return res.title
}).then( function(res) {
    console.log("I am done again again", res);
    return res.toUpperCase();
}).then(function(res) {
    console.log("I am done again again again", res);
})