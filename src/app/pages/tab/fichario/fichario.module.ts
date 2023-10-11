import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FicharioPageRoutingModule } from './fichario-routing.module';

import { FicharioPage } from './fichario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FicharioPageRoutingModule
  ],
  declarations: [FicharioPage]
})
export class FicharioPageModule {}
