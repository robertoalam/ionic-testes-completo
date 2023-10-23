import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'agendamento',
    loadChildren: () => import('./pages/agendamento/agendamento.module').then( m => m.AgendamentoPageModule),
  },{
    path: 'mascaras',
    loadChildren: () => import('./pages/mascaras/mascaras.module').then( m => m.MascarasPageModule)
  },{
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },{
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },{
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },{
    path: 'assinaturas',
    loadChildren: () => import('./pages/assinaturas/assinaturas.module').then( m => m.AssinaturasPageModule)
  },{
    path: 'assinatura',
    loadChildren: () => import('./pages/genericos/assinatura/assinatura.module').then( m => m.AssinaturaPageModule)
  },  {
    path: 'observable',
    loadChildren: () => import('./pages/observable/observable.module').then( m => m.ObservablePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
