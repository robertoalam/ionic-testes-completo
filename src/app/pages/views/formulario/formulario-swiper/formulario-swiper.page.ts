import { AfterContentChecked, AfterViewInit, Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { Observable, fromEvent, merge } from 'rxjs';
import { Boletim } from 'src/app/model/boletim.model';
import { ModalGenericoCheckboxComponent } from 'src/app/pages/modal/modal-generico-checkbox/modal-generico-checkbox.component';
import { BoletimRegraService } from 'src/app/service/boletim/boletim-regra.service';
import { BoletimValidationService } from 'src/app/service/boletim/boletim-validation.service';
import { DisplayMessage, GenericFormValidationService, ValidationMessages } from 'src/app/service/form/generic-form-validation.service';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore , { Pagination } from 'swiper/Core';

@Component({
  selector: 'app-formulario-swiper',
  templateUrl: './formulario-swiper.page.html',
  styleUrls: ['./formulario-swiper.page.scss'],
})

export class FormularioSwiperPage implements  AfterContentChecked , AfterViewInit{

  boletim!:Boletim;
  
  // variaveis swipper
  @ViewChild('swiper') swiper: SwiperComponent | undefined;
  touchAllowed:boolean=false;
  config: SwiperOptions = { slidesPerView : 1 , pagination: { clickable: true},  }
  
  // variaveis do form
  @ViewChildren( FormControlName,{read : ElementRef}) formInputElements : ElementRef[] | any;
  genericValidator: GenericFormValidationService | any;
  displayMessage: DisplayMessage = {};
  form1 : FormGroup ;
  form1ValidationMessages: ValidationMessages | any;
  form2 : FormGroup ;
  form2ValidationMessages: ValidationMessages | any;
  form3 : FormGroup ;
  form3ValidationMessages: ValidationMessages | any;
  form4 : FormGroup ;
  form4ValidationMessages: ValidationMessages | any;
  form5 : FormGroup ;
  form5ValidationMessages: ValidationMessages | any;

  botaoEsporte = { 'icone':"help-circle-outline", 'cor':"primary", 'label':"Selecionar ESPORTES" }
  botaoBanco = { 'icone':"help-circle-outline", 'cor':"primary", 'label':"Selecionar BANCOS" };
  botaoDocumento = { 'icone':"help-circle-outline", 'cor':"primary", 'label':"Selecionar DOCUMENTOS" };
 
  listaEsportesSelecionado:any = [];
  listaBancosSelecionado:any = [];
  listaDocumentosSelecionado:any = [];
  
  sair: boolean = false;

  constructor(
    public fb:FormBuilder,
    
    public formValidar: BoletimValidationService,
    public formRegra:BoletimRegraService,
    private navCtrl: NavController,
    private modalController:ModalController,
  ) { 
    this.form1 = this.fb.group({})
    this.form2 = this.fb.group({})
    this.form3 = this.fb.group({})
    this.form4 = this.fb.group({})
    this.form5 = this.fb.group({})
    this.setarRegrasFormularios();  
    this.boletim = new Boletim();
    this.start();
  }

  listagem:any = [];
  botao:any = "";
  
  start(){
    this.boletim = this.formValidar.popular( this.boletim )
    this.montagem()
    this.marcarComponentes();
  }

  /*
  {'numero':1,'icone':"help-circle-outline", 'cor':"primary", 'label':"Selecionar ESPORTES"},
  {'numero':2,'icone':"help-circle-outline", 'cor':"primary", 'label':"Selecionar BANCOS"},
  {'numero':3,'icone':"help-circle-outline", 'cor':"primary", 'label':"Selecionar DOCUMENTOS"}
  */

  ionViewDidEnter() {
    // Redireciona para o slide inicial (0)
    this.swiper?.setIndex(0);
  }


  ngAfterViewInit(): void {
    let controlBlurs :Observable<any>[] ;
    controlBlurs = this.formInputElements
      .map( (formControl:ElementRef) => {
        fromEvent( formControl.nativeElement, 'blur') 
      });
    merge(...controlBlurs).subscribe( () => this.displayMessage = this.genericValidator.processarMensagens( this.form1 ))

    controlBlurs = this.formInputElements
      .map( (formControl:ElementRef) => {
        fromEvent( formControl.nativeElement, 'blur') 
      });
    merge(...controlBlurs).subscribe( () => this.displayMessage = this.genericValidator.processarMensagens( this.form2 )) 

    controlBlurs = this.formInputElements
      .map( (formControl:ElementRef) => {
        fromEvent( formControl.nativeElement, 'blur') 
      });
    merge(...controlBlurs).subscribe( () => this.displayMessage = this.genericValidator.processarMensagens( this.form3 ))    

    controlBlurs = this.formInputElements
      .map( (formControl:ElementRef) => {
        fromEvent( formControl.nativeElement, 'blur') 
      });
    merge(...controlBlurs).subscribe( () => this.displayMessage = this.genericValidator.processarMensagens( this.form4 ))

    controlBlurs = this.formInputElements
      .map( (formControl:ElementRef) => {
        fromEvent( formControl.nativeElement, 'blur') 
      });
    merge(...controlBlurs).subscribe( () => this.displayMessage = this.genericValidator.processarMensagens( this.form5 ))    
  }

  // SWIPER
  ngAfterContentChecked() {
    if( this.swiper ){
      this.swiper.updateSwiper({});
    }
  }
  
  // SWIPPER NAVEGACAO
  swiperSlideChanged(e:any){  this.validarSlide(e.activeIndex) }
  next(){ this.swiper?.swiperRef.slideNext(500)}
  prev(){ this.swiper?.swiperRef.slidePrev(500)}
  toggleTouch(){ 
    this.touchAllowed = !this.touchAllowed;
    this.swiper!.swiperRef.allowTouchMove = this.touchAllowed;
  }

  validarSlide( index: number ){
    if( index == 1 && !this.form1.valid ){ this.validarSlide1() }
    if( index == 2 && !this.form2.valid){ this.validarSlide2() }    
    if( index == 3 && !this.form3.valid){ this.validarSlide3() }
    if( index == 4 && !this.form4.valid){  this.validarSlide4() }
    if( index == 5 && !this.form5.valid){ this.validarSlide5() }
  }

  validarSlide1(){
    // NAO PERMITE AVANCAR
    this.swiper?.swiperRef.slidePrev(500)
    // MARCA O FORM COMO TOCADO
    this.form1.markAllAsTouched();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide1() as ValidationMessages ) )
      .processarMensagens( this.form1 );    
  }

  validarSlide2(){
    // NAO PERMITE AVANCAR
    this.swiper?.swiperRef.slidePrev(500)
    // MARCA O FORM COMO TOCADO
    this.form2.markAllAsTouched();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide2() as ValidationMessages ) )
      .processarMensagens( this.form2  );
  }

  validarSlide3(){
    // NAO PERMITE AVANCAR
    this.swiper?.swiperRef.slidePrev(500)
    // MARCA O FORM COMO TOCADO
    this.form3.markAllAsTouched();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide3() as ValidationMessages ) )
      .processarMensagens( this.form3  );
  }

  validarSlide4(){
    // NAO PERMITE AVANCAR
    this.swiper?.swiperRef.slidePrev(500)    
    // MARCA O FORM COMO TOCADO
    this.form4.markAllAsTouched();
    // this.validarBotaoEsportes();
    // this.validarBotaoBancos();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide4() as ValidationMessages ) )
      .processarMensagens( this.form4  );
  }

  validarSlide5(){
    // MARCA O FORM COMO TOCADO
    this.form5.markAllAsTouched();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide5() as ValidationMessages ) )
      .processarMensagens( this.form5  );
  }  

  setarRegrasFormularios(){
    this.form1 = this.formRegra.setRegraSlide1();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide1() as ValidationMessages ) )
      .processarMensagens( this.form1 );    

    this.form2 = this.formRegra.setRegraSlide2();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide2() as ValidationMessages ) )
      .processarMensagens( this.form2 );          
      
    this.form3 = this.formRegra.setRegraSlide3();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide3() as ValidationMessages ) )
      .processarMensagens( this.form3 );   

    this.form4 = this.formRegra.setRegraSlide4();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide4() as ValidationMessages ) )
      .processarMensagens( this.form4);         

    this.form5 = this.formRegra.setRegraSlide5();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide5() as ValidationMessages ) )
      .processarMensagens( this.form5);
  }

  salvar(){
    try{
      this.formValidar.validar(this.boletim);
    }catch(e){
      // this.modalService.showAlertErro([e!.toString()])
    }
  }
  voltar(){ this.navCtrl.pop() }


  async abrirModalGenericoNovo(opcoes: any) {
    let numero = opcoes.numero;
    let botao = opcoes.botao;
    let flagSomenteVisualizar = (opcoes.flagSomenteVisualizar) ? true : false;
    opcoes.formulario.form.touched = true;
    opcoes.formulario.form.markAsDirty()
    let controller = opcoes.formulario.controller
    console.log("CONTROLLER",controller )


    let modal = await this.modalController.create({
      component: ModalGenericoCheckboxComponent,
      componentProps: {
        'titulo': this.listagem.find( (item:any) => item.numero == numero).data.titulo,
        'lista': this.listagem.find( (item:any) => item.numero == numero).data.dominio,
        'listaSelecionada': this.listagem.find((item:any) => item.numero == numero).data.listaSelecionada,
        'campo': 'id',
        'flagSomenteVisualizar': flagSomenteVisualizar,
      }
    });
    modal.present();

    const { data, role } = await modal.onDidDismiss();
    controller.setValue( data.listaModalSelecionada );
    // this.validarBotao( numero )

    if( this.listagem.find( (item:any) => item.numero == numero).data.listaSelecionada.length > 0 ){
      this.botaoSetar(1,botao);
    }else{
      this.botaoSetar(0,botao);
    }
  }

  validarBotao( index : number ){
    let botao = this.listagem.find( (item:any) => item.numero == index).botao
    let nome = this.listagem.find( (item:any) => item.numero == index).formulario.name
    let controller = this.listagem.find( (item:any) => item.numero == index).formulario.controller
    console.log('BOTAO ',botao)
    console.log('NOME ',nome)
    console.log('CONTROLLER ',controller)

    if( this.listagem.find( (item:any) => item.numero == index).data.listaSelecionada.length > 0 ){
      this.botaoSetar(1,botao);
    }else{
      this.botaoSetar(0,botao);
    }

  }

  montagem(){
    this.listaEsportesSelecionado.push( this.formValidar.listaEsportes()[1] )
    this.listaEsportesSelecionado.push( this.formValidar.listaEsportes()[3] )

    this.listaDocumentosSelecionado.push( this.formValidar.listaDocumentos()[0] )
    this.listaDocumentosSelecionado.push( this.formValidar.listaDocumentos()[1] )

    this.listagem.push({
      'numero':1,
      'nome':'SIOP_CERTIDAO_AGRESSOR_AMEACA',
      'botao': this.botaoEsporte,
      'formulario':{'form':this.form4,'name':'esportes','controller':this.form4.controls['esportes']},
      'data': {
        'titulo':'Esportes',
        'dominio': this.formValidar.listaEsportes(),
        'listaSelecionada': this.listaEsportesSelecionado,
        'campo':'id'
      },
    });
    this.listagem.push({
      'numero':2,
      'nome':'SIOP_CERTIDAO_AGRESSOR_AMEACA',
      'botao': this.botaoBanco,
      'formulario':{'form':this.form4,'name':'bancos','controller':this.form4.controls['bancos']},
      'data': {
        'titulo':'Bancos',
        'dominio': this.formValidar.listaBancos(),
        'listaSelecionada': this.listaBancosSelecionado,
        'campo':'id'
      },
    }); 
    this.listagem.push({
      'numero':3,
      'nome':'SIOP_CERTIDAO_AGRESSOR_AMEACA',
      'botao': this.botaoDocumento,
      'formulario':{'form':this.form4,'name':'documentos','controller':this.form4.controls['documentos']},      
      'data': {
        'titulo':'Documentos',
        'dominio': this.formValidar.listaDocumentos(),
        'listaSelecionada': this.listaDocumentosSelecionado,
        'campo':'id'
      },
    });          
  }

  marcarComponentes(){
    if (this.listaEsportesSelecionado.length > 0) {
      this.form4.controls['esportes'].setValue( this.listaEsportesSelecionado ); 
      this.botaoSetar(1,this.botaoEsporte);
    }

    if (this.listaBancosSelecionado.length > 0) {
      this.form4.controls['bancos'].setValue( this.listaBancosSelecionado ); 
      this.botaoSetar(1,this.botaoBanco);
    }    

    if (this.listaDocumentosSelecionado.length > 0) {
      this.form4.controls['documentos'].setValue( this.listaDocumentosSelecionado ); 
      this.botaoSetar(1,this.botaoDocumento);
    }        
  }

  botaoSetar(status: any, botao: any){
    // POSICAO 0 => ERRO
    // POSICAO 2 => ATENCAO
    // POSICAO 1 => SUCESSO
    // POSICAO 2 => ATENCAO
    // POSICAO 99 => INICIAL
    if (status == 0) {
      botao.estilo = "erro";
      botao.cor = "danger";
      botao.icone = "close-circle-outline";
      botao.label = " SELECIONAR ";
    } else if (status == 1) {
      botao.estilo = "primario";
      botao.cor = "success";
      botao.icone = "checkmark-circle-outline";
      botao.label = " SELECIONADO! ";
    } else if (status == 2) {
      botao.estilo = "alerta";
      botao.cor = "alert";
      botao.icone = "alert-circle-outline";
      botao.label = " SELECIONADO! ";      
    } else if (status == 99) {
      botao.estilo = "primario";
      botao.cor = "primary";
      botao.icone = "help-circle-outline";
      botao.label = " SELECIONAR ";
    }

    return;    
  }

  teste(){
    console.log( this.form1.controls['cpf'] )
  }

}
