import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormularioSimplesPageRoutingModule } from './formulario-simples-routing.module';
import { FormularioSimplesPage } from './formulario-simples.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioSimplesPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FormularioSimplesPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FormularioSimplesPageModule {}
