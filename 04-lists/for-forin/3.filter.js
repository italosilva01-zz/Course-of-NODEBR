const {obterPokemon} = require('./service')

async function main() {
    try {
        const {results} = await obterPokemon('');
        const fillter = results.fillter((item)=>{
            
        }) 
    } catch (error) {
        console.error('deu ruim: ',error);
        
    }
}

main();