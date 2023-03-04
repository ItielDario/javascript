// PERCORRE UM VETOR ELEMENTO POR ELEMENTO ATÉ O FINAL
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']

cursos.map((elemento, indice) => {  // O MAP PASSA PARA A FUNÇÃO O ELEMENTO DA VEZ E SEU INDICE
    console.log(`Curso: ${elemento} - Posição do curso: ${indice}`)
})  
console.log('')


// EXEMPLO 01:
let cur = cursos.map((elementos, indice) => {
    return `<div> elementos </div>`
})
console.log(cur)


// MAP COM HTML ---------------------------------------------------------------------------------------------------------
//EXEMPLO 01:
// let el = window.document.getElementsByTagName('div')
// el = [...el]  // ESPALAHNDO OS ELEMENTOS
// console.log(el)

// el.map((e, i) => {
//     e.innerHTML = 'Cursos'
// })


// // // EXEMPLO 02:
// // const elem = window.document.getElementsByTagName('div')
// // const valores = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)
// // console.log(valores)


// EXEMPLO 03:
const numbers = [1, 4, 5, 9, 14, 23]

const doubledNumbers = numbers.map( num => num * 10)
console.log(doubledNumbers)
console.log('')


// EXEMPLO 04 (FAHRENHEIT PARA CELSIUS):
const fahrenheit = [ 0, 32, 45, 50, 75, 80, 120 ]

const celsius = fahrenheit.map(function (elem) {
    let res = (elem - 32) / 1.8
    return res.toFixed(0) 
})
console.log(celsius)