import pizzaJson from './pizzas.js';

const containerPizza = document.querySelector('#group-pizzas');
console.log(containerPizza)

for (const pizza of pizzaJson) {
    let boxPizza = document.createElement('div');
    boxPizza.classList = 'box-pizza'
    boxPizza.innerHTML = `
        <img src="${pizza.img}" class="img-pizza" id=${pizza.id}>
        <div class="btn-adicionar" id=${pizza.id}>+</div>
        <p class="preco">R$ ${pizza.price},00</p>
        <h3 class="nome">${pizza.name}</h3>
        <p class="descricao">${pizza.description}</p>
    `;

    containerPizza.appendChild(boxPizza);
}


let pizzaImg = document.getElementsByTagName("img");
let pizzaBtnAdicionar = document.getElementsByClassName("btn-adicionar");

for(let i = 0; i < pizzaImg.length; i++){
    let elImg = pizzaImg[i];
    let elBtn = pizzaBtnAdicionar[i];

    elImg.addEventListener('click', exibirModal);
    elBtn.addEventListener('click', exibirModal);
}

