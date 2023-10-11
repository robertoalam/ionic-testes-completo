import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable, fromEvent, merge } from 'rxjs';
import { Boletim } from 'src/app/model/boletim.model';
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
  config: SwiperOptions = { slidesPerView : 1 , pagination: true, }
  
  
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

  constructor(
    public fb:FormBuilder,
    public formValidar: BoletimValidationService,
    public formRegra:BoletimRegraService,
    private navCtrl: NavController,
    
  ) { 
    this.form1 = this.fb.group({})
    this.form2 = this.fb.group({})
    this.form3 = this.fb.group({})
    this.setarRegrasFormularios();  
    this.boletim = new Boletim();
    this.start();
  }
  start(){
    this.boletim = this.formValidar.popular( this.boletim )
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
    // MARCA O FORM COMO TOCADO
    this.form3.markAllAsTouched();
    this.displayMessage = ( new GenericFormValidationService( this.formRegra.getMensagensSlide3() as ValidationMessages ) )
      .processarMensagens( this.form3  );
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

  }
  salvar(){
    try{
      this.formValidar.validar(this.boletim);
    }catch(e){
      // this.modalService.showAlertErro([e!.toString()])
    }
  }
  voltar(){ this.navCtrl.pop() }
}
