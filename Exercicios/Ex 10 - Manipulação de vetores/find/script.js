// FIND: PESQUISA UM ELEMENTO NO ARRAY E RETORNA O PRIMEIRO ELEMENTO PESQUISADO QUE ENCONTRAR
// RETORNA O PRIEMIRO ELEMENTO QUANDO A FUNÇÃO RESPONDER TRUE

const p_array = window.document.querySelector('#array')
const txt_pesquisar = window.document.querySelector('#txt_pesquisar')
const btnPesquisar = window.document.querySelector('#btnPesquisar')
const resultado = window.document.querySelector('#resultado')

const elementos_array = [10, 5, 8, 2, 9 , 15, 20]

p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = 'Valor não encontrado'

    const ret = elementos_array.find((elen, indice) => {
        if(elen == txt_pesquisar.value){  // QUANDO ENCONTAR EXECULTARÁ O COMANDO E ENCERRARÁ O MÉTODO 'find'
            resultado.innerHTML = `O valor ${elen} foi encontrado na posição: ${indice + 1}`
        }  
        // SE NÃO ENCONTRAR O ELEMENTO RETORNA 'undefined'
    })
})


// EXEMPLO 02:
const pizzas = [
    'mussarela',
    'calabresa',
    'portuguesa',
    'marguerita',
]
const procurarPizza = pizzas.find( p => p.startsWith('m')) // FAX UMA BUSCA E RETORNA O PRIMEIRO ELEMENTO ENCONTRADO QUE COMECE COM A LETRA 'm'

console.log(procurarPizza)