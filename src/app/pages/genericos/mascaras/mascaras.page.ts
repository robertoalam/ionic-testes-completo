import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { MascaraService } from 'src/app/service/mascara.service';
import { MascaraNovaService } from 'src/app/service/mascara-nova.service';
import { MascaraVeiculoPage } from './veiculo/veiculo.component';
import { MascaraDocumentoPage } from './documento/documento.component';
import { MascaraTelefonePage } from './telefone/telefone.component';
import { validarCPF } from 'src/app/service/validar/validar-cpf';

@Component({
  selector: 'app-mascaras',
  templateUrl: './mascaras.page.html',
  styleUrls: ['./mascaras.page.scss'],
})
export class MascarasPage implements OnInit {
  cpf:string = "";
  cpfFlag : boolean = true;
  
  cnpj:string = "";
  dataBrazil:string="";
  dataHoraBrazil:string="";
  cep:string = "";
  // celular:string = "";
  // telefone:string = "";
  // celularSemDDD:string = "";
  // telefoneSemDDD:string = "";
  // placa:string = "";
  somenteString:string = "";
  somenteNumeros:string = "";
  idade!:number;
  itens:any = [ ];
  // itens:any = [ 
  //   {label:'CEP',name:'cep',mask:'cep',metodo: this.mascararCEP($event) },
  //   {label:'CPF',name:'cpf',mask:'cpf',metodo: this.mascararCPF($event) },
  // ];

  constructor( 
    private mascaraService:MascaraService,
    public mascaraNovaService: MascaraNovaService,
    public navCtrl:NavController,
    private modalController:ModalController,
  ) { 

  }

  ngOnInit(){
    console.log('ngOnInit')
  }
  
  async navegar(modulo : string){
    let componente :any;
    if(modulo == 'veiculo'){
      componente = MascaraVeiculoPage;
    }else if(modulo == 'documento'){
      componente = MascaraDocumentoPage;
    }else if(modulo == 'telefonia'){
      componente = MascaraTelefonePage;
    }
    let modal = await this.modalController.create({component:componente});
    modal.present();

    const { data, role } = await modal.onDidDismiss();
    if (data){
      console.log(`RETORNO TELA ${modulo} ${data}`,)
    }
  }

  mascararCPF( el: any ){
    this.cpf = this.mascaraService.aplicar( el )
    
    
  }
  
  mascararCNPJ( el: any ){
    this.cnpj = this.mascaraService.aplicar( el )
  }

  async navegarMascaraVeiculoPage(){
    let modal = await this.modalController.create({component:MascaraVeiculoPage});
    modal.present();

    const { data, role } = await modal.onDidDismiss();
    if (data){
      console.log('RETORNO TELA MASCARA VEICULO ',data)
    }
  }

  mascararDataBrazil( campo:any  ){
    let componente = ( ( (campo as CustomEvent).target ) as HTMLInputElement )
    this.dataBrazil = componente.value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
  }

  mascararDataHoraBrazil( el:any ){}
  mascararCEP( el:any ){ this.cep = this.mascaraService.aplicar( el ) }
  // mascararCPF( el:any ){ this.cpf = this.mascaraService.aplicar( el ) }
  // mascararCNPJ( el:any ){ this.cnpj = this.mascaraService.aplicar( el ) }
  // mascararCelular( el:any ){ this.celular = this.mascaraService.aplicar( el ) }
  // mascararTelefone( el:any ){ this.telefone = this.mascaraService.aplicar( el ) }
  // mascararCelularSemDDD( el:any ){ this.celularSemDDD = this.mascaraService.aplicar( el ) }
  // mascararTelefoneSemDDD( el:any ){ this.telefoneSemDDD = this.mascaraService.aplicar( el ) }
  // mascararPlaca( el:any ){ this.placa = this.mascaraService.aplicar( el ) }
  mascararSomenteString( el:any ){ this.somenteString = this.mascaraService.aplicar( el ) }
  mascararSomenteNumero( el:any ){ this.somenteNumeros = this.mascaraService.aplicar( el ) }
  marscararIdade(el:any ){ this.idade = this.mascaraService.aplicar( el ) }

  voltar(){ this.navCtrl.pop() }

  validateCpf(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');
    
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    let sum = 0;
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
  
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }
  
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
  
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    return remainder === parseInt(cpf.substring(10, 11));
  }
}
