const axios = require('axios');

const URLBASE = 'https://pokeapi.co/api/v2/pokemon';

async function getPokemon(name){
    const url = `${URLBASE}/${name}`;
    const result = await axios.get(url);

    return result.data.forms[0].name; 
}

module.exports = {getPokemon};