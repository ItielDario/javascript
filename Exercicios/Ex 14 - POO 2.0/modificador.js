// ESTE ARQUIVO PODE SER UTILIZADO PARA ORDENAR E CAPITALIZAR QUALQUER VETOR DE STRINGS. 
// COLOCAMOS EM UM MÓDULO PARA QUE QUANDO PRECISARMOS É SO IMPORTAR E TEREMOS ACESSO AS FUNÇÕES.

function funcCapitalizarNovo(colecao, atributo){
    if(typeof colecao[0] == 'object'){  // MANIPULA VETORES COM OBJETOS
        var resultado = colecao.map(function(obj) {
            let letraInicial = obj[atributo].charAt(0).toUpperCase(); 
            let restoTexto = obj[atributo].slice(1);   
            obj[atributo] = letraInicial+ restoTexto;

            return obj;
        });

        console.log(resultado)
    }
    else{ // MANIPULA VETORES COM STRINGS
        var resultado = colecao.map(function(palavra){
            let letraInicial = palavra.charAt(0); 
            let letraAlta = letraInicial.toUpperCase();  
            
            let restoTexto = palavra.slice(1); 
            let palavraFormada = letraAlta + restoTexto;  

            return palavraFormada;
        });

        console.log(resultado);
    }
};

function funcOrdenar(vetor){
    return vetor.sort(function(a, b){ 
        return a.localeCompare(b); 
    });    
}

function funcCaixaAlta(vetor){
    var modificado = [];

    for(let i = 0; i < vetor.length; i++){
        modificado[i] = vetor[i].toUpperCase();
    };

    return modificado;
}

export default {  // OBJETO LITERAL
    capitalizarNovo:  funcCapitalizarNovo,  // NOME: FUNÇÃO
    ordenar: funcOrdenar, // NOME: FUNÇÃO
    caixaAlta: funcCaixaAlta
}