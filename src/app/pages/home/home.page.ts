import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  paginas:any = [
    {title:'Mask',icone:'construct-outline',rota:'/mascaras'},
    {title:'Observable',icone:'color-filter-outline',rota:'/observable'},
    {title:'Paginas',icone:'reader-outline',rota:'/views'},
    {title:'Componentes',icone:'extension-puzzle',rota:'/componentes'},
    // {title:'Agenda',icone:'calendar-number-outline',rota:'/agendamento'},
    // {title:'Assinatura',icone:'color-palette',rota:'/assinaturas'},
    // {title:'Alertas',icone:'warning-sharp',rota:'/alertas'},
  ];

  ngOnInit() {}

}
