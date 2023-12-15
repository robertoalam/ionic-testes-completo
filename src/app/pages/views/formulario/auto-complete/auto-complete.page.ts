import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.page.html',
  styleUrls: ['./auto-complete.page.scss'],
})
export class AutoCompletePage implements OnInit {
  keyword = 'name';
  data = [
    {id: 1,name: 'Georgia'},
    {id: 2,name: 'Usa'},
    {id: 3,name: 'England'},
    {id: 4,name: 'Albânia'},
    {id: 5,name: 'Alemanha'},
    {id: 6,name: 'Argélia'},
    {id: 7,name: 'Argentina'},
    {id: 8,name: 'Camarões'},
    {id: 9,name: 'Camboja'},
    {id: 10,name: 'Escócia'},
    {id: 11,name: 'Eslováquia'},
    {id: 12,name: 'Eslovênia'},
    {id: 13,name: 'Espanha'},
    {id: 14,name: 'Estados Unidos da América'},
    {id: 15,name: 'Estados Unidos da Arabia'},
    {id: 16,name: 'Estados Unidos da Micronésia'},
    {id: 17,name: 'Estônia'},

  ];

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }


  selectEvent(item:any) {
    console.log('SELECIONADO ',item)
    // do something with selected item
  }

  onChangeSearch(val: any) {
    console.log('onChangeSearch ',val)

    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e:any){
    console.log('onFocused ',e)

    // do something when input is focused
  }

  voltar(){ this.navCtrl.pop() }
}
