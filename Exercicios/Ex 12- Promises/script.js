// O JAVASCRIPT É SIGLE THREAD (É PROCESSADO LINHA POR LINHA)
// IO NÃO BLOQUEANTE, OU SEJA, ASSINCRONO (CONSEGUE EXECULTAR TAREFAS ENQUANTO AGUARDA RESPOSTAS DAS OPERAÇÕES)

// AS PROMISSES SÃO FUNÇÕES PARA TER CONTROLE DAS OPERAÇÕES ASSINCRONAS
// COMO O JAVASCRIPT FUNCIONA:

console.log('Primeiro');

setTimeout(function() {  // O BLOWSER ADICIONA ESTE COMANDO EM UMA FILA E AVISANDO QUANDO PASSAR 1 SEGUNDO
    console.log('Segundo');
}, 1000); // DEPOIS DE 1 SEGUNDO EXECULTE A FUNÇÃO 

console.log('Terceiro');
console.log('Quarto');
console.log('Quinto');

setTimeout(function() {  // SE ESTIVEREM COM O MESMO VALOR ESTE FICARÁ NA 2º DA FILA
    console.log('Sexto');
}, 1000);

console.log('Sétimo');
console.log('Oitavo');


// ----------------------------------------------------------------
/* UMA PROMISSE POSSUI 4 ESTADOS:

    - PENDENTE -> QUANDO ABACA FAZ UMA REQUISIÇÃO
    - REALIZADA -> QUANDO DA TUDO CERTO
    - REJEITADO -> QUANDO DÁ ALGUM PROBLEMA
    - ESTABELECIDA -> É O ESTADO FINAL (REALIZADA OU REJEITADA)
*/


function jaRealizada(){  // A FUNÇÃO RETORNA UMA PROMESSA (TRATA A OPERAÇÃO E DÁ UMA RESPOSTA)
    return Promise.resolve('Hello World!');  // UMA FUNÇÃO QUE RETORNA UMA PROMESSA 'RESOLVIDA'
};

function jaRealizada2 (text) {
    return Promise.resolve(text);
};

// O 'THEN' É CHAMADO DEPOIS QUE UMA PROMESE É RESOLVIDA
jaRealizada().then(function(text){ // QUANDO FOR RESOLVIDA EXECULTE A FUNÇÃO (CALLBACK)
    console.log('Promise resolvida', text);
});

function jaRejeitada(){
    return Promise.reject('Fui rejeitada');
};

// O 'CATHC' TRATA A REJEIÇÃO / ERRO
jaRejeitada().catch(function() {
    console.log('Rejeitado!');
});


// TRABALHADO COM PROMISSE ASSINCRONA
function promiseTrabalhada(){
    return new Promise(function(resolve, reject){ // SEMPRE RETORNA UMA PROMISE
        setTimeout(function(){
            resolve('Olá programador'); 
        },1000);
    });
};

promiseTrabalhada().then(function(mensagem){
    console.log(mensagem);
});



// EXEMPLO PRÁTICO: CANSULTA DE CEP
fetch('https://viacep.com.br/ws/19160000/json/').then(function(retornoDoFetch){
    retornoDoFetch.json().then(function(endereco){
        console.log(endereco);
    });
});

// EXPLICAÇÃO: O FETCH É UM MÓDULO DO JS QUE FAZ UMA BUSCA EM UMA API E RETORNA UMA PROMISSE, DEPOIS QUE A PROMISE ESIVER RESOLVIDA CHAMA A FUNÇÃO 'JSON()' PARA TRANSFORMAR O RETORNO EM UM JSON, DEPOIS O RETORNO FOR TRANFORMADO E RESOLVIDO RETORNA O ENDERECO E CHAMA A FUNÇAO QUE RECEBE ESSE ENDEREÇO POR PARAMETRO E EXIBE NO CONSOLE. 

const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const cepDigitado = document.querySelector('#cep').value;

    function pegaCEP (dados){
        return dados.json();
    };

    function exibeEndereço (endereco){
        document.write('Logradouro: ' + endereco.logradouro);
    };

    function trataErro (erro){
        document.write('Aconteceu algum erro! ', erro)
    }

    fetch("https://viacep.com.br/ws/" + cepDigitado + "/json/")
    .then(pegaCEP)
    .then(exibeEndereço)
    .catch(trataErro)
    .finally(function() { // SEMPRE VAI SER EXECULTADO
        console.log('Sempre execultado')
    });
});



// ARRAY DE PROMISES QUE SÃO EXECULTADA AO MESMO TEMPO MAS POREM RETORNAR EM MOMENTOS DIFERENTES
Promise.all([
    jaRealizada(), // SEMPRE RETORNA NA ORDEM QUE PASSA (1º)
    jaRealizada2('Aoba') // (2º)
]).then(function(promisesResolvidas){ // QUANDO TODAS AS PROMISES RETORNAREM CHAMA A FUNÇÃO
    console.log(promisesResolvidas)
})  


Promise.race([ // RETORNA O VALOR DA PRIMEIRA PROMISE RESILVIDA OU REJEITADA
    promiseTrabalhada(),    
    jaRealizada2('PRIMEIRA PROMISE RESOLVIDA!'),
    jaRejeitada()
]).then(function(primeiraResolvida){ 
    console.log(primeiraResolvida);
}), function(primeiraRejeitada){
    console.log(primeiraRejeitada);
} 

