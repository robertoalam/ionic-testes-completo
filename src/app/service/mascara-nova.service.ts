import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascaraNovaService {

  constructor() { }

  max(campo:any , maxLength : number){
    return campo.value = campo.value.toString().slice(0, maxLength)
  }
}
