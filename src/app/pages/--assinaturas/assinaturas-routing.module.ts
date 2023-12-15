import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssinaturasPage } from './assinaturas.page';

const routes: Routes = [
  {
    path: '',
    component: AssinaturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssinaturasPageRoutingModule {}
