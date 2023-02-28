/*
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/


// WHILE ---------------------------------------------------------------------------------
/*var c = 0
while(c < 6){
    c++
    console.log(`Tudo bem?`)
}
console.log(``)


// DO / WHILE ------------------------------------------------------------------------------
var c = 0
do{
    c++
    console.log(`Tudo bem?`)
}while(c < 6)
console.log(``)
*/


// FOR ------------------------------------------------------------------------------------
console.log('Vai começar ...')
for(var c = 0; c < 3; c++){
    console.log(`Tudo bem?`)
}
console.log('')


// FOR IN ---------------------------------------------------------------------------------
// RETORNA A POSIÇÃO
let num = [10, 20, 30, 40, 50]

for(n in num){  // A VARIÁVEL 'n' RECEBE A POSIÇÃO DE CADA ELEMENTO DE 'num'
    console.log(num[n])
}
console.log('')


// FOR OF ---------------------------------------------------------------------------------
// RETORNA O VALOR
let numero = [10, 20, 30, 40, 50]

for(n of num){  // A VARIÁVEL 'n' RECEBE O VALOR DE CADA ELEMENTO DE 'num'
    console.log(n)
}