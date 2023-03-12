// ADICIONA UM ATRIBUTO OU MÉTODO A UM OBJETO

const Nave = function(penergia){
    this.energia = penergia
    this.disparos = 100
}

const n1 = new Nave(100)

console.log(n1.vidas)
Nave.prototype.vidas = 3  // CRIA O ATRIBUTO 'vidas = 3' NO OBJETO
console.log(n1.vidas)
console.log('')

Nave.prototype.disparar = function(){ // CRIA O MÉTODO 'disparar' NO OBJETO
    if(this.disparos > 0){
        this.disparos--
    }
}
n1.disparar()
n1.disparar()
n1.disparar()
console.log(n1.disparos)
console.log('')

console.log(Nave)
console.log(n1)
console.log(n1.energia)