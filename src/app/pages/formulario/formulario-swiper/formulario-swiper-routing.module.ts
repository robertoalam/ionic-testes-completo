import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioSwiperPage } from './formulario-swiper.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioSwiperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioSwiperPageRoutingModule {}
