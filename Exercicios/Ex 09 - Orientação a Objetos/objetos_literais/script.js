/*
const btn_add = window.document.querySelector('#btn_add') 

const Pessoa = {
    nome: 0,
    idade: 0,

    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },

    setNome:function(nome){
        this.nome = nome
    },
    setIdade:function(idade){
        this.idade = idade
    }
}

const createBox = (nome, idade) => {
    const res = window.document.querySelector('.res')
    const div = window.document.createElement('div')
    div.setAttribute('class', 'pessoa')

    const p = Pessoa
    p.setNome(nome)
    p.setIdade(idade)
    div.innerHTML = `Nome: ${p.getNome()} <br/>Idade: ${p.getIdade()}`

    res.appendChild(div)
}

btn_add.addEventListener('click', (evt) => {
    const nome = window.document.querySelector('#f_nome')
    const idade = window.document.querySelector('#f_idade')
    createBox(nome.value, idade.value)
})
*/


// JSON ------------------------------------------------------------------------------------------------------------------
// O JSON ESTURA DADOS EM FORMA DE TEXTO E PERMITE A TROCA DE DADOS ENTRE APLICAÇÕES
const People = { // OBJETO
    nome: 'Bruno',
    canal: 'Cursos Online',
    curso: 'Javascript',
    aulas: {
        aula01: 'Introdução',
        aula02: 'Variáveis',
        aula03: 'Condicional'
    }
} 

const string_pessoa = '{"nome":"Bruno","canal":"Cursos Online","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}' // STRING

const string_json_pessoa = JSON.stringify(People) // CONVERTE O OBJETO EM UMA STRING JSON

const objeto_json_pessoa = JSON.parse(string_pessoa)  // CONVERTE UMA STRING JSON EM UM OBJETO


console.log(People)
console.log(string_json_pessoa)
console.log(objeto_json_pessoa)



