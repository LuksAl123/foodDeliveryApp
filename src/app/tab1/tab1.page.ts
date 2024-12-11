import { Component, inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private router = inject(Router);

  constructor() {}

  navigate() {
    this.router.navigate(['/', 'tabs', 'sub-page', 1]);
  }

  sendNavigationExtras(){
    const data = { id: 1, name: 'Coding puma', };
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data), 
      }
    };
    this.router.navigate(['/', 'tabs', 'tab1', 'home'], navData);
  }
}
