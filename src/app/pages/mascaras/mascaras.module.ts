import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascarasPageRoutingModule } from './mascaras-routing.module';

import { MascarasPage } from './mascaras.page';
import { MascaraVeiculoPage } from './veiculo/veiculo.component';
import { MascaraDocumentoPage } from './documento/documento.component';
import { MascaraTelefonePage } from './telefone/telefone.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascarasPageRoutingModule,
  ],
  declarations: [MascarasPage , MascaraVeiculoPage, MascaraDocumentoPage, MascaraTelefonePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class MascarasPageModule {}
