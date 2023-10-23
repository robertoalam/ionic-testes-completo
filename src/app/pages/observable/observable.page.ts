import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.page.html',
  styleUrls: ['./observable.page.scss'],
})
export class ObservablePage implements OnInit {
  
  palavras:Array<string> = [];

  constructor() { }

  observer = {
    next: (valor: any) => {
      console.log("NEXT:" ,valor)
      this.palavras.push(valor)
    },
    error: (erro: any) => console.log("ERROR:" ,erro),	
    complete: () => console.log("FIM !!!"),		
  }  

  ngOnInit() {

    
    this.teste1()
  }

  teste1(){
    let obs = this.minhaObservable("Eduardo");
    obs.subscribe( this.observer  )

  }

  teste2(){
    let obs2 = this.usuarioObservable('Admin','scarapa@gmail.com');
    obs2.subscribe( this.observer );
  }


  usuarioObservable(nome: string, email: string): Observable<Usuario> {
    return new Observable((subscriber) => {
      if (nome == 'Admin') {
        let usuario = new Usuario(nome, email);
        subscriber.next(usuario);
        // DEVOLVENTO O TIPO DE OBJETO
        setTimeout(() => { subscriber.next(usuario); }, 1000);

        // DEVOLVENTO O TIPO DE OBJETO
        setTimeout(() => { subscriber.next(usuario); }, 2000);

        // DEVOLVENTO O TIPO DE OBJETO
        setTimeout(() => { subscriber.next(usuario); }, 3000);

        // DEVOLVENTO O TIPO DE OBJETO
        setTimeout(() => { subscriber.next(usuario); }, 400);

        // DEVOLVENTO O TIPO DE OBJETO
        setTimeout(() => { subscriber.complete(); }, 5000);
      } else {
        subscriber.error('ops ... deu ERRO !!!');
      }
    });
  }

  minhaObservable(nome:string) : Observable<string>{
    return new Observable( subscriber => { 
      if( nome == "Eduardo"){
        subscriber.next("olá " +nome );
        subscriber.next("olá novamente " +nome );			
        setTimeout( ()=>{
          subscriber.next("RESPOSTA COM DELAY" +nome );
        },5000)
        subscriber.complete();
      }else{
        subscriber.error("ops ... deu ERRO !!!");
      }
    })
  }
}


export class Usuario {
  nome: string;
  email: string;
  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}