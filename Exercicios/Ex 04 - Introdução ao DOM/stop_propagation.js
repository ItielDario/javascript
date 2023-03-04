const caixa1 = window.document.querySelector('#caixa1')
const btn_c1 = window.document.querySelector('#c1')
const cursos = [...window.document.querySelectorAll('.curso')]
const c1_2 = window.document.querySelector('#c1_2')

caixa1.addEventListener('click', (evt) => {  // TODOS OS ELEMENTOS DE 'caixa1' DISPARA O EVENTO
    console.log('Clicou!')
})


cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.stopPropagation()  // O ELEMNTO NAO PROPAGA/DISPARA O EVENTO ACIMA
    })
})



console.log(window.document.getRootNode())  // RETORNA A RAIZ DO DOCUMENTO (NÓ RAIZ)
console.log(caixa1.children)  // RETORNA OS ELEMENTOD FILHOS DA 'caixa1'
console.log(caixa1.firstElementChild)  // RETORNA O PRIMEIRO FILHO DA 'caixa1'
console.log(caixa1.lastElementChild)   // RETORNA O ULTIMO FILHO DA 'caixa1'
console.log(caixa1.children[1])  // RETORNA O 2 FILHO DA 'caixa1' 

console.log(btn_c1.children.length > 0 ? 'Possui filhos!' : 'NÃO possui filhos!')   // VERIFICA SE UM ELEMENTO TEM FILHOS

console.log(caixa1.lastElementChild.innerHTML = 'TESTE')  // MUDANDO O TEXTO DO ULTIMO ELEMENTO FILHO DE 'caixa1'
console.log(caixa1.children[1].innerHTML = 'CURSO')  // MUDANDO O TEXTO DO SEGUNDO ELEMENTO FILHO DE 'caixa1'

console.log(c1_2.parentElement)   // RETORNA A DIV PAI DE 'c1_2' = (c1_1)
console.log(c1_2.parentNode.parentNode)   // RETORNA A DIV AVÔ DE 'c1_2' (c1)
console.log(c1_2.parentNode.parentNode.parentNode.children[4])  // RETORNA O 4 IRMÃO DO AVO DE 'c1_2' (c5)console.log()