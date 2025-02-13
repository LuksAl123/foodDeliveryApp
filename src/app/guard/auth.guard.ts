import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { ProfileService } from '../services/profile/profile.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.checkAuth().then(id => {
      console.log('auth guard checking id: ', id);
      if(id) {
        // get profile
        this.profileService.getProfile().then(profile => {
          console.log('user profile', profile);
          if(profile && profile?.type == 'user') {
            console.log('aqui1');
            return true;
          } else if(profile && profile?.type == 'admin') {
            console.log('aqui2');
            this.router.navigateByUrl('/admin');
            return false;
          } else {
            console.log('aqui3');
            this.authService.logout();
            this.router.navigateByUrl('/login');
            return false;
          }
        })
        .catch(e => {
          console.log(e);
          this.authService.logout();
          this.router.navigateByUrl('/login');
          return false;
        });
        return true;
      } else {
        // redirect to login page
        this.router.navigateByUrl('/login');
        return false;
      }
    })
    .catch(e => {
      console.log(e);
      this.router.navigateByUrl('/login');
      return false;
    });
  }
}
