'use strict';

const images = [  // ARRAY JSON
    {'id': '1', 'url':'./img/chrono.jpg'},  // OBJETOS LITERAIS
    {'id': '2', 'url':'./img/inuyasha.jpg'},
    {'id': '3', 'url':'./img/tenchi.jpg'},
    {'id': '4', 'url':'./img/tenjhotenge.jpg'},
    {'id': '5', 'url':'./img/yuyuhakusho.jpg'},
    {'id': '6', 'url':'./img/ippo.png'}
]
const containerItems = window.document.querySelector('#container-items');
const buttons = window.document.querySelectorAll('.buttons button')
let numBtnSelecionado = 1
let btnSelecionado = ''

const loadImages = ( images, container ) => {
     images.forEach(image => {
        container.innerHTML += `<div class="item"> <img src="${image.url}"> </div>`;
     })
}
loadImages(images, containerItems);  // CHAMADA DA FUNÇÃO 

let items = window.document.querySelectorAll('.item');

const setPreviousButton = () => {
    const btn = window.document.querySelector('.selecionado')

    if(numBtnSelecionado > 0){
        numBtnSelecionado--
        
    }
    else{
        numBtnSelecionado = 5
    }
    
    btnSelecionado = buttons[numBtnSelecionado]
    btn.removeAttribute('class', 'selecionado')
    btnSelecionado.setAttribute('class', 'selecionado')
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = window.document.querySelectorAll('.item');
    setPreviousButton()
}

const setNextButton = () => {
    const btn = window.document.querySelector('.selecionado')

    if(numBtnSelecionado < 5){
        numBtnSelecionado++
        
    }
    else{
        numBtnSelecionado = 0
    }
    
    btnSelecionado = buttons[numBtnSelecionado]
    btn.removeAttribute('class', 'selecionado')
    btnSelecionado.setAttribute('class', 'selecionado')
}

const previous = () => {
    containerItems.appendChild(items[0]); // ADICIONA O PRIMEIRO ITEM NO FINAL DE 'ContainerItems'
    items = window.document.querySelectorAll('.item');
    setNextButton()
}

window.document.querySelector('#next').addEventListener('click', previous);
window.document.querySelector('#previous').addEventListener('click', next);


