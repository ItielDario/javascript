const quest01 = {
    num: 1,
    title: 'Qual a capital do Brasil?',
    resp1: 'Rio de Janeiro',
    resp2: 'Brasília',
    resp3: 'São Paulo',
    certa: 'Brasília'
};
const quest02 = {
    num: 2,
    title: 'Qual maior pais do mundo?',
    resp1: 'Rússia',
    resp2: 'Itália',
    resp3: 'Japão',
    certa: 'Rússia'
};
const quest03 = {
    num: 3,
    title: 'Quem é o autor de "O Principe"?',
    resp1: 'Maquiavel',
    resp2: 'Júlio Cezar',
    resp3: 'Alexandre o Grande',
    certa: 'Maquiavel'
};
const quest04 = {
    num: 4,
    title: 'Qual o maior animal do mundo?',
    resp1: 'Girafa',
    resp2: 'Elefante',
    resp3: 'Baleia',
    certa: 'Baleia'
};
const quest05 = {
    num: 5,
    title: 'Em que ano o Brasil foi descoberto?',
    resp1: '1400',
    resp2: '1500',
    resp3: '1600',
    certa: '1500'
};

const vetorObj = [quest01, quest02, quest03, quest04, quest05];
let selecionarQuestao = -1;
let evento;
let pontos = 0;

document.onload(exibirQuiz(quest01));

function exibirResultado(){
    const containerQuiz = document.querySelector('.container-quiz');
    const banner = document.querySelector('.banner');
    const contQuestionText = document.querySelector('.cont-question-text');
    
    containerQuiz.parentNode.removeChild(containerQuiz); // SELECIONA A DIV PAI (HEADER) E PEDE PARA REMOVER O FILHO (CONTAINERQUIZ) DA DIV PAI
    banner.innerHTML = 'Fim de jogo!';
    contQuestionText. innerHTML = `Você conseguiu ${pontos} pontos`;
}

function verificarQuestao(){
    const obj = vetorObj[selecionarQuestao];
    const respCerta = obj.certa;

    if(evento == respCerta){
        pontos += 10;
    }
}

function enviarQuestao(evt){
    evento = evt.target.innerHTML;

    verificarQuestao(); 

    if(selecionarQuestao < 4){
        const banner = document.querySelector('.banner');
        banner.innerHTML = `Pontos ${pontos}`

        exibirQuiz(vetorObj[selecionarQuestao + 1]);
    }
    else{
        exibirResultado();
    }
}

function proximaQuestão(btn1, btn2, btn3){
    const allBtn = document.querySelectorAll(".btn-options");
    selecionarQuestao++;

    btn1.addEventListener('click', enviarQuestao);
    btn2.addEventListener('click', enviarQuestao);
    btn3.addEventListener('click', enviarQuestao);
};

function exibirQuiz(obj){
    const titleQuiz = document.querySelector(".text-question");
    const numberQuiz = document.querySelector(".number-question");
    const btnQuest01 = document.querySelector("#btn-1");
    const btnQuest02 = document.querySelector("#btn-2");
    const btnQuest03 = document.querySelector("#btn-3");
    const contQuestions = document.querySelector(".cont-question-text");
    
    numberQuiz.innerHTML = obj.num;
    titleQuiz.innerHTML = obj.title;
    btnQuest01.innerHTML = obj.resp1;
    btnQuest02.innerHTML = obj.resp2;
    btnQuest03.innerHTML = obj.resp3;
    contQuestions.innerHTML = `Questão ${obj.num} de 5`;   

    proximaQuestão(btnQuest01, btnQuest02, btnQuest03);
}