import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AssinaturaPage } from '../genericos/assinatura/assinatura.page';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { AssinaturaService } from 'src/app/service/assinatura.service';

@Component({
  selector: 'app-assinaturas',
  templateUrl: './assinaturas.page.html',
  styleUrls: ['./assinaturas.page.scss'],
})
export class AssinaturasPage implements OnInit {
  file:any = null;
  arquivoImagem:string="";

  constructor( 
    private navCtrl:NavController ,
    private modalController:ModalController,
    private assinaturaService:AssinaturaService,
  ) { }

  ngOnInit() {}

  async assinar(){
    let modal = await this.modalController.create({
      component:AssinaturaPage , 
      componentProps: { file : this.file } 
    })
    modal.present()
    const { data, role } = await modal.onWillDismiss();
    console.log('RETORNO ',data)
    if( role != 'cancel' && data != null){
      try{
        this.file = await this.assinaturaService.arquivoLer( data.uri )
        this.arquivoImagem = this.file.data;
      }catch(e){
        console.log('ERRO: ',e)
      }
    }

  }
  salvar(){}
  voltar(){ this.navCtrl.pop() }
  excluirImagem(){
    console.log('ENTROU')
    this.file = null;
    this.arquivoImagem = "";
  }
}
