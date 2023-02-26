const turn = window.document.querySelector('button#turn')
var img = window.document.querySelector('img#image')

img.addEventListener('mouseenter', turnOnButton)
img.addEventListener('mouseout', turnOffButton)
img.addEventListener('click', turnBroken)
turn.addEventListener('click', lamp)

function lamp(){
    if(img.src.indexOf('desligada') != -1){   // SE O SRC ESTIVER 'ligada'
        turnOnButton()
    }
    else { // SE O SRC ESTIVER 'desligada'
        turnOffButton()
    }
}

function turnOnButton(){
    turn.innerHTML = 'Desligar'
    img.src = 'img/ligada.jpg'
    
}

function turnOffButton(){
    turn.innerHTML = 'Ligar'
    img.src = 'img/desligada.jpg'
    
}

function turnBroken(){
    turn.innerHTML = 'Ligar'
    img.src = 'img/quebrada.jpg'
    
    turn.removeEventListener('click', lamp)  // REMOVE EVENTOS
    img.removeEventListener('mouseout', turnOffButton)  // REMOVE EVENTOS
    img.removeEventListener('mouseenter', turnOnButton)  // REMOVE EVENTOS
}
