// SERVE COMO BASE PARA OUTRAS CLASSES E NÃO PODE SER INSTANCIADA POR UM OBJETO

class CarroPadrao{  // CLASSE ABSTRACT
    constructor(){
        if(this.constructor === CarroPadrao){  // VERIFICA SE FOI INSTANCIADA POR UM OBJETO
            throw new TypeError ('Esta classe não pode ser instanciada') // IMPRIME UMA MENSAGEM DE ERRO NO CONSOLE (index)
        }
        if(this.ligar === undefined){  // VERIFICA SE O MÉDOTO LIGARFOI IMPLEMENTADO
            throw new TypeError ('É obrigatório implementar o método ligar')
        }
        if(this.desligar === undefined){  // VERIFICA SE O MÉDOTO LIGARFOI IMPLEMENTADO
            throw new TypeError ('É obrigatório implementar o método desligar')
        }

        // SÓ VAI EXECULTAR ISSO SE PASSAR POR TODAS AS CONDIÇÕES
        this.rodas = 4
        this.portas = 4
        this.ligado = false
        
    }
}

class Carro extends CarroPadrao{ // CLASSE DO TIPO HERANCA
    constructor(tipo, estagioTurbo){
        super()

        this.turbo = new Turbo(estagioTurbo) // INSTANCIA UM 'OBJETO'
        if(tipo == 1){
            this.velMax = 120
            this.nome = 'Normal'
        }
        else if(tipo == 2){
            this.velMax = 160
            this.nome = 'Esportivo'
        }
        else if(tipo == 3){
            this.velMax = 200
            this.nome = 'Super Esportivo'
        }
        this.velMax += this.turbo.potencia  // CHAMA O 'constructor' DA CLASSE 'turbo'
    }

    info(){
        console.log(`${this.nome}`)
        console.log(`${this.velMax}`)
        console.log(`${this.turbo.potencia}`)
        console.log(`${this.rodas}`)
        console.log(`${this.portas}`)
        console.log(`${this.ligado}`)
        console.log(`------------------------`)
    }

    ligar(){  // IMPLEMENTADO O MÉTODO LIGAR
        this.ligado = true
    }
    desligar(){  // IMPLEMENTADO O MÉTODO DESLIGAR
        this.ligado = false
    }
}

class Turbo{
    constructor(e){
        if(e == 0){
            this.potencia = 0
        }
        else if(e == 1){
            this.potencia = 50
        }
        else if(e == 2){
            this.potencia = 75
        }
        else if(e == 3){
            this.potencia = 100
        }
    }
}

class CarroEspecial extends Carro{ // CALSSE DO TIPO HERANÇA
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.velMax = 300 + this.turbo.potencia
        this.nome = 'Carro Especial'

        this.tipoInfo = 1
    }

    info(){  // POLIMORFISMO -> (O MESMO MÉTODO DA CLASSE PAI, NA CLASSE FILHO POSSUI MAIS DE UMA FUNCIONALIDADE)
        if(this.tipoInfo == 0){
            super.info()
        }
        else{
            console.log(`###########################`)
            console.log(`Nome: ${this.nome}`)
            console.log(`Vel Max: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo.potencia}`)
            console.log(`Rodas: ${this.rodas}`)
            console.log(`Portas: ${this.portas}`)
            console.log(`Ligado: ${this.ligado}`)
            console.log(`###########################`)
        }
    }
}

const c1 = new Carro(3, 3)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)
// const c4 = new CarroPadrao()  // NÃO PODE SER INSTANCIADO

c1.info()
c2.info()
c3.info()   