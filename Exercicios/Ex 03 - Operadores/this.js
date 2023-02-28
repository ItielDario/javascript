// USANDO O THIS COM UMA FUNÇÃO ANONIMA (dados.anonimo)
function alun(nome, nota){
    // let nome = nome
    this.nome = nome  // this.nome É UMA VARIÁVEL DECLARADA PARA A FUNÇÃO 'aluno' QUE RECEBE O VALOR DO PARÂMETRO 'nome'
    this.nota = nota

    this.dados_anonimo = function (){
        setTimeout(function(){   // FUNÇÃO ANÔNIMA
            console.log(this.nome)  // USANDO FUNÇÕES ANÔNIMAS O THIS NÃO CONSEGUE RECEBER O VALOR DO PARÂMETRO
            console.log(this.nota)
        }, 2000)
    }
}
const alu1 = new alun('Bruno', 100)
alu1.dados_anonimo()


// USANDO O THIS COM UMA ARROW FUNCTION
function aluno(nome, nota){
    // let nome = nome
    this.nome = nome  // this.nome É UMA VARIÁVEL DECLARADA PARA A FUNÇÃO 'aluno' QUE RECEBE O VALOR DO PARÂMETRO 'nome'
    this.nota = nota

    this.dados_arrow = function (){
        setTimeout(() => {    // ARROW FUNCTION
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}
const alu2 = new aluno('Bruno', 100)
alu2.dados_arrow()