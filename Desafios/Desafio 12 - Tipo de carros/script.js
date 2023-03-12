const f_nome = window.document.querySelector('#f_nome')
const f_portas = window.document.querySelector('#f_portas')
const f_tipoMilitar = window.document.querySelector('#f_tipoMilitar')
const f_tipoNormal = window.document.querySelector('#f_tipoNormal')
const f_blindagem = window.document.querySelector('#f_blindagem')
const f_municao = window.document.querySelector('#f_municao')
const btn_add = window.document.querySelector('#btn_adicionar')
const carros = window.document.querySelector('.carros')

let a_carros = []

const removerCarro = (quem) => {
    a_carros = a_carros.filter((el) => {
        return el.nome != quem
    })
}

f_tipoMilitar.addEventListener('click', (evt) => {
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
})

f_tipoNormal.addEventListener('click', (evt) => {
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute('disabled', 'disabled')
    f_municao.setAttribute('disabled', 'disabled')
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ''
    a_carros.forEach((c) => {
        const div = window.document.createElement('div')
        const btn = window.document.createElement('button')

        div.setAttribute('class', 'carro')
        div.setAttribute('data-nome', c.nome)   // É ACESSADO PELO 'dataset'
        div.innerHTML = `Nome: ${c.nome} <br/>`
        div.innerHTML += `Portas: ${c.porta} <br/>`
        div.innerHTML += `Blindagem: ${c.blindagem} <br/>`
        div.innerHTML += `Munição: ${c.municao} <br/>`
        div.innerHTML += `Cor: ${c.cor} <br/>`

        btn.innerHTML = 'Remover'
        btn.setAttribute('id', 'btn_remover')
        btn.addEventListener('click', (evt) => {
            const quemRemover = evt.target.parentNode.dataset.nome // DATASET -> ACESSA O ATRIBUTO CRIADO COM 'data-nome'
            removerCarro(quemRemover)
            gerenciarExibicaoCarros()
        })

        carros.appendChild(div)
        div.appendChild(btn)
    })
    console.log('a')
}

btn_add.addEventListener('click', (evt) => {
    if(f_tipoNormal.checked){
        const carro = new Carro(f_nome.value, f_portas.value) 
        a_carros.push(carro)
    }
    else{
        const carro = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(carro)
    }
    gerenciarExibicaoCarros()
})

class Carro{   // CLASSE PAI (SERVE DE BASE PARA OUTRAS CLASSES)
    constructor(pnome, pportas){
        this.nome = pnome
        this.porta = pportas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function(){
        this.ligado = true
    }

    desligar = function(){
        this.ligado = false
    }

    setCor = function(pcor){
        this.cor = pcor
    }
}

class Militar extends Carro{   // A CLASSE 'Militar' VAI HERDAR A CLASSE 'Carro'

    // TODAS OS ATRIBUTOS E MÉTODOS SÃO PASSADOS PARA ESTA CLASSE

    constructor(pnome, pportas, pblindagem, pmunicao){
        super(pnome, pportas)  // CHAMA O ELEMENTO 'constructor' DA CLASSE PAI E PASSA OS PARÂMETROS
        
        this.blindagem = pblindagem
        this.municao = pmunicao
        this.setCor('Verde')  // DEFINE A COR 'Verde' PARA TODOS OS CARROS DA CLASSE MILITAR AUTOMÁATICAMENTE
    }

    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}