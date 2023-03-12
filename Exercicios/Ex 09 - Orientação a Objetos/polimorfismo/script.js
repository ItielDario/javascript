// PERMITE UM MÉTODO TER DIFERENTES FUNCIONALIDADE
class Carro{
    constructor(tipo, estagioTurbo){
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
        console.log(`------------------------`)
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
        if(this.tipoInfo == 1){
            super.info()
        }
        else{
            console.log(`###########################`)
            console.log(`Nome: ${this.nome}`)
            console.log(`Vel Max: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo.potencia}`)
            console.log(`###########################`)
        }
    }
}

const c1 = new Carro(3, 3)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)

c1.info()
c2.info()
c3.info()   // POSSUI FUNCIONALIDADES DIFERENTES