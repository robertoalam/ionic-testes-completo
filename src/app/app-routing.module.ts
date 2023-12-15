import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'mascaras',
    loadChildren: () => import('./pages/genericos/mascaras/mascaras.module').then( m => m.MascarasPageModule)
  },{
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },{
    path: 'observable',
    loadChildren: () => import('./pages/observable/observable.module').then( m => m.ObservablePageModule)
  },{
    path: 'views',
    loadChildren: () => import('./pages/views/views.module').then( m => m.ViewsPageModule)
  },{
    path: 'componentes',
    loadChildren: () => import('./pages/componentes/componentes.module').then( m => m.ComponentesPageModule)
  // },{
  //   path: 'agendamento',
  //   loadChildren: () => import('./pages/agendamento/agendamento.module').then( m => m.AgendamentoPageModule),    
  // },{
  //   path: 'assinaturas',
  //   loadChildren: () => import('./pages/assinaturas/assinaturas.module').then( m => m.AssinaturasPageModule)
  // },{
  //   path: 'assinatura',
  //   loadChildren: () => import('./pages/componentes/assinatura/assinatura.module').then( m => m.AssinaturaPageModule)    
  // },{
  //   path: 'alertas',
  //   loadChildren: () => import('./pages/componentes/alertas/alertas.module').then( m => m.AlertasPageModule)    
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
