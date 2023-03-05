const cursos =  ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const caixaCursos = window.document.querySelector('#caixaCursos')
const btnCursoSelecionado = window.document.querySelector('#btnCursoSelecionado')

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

// FILTER
const radioSelecionado = () => {
    const todosRadios = [...window.document.getElementsByName('rb_curso')]

    const radioClicado = todosRadios.filter((elen, indice, vetor) => {
        return elen.checked
    })
    return radioClicado[0]  // DEIXA DE SER UM VETOR E PASSA A SER UMA VARIAVEL
} 

btnCursoSelecionado.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    const cursoSelecionado = rs.parentNode.previousSibling.textContent  // RETORNA O CONTEUDO DO TEXTO DO IRMÃO ANTERIOS DO PAI DE 'cursoSelecionado'

    // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent  // RETORNA O CONTEUDO DO TEXTO DO PRIMEIRO FILHO DO AVÔ DE 'cursoSelecionado'
    window.alert(`Curso Selecionado: ${cursoSelecionado}`)
}) 