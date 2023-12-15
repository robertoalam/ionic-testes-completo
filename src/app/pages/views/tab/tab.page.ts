import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Boletim } from 'src/app/model/boletim.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {
  
  boletim!:Boletim;
  
  constructor(
    public navCtrl:NavController,
  ) { }

  ngOnInit() {
  }

  voltar(){ this.navCtrl.pop() }
  salvar(){
    console.log('BOLETIM ',this.boletim)
  }
}
