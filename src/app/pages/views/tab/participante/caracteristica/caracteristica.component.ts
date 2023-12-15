import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { Boletim } from 'src/app/model/boletim.model';
import { CaracteristicaModel } from 'src/app/model/caracteristica.model';

@Component({
  selector: 'app-caracteristica',
  templateUrl: './caracteristica.component.html',
  styleUrls: ['./caracteristica.component.scss'],
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],  
  encapsulation: ViewEncapsulation.None,
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
  ] 
})
export class CaracteristicaPage  implements OnInit {
  
  boletim:Boletim = new Boletim;
  
  currentFood = undefined;
  caracteristicas:CaracteristicaModel = new CaracteristicaModel;
  listaAltura:Array<string> = ['Muito Alto','Alto','Medio','Baixo','Muito Baixo'];
  altura!:string;

  listaCabelo:Array<string> = ['Longo','Curto','Careca'];
  cabelo!:string;

  listaCor:Array<string> = ['Preto','Pardo','Branco','Amarelo','Indigena'];
  cor!:string;

  listaFisico:Array<string> = ['Em forma','Esguio','Gordinho','Musculoso','Normal','Obeso'];
  fisico!:string;

  constructor(
    private modalController:ModalController,
    private navParam:NavParams,

  ) { }

  ngOnInit() {
    this.boletim = this.navParam['data']['boletim']
    this.altura = this.boletim.participante.caracteristicas.altura
    this.cabelo = this.boletim.participante.caracteristicas.cabelo
    this.cor = this.boletim.participante.caracteristicas.cor
    this.fisico = this.boletim.participante.caracteristicas.fisico
  }

  selecionar(evento : any){ 
    if('altura' == evento.target.name){ this.altura = evento.target.value; }
    if('cabelo' == evento.target.name){ this.cabelo = evento.target.value; }
    if('cor' == evento.target.name){ this.cor = evento.target.value; }
    if('fisico' == evento.target.name){ this.fisico = evento.target.value; }
  }

  salvar(){ 
    this.boletim.participante.caracteristicas.altura = this.altura;
    this.boletim.participante.caracteristicas.cabelo = this.cabelo;
    this.boletim.participante.caracteristicas.cor = this.cor;
    this.boletim.participante.caracteristicas.fisico = this.fisico;
    return this.modalController.dismiss( this.boletim , 'confirm'); 
  }
  ionViewCanLeave(){ return this.modalController.dismiss(null, 'cancel'); }
}
