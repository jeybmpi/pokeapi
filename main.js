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



let searchPokemons =[];
const mainFunction = async () => {
    let data = await getInfo();
    // console.log(data)
    // printFooter(data);
    let responseInfo = [];
    
    searchPokemons.push(data);
    console.log(searchPokemons[0]);
    
      
    data.forEach(element => {
        let infoPokemons = getDataUnique(element.url);
        responseInfo.push(infoPokemons)       
    });

    const newResponse = await Promise.all(responseInfo);

    data.forEach((_, index) => {
        data[index].info = newResponse[index];
    })
    
    
}
mainFunction();

const buscar = () => {
    // e.eventpreventDefault();
    let s = boxSearch.value;
    // buscador(s,searchPokemons[0]); 
    let URL = `https://pokeapi.co/api/v2/pokemon/${s}/`;
    // console.log(URL);
    pokemonRaro(URL);
  }

let pokemonnuevo = [];
let pokemonRaro = async(UURL) =>{
    let buscarPokemon = await getDataUnique(UURL);
    // console.log(buscarPokemon);
    pokemonnuevo.unshift(buscarPokemon);
    console.log(pokemonnuevo)
    pintar(pokemonnuevo);
    console.log(pokemonnuevo);
}

buttonSearch.addEventListener('click',buscar);