const red = window.document.querySelector('button#red')
const yellow = window.document.querySelector('button#yellow')
const green = window.document.querySelector('button#green')
const auto = window.document.querySelector('button#auto')
const img = window.document.querySelector('img#image')
var controlador

red.addEventListener('click', clickRed)
yellow.addEventListener('click', clickYellow)
green.addEventListener('click', clickGreen)
auto.addEventListener('click', clickAuto)

function clickRed(){
    img.src = 'img/vermelho.png'
    controlador = false  
}

function clickYellow(){
    img.src = 'img/amarelo.png'
    controlador = false
}

function clickGreen(){
    img.src = 'img/verde.png'
    controlador = false
}

function controladorVermelho(){
    if(controlador){   // QUANDO O USUARIO CLICAR EM ALGUM BOTAO ('vermelho', 'amarelo', 'verde') PARA O LOOP
        img.src = 'img/vermelho.png'
        setTimeout(controladorAmarelo, 1000)  //ESPERA 1 SEGUNDO E DEPOIS EXECULTA A FUNÇÃO 'controladorVerde'
    } 
}

function controladorAmarelo(){
    if(controlador){
        img.src = 'img/amarelo.png'
        setTimeout(controladorVerde, 1000)  //ESPERA 1 SEGUNDO E DEPOIS EXECULTA A FUNÇÃO 'controladorAmarelo'
    }
}

function controladorVerde(){
    if(controlador){
        img.src = 'img/verde.png'
        setTimeout(controladorVermelho, 1000) //ESPERA 1 SEGUNDO E DEPOIS EXECULTA A FUNÇÃO 'controladorVermelho'
    }
}

function clickAuto(){
    controlador = true
    controladorVermelho()  // LOOP
}

// BUG: QUANDO O USUÁRIO CLICA MAIS DE UMA VEZ EM SEGUIDA FICA GERANDO MAIS LOOPS