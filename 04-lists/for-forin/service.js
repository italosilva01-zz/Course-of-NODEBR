const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon';

async function obterPokemon(pokemonNome){
    const url = `${URL}/${pokemonNome}`
    const response = await axios.get(url);
    return response.data;
}

// obterPokemon('ditto')
//                     .then((resultado)=>{
//                         console.log('resultado', resultado);
//                     })

//                     .catch((erro)=>{
//                         console.error('DEU ERRO : ',erro);
                        
//                     })
module.exports ={
    obterPokemon
}