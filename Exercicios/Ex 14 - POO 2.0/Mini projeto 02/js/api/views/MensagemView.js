// EXIBE A MENSAGEM CRIADA

export class MensagemView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _tamplete(model){
        return model.texto ? `<p class="alert">${model.texto}</p>` : ' ';  // IF / ELSE
    }

    update(model){
        this._elemento.innerHTML = this._tamplete(model);

        // APOS 3 SEGUNDOS LIMPA A MENSAGEM
        setTimeout(() => {
            this._elemento.innerHTML = '';
        }, 5000);
    }
}