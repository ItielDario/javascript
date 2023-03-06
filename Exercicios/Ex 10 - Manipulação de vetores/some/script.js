// SOME: RETORNA TRUE SE PELO MENOS UM DOS ELEMENTOS DE UM VETOR PASSAREM EM UM TESTE ESPECÍFICO
// EXEMPLO 01 (VERIFICAR SE HÁ ALGUM NUMERO PRIMO):

function isPrime(value){
    for( let i = 2; i < value; i++){
        if(value % i == 0){
            console.log(value)
            return false  // SE TODOS NÃO FOREM PRIMOS RETORNA FALSE
        }
    }

    return value > 1  // SE ALGUM FOR PRIMO PASSA DIRETO PELO FOR E RETORNA TRUE, ENCERRANDO A FUNÇÃO
}
const num = [ 6, 8, 11, 14, 42]
console.log(num.some(isPrime))  // CHAMA A FUNÇÃO 'isPrime'


// EXEMPLO 02:
const p_array = window.document.querySelector('#array')
const btnPesquisar = window.document.querySelector('#btnPesquisar')
const resultado = window.document.querySelector('#resultado')

const elementos_array = [16, 12, 10, 17, 15, 13, 19, 20]
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click', (evt) => {

    const retorno = elementos_array.some((elen, indice) => {
        if(elen < 18){
            resultado.innerHTML = `Vetor não conforme na posição: ${indice + 1}`
        }
        return elen >= 18  // RETORNA TRUE ALGUNS DOS ELEMENTOS FOR MAIOR QUE 18
    })
    if(retorno){
        resultado.innerHTML = 'OK!'
    }
})