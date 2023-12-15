import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController, NavController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { CalendarioFolhaPage } from 'src/app/componentes/calendario-folha/calendario-folha.component';
import { CalendarioWheelPage } from 'src/app/componentes/calendario-wheel/calendario-wheel.component';

@Component({
  selector: 'app-calendario-componente',
  templateUrl: './calendario-componente.page.html',
  styleUrls: ['./calendario-componente.page.scss'],
})
export class CalendarioComponentePage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  dataCalendarioFolhaComInicio = format( new Date(), 'yyyy-MM-dd')+'T'+format( new Date(), 'HH:mm:ss')
  dataCalendarioFolhaComInicioFormatada = format( parseISO( this.dataCalendarioFolhaComInicio ), 'dd/MM/yyyy HH:mm');

  dataCalendarioFolhaSemInicio:any ;
  dataCalendarioFolhaSemInicioFormatada : any;
  // EXEMPLO 4
  retornoAno:any;

  // EXEMPLO 5
  data5 = new Date().toISOString().split("T")  
  dataCalendarioData5:any = this.data5[0];
  dataCalendarioDataTruncada5:any = this.converterEuaToBr( this.data5[0] );
  dataCalendarioHora5:any = this.retornarHoraMinuto( this.data5[1] )
  constructor(
    public navCtrl:NavController,
    private modalController:ModalController,
  ) { }

  ngOnInit() { }
  
  // MODAL CALENDARIO FORMATO DE FOLHA
  async modalCalendarioComDataInicial(){
    let modal = await this.modalController.create({
      component:CalendarioFolhaPage,
      componentProps:{
        'data': this.dataCalendarioFolhaComInicio
      }
    })
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if( role != 'cancel' && data != null){
      this.dataCalendarioFolhaComInicio = data;
      this.dataCalendarioFolhaComInicioFormatada = format( parseISO( this.dataCalendarioFolhaComInicio ), 'dd/MM/yyyy HH:mm');
    }
  }

  async modalCalendarioSemDataInicial(){
    let modal = await this.modalController.create({ component:CalendarioFolhaPage })
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if( role != 'cancel' && data != null){
      this.dataCalendarioFolhaSemInicioFormatada = format( parseISO( data ), 'dd/MM/yyyy HH:mm');
    }
  }

  async modalCalendarioSemHora(){
    let modal = await this.modalController.create({ component:CalendarioFolhaPage , componentProps:{'presentation':'date'}})
    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }  

  async modalCalendarioWheel(flag:boolean){
    let apresentation = (flag)?'date-time':'date';
    let modal = await this.modalController.create({ component:CalendarioWheelPage , componentProps:{'presentation':apresentation}})
    modal.present();
    await modal.onWillDismiss();
  }

  async modalCalendarioWheelSomenteAno(){
    let modal = await this.modalController.create({ component:CalendarioWheelPage , componentProps:{
        'presentation':'year',
        'showDefaultButtons':'false',
        'data':'2020'
      }
    })
    modal.present();
    const { data, role } =  await modal.onWillDismiss();
    if( role != 'cancel' && data != null){
      console.log('ANO  ',data)
      this.retornoAno = data.split('-')[0]
      // this.dataCalendarioFolhaSemInicioFormatada = format( parseISO( data ), 'dd/MM/yyyy HH:mm');
    }

    
  }

  // EXMEPLO 5
  async modalCalendarioWheel5(){
    let modal = await this.modalController.create({ 
      component:CalendarioWheelPage , 
      componentProps:{ 
        'data':this.dataCalendarioData5,
        'presentation':'date'
      }
    })
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if( role != 'cancel' && data != null){
      this.dataCalendarioData5 = data;
      this.dataCalendarioDataTruncada5 = this.converterEuaToBr( this.dataCalendarioData5);
    }
  }

  async modalCalendarioWheelHora(){
    let modal = await this.modalController.create({ component:CalendarioWheelPage , 
      componentProps:{ 
        'data': this.dataCalendarioHora5,
        'presentation':'time' 
      }
    })
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if( role != 'cancel' && data != null){
      this.dataCalendarioHora5 = data;
    }
  }
  
  
  voltar(){ this.navCtrl.pop() }

  converterEuaToBr( valor : any){
    let data = valor.split('-');
    return data[2]+'/'+data[1]+'/'+data[0]
  }

  converteBrToEua( valor : any){
    let data = valor.split('/');
    return data[0]+'/'+data[1]+'/'+data[2]
  }

  retornarHoraMinuto( valor : any ){
    console.log(valor)
    let hora = valor.split(":");
    return hora[0]+':'+hora[1];
  }
}

