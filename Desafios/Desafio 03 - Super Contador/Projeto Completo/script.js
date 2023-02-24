function contar(){
    var numStartTxt = window.document.querySelector('input#txt_i')
    var numEndTxt = window.document.querySelector('input#txt_f') 
    var contTxt = window.document.querySelector('input#txt_p')
    var res = window.document.querySelector('div#res')

    if(contTxt.value.length == 0 || numStartTxt.value.length == 0 || numEndTxt.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO Faltam dados!')
        
    }
    else{
        res.innerHTML = 'Contando: <br>' 
        var numStart = Number(numStartTxt.value)
        var numEnd = Number(numEndTxt.value)
        var cont = Number(contTxt.value)
        if(cont <= 0){
            window.alert ('Passo invalido, considerando PASSO = 1')
            cont = 1
        }

        if(numStart < numEnd){
            for(var i = numStart; i <= numEnd; i += cont){
                res.innerHTML += ` ${i} \u{1F449}`  // COLOCANDO EMOJI COM JAVASCRIPT
            } 
        }else{
            for(var i = numStart; i >= numEnd; i -= cont){
                res.innerHTML += ` ${i} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}