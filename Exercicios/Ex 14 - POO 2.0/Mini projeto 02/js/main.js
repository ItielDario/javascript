// EXEMPLO PRÁTICO (CALCULAR O IMC):

// PARA IMPORTAR O AQUIVO 'MAIN.JS' DEVE CRIAR UM PACKGE.JSON (npm init), DEFINIR O ARQUIVO PRINCIPAL O 'main.js', DEFINIR O TYPO DO ARQUIVO COMO MÓDULO (type = "module") E DEFINIR NO HTML 'type = "module"'
import { Pessoa } from './api/models/Pessoa.js';

// CRIANDO UM OBJETO INDEFINIDO / CRIANDO UMA NOVA INSTANCIA
let pessoa1 = new Pessoa(); 

// ATRIBUINDO VALORES PARA O OBJETO
pessoa1._nome = 'Airton';
pessoa1._idade = 19;
pessoa1._peso = 43.5;
pessoa1._altura = 1.50;

// INSTANCIANDO OBEJTOS E JÁ DEFININDO OS VALORES DOS ATRIBUTOS (CONSTRUCTOR)
let pessoa2 = new Pessoa('Edison Maia', 40, 84.5, 1.76);   
let pessoa3 = new Pessoa('Ana', 20, 42.5, 1.41);
let pessoa4 = new Pessoa('Bia', 70, 117.7, 1.89);

// EXIBINDO OS OBJETOS
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa1.calcularImc());
console.log(pessoa2.calcularImc());
console.log(pessoa3.calcularImc());
console.log(pessoa4.calcularImc());

// EXIBINDO OS ATRIBUTOS ATRAVES DO MÉTODO 'GET' 
console.log("Nome: " + pessoa4.retornaNome);
console.log("Idade: " + pessoa4.retornaIdade);  
console.log("Peso: " + pessoa4.retornaPeso);  
console.log("Altura: " + pessoa4.retornaAltura); // SÓ CONSIGO ACESSAR A ALTURA SE USAR O MÉTODO 'GET' 
console.log("IMC: " + pessoa4.retornaImc);

// ALTERNADO OS ATRIBUTOS ATRAVES DO MÉTODO 'SET'
pessoa4.atribuiNome = 'Jorge George';
pessoa4.atribuiIdade = 39;
pessoa4.atribuiPeso = 80.0;
pessoa4.atribuiAltura = 3.40;  // NÃO DA PARA MADAR A ALTURA SE NÃO TIVER O MÉTODO 'SET'

// EXIBINDO ATRIBUTOS ALTERADOS
console.log("Mudou o nome para: " + pessoa4.retornaNome);
console.log("Mudou a idade para: " + pessoa4.retornaIdade);
console.log("Mudou o peso para: " + pessoa4.retornaPeso);
console.log("NÃO mudou a altura: " + pessoa4.retornaAltura);
console.log("Mudou o peso para: " + pessoa4.retornaImc);

// EXIBE O TOTAL DE PESSOAS QUE FORMA CRIADAS
let pessoa01 = new Pessoa()
console.log(Pessoa.totalPessoas);

// EXIBINDO CLASSIFICAÇÃO DO IMC
console.log(pessoa1.classificaImc());
console.log(pessoa2.classificaImc());
console.log(pessoa3.classificaImc());
console.log(pessoa4.classificaImc());