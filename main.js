import { getDataUnique, getInfo } from "./scripts/process.js";
import { printPokemons } from "./scripts/ui.js";

let boxSearch = document.getElementById('boxSearch');
let buttonSearch = document.getElementById('busqueda');
let contenedor = document.getElementById('main-container');


let searchPokemons =[];
const mainFunction = async () => {
    let data = await getInfo();
    console.log(data)
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

 let pintar = (pokemon) =>{
    let poke = pokemon[0];
    contenedor.innerHTML = '' ;
    contenedor.innerHTML += `
    <section class="charizard-container">
            <div class="title">
                <h2>${poke.name}</h2>
            </div>
            <figure class="image-charizard">
                <img src="${poke.sprites.other.home.front_default}" alt="chaizard">
            </figure>
        </section>
        <article class="info-pokemon">
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">No.</span>
                    <span class="info-text">00${poke.id}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">LEVEL</span>
                    <span class="info-text">${poke.base_experience}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">TYPE</span>
                    <span class="info-text">${poke.types[0].type.name}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">HABILITY</span>
                    <span class="info-text">${poke.abilities[0].ability.name}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">HEIGHT</span>
                    <span class="info-text">${poke.height}M</span>
                </div>
                <div class="row-item">
                    <span class="title-info">WEIGHT</span>
                    <span class="info-text">${poke.weight} Kg</span>
                </div>
            </div>
        </article>
    `
 }

let pokemonnuevo = [];
let pokemonRaro = async(UURL) =>{
    let buscarPokemon = await getDataUnique(UURL);
    console.log(buscarPokemon);
    pokemonnuevo.unshift(buscarPokemon);
    console.log(pokemonnuevo)
    // printPokemons(searchPokemons);
    pintar(pokemonnuevo);
}

  //___________________
buttonSearch.addEventListener('click',buscar);
