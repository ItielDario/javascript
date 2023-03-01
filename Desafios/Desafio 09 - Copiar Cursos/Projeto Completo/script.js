const caixa1 = window.document.querySelector('#caixa1')
const caixa2 = window.document.querySelector('#caixa2')
const btn = window.document.querySelector('#btn_transferir')
const todosCursos = [...window.document.querySelectorAll('.curso')]

todosCursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const curso = evt.target  // 'evt.target' -> RETORNA O ELEMENTO QUE ACIONOU O EVENTO E GUARDA DENTRO DE 'curso'
        curso.classList.toggle('destaque')  // 'toggle' -> VERIFICA SE O ELEMENTO CURSO TEM A CLASSE 'destaque'. SE NÃO TIVE ADICIONA E SE TIVER REMOVE
    })
})

btn.addEventListener('click', () => {
    const cursosSelecionados = [...window.document.querySelectorAll('.destaque')]  // SELECIONA TODOS OS ELEMENTOS COMA CLASSE 'destaque'
    const cursosNaoSelecionados = [...window.document.querySelectorAll('.curso:not(.destaque)')]  // DOS ELEMENTOS QUE POSSUEM A CLASSE 'curso' SELECIONE TODOS OS ELEMENTOS QUE NÃO TEM A CLASSE 'destaque'
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)  // PEGA O ELEMENTO SELECIONADO E COLOCA NA 'caixa2'
    })

    cursosNaoSelecionados.map((el) => {
        caixa1.appendChild(el)  
    })

})