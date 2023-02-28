// ARROW FUNCTION É UM TIPO DE DECLARAÇÃO DE FUNÇÃO ANÔNIMA
// FUNÇÃO ANÔNIMA:
const soma1 = function(v1, v2){return v1 + v2}
console.log(soma1(10, 5))
console.log('')


// ARROW FUNCTION:
const soma = (v1, v2) => {return v1 + v2}   // () => {} : PASSA OS PARÂMETROS '()' PARA '=>' DENTRO DA FUNÇÃO '{}'
console.log(soma(10, 5))
console.log('')


// ARROW FUNCTIONS COM 1 PARÂMETRO APENAS:
const nome = n => {return 'Seu nome é ' + n}
console.log(nome('Itiel'))
console.log('')


// ARROW FUNCTION SEM O RETURN:  (SOMENTE OPERAÇÕES SIMPLES)
const add = n => n + 10   // NÃO PRECISA COLOCAR O RETURN NEM AS '{}'
console.log(add(10))
