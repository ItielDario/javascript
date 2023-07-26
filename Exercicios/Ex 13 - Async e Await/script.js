// ASYNC -> CRIA FUNÇÕES ASSINCRONA (FUNÇÕES QUE REALIZAM OPERAÇÕES ASSINCRONAS DE FORMA ORGANIZADA)
// AWAIT -> É USADO DENTRO DE UMA OPERAÇÃO ASSINCRONA. É USADL PARA ESPERAR A CONCLUSÃO DE UMA PROMISE

// SINTAXE:
function primeiraFuncao() {

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Esperou isso aqui");
            resolve(); // RETORNA A FUNÇÃO COMO RESOLVIDA
        }, 1000);
    });
};

async function segundaFuncao() {  // FUNÇÃO ASSINCRONA (GERENCIA PROMISES)
    console.log("Iniciou");

    // primeiraFuncao(); -> CONSOLE: "Iniciou" -> "Terminou" -> "Esperou isso aqui"

    await primeiraFuncao(); // ESPERA A FUNÇÃO RETORNAR A PROMISSE PARA EXECULTAR O PROXIMO COMANDO. CONSOLE: "Iniciou" ->  "Esperou isso aqui" -> "Terminou"

    console.log("Terminou");
};

segundaFuncao();


// EXEMPLO PRÁTICO:
function getUser(id) {

    return fetch(`https://reqres.in/api/users?id=${id}`) //REQUISIÇÃO ASSINCRONA (TEMPO INDEFINIDO)
    .then(data => data.json())
    .catch(erro => console.log("Algo deu errado! ", erro));
};

async function exibeNome(id){

    try{ // TENTE EXECULTAR
        const user = await getUser(id);

        console.log(`O nome do usuário é: ${user.data.first_name}`);
    }
    catch (err){ // SE NÃO CONSEGUIR EXECULTAR
        console.log(`AOOOOOO CASSINÃO ${erro}`);
    }    
};

exibeNome(3);