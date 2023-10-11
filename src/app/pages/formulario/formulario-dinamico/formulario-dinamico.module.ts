import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormularioDinamicoPageRoutingModule } from './formulario-dinamico-routing.module';
import { FormularioDinamicoPage } from './formulario-dinamico.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioDinamicoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [FormularioDinamicoPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FormularioDinamicoPageModule {}
