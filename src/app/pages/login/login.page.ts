import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  tipo : string = "password"
  icone : string = "eye";
  constructor(
    public navCtrl:NavController,
    ) { }
    
  togglePassword(){
    console.log('ENTROU')
    this.icone = (this.icone == "eye" ) ? "eye-off" : "eye";
    console.log('ICONE ',this.icone);
  }


  voltar(){ this.navCtrl.pop() }
}
