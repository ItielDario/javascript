const btn_soma = window.document.querySelector('#btn_soma')
const btn_subtracao = window.document.querySelector('#btn_subtracao')
const btn_multiplicacao = window.document.querySelector('#btn_multiplicacao')
const btn_divisao = window.document.querySelector('#btn_divisao')
const res = window.document.querySelector('#res')
 
const op = [
    () => {
        const val = [window.document.querySelector('#valor1').value, window.document.querySelector('#valor2').value]
        res.value = Number(val[0]) + Number(val[1])
    },

    () => {
        const val = [window.document.querySelector('#valor1').value, window.document.querySelector('#valor2').value]
        res.value = Number(val[0]) - Number(val[1])
    },

    () => {
        const val = [window.document.querySelector('#valor1').value, window.document.querySelector('#valor2').value]
        res.value = Number(val[0]) * Number(val[1])
    },

    () => {
        const val = [window.document.querySelector('#valor1').value, window.document.querySelector('#valor2').value]
        res.value = Number(val[0]) / Number(val[1])
    }
]

btn_soma.addEventListener('click', op[0])
btn_subtracao.addEventListener('click', op[1])
btn_multiplicacao.addEventListener('click', op[2])
btn_divisao.addEventListener('click', op[3])