import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssinaturasPageRoutingModule } from './assinaturas-routing.module';

import { AssinaturasPage } from './assinaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssinaturasPageRoutingModule
  ],
  declarations: [AssinaturasPage]
})
export class AssinaturasPageModule {}
