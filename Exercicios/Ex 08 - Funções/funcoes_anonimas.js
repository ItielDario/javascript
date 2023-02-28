// AS FUNÇÕES ANÔNIMAS NÃO POSSUEM UM NOME ASSOCIADO AO SEU CONTEÚDO
// POR TANTO, FUNÇÕES ANÔNIMAS NÃO SÃO GUARDADAS/INSTANCIADAS NA MEMÓRIA QUANDO SE INICIA O PROGRAMA, ELA SERÁ CRIADA/DECLARADA SOMENTE NO MOMENTO DE SUA EXECUÇÃO

// FUNÇÃO NORMAL:
function soma1(){   // CRIA ESSA FUNÇÃO NA MEMÓRIA
    // AÇÃO
}
soma1()


// FUNÇÃO ANÔNIMA:
const f = function (...valores){   // PRECISA ESTAR ASSOCIADA A UMA VARIÁVEL POIS QUANDO CHAMA-LÁ A FUNCÃO SERÁ EXECULTADA
    let soma = 0

    for(let v of valores){
        soma += v
    }
    return soma
}
console.log(f(10, 5, 35))
console.log('')


// FUNÇÃO CONSTRUTOR ANÔNIMA (OPERA RELAÇÕES SIMPLES): SOMA
const fun = new Function ('v1', 'v2', 'v3', 'return v1 + v2 + v3')  // O ULTIMO PARÂMETRO É O CORPO DA FUNÇÃO
console.log(fun(10, 5, 35))
console.log('')


// EXEMPLO PRÁTICO FUNÇÕES ANÔNIMAS:
// PODEM SER UTILIZADAS COMO ARGUMENTO DE OUTRAS FUNCÕES
setTimeout(function () {  // A FUNÇÃO ANÔNIMA PASSA A SER UM PARÂMETRO DA FUNÇÃO 'setTimeout'
    console.log('Execulte depois de 1 segundo')
}, 1000)