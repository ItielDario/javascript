const btnAdicionar = window.document.querySelector('#btn_add')
const res = window.document.querySelector('.res')
let pessoas = []

class Pessoa{
    constructor(pnome, pidade){
        this.nome = pnome
        this.idade = pidade
    }

    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }

    setNome(pnome){
        this.nome = pnome
    }
    setIdade(pidade){
        this.idade = pidade
    }

    info(){
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