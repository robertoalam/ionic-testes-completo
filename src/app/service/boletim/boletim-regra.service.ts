import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validarCPF } from '../validar/validar-cpf';

@Injectable({
  providedIn: 'root'
})
export class BoletimRegraService {

  constructor( public fb:FormBuilder ) { }

  setRegraSlide1(){
    return this.fb.group({
      nome:['', [Validators.required,Validators.minLength(5)] ],
      cpf:['',[Validators.required , validarCPF()]],
      email:['', [Validators.required,Validators.email] ],
      idade:['',Validators.required ],
      observacao:['']
    }); 
  }
  getMensagensSlide1(){
    return {
      nome: { required:'Informe o nome',minlength:'Nome INVALIDO !' },
      cpf:{ 
        required:'Informe o cpf',
        maxlength:'tamanho errado',
        validarCPF:'CPF invalido'
      },
      email:{ 
        required:'Informe o email',
        email:'Email INVALIDO !'
      },
      idade:{ required:'Informe a idade'},
    };
  }

  setRegraSlide2(){
    return this.fb.group({
      esposaNome:['', [Validators.required,Validators.minLength(5)] ],
      esposaDocumento:['',Validators.required],
      esposaEmail:['', [Validators.required,Validators.email] ],
      esposaIdade:['',Validators.required ],
      esposaObservacao:['']
    })    
  }
  getMensagensSlide2(){
    return {
      esposaNome: { required:'Informe o nome',minlength:'Nome INVALIDO !' },
      esposaDocumento:{ required:'Informe o cpf'},
      esposaEmail:{ 
        required:'Informe o email',
        email:'Email INVALIDO !'
      },
      esposaIdade:{ required:'Informe a idade'},
    };    
  }
  
  setRegraSlide3(){
    return this.fb.group({
      filhaNome:['', [Validators.required,Validators.minLength(5)] ],
      filhaDocumento:['',Validators.required],
      filhaEmail:['', [Validators.required,Validators.email] ],
      filhaIdade:['',Validators.required ],
      filhaObservacao:['']
    })
  }
  getMensagensSlide3(){
    return {
      filhaNome: { required:'Informe o nome',minlength:'Nome INVALIDO !' },
      filhaDocumento:{ required:'Informe o cpf'},
      filhaEmail:{ 
        required:'Informe o email',
        email:'Email INVALIDO !'
      },
      filhaIdade:{ required:'Informe a idade'},
    };
  }

  setRegraSlide4(){
    return this.fb.group({
      esportes:['',Validators.required],
      bancos:['',Validators.required],
      documentos:['',Validators.required],
      resumo:['']
    })
  }

  getMensagensSlide4(){
    return {
      esportes: { required:'Selecione algum esporte'},
      bancos: { required:'Selecione algum banco'},
      documentos: { required:'Selecione algum documento'},
    };
  }  

  setRegraSlide5(){
    return this.fb.group({
      historico:['']
    })
  }

  getMensagensSlide5(){
    return {
      historico:{}
    };
  }   
}
