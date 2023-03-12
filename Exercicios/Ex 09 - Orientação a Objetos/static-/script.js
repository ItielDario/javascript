// UTILIZADO PARA INVOCAR UM MÉTODO OU ATRIBUTO SEM INSTANCIAR UM OBJETO
class Npc{
    static alerta = false  // ESSE ATRIBUTO PERTENCE SOMENTE DA CLASSE, NÃO É POSSIVEL ACESSAR EM UM OBJETO

    constructor(penergia){
        this.energia = penergia
    }

    info = function() {
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta ? 'Sim' : 'Não')}`)  // SELECIONA O 'alerta' DA CLASSSE 'Npc'
        console.log(`----------------`)
    }

    static alertar = function(){  // ESSE MÉTODO PERTECE SOMENTE DA CLASSE, NÃO É POSSIVEL ACESSAR EM UM OBJETO
        Npc.alerta = false
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.alerta = true  // MUDA O 'alerta' DA CLASSE E TODOS OS 'Npc' PASSAM A TER 'aleerta = true'
Npc.alertar()  // TODOS OS 'Npcs' RECEBEM 'alertar = false' 

// console.log(npc1.alertar()) // ERRO, ESSE MÉTODO NÃO PODE SER ACESSADO POR UM OBJETO
// console.log(npc1.alerta) // UNDEFINED, ESSE ATRIBUTO NÃO PODE SER ACESSADO POR UM OBJETO
console.log()
npc1.info()
npc2.info()
npc3.info()