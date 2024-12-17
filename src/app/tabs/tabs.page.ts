import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  ionViewWillEnter() {
    console.log('tabs ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('tabs ionViewDidEnter');
  }

}
