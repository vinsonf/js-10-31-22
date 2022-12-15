const baseUrl = 'https://swapi.dev/api/';


function getPerson(id){
    return fetch(baseUrl + `people/${id}/`).then(res => res.json());
}




function completePerson(personId){
    return new Promise(
        (resolve, reject) => {
            let personResult;
            getPerson(personId)
            .then(person => {
                personResult = person;
                return fetch(person.homeworld);
            })
            .then(res => res.json())
            .then(planet => {
                personResult.homeworld = planet;
                // resolve(personResult);
                return personResult
            }).then( person => {
                const promises = person.films.map(
                    filmUrl => fetch(filmUrl).then(res => res.json())
                );
                return Promise.all(promises);
            }).then(films => {
                personResult.films = films.map(film => {
                    delete film.characters;
                    delete film.planets;
                    delete film.species;
                    delete film.starships;
                    delete film.created;
                    delete film.edited;
                    return film;
                });

                return personResult
            }).then( person => {
                const {films, name, homeworld} = person;
                resolve({films, name, homeworld})
            })
        }
    );

}

completePerson(Math.floor(Math.random() * 20)).then(person => console.log(person));