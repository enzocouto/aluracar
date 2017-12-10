import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { CarroEscolhidoPage} from './../carro-escolhido/carro-escolhido';
import {Pedido} from "./../../entity/pedido";
import { CarroProvider} from './../../providers/carro/carro';
@Component({
  selector: 'page-finaliza-pedido',
  templateUrl: 'finaliza-pedido.html',
})
export class FinalizaPedidoPage {
  carro:any;
  pedido:Pedido;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public service:CarroProvider) {
    this.carro = this.navParams.get("carro");
    this.pedido = new Pedido();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalizaPedidoPage');
  }

  goBack(){
    this.navCtrl.setRoot(CarroEscolhidoPage, {"carro": this.carro});
  }

  finalizar(nome){

    let pedidoFinalizado = {
      params:{
        "carro":this.carro.nome,
        "preco":this.carro.preco,
        "nome":this.pedido.nome,
        "endereco":this.pedido.endereco,
        "email":this.pedido.email
      }
    }

    this.service.salvarPedido(pedidoFinalizado).then(data => {
      let alert = this.alertCtrl.create({
        title: 'Parabéns!',
        subTitle: 'O pedido do seu '+nome+" foi finalizado com sucesso",
        buttons: ['OK']
      });
      alert.present();
    }).catch(erro =>{
      console.log(erro);
    });

   
  }
}
