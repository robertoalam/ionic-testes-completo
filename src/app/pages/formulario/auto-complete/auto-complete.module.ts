import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AutoCompletePageRoutingModule } from './auto-complete-routing.module';
import { AutoCompletePage } from './auto-complete.page';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoCompletePageRoutingModule,
    AutocompleteLibModule,
  ],
  declarations: [AutoCompletePage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AutoCompletePageModule {}
