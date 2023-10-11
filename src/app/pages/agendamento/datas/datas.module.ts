import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatasPageRoutingModule } from './datas-routing.module';

import { DatasPage } from './datas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatasPageRoutingModule
  ],
  declarations: [DatasPage]
})
export class DatasPageModule {}
