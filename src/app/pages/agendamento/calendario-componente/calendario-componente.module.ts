import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioComponentePageRoutingModule } from './calendario-componente-routing.module';

import { CalendarioComponentePage } from './calendario-componente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioComponentePageRoutingModule
  ],
  declarations: [CalendarioComponentePage]
})
export class CalendarioComponentePageModule {}
