export let gameData = {
    username: '',
    money: 100,
    inventory: [],
    health: 100,
    x: 0,
    y: 0,
}

const savedData = localStorage.getItem('gameData');
if (savedData) {
    gameData = JSON.parse(savedData)
}
const dataElement = document.createElement('pre');
dataElement.setAttribute('id', 'data');
document.body.append(dataElement);
displayData();

export function displayData() {
    document.querySelector('#data').
        textContent = JSON.stringify(gameData, null, 4);
}

export function saveGameDataToLocalStorage() {
    localStorage.setItem('gameData', JSON.stringify(gameData));
}
document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === 'w') {
        gameData.y-=10;
    }
    if (event.key === 'a') {
        gameData.x-=10;
    }
    if (event.key === 's') {
        gameData.y+=10;
    }
    if (event.key === 'd') {
        gameData.x+=10;
    }
});


fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const randomIndex = Math.floor(Math.random() * data.results.length);
        console.log(randomIndex);
        const randomPokemon = data.results[randomIndex];
        console.log(randomPokemon);
    });