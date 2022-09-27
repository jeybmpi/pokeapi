const containerPokemons = document.getElementById('footer-content');
let contenedor = document.getElementById('main-container');
export const printFooter = (listPokemons) => {
    console.log(listPokemons)
    containerPokemons.innerHTML = '';
    listPokemons.forEach(async(element,index) => {
        const {data:{sprites}} = await axios.get(element.url);
        if (index<4){
        containerPokemons.innerHTML +=`
        <figure>
                <img src="${sprites.other.home.front_default}" name="${element.url}" class="content" alt="pokemon">
        </figure>
        
        `
        }
    });
}
document.addEventListener('click',({target})=>{
    if (target.classList.contains('content')){
        let x = target.name;
        console.log(x);
        printPokemonselegidos(x);
    } 
})


export const printPokemonselegidos = async (listPokemons) => { 
    let perdirData = await axios.get(listPokemons);
    console.log(perdirData.data);
    contenedor.innerHTML ='';
    contenedor.innerHTML +=`
        <main id="main-container">
        <section class="charizard-container">
            <div class="title">
                
                <h2>${perdirData.data.name}</h2>
            </div>
            <figure class="image-charizard">
                <img src="${perdirData.data.sprites.other.home.front_default}" alt="chaizard">
            </figure>
        </section>
        <article class="info-pokemon">
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">No.</span>
                    <span class="info-text">${perdirData.data.order}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">LEVEL</span>
                    <span class="info-text">${perdirData.data.base_experience}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">TYPE</span>
                    <span class="info-text">${perdirData.data.types[0].type.name}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">HABILITY</span>
                    <span class="info-text">${perdirData.data.abilities[0].ability.name}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">HEIGHT</span>
                    <span class="info-text">${perdirData.data.height} Metros</span>
                </div>
                <div class="row-item">
                    <span class="title-info">WEIGHT</span>
                    <span class="info-text">${perdirData.data.weight} kg</span>
                </div>
            </div>
        </article>
       `
}

export let pintar = (pokemon) =>{
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