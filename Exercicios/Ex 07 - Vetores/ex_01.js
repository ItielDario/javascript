let num = [5, 8, 2, 9, 3]
num[5] = 7
num.push(1)  // ACRESCENTA UM INDICE NO FINAL COM O VALOR ENTRE ()
num.sort()  // ORDENA O VETOR DO MENOR PARA O MAIOR ELEMENTO
console.log(`O vetor é: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
console.log(``)

let valores = [32, 47, 8, 12, 29]
console.log(valores)
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição [${pos}] tem o valor: ${valores[pos]}`)
}
console.log(``)

for(let pos in valores){  // PARA CADA POSIÇÃO (for(let pos) DENTRO (in) DE 'valores' -> SÓ FUNCIONA PARA VETORES
    console.log(`A posição [${pos}] tem o valor: ${valores[pos]}`)
}
console.log(``)

let pos = valores.indexOf(13) //RETORNA O INDICE DE ACORDO COM O VALOR ENTRE ()
if(pos == -1){
    console.log(`O valor nao foi encontrado`)  //RETORNA -1 POIS NAO ENCONTROU O VALOR ENTRE ()
}
else{
    console.log(`Indice onde está o valor 12: [${valores.indexOf(12)}]`)  // NESTE CASO RETORNARA O INDICE 3
}
console.log(``)


// FUNÇÕES DENTRO DE VETORES ---------------------------------------------------------------------------------------------
let valor = [1, 2, 3, 4, 5]
const op = [
    (val) => {   // SOMA OS VALORES DE UM VETOR
        let res = 0
        for(v of val){
            res += v
        }
        return res
    },

    (val) => {   // MULTIPLICA OS VALORES DE UM VETOR
        let res = 1
        for(v of val){
            res *= v
        }
        return res
    },

    (val) => {  // EXIBE TODOS OS VALORES DO VETOR
        for(v of val){
            console.log(v)
        }
    }
]

console.log(op[0](valor))