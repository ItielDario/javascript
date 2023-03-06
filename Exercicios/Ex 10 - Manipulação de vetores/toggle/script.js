const cursos =  ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const caixaCursos = window.document.querySelector('#caixaCursos')
const btnCursoSelecionado = window.document.querySelector('#btnCursoSelecionado')
const btnRemoverCurso = window.document.querySelector('#btnRemoverCurso')
const btnAdicionarNovoCursoAntes = window.document.querySelector('#btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = window.document.querySelector('#btnAdicionarNovoCursoDepois')
const nomeCurso = window.document.querySelector('#nomeCurso')
let indice = 0 
 
const tirarSelecao = () => {
    const cursosSelecionados = [...window.document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((elen) => {
        elen.classList.remove('selecionado')
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = window.document.createElement('div')
    novoElemento.setAttribute('id', `c${indice}`)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso

    // TOGGLE  (ADICIONA UM TOKEN SE NAO ESTIVER E REMOVE UM TOKEN SE ESTIVER)
    novoElemento.addEventListener('click', (evt) => {
        tirarSelecao()
        evt.target.classList.toggle('selecionado')  // SE O ELEMENTO CLICADO NÃO TIVER A CLASSE 'selecionado' COLOCA A CLASSE 'selecionado' NO ELEMENTO

    })

    indice++
    return novoElemento
}

cursos.map((elen, indice) => {
    const novoElemento = criarNovoCurso(elen)
    caixaCursos.appendChild(novoElemento)
})  

const cursoSelecionado = () => {
    const cursosSelecionados = [...window.document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0] 
} 

btnCursoSelecionado.addEventListener('click', (evt) => {    
    try{  // TENTE EXECULTAR ESSES CÓDIGOS ABAIXO
        window.alert(`Curso Selecionado: ${cursoSelecionado().innerHTML}`)
    }
    catch(ex){   // SE NÃO CONSEGUIR EXECULTAR O CÓDIGO ACIMA, EXECULTE ESTE ABAIXO
        window.alert('Por favor, selecione um curso!')
    }
}) 

// REMOVE
btnRemoverCurso.addEventListener('click', (evt) => {
    const cs = cursoSelecionado()
    if(cs == undefined){  
        window.alert('Por favor, selecione um cursooooo!')
    }
    else{
        cs.remove() 
    }
    
})

// INSERT BEFORE
btnAdicionarNovoCursoAntes.addEventListener('click', (evt) => {
    try{ 
        if(nomeCurso.value != ''){
            const novoCurso = criarNovoCurso(nomeCurso.value)  // PASSA O VALOR DIGITADO PELO USUARIO COMO PARÂMETRO 
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())  // ADICIONA O 'novoCurso' ANTES DO 'cursoSelecionado'
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
    try{ 
        if(nomeCurso.value != ''){
            const novoCurso = criarNovoCurso(nomeCurso.value)  
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)  // ADICIONA O 'novoCurso' ANTES DO PROXMO IRMÃO DO 'cursoSelecionado'  (INSERE DEPOIS DE CURSO SELECIONADO)
        }
        else{
            window.alert('Por favor, digite o nome do curso!')
        }
    }
    catch(ex){   
        window.alert('Por favor, selecione um curso!')
    }
})