import { Injectable } from '@angular/core';
import { Boletim } from 'src/app/model/boletim.model';

@Injectable({
  providedIn: 'root'
})
export class BoletimValidationService {

  constructor() { }

  validar( boletim : Boletim){
    console.log('BOLETIM ',boletim)
    if( boletim.nome.toString().trim() == "") throw new Error("Informe nome !")
    if( boletim.filhaDocumento.toString().trim() == "") throw new Error("Informe o documento da filha !")
  }

  popular(boletim : Boletim){
    boletim.nome = "Roberto Alam";
    boletim.cpf = "000";
    boletim.email = "raa@procergs.com";
    boletim.idade = 41 ;
    boletim.observacao="Reizinho";
    boletim.esposaNome = "Tonia Laura"
    boletim.esposaDocumento = "111"
    boletim.esposaEmail = "tonialcf@procergs.com"
    boletim.esposaIdade = 38;
    boletim.esposaObservacao = "Rainha toda poderosa";

    boletim.filhaNome = "Luisa";
    boletim.filhaDocumento = "222"
    boletim.filhaEmail = "luli@procergs.com"
    boletim.filhaIdade = 16;
    boletim.filhaObservacao = "princesa";
    
    boletim.esportes = [];
    boletim.bancos = [];
    boletim.documentos = [];
    boletim.resumo = "muitas novidades na vida esportiva e financeira"
    boletim.historico = "- criado: 11/02/2024 11:55<br> - editado: 11/02/2024 11:58<br> - editado: 19/02/2024 09:11"

    return boletim ;
  }

  listaEsportes() {
    return  [
        {'id':1,'descricao':'Futebol'},
        {'id':2,'descricao':'Volei'},
        {'id':3,'descricao':'Jiu jitsu'},
        {'id':4,'descricao':'Judo'},
        {'id':5,'descricao':'Natacao'},
        {'id':6,'descricao':'Tenis'},
        {'id':7,'descricao':'Padel'},
        {'id':8,'descricao':'Beach tenis'},
        {'id':9,'descricao':'Ping pong'},
        {'id':10,'descricao':'Sinuca'},
        {'id':11,'descricao':'Futebol de mesa'},        
    ];
}

listaBancos() {
    return  [
        {'id':1,'descricao':'Banco do brasil'},
        {'id':2,'descricao':'C6'},
        {'id':3,'descricao':'Caixa'},
        {'id':4,'descricao':'Nubank'},
        {'id':5,'descricao':'C6'},
        {'id':6,'descricao':'Banrisul'},
        {'id':7,'descricao':'Bradesco'},
        {'id':8,'descricao':'Itau'},
        {'id':9,'descricao':'Rico'},
        {'id':10,'descricao':'Inter'},      
    ];
}

listaDocumentos() {
    return  [
        {'id':1,'descricao':'CPF'},
        {'id':2,'descricao':'CNPJ'},
        {'id':3,'descricao':'CNH'},
        {'id':4,'descricao':'Carteira de trabalho'},
        {'id':5,'descricao':'Carteira Profissional'},
        {'id':6,'descricao':'Carteira de estudante'},      
    ];
}    
}
