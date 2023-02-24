function gerarTabuada(){
    var numTxt = window.document.querySelector('input#num')
    var res = window.document.querySelector('div#res')
    var num = Number(numTxt.value)

    if(num < 0 || numTxt.value.length == 0){
        window.alert('Operação Inválida')
    }
    else{
        res.innerHTML = ''
        for(var i = 0; i <= 10; i++){
            res.innerHTML += `${num} x ${i} = ${num * i}<br>`
        }
    }
}
