import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MascaraService } from 'src/app/service/mascara.service';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss'],
})
export class MascaraDocumentoPage  implements OnInit {
  
  cpf:string = "";
  cnpj:string = "";

  constructor(
    private mascaraService:MascaraService  ,
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  mascararCPF( el:any ){ this.cpf = this.mascaraService.aplicar( el ) }
  mascararCNPJ( el:any ){ this.cnpj = this.mascaraService.aplicar( el ) }

  voltar(){}
  ionViewCanLeave(){ return this.modalController.dismiss(null, 'cancel'); }

}
