import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioSimplesPage } from './formulario-simples.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioSimplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioSimplesPageRoutingModule {}
