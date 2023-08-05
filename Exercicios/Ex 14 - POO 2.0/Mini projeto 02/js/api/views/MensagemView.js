// IMPORTANDO A CLASSE MÃE 
import { View } from "../views/View.js";

// EXIBE A MENSAGEM CRIADA
export class MensagemView extends View{ // INDICA QUE A CLASSE 'MENSAGEMVIEW' É FILHA DE 'VIEW' 

    constructor(elemento){
        super(elemento) // INDICA QUE IRÁ UTILIZAR O MÉTODO CONSTRUTOR DA CLASSE MÃE / SUPERCLASSE
    }

    tamplete(model){ // SOBRESCREEVENDO O MÉTODO DA CLASSE MÃE (ALTERAÇÃO DO ORIGINAL)
        return model.texto ? `<p class="alert">${model.texto}</p>` : ' ';  // IF / ELSE
    }

    update(model){  // SOBRESCREEVENDO O MÉTODO DA CLASSE MÃE
        this._elemento.innerHTML = this.tamplete(model);

        // APOS 3 SEGUNDOS LIMPA A MENSAGEM
        setTimeout(() => {
            this._elemento.innerHTML = '';
        }, 5000);
    }
}