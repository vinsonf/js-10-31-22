// pokeapi.co

// 1. Get the data from the API
const SERVER_URL = 'https://pokeapi.co/api/v2/pokemon/';

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         const img = document.createElement('img');
//         img.src = data.sprites.front_default;
//         document.body.appendChild(img);
//     })
//     .catch(function(error) {
//         console.log('error', error);
//     });


function getPokemon(pokemon) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        console.log('error', error);
    });
}

function displayPokemon(data) {
    console.log(data);
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    document.body.appendChild(img);
    return data;
}

function displayPokemonName(data) {
    const name = document.createElement('h1');
    name.innerText = data.name;
    document.body.appendChild(name);
    return data;
}

function displayWeight(data) {
    const weight = document.createElement('h2');
    weight.innerText = data.weight;
    document.body.appendChild(weight);
    return data;
}

function displayId(data) {
    const id = document.createElement('h3');
    id.innerText = data.id;
    document.body.appendChild(id);
    return data;
}


getPokemon('mewtwo')
    .then(displayPokemon)
    .then(displayPokemonName)
    .then(displayWeight);


getPokemon('pikachu')
    .then(displayPokemon)
    .then(displayPokemonName)
    .then(displayId);
        