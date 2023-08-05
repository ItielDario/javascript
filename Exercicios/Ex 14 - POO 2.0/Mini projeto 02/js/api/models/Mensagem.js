// CRIA UMA MENSAGEM

export class Mensagem{
    constructor(texto = ''){ // SE NÃO PASSAR UM TEXTO PASSA UM STRING VAZIA
        this._texto = texto
    };

    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}