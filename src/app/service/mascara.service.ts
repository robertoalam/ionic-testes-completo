import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MascaraService {

  constructor() { }

  public aplicar( campo:any ) {
    let componente = ( (campo as CustomEvent).target ) as HTMLInputElement 
    
    // PEGANDO AS VARIAVEIS DOS CAMPOS
    let maxLength : number = ( ( ( (campo as CustomEvent).target ) as HTMLInputElement ).maxLength > - 1 ) 
    ?( ( (campo as CustomEvent).target ) as HTMLInputElement ).maxLength 
    : 0;
    
    let max :any;
    if( ( ( (campo as CustomEvent).target ) as HTMLInputElement )['max']?.toString() )  {
      max = parseInt( ( ( (campo as CustomEvent).target ) as HTMLInputElement )['max']?.toString() ) as number
    }
    let min :any;
    if( ( ( (campo as CustomEvent).target ) as HTMLInputElement )['min']?.toString() )  {
      min = parseInt( ( ( (campo as CustomEvent).target ) as HTMLInputElement )['min']?.toString() ) as number
    }

    let valor = ( ( (campo as CustomEvent).target ) as HTMLInputElement ).value
    // TECLANDO BACKSPACE OU DELETE
    if( campo.inputType == 'deleteContentBackward' || campo.inputType == 'deleteContentForward' ) return valor
    let tipo = ( ( (campo as CustomEvent).target ) as HTMLInputElement ).step
    
    // VERIFICANDO QUAL O TIPO DE MASCARA PARA APLICAR
    if( tipo == 'cep'){ return this.maskCEP(valor); }      
    if( tipo == 'cpf'){ return this.maskCPF(valor); }      
    if( tipo == 'cnpj'){ return this.maskCNPJ(valor); }
    if( tipo == 'celular'){ return this.maskCelular(valor); }
    if( tipo == 'celularSemDDD'){ return this.maskCelularSemDDD(valor); }
    if( tipo == 'telefone'){ return this.maskTelefone(valor); }
    if( tipo == 'telefoneSemDDD'){ return this.maskTelefoneSemDDD(valor); }
    if( tipo == 'placa'){ 
      // PLACAS => IZU4I98 IZU-4198
      // VALIDAR QUALQUER PLACA
      if( Number.isInteger(parseInt(valor[0]) ) ) return "";
      return this.maskPlacaAntigaNova( valor );
    }
    if( tipo == 'chassi'){ 
      
      // https://community.blip.ai/duvidas-e-perguntas-4/validacao-de-chassi-2846      
      return valor;
    }    

    if( tipo == 'placaChassi'){ 
      if( !Number.isInteger(parseInt(valor[0]) ) ) {
        return this.maskPlacaAntigaNova( valor )
      }
      return valor;
    }        
    if( tipo == 'strings'){ return this.maskAlfabetico(valor); }
    if( tipo == 'numeros'){ return this.maskNumerico(componente); }
    
    return valor;
  }

  public maxLength(value:string, maxLength:number) {
    if (value.length > maxLength) {
      value = value.slice(0, maxLength)
    }
  }

  /**
   * Recebe o input e o valor maximo de caracteres.
   * @param input 
   * @param max 
   */
  public max(input: { value: string; max: string | any[]; }, max: number) {
    if (input.value.length > max) { input.value = input.value.slice(0, max) }
  }

  public maximo(input: { value: number; }, max: number) {
    if (input.value > max) { input.value = max }
  }

  public minimo(input: { value: number; }, min: number) {
    if (input.value < min) { input.value = min }
  }

  private maskNumerico( componente : HTMLInputElement ){
    
    let maxLength : number = ( componente.maxLength > - 1 ) ? componente.maxLength  : 0;
    let max :any;
    if( componente['max']?.toString() )  {
      max = parseInt( componente['max']?.toString() ) as number
    }
    let min :any;
    if( componente['min']?.toString() )  {
      min = parseInt( componente['min']?.toString() ) as number
    }    

    componente.value = componente.value.slice(0,maxLength).replace(/\D/g, '');
    if( componente.value.length == maxLength){
      if( componente.value < min ) return min
      if( componente.value > max ) return max
    }
    return componente.value
  }

  private maskAlfabetico(value:string){
    return value.replace(/[0-9]/g,'');
  }

  mascaraGenerica(elemento : any, mascara : string , event : KeyboardEvent) {
    var charEspecial = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?.";
    var texto = '';
  
    for (var i = 0; i < elemento.value.length; i++) {
      if (compararTipo(elemento.value[i], mascara[i])) { texto += texto = elemento.value[i]; }
    }
    //SE A TECLA FOR BACKSPACE, DESCONSIDERA O AUTOPRENCHIMENTO
    if (event.keyCode != 8) {
      //CASO O PROXIMO CHARACTER SEJA ESPECIAL(charEspecial), PREENCHE AUTOMATICAMENTE
      var stCharEspecialMascara = (charEspecial.indexOf(mascara[i]) > -1) ? charEspecial.indexOf(mascara[i]) : -1;
      if (stCharEspecialMascara > -1) { texto = texto + mascara[i]; }
    }

    /*
    document.getElementsByName(elemento.name)[0].value = texto.substring(0, mascara.length);
    document.getElementsByName(elemento.name)[0].maxLength = mascara.length;
    */
    function compararTipo(valor1 : any, valor2 : any) {
      return (Number.isInteger(parseInt(valor1)) == Number.isInteger(parseInt(valor2))) ? true : false;
    }
  }

  private maskGenerico(elemento:any, mascara:string) {

    if(elemento.toString().length > mascara.toString().length )  { return elemento.toString().substring(0,7); }
    // DIVIDIR A PLACA EM UMA LISTA DE STRING
    let lista:Array<string> = [];  
    if(elemento.length < 7){
      lista = elemento.toString().split('');
      let temp =  this.replaceAll( lista.splice(0,3 ).toString() , ",","").toString().toUpperCase();
      temp += "-";
      temp += this.replaceAll(lista.splice(0,3 ).toString(),",","").toString().toUpperCase()
      return temp;
    }
    return elemento
  }

  private maskTelefone( value:string ) {
    // (53) 3312-4567
    let temp = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
    return temp;
  }

  private maskTelefoneSemDDD( value:string ) {
    // 3312-4567
    let temp = value
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
    return temp;
  }

  private maskCelular( value:string ) {
    // (53) 99138-4250
    let temp = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
    return temp;
  }

  private maskCelularSemDDD( value:string ) {
    // 99138-4250
    let temp = value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
    return temp;
  }

  private maskCNPJ( value:string ) {
    // 61.204.974/0001-81
    let temp = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
    return temp;
  }

  private maskCPF( value:string ) {
    // 435.571.480-25
    let temp = value.replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
    return temp;
  }

  private maskCEP( value:string ) {
    // 64031-520
    let temp = value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
    return temp;
  }

  private maskPlacaAntigaNova( valor : string ){
    if( valor[4] != undefined && Number.isInteger(parseInt(valor[4]) ) ) {
      return this.maskGenerico(valor,"AAA-9999"); 
    }else if( valor[4] != undefined && !Number.isInteger(parseInt(valor[4]) ) ) {
      return this.maskGenerico(valor,"AAA9A99"); 
    }else{
      return valor;
    }    
  }

  private replaceAll(str: string, find :string, replace:string) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  }
  private escapeRegExp(str:string) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  private compararTipo(valor1:any, valor2:any) {
    return (Number.isInteger(parseInt(valor1)) == Number.isInteger(parseInt(valor2))) ? true : false;
  }

  // private maskPlaca( value:string ) {
  //   // IZU4I98 IZU-4198
  //   let temp = value
  //     .replace(/\[A-Z]{3}[0-9]/, '')
  //   return temp;
  // }

}
