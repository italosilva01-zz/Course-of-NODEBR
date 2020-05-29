const service = require('./service');

async function main(){
    try {
        const result = await service.obterPokemon(" ");
        const names =  []

        for(i =0; i<=result.results.length -1;++i){
            let name = result.results[i].name
            names.push(name);
        }
        console.log("Nomes : ",names);


    } catch (error) {
        console.error('Deu erro',error);
        
    }
} 
main()