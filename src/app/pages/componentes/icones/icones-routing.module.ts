import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconesPage } from './icones.page';

const routes: Routes = [
  {
    path: '',
    component: IconesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconesPageRoutingModule {}
