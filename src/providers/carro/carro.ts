import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http,RequestOptions,Headers} from '@angular/http';

/*
  Generated class for the CarroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarroProvider {

  urlService: string;

  constructor(public http: Http) {
    this.http = http;
    this.urlService = "https://aluracar.herokuapp.com/";
   
  }

  getListaCarros(){
    return this.http.get(this.urlService)
    .map(res => res.json())
    .toPromise();
  }

  salvarPedido(pedido){
  /*
    let body = JSON.stringify(pedido),
    headers = new Headers({'Content-Type': 'application/json'}),
    options = new RequestOptions({headers: headers});
    return this.http.post(this.urlService="salvarPedido", body, options).toPromise();
*/  

    return this.http.get(this.urlService+"salvarpedido",pedido)
    .map(res => res.json())
    .toPromise();
  }

}
