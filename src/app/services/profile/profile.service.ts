import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private _profile = new BehaviorSubject<User>(null);

  get profile() {
    return this._profile.asObservable();
  }

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) { }

  async getProfile() {
    try {
      const uid = await this.authService.getId();
      let profile: any = await (await (this.apiService.collection('users').doc(uid).get().toPromise())).data();
      // let documentSnapshot = await this.apiService.collection('users').doc(uid).get().toPromise();
      // let profile: any = documentSnapshot.data();
  
      // console.log('Document Snapshot:', documentSnapshot);
      // if (!profile) {
      //   console.error('Profile not found for UID:', uid);
      //   return;
      // }
      console.log('profile: ', profile);
      const data = new User(
        profile.email,
        profile.phone,
        profile.name,
        uid,
        profile.type,
        profile.status
      );
      this._profile.next(data);
      return data;
    } catch(e) {
      throw(e);
    }
  }

  async updateProfile(profile, param) {
    try {
      const uid = await this.authService.getId();
      const result = await this.apiService.collection('users').doc(uid).update(param);
      const data = new User(
        param.email,
        param.phone,
        profile.name,
        profile.uid,
        profile.type,
        profile.status
      );
      this._profile.next(data);
      return data;
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  async updateProfileWithEmail(profile, param, password) {
    try {
      await this.authService.updateEmail(profile.email, param.email, password);
      await this.updateProfile(profile, param);
      return profile;
    } catch(e) {
      throw(e);
    }
  }

}
