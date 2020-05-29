const {deepEqual,deepStrictEqual, ok} = require('assert');

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id:1
}
describe('Hero manypulation suite',()=>{
    
    before(async ()=>{
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
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

        console.log(actual);
        deepStrictEqual(actual,expected);
    })

})
