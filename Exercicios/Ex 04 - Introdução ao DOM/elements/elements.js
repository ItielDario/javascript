const caixa1 = window.document.querySelector('#caixa1')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']


cursos.map((elen, indice) => {  // PARA CADA ELEMENTO DENTRE DE 'cursos'
    
    // CREATE ELEMENTS
    const novoElementoDiv = window.document.createElement('div')  // CRIA UM NOVO ELEMENTO 'div' NA MÉMORIA
    novoElementoDiv.innerHTML = elen  // COLOCA UM TEXTO DENTRO DO ELEMENTO
    novoElementoDiv.setAttribute('class', 'curso c1')   // ADICINA UM ATRIBUTO 'class' COM OS NOMES 'curso' E 'c1'
    novoElementoDiv.setAttribute('id', `c${indice+1}`)  // ADICIONA UM ATRIBUTO 'id' COM O NOME 'c(indice+1)'
    caixa1.appendChild(novoElementoDiv) // ANEXA DENTRO DA 'caixa1' O NOVO ELEMENTO 'novoElemento'


    // REMOVE ELEMENTS
    const btn_lixeira = window.document.createElement('img')
    btn_lixeira.setAttribute('src', './lixeira.png')
    novoElementoDiv.appendChild(btn_lixeira)
    btn_lixeira.style.width = '20px'
    btn_lixeira.style.cursor = 'pointer'

    btn_lixeira.addEventListener('click', (evt) => {   //   'evt' = 'btn_lixeira' NAO É FILHO DA 'caixa1'
        const elementoClicado = evt.target.parentNode  // SELECIONA O PAI DE 'btn_lixeira' = <div class='curso c1' id='c(index)'> (FILHO DE 'caixa1')
        caixa1.removeChild(elementoClicado)   // REMOVE DA DIV PAI 'caixa1' O FILHO QUE FOI CLICADO 'elementoClicado'
    })
})



