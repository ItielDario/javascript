// ABORDAGEM RUIM (MANEIRA ERRADA):
// var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
// var modificado = [];

// for(let i = 0; i < ingredientes.length; i++){
//     let letraInicial = (ingredientes[i].charAt(0)); // SELECIONA O CARACTER NA POSIÇÃO 0 (O PRIMEIRO CARACTER) DA STRING
//     let letraAlta = letraInicial.toUpperCase(); // TRANFORMA A LETRA EM MAÍUSCULA (CAIXA ALTA)
    
//     let restoTexto = ingredientes[i].slice(1); // CORTA O TEXTO A PARTIR DO INDICE 1
//     let palavraFeita = letraAlta + restoTexto;  // JUNTA TUDO E TRANSFORMA EM UMA PALAVRA COM A PRIMEIRA LETRA EM MAÍUSCULO

//     modificado[i] = palavraFeita;
// };

// let ordenado = modificado.sort(function(a, b){ // ORDENA O VETOR DE FORMA ALFABÉTICA
//     return a.localeCompare(b) // COMPARA 'A' COM 'B' DE ACORDO COM A LOCALIDADE DO NAVEGADOR (PT-BR)
// });  



//-----------------------------------------------------------------------------------------------------------------------------------
// ABORDAGEM BOA (MANEIRA CORRETA):
// 1 - SEPARAR EM FUNÇÕES DE ACORDO COM AS AÇÕES 
// 2 - MODULARIZAR AS FUNÇÕES (SEPARAR EM UM ARQUIVO DIFERENTE PARA PODERMOS USAR EM OUTRAS APLICAÇÕES)
// 3 - IMPORTAR AS FUNÇÕES PARA ESTE ARQUIVO (TÊM QUE COLOCAR "type="module" QUANDO CHAMAR O SCRIPT NO HTML)

import modificador from "./modificador.js"; // IMPORTA A FUNÇÃO 'CAPITALIZAR' DO "MODULAR.JS"
import ingredientes from './ingredientes.js';

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredientesCapitalizados = modificador.capitalizarNovo(ingredientesOrdenados, 'nome');
let constainerIngredientes = document.getElementById('container-ingredientes');

for(let ingrediente of ingredientesCapitalizados){  // PARA CADA 'INGREDIENTE' DE 'INGREDIENTESCAPITALIZADOS' FAÇA:
    constainerIngredientes.innerHTML += `
        <div class="ingrediente">
            <img src="./img/${ingrediente.img}" alt="">
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>
    `;
} 



// import saladas from './saladas.js'
// // var ingredientes = ['mel', 'água', 'sal', 'mostarda'];

// console.log(typeof ingredientes);
// console.log(ingredientes);
// console.log(Array.isArray(ingredientes)); // VERIFICA SE O OBJETO "INGREDIENTES" É UM ARRAY

// modificador.capitalizarNovo(ingredientes, 'nome');

// var resultadoCapitalizado = modificador.capitalizar(ingredientes);
// var resultadoOrdenado = modificador.ordenar(resultadoCapitalizado);
// var resultadoCaixaAlta = modificador.caixaAlta(ingredientes);
 
// console.log(resultadoOrdenado);
// console.log(resultadoCaixaAlta);




 











