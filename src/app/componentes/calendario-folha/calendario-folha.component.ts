import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonDatetime, ModalController, NavParams } from '@ionic/angular';
import { format } from 'date-fns';

@Component({
  selector: 'app-calendario-folha',
  templateUrl: './calendario-folha.component.html',
  styleUrls: ['./calendario-folha.component.scss'],
  standalone:true,
  encapsulation: ViewEncapsulation.None,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],  
})
export class CalendarioFolhaPage  implements OnInit {

  @ViewChild(IonDatetime) datetime1!: IonDatetime;
  data1:any;
  presentation:any;

  constructor(
    private modalController:ModalController,
    public navParams: NavParams,
  ) { 
    this.data1 = navParams.data['data'];
    this.presentation = navParams.data['presentation'];
  }

  ngOnInit() {
    if( this.presentation == undefined ){
      this.presentation = 'date-time'
    }
  }

  selecionado(valor : any){ this.datetime1 = valor; }

  salvar(){
    console.log('SALVAR ',this.datetime1)
    return this.modalController.dismiss(this.datetime1, 'confirm');
  }
  voltar(){ return this.modalController.dismiss(null, 'cancel'); }
  
}
