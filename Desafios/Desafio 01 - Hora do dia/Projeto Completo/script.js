function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        // BOM DIA
        img.src = 'manha.jpg'
        window.document.body.style.background = '#D2AF5B'
    } else if(hora <= 18){
        // BOA TARDE
        img.src = 'tarde.jpg'
        window.document.body.style.background = '#DE8845'
    } else{
        //BOA NOITE
        img.src = 'noite.jpg'
        window.document.body.style.background = '#2C3C4F'
    }
}

