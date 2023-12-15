import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ParticipantePageRoutingModule } from './participante-routing.module';
import { ParticipantePage } from './participante.page';
import { LocalizacoesPage } from './localizacoes/localizacoes.component';
import { LocalizacaoFormPage } from './localizacoes/localizacao/localizacao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantePageRoutingModule,
  ],
  declarations: [
    ParticipantePage ,
    LocalizacoesPage,
    LocalizacaoFormPage,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ParticipantePageModule {}
