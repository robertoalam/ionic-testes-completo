import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ListaObjetoService {

  constructor(
    private http:HttpClient,
  ) { 

  }

  getListaObjetos(){
    return this.http.get('assets/database/lista-objetos.json');
  }

  getListaObjetosAtributos(){
    return this.http.get('assets/database/lista-objetos-atributos.json');
  }
}
