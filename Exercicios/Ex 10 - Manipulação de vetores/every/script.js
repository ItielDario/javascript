// EVERY: SE TODOS OS ELEMENTOS DE UM VETOR PASSAREM EM UM TESTE ESPECÍFICO
// EXEMPLO 01:
const num = [12, 5, 8, 130, 44]
console.log(num.every( elen => elen > 10))  // VERIFICA SE TODOS OS ELEMENTOS SÃO MAIORES QUE 10 E RETORNA TRUE OU FALSE


// EXEMPLO 02:
const p_array = window.document.querySelector('#array')
const btnPesquisar = window.document.querySelector('#btnPesquisar')
const resultado = window.document.querySelector('#resultado')

const elementos_array = [21, 25, 19, 20, 16, 18, 22]
p_array.innerHTML = `[${elementos_array}]`
 
btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = 'Vetor não conforme'

    const retorno = elementos_array.every((elen, indice) => {
        if(elen < 18){
            resultado.innerHTML = `Vetor não conforme na posição: ${indice + 1}`
        }
        return elen >= 18  // RETORNA TRUE SE TODOS OS ELEMENTOS FOREM MAIOR QUE 18
    })
    if(retorno){
        resultado.innerHTML = 'OK!'
    }
})