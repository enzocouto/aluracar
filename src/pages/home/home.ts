import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarroEscolhidoPage} from './../carro-escolhido/carro-escolhido';
import { CarroProvider} from './../../providers/carro/carro';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
 
})
export class HomePage {
  listaCarros: Array<any>;
  endereco:string;
  data:string;
  
  constructor(public navCtrl: NavController,public service: CarroProvider) {
    
    service.getListaCarros().then(data => this.listaCarros = data);
    
    /*
     this.listaCarros.push({"nome":"BMW 120I","preco":120000});
     this.listaCarros.push({"nome":"ONIX 1.6","preco":46000});
     this.listaCarros.push({"nome":"Fiesta 2.0","preco":36000});
     this.listaCarros.push({"nome":"C3 1.0","preco":31000});
     this.listaCarros.push({"nome":"Uno Fire","preco":29000});
     this.listaCarros.push({"nome":"Sentra 2.0","preco":74000});
     this.listaCarros.push({"nome":"Astra Sedan","preco":60000});
     this.listaCarros.push({"nome":"Vectra 2.0 Turbo","preco":88000});
     this.listaCarros.push({"nome":"Hilux 4x4","preco":140000});
     this.listaCarros.push({"nome":"Montana Cabine dupla","preco":72000});
     this.listaCarros.push({"nome":"Outlander 2.4","preco":180000});
     this.listaCarros.push({"nome":"Fusca 1500","preco":7500});
     */
     
     this.endereco = 'Alameda Mauro Zelante, 40 Bl 1 403 Taboão da Serra - SP';
     this.data = this.dataAtualFormatada();
    
  }


  dataAtualFormatada(){
    let data = new Date();
    let dia = data.getDate().toString();
    console.log(dia)
    if (dia.toString().length == 1)
      dia = "0"+dia;
    let mes = data.getMonth()+1+"";
    if (mes.toString().length == 1)
      mes = "0"+mes;
    let ano = data.getFullYear();  
    return dia+"/"+mes+"/"+ano;
}

openPage(carro){
  console.log('vou passar o carro:'+carro.nome+" preco:"+carro.preco);
  
    this.navCtrl.setRoot(CarroEscolhidoPage,{'carro':carro});
}


}
