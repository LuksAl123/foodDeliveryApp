import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  id = 1;
  paletteToggle = false;

  private router = inject(Router);
  public navCtrl = inject(NavController);

  constructor() {}

  ngOnInit() {
    console.log('tab1 ngoninit');
    this.initColorPalette();
  }

  initColorPalette() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(ev: any) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
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

  navigateByUrl() {
    this.router.navigateByUrl('/tabs/sub-page/' + this.id, { replaceUrl: true });
  }

  sendNavigationExtras() {
    const data = { id: 1, name: 'Coding Technyks' };
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data),
      }
    };
    this.router.navigate(['/', 'tabs', 'tab1', 'home'], navData);
  }

  async share() {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }

  itemCheck(){
    console.log('item visible');
  }

  ionViewWillLeave() {
    console.log('tab1 ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('tab1 ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('tab1 ngondestroy');
  }
}
