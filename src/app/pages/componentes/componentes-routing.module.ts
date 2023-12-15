import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentesPage } from './componentes.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentesPage
  },{
    path: 'alertas',
    loadChildren: () => import('./alertas/alertas.module').then( m => m.AlertasPageModule)
  },{
    path: 'assinatura',
    loadChildren: () => import('./assinatura/assinatura.module').then( m => m.AssinaturaPageModule)
  },{
    path: 'icones',
    loadChildren: () => import('./icones/icones.module').then( m => m.IconesPageModule)
  },{
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesPageRoutingModule {}
