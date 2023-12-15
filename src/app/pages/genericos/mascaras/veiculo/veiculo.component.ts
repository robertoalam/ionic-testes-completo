import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MascaraService } from 'src/app/service/mascara.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss'],
})
export class MascaraVeiculoPage  implements OnInit {

  placa:string = "";
  chassi:string = "";
  placaChassi:string = "";

  constructor(
    private mascaraService:MascaraService  ,
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  mascararPlaca( el:any ){ this.placa = this.mascaraService.aplicar( el ) }
  mascararChassi( el:any ){ 
    this.chassi =  ( ( (el as CustomEvent).target ) as HTMLInputElement ).value
  }
  mascararPlacaChassi( el:any ){ this.placaChassi = this.mascaraService.aplicar( el ) }

  voltar(){}
  ionViewCanLeave(){ return this.modalController.dismiss(null, 'cancel'); }
}
