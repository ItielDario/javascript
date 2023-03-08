// SEMELHANTE A UM ARRAY POREM, NÂO PERMITE ENTRADAS DUPLICADAS DE VALOR
/*
    - add -> DEFINE UM ELEMENTO NA COLEÇÃO
    - clear -> LIMPA A COLEÇÃO
    - delete -> REMOVE UM ELEMENTO DA COLEÇÃO
    - entries -> SÃO AS ENTRADAS DA COLEÇÃO
    - forEach -> LOOP QUE PERCORRE A COLEÇÃO
    - has -> VERIFICA SE EXITE UM ELEMENTO NA COLEÇÃO
    - keys -> OBTEM AS CHAVES DA COLEÇÃO
    - size -> QUANTIDADE DE ELEMENTOS NA COLEÇÃO
    - values -> OBTEM OS VALORES DA COLEÇÃO
*/ 
const caixa = window.document.querySelector('#caixa')

let musicas = new Set([   // DECLARANDO UMA COLEÇÃO 'musicas' DO TIPO SET E DEFININDO ELA
    'musica1',
    'musica boa', 
    'musica 10'
])  

musicas.add('musica1')  // NÃO PERMITE ENTRADAS DUPLICADAS
musicas.add('musica1')  // NÃO PERMITE ENTRADAS DUPLICADAS
musicas.add('musica muito legal')
musicas.add('musica 10')  // NÃO PERMITE ENTRADAS DUPLICADAS



musicas.delete('musica boa')  // DELETA O ELEMENTO 'musica boa'

musicas.forEach((elen) => {   // PERCORRE TODOS OS ELEMENTOS DA COLEÇÃO
    caixa.innerHTML += elen + '<br>'
})