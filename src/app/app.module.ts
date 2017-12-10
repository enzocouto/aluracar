import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {CarroEscolhidoPage} from './../pages/carro-escolhido/carro-escolhido';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FinalizaPedidoPage} from '../pages/finaliza-pedido/finaliza-pedido';
import { CarroProvider } from '../providers/carro/carro';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarroEscolhidoPage,
    FinalizaPedidoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarroEscolhidoPage,
    FinalizaPedidoPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarroProvider
    
  ]
})
export class AppModule {}
