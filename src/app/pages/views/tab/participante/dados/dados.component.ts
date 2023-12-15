import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Injectable, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { Boletim } from 'src/app/model/boletim.model';
import { DadosModel } from 'src/app/model/dados.model';

@Injectable()

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss'],
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],  
  encapsulation: ViewEncapsulation.None,
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class DadosPage  implements OnInit {

  boletim:Boletim = new Boletim;
  nome:string = "";
  nascimento:string = "";
  
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(
    private modalController:ModalController,
    private navParam:NavParams,
  ) { 
    
  }

  ngOnInit() {
    this.boletim = this.navParam['data']['boletim']
    this.nome = this.boletim.participante.nome
    this.nascimento = this.boletim.participante.nascimento
  }

  salvar(){
    this.boletim.participante.nome = this.nome;
    this.boletim.participante.nascimento = this.nascimento;
    return this.modalController.dismiss( this.boletim , 'confirm'); 
  }
  ionViewCanLeave(){ return this.modalController.dismiss(null, 'cancel'); }
}
