import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DadosPage } from './dados/dados.component';
import { CaracteristicaPage } from './caracteristica/caracteristica.component';
import { LocalizacoesPage } from './localizacoes/localizacoes.component';
import { Boletim } from 'src/app/model/boletim.model';
import { ParticipanteModel } from 'src/app/model/participante.model';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.page.html',
  styleUrls: ['./participante.page.scss'],
  
})
export class ParticipantePage implements OnInit {
  
  boletim! :Boletim;
  retorno:any;

  constructor(
    public route:ActivatedRoute,
    public router:Router,
    public modalController: ModalController
  ) { 

  }

  ngOnInit() {
    this.boletim = new Boletim();
    console.log('BOLETIM ', this.boletim)
    this.boletim!.participante!.nome! = "TESTE"
  }

  async modulo(modulo:string){
    let componente :any;
    if( modulo == 'dados') {
      componente = DadosPage;
    }else if(  modulo == 'caracteristicas' ){
      componente = CaracteristicaPage;
    }else {
      componente = LocalizacoesPage;
    }
    console.log('MODULO ',modulo)
    let modal = await this.modalController.create({component:componente , componentProps:{'boletim':this.boletim}});
    modal.present();
    const {data, role} = await modal.onDidDismiss();
    if(role=='confirm'){
      console.log('RETORNO ',data )
      this.boletim = data;

      // if(modulo == "dados"){ this.boletim = data; }
      // if(modulo == "caracteristicas"){ this.boletim = data; }
      // if(modulo == "localizacoes"){ this.boletim = data }
    }
    console.log('BOLETIM ',this.boletim)
  }

}
