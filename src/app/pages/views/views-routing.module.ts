import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsPage } from './views.page';

const routes: Routes = [
  {
    path: '',
    component: ViewsPage
  },{
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },{
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)    
  },{
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)          
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsPageRoutingModule {}
