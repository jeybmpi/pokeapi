const containerPokemons = document.getElementById('main-container');

export const objPrint =(objPokemon)=>{
    containerPokemons.innerHTML = '';    
        const {abilities, height, types, sprites,base_experience, id, weight,name} = objPokemon;        
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
                    <img src="${sprites.versions['generation-v']['black-white'].animated.front_default}">
                </figure>
                <h2>${(name).toUpperCase()}</h2>

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
}