const audios = [
    {caminho: 'audios/projeto_ratinho_audios_grito.mp3', legenda: 'GRITO'},  // OBJETO LITERAL
    {caminho: 'audios/projeto_ratinho_audios_jesus.mp3', legenda: 'Jesus'},  
    {caminho: 'audios/projeto_ratinho_audios_nao-e-o-pai.mp3', legenda: 'Ele não é o pai'},  
    {caminho: 'audios/projeto_ratinho_audios_pare.mp3', legenda: 'PARE'},  
    {caminho: 'audios/projeto_ratinho_audios_que-isso-meu-filho.mp3', legenda: 'Que isso meu filho'},  
    {caminho: 'audios/projeto_ratinho_audios_ratinhoo.mp3', legenda: 'RATINHO'},  
    {caminho: 'audios/projeto_ratinho_audios_uepa.mp3', legenda: 'UEPA'},  
    {caminho: 'audios/projeto_ratinho_audios_vixi-ratinho.mp3', legenda: 'VIXI'},  
    {caminho: 'audios/projeto_ratinho_audios_xaropinho.mp3', legenda: 'Xaropinho'},  
];
const botoes = window.document.querySelectorAll('.botao');
const legendas = window.document.querySelectorAll('p');
const audioTag = window.document.querySelector('audio');

for(let i = 0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
};

botoes.forEach( botao => {
    botao.addEventListener('click', (evt) => {
        console.log(botao.getAttribute('data-item')); // RETORNA UM INDICE QUE SERÁ USADO NO ARRAY AUDIOS
        const som = audios[botao.getAttribute('data-item')];  // SELECIONA O VALOR DO ATRIBUTO('data-item')
        audioTag.setAttribute('src', som.caminho); // SELECIONA O SOM DE ACORDO COM O 'data-item' DO BOTÃO CLICADO

        audioTag.addEventListener('loadeddata', (evt) => { // QAUNDO TERMINAR DE CARREGAR O AUDIO
            audioTag.play();  // TOCA O AUDIO
        }); 
    });  
});