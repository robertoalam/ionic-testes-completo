import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotaoModalListaComponent } from './botao-modal-lista.component';

@NgModule({
  imports:[ReactiveFormsModule,FormsModule,CommonModule,IonicModule],
  exports: [BotaoModalListaComponent],
  declarations: [BotaoModalListaComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class BotaoModalListaModule {}