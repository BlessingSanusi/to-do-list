import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CompletedPage } from '../completed/completed';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CompletedPage;
  

  constructor() {

  }
}
