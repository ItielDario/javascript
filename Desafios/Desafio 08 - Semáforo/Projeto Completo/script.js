const img = window.document.querySelector('#img')
const buttons = window.document.querySelector('#buttons')
let colorIndex = 0
intervalId = null
 
const trafficLght = (evt) => {  // RECEBE O BOTÃO QUE FOI CLICADO
    console.log(evt.target.id)
    console.log(intervalId)
    stopAutomatic()  // PARA O INTERVALO ANTERIOR
    turnOn[evt.target.id]()  // avt.target.id = RETONA O ID DO ELEMENTO QUE FOI CLICADO E CHAMA A FUNÇÃO COM ID NO OBJETO
}

nextIndex = () => {  
    console.log(colorIndex)
    if(colorIndex < 2){
        colorIndex++
    }
    else{
        colorIndex = 0  // CRIA O LOOP INFINITO
    }

    // colorIndex = colorIndex < 2? ++colorIndex : colorIndex= 0;
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = [colors[colorIndex]]  // SELECIONA A COR NO VETOR 'colors'
    turnOn[color]()  // CHAMA O MÉTODO NO OBJETO PELA COR SELECIONADA
    nextIndex()  // MUDA O INDICE
}

const stopAutomatic = () => {
    clearInterval(intervalId)  // PARA O INTERVALO 'intervalId'
}

const turnOn = {  // OBJETO
    'red': () => img.src = './img/vermelho.png',     // QUANDO O ID FOR RED CHAMA A IMAGEM VERMELHA
    'yellow': () => img.src = './img/amarelo.png',   // QUANDO O ID FOR YELLOW CHAMA A IMAGEM AMARELA
    'green': () => img.src = './img/verde.png',      // QUANDO O ID FOR GREEN CHAMA A IMAGEM VERDE

    'auto': () => intervalId = setInterval(changeColor, 1000)     // CHAMA A FUNÇÃO 'changeColor' A CADA 1 SEGUNDO
}

buttons.addEventListener('click', trafficLght)   // TODOS DENTRO DA DIV PAI PODEM SER CLICADOS (PROPAGAÇÃO)