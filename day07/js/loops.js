


const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

users.forEach(createUserListItem);
users.forEach(function(user){
    console.log(user.name);
});



function createUserListItem(thingamajig) {
    const li = document.createElement("li");
    li.innerHTML = thingamajig.name + " is " + thingamajig.age + " years old.";
    document.body.append(li);
}



for(let i = 0; i <= 100; i += 5) {
    console.log(i);
    createUserListItem({name: 'user' + i, age: i});
}




