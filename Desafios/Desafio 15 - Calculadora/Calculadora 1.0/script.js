const teclasNum = [...window.document.querySelectorAll('.num')]
const teclasOp = [...window.document.querySelectorAll('.op')]
const teclaRes = window.document.querySelector('.res')
const display = window.document.querySelector('.display')
const teclaOn = window.document.querySelector('#ton')
const teclaLimpar = window.document.querySelector('#tlimpar')

let sinal = false

teclasNum.forEach( (el) => {
    el.addEventListener('click', (evt) => {
        sinal = false
        display.innerHTML += evt.target.innerHTML
    })
})

teclasOp.forEach( (el) => {
    el.addEventListener('click', (evt) => {
        if(!sinal){
            console.log(sinal)
            sinal = true
            console.log(sinal)

            if(display.textContent == '0'){
                display.innerHTML = ''
            }

            if(evt.target.innerHTML == 'x'){
                display.innerHTML += '*'
            }
            else{
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

teclaLimpar.addEventListener('click', (evt) => {
    display.innerHTML = '0'
})