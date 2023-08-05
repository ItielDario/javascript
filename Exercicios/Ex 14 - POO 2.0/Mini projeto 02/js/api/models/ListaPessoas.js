// CRIA UM ARRAY PARA ARMAZENAR OS OBEJETOS CRIADOS

export class ListaPessoas{
    constructor(){
        this._pessoas = [];  // CRIA UM ARRAY VAZIO
    }

    adcionaNaLista(objPessoa){
        this._pessoas.push(objPessoa);
    }

    // RETORNA UMA CÓPIA DO ARRAY
    // USANDO O CONCAT, PASSANDO O NOSSO ARRAY COMO PARÂMETRO -> É A FORMA DE TRABALHAR SEM MODIFICAR O ARRAY ORIGINAL
    get copiaPessoas(){
        // RETURN THIS._PESSOAS
        return [].concat(this._pessoas); // CRIA UMA CÓPIA DO ARRAY ORIGINAL ('THIS._PESSOAS') PARA UM ARRAY VAZIO ('[]') E RETORNA ESSE ARRAY COPIADO 
    }
}