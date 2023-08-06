// ESTA CLASSE IRA RECEBER OS DADOS DO FORMULÁRIO E ATRIBUIR ESSES DADOS AO OBJETO

// A CLASSE PESSOA NOS DÁ O MODELO PARA CRIARMOS OBJETOS
// O CONTROLLER É UMA CLASSE DE AÇÕES (ADICIONAR, EDITAR, APAGAR, LISTAR, VISUALIZAR, ENTRE OUTROS) AS INFORMÇÕES VINDA DOS FOMULÁRIOS
 
import { Pessoa } from '../models/Pessoa.js';  // O CONTROLLERPESSOA PRECISA DESTAS IMPORTAÇÕES PARA FUNCIONAR
import { ListaPessoas } from '../models/ListaPessoas.js';
import { PessoaView } from '../views/PessoasWiew.js';
import { Mensagem } from '../models/Mensagem.js';
import { MensagemView } from '../views/MensagemView.js';
import { PessoasRepository } from '../repositories/PessoasRepository.js';

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

        // REPOSITÓRIO
        this._pessoaRepository = new PessoasRepository()
        let lista = this._pessoaRepository.ler();
        console.log(lista);
 
        // QUANDO INSTANCIAR O OBJETO 'PESSOACONTROLLER' TAMBEM INSTANCIA O 'LISTAPESSOAS' E O 'PESSOASVIEW' 
        this._listaPessoas = new ListaPessoas(lista); // PASSA COMO PARÂMETRO O LOCALSTORAGE

        // VIEW PESSOAS
        this._pessoasView = new PessoaView(document.querySelector("#dados")); // PASSA COMO PARÂMETRO A SECTION DO HTML
        this._pessoasView.update(this._listaPessoas); // EXIBE A TABELA COM OS DADOS DO LOCALSTORAGE

        // VIEW MENSAGEM
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(document.querySelector("#mensagem"));
        this._mensagemView.update(this._mensagem);
    }

    // ADICIONA PESSOAS
    adicionar(event){  // QUANDO CLICAR NO BOTÃO CALCULAR IRÁ DISPARAR O EVENTO QUE CHAMARÁ ESTA FUNÇÃO 

        event.preventDefault();  // EVITA IR PARA OUTRA PÁGINA (CONTINUA NA MESMA PÁGINA)

        // CRIAR UMA PESSOA,
        const pessoaAdd = this._criarPessoa();
        this._listaPessoas.adcionaNaLista(pessoaAdd);  // O OBJETO INSTANCIADO CHAMA A FUNÇÃO 'ADICIONANALISTA' E PASSA COMO PARAMETRO O RETORNO DE 'CRIARPESSOA'

        // ADICIONAR NO REPOSITORIO
        this._pessoaRepository.criar(pessoaAdd);

        // ATUALIZAÇÃO DA TELA
        this._pessoasView.update(this._listaPessoas);

        // DEFINIR E ATUALIZAR MENSAGEM
        this._mensagem.texto = 'Pessoa cadastrada com sucesso!';
        this._mensagemView.update(this._mensagem);
    }

    // CRIA PESSOAS
    _criarPessoa(){
        return new Pessoa(  // INSTANCIA UM NOVO OBJETO E RETORNA O MESMO
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value,
        );
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