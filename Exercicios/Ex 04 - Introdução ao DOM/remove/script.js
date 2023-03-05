const cursos =  ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const caixaCursos = window.document.querySelector('#caixaCursos')
const btnRemoverCurso = window.document.querySelector('#btnRemoverCurso')
 
cursos.map((elen, indice) => {
    const novoElemento = window.document.createElement('div')
    novoElemento.setAttribute('id', `c${indice}`)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = elen

    const comandos = window.document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = window.document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento) 
}) 

const radioSelecionado = () => {
    const todosRadios = [...window.document.getElementsByName('rb_curso')]

    const radioClicado = todosRadios.filter((elen, indice, vetor) => {
        return elen.checked
    })
    return radioClicado[0]  // DEIXA DE SER UM VETOR E PASSA A SER UMA VARIAVEL
} 

// REMOVE
btnRemoverCurso.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    const cursoSelecionado = rs.parentNode.parentNode   // SELECIONA O AVÔ DO 'rs'
    cursoSelecionado.remove()   // REMOVE O 'cursoSelecionado'
})


