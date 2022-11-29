const messageBox = document.querySelector('.message');
const input = document.querySelector('input');
const button = document.querySelector('button');

messageBox.innerHTML = "";
messageIndex = 0;


const messages = [
    "You have a magical box",
    "Choose your fist item",
    "Choose your second item",
];

messageBox.innerHTML = messages[messageIndex];

setTimeout(function() {
    messageIndex++;
    messageBox.innerHTML = messages[messageIndex];
  
}, 5000)
button.addEventListener('click', function() {
    const image = document.createElement('img');
    image.src = "https://source.unsplash.com/200x200/?" + input.value;
    console.log(image.src);
    document.body.append(image);

    function next() {
        messageIndex++;
        messageBox.innerHTML = messages[messageIndex];
      
    }
    next();
});



