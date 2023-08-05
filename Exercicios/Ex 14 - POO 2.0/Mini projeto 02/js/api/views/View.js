// A HERANÇA É UMA CLASSE QUE COMPARTILHA ATRIBUTOS E MÉTODOS IGUAIS PARA DIFERENTES OBJETOS

// CLASSE MÃE
export class View{
    
    constructor(elemento){
        this._elemento = elemento;
    }

    tamplete(model){ // ESTE MÉTODO DEVE SER PERSONALIZADO PARA CADA FILHO 
        throw new Error(`O método tamplete deve ser imprementado nesta classe`); // CASO NÃO SEJA IMPLEMENTADO, MOSTRA O ERRO
    }

    update(model){
        this._elemento.innerHTML = this.tamplete(model);
    }
}