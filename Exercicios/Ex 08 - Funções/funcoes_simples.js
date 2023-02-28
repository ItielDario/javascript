// FUNÇÕES BÁSICAS ---------------------------------------------------------------------------------------------------
function nome(){  // DECLARAÇÃO DA FUNÇÃO
    console.log('Itiel Dario')   // AÇÃO  
    console.log('')
}
nome()  // CHAMADA


// FUNÇÕES DE RETORNO ---------------------------------------------------------------------------------------------
// EXEMPLO 01
function curso(){
    return 'JavaScripit'   // RETORNA A STRING COM 'JavaScript' PARA A FUNÇÃO
}
console.log(curso())


// EXEMPLO 02
function somar(){
    let n1 = 10
    let n2 = 2
    let res = n1 * n2
    return res   // RETORNA O VALOR DE 'res' PARA A FUNÇÃO
}
let num = somar()  // GUARDA A FUNÇÃO DENTRO DE UMA VARIÁVEL
console.log(num)


// EXEMPLO 03
function verifica(){
    let n1 = 10
    let n2 = 2
    let res = n1 * n2
    return 'Impar'  // FIM DA FUNÇÃO
    return 'Par'   // NÃO EXIBE
    console.log('Fim da função')   // NÃO EXIBE
}
let num1 = verifica() 
console.log(num1)
console.log('')


// FUNCÕES COM PARÂMETRO  ------------------------------------------------------------------------------------------
// EXEMPLO 01
function exibe(palavra){  //(palavra) -> RECEBE O PARÂMETRO 'Bruno'
    console.log(palavra)  // EXIVE O CONTEÚDO DE 'palavra'
}
exibe('Bruno')  // CHAMA A FUNÇÃO E PASSA O PARÂMETRO 'Bruno' PARA ELA
exibe(2023)
exibe(5.2)


// EXEMPLO 02
function soma(n1 = 0, n2 = 0){ //CASO PASSE APENAS 1 PARAMENTRO A VARIAVEL RECEBE 0 AUTOMATICAMENTE -> soma(4)
    return n1 + n2
}
console.log(soma(10, 20))


// EXEMPLO 03
function parimpar(n){
    if(n % 2 == 0){  
        return 'Par!'  // RETORNA UM OU OUTRO
    }
    else{
        return 'Ímpar!'  
    }
}
let res = parimpar(4)
console.log(`${res}`)
// OU
// console.log(parimpar(11))


// EXEMPLO 04
function add(v){
    valor = valor + v
}
let valor = 0

add(10)
console.log(valor)    // MOSTRA O RESULTADO DE VALOR POIS FOI DEFINIDA FORA DA FUNÇÃO

add (5)
console.log(valor)
console.log(``)


// RECURSIVIDADE ---------------------------------------------------------------------------------------------------------
// EXEMPLO 01
function fatorial(n){
    let fat = 1
    for(let i = n; i > 1; i--){
        fat *= i
    }
    return fat
}
console.log(fatorial(5))


// EXEMPLO 02
function fatorial1(n){
    if(n == 1){
        return 1
    }
    else{
        return n * fatorial1(n - 1)  // ELIPSE / CICLO
    }
}
console.log(fatorial1(5))
console.log('')


// PARÂMETROS REST -----------------------------------------------------------------------------------------------------
// NÃO É NECESSARIO ESPECIFICAR A QUANTIDADE DE PARÂMETROS
// EXEMPLO NORMAL:
function som1(n1, n2){   // POSSO PASSAR ATÉ 2 PARÂMETROS
    return n1 + n2
}
console.log(som1(10, 5))


// EXEMPLO COM REST:
function som2(...valores){   // POSSO PASSAR QUANTOS PARÂMETROS FOREM NECESSÁRIOS
    let res = 0

    for(let v of valores){
        res += v
    }
    return res
}
console.log(som2(61, 5, 38, 24, 19, 6))

