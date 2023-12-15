import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioPage } from './formulario.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioPage
  },{
    path: 'formulario-swiper',
    loadChildren: () => import('./formulario-swiper/formulario-swiper.module').then( m => m.FormularioSwiperPageModule)
  },{
    path: 'formulario-simples',
    loadChildren: () => import('./formulario-simples/formulario-simples.module').then( m => m.FormularioSimplesPageModule)
  },
  {
    path: 'auto-complete',
    loadChildren: () => import('./auto-complete/auto-complete.module').then( m => m.AutoCompletePageModule)
  },
  {
    path: 'formulario-dinamico',
    loadChildren: () => import('./formulario-dinamico/formulario-dinamico.module').then( m => m.FormularioDinamicoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioPageRoutingModule {}
