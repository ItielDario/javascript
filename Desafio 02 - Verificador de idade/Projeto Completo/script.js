function verificar(){
    var date = new Date()
    var ano = date.getFullYear() //PEGA OS QUATRO DIGITOS DO ANO -> 2023
    var fano = window.document.getElementById('txt_data')
    var res = window.document.getElementById('res')
    res.style.textAlign = 'center' // CENTRALIZA O TEXTO 

    if (fano.value.length == 0 || fano.value > ano){ //SE O USUARIO DIGITAR NADA OU SE DIGITAR UM VALOR MAIOR QUE 'ano'
        window.document.getElementById('res').innerText = 'IDADE INVALIDA!'
    }
    else{
        var fsex = window.document.getElementsByName('sexo')
        var nano = Number(fano.value)
        var idade = ano - nano 
        var genero = ''  // STRING VAZIA

        var img = window.document.createElement('img')  // CRIANDO UM ELEMENTO DO TIPO 'img'  ->  <img>
        img.setAttribute('id', 'foto')  // DEFININDO ATRIBUTOS PARA 'img'  -> <img id='foto'>

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // CRINÇA
                img.setAttribute('src', 'homem_crianca.jpg')  // DEFININDO ATRIBUTOS PARA 'img'  ->
                // <img id='foto' src='homem_crianca.jpg'>
            } 
            else if(idade < 21){
                // JOVEM
                img.setAttribute('src', 'homem_jovem.jpg')  // <img id='foto' src='homem_jovem.jpg'>
            }
            else if(idade < 50){
                // ADULTO
                img.setAttribute('src', 'homem_adulto.jpg')  // <img id='foto' src='homem_adulto.jpg'>
            }
            else{
                // IDOSO
                img.setAttribute('src', 'homem_idoso.jpg')  // <img id='foto' src='homem_idoso.jpg'>
            }
        }
        else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // CRINÇA
                img.setAttribute('src', 'mulher_crianca.jpg')
            } 
            else if(idade < 21){
                // JOVEM
                img.setAttribute('src', 'mulher_jovem.jpg')
            }
            else if(idade < 50){
                // ADULTO
                img.setAttribute('src', 'mulher_adulta.jpg')
            }
            else{
                // IDOSO
                img.setAttribute('src', 'mulher_idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        img.style.borderRadius = '50%' // DEIXANDO A IMAGEM REDONDA
        res.appendChild(img) // MOSTRA O 'img' DENTRO DO 'res'
    }
}