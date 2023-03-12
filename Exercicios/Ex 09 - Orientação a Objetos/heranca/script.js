// HERANÇA É UMA CLASSE QUE HERDA OUTRA CLASSE

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

class Utilitario extends Carro{

    // TODAS OS ATRIBUTOS E MÉTODOS SÃO PASSADOS PARA ESTA CLASSE

    constructor(pnome, pportas, plugares){
        super(pnome, pportas)

        this.lugares = plugares
    }
}

const c1 = new Carro('Normal', 4)
c1.ligar()
c1.setCor('Preto')

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.porta}`)
console.log(`Ligado: ${c1.ligado ? 'Sim' : 'Não'}`) // SE 'ligado = true' RETORNA 'Sim' : SE 'ligado = false' RETORNA 'Não'
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log(`-------------------------------`)


// INSTANCIANDO UM OBJETO APARTIR DE UMA CLASSE HERANÇA ------------------------------------------------------------------

const c2 = new Militar('Lutador', 1, 100, 10) 
c2.setCor('Azul') 
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.porta}`)
console.log(`Ligado: ${c2.ligado ? 'Sim' : 'Não'}`) 
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log(`-------------------------------`)