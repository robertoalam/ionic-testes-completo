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
    boletim.nome = "";
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
    // boletim.filhaDocumento = "222"
    boletim.filhaEmail = "luli@procergs.com"
    boletim.filhaIdade = 16;
    boletim.filhaObservacao = "princesa";
    return boletim ;
  }
}
