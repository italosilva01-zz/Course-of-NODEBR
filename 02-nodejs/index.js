/*
    1   Obter o numero de telefone de um usuário a partir de seu Id
    2   Obter o endereço do usuario a partor do seu Id
*/
// importanto modulouo que converte uma função que usa callback para uma qwue usa promise automaticamente
const util = require('util');

const obterEnderecoAsync = util.promisify(obterEndereco);
function obterUsuario(){
    // Quando der algum problema -> o reject
    //quando for sucess -> resolv
    return new Promise (function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                id:1,
                nome:'Aladim',
                dataNascimento:new Date()
            })
        },1000)
    })
    
}

function ObterTeleforne(idUsuario){
    return new Promise(function resolvePromise(resolve,reject){
        setTimeout(()=>{
            return resolve({
                telefone: '1199002',
                ddd:11
            })   
        },2000)
    })
    
}

function obterEndereco(idUsuario,callback){
    setTimeout(()=>{
        return callback(null,{
            rua:'dos bobos',
            numero:0
        })
    },2000)
}

const usuarioPromise = obterUsuario();
//Para manipular o sucessor -> função .then
// Para manipular erros -> função .catch

// usuarioPromise
//             .then(function(usuario){
//                 return ObterTeleforne(usuario.id)

//                 .then(function resolverTelefone(result){
//                     return {
//                         usuario:{
//                             nome:usuario.nome,
//                             id:usuario.id
//                         },
//                         telefone:result.telefone,
//                         ddd: result.ddd
//                     }
//                 })
//             })
//             .then(function(result){
//                 const endereco = obterEnderecoAsync(result.usuario.id);
//                 return endereco.then(function resolverEndereco(resultado){
//                     return {
//                         usuario:result.usuario,
//                         telefone:result.telefone,
//                         ddd:result.ddd,
//                         endereco: resultado
//                     }
//                 });
//             })

//             .then(function (resultado){
//                 console.log(`
//                     Nome: ${resultado.usuario.nome}
//                     Endereco: ${resultado.endereco.rua}

//                 `);

//             })
//             .catch(function(error){
//                 console.error('Deu ruim ',error);
//             })

async function main(){
    try {
        console.time('TempoFun');
        const usuario = await obterUsuario()
        // const telefone = await ObterTeleforne(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id);
        
        const [telefone,endereco] = await Promise.all([
            ObterTeleforne(usuario.id),
            obterEnderecoAsync(usuario.id)
        ]);

        console.timeEnd('TempoFun');
        console.log(`
            Nome: ${usuario.nome}
            Enderero: ${endereco.rua}
            Telefone: ${telefone.telefone}
        `)
    } catch (error) {
        console.error('Deu ruim', error);
    }
}
main();


// obterUsuario( function resolveUsuario(error,usuario){
//     if(error){
//         console.error('DEU RUIM em USUARIO',error);
//         return;
//     }

//     ObterTeleforne(usuario.id,resolverTelefone = (error1,telefone)=>{

//         if(error1){
//             console.error('Erro em telefone',error1);
//             return;

//         }

//         obterEndereco(usuario.id,function resolverEndereço(error2,endereco){
//             if(error2){
//                 console.error('Deu erro no endereço');
//                 return;
//             }
//             console.log(`Usuario:${usuario.nome}\nEndereco: ${endereco.rua}\nTelefone: ${telefone.telefone}`)
//         })

//     })
// });
//const telefone = ObterTeleforne(usuario.id)

//console.log('telefone',telefone);