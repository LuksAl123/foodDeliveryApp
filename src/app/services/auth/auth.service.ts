import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private storage: StorageService,
    private fireAuth: AngularFireAuth,
    private adb: AngularFirestore
  ) { }

  async login(email: string, password: string): Promise<any> {
    try {
      const response = await this.fireAuth.signInWithEmailAndPassword(email, password);
      console.log(response);
      if(response.user) {
        this.setUserData(response.user.uid);
      }
    } catch(e) {
      throw(e);
    }
  }

  async getId() {
    return (await this.storage.getStorage('uid')).value;
  }

  setUserData(uid) {
    this.storage.setStorage('uid', uid);
  }

  async register(formValue) {
    // return await this.storage.setStorage('uid','ASDASDASDOIJQOIEJ');
    try {
      const registeredUser = await this.fireAuth.createUserWithEmailAndPassword(formValue.email, formValue.password);
      console.log('register user: ', registeredUser);
      const data = {
        uid: registeredUser.user.uid,
        email: formValue.email,
        phone: formValue.phone,
        name: formValue.name,
        type: 'user',
        status: 'active'
      };
      await this.adb.collection('users').doc(registeredUser.user.uid).set(data);
      await this.setUserData(registeredUser.user.uid);
    } catch(e) {
      throw(e);
    }
  }

  async resetPassword(email: string) {
    return await email;
  }

  async logout() {
    try {
      await this.fireAuth.signOut();
      return this.storage.removeStorage('uid');
    } catch(e) {
      throw(e);
    }
  }
}
