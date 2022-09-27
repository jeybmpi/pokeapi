const containerPokemons = document.getElementById('main-container');

export let pintar = (pokemon) =>{
    let poke = pokemon[0];
    containerPokemons.innerHTML = '' ;
    containerPokemons.innerHTML += `
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

export const printPokemons = (listPokemons) => {
    containerPokemons.innerHTML = '';
    listPokemons.forEach(pokemon => {
        const {info} = pokemon;
        const {abilities, height, types, sprites,base_experience, id, weight} = info;
        console.log(info);
        let TYPE = '';
        types.forEach(element=>{
            TYPE += `<span class="info-text">${element.type.name}</span>`;
        });
        let HABILITIES = '';
        abilities.forEach(element=>{
            HABILITIES += `<span class="info-text type">${element.ability.name}</span>`;
        });
        containerPokemons.innerHTML += `
        <section class="charizard-container">
            <div class="title">
                <figure>
                    <img src="${sprites.back_default}">
                </figure>
                <h2>${(pokemon.name).toUpperCase()}</h2>
            </div>
            <figure class="image-charizard">
                <img src="${sprites.other.home.front_default}" alt="chaizard">
            </figure>
        </section>
        <article class="info-pokemon">
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">No.</span>
                    <span class="info-text">00${id}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">LEVEL</span>
                    <span class="info-text">${base_experience}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">TYPE</span>
                    <span class="info-text type">${TYPE.toUpperCase()}</span>
                </div>
                <div class="row-item">
                    <span class="title-info type">HABILITY</span>
                    <span class="info-text type">${HABILITIES.toUpperCase()}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">HEIGHT</span>
                    <span class="info-text">${height}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">WEIGHT</span>
                    <span class="info-text">${weight}</span>
                </div>
            </div>
        </article>
        `
    });
};