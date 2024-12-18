import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {
    addIcons({
      triangle,
      ellipse,
      square,
    });
  }

  ionViewWillEnter() {
    console.log('tabs ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('tabs ionViewDidEnter');
  }

}
