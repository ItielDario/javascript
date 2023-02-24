function contar(){
    var numStartTxt = window.document.querySelector('input#num_start')
    var numStart = Number(numStartTxt.value)
    var numEndTxt = window.document.querySelector('input#num_end')
    var numEnd = Number(numEndTxt.value)
    var contTxt = window.document.querySelector('input#cont')
    var cont = Number(contTxt.value)
    var res = window.document.querySelector('div#contagem')
    res.innerHTML = ''  // APAGA O RESULTADO DA CONTAGEM ANTERIOR
 
    if(cont <= 0 || numStart == numEnd || numStartTxt.value.length == 0 || numEndTxt.value.length == 0){
        res.innerHTML += 'OPERAÇÃO INVÁLIDA!'
    }
    else if(numStart > numEnd){
        for(var i = numStart; i >= numEnd; i -= cont){
            res.innerHTML += `${i} &#128073`
        }
    }
    else{
        for(var i = numStart; i <= numEnd; i += cont){
            res.innerHTML += `${i} &#128073`
        } 
    }
    res.innerHTML += `&#127937`  
}