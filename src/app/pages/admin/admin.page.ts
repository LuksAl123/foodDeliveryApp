import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})

export class AdminPage implements OnInit, OnDestroy {

  constructor(
    public authService: AuthService,
    public global: GlobalService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.global.customStatusbar(true);
  }

  logout() {
    this.global.showLoader();
    this.authService.logout().then(() => {
      this.navCtrl.navigateRoot('/login');
      this.global.hideLoader();
    })
    .catch(e => {
      console.log(e);
      this.global.hideLoader();
      this.global.errorToast('Logout Failed! Check your internet connection.');
    });
  }

  ngOnDestroy(): void {
    this.global.customStatusbar();
  }

}
