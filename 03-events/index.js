const EventEmitter = require('events');

class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';
meuEmissor.on(nomeEvento,function(click){console.log('Um usuario clicou ',click)});

// meuEmissor.emit(nomeEvento,'na barra de rolagem')
// meuEmissor.emit(nomeEvento,'no ok');

// let count = 0;
// setInterval(()=>meuEmissor.emit(nomeEvento,'no ok'+(count++)),1000);

const stdim = process.openStdin();
stdim.addListener('data',(value)=>{
    console.log(`VocÊ Digitou: ${value.toString().trim()}`)
})
