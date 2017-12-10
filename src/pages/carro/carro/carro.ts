import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

/*
  Generated class for the CarroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarroProvider {
  apiUrl = 'https://aluracar.herokuapp.com/';
  constructor(public http: Http) {
    console.log('Hello CarroProvider Provider');
  }

  getListaCarros() {
    return this.http.get(this.apiUrl)
    .map(res => res.json())
    .toPromise();
  }

  salvarPedido(pedido){
    return this.http.get(this.apiUrl+"salvarpedido",pedido).toPromise();
  }

}
