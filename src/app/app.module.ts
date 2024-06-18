import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BotaoModalListaModule } from './componentes/botao-modal-lista/botao-modal-lista.module';

@NgModule({
  declarations: [AppComponent],
  imports: [ 
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    SwiperModule , 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BotaoModalListaModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
