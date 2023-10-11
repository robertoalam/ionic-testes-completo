import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonDatetime, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-calendario-wheel',
  templateUrl: './calendario-wheel.component.html',
  styleUrls: ['./calendario-wheel.component.scss'],
  standalone:true,
  encapsulation: ViewEncapsulation.None,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],  
})
export class CalendarioWheelPage  implements OnInit {

  @ViewChild(IonDatetime) datetime1!: IonDatetime;
  data1:any;
  presentation:any;
  showDefaultButtons:any;

  constructor(
    public modalController:ModalController,
    public navParams: NavParams,
  ) { 
    this.data1 = navParams.data['data'];
    this.presentation = navParams.data['presentation'];
  }

  ngOnInit() {
    if( this.data1 == undefined ){ this.datetime1 = this.data1 }
    if( this.presentation == undefined ){ this.presentation = 'date-time' }
    if( this.showDefaultButtons == undefined ){ this.showDefaultButtons = 'true' }
  }
  
  selecionado(valor : any){  this.datetime1 = valor;  }


  salvar(){ return this.modalController.dismiss(this.datetime1, 'confirm'); }
  voltar(){ return this.modalController.dismiss(null, 'cancel'); }
  
}
