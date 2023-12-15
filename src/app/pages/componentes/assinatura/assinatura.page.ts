import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import SignaturePad from 'signature_pad';
import { AssinaturaService } from 'src/app/service/assinatura.service';

@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.page.html',
  styleUrls: ['./assinatura.page.scss'],
})
export class AssinaturaPage implements OnInit {
  
  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl! : ElementRef ;
  signatureImg!: string;
  
  file:any = null;
  path: string = "";
  arquivo:any;
  arquivoNome:string = "";
  arquivoCaminho:string = "";
  arquivoImagem:string = "";

  constructor( 
    private modalCtrl:ModalController,
    public navParams: NavParams,
    private assinaturaService:AssinaturaService,
    private navCtrl:NavController,
    ) { 

    this.arquivoNome = this.buscarNomeArquivo();
    this.arquivoCaminho = 'bmmob/'+this.arquivoNome;
    // console.log('ARQUIVO NOME ',this.arquivoNome)
    // console.log('ARQUIVO CAMINHO ',this.arquivoCaminho)
    
    this.file = this.navParams.data['file'];
  }

  ngOnInit() {
    this.arquivoImagem = ( this.file != null) ? this.file.data : null;
  }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    // console.log(event);
  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
    this.arquivo = "";
    this.arquivoImagem = "";
    this.file = null;
  }

  async salvar() {

    this.file = await this.assinaturaService.arquivoGravar( this.arquivoCaminho , this.signaturePad.toDataURL() );
    console.log('FILE SALVAR ',this.file)
    let fileImagem = await this.assinaturaService.arquivoLer( this.file.uri )
    this.arquivoImagem = fileImagem.data;
    return this.modalCtrl.dismiss( this.file )
    
  }
  

  async lerArquivo(){
    let arquivo = this.assinaturaService.arquivoLer( this.file.uri  )
  }

  voltar(){ return this.navCtrl.back() }
  seleciona() { return this.modalCtrl.dismiss( this.file ) }
  
  private buscarNomeArquivo(){
    let dataTruncada = new Date().toISOString().replace(/\D/g, '').substring(0,14);
    return "teste".replace(/\s/g, "").toLowerCase() + dataTruncada + ".png";
  }
}
