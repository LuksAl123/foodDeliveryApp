import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AddressService {

  radius = 7; // in km
  private _addresses = new BehaviorSubject<Address[]>([]);
  private _addressChange = new BehaviorSubject<Address>(null);

  get addresses() {
    return this._addresses.asObservable();
  }

  get addressChange() {
    return this._addressChange.asObservable();
  }

  constructor(
    private authService: AuthService,
    private api: ApiService
  ) { }

  async getUid() {
    return await this.authService.getId();
  }

  async getAddresses(limit?) {
    try {
      const uid = await this.getUid();
      const addressRef = this.api.collection('address').doc(uid).collection('all');
      let allAddress: Address[] = addressRef;
      console.log(allAddress);
      if(limit) {
        let address: Address[] = [];
        let length = limit;
        if(allAddress.length < limit) length = allAddress.length;
        for(let i = 0; i < length; i++) {
          address.push(allAddress[i]);
        }
        allAddress = address;
      }
      this._addresses.next(allAddress);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  async addAddress(param) {
    try {
      const uid = await this.getUid();
      const currentAddresses = this._addresses.value;
      const data = new Address(
        uid,
        param.title,
        param.address,
        param.landmark,
        param.house,
        param.lat,
        param.lng
      );
      let addressData = Object.assign({}, data);
      delete addressData.id;
      const response = await this.api.collection('address').doc(uid).collection('all').add(addressData);
      console.log('response: ', response);
      const id = await response.id;
      const address = {...addressData, id};
      currentAddresses.push(address);
      this._addresses.next(currentAddresses);
      this._addressChange.next(address);
    } catch(e) {
      throw(e);
    }
  }

  updateAddress(id, param) {
    param.id = id;
    let currentAddresses = this._addresses.value;
    const index = currentAddresses.findIndex(x => x.id == id);
    const data = new Address(
      id,
      param.user_id,
      param.title,
      param.address,
      param.landmark,
      param.house,
      param.lat,
      param.lng
    );
    currentAddresses[index] = data;
    this._addresses.next(currentAddresses);
    this._addressChange.next(data);
  }

  deleteAddress(param) {
    let currentAddresses = this._addresses.value;
    currentAddresses = currentAddresses.filter(x => x.id != param.id);
    this._addresses.next(currentAddresses);
  }

  changeAddress(address) {
    this._addressChange.next(address);
  }

  async checkExistAddress(location) {
    console.log('check exist address: ', location);
    let loc: Address = location;
    const address = await this.api.addresses.find(x => x.lat === location.lat && x.lng === location.lng);
    if(address) loc = address;
    console.log(loc);
    this.changeAddress(loc);
    // if(address) {
    //   return true;
    // } else return null;
    // if(!address) 
    // this.changeAddress(address);
    // return address;
  }
 
}
