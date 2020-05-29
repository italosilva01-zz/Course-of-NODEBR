const assert = require('assert');
const nock = require('nock');

const {getPokemon} = require('./service');

describe('pokemon\'s test',()=>{
  before(()=>{

    const response = {
            abilities:
    [ { ability: [Object], is_hidden: true, slot: 3 },
        { ability: [Object], is_hidden: false, slot: 1 } ],
    base_experience: 101,
    forms:
    [ { name: 'ditto',
        url: 'https://pokeapi.co/api/v2/pokemon-form/132/' } ],
    game_indices:
    [ { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 132, version: [Object] },
        { game_index: 76, version: [Object] },
        { game_index: 76, version: [Object] },
        { game_index: 76, version: [Object] } ],
    height: 3,
    held_items:
    [ { item: [Object], version_details: [Array] },
        { item: [Object], version_details: [Array] } ],
    id: 132,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/132/encounters',
    moves: [ { move: [Object], version_group_details: [Array] } ],
    name: 'ditto',
    order: 197,
    species:
    { name: 'ditto',
        url: 'https://pokeapi.co/api/v2/pokemon-species/132/' },
    sprites:
    { back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
        back_female: null,
        back_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png',
        back_shiny_female: null,
        front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
        front_female: null,
        front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png',
        front_shiny_female: null },
    stats:
    [ { base_stat: 48, effort: 0, stat: [Object] },
        { base_stat: 48, effort: 0, stat: [Object] },
        { base_stat: 48, effort: 0, stat: [Object] },
        { base_stat: 48, effort: 0, stat: [Object] },
        { base_stat: 48, effort: 0, stat: [Object] },
        { base_stat: 48, effort: 1, stat: [Object] } ],
    types: [ { slot: 1, type: [Object] } ],
    weight: 40 
    }

    nock('https://pokeapi.co/api/v2/pokemon')
    .get("/ditto")
    .reply(200,response)
})

    it('should search the Ditto in way correctly',async ()=>{
        const expected ='ditto'

        const nomeBase = 'ditto';
        const result = await getPokemon(nomeBase);

        // console.log(result);
        assert.deepEqual(result,expected);
    })
});