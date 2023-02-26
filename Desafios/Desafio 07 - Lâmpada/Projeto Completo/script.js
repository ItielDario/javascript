const turnOn = window.document.querySelector('button#turnOn')
const turnOff = window.document.querySelector('button#turnOff')
var lamp = window.document.querySelector('img#image')

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('dblclick', lampBroken)  // QUANDO CLICAR DUAS VEZES DISPARA O EVENTO
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff) 
 
function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1  // VERIFICA DE O SOURCE DE LAMP É 'quebrada' SE FOR RETORNA TRUE, SE NÃO FOR RETORNA FALSE
}

function lampOn(){
    if(!isLampBroken( )){  // TEM 'quebrada' NO SRC? SÓ VAI EXECULTA SE FOR FALSE
        lamp.src = 'img/ligada.jpg'
    }
}

function lampOff(){  // TEM 'quebrada' NO SRC? SÓ VAI EXECULTA SE FOR FALSE
    if(!isLampBroken( )){
        lamp.src = 'img/desligada.jpg'
    }
}

function lampBroken(){
    lamp.src = 'img/quebrada.jpg'
}