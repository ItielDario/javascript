var vet = []
var NovoValorCadastrado = 0
var soma = 0
var contIndice = 0

function adicionar(){
    var list = window.document.querySelector('select#list')
    var numTxt = window.document.querySelector('input#num')
    var num = Number(numTxt.value)
    
    var valorExiste = 0
    for(var i = 0; i < vet.length; i++){
        if(num == vet[i]){
            valorExiste = 1
        } 
    }

    if(num <= 0 || num > 100 || numTxt.value.length == 0 || valorExiste == 1){
        window.alert('Número inválido ou já encontrado na lista!')
    }
    else{ 
        vet.push(num) 
        if(vet.length > NovoValorCadastrado){ // LIMPA A TELA QUANDO O USUARIO DIGITAR UM NOVO VALOR
            window.document.querySelector('div#dados').innerHTML = ''
        }       
        var item = window.document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        list.appendChild(item)
    }
}

function finalizar(){
    if(vet.length == 0){
        window.alert('Adicione um valor antes de finalizar!')
    }
    else{
        NovoValorCadastrado = vet.length
        var dados = window.document.querySelector('div#dados')

        dados.innerHTML = `Ao todo, temos ${vet.length} números cadastrados`

        dados.innerHTML += `<br><br>O maior valor informado foi ${Math.max(...vet)}` //INFORMA O MAIOR ELEMENTO NUM ARRAY -> PODE SER USADO TAMBEM COMO: Math.max.apply(vet)
        dados.innerHTML += `<br><br>O menor valor informado foi ${Math.min(...vet)}` //INFORMA O MENOR ELEMENTO NUM ARRAY

        while(contIndice < vet.length){
            soma = soma + vet[contIndice]
            contIndice++
        }
        dados.innerHTML += `<br><br>Somando todos os valores temos ${soma}`

        media = soma / vet.length
        dados.innerHTML += `<br><br>A média dos valores digitados é ${media.toFixed(2)}` // DEIXA DUAS CASAS APÓS A VIRGULA
    }
}
