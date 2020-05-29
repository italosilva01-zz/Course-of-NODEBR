const service = require('./service');
Array.prototype.meuMap = (callback) =>{
    const novoArrayMap = []
    for(let indice = 0;indice <= this.length -1; ++indice){
        const resultado = callback(this[indice],indice)
        novoArrayMap.push(resultado);
    }

    return novoArrayMap;
}

async function main(){
    try {
        const results = await service.obterPokemon("ditto");
        // const names = [];

        // results.results.forEach((pokemon) => {
        //     names.push(pokemon.name)
        // });

        // const names = results.results.map((pokemon)=>{
        //     return pokemon.name;
        // })

        const names = results.results.meuMap(pokemon=>pokemon.name);
        console.log('Names: ',names);
    } catch (error) {
        console.error("DEU RUIM",error);
        
    }
}

main();