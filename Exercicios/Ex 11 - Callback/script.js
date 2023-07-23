const button = document.querySelector('button');

const handleClick = () => {// ESTA ARROW FUNCTION ESTÁ AGUARDANDO PARA SER EXECULTADA (SERÁ EXECULTADA QUANDO O USUÁRIO CLICAR NO BOTÃO)
    console.log('O botão foi clicado na felicidade') 
};

button.addEventListener('click', handleClick); 
    

//----------------------------------------------------------------------------
function createButton(name, callback) {
    const body = document.querySelector('body');
    const button1 = document.createElement('button'); //CRIA UM BOTÃO
    button1.textContent = name;

    callback(button1); // EXECULTA A FUNÇÃO PASSADA POR PARÂMETRO ANTES DE INSERIR O BOTÃO NA TELA
    
    body.insertAdjacentElement("beforeend", button1); //INSERE O ELEMENTO "BUTTON1" ANTES DO FINAL NO 'BODY'
    /*
        BEFOREBEGIN -> (ANTES DO COMEÇO)
        <p>
            AFTERBEGIN -> (DEPOIS DO COMEÇO)
            <br>
            BEFOREEND -> (ANTES DO FINAL)
        </p>
        AFTEREND -> (DEPOIS DO FINAL)
    */
}

createButton('Cadastrar', (button1) => { // PASSA UM NOME E UMA FUNÇÃO (CALLBACK) POR PARÂMETRO
    button1.style.cssText = `
        background-color: red;
        font-size: 40px;
        margin-right: 10px
    `;

    button1.addEventListener('click', () => {
        console.log("aaaaaaaaaa")
    });
});

createButton('Sair', (button1) => {
    button1.style.cssText = `
        background-color: blue;
        font-size: 40px;
    `;

    button1.addEventListener('click', () => {
        console.log("bbbbbbbbbbbbbbb");
    })
});