import { getDataUnique, getInfo } from "./scripts/process.js";
import { printPokemons, printPokemon } from "./scripts/ui.js";


document.addEventListener("click", async ({ target }) =>{
    let name = target.getAttribute('name');
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    let getData = await getDataUnique(URL);
    const  {results}  = getData;
    let urlPokemons = [];
    results.forEach(element => {
        let infoUrl = getDataUnique(element.url);
        urlPokemons.push(infoUrl);      
    });
    const newResponse = await Promise.all(urlPokemons);

    results.forEach((_, index) => {
        results[index].info = newResponse[index];
    });    

    let pokemonPointed = results.find(element => element.name===name);
    console.log(pokemonPointed);
    let arrayPokemon = [];
    arrayPokemon.push(pokemonPointed);
    console.log(arrayPokemon);
    printPokemons(arrayPokemon);  
});