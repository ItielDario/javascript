var num = window.document.querySelector('input#fnum')
var list = window.document.querySelector('select#flista')
var res = window.document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){ // SE O VALOR FOR DIFERENTE DE -1 VAI RETRNAR TRUE QUE SE TRANSFORMARA EM !TRUE = FALSE
        return true
    }
    else{ // SE O VALOR FOR IGUAL A -1 (SE O 'n' ESTIVER DENTRO DE 'l[]') VAI RETRNAR FALSE QUE SE TRANSFORMARA EM !FALSE = TRUE
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        var item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert('Numero invalido ou encontrado na lista')
    }
    num.value = '' // APAGA O VALOR DE DENTRO DA CAIXA INTERATIVA
    num.focus() // DEIXA O CONTROLE INTERATIVO FOCADO / SELECIONADO 
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }
    else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){ // PERCORRE ARRAYS
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }        
        }  
        media = soma / tot

        res.innerHTML  = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>` 
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é: ${media}</p>`
    }
}

