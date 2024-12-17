import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  id = 1;

  private router = inject(Router);
  public navCtrl = inject(NavController);

  constructor() {}

  ngOnInit() {
    console.log('tab1 ngOnInit');
  }

  ionViewWillEnter() {
    console.log('tab1 ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('tab1 ionViewDidEnter');
  }

  navigate() {
    this.router.navigate(['/', 'tabs', 'sub-page', this.id]);
  }

  navigateByUrl(){
    this.router.navigateByUrl('/tabs/sub-page/' + this.id, { replaceUrl: true });
  }

  sendNavigationExtras(){
    const data = { id: 1, name: 'Coding puma' };
    const navData: NavigationExtras = {
      queryParams: {
        routeData: JSON.stringify(data),
      }
    };
    console.log(navData);
    this.router.navigate(['/', 'tabs', 'tab1', 'home'], navData);
  }

  ionViewWillLeave() {
    console.log('tab1 ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('tab1 ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('tab1 ngOnDestroy');
  }

}
