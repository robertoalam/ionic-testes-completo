import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewEncapsulation, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-generico-checkbox',
  templateUrl: './modal-generico-checkbox.component.html',
  styleUrls: ['./modal-generico-checkbox.component.scss'],
  imports:[ReactiveFormsModule,FormsModule,CommonModule,IonicModule],
  standalone:true,
  encapsulation: ViewEncapsulation.None,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],  
})
export class ModalGenericoCheckboxComponent  implements OnInit {

  titulo: string = "";
  lista: any = [];
  listaSearch: any = [];
  listagem: any = [];
  listaSelecionada: any = [];
  flagSomenteVisualizar: boolean = false;

  campo: string;
  buscando = false;
  modalService: any;

  constructor(
    public navParams: NavParams,
    public modalController: ModalController
  ) {
    this.titulo = ( navParams.data['titulo'] != undefined ) ? navParams.data['titulo'] : "Selecionar na lista";
    this.lista = navParams.data['lista'];
    this.listaSelecionada = navParams.data['listaSelecionada'];
    this.campo = navParams.data['campo'];
  }

  ngOnInit() { 
    this.carregaLista(); 
  }

  carregaLista() {
    this.listagem = this.lista.map((item1: any) => {
      this.listaSelecionada.forEach((...item2: any) => {
        const [a] = item2;
        if (item1.id == a[this.campo]) {
          item1.checked = true;
        }
      });
      return item1;
    });
    if (!this.listagem) return this.modalService.showAlertErro(["ERRO NA LISTAGEM."]);
  }

  selTodos(evento: any) {
    this.listagem.forEach((item: any) => {
      item.checked = (evento.detail.checked) ? true : false;
      this.setarItemLista(item);
    });
  }

  setarItemLista(selecionado: any) {
    let selecionadoArray = this.converterObjetoInArray(selecionado)
    const index = this.listaSelecionada.findIndex( (item: any) => {
      let itemArray = this.converterObjetoInArray(item)
      //SENAO EXISTIR O CAMPO FAZ O COMPARATIVO POR ELE
      if (itemArray[this.campo] == undefined) {
        return itemArray['id'] == selecionadoArray['id'];
      } else {
        return itemArray[this.campo] == selecionadoArray['id'];
      }
    });

    if (selecionado.checked) {
      if (index == -1) this.listaSelecionada.push(selecionado);
    } else {
      this.listaSelecionada.splice(index , 1);
    }
  }

  converterObjetoInArray(obj: any) {
    let item: any = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if( key != '_id' ) item[key] = obj[key];
      }
    }
    return item;
  }

  voltar() { this.modalController.dismiss({'listaModalSelecionada':this.listaSelecionada}); }
}
