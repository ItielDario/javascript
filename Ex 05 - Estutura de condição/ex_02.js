// CONDIÇÕES ANINHADA -----------------------------------------------------------------------------------------

var idade = 63
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Não vota')
}
else if(idade <18 || idade >= 65){
    console.log('Voto Opcional')
}
else{
    console.log('Voto obrigatório')
}

var agora = new Date()
var hora = agora.getHours()
console.log(` `)
console.log(`Agora são exatamente ${hora} horas`)

if(hora < 12){
    console.log('Bom dia!')
}
else if(hora <= 18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}


//CONDIÇÃO MULTIPLA (SWITCH / CASE) -----------------------------------------------------------------------------------
console.log(` `)
var agora = new Date()
var diaSem = agora.getDay()
console.log(`${diaSem}`)

switch(diaSem){
    case 0:
        console.log(`Hoje é Domingo`)
        break
    case 1:
        console.log(`Hoje é Segunda-feira`)
        break
    case 2:
        console.log(`Hoje é Terça-feira`)
        break
    case 3:
        console.log(`Hoje é Quarta-feira`)
        break
    case 4:
        console.log(`Hoje é Quinta-feira`)
        break
    case 5:
        console.log(`Hoje é Sexta-feira`)
        break
    case 6:
        console.log(`Hoje é Sábado`)
        break
    default:
        console.log('Dia invalido!')
        break
}
