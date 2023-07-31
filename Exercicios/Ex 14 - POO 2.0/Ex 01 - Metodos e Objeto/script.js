var nome = 'Teste';

var pegarNome = function (nome, sobrenome) { // ESSA FUNÇÃO PODE SER UTILIZADA EM VARIOS OBJETOS AO MESMO TEMPO
    this.nome = nome;  // O THIS APONTA PARA O OBJETO (E ESCOPO) NA QUAL ESTÁ SENDO EXECULTADO E ACESSA SUAS PROPREDADES 
    this.sobrenome = sobrenome;
    console.log(this.nome + ' ' + this.sobrenome)

};

pegarNome();

var pessoa = {
    nome: 'Itiel',
    sobrenome: 'Dario',
    idade: 20,

    getNome: pegarNome // MÉTODO
}

var carros = {
    nome: 'Gol',
    marca: 'VW',

    getNome: pegarNome
};

pessoa.getNome(); // CHAMANDO O MÉTODO
carros.getNome();

pegarNome.call(pessoa, 'Biro', 'Virto'); // MANIPULA O VALOR DO THIS (CHAMA UM MÉTODO 'PEGARNOME' DE UM OBJETO 'PESSOA' E SUBSTITUIU TEMPORÁRIAMENTE O THIS POR 'BIRO VIRTO')
pegarNome.apply(pessoa, ['Biro', 'Virto']); // PASSA OS ARGUMENTOS COMO ARRAY (UTIL QUANDO SE TEM UM NUMERO INDEFINIDO DE ARGUMENTOS)

var exibeNome = pegarNome.bind(pessoa, 'Biro', 'Virto'); // CRIA UMA FUNÇÃO
exibeNome();