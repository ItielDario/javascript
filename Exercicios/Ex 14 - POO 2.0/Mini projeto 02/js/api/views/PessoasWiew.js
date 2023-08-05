// IMPORTANDO A CLASSE MÃE 
import { View } from "../views/View.js"; 

// EXIBE TODAS AS PESSOAS CADASTRADAS EM UMA TABELA
export class PessoaView extends View{  // INDICA QUE A CLASSE 'PESSOAVIEW' É FILHA DE 'VIEW'
    constructor(elemento){
        super(elemento) // INDICA QUE IRÁ UTILIZAR O MÉTODO CONSTRUTOR DA CLASSE MÃE / SUPERCLASSE  
    }

    tamplete(model){ // SOBRESCREEVENDO O MÉTODO DA CLASSE MÃE
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

    // O UPDADE É O MESMO DA CLASSE MÃE E POR TANTO NÃO PRECISA SER INSERIDO
}