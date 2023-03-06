const btn_soma = window.document.querySelector('#btn_soma')
const btn_subtracao = window.document.querySelector('#btn_subtracao')
const btn_multiplicacao = window.document.querySelector('#btn_multiplicacao')
const btn_divisao = window.document.querySelector('#btn_divisao')
const res = window.document.querySelector('#res')

const calcular = [
    (v1, v2) => {
        return v1 + v2
    },

    (v1, v2) => {
        return v1 - v2
    },

    (v1, v2) => {
        return v1 * v2
    },

    (v1, v2) => {
        return v1 / v2
    }
]

btn_soma.addEventListener('click', (evt) => {
    exibirValor(0)
})

btn_subtracao.addEventListener('click', (evt) => {
    exibirValor(1)
})

btn_multiplicacao.addEventListener('click', (evt) => {
    exibirValor(2)
})

btn_divisao.addEventListener('click', (evt) => {
    exibirValor(3)
})

function exibirValor(indice){
    const valor1 = window.document.querySelector('#valor1')
    const valor2 = window.document.querySelector('#valor2')
    res.value = calcular[indice](Number(valor1.value), Number(valor2.value))
}