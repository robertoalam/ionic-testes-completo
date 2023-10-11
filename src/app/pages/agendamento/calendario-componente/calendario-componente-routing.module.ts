import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioComponentePage } from './calendario-componente.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioComponentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioComponentePageRoutingModule {}
