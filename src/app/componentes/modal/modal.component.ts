import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonDatetime, IonModal, IonicModule, ModalController, NavController } from '@ionic/angular';
import { CalendarioWheelPage } from '../calendario-wheel/calendario-wheel.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],    
  standalone:true,
  imports:[
    IonicModule,
  ]
})
export class ModalComponent implements OnInit {

  anoFabricacaoData:any = 2024;
  anoModelo:any = 2024;

  constructor(
    private modalController:ModalController,
    public navCtrl:NavController,

  ) { }

  @ViewChild(IonModal) modal!: IonModal;
  @ViewChild(IonDatetime) dataFabricacao!: IonDatetime;
  @ViewChild(IonDatetime) dataModelo!: IonDatetime;
  
  ngOnInit() {
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  salvar(){ return this.modalController.dismiss(null, 'confirm'); }
  ionViewCanLeave(){ this.navCtrl.pop() }
}
