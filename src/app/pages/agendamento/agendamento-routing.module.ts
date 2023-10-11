import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamentoPage } from './agendamento.page';

const routes: Routes = [
  {
    path: '',
    component: AgendamentoPage,
  },{
    path: 'calendario-componente',
    loadChildren: () => import('./calendario-componente/calendario-componente.module').then( m => m.CalendarioComponentePageModule)
  },{
    path: 'calendario-modal',
    loadChildren: () => import('./calendario-modal/calendario-modal.module').then( m => m.CalendarioModalPageModule)
  },{
    path: 'datas',
    loadChildren: () => import('./datas/datas.module').then( m => m.DatasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendamentoPageRoutingModule {}
