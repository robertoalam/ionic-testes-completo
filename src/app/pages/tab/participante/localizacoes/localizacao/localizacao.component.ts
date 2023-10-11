import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Injectable, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AlertController, IonicModule, ModalController, NavParams } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Boletim } from 'src/app/model/boletim.model';

@Injectable()

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.scss'],
  // standalone:true,
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],  
  // encapsulation: ViewEncapsulation.None,
  // imports:[
  //   CommonModule,
  //   FormsModule,
  //   IonicModule,
  // ]
})
export class LocalizacaoFormPage  implements OnInit {
  
  @Input() boletim!: Boletim;
  
  index?:number;
  endereco:string = "";
  listaEndereco:Array<string> = [];
  
  @Output() counterChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private modalController:ModalController,
    private navParam:NavParams,
    private alertController:AlertController,
  ) {  }

  ngOnInit() {
    console.log("boletim via input", this.boletim);
    this.index = this.navParam['data']['index']
    this.listaEndereco = this.navParam['data']['lista']
    if( this.index != null){
      this.endereco = this.listaEndereco[this.index];
    }
  }

  async salvar(){
    if( this.endereco.toString().trim().length == 0) {
      let alert = await this.alertController.create({
        header:'Um ou mais erros encontrados',
        message: 'Digite um endereço válido',
        buttons: ['OK'],
      });
      alert.present();      
      return ;
    }

    if( this.index != null ){
      this.listaEndereco.splice(this.index!,1)
    }
    this.listaEndereco.push( this.endereco )
    
    return this.modalController.dismiss( this.listaEndereco , 'confirm'); 
  }

  ionViewCanLeave(){ return this.modalController.dismiss(null, 'cancel'); }
}
