import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, ViewEncapsulation , NgModule, forwardRef} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-botao-modal-lista',
  templateUrl: './botao-modal-lista.component.html',
  styleUrls: ['./botao-modal-lista.component.scss'],
  
  // standalone:true,
  // imports:[ReactiveFormsModule,FormsModule,CommonModule,IonicModule],
  // encapsulation: ViewEncapsulation.None,
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],  
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BotaoModalListaComponent),
      multi: true
    }
  ],
})


export class BotaoModalListaComponent implements ControlValueAccessor{
  
  @Input() lista: any;
  @Input() listaSelecionada: any;
  @Input() label: string = "";
  @Input() icone : any = '';
  @Input() color : any = '';
  @Input() valor : any = '';
  
  constructor() { }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    console.log("TOUCH 1")
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  onTouch: any = () => {
    console.log("TOUCH 2")
  };

  ngOnInit() {
    console.log("LISTA ",this.lista)
    console.log("LISTA SELECIONADA",this.listaSelecionada)
    console.log("LABEL ",this.label)
    console.log("VALOR ",this.valor)
    console.log("COLOR ",this.color)
  }

}
