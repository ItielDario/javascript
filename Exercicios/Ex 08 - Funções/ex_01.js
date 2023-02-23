// EXEMPLO 01 ------------------------------------------------------------------------------------------------------
function parimpar(n){  // (n) -> PARÂMETRO
    if(n % 2 == 0){  // AÇÃO  
        return 'Par!'
    }
    else{
        return 'Ímpar!'  // RETORNO
    }
}

let res = parimpar(4)  // CHAMADA
console.log(`${res}`)

// OU
// console.log(parimpar(11))
console.log(``)


// EXEMPLO 02 ---------------------------------------------------------------------------------------------------------
function soma(n1 = 0, n2 = 0){ //CASO PASSE APENAS 1 PARAMENTRO A VARIAVEL RECEBE 0 AUTOMATICAMENTE -> soma(4)
    return n1 + n2
}

console.log(soma(10, 20))
console.log(``)


// EXEMPLO 03 (VARIAVEL RECEBE FUNÇÃO) --------------------------------------------------------------------------------
var v = function(x){
    return x * 2
}

console.log(v(5))
console.log(``)


// EXEMPLO 04 ---------------------------------------------------------------------------------------------------------
function fatorial(n){
    let fat = 1
    for(let i = n; i > 1; i--){
        fat *= i
    }
    return fat
}

console.log(fatorial(5))


// RECURSIVIDADE
function fatorial1(n){
    if(n == 1){
        return 1
    }
    else{
        return n * fatorial1(n - 1)  // ELIPSE / CICLO
    }
}

console.log(fatorial1(5))