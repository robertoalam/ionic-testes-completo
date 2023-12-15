import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime, NavController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.page.html',
  styleUrls: ['./datas.page.scss'],
})
export class DatasPage implements OnInit {

  modes = ['date','date-time','month','month-year','time','time-date','year'];
  selectedMode = 'date';
  showPicker = false;
  
  dataInicialFormatada:string = "";
  dataInicialValor = format( new Date(), 'yyyy-MM-dd')+'T'+format( new Date(), 'HH:mm:ss');
  @ViewChild(IonDatetime) datetime?: IonDatetime;

  dataFinalFormatada:string = "";
  dataFinalValor = format( new Date(), 'yyyy-MM-dd')+'T'+format( new Date(), 'HH:mm:ss');
  @ViewChild(IonDatetime) datetime2?: IonDatetime;
  

  constructor(
    private navCtrl:NavController
   ) { 
    this.setToday(); 
  }
  ngOnInit() {
    
  }

  setToday(){ this.dataInicialFormatada = format( parseISO( format( new Date(), 'yyyy-MM-dd')+'T'+format( new Date(), 'HH:mm:ss') ), 'dd/MM/yyyy HH:mm'); }

  dateChanged( valor : any){ this.dataInicialFormatada = format( parseISO( valor ), 'dd/MM/yyyy HH:mm'); }
  close(){ this.datetime!.cancel( true ) }
  select(){ this.datetime!.confirm( true ) }

  // TESTE 3
  showPicker3 = false;
  dateChanged3( valor : any ){  this.dataFinalFormatada = format( parseISO( valor ), 'dd/MM/yyyy HH:mm');  }
  clear3(){
    this.dataFinalFormatada = "";
    this.datetime2!.cancel( true )
  }
  close3(){ this.datetime2!.cancel( true ) }
  select3(){  this.datetime2!.confirm( true ) }
  
  teste:any=null;

  // teste 6
  date5:any;

  salvar(){ console.log('VALOR ',this.teste) }

  voltar(){ this.navCtrl.pop() }}
