// POSSUI UMA RELAÇÃO DE CHAVE E VALOR
/*
    - clear -> LIMPA A COLEÇÃO
    - delete -> REMOVE UM ELEMENTO DA COLEÇÃO
    - entries -> SÃO AS ENTRADAS DA COLEÇÃO
    - forEach -> LOOP QUE PERCORRE A COLEÇÃO
    - get -> OBTEM UM ELEMENTO DA COLEÇÃO
    - has -> VERIFICA SE EXITE UM ELEMENTO NA COLEÇÃO
    - keys -> OBTEM AS CHAVES DA COLEÇÃO
    - set -> DEFINE UM ELEMENTO NA COLEÇÃO
    - size -> QUANTIDADE DE ELEMENTOS NA COLEÇÃO
    - values -> OBTEM OS VALORES DA COLEÇÃO
*/
const caixa = window.document.querySelector('#caixa')

let mapa = new Map()  // DECLARANDO UMA COLEÇÃO 'mapa' DO TIPO MAP

mapa.set('curso', 'Javacsript')  // DEFINE UMA CHAVE E O VALOR DELA NA POSIÇÃO 0
mapa.set(10, 'PNG')  // POSIÇÃO 1
mapa.set(1, 100)  // POSIÇÃO 2
mapa.set('canal', 250)  // POSIÇÃO 3

console.log(mapa)
console.log(mapa.get('curso'))  // OBTEM O VALOR DA CHAVE 'curso' E EXIBE

mapa.delete(1)  // DELETA UM ELEMNTO DA COLEÇÃO PELA CHAVE

pes = 10
if(mapa.has(pes)){  // VERIFICA SE A CHAVE 'pes' EXISTE NA COLEÇÃO
    caixa.innerHTML = `A chave existe na coleção com o valor:  ${mapa.get(pes)}`
}   
else{
    caixa.innerHTML = 'A chave NÃO existe na coleção'
    caixa.innerHTML += `<br/>O tamanho da coleção é: ${mapa.size}`  // EXIBE O TAMANHO DA COLEÇÃO
}

mapa.forEach((el) => {  // PERCORRE TODOS OS ELEMENTOS DA COLEÇÃO
    console.log(el)
})
