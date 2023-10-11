import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-calendario-modal',
  templateUrl: './calendario-modal.page.html',
  styleUrls: ['./calendario-modal.page.scss'],
})
export class CalendarioModalPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;
  
  dataChegada:any;
  dataSaida:any;

  constructor(
    public navCtrl:NavController,
    private modalController:ModalController,
  ) { }

  ngOnInit() { }

  // EXEMPLO 1
  confirm(){
    this.modalController.dismiss()
  }
  onWillDismiss(event: Event) {
    // const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // if (ev.detail.role === 'confirm') {
    //   this.message = `Hello, ${ev.detail.data}!`;
    // }
    this.modalController.dismiss()
  }

  teste(){
    console.log('dataChegada ', this.dataChegada)
    console.log('dataSaida ', this.dataSaida)
  }
  voltar(){ this.navCtrl.pop() }
}
