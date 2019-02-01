import { Component } from '@angular/core';
import {  NavParams  } from 'ionic-angular';


/**
 * Generated class for the CompletedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 @Component({
  selector: 'page-completed',
  templateUrl: 'completed.html',
})
export class CompletedPage {
  subject;
  

  constructor(public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    this.subject = this.navParams.get('item').subject;
    
  }

}
