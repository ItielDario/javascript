// O SPREAD QUEBRA/ESPALHA UM VETOR E DEVOLVE ELEMENTO A ELEMENTO
let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1,...n2]  // COPIA ELEMENTO POR ELEMENTO

console.log(`n1: ${n1}`)
console.log(`n2: ${n2}`)
console.log(`n3: ${n3}`)
console.log('')


// COM OBEJETOS
const jogador1 = {nome: 'Bruno', energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: 'João', energia: 100, vidas: 5, velocidade: 80}  // PEGA OS ELEMNTOS DO JOGADOR2 E CONCATENA COM OS ELEMENTOS QUE O JOGADOR 1 TEM: 'magia:150'
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)
console.log('')

// COM FUNÇÕES
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}
let valores = [1, 5, 4, 10]   // PARA PASSAR O VETOR TEMOS QUE QUEBRAR ELE E MANDAR ELEMENTO POR ELEMENTO

console.log(soma(...valores))  //USANDO O SPREAD PARA QUEBRAR O VETOR
console.log('')


// COM O HTML
const objs1 = window.document.getElementsByTagName("div")  //RETORNA UMA COLEÇÃO DE ELEMENTOS HTML -> 'div'
const objs2 = [...window.document.getElementsByTagName("div")]  //RETORNA UM VETOR DE ELEMENTOS ->'div'

console.log(objs1)
console.log(objs2)

objs2.push('12')  // ADICIONA UM ELEMENTO QUE NAO É HTML NO FINAL DO VETOR
objs2.forEach(element => {    // PERCORRE UM VETOR
    element.innerHTML = 'Curso'  // MUDA O VALOR DO ELEMENTO
    console.log(element)   // MOSTRA OS ELEMENTOS NO CONSOLE
})

objs1.forEach(element => {   // NÃO FUNCIONA POIS É UM COLEÇÃO DE ELEMENTOS
    console.log(element)
})