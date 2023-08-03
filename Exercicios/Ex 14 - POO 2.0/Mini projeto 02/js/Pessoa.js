// CLASSES SÃO MODELOS OU MOLDES DE OBJETOS 
// É FORMADA POR DUAS PARTES:
// 
//  - ATRIBUTOS -> CARACTERISTICAS 
//  - COMPORTAMENTOS -> MÉTODOS/FUNÇÕES


// EXPORT -> PERMITE QUE ESTA CLASSE SEJA IMPORTADA POR OUTROS ARQUIVOS
export class Pessoa{ // CRIA UMA CLASSE (A PARTIR DESTE MOLDE SERÃO CRIADOS OS OBJETOS)
 
    // ATRIBUTOS:
    _nome  // INDICA QUE O ATRIBUTO DEVE SER PRIVADO ("_" -> ARCORDO DA COMUNIDADE)    
    _idade  
    _peso   
    _altura
    _imc

    // STATIC -> É UM ATRIBUTO QUE PERTENCE A CLASSE E NÃO É PASSADO PARA OS OBJETOS
    static totalPessoas = 0; 

    // MÉTODOS
    constructor (nome, idade, peso, altura) {  // MÉTODO CONSTRUTOR (QUANDO FOI INSTANCIADO É EXECULTADO IMEDIATAMENTE)
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;

        this._imc = this._peso / (this._altura * this._altura);

        Pessoa.totalPessoas += 1; // CONTA O TOTAL DE OBEJTOS 'PESSOAS' QUE FORAM INSTANCIADOS
    }

    calcularImc() {  // MÉTODO COM RETORNO -> SET IMC
        return (this._peso / (this._altura * this._altura)).toFixed(2);
    }

    classificaImc() {
        let valorImc = (this._imc).toFixed(2);
        let classificacao = '';

        if(valorImc < 18.5){
            classificacao = 'Abaixo do peso';
        }
        else if(valorImc <= 24.5){
            classificacao = 'Peso normal';
        }
        else if(valorImc <= 29.9){
            classificacao = 'Sobrepeso';
        }
        else if(valorImc <= 34.9){
            classificacao = 'Obesidade grau I';
        }
        else if(valorImc <= 39.9){
            classificacao = 'Obesidade grau II';
        }
        else if(valorImc >= 40){
            classificacao = 'Obesidade grau III ou Mórbida';
        }
        else{
            classificacao = 'Peso inválido';
        }

        return classificacao;
    }

    // MÉTODOS ACESSORES (PERMITE TER ACESSO AOS ATRIBUTOS DA CLASSE)
    get retornaNome() {  // RETORNA OS DADOS DE UM ATRIBUTO
        return this._nome;
    }
    get retornaIdade() {
        return this._idade;
    }
    get retornaPeso() {
        return this._peso;
    }
    get retornaImc() {
        return this._imc;
    }
    get retornaTotalPessoa() {
        return this.totalPessoas;
    }

    set atribuiNome(novoNome){
        this._nome = novoNome;
    }
    set atribuiIdade(novaIdade){
        this._idade = novaIdade
    }
    set atribuiPeso(novoPeso) {
        this._peso = novoPeso
    }
};