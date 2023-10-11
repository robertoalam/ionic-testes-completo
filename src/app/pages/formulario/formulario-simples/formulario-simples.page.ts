import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Cadastro } from 'src/app/model/cadastro.model';

@Component({
  selector: 'app-formulario-simples',
  templateUrl: './formulario-simples.page.html',
  styleUrls: ['./formulario-simples.page.scss'],
})
export class FormularioSimplesPage implements OnInit {
  
  cadastro = new Cadastro();
  form: FormGroup | any ;
  listaGenero:any = [
    {id:1,descricao:'masculino'},
    {id:2,descricao:'feminino'},
    {id:3,descricao:'prefiro nao dizer'}
  ];

  @ViewChildren( FormControlName,{read : ElementRef}) formInputElements : ElementRef[] | any;
  dataFormata:string = "";

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,

  ) { 
    this.form = this.fb.group({
      'nome':['',Validators.required],
      'genero':['',Validators.required],
      'cpf':['',Validators.required],
      'email':['',Validators.required],
      'nascimento':['',Validators.required],
      'observacao':[''],
      'data':['',Validators.required],
    });
  }

  ngOnInit(){
    this.dataFormata = '15/11/1981'
  }

  salvar(){
    this.form.markAllAsTouched();
    if(! this.form.valid) return ;
    console.log('SALVOU')
  }
  voltar(){ this.navCtrl.pop() }

  converterData( valor : any ){
    if( valor == undefined) return ;
    let data = valor.split("T")
    return this.converterEuaToBr(data[0])
    return this.converterEuaToBr(data[0])+' '+this.retornarHoraMinuto(data[1])
  }

  converterEuaToBr( valor : any){
    let data = valor.split('-');
    return data[2]+'/'+data[1]+'/'+data[0]
  }

  converteBrToEua( valor : any){
    let data = valor.split('/');
    return data[0]+'/'+data[1]+'/'+data[2]
  }

  retornarHoraMinuto( valor : any ){
    let hora = valor.split(":");
    return hora[0]+':'+hora[1];
  }
}
