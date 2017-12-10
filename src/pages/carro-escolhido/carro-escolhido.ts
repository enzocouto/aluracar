import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage} from './../home/home'
import { FinalizaPedidoPage} from './../finaliza-pedido/finaliza-pedido';
/**
 * Generated class for the CarroEscolhidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-carro-escolhido',
  templateUrl: 'carro-escolhido.html',
  
})
export class CarroEscolhidoPage {
  carro:any;
  listaAcessorios:Array<any>=[];
  isMarcado:false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.carro = this.navParams.get('carro');
    this.listaAcessorios = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarroEscolhidoPage');
    console.log(this.carro.nome);
    this.listaAcessorios.push({"isMarcado":false,"nome":"Freio ABS","preco":800});
    this.listaAcessorios.push({"isMarcado":false,"nome":"Ar Condicionado","preco":1000});
    this.listaAcessorios.push({"isMarcado":false,"nome":"MP3 Player","preco":500});
   
  }

  goBack() {
    this.navCtrl.setRoot(HomePage);
  }

  toggleAcessorio(preco,isMarcado){
   console.log(this.carro.preco+" - "+preco+" - "+isMarcado);
    if(isMarcado){
          this.carro.preco = this.carro.preco + preco; 
    }else{
         this.carro.preco = this.carro.preco - preco;
    } 
  }

  encerraPedido(){
    this.navCtrl.setRoot(FinalizaPedidoPage,{"carro":this.carro});
  }

}
