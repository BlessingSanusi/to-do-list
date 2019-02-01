import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item'
import { CompletedPage } from '../pages/completed/completed'
import { DataProvider } from '../providers/data/data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AddItemPage,
    CompletedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AddItemPage,
    CompletedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
    
  ]
})
export class AppModule {}
