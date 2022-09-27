import { getDataUnique, getInfo } from "./scripts/process.js";
import { printPokemons, pintar } from "./scripts/ui.js";


document.addEventListener("click", async ({ target }) =>{
    
    if(target.classList.contains('fo')){
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
        // console.log(pokemonPointed);
        let arrayPokemon = [];
        arrayPokemon.push(pokemonPointed);
        // console.log(arrayPokemon);
        printPokemons(arrayPokemon); 
    }
     
});

let boxSearch = document.getElementById('boxSearch');
let buttonSearch = document.getElementById('busqueda');

const buscar = () => {
    let s = boxSearch.value;
    // buscador(s,searchPokemons[0]); 
    let URL = `https://pokeapi.co/api/v2/pokemon/${s}/`;
    console.log(URL);
    pokemonRaro(URL);
  }

let pokemonnuevo = [];
let pokemonRaro = async(UURL) =>{
    let buscarPokemon = await getDataUnique(UURL);
    pokemonnuevo.unshift(buscarPokemon);
    console.log(pokemonnuevo)
    pintar(pokemonnuevo);
    console.log(pokemonnuevo);
}

buttonSearch.addEventListener('click',buscar);