// A CLASSE DETERMINA O ESTADO E O COMPORTAMENTO DE UM DETERMINADO OBJETO
// EXEMPLO 01:
class Pessoa{  // CRIANDO UMA CLASSE
    constructor(pnome){  // É AUTOMÁTICAMENTE CHAMADO QUANDO SE INSTANCIA UM OBJETO DESSA CLASSE
        this.nome = pnome // CRIA A PROPRIEDADE 'nome' E ATRIBUI O VALOR PASSADO PELO PARÂMETRO
    }
}

let p1 = new Pessoa('Bruno')  // INSTANCIANDO UM OBJETO DA CLASSE PESSOA E PASSA O PARÂMETRO 'Bruno' PARA O CONSTRUTOR
let p2 = new Pessoa('Jorge')  
console.log(p1.nome)
console.log(p2.nome)
console.log('')


// EXEMPLO 02:
class Carro{
    cor = 'Preto'   // PROPRIEDADE

    constructor(pnome, ptipo){
        this.nome = pnome

        if(ptipo == 1){
            this.tipo = 'Esportivo'
            this.velMax = 300
        }
        else if(ptipo == 2){
            this.tipo = 'Utilitário'
            this.velMax = 100
        }
        else if(ptipo == 3){
            this.tipo = 'Passeio'
            this.velMax = 160
        }
        else{
            this.tipo = 'Militar'
            this.velMax = 180
        }
    }

    info(){  // IMPRIME AS PROPRIEDADAS DO CARRO
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Max: ${this.velMax}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`--------------------------`)
    }

    // MÉTODOS GET
    getNome(){  // RETORNA
        return this.nome
    }
    getTipo(){  // RETORNA
        return this.tipo
    }
    getVelMax(){  // RETORNA
        return this.velMax
    }
    getInfo(){  // RETORNA UM ARRAY
        return [this.nome, this.tipo, this.velMax]
    }

    // MÉTODOS SET
    setNome(pnome){  // ALTERA
        this.nome = pnome
    }
    setTipo(ptipo){  // ALTERA
        this.tipo = ptipo
    }
    setVelMax(pVelMax){  // ALTERA
        this.velMax = pVelMax
    }
}

let c1 = new Carro('Corsa', 1)  // INSTACIA UM NOVO OBJETO DA CLASSE 'Carro'
let c2 = new Carro('Super Luxo', 2)
let c3 = new Carro('Bombadão', 5)
let c4 = new Carro('Carrego tudo', 3)

c1.setNome('Ferrari')
c1.setVelMax('50')
c1.cor = 'Amarelo'
c1.info()
