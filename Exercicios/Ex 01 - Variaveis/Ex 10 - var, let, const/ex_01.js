'use strict'  // MODO RESTRITO, AJUDA A ESCREVER UM CÓDIGO MAIS LIMPO E COERENTE NAO PERMITINDO ERROS QUE NORMALMENTE SÃO ACEITAVEIS COMO: USAR VARIAVEIS NÃO DECLARADAS
//nome = 'Bruno'  -> COM O 'use strict' NÃO É POSSIVEL DECLARAR ESSA VARIÁVEL


// VAR ----------------------------------------------------------------------------------------------------------------
// É UMA POSIÇÃO DENTRO DA MEMORIA RAM. SEU VALOR PODE SER ALTERADO A QUALQUER MOMENTO EM QUALQUER ESCOPO
var numero = '10'
console.log(numero)

if(true){
    var nome = 'Bruno'  // ESTA CRIADA DENTRO DO IF MAS POSSO ACESSA-LA DE QUALQUER LUGAR DO MEU CÓDIGO
}
console.log(`No escopo atrás: ${nome}`)
console.log('')


// LET ----------------------------------------------------------------------------------------------------------------
// A VARIAVEL SÓ PODE SER ACESSADA DO ESCOPO ONDE FOI CRIADA PARA FENTE, E SEU VALOR PODE SER ALTERADO
if(true){
    let sobrenome = 'Silva'
    console.log(`No escopo: ${sobrenome}`)   // EXIBE

    if(true){
        console.log(`No escopo a frente: ${sobrenome}`)   // EXIBE
    }
}
//console.log(`No escopo atrás: ${sobrenome}`)  // NÃO EXIBE
console.log('')


// CONST ---------------------------------------------------------------------------------------------------------------
// SEU VALOR NÃO PODE SER ALTERADO
const curso = 'JavaScript'
curso = 'PHP'  // NÃO PODE SER ALTERADO
console.log(curso)