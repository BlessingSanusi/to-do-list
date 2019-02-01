import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { CompletedPage } from '../completed/completed';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public Items = [];
  

  constructor(public navCtrl:NavController,public modalCtrl: ModalController){

   
   
 }

 ionViewDidLoad(){
   
 }

 addItem(){
  let addModal = this.modalCtrl.create(AddItemPage);
  addModal.onDidDismiss((item) => {
   
    if(item){
      this.saveItem(item);
    }
  });
  addModal.present();
}

saveItem(item){
  this.Items.push(item);
 
}

viewItem(item){
  this.navCtrl.push(CompletedPage, {
    item: item
  });
 
}

}
  


