import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Form, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ListaObjetoService } from 'src/app/service/lista-objeto.service';

@Component({
  selector: 'app-formulario-dinamico',
  templateUrl: './formulario-dinamico.page.html',
  styleUrls: ['./formulario-dinamico.page.scss'],
})
export class FormularioDinamicoPage implements OnInit {
  contador:number = 0;
  formulario : FormGroup ;
  @ViewChildren( FormControlName,{read : ElementRef}) formInputElements : ElementRef[] | any;

  listaObjetos:any=[];
  listaObjetosAtributos:any=[];
  atributosDoObjeto: any[] = []

  objetoSelecionado:any;
  objeto:any;

  constructor(
    private navCtrl:NavController,
    private listaObjetoService: ListaObjetoService,
    private fb: FormBuilder,

  ) { 
    this.formulario = this.fb.group({
      name: new FormControl('')
    });
  }

  ngOnInit() { this.carregarListas() }

  async carregarListas(){
    await this.listaObjetoService.getListaObjetos()
      .toPromise()
      .then( (data:any)=>{
        this.listaObjetos = data;
      })
    await this.listaObjetoService.getListaObjetosAtributos()
      .toPromise()
      .then( (data:any)=>{
        this.listaObjetosAtributos = data;
      })  
    this.selecionarObjeto( this.listaObjetos[308] )
  }

  selecionarObjeto(obj : any ){
    this.objetoSelecionado = obj
    this.objeto = this.objetoSelecionado.TXT_TIPO_OBJETO
    this.findAtributos()
    this.popularAtributosCombo()
  }

  private findAtributos() {
    this.atributosDoObjeto = new Array<any>()
    this.listaObjetos.find( (x:any) => x.ID == this.objetoSelecionado.ID).ATRIBUTOS
      .forEach( (atributo:any) => {
        // SETANDO CAMPOS NO FORMBUILDER
        // if(atributo.OBRIGATORIO){
        //   this.formulario.addControl(`campo_${atributo['ID']}`, new FormControl(['',Validators.required]))
        // }
        
        (atributo.OBRIGATORIO) 
          ?  this.formulario.addControl(`campo_${atributo['ID']}`, new FormControl(['',Validators.required]))
          : this.formulario.addControl(`campo_${atributo['ID']}`, new FormControl())
        
        this.atributosDoObjeto.push(Object.assign({}, {'NAME':`campo_${atributo['ID']}` ,...atributo})  );
      });
  }

  private popularAtributosCombo() {
    let atributos = this.listaObjetosAtributos;
    this.atributosDoObjeto.forEach(element => {
      if (element.TIPO == 1) {
        Object.keys(atributos).forEach(key => {
          if (element.ID_ATRIBUTO == key) {
            element.valores = atributos[key].slice();
            return;
          }
        });
      }
    });
  }

  voltar(){ this.navCtrl.pop()}
  salvar(){
    this.formulario.markAllAsTouched();
    console.log('FORMULARIO ',this.formulario)
  }


  isPesquisaValida(objeto : any , form : Form){ }
  verificaPesquisaValida(objeto : any){ }
  seleciona(value : any, form : Form){}
  maxLenght(campo: any){}
  isCampoValido(campo : any ){
    console.log('CAMPO ',campo)
    console.log('FORM ',this.formulario)
    return !campo.OBRIGATORIO || (campo.VALOR && campo.VALOR != '') 
  }
  exibirCampoSelect(campo: any){
    return campo.valores
  }
  exibirCampoTexto(campo: any){
    return !campo.valores
    return !campo.valores && (this.isMascaraAlfanumerica(campo) || this.isMascaraAlfabetica(campo))
  }
  exibirCampoNumerico(campo: any){
    return !campo.valores && this.isMascaraNumerica(campo)
  }
  exibirCampoMascaraPersonalizada(campo: any){}
  onChange(campo:any, auxValidador:any){
    return campo;
    // return this.isCampoTexto(campo) ? this.verificaMascaraAlfabetica(campo, auxValidador) : this.mascaraService.mascaraPersonalizada(auxValidador, campo.MASCARA)
  }

  atribuirFormControlName( campoName:any){
    console.log('CAMPO ',campoName)

  }

  private existemCamposObrigatoriosNaoPreenchidos() {
    return this.atributosDoObjeto.find(x => x.OBRIGATORIO && (x.VALOR == null || x.VALOR == ''))
  }

  private isCampoTexto(campo : any) {
    return this.isMascaraAlfanumerica(campo) || this.isMascaraAlfabetica(campo)
  }

  private isMascaraAlfanumerica(campo : any) {
    return campo.MASCARA == "X"
  }

  private isMascaraAlfabetica(campo : any) {
    return campo.MASCARA == "A"
  }

  private isMascaraNumerica(campo : any) {
    return campo.MASCARA == "9"
  }  
}
