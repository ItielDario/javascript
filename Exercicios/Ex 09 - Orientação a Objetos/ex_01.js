// SÃO BASICAMENTO VARIÁVEIS COM MUITOS VALORRES DENTRO
// UM OBJETO CRIA NOVAS FUNCIONALIDADES PARA UMA VARIAVEL, NÃO APENAS GUARDAR DADOS
// EX: carro = {marca:'ford', modelo:'ka', ano:'2015'}

//EXEMPLO 01:
// const carro = 'Ford'  ->  VARIAVEL SIMPLES
const carro = {
    marca:'Ford',    // PROPRIEDADES LITERAIS (POSSUEM VALOR PRÉ DEFINIDO) 
    modelo:'ka',     // PROPRIEDADES LITERAIS (POSSUEM VALOR PRÉ DEFINIDO)
    ano:'2015',      // PROPRIEDADES LITERAIS (POSSUEM VALOR PRÉ DEFINIDO)
    placa:'ABC-123',  // PROPRIEDADES LITERAIS (POSSUEM VALOR PRÉ DEFINIDO)

    buzina: function() {console.log('Biiiiiiiiiii!')},   // MÉTODO (PROPRIEDADE QUE TEM UMA FUNÇÃO)

    completo: function() {
        return `A marca é ${this.marca} e o modelo é ${this.modelo}`//PEGA A PROPRIEDADE 'marca/modelo' DESTE OBJETO 'this'
    }
}  
console.log(carro)   // MOSTRA O OBJETO INTEIRO
console.log(carro.ano)  // MOSTRA A PROPRIEDADE 'ano' DO OBJETO 'carro'
console.log(carro['marca'])  // MOSTRA A PROPRIEDADE 'marca' DO OBJETO 'carro'
carro.buzina()  // CHAMA A FUNÇÃO 'buzina' DO OBJETO 'carro'
console.log(carro.completo())
console.log('')


// EXEMPLO 02:
let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p = 0){
    console.log(`Engordou`)
    this.peso += p
}}

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
console.log('')