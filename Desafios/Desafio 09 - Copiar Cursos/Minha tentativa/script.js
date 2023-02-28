const cursos1 = [...window.document.querySelectorAll('.c1')]  // COLOCA OS ELEMENTOS EM UM VETOR
const botao = window.document.querySelector('#btn_copiar')
let cursosClicados = []

cursos1.map(function (elen){  // PASSA POR TODOS OS ELEMENTOS DO VETOR
    elen.addEventListener('click', (evt) => {  // QUANDO ALGUM ELEMENTO FOR CLICADO DISPARA A FUNÇÃO
        cursosClicados.push(elen.innerText)  // PEGA APENAS O CONTEUDO DE 'elen'
        elen.classList.add('destaque')  // ADICIONA A CLASSE 'destaque' NO ELEMENTO CLICADO
    })
})

botao.addEventListener('click', copiar)

function copiar(){
    const cursos2 = window.document.querySelector('#caixa2')
    cursos2.innerHTML = '' 
    
    cursosClicados.map(function (elen) {  
        var cursos2Item = window.document.createElement('div')  // CRIANDO UM ELEMNTO DIV
        cursos2Item.classList.add('curso', 'c2')  // ADICIONANDO AS CLASSES
        cursos2Item.innerText = elen
        cursos2.appendChild(cursos2Item)
    })
}