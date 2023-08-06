// LOCALSTORAGE É UM RECURSO OFERECIDO PELOS NAVEGADORES PARA ARMAZENAR DADOS

export class PessoasRepository{
    _getLocalStorage
    _setLocalStorage

    constructor(){
        
        // SELECIONA A BASE DA DADOS "db" E CONVERTE PARA JSON
        this._getLocalStorage = () => JSON.parse(localStorage.getItem('db')) ?? []; 
        
        // PARA O OBJETO LOCALSTOGE DO BROWSER CRIA UMA BASE DE DADOS DE NOME "db" E QUE IRÁ RECEBER UM CONTEÚDO
        this._setLocalStorage = (db) => localStorage.setItem("db", JSON.stringify(db));
        console.log('Local Storage');
    }

    
    // CRUD - CREATE - READ - UPDATE - DELETE

    // CREATE = CRIAR
    criar(pessoa){
        let dbPessoa = this._getLocalStorage(); // SELECIONA O LOCAL STORAGE (RETORNO = ARRAY)

        dbPessoa.push(pessoa); // SALVA A 'PESSOA' NA ULTIMA POSIÇÃO DO BANCO DE DADOS 'DBPESSOA'
        this._setLocalStorage(dbPessoa) // ALTERA O BANCO DE DADOS 'DBPESSOA'
    }

    // READ = LER
    ler(){
        return this._getLocalStorage();
    }

    // UPDATE = ATUALIZAR, EDITAR
    atualizar(id, pessoaAtualizada){  // PEGA O ID DA PESSOA QUE SERÁ ATUALIZADA E AS INFORMAÇÕES DA PESSOA QUE SERÁ COLOCADA NO LUGAR
        let dbPessoa = this.ler();

        dbPessoa[id] = pessoaAtualizada; // SUBSTITUI A PESSOA ANTIGA PELA NOVA
        this._setLocalStorage(dbPessoa); // INCLUIR A BASE DE DADOS NO SISTEMA
    }

    // DELETE
    apagar(id){
        let dbPessoa = this.ler();

        dbPessoa.splice(id, 1);  
        this._setLocalStorage(dbPessoa);
    }

    // LER POR ID
    lerPorId(id){
        const dbPessoa = this.ler();
        return dbPessoa[id];
    }   
}