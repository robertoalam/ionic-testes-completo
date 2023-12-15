import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage {

  constructor(private navCtrl:NavController) { }


  voltar(){ this.navCtrl.back() }
}
