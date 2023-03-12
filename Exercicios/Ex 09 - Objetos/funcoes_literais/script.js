const btnAdicionar = window.document.querySelector('#btn_add')
const res = window.document.querySelector('.res')
let pessoas = []

// NÃO PRECISA DO CONSTRUCTOR, OS PARÂMETROS SÃO PASSADOS PELA FUNÇÃO E OS MÉTODOS SÃO FUNÇÕES ANÔNIMAS
function Pessoa(pnome, pidade){
    this.nome = pnome,
    this.idade = pidade,

    this.getNome = function(){
        return this.nome
    },
    this.getIdade = function(){
        return this.idade
    },

    this.setNome = function (pnome){
        this.nome = pnome
    },
    this.setIdade = function(pidade){
        this.idade = pidade
    },

    this.info = function (){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`---------------------`)
    }
}

const addPessoa = () => {
    res.innerHTML = '' 
    pessoas.map((elen) => {
        const div = window.document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${elen.getNome()} <br/>Idade: ${elen.getIdade()}`
        res.appendChild(div)
    })
}

btnAdicionar.addEventListener('click', (evt) => {
    const nome = window.document.querySelector('#f_nome')
    const idade = window.document.querySelector('#f_idade')
    const p = new Pessoa(nome.value, Number(idade.value))  // INSTANCIANDO UM NOVO OBJETO
    pessoas.push(p)   
    nome.value = ''
    idade.value = ''
    nome.focus()
    console.log(pessoas)
    addPessoa()
})