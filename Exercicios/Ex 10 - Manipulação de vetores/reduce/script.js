// REDUCE: RETORNA UM VALOR REDUZIDO, ACUMULATIVO E CONCATENADO COM BASE NOS ELEMENTOS DE TODO O ARRAY
// PEGA O RESULTADO DA OPERAÇÃO ANTERIOR E O VALOR DO ELEMENTO ATUAL

const p_array = window.document.querySelector('#array')
const btnReduzir = window.document.querySelector('#btnReduzir')
const resultado = window.document.querySelector('#resultado')

const elementos_array = [1, 2, 3, 4, 5, 10, 25]
let antes = []
let atu = []

p_array.innerHTML = `[${elementos_array}]`

btnReduzir.addEventListener('click', (evt) => {
    resultado.innerHTML = elementos_array.reduce((anterior, atual, indice, vetor) => {
        antes.push(anterior)  // GARDA OS VALORES DE 'anterior'
        atu.push(atual)  // GARDA OS VALORES DE 'atual'

        return anterior + atual  // SOMA O RESULTADO ANTERIOR COM O ELEMENTO ATUAL = 0 + 1 -> 1 + 2 -> 3 + 3 -> 6 + 4 -> 10 + 5 = 15
    })
    resultado.innerHTML += `<br/>Valor anterior: ${antes}`  // EXIBE TODOS OS VALORES DE 'anterior'
    resultado.innerHTML += `<br/>Valor atual: ${atu}`  // EXIBE TODOS OS VALORES DE 'atual'
})