import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Chemi';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Persona';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Chemi'];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    'other': 'Tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // Json Pipe - KeyValue Pipe
  public person = {
    name: 'Chemi',
    age: '31',
    address: 'Madrid, Spain'
  }


  // Async Pipe
  public myObservableTimer = interval(2000);
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  });
}
