import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';




@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  subject: string;
  date : string;
  time: string;
  

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  saveItem(){
 
    let newItem = {
      subject: this.subject,
      
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }
 
}