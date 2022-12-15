
const data = {
    results: [],
    activePokemon: null
}

const dataElement = document.createElement('div');
dataElement.innerHTML = '...loading'

document.body.append(dataElement);

function updateResults(results) {
    data.results = results;
}
function updateActivePokemon(pokemon){
    data.activePokemon = pokemon;
    dataElement.innerHTML = pokemon.name
}


async function getPokemon() {
    let pokemonData = await get('https://pokeapi.co/api/v2/pokemon')
    console.log(pokemonData);

    const bulbasaur = await get(pokemonData.results[3].url)

    console.log('bulbasaur', bulbasaur)
    updateActivePokemon(bulbasaur);

    console.log(bulbasaur)
    const newPoke = await get('https://pokeapi.co/api/v2/pokemon/6')
    console.log('newPoke', newPoke)
    updateActivePokemon(newPoke)
    // data.activePokemon = newPoke;
    console.log(data);
    return bulbasaur;
}

async function run() {
 const result = await getPokemon();
 console.log(result)
}

run();

function get(url){
    return fetch(url).then(res => res.json())
}

