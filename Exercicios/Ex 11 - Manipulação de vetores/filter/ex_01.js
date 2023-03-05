// PERCORRE UM VETOR, REALIZA UMA FILTRAGEM E RETORNA UM OUTRO VETOR COM DETERMIDADOS OS ELEMENTOS FILTRADOS
// EXEMPLO 01:
const idades=[15, 21, 30, 17, 18, 44, 12, 50]

// const filtroAdulto = (valor) => {   // PARÂMETROS = (valor, indice, vetor)
//     if(valor >= 18){
//         return valor  // RETORNA AS IDADES >= 18
//     }
// }

const adultos = idades.filter((valor, indice, vetor) => {    // 
    if(valor >= 18){
        return valor
    }
})

const menores = idades.filter((valor) => {
    if(valor < 18){
        return valor
    }
})
console.log(idades)
console.log(adultos)
console.log(menores)
console.log('')


// EXEMPLO 02
const numeros = [1, 2, 3, 4, 5, 4, 12, 19, 7, 2, 5, 19]

const numerosUnicos = numeros.filter((elen, indice, vetorNumeros) => {

    // - vetorNumeros.indexOf(elen)  = RETORNA O PRIMEIRO INDICE ONDE O 'elen' FOI ENCONTRADO

    // - indice = RETORNA O INDICE DO 'elen' ATUAL

    if(vetorNumeros.indexOf(elen) === indice){   // TRUE = O 'elen' É ÚNICO | FALSE = O 'elen' FOI ACHADO EM OUTRA POSIÇÃO
        return elen
    }
}) 
console.log(numerosUnicos)