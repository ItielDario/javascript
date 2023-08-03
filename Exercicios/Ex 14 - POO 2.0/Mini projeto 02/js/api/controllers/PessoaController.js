// ESTA CLASSE IRA RECEBER OS DADOS DO FORMULÁRIO E ATRIBUIR ESSES DADOS AO OBJETO

// A CLASSE PESSOA NOS DÁ O MODELO PARA CRIARMOS OBJETOS
// O CONTROLLER É UMA CLASSE DE AÇÕES (ADICIONAR, EDITAR, APAGAR, LISTAR, VISUALIZAR, ENTRE OUTROS) AS INFORMÇÕES VINDA DOS FOMULÁRIOS
 
import { Pessoa } from '../models/Pessoa.js'  // O CONTROLLERPESSOA PRECISA DE 'PESSOA' PARA FUNCIONAR

export class PessoaController{
    
    // ATRIBUTOS
    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura


    // MÉTODOS
    // CONSTRUTOR
    constructor(){ // QUANDO INSTANCIAR NO MAIN ALTOMÁTICAMENTE ATRIBUIRÁ OS VALORES DO FORMULÁRIO
        this._inputNome = document.querySelector('#nome'); // SELECIONA A TAG
        this._inputIdade = document.querySelector('#idade');
        this._inputPeso = document.querySelector('#peso');
        this._inputAltura = document.querySelector('#altura');
    }

    // ADICIONA PESSOAS
    adicionar(event){  // QUANDO CLICAR NO BOTÃO CALCULAR IRÁ DISPARAR O EVENTO QUE CHAMARÁ ESTA FUNÇÃO 

        event.preventDefault();  // EVITA IR PARA OUTRA PÁGINA (CONTINUA NA MESMA PÁGINA)

        // CRIAR UMA PESSOA
        this._criarPessoa();
        console.log(this._criarPessoa());
    }

    // CRIA PESSOAS
    _criarPessoa(){
        return new Pessoa(  // INSTANCIA UM NOVO OBJETO E RETORNA O MESMO
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value,
        )
    }

    // LIMPA O FOMULÁRIO
    _limparFormulario(){
        this._inputNome.value = '';
        this._inputIdade.value = '';
        this._inputPeso.value = '';
        this._inputAltura.value = '';

        this._inputNome.focus();
    }
}