// FUNÇÕES GERADORAS SÓ PASSA O RETORNO QUANDO É PEDIDO. É UTILIZADA NA PROGRAMAÇÃO ASSINCRONA
// FUNÇÃO NORMAL:
function cor(){}


// FUNÇÃO GERADORA:  (POSSUI UM '*' PARA INDICAR QUE É UMA FUNÇÃO GERADORA)
function* cores(){  
    yield 'Vermelho'  // PAUSA A FUNÇÃO GERADORA E RETORNA O VALOR 'Vermelho'
    yield 'Verde'     //          ||              ||                'Verde'
    yield 'Azul'      //          ||              ||                'Azul'
}

const itc = cores() // PRIMEIRA CHAMADA RETONA NADA
console.log(itc.next().value)  // PRÓXIMA CHAMADA RETORNA O VALOR DO PRIMEIRO YIELD = 'Vermelho'
console.log(itc.next().value)  //                ||               DO SEGUNDO YIELD = 'Verde'
console.log(itc.next().value)  //                ||               DO TERCEIRO YIELD = 'Azul'
console.log(itc.next().value)  // NÃO TEM MAIS O QUE EXECULTAR
console.log('')


// EXEMPLO 02:
function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual esporte favorito?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}` 
}

const itp = perguntas()
console.log(itp.next().value)   // EXIBE 'Qual seu nome?'
console.log(itp.next('Bruno').value)   // const nome = 'Bruno'  E EXIBE 'Qual esporte favorito?'
console.log(itp.next('Natação').value)   // const esporte = 'Natação'  E EXIBE O RETURN
console.log('')


// EXEMPLO 03:
function* contator(){
    let i = 0

    while(true){
        yield i++
    }
}

const itcont = contator()


while(true){
    setTimeout(() => {
        console.log(itcont.next().value)
    }, 1000);
}


