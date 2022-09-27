import { getInfo } from "./scripts/process.js";
import { objPrint } from "./scripts/ui.js";


document.addEventListener("click", async ({ target }) =>{    
    if(target.classList.contains('fo')){
        let name = target.getAttribute('name');
        const getPokemon = await getInfo(name);
        objPrint(getPokemon);
        console.log(getPokemon);      
    }
     
});

let boxSearch = document.getElementById('boxSearch');
let buttonSearch = document.getElementById('busqueda');

const buscar = async () => {
    let pokemonName = boxSearch.value;
    const getPokemon = await getInfo(pokemonName);
    objPrint(getPokemon);
    console.log(getPokemon);
};

buttonSearch.addEventListener('click',buscar);