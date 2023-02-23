function verificar(){
    var vet_sexo = window.document.getElementsByName('sexo')
    var txt_data = window.document.getElementById('txt_data')

    var data = Number(txt_data.value) 
    var date = new Date()
    var ano = date.getFullYear()
    var idade = ano - data 
    var img = window.document.getElementById('imagem')

    
    if(idade >= 0 && idade <= 12 && vet_sexo[0].checked){
        img.src = 'homem_crianca.jpg'
        window.document.getElementById('titulo_img').innerText = `Homem com ${idade} anos.`
    } 
    else if(idade > 12 && idade <= 25 && vet_sexo[0].checked){
        img.src = 'homem_jovem.jpg'
        window.document.getElementById('titulo_img').innerText = `Homem com ${idade} anos.`
    }
    else if(idade > 25 && idade <= 50 && vet_sexo[0].checked){
        img.src = 'homem_adulto.jpg'
        window.document.getElementById('titulo_img').innerText = `Homem com ${idade} anos.`
    }
    else if(idade > 50 && vet_sexo[0].checked){
        img.src = 'homem_idoso.jpg'
        window.document.getElementById('titulo_img').innerText = `Homem com ${idade} anos.`
    }
    else if(idade >= 0 && idade <= 12 && vet_sexo[1].checked){
        img.src = 'mulher_crianca.jpg'
        window.document.getElementById('titulo_img').innerText = `Mulher com ${idade} anos.`
    } 
    else if(idade > 12 && idade <= 25 && vet_sexo[1].checked){
        img.src = 'mulher_jovem.jpg'
        window.document.getElementById('titulo_img').innerText = `Mulher com ${idade} anos.`
    }
    else if(idade > 25 && idade <= 50 && vet_sexo[1].checked){
        img.src = 'mulher_adulta.jpg'
        window.document.getElementById('titulo_img').innerText = `Mulher com ${idade} anos.`
    }
    else if(idade > 50 && vet_sexo[1].checked){
        img.src = 'mulher_idosa.jpg'
        window.document.getElementById('titulo_img').innerText = `Mulher com ${idade} anos.`
    } 
    else{
        window.document.getElementById('foto'). innerText = 'IDADE INVALIDA'
    }
}