import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    pathMatch: 'prefix',
    children:[
      {
        path:'',
        loadChildren: () => import('./fichario/fichario.module').then( m => m.FicharioPageModule)
      },{
        path: 'fichario',
        loadChildren: () => import('./fichario/fichario.module').then( m => m.FicharioPageModule)
      },{
        path: 'participante',
        loadChildren: () => import('./participante/participante.module').then( m => m.ParticipantePageModule),
      },{
        path: 'veiculo',
        loadChildren: () => import('./veiculo/veiculo.module').then( m => m.VeiculoPageModule)
      }
    ]
  // },{
  //   path: 'fichario',
  //   loadChildren: () => import('./fichario/fichario.module').then( m => m.FicharioPageModule)
  // },{
  //   path: 'participante',
  //   loadChildren: () => import('./participante/participante.module').then( m => m.ParticipantePageModule)
  // },{
  //   path: 'veiculo',
  //   loadChildren: () => import('./veiculo/veiculo.module').then( m => m.VeiculoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
