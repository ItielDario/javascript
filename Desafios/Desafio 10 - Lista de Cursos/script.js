const cursos =  ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const caixaCursos = window.document.querySelector('#caixaCursos')
const btnCursoSelecionado = window.document.querySelector('#btnCursoSelecionado')
const btnRemoverCurso = window.document.querySelector('#btnRemoverCurso')
const btnAdicionarNovoCursoAntes = window.document.querySelector('#btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = window.document.querySelector('#btnAdicionarNovoCursoDepois')
const nomeCurso = window.document.querySelector('#nomeCurso')
let indice = 0
 
const criarNovoCurso = (curso) => {
    const novoElemento = window.document.createElement('div')
    novoElemento.setAttribute('id', `c${indice}`)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso

    const comandos = window.document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = window.document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    indice++

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((elen, indice) => {
    const novoElemento = criarNovoCurso(elen)
    caixaCursos.appendChild(novoElemento)
})  

const radioSelecionado = () => {
    const todosRadios = [...window.document.getElementsByName('rb_curso')]

    const radioClicado = todosRadios.filter((elen) => {
        return elen.checked
    })
    return radioClicado[0]  // DEIXA DE SER UM VETOR E PASSA A SER UMA VARIAVEL
} 

btnCursoSelecionado.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    
    try{  // TENTE EXECULTAR ESSES CÓDIGOS ABAIXO

        const cursoSelecionado = rs.parentNode.previousSibling.textContent  // RETORNA O CONTEUDO DO TEXTO DO IRMÃO ANTERIOS DO PAI DE 'cursoSelecionado'

        // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent  // RETORNA O CONTEUDO DO TEXTO DO PRIMEIRO FILHO DO AVÔ DE 'cursoSelecionado'
        window.alert(`Curso Selecionado: ${cursoSelecionado}`)
    }
    catch(ex){   // SE NÃO CONSEGUIR EXECULTAR O CÓDIGO ACIMA, EXECULTE ESTE ABAIXO
        window.alert('Por favor, selecione um curso!')
    }
}) 

// REMOVE
btnRemoverCurso.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    if(rs == undefined){  // SE NÃO RETORNOU ALGUM CURSO SELECIONADO
        window.alert('Por favor, selecione um curso!')
    }
    else{
        const cursoSelecionado = rs.parentNode.parentNode   // SELECIONA O AVÔ DO 'rs'
        cursoSelecionado.remove()   // REMOVE O 'cursoSelecionado'
    }
    
})

// INSERT BEFORE
btnAdicionarNovoCursoAntes.addEventListener('click', (evt) => {
    const rs = radioSelecionado()

    try{ 
        if(nomeCurso.value != ''){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)  // PASSA O VALOR DIGITADO PELO USUARIO COMO PARÂMETRO 
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)  // ADICIONA O 'novoCurso' ANTES DO 'cursoSelecionado'
        }
        else{
            window.alert('Por favor, digite o nome do curso!')
        }
    }
    catch(ex){
        window.alert('Por favor, selecione um curso!')
    }
})

// INSERT AFTER (INSERT BEFORE NO IRMAO)
btnAdicionarNovoCursoDepois.addEventListener('click', (evt) => {
    const rs = radioSelecionado()

    try{ 
        if(nomeCurso.value != ''){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)  
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)  // ADICIONA O 'novoCurso' ANTES DO PROXMO IRMMÃO DO 'cursoSelecionado'  (INSERE DEPOIS DE CURSO SELECIONADO)
        }
        else{
            window.alert('Por favor, digite o nome do curso!')
        }
    }
    catch(ex){   
        window.alert('Por favor, selecione um curso!')
    }
})