import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {

  constructor(
    private navCtrl:NavController ,

  ) {  }

  paginas:any = [
    {title:'Datas',icone:'calendar-number-outline',rota:'datas'},
    {title:'Calendarios Compon.',icone:'calendar-number-outline',rota:'calendario-componente'},
    {title:'Calendarios Modal',icone:'calendar-number-outline',rota:'calendario-modal'},
  ]; 

  ngOnInit() {
   
  }


  voltar(){ this.navCtrl.pop() }
}
