import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MascaraService } from 'src/app/service/mascara.service';

@Component({
  selector: 'app-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.scss'],
})
export class MascaraTelefonePage  implements OnInit {

  celular:string = "";
  telefone:string = "";
  celularSemDDD:string = "";
  telefoneSemDDD:string = "";

  constructor(
    private mascaraService:MascaraService  ,
    private modalController: ModalController,

  ) { }

  mascararCelular( el:any ){ this.celular = this.mascaraService.aplicar( el ) }
  mascararTelefone( el:any ){ this.telefone = this.mascaraService.aplicar( el ) }
  mascararCelularSemDDD( el:any ){ this.celularSemDDD = this.mascaraService.aplicar( el ) }
  mascararTelefoneSemDDD( el:any ){ this.telefoneSemDDD = this.mascaraService.aplicar( el ) }

  ngOnInit() {}
  ionViewCanLeave(){ return this.modalController.dismiss(null, 'cancel'); }

}
