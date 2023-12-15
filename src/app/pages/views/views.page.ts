import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-views',
  templateUrl: './views.page.html',
  styleUrls: ['./views.page.scss'],
})
export class ViewsPage  {

  constructor( private navCtrl:NavController  ) {  }

  paginas:any = [
    {title:'Form',icone:'create-outline',rota:'/views/formulario'},
    {title:'Tabs',icone:'color-filter-outline',rota:'/views/tab'},
    {title:'Login',icone:'log-in-outline',rota:'/views/login'},    
  ]; 

  voltar(){ this.navCtrl.pop() }
}
