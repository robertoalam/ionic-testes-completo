import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class AssinaturaService {

  caminho!:string;
  dados!:any;

  constructor() { }

  async arquivoGravar( caminho:string , dados:any ){
    return await Filesystem.writeFile({
      path: caminho.replace(Directory.Documents,''),
      data: dados,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  }

  async arquivoLer( caminho : string ){
    return await Filesystem.readFile({
      path: caminho.replace(Directory.Documents,''),
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  }
}
