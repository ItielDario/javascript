// EXIBE TODAS AS PESSOAS CADASTRADAS EM UMA TABELA

export class PessoaView{
    constructor(elemento){
        this._elemento = elemento;
    }

    _tamplete(model){
        return `
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>   
                        <th>Idade</th>   
                        <th>Peso</th>   
                        <th>Altura</th>   
                        <th>IMC</th>   
                        <th>Situação</th>   
                    </tr>
                </thead>
                <tbody>
                    ${model.copiaPessoas.map(pes => {  // PARA CADA PESSOA 'PESSOAS' DO VETOR 'MODEL'
                        return /* RETORNA UMA STRING COMPLETA QUE SERÁ ACLOPADA NO BODY */` 
                        <tr>
                            <td>${pes._nome}</td>
                            <td>${pes._idade}</td>
                            <td>${pes._peso}</td>
                            <td>${pes._altura}</td>
                            <td>${pes._imc}</td>
                            <td>${pes.classificaImc()}</td>
                        </tr>
                        `
                    }).join('') /* JOIN -> JUNTA TODOS OS DADOS GERADOS PELO MAP EM UMA ÚNICA STRING */}
                </tbody>
            </table>
        `
    }

    updade(model){ // EXIBE AS INFORMAÇÕES NA PÁGINA
        this._elemento.innerHTML = this._tamplete(model);  
    }
}