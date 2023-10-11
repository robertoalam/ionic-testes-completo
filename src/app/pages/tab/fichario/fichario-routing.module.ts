import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FicharioPage } from './fichario.page';

const routes: Routes = [
  {
    path: '',
    component: FicharioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FicharioPageRoutingModule {}
