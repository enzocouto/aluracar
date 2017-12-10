import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

/*
  Generated class for the CarroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarroProvider {
  urlService: "https://aluracar.herokuapp.com/";
  constructor(public http: Http) {
    console.log('Hello CarroProvider Provider');
  }

  getListaCarros(){
    return this.http.get(this.urlService)
    .map(res => res.json())
    .toPromise();
  }

  salvarPedido(pedido){
    return this.http.get(this.urlService + "salvarPedido")
    .map(res => res.json())
    .toPromise();
  }

}
