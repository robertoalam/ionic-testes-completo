import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioSwiperPageRoutingModule } from './formulario-swiper-routing.module';

import { FormularioSwiperPage } from './formulario-swiper.page';
import { SwiperModule } from 'swiper/angular';
import { BotaoModalListaModule } from 'src/app/componentes/botao-modal-lista/botao-modal-lista.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioSwiperPageRoutingModule,
    ReactiveFormsModule,
    SwiperModule,BotaoModalListaModule
  ],
  declarations: [FormularioSwiperPage]
})
export class FormularioSwiperPageModule {}
