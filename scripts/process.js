export const getInfo = async (pokemonName) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    const {data} = await axios.get(URL)
    return data;
};
