// COLOCANDO UMA FUNÇÃO DENTRO DE OUTRA:
const soma = (...valores) => {

    const calcular = val => {
        let res = 0
        for(let v of val){
            res += v
        }
        return res
    }
    
    return calcular(valores)  // RETORNA O RETORNO 'res' DA FUNÇÃO CALCULAR
}
console.log(soma(10, 5, 15))

