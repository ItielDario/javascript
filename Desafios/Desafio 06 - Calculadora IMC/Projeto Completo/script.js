const calcular = window.document.querySelector('button#calcular')

calcular.addEventListener('click', imc)

function imc(){
    const nome = window.document.querySelector('input#nome').value
    const altura = window.document.querySelector('input#altura').value
    const peso = window.document.querySelector('input#peso').value
    const res = window.document.querySelector('div#resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1)
        let classificacao = ""

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso'
        }
        else if(valorIMC < 25){
            classificacao = 'com o peso ideal. Parabens!'
        }
        else if(valorIMC < 30){
            classificacao = 'com Sobrepeso'
        }
        else if(valorIMC < 35){
            classificacao = 'com obesidade grau I'
        }
        else if(valorIMC < 40){
            classificacao = 'com obesidade grau II'
        }
        else{
            classificacao = 'com obesidade grau III. Cuidado!'
        }
        
        res.innerHTML = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`
    }
    else{
        res.textContent = `Por favor, preencha todos os campos!`
    }
}
