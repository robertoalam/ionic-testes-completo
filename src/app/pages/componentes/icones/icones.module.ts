import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconesPageRoutingModule } from './icones-routing.module';

import { IconesPage } from './icones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconesPageRoutingModule
  ],
  declarations: [IconesPage]
})
export class IconesPageModule {}
