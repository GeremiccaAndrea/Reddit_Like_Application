import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>(); // creazione array

  Spammer(label1:HTMLInputElement, spam:HTMLInputElement): boolean{ // 

    let cont = Number(spam.value); // Converte stringhe in numeri

    for(let i:number =0; i< cont; i++)  // crea un ciclo for da 0 fino al numero inseirto dall'utente
 {
  this.articles.push(label1.value);  // Aggiungere dati a un array
 }

 return false
  }
}

