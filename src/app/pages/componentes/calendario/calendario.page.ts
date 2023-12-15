import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage {

  constructor( private navCtrl:NavController , ) {  }

  paginas:any = [
    {title:'Datas',icone:'calendar-number-outline',rota:'datas'},
    {title:'Calendarios Compon.',icone:'calendar-number-outline',rota:'calendario-componente'},
    {title:'Calendarios Modal',icone:'calendar-number-outline',rota:'calendario-modal'},
  ]; 

  voltar(){ this.navCtrl.pop() }
}
