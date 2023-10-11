import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatasPage } from './datas.page';

const routes: Routes = [
  {
    path: '',
    component: DatasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatasPageRoutingModule {}
