import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  paginas:any = [
    {title:'Agendamento',icone:'calendar-number-outline',rota:'/agendamento'},
    // {title:'Datas',icone:'calendar-number-outline',rota:'/datas'},
    {title:'Formulario',icone:'create-outline',rota:'/formulario'},
    {title:'Mascaras',icone:'construct-outline',rota:'/mascaras'},
    {title:'Assinatura',icone:'color-palette',rota:'/assinaturas'},
    {title:'Tabs',icone:'color-filter-outline',rota:'/tab'},
    // {title:'Calendarios Compon.',icone:'calendar-number-outline',rota:'/calendarios'},
    // {title:'Calendarios Modal',icone:'calendar-number-outline',rota:'/modal'},
  ];

  ngOnInit() {}

}
