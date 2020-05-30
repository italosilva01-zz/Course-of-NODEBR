const {deepEqual,deepStrictEqual, ok} = require('assert');

const database = require('./database')

//------------------------------------------------------
//  Constants
//------------------------------------------------------
const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id:1
}

const DEFAULT_ITEM_ATUALIZAR = {
    nome: 'Lanterna verde',
    poder: 'Energia',
    id:2
}

describe('Hero manypulation suite',()=>{
    
   before(async ()=>{
       await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
       await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);

   })
//------------------------------------------------------
//  Hero Search Test
//------------------------------------------------------
    it('Must search Hero',async()=>{
        const expected = DEFAULT_ITEM_CADASTRAR;
        const [result] = await database.listar(expected.id);

        deepStrictEqual(result,expected);
    })
//------------------------------------------------------
//  Hero Registration Test
//------------------------------------------------------
    it('Must register Hero',async()=>{
        const expected =DEFAULT_ITEM_CADASTRAR;
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);

        deepStrictEqual(actual,expected);
    })

//------------------------------------------------------
//  Hero Delete Test
//------------------------------------------------------
    it('Must delete a hero',async ()=>{
        const expected = true;
        const resultado = await database.delete(DEFAULT_ITEM_CADASTRAR.id);
        deepStrictEqual(resultado,expected);
    })
//------------------------------------------------------
//  Hero Update Test
//------------------------------------------------------    
    it('Must Update a hero', async ()=>{
        const expected = {
           ...DEFAULT_ITEM_ATUALIZAR,
           nome:'Batman',
           poder:'Dinheiro'
        }

        const novoDado = {
            nome:'Batman',
            poder:'Dinheiro'
        }

        await database.update(DEFAULT_ITEM_ATUALIZAR.id,novoDado);
        // const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);

        deepStrictEqual(resultado, expected);

    })

    after(async ()=>{
        await database.delete(DEFAULT_ITEM_CADASTRAR.id);
        await database.delete(DEFAULT_ITEM_ATUALIZAR.id);
    })
})
