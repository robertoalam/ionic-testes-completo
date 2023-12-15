import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioPage } from './calendario.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioPage
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
export class CalendarioPageRoutingModule {}
