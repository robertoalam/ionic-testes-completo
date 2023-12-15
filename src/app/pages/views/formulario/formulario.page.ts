import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage  {
  constructor(
    private navCtrl:NavController
  ){ }
  
  paginas:any = [
    {title:'Simples',icone:'create-outline',rota:'formulario-simples'},
    {title:'Swiper',icone:'create-outline',rota:'formulario-swiper'},
    {title:'Auto complete',icone:'create-outline',rota:'auto-complete'},
    {title:'Dinamico',icone:'create-outline',rota:'formulario-dinamico'},
  ];


  voltar(){ this.navCtrl.pop() }
}
