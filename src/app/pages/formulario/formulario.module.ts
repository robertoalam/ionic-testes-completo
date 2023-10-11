import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormularioPageRoutingModule } from './formulario-routing.module';
import { FormularioPage } from './formulario.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPageRoutingModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  declarations: [FormularioPage]
})
export class FormularioPageModule {}
