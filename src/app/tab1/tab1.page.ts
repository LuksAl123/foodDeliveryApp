import { Component, inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  id = 1;

  private router = inject(Router);

  constructor() {}

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
}
