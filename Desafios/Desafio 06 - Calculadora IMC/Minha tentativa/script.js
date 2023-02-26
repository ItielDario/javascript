var button = window.document.querySelector('button#calcular')
button.addEventListener('click', calcular)

function retornarTamanho(n, a, p){
    if(n.length == 0 || a.length == 0 || p.length == 0){
        return true
    }
    else{
        return false
    }
}

function verificarNum(a, p){
    if(a <= 0 || p <= 0){
        return true
    }
    else{
        return false
    }
}

function avaliarIMC(imc){
    if(imc < 18.5){
        return 'abaixo do peso'
    }
    else if(imc >= 18.5 && imc <= 24.99){
        return 'normal'
    }
    else if(imc >= 25 && imc <= 29.99){
        return 'com Sobrepeso'
    }
    else{
        return 'com obesidade'
    }
}

function calcular(){
    var nome = window.document.querySelector('input#nome')
    var altura = window.document.querySelector('input#altura')
    var peso = window.document.querySelector('input#peso')

    if(retornarTamanho(nome, altura.value, peso.value)){
        window.alert(`Por favor, insira valores no formulario!`)
    }
    else{
        if(verificarNum(altura.value, peso.value)){
            window.alert('A altura e o peso precisam ser positivos')
        }
        else{
            var res = window.document.querySelector('div#resultado')
            var imc = peso.value / altura.value ** 2
            var avaliacao = avaliarIMC(imc)

            res.innerHTML = `${nome.value}, seu IMC é ${imc.toFixed(1)} e você está ${avaliacao}`
        }
    }
}
