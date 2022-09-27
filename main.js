import { getDataUnique, getInfo } from "./scripts/process.js";
import { printFooter, pintar } from "./scripts/ui.js";

let boxSearch = document.getElementById('boxSearch');
let buttonSearch = document.getElementById('busqueda');
let contenedor = document.getElementById('main-container');


let searchPokemons =[];
const mainFunction = async () => {
    let data = await getInfo();
    console.log(data)
    printFooter(data);
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

//_____________________-BUSCADOR!
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
    console.log(buscarPokemon);
    pokemonnuevo.unshift(buscarPokemon);
    console.log(pokemonnuevo)
    pintar(pokemonnuevo);
}

  //___________________
buttonSearch.addEventListener('click',buscar);
