function tabuada(){
    var numTxt = window.document.querySelector('input#txt_n')
    var tab = window.document.querySelector('select#seltab')

    if(numTxt.value.length == 0){
        window.alert('Por favor, digite um numero!')
    }
    else{
        var num = Number(numTxt.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = window.document.createElement('option') // CRIANDO O ELEMENTO <option></option>
            item.text = `${num} x ${c} = ${num * c}`  // PARTE DE DENTRO -> <option>${num} x ${c} = ${num * c}</option>
            item.value = `tab${c}` // CRIA O ATRIBUTO 'value' -> <option value="tab1" >${num} x ${c} = ${num * c}</option>
            tab.appendChild(item)  // ADICIONA O ELEMENTO 'item' DENTRO DE 'tab'
            c++
        }
    }
}
