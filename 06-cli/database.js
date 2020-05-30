const {readFile,writeFile} = require('fs');
const {promisify} = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

 class Database{

    constructor(){
        this.NOME_ARQUIVO = 'heros.json'
    }
//------------------------------------------------------
//  get dados of archive
//------------------------------------------------------
    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO,'utf8');
        return JSON.parse(arquivo.toString());
    }

//------------------------------------------------------
//  get dados of archive
//------------------------------------------------------
    async escreverArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO,JSON.stringify(dados));
        return true;
    }

//------------------------------------------------------
//  get dados of archive
//------------------------------------------------------
    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo();
        const id = heroi.id<=10? heroi.id : new Date();
        
        const novoHeroi = {
            ...heroi,
            id
        };

        const dadosFinal =[
            ...dados,
            novoHeroi
        ]

        return await this.escreverArquivo(dadosFinal);
    
    }
//------------------------------------------------------
//  Delete hero
//------------------------------------------------------
    async delete(id){
        if(id ===-1){
           return await this.escreverArquivo([]);
        }
        
        const dados = await this.obterDadosArquivo();
        const indice = dados.findIndex(item =>item.id===id);
    
        if(indice === -1){
            throw Error('O heroi informado não existe');
        }            
    
        dados.splice(indice,1);
        
        return await this.escreverArquivo(dados);
    }
//------------------------------------------------------
//  Update hero
//------------------------------------------------------
    async update(id,modificacoes){
        const dados = await this.obterDadosArquivo();
        const indice = dados.findIndex(item => item.id === parseInt(id));
        
        if(indice === -1){
            throw Error('Heroi informado nao existe');
        }

        const heroiAtual = dados[indice];

        const heroiAtualizado = {
            ...heroiAtual,
            ...modificacoes
        }
        dados.splice(indice,1);

        return await this.escreverArquivo([
            ...dados,
            heroiAtualizado
        ]
   
        );

        

    }
//------------------------------------------------------
//  get dados of archive
//------------------------------------------------------
    async listar(id){
        const dados = await this.obterDadosArquivo();
        const dadosFiltrados = dados.filter((item)=> id? item.id === id: true);
        return dadosFiltrados;
    }
}

module.exports =new Database();