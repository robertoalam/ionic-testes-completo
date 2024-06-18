import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage {
  alertHeaderMensagem: string  = "";
  alertEstilo:string = "";

  constructor(
    private navCtrl:NavController,
    private alertCtrl:AlertController,
    ) { }

  async acaoClicar(nivel : number){
    try{

      if( nivel == 2){ 
        this.alertHeaderMensagem = "Atenção";
        this.alertEstilo = "modalAlerta";
        this.aviso() 
      }
      if( nivel == 3){ 
        this.alertHeaderMensagem = "Um ou mais erros encontrados";
        this.alertEstilo = "modalErro";
        this.error() 
      }

    }catch(e:any){
      console.log('ERROR ',e)
      let alert = await this.alertCtrl.create({
        header: this.alertHeaderMensagem,
        message: 'teste',
        buttons: [
          { 
            text: "OK",
            handler: () => {  }
          }          
        ],
        cssClass: this.alertEstilo
        
      });
      return alert.present();
    }
    
  }

  voltar(){ this.navCtrl.back() }


  aviso(){
    throw ("aviso !!!") 
  }
  error(){ throw new Error("janela de error !!!") }
}
