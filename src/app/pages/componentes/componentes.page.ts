import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage {

  constructor( private navCtrl:NavController  ) {  }

  paginas:any = [
    {title:'Alertas',icone:'warning-sharp',rota:'/componentes/alertas'},
    {title:'Assign',icone:'color-palette',rota:'/componentes/assinatura'},
    {title:'Calendario',icone:'calendar-number-outline',rota:'/componentes/calendario'},    
    {title:'Icones',icone:'color-palette-sharp',rota:'/componentes/icones'},
    {title:'Modal',icone:'color-palette-sharp',rota:'/componentes/modal'},
  ]; 

  voltar(){ this.navCtrl.pop() }
}