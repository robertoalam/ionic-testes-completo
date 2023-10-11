import {  CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Injectable, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {  ModalController, NavParams } from '@ionic/angular';
import { LocalizacaoFormPage } from './localizacao/localizacao.component';
import { Boletim } from 'src/app/model/boletim.model';

@Injectable()

@Component({
  selector: 'app-localizacoes',
  templateUrl: './localizacoes.component.html',
  styleUrls: ['./localizacoes.component.scss'],
})
export class LocalizacoesPage  implements OnInit {

  boletim:Boletim = new Boletim;
  // @Input() boletim!: Boletim;

  lista : Array<any> = new Array<any>();
  constructor(
    private modalController:ModalController,
  ) {

   }

  ngOnInit() {
    console.log("boletim via input: ", this.boletim);
    // this.boletim = this.navParam['data']['boletim']
    this.lista = Object.create(this.boletim.participante.enderecos);
  }
  
  async editarLocalizacao(index : number | null){
    let modal = await this.modalController.create({component:LocalizacaoFormPage,componentProps:{'index':index,'lista':this.lista}});
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if( role != 'cancel' && data != null){
      this.lista = data
    }
  }

  async apagarLocalizacao(index : number | null ){ this.lista.splice( index! ,1); }

  salvar(){
    this.boletim.participante.enderecos = this.lista;
    return this.modalController.dismiss( this.boletim , 'confirm'); 
  }

  ionViewCanLeave(){ 
    return this.modalController.dismiss( this.boletim , 'cancel'); 
  }
}
